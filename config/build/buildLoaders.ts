import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import createTransformer from "./customPlugins/createTransformer";
import { TyBuildOptions } from "../types";

const removeDataTestIdTransformer = createTransformer({ props: ['data-testid'] });

export function buildLoaders({ mode }: TyBuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development';

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    };

    const cssLoaderModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        },
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    // hot loader
                    getCustomTransformers: () => ({
                        before: [
                            isDev && ReactRefreshTypeScript(),
                            !isDev && removeDataTestIdTransformer,
                        ].filter(Boolean),
                    }),
                    transpileOnly: isDev
                }
            }
        ],
        exclude: /node_modules/,
    };

    return [
        assetLoader,
        svgrLoader,
        cssLoader,
        tsLoader,
    ];
}