'use client'
import React, { useRef, useState } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from "@material-tailwind/react";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { LanguageIcon, PlayIcon, PlusIcon } from '@heroicons/react/24/solid';
import { formatSeconds } from '@/app/lib/utils';
import TranslatableSection from '@/app/ui/translation/translatable-section';
import next from 'next';
import CollectionMenu from '@/app/ui/common/collection-menu';
import Link from 'next/link';
import VideoCard, { MiniVideoCard } from '@/app/ui/video/card';
const YouTubePlayer = () => {
  const playerRef = useRef<YouTubePlayer>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [translatingsenteces, setTranslatingSentences] = useState<string[]>([])
  console.log(currentTime)

  const jumpToTimestamp = (timestamp: number) => {
    if (playerRef.current?.internalPlayer) {
      playerRef.current?.internalPlayer.seekTo(timestamp);
    }
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const handleStateChange = async (event: { target: YouTubePlayer, data: number }) => {
    if (event.data === 1) {
      // Video is playing
      const interval = setInterval(async () => {
        if (playerRef.current && playerRef.current.internalPlayer) {
          setCurrentTime(await playerRef.current.internalPlayer.getCurrentTime());
        }
      }, 1000); // Update current time every second
      return () => clearInterval(interval);
    }
    // setCurrentTime(await playerRef.current.internalPlayer.getCurrentTime())
  };

  const checkPlaying = (index: number) => {
    const currentTranscript = videoTranscripts[index];
    const nextTranscript = videoTranscripts[index + 1];
    if (currentTime >= currentTranscript.timestamp &&
      (!nextTranscript || currentTime < nextTranscript.timestamp)) {
      return true;
    }
    return false;
  }
  const opts = {
    height: '496',
    width: '720',
    playerVars: {
      autoplay: 1,
    },
  };

  const TabData = [
    {
      label: "Transcript",
      value: "transcript",
    },
    {
      label: "Full text",
      value: "fulltext",
    },
  ];

  const videoTranscripts = [
    {
      timestamp: 0,
      sentence: 'We often hear of remarkable people who, through dedication and practice, seem to become one with their craft.',
      translation: 'Chúng ta thường nghe nói về những con người xuất sắc, nhờ sự cống hiến và luyện tập, dường như họ đã hòa nhập với nghề của mình.'
    },
    {
      timestamp: 9,
      sentence: 'An example of such a person is Tsao-fu, a character from Taoist literature who wished to become a skilled charioteer.',
      translation: 'Chúng ta thường nghe nói về những con người xuất sắc, nhờ sự cống hiến và luyện tập, dường như họ đã hòa nhập với nghề của mình.'
    },
    {
      timestamp: 16,
      sentence: 'So, he seized the opportunity to apprentice under an expert widely known for his exceptional mastery.',
      translation: 'Chúng ta thường nghe nói về những con người xuất sắc, nhờ sự cống hiến và luyện tập, dường như họ đã hòa nhập với nghề của mình.'
    },
    {
      timestamp: 23,
      sentence: 'Years passed, and Tsao-fu served his master without receiving any instruction or lesson; he just worked and followed commands.',
      translation: 'Chúng ta thường nghe nói về những con người xuất sắc, nhờ sự cống hiến và luyện tập, dường như họ đã hòa nhập với nghề của mình.'
    },
    {
      timestamp: 32,
      sentence: 'But rather than becoming disheartened, he displayed commitment, convincing the charioteer that he was worthy of his teachings.',
      translation: 'Chúng ta thường nghe nói về những con người xuất sắc, nhờ sự cống hiến và luyện tập, dường như họ đã hòa nhập với nghề của mình.'
    },
    {
      timestamp: 36,
      sentence: 'End of video.',
      translation: 'Chúng ta thường nghe nói về những con người xuất sắc, nhờ sự cống hiến và luyện tập, dường như họ đã hòa nhập với nghề của mình.'
    },
  ]

  const fulltext = `We often hear of remarkable people who, through dedication and practice, seem to become one with their craft.

An example of such a person is Tsao-fu, a character from Taoist literature who wished to become a skilled charioteer.

So, he seized the opportunity to apprentice under an expert widely known for his exceptional mastery.

Years passed, and Tsao-fu served his master without receiving any instruction or lesson; he just worked and followed commands.

But rather than becoming disheartened, he displayed commitment, convincing the charioteer that he was worthy of his teachings.

One day, the master finally offered him a lesson.

But it wasn’t what Tsao-fu expected.

Instead of jumping straight into charioteering, the master put a couple of wooden posts into the ground and had Tsao-fu jump from one post to another repeatedly.

After much practice, he could glide effortlessly across the wooden posts.

And so, the master revealed the essence of the practice: it wasn’t just about strength or skill but about the union of intention and action.

With the reins, hands, body, and mind in harmony, the chariot felt like an extension of Tsao-fu himself.

The action was effortless as he found himself in a flow state.`

  return (
    <div className='w-full px-16 py-8 max-w-7xl'>
      <TranslatableSection>
        <div className='flex gap-4 translatable'>
          <div>
            <YouTube
              videoId="k23x5kP7dAY"
              opts={opts}
              onReady={onReady}
              onStateChange={handleStateChange}
              ref={playerRef}
            />
          </div>
          <div className='bg-white rounded'>
            <Tabs value="transcript" >
              <TabsHeader className='rounded-none rounded-t-lg py-2'>
                {TabData.map(({ label, value }) => (
                  <Tab key={value} value={value} className='text-normal text-black'>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody className='h-[28rem] overflow-auto border-b-2 rounded'>
                {TabData.map(({ value }) => (
                  <TabPanel key={value} value={value} className='p-0 border-2 border-gray-200 rounded'>
                    {
                      value == 'fulltext' ?
                        <div className='flex flex-col item-center p-2 whitespace-pre-line overflow-auto'>
                          {fulltext}
                        </div>
                        : <div className='flex flex-col item-center overflow-auto'>
                          {videoTranscripts.map((transcript, index) =>
                            <div className={`py-1 flex gap-2 ${checkPlaying(index) ? 'bg-black/10' : ''} px-2 items-center border-b border-gray-300`}>
                              <div className='my-auto'>
                                <button
                                  onClick={() => jumpToTimestamp(transcript.timestamp)}
                                  className={`group border border-black/50 rounded-lg w-[3.75rem] gap-0.5 flex justify-center items-center hover:text-white hover:bg-black ${checkPlaying(index) ? 'bg-black/90 text-white' : ''}`}>
                                  <PlayIcon className={`w-4 h-4 ${checkPlaying(index) ? 'block' : 'hidden'} group-hover:block`} />
                                  <span>
                                    {formatSeconds(transcript.timestamp)}
                                  </span>
                                </button>
                              </div>
                              <div className='group'>
                                {translatingsenteces.includes(transcript.sentence) ? transcript.translation : transcript.sentence}
                                <button className='relative top-1 left-1 hidden group-hover:inline-block'
                                  onClick={() => setTranslatingSentences(
                                    translatingsenteces.includes(transcript.sentence)
                                      ? translatingsenteces.filter(sentence => sentence != transcript.sentence)
                                      : [...translatingsenteces, transcript.sentence])}
                                >
                                  <LanguageIcon className='w-[18px] h-[18px] hover:text-primary' />
                                </button>
                              </div>
                              <div className='flex flex-col gap-2 p-0'>
                              </div>
                            </div>
                          )}
                        </div>
                    }
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </TranslatableSection>
      <hr className="mt-16 mb-4 border-black/20" />
      <div>
        <h1 className="font-semibold pb-2">Related videos</h1>
        <div className="grid grid-cols-4 gap-4">
          <Link href='/videos/thispage' className="space-y-2">
            <MiniVideoCard />
          </Link>
          <Link href='/videos/thispage' className="space-y-2">
            <MiniVideoCard />
          </Link>
          <Link href='/videos/thispage' className="space-y-2">
            <MiniVideoCard />
          </Link>
          <Link href='/videos/thispage' className="space-y-2">
            <MiniVideoCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;