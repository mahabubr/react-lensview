# LensView

`LensView` is a React component that allows users to view images with zoom and drag functionalities. This component enhances image viewing experiences by providing intuitive controls for navigation and manipulation.

## Features

- Zoom in and out on images using mouse scroll
- Drag images around when zoomed in
- Navigate between images using next and previous buttons
- Close the image view with a simple button click

## Installation

To install the `LensView` component, use npm or yarn:

```bash
npm install lens-view
```

or

```bash
yarn add lens-view
```

## Usage

Here’s a simple example of how to use the `LensView` component in your React application:

### JSX Example

```
import React, { useState } from 'react';
import LensView from 'lens-view';

const App = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageArray = [
    {
      src: 'image-1.jpg',
      alt: 'Image 1',
    },
    {
      src: 'image-2.png',
      alt: 'Image 2',
    },
    {
      src: 'image-3.jpg',
      alt: 'Image 3',
    },
  ];

  const openImage = (index) => {
    setCurrentImageIndex(index);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <LensView
      images={imageArray}
      isImageOpen={isImageOpen}
      currentImageIndex={currentImageIndex}
      openImage={openImage}
      closeImage={closeImage}
      controls={{ enableZoom: true, enableDrag: true }}
    >
      <div className="thumbnails">
        {imageArray.map((image, index) => (
          <div className="thumbnail" key={index} onClick={() => openImage(index)}>
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
          </div>
        ))}
      </div>
    </LensView>
  );
};

export default App;
```

### TypeScript Example (TSX)

```
import React, { useState } from 'react';
import LensView from 'lens-view';

const App: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

   const imageArray = [
    {
      src: 'image-1.jpg',
      alt: 'Image 1',
    },
    {
      src: 'image-2.png',
      alt: 'Image 2',
    },
    {
      src: 'image-3.jpg',
      alt: 'Image 3',
    },
  ];

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <LensView
      images={imageArray}
      isImageOpen={isImageOpen}
      currentImageIndex={currentImageIndex}
      openImage={openImage}
      closeImage={closeImage}
      controls={{ enableZoom: true, enableDrag: true }}
    >
      <div className="thumbnails">
        {imageArray.map((image, index) => (
          <div className="thumbnail" key={index} onClick={() => openImage(index)}>
            <img src={image.src} alt={image.alt} className="thumbnail-image" />
          </div>
        ))}
      </div>
    </LensView>
  );
};

export default App;
```

## Props

### LensView Component Props

| Prop              | Type                           | Required | Default Value                            | Description                                                                                 |
| ----------------- | ------------------------------ | -------- | ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| images            | { src: string; alt: string }[] | Yes      | N/A                                      | An array of image objects containing `src` (URL of the image) and `alt` (alternative text). |
| children          | React.ReactNode                | Yes      | N/A                                      | Child components or elements to be displayed alongside the image viewer.                    |
| isImageOpen       | boolean                        | Yes      | N/A                                      | A flag indicating whether the image viewer is open or closed.                               |
| currentImageIndex | number                         | Yes      | N/A                                      | The index of the currently displayed image in the `images` array.                           |
| openImage         | (index: number) => void        | Yes      | N/A                                      | Function to open an image at a specified index.                                             |
| closeImage        | () => void                     | Yes      | N/A                                      | Function to close the image viewer.                                                         |
| controls          | IControls                      | No       | { enableZoom: false, enableDrag: false } | An object to configure controls; includes `enableZoom` and `enableDrag` flags.              |

### Explanation of the Props

`images`: This prop accepts an array of image objects. Each object must contain a src string for the image URL and an alt string for alternative text, which is important for accessibility.

`children`: The children prop allows you to pass any valid React elements that will be displayed alongside the image viewer, such as thumbnails or additional content.

`isImageOpen`: A boolean that determines if the image viewer is currently displayed. It should be true when an image is selected.

`currentImageIndex`: The index of the currently displayed image. This is necessary for navigating between images.

`openImage`: A function that is called with an index to open a specific image in the viewer.

`closeImage`: A function that closes the image viewer when called.

`controls`: An optional prop that configures whether zoom and drag functionalities are enabled. If not provided, both features are disabled by default.

## License

Feel free to submit issues or pull requests for improvements and bug fixes!

```
This Markdown document provides a comprehensive overview of your LensView component, guiding users on how to install, use, and customize it in their projects. You can modify the sections as needed to suit your specific requirements or add any additional information.
```
