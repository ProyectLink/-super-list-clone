import NavigationItem from "@/components/navigation/NavigationItem";
import { ArrowRight, CheckIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen border-t-[1rem] md:border-t-[0.3rem] border-[#F74F39] bg-[#F4F3FA]">
        {/* navbar */}
        <div className="flex items-center justify-between px-10 pt-10">
          {/* left options */}
          <div className="flex items-center gap-3 font-semibold">
            <img src="/icon.png" className="size-5" />
            <img src="/logo.svg" className="h-5 mt-auto" />
            <div className="hidden hover:opacity-60 hover:cursor-pointer md:block">
              MacOS
            </div>
            <div className="hidden hover:opacity-60 hover:cursor-pointer md:block">
              Web
            </div>
            <div className="hidden hover:opacity-60 hover:cursor-pointer md:block">
              iOS
            </div>
            <div className="hidden hover:opacity-60 hover:cursor-pointer md:block">
              Android
            </div>
          </div>
          {/* right options */}
          <div className="hidden font-semibold md:flex gap-9">
            <div className="hover:opacity-60 hover:cursor-pointer">Updates</div>
            <div className="hover:opacity-60 hover:cursor-pointer">Pricing</div>
            <div className="text-[#F74F39] hover:cursor-pointer">
              Sign in{" "}
              <span>
                <ArrowRight
                  className="inline rotate-[355deg]"
                  strokeWidth={4}
                />
              </span>
            </div>
          </div>

          <div className="text-[#F74F39] hover:cursor-pointer font-bold md:hidden">
            Download{" "}
            <span>
              <img src="/download.svg" className="inline size-6 ms-2" />
            </span>
          </div>
        </div>

        {/* title */}
        <div className="flex flex-col items-center mx-auto mt-20 text-5xl font-bold md:text-8xl text-neutral-800">
          <p>Home to</p>
          <div className="flex">
            <p>all your </p>
            <img src="/check.png" className="mx-2 mt-auto size-11 md:size-20" />
            <p className="text-[#F74F39]">lists</p>
          </div>

          {/* message big screen */}
          <div className="hidden mt-5 text-xl font-semibold text-center opacity-60 md:block">
            <p>Take notes, organize your work, and get more done with AI.</p>
            <p>Simple, blazingly fast, and wrapped in a beautiful UI.</p>
          </div>

          {/* message small screens */}
          <div className="mt-5 text-xl font-semibold text-center opacity-60 md:hidden">
            <p>For team work, personal projects,</p>
            <p>and everything in between.</p>
          </div>

          <div className="flex gap-3 mt-5 text-lg font-bold">
            <button className="py-2 bg-[#F84F39] text-white rounded-full px-3 hover:scale-105 transition duration-200">
              Start today — it's free{" "}
            </button>
            <button className="py-2 bg-[#6B66DA] text-white rounded-full px-3 hover:scale-105 transition duration-200">
              Go Pro ✨
            </button>
          </div>
        </div>

        <div className="px-5">
          {/* app sample */}
          <div className="grid w-full grid-cols-4 gap-3 p-3 mx-auto mt-10 border-2 size-96 rounded-2xl border-[#EAE9F3] max-w-[1250px] h-auto mb-10">
            {/* col 1 */}
            <div className="hidden w-full h-full col-span-1 bg-white rounded-2xl lg:block">
              {/* rectangles */}
              <div className="grid grid-cols-2 gap-2 p-3">
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
              </div>

              {/* fake navigation */}
              <div className="mt-6">
                <div className="font-semibold text-gray-500 ms-3">List</div>
                <NavigationItem
                  active={true}
                  className="bg-[#F3F3F7] py-2 hover:bg-[#F3F3F7]"
                >
                  <p className="font-semibold text-gray-800">
                    <span className="me-3">💥</span> App Launch
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🏘️</span> Kitchen Reno
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🧘</span> Daily Habits
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">🍔</span> Recipes
                  </p>
                </NavigationItem>
                <NavigationItem active={false}>
                  <p className="py-2 font-semibold text-gray-800 hover:bg-[#F3F3F7]">
                    <span className="me-3">✏️</span> Design Work
                  </p>
                </NavigationItem>
              </div>

              {/* fake user session */}
              <div className="flex items-end gap-2 px-3 pb-3 h-72">
                <div className="w-full h-10 bg-gray-200 rounded-full"></div>
                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="rounded-full size-10"
                />
              </div>
            </div>

            {/* col mid */}
            <div className="w-full h-full p-10 bg-white col-span-full lg:col-span-2 rounded-2xl">
              <div className="flex items-center gap-2 ">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[6]"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[5]"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[4]"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[3]"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[2]"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block w-10 h-10 rounded-full ring-2 ring-white z-[1]"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>

                <h2 className="text-xl font-bold text-gray-800">App Launch</h2>
              </div>

              <p className="mt-10 font-semibold text-neutral-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolorum!
              </p>
            </div>

            {/* col 3 */}
            <div className="hidden col-span-1 col-start-4 p-3 bg-white rounded-2xl lg:block">
              <div className="grid w-full grid-cols-2 gap-2">
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
                <div className="w-full bg-[#F4F4F8] rounded-xl h-16"></div>
              </div>

              <div className="flex flex-col mt-10">
                <div className="py-2 font-semibold text-center text-gray-800 hover:bg-[#F3F3F7]">
                  Assignments
                </div>
                <div className="py-2 font-semibold text-center text-gray-800 hover:bg-[#F3F3F7]">
                  Tasks
                </div>
                <div className="py-2 font-semibold text-center text-gray-800 hover:bg-[#F3F3F7]">
                  Study Notes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
