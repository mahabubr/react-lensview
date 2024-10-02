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
npm install react-lensview
```

or

```bash
yarn add react-lensview
```

## Usage

Here’s a simple example of how to use the `LensView` component in your React application:

### TypeScript Example (.ts or .tsx)

- Step 1: Import Packages
```
// Import React and required hooks
import React, { useState } from 'react';

// Import LensView package
import LensView from 'lens-view';
```

- Step 2: Create the Image Array
```
// Image array with src, alt and other attributes
const imageArray = [
  { src: 'image-1.jpg', alt: 'Image 1', name: "name-1" },
  { src: 'image-2.jpg', alt: 'Image 2', name: "name-2" },
  { src: 'image-3.jpg', alt: 'Image 3', name: "name-3" },
];
```

- Step 3: Create the Lensview Component

```
const App: React.FC = () => {
  // State to track if the image is open
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);

  // State to track which image is currently selected
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Function to open a specific image by index
  const openImage = (index: number) => {
    setCurrentImageIndex(index); // Set the current image to the clicked index
    setIsImageOpen(true);        // Open the image
  };

  // Function to close the image
  const closeImage = () => {
    setIsImageOpen(false);       // Close the image
  };

  return (
    // Pass necessary props to LensView
    <LensView
      images={imageArray}                  // Image array to display
      isImageOpen={isImageOpen}            // Modal open state
      currentImageIndex={currentImageIndex} // Track the currently active image
      openImage={openImage}                // Function to open images
      closeImage={closeImage}              // Function to close images
      controls={{ enableZoom: true, enableDrag: true }} // Enable zoom and drag controls
    >
      {/* Render the each image */}
      <div>
        {imageArray.map((image, index) => (
          <div key={index} onClick={() => openImage(index)}>
            <img src={image.src} alt={image.alt} />
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
