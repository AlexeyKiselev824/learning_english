declare module '*.module.scss' {
    type TyClassNames = {
        [className: string]: string;
    };
    const classNames: TyClassNames;
    export = classNames;
}

declare module '*.jpg';
declare module '*.svg' {
    import React from 'react';
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __DEV__: boolean;
