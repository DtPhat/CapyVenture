import TranslatableSection from '@/components/layout/translatable-section';
import RelatedVideos from '../_components/related-videos';
import VideoPlayer from '../_components/video-player';
const Video = ({ params }: { params: { id: string } }) => {
  
  return (
    <div className='w-full px-16 py-8 max-w-7xl'>
      <TranslatableSection>
        {/* <div className='flex gap-4 translatable'>
          <div>
            {
              isLoading ?
                <Skeleton className="w-[720px] h-[500px]" />
                : <YouTube
                  videoId={video?.videoId}
                  opts={opts}
                  onReady={onReady}
                  onStateChange={handleStateChange}
                  ref={playerRef}
                />
            }
          </div>
          <div className='bg-white rounded'>
            {
              isLoading ?
                <Skeleton className="w-[24rem] h-[28rem]" />
                : <Tabs value="transcript" >
                  <TabsHeader className='rounded-none rounded-t-lg py-2'>
                    {TabData.map(({ label, value }) => (
                      <Tab key={value} value={value} className='text-normal text-black'>
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody className='rounded'>
                    {TabData.map(({ value, panel }) => (
                      <TabPanel key={value} value={value} className='p-0 border-2 border-gray-200 rounded h-[28rem] overflow-auto'>
                        {panel}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
            }
          </div>
        </div> */}
        {<VideoPlayer id={params.id} />}
      </TranslatableSection>
      <hr className="mt-16 mb-4 border-black/20" />
      <div>
        <h1 className="font-semibold pb-2">Similar videos</h1>
        <RelatedVideos />
      </div>
    </div>
  );
};

export default Video;