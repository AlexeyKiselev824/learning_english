import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { TyBuildOptions } from '../types';

export function buildDevServer({ port }: TyBuildOptions): DevServerConfiguration {
    return {
        port: port ?? 3001,
        open: true,
        //  Если раздавать статику через nginx то надо делать проксирование на index.html
        historyApiFallback: true,
        // обновлять код без перезагрузки страницы
        hot: true,
    };
}
