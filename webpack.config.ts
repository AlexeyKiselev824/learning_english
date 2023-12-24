import path from 'path';
import type { Configuration } from "webpack";
import { buildWebpack } from './config/build/buildWebpack';
import { TyBuildMode } from './config/build/types/types';

type TyEnvVariables = {
    mode: TyBuildMode;
    port: number;
    analyzer?: boolean;
}

export default (env: TyEnvVariables) => {
    const paths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, './public'),
        src: path.resolve(__dirname, './src'),
    };

    const config: Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
    });

    return config;
};
