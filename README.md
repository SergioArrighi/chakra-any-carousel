
# Chakra UI React Any Carousel

<a alt="ChakraUI logo" href="https://github.com/chakra-ui/chakra-ui"  target="_blank" rel="noreferrer"><img  src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"  width="200"></a>

Carousel animation for any provided React component

![chakra-any-carousel](https://i.ibb.co/CtHvPdZ/chakra-any-carousel.png)


## Usage

### Interfaces

#### CarouselItem

    export  interface  CarouselItem  {
		title:  string;
		description:  string;
		image:  CarouselImage;
		link:  CarouselLink;
	}
Represent the data accessible inside the single carousel item which will be provided by the user.

#### CarouselProps

    export  interface  CarouselProps  {
		id:  string; // Id of the carousel element
		interval:  number; // Animation delay
		direction:  Direction; // Direction of the animation
		repetitions:  number; // Number of element visualized at once
		items?:  Partial<CarouselItem>[]; // Data for the elements
		children:  JSX.Element; // The component to be cloned
	}

As `items` is an array of `Partial`, **data integrity is in the hands of the user**.
The `children` component must implement the following:

    (props:  Partial<CarouselItem>) => JSX.Element

### Example

## Styling
The only elements that at the moment can be styled are the arrows.
The style can be modified by implementing a ChakraUI theme component as follows:

    const  carouselHelpers  =  createMultiStyleConfigHelpers(['arrows']);
	const  Carousel  =  carouselHelpers.defineMultiStyleConfig({
		baseStyle:  {
			arrows:  {
				borderRadius:  '10px',
			},
		},
	});

 Always specify a single value for `borderRadius` as the component will handle the differences between left and right arrow.
