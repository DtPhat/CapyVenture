'use client'
import { MouseEvent, useState } from "react";
import Translator from "../../ui/translation/translator";
import { Card, CardFooter } from "@material-tailwind/react";
import Link from "next/link";
import TranslatableSection from "@/app/ui/translation/translatable-section";
import { MiniReadingCard } from "@/app/ui/reading/card";
export default function Lesson() {
  const [open, setOpen] = useState(0);
  // const [selectedText, setSelectedText] = useState("");
  // const [showingTranslator, setShowingTranslator] = useState(false);
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleSelection = (event: MouseEvent) => {
  //   const selection = window.getSelection();
  //   const text = selection?.toString();
  //   if (!text) {
  //     setShowingTranslator(false)
  //     return;
  //   }
  //   setSelectedText(text);
  //   setShowingTranslator(true);
  //   setPosition({ x: event.pageX, y: event.pageY });
  // };
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="max-w-7xl">
      {/* {showingTranslator && <Translator position={position} textToTranslate={selectedText} />} */}
      <div className="py-8 px-16 bg-white translatable">
        <div className="flex justify-between gap-1 text text-black/90">
          <div>
            <p>Level: Intermediate</p>
            <p>Tags: Short story, Mystery</p>
          </div>
          <div className="text-end">
            <p>Jan 08, 2024 · 10 min read</p>
          </div>
        </div>
        <h1 className="text-xl text-center font-semibold mb-4">Whispers in the Dark</h1>
        <TranslatableSection>
          <p className="text-lg">
            In the dimly lit city of Noirville, Detective Alex Mercer was known for solving the toughest cases. One evening, as rain poured down in sheets, he received an anonymous tip about a secret underground operation that promised to unveil a criminal empire.
            <br />
            Driven by a relentless curiosity, Mercer followed the cryptic instructions leading him to a deserted warehouse on the outskirts of the city. As he cautiously entered, the air thickened with tension, and shadows seemed to dance around him. The only sound was the rhythmic tapping of rain against the worn-out roof.
            <br />
            Inside, Mercer discovered a hidden door that led to a maze of dimly lit corridors. The walls echoed with hushed conversations and the occasional clinking of metal. As he delved deeper, the maze seemed to come alive with unseen eyes watching his every move.
            <br />
            Eventually, Mercer stumbled upon a secret chamber where a group of nefarious figures gathered around a table covered with blueprints and maps. He overheard their sinister plan to unleash a wave of chaos upon Noirville, taking control of the city's underworld.
            <br />
            Realizing the urgency, Mercer attempted to slip away unnoticed, but the creaking floor betrayed him. The criminals turned to face him, their eyes gleaming with malevolence. A chase ensued through the winding corridors, Mercer narrowly avoiding traps and pitfalls set to deter intruders.
            <br />
            With adrenaline pumping through his veins, Mercer managed to outsmart his pursuers and escape the maze. As he emerged into the rain-soaked night, he radioed for backup and briefed them on the impending threat to Noirville.
            <br />
            The detective, now pursued by both the criminal syndicate and the elements, raced against time to thwart the impending disaster. Noirville's fate hung in the balance as Mercer faced off against the criminals in a heart-pounding showdown. In the end, with the help of his team, he managed to dismantle the criminal empire and bring justice to the rain-soaked streets.
            <br />
            The city, once shrouded in darkness, began to see the first rays of a new dawn. Detective Alex Mercer, soaked to the bone but victorious, stood amidst the rain-soaked cityscape, knowing that his relentless pursuit of truth had saved Noirville from the clutches of impending doom.
          </p>
        </TranslatableSection>
        <hr className="mt-16 mb-4 border-black/20" />
        <div>
          <h1 className="font-semibold pb-2">Related lessons</h1>
          <div className="grid grid-cols-4 gap-4">
            <Link href='/lessons/thispage' className="space-y-2">
              <MiniReadingCard />
            </Link>
            <Link href='/lessons/thispage' className="space-y-2">
              <MiniReadingCard />
            </Link>
            <Link href='/lessons/thispage' className="space-y-2">
              <MiniReadingCard />
            </Link>
            <Link href='/lessons/thispage' className="space-y-2">
              <MiniReadingCard />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}