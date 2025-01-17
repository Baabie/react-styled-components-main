import { Avatar } from "./styleds/Avatar";
import { Button } from "./styleds/Button";
import { Card } from "./styleds/Card";
import { Container } from "./styleds/Container";

type CardContent = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const cardsContent: CardContent[] = [
  {
    imgSrc: "https://picsum.photos/200",
    imgAlt: "Imagem 1",
    title: "Titulo 1",
    description: "Lorem",
  },
  {
    imgSrc: "https://picsum.photos/200",
    imgAlt: "Imagem 2",
    title: "Titulo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imgSrc: "https://picsum.photos/200",
    imgAlt: "Imagem 3",
    title: "Titulo 3",
    description: "Ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export function SectionCard() {
  return (
    <Container>
      {cardsContent.map((card) => (
        <Card>
          <Avatar src={card.imgSrc} alt={card.imgAlt} />

          <h1>{card.title}</h1>

          <p>{card.description}</p>

          <Button>Ver mais</Button>
        </Card>
      ))}
    </Container>
  );
}
