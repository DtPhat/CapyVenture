import { MiniStoryCard } from "@/app/stories/_components/card";
import TranslatableSection from "@/components/layout/translatable-section";
import { fetcherPublic } from "@/lib/config/fetchter";
import { Story } from "@/lib/definitions";
import { storyList } from "@/lib/placeholders";
import Link from "next/link";
import { estimateReadingTime } from "../_lib/utils";
import { BASE_URL } from "@/lib/constants";
export default async function Story({ params }: { params: { id: string } }) {
  // const response = await fetcherPublic('/story/' + params.slug)
  const response = await fetch(
    `${BASE_URL}/story/${params.id}`, {
    next: {
      revalidate: 60,
      tags: ['story']
    }
  }).then(res => res.json());
  const story: Story = response.data
  return (
    <div className="max-w-7xl">
      {/* {showingTranslator && <Translator position={position} textToTranslate={selectedText} />} */}
      <div className="py-8 px-16 bg-white translatable">
        <div className="flex justify-between gap-1 text text-black/90">
          <div>
            <p>Level: <span className="font-semibold">{story.level}</span></p>
            <p>Topic: <span className="font-semibold">{story.category}</span></p>
          </div>
          <div className="text-end">
            <p>Jan 08, 2024 · {estimateReadingTime(story.contents[0].text)} minute{story.contents[0].text.length > 1 ? 's' : ''} read</p>
          </div>
        </div>
        <h1 className="text-xl text-center font-semibold mb-4">{story.title}</h1>
        <TranslatableSection>
          <p className="text-lg whitespace-pre-line">
            {story.contents[0].text}
          </p>
        </TranslatableSection>
        <hr className="mt-16 mb-4 border-black/20" />
        <div>
          <h1 className="font-semibold pb-2">Similar stories</h1>
          <div className="grid grid-cols-4 gap-4">
            {
              storyList.map(item =>
                <Link href='/stories/thispage' className="space-y-2" key={item.title}>
                  <MiniStoryCard data={item} />
                </Link>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}