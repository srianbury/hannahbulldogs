import React from "react";
import { Carousel } from "react-bootstrap";
import DescContainer from "../../Home/Short";

const familyPhotos = [
  {
    id: 1,
    src: "https://stanleybulldogs.com/static/media/12.0d0379e2.JPG",
    alt: "doggy"
  },
  {
    id: 2,
    src: "https://stanleybulldogs.com/static/media/maggie.d8c02bc6.jpg",
    alt: "doggy"
  },
  {
    id: 3,
    src: "https://stanleybulldogs.com/static/media/12.0d0379e2.JPG",
    alt: "doggy"
  },
  {
    id: 4,
    src: "https://stanleybulldogs.com/static/media/maggie.d8c02bc6.jpg",
    alt: "doggy"
  },
  {
    id: 5,
    src: "https://stanleybulldogs.com/static/media/maggie.d8c02bc6.jpg",
    alt: "doggy"
  },
  {
    id: 6,
    src: "https://stanleybulldogs.com/static/media/12.0d0379e2.JPG",
    alt: "doggy"
  },
  {
    id: 7,
    src: "https://stanleybulldogs.com/static/media/12.0d0379e2.JPG",
    alt: "doggy"
  },
  {
    id: 8,
    src: "https://stanleybulldogs.com/static/media/12.0d0379e2.JPG",
    alt: "doggy"
  }
];

const GalleryPreview = () => (
  <Carousel interval={null} slide={false}>
    {familyPhotos.map(pup => (
      <Carousel.Item key={pup.id}>
        <img className="img img-fluid" src={pup.src} alt={pup.alt} />
      </Carousel.Item>
    ))}
  </Carousel>
);

const ShortText = () => (
  <>
    <DescContainer.Title title="Puppies!" />
    <div className="mb-1">
      We like to keep in touch with our pups and their families, here are some
      pics of the family!
    </div>
  </>
);

const Brief = () => (
  <DescContainer 
    title="About"
    left={<ShortText />}
    right={<GalleryPreview />} />
);

export default Brief;
