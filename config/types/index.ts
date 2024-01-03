export type TyBuildMode = 'production' | 'development';

export type TyBuildPaths = {
    entry: string;
    html: string;
    output: string;
    public: string;
    src: string;
};

export type TyBuildOptions = {
    port: number;
    paths: TyBuildPaths;
    mode: TyBuildMode;
    analyzer?: boolean;
};
