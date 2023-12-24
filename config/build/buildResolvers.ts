import { Configuration } from "webpack";
import { TyBuildOptions } from "./types/types";

export function buildResolvers(options: TyBuildOptions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        }
    };
}