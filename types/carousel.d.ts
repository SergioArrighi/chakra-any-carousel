declare module 'chakra-any-carousel' {
  import { ReactNode } from 'react';

  export enum Direction {
    LEFT,
    RIGHT,
  }

  export interface CarouselImage {
    imageUrl: string;
  }

  export interface CarouselLink {
    title: string;
    imageUrl: string;
    path: string;
  }

  export interface CarouselItem {
    title: string;
    description: string;
    image: CarouselImage;
    link?: CarouselLink;
  }

  export interface CarouselProps {
    id: string;
    interval: number;
    direction: Direction;
    repetitions: number;
    items?: CarouselItem[];
    children: ReactNode;
  }

  export interface CarouselItemProps extends CarouselItem {
    id: string;
    index: number;
    slides: number;
  }

  export const Carousel: React.FC<CarouselProps>;
}
