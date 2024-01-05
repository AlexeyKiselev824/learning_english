import { Configuration } from 'webpack';
import { TyBuildOptions } from '../types';

export function buildResolvers(options: TyBuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            src: options.paths.src,
        },
    };
}
