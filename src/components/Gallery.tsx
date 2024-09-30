import { Container } from "./styleds/Container";
import { GalleryContent } from "./styleds/GalleryContent";
import { Title } from "./styleds/Title";

export function Gallery() {
  return (
    <Container flexDirection="column">
      <Title>Minha galeria</Title>

      <GalleryContent>
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
        <img src="http://via.placeholder.com/800" alt="Image 1" />
      </GalleryContent>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        facilis delectus, sunt, pariatur unde, libero sed veniam harum
        voluptatum corrupti excepturi! Eveniet veniam debitis quas libero
        explicabo neque tempora ea!
      </p>
    </Container>
  );
}
