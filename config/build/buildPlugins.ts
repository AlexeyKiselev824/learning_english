import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { TyBuildOptions } from "./types/types";

export function buildPlugins({ mode, paths, analyzer }: TyBuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico'),
        }),
        new DefinePlugin({
            __DEV__: isDev,
        }),
    ];

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        );
    } else {
        // hot loader
        plugins.push(new ReactRefreshWebpackPlugin());
        // для проверки типов, если отключили проверку во время сборки
        // сомнительно, но ок. (лучше во время dev проверять через checkts)
        // plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}