import { ENGLISH_LEVELS } from "@/lib/constants";
import MenuCheckbox from "@/components/menu-checkbox";
import SearchBar from "@/components/searchbar";
import Container from "@/components/container";
import Storylist from "./_components/story-list";
import StoriesCarousel from "./_components/carousel";
import { serverFetcher } from "@/lib/config/fetchter";

export default async function Stories() {
  const carouselResponse = await Promise.all([
    serverFetcher('/story/6657ecb46e94f467a7d5f1d0'),
    serverFetcher('/story/6657ecd96e94f467a7d5f1d1'),
    serverFetcher('/story/6656abf899f29ac57156ce09'),
  ])
  const carouselData = carouselResponse.map(res => res.data)
  return (
    <div className="w-full">
      <StoriesCarousel
        carouselData={carouselData}
      />
      <Container>
        <div className="grid grid-cols-2 border-b-2 pb-2 border-black/50">
          <div className="pt-2">
            <SearchBar placeholder="Search stories..." />
          </div>
          <div className="flex justify-end items-center gap-4">
            <MenuCheckbox name="Category" checklist={["News", "Business", "Education", "Technology", "Entertainment"]} />
            <MenuCheckbox name="Level" checklist={ENGLISH_LEVELS} />
          </div>
        </div>
        <Storylist />
      </Container>
    </div>
  );
}