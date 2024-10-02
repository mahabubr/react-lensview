import { useState } from "react";
import "./LensView.css";

interface IControls {
  enableZoom?: boolean;
  enableDrag?: boolean;
}

interface IProps {
  images: { src: string; alt: string }[];
  children: React.ReactNode;
  isImageOpen: boolean;
  currentImageIndex: number;
  openImage: (index: number) => void;
  closeImage: () => void;
  controls?: IControls;
}

const LensView = ({
  images,
  children,
  isImageOpen,
  currentImageIndex,
  openImage,
  closeImage,
  controls = { enableZoom: false, enableDrag: false },
}: IProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const zoomWithScroll = (event: React.WheelEvent) => {
    if (controls.enableZoom) {
      if (event.deltaY < 0) {
        setScale((prevScale) => Math.min(prevScale + 0.2, 3));
      } else {
        setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
      }
    }
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const showNextImage = () => {
    openImage((currentImageIndex + 1) % images.length);
    resetZoom();
  };

  const showPrevImage = () => {
    openImage(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
    resetZoom();
  };

  const handleClose = () => {
    closeImage();
    resetZoom();
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    if (controls.enableDrag) {
      setIsDragging(true);
      const offsetX = event.clientX - position.x;
      const offsetY = event.clientY - position.y;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (isDragging) {
          setPosition({
            x: moveEvent.clientX - offsetX,
            y: moveEvent.clientY - offsetY,
          });
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  return (
    <>
      <div>{children}</div>
      {isImageOpen && (
        <div
          className="modal-backdrop"
          onWheel={zoomWithScroll}
          onDoubleClick={resetZoom}
        >
          <div className="modal">
            <div
              className="modal-image-container"
              style={{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onMouseDown={handleMouseDown}
            >
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="modal-image"
              />
            </div>
          </div>

          <div className="">
            <button className="preview-button" onClick={showPrevImage}>
              {/* Left arrow SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M15 18l-6-6 6-6v12z" />
              </svg>
            </button>
            <button className="next-button" onClick={showNextImage}>
              {/* Right arrow SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M9 18l6-6-6-6v12z" />
              </svg>
            </button>
            {/* Close SVG Icon */}
            <button className="close-button" onClick={handleClose}>
              {/** Close icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M18.36 6.64L17 5l-6 6-6-6-1.36 1.36L10.64 12l-6 6L5 19l6-6 6 6 1.36-1.36-6-6 6-6z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LensView;
