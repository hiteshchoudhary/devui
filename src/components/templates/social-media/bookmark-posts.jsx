import React from "react";
import {
  BellIcon,
  BookmarkIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  LinkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlusCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

const posts = [
  {
    id: 1,
    authorImage:
      "https://images.pexels.com/photos/18264716/pexels-photo-18264716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Mystical Wanderer",
    createdOn: "15 minutes ago",
    text: "Uncovering ancient secrets and mystical wonders. The journey is the destination. 🔮🌟 #MythologyQuest",
    images: [],
    likeCount: 46,
    commentCount: 13,
    bookmarked: true,
    liked: true,
  },
  {
    id: 2,
    authorImage:
      "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Aqua Explorer",
    createdOn: "1 hour ago",
    text: "Swimming with the dolphins today, and it was magical! 🐬🌊 #OceanAdventure",
    images: [
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    likeCount: 102,
    commentCount: 18,
    bookmarked: true,
    liked: false,
  },
  {
    id: 3,
    authorImage:
      "https://images.pexels.com/photos/7775637/pexels-photo-7775637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Solar Flare ",
    createdOn: "59 minutes ago",
    text: "Harnessing the power of the sun for a brighter future. ☀️🔋 #SolarEnergy",
    images: [
      "https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/18148933/pexels-photo-18148933/free-photo-of-city-road-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/18148937/pexels-photo-18148937/free-photo-of-city-road-traffic-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    likeCount: 802,
    commentCount: 99,
    bookmarked: true,
    liked: true,
  },
  {
    id: 4,
    authorImage:
      "https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Aurora Starlight",
    createdOn: "17 hours ago",
    text: "Embracing the lunar magic tonight. The full moon is my muse. 🌕🌌 #MoonlightDreams",
    images: [],
    likeCount: 420,
    commentCount: 20,
    bookmarked: true,
    liked: false,
    link: {
      image:
        "https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Aurora Starlight",
      caption: "Digital artist | Creative mind | Color magician 🎨🖌️🖼️",
      url: "https://www.aurorastarry.com/",
    },
  },
  {
    id: 5,
    authorImage:
      "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Nova Sparks",
    createdOn: "1 day ago",
    text: "💡 Tech Poll: Which emerging technology excites you the most?",
    images: [],
    likeCount: 207,
    commentCount: 63,
    bookmarked: true,
    liked: false,
    poll: [
      {
        name: "Artificial Intelligence",
      },
      {
        name: "Virtual Reality",
      },
      {
        name: "Quantum Computing",
      },
      {
        name: "5G Connectivity",
      },
    ],
  },
  {
    id: 6,
    authorImage:
      "https://images.pexels.com/photos/569314/pexels-photo-569314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Zen Garden",
    createdOn: "7 days ago",
    text: "🧘‍♂️ Mindfulness Poll: Which mindfulness practice resonates with you the most?",
    images: [],
    likeCount: 97,
    commentCount: 13,
    liked: true,
    bookmarked: true,
    poll: [
      {
        name: "Meditation",
        votePercentage: 30,
      },
      {
        name: "Yoga",
        selected: true,
        votePercentage: 33,
      },
      {
        name: "Deep Breathing",
        votePercentage: 27,
      },
      {
        name: "Tai Chi",
        votePercentage: 20,
      },
    ],
  },
  {
    id: 7,
    authorImage:
      "https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    authorName: "Pixel Painter",
    createdOn: "1 months ago",
    text: "🎨 Art Poll: What's your preferred art medium for creating masterpieces?",
    images: [],
    likeCount: 99,
    commentCount: 13,
    bookmarked: true,
    liked: false,
    poll: [
      {
        name: "Acrylic Paint",
        votePercentage: 20,
      },
      {
        name: "Watercolor",
        votePercentage: 19,
      },
      {
        name: "Digital Art",
        votePercentage: 18,
      },
      {
        name: "Charcoal Sketching",
        votePercentage: 43,
      },
    ],
  },
];

const BookmarkPosts = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">My Profile</h1>
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          <span className="relative">
            <MagnifyingGlassIcon className="h-8 w-8" />
          </span>
          <span className="relative">
            <BellIcon className="h-8 w-8 text-white" />
            <span className="absolute right-1 top-0 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-green-500 p-1 text-white"></span>
          </span>
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
            <PlusCircleIcon className="mr-2 h-5 w-5" /> Create new
          </button>
        </div>
      </header>
      <div className="mt-[65px] grid grid-cols-12 gap-4 pb-8 sm:px-4 sm:pt-8 md:mt-[83px] lg:px-10">
        {/* Empty */}
        <aside className="col-span-12 text-white md:col-span-5 lg:col-span-4 xl:col-span-3">
          {/* Profile Card */}
          <div className="sticky top-[100px] border-b border-white p-4 sm:border">
            <img
              className="mb-3 flex aspect-square h-16 w-16 rounded-full border-2 border-[#ae7aff] object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />

            <h2 className="mb-1 font-bold">Aurora Starlight</h2>
            <p className="text-sm">
              Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
            </p>

            <hr className="my-4 h-[1px] w-full" />
            <div className="mb-4">
              <h3 className="mb-1 font-bold">Short Bio</h3>
              <p className="text-sm">
                Immersed in the enchanting world of the night, captivated by the
                moon&apos;s allure, and constantly seeking new adventures around
                the globe. 🌕🌙🌎
              </p>
            </div>
            <div className="mb-4 text-sm">
              <h3 className="mb-1 font-bold">Public link</h3>
              <button className="block text-[#ae7aff] hover:underline">
                starryaurora@gmail.com
              </button>
              <button className="block break-all text-[#ae7aff] hover:underline">
                https://www.aurorastarry.com/
              </button>
            </div>
            <p className="mb-4 flex gap-x-4">
              <span className="inline-block">
                <span className="font-bold">13.5k&nbsp;</span>
                <span className="text-sm text-gray-400">Followers</span>
              </span>
              <span className="inline-block">
                <span className="font-bold">204&nbsp;</span>
                <span className="text-sm text-gray-400">Following</span>
              </span>
            </p>
            <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              Edit Profile
            </button>
          </div>
        </aside>

        <section className="col-span-12 text-white md:col-span-7 lg:col-span-5 xl:col-span-6">
          <div className="sticky top-[82px] z-10 mt-[1px] bg-[#121212] pb-4 before:absolute before:inset-x-0 before:bottom-full before:h-[17px] before:bg-[#121212] md:top-[100px] md:mt-0">
            <ul className="no-scrollbar flex w-full overflow-x-auto px-4 sm:px-0">
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                  Posts
                </button>
              </li>
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                  Update profile
                </button>
              </li>
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
                  Change password
                </button>
              </li>
              <li className="mr-2 inline-block shrink-0">
                <button className="inline-block bg-[#2c2c2c] px-6 py-1.5">
                  Bookmarked
                </button>
              </li>
            </ul>
          </div>
          {/* Post Lists */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative mb-2 w-full last:mb-0 sm:mb-4"
            >
              <div className="flex border-b border-t border-white p-4 text-white sm:border-l sm:border-r">
                {/* Author Profile */}
                <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                  <img
                    src={post.authorImage}
                    alt={post.authorName}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                {/* Center-Right Content */}
                <div className="pl-4 pt-1">
                  {/* Post Metadata */}
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">
                        {post.authorName}
                      </h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        {post.createdOn}
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </div>
                  {/* Post Text */}
                  <p className="mb-4 text-sm sm:text-base">{post.text}</p>
                  {/* Post Images */}
                  {post.images.length > 0 && (
                    <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
                      {post.images.map((image, i) => (
                        <img
                          key={image}
                          src={image}
                          alt={`attachment-${i}`}
                          className="rounded-md"
                        />
                      ))}
                    </div>
                  )}
                  {/* Link Preview */}
                  {post.link && (
                    <div className="group mb-4 border opacity-95 hover:opacity-100">
                      <div className="max-h-52 overflow-hidden">
                        <img
                          src={post.link.image}
                          alt={post.link.title}
                          className="object-cover"
                        />
                      </div>
                      {/* Link Content */}
                      <div className="p-4">
                        <h3 className="mb-2 font-bold">{post.link.title}</h3>
                        <p className="mb-3 text-sm">{post.link.caption}</p>
                        <span className="inline-flex items-center gap-x-2 break-all text-sm text-[#ae7aff] no-underline group-hover:underline">
                          <LinkIcon className="h-4 w-4 shrink-0" />
                          {post.link.url}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Polls */}
                  {post.poll &&
                    post.poll.map((option) => (
                      <button
                        key={option?.name}
                        className={`relative z-[1] mb-4 inline-flex w-full items-center gap-x-4 border p-4 before:absolute before:inset-y-0 before:left-0 before:z-[-1] before:w-[var(--data-vote-percentage)] last:mb-0 ${
                          option?.votePercentage && option?.votePercentage >= 0
                            ? ""
                            : "hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black"
                        } ${
                          option?.selected
                            ? "before:bg-[#ae7aff]"
                            : "before:bg-gray-400/10"
                        }
              `}
                        disabled={Boolean(option?.votePercentage)}
                        style={{
                          "--data-vote-percentage": `${
                            option?.votePercentage || 0
                          }%`,
                        }}
                      >
                        {option?.name}{" "}
                        {option?.votePercentage && (
                          <span className="ml-auto shrink-0 text-sm">
                            {option.votePercentage}%
                          </span>
                        )}
                      </button>
                    ))}
                  {/* Post Actions Buttons */}
                  <div className="flex gap-x-4">
                    {/* Like Button */}
                    <button
                      className={`group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] focus:after:content-[attr(data-like-count-alt)] ${
                        post.liked
                          ? "text-[#ae7aff] focus:text-inherit"
                          : "hover:text-[#ae7aff] focus:text-[#ae7aff]"
                      }`}
                      data-like-count={post.likeCount}
                      data-like-count-alt={
                        post.liked ? post.likeCount - 1 : post.likeCount + 1
                      }
                    >
                      <HeartIcon
                        className={`h-5 w-5 ${
                          post.liked
                            ? "fill-[#ae7aff] group-focus:fill-none"
                            : "group-focus:fill-[#ae7aff]"
                        }`}
                      />
                    </button>
                    {/* Comment Button */}
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                      <span>{post.commentCount}</span>
                    </button>
                    {/* Share and Bookmarked Button */}
                    <div className="ml-auto">
                      <button className="mr-2 inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <ShareIcon className="h-5 w-5" />
                      </button>
                      <button
                        className={`group inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff] ${
                          post.bookmarked
                            ? "focus:text-white"
                            : "focus:text-[#ae7aff]"
                        }`}
                      >
                        <BookmarkIcon
                          className={`h-5 w-5 ${
                            post.bookmarked
                              ? "fill-[#ae7aff] text-[#ae7aff] group-focus:fill-none group-focus:text-inherit"
                              : "group-focus:fill-[#ae7aff]"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        {/* Trending Topics */}
        <aside className="hidden text-white lg:col-span-3 lg:block">
          <div className="sticky top-[100px] border p-4">
            <h2 className="mb-4 font-bold"># Trending Hashtags</h2>
            <ul className="list-disc pl-4">
              {["javascript", "typescript", "java", "python", "golang"].map(
                (hashtag) => (
                  <li key={hashtag}>
                    <button className="hover:text-[#ae7aff]">#{hashtag}</button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BookmarkPosts;
