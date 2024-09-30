import { Button } from "../components/styleds/Button";
import { MainBanner } from "../components/styleds/MainBanner";
import { Title } from "../components/styleds/Title";

export function Banner() {
  return (
    <MainBanner>
      <Title color="white">Meu título</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias
        obcaecati nisi modi.
      </p>

      <Button>Saiba mais</Button>
    </MainBanner>
  );
}
