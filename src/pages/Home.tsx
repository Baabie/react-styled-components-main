import { Banner } from "../components/Banner";
import { Gallery } from "../components/Gallery";
import { SectionCard } from "../components/SectionCards";
import { Divider } from "../components/styleds/Divider";

export function Home() {
  return (
    <>
      <Banner />
      <SectionCard />

      <Divider />
      <Gallery />
    </>
  );
}
