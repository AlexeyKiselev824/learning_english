import { Configuration } from "webpack";
import {
    buildDevServer,
    buildLoaders,
    buildPlugins,
    buildResolvers
} from "./build";
import { TyBuildOptions } from "./types";

export default function buildWebpack(options: TyBuildOptions): Configuration {
    const { mode, paths } = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        // в devtool понятный код
        // devtool: isDev ? 'eval-cheap-source-map' : 'source-map',
        devtool: isDev && 'eval-cheap-source-map',
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}