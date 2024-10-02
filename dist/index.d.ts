import * as react_jsx_runtime from 'react/jsx-runtime';

interface IControls {
    enableZoom?: boolean;
    enableDrag?: boolean;
}
interface IProps {
    images: {
        src: string;
        alt: string;
    }[];
    children: React.ReactNode;
    isImageOpen: boolean;
    currentImageIndex: number;
    openImage: (index: number) => void;
    closeImage: () => void;
    controls?: IControls;
}
declare const LensView: ({ images, children, isImageOpen, currentImageIndex, openImage, closeImage, controls, }: IProps) => react_jsx_runtime.JSX.Element;

export { LensView as default };
