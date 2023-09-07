import React from "react";
import {
  BellIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  HeartIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

const post = {
  id: 1,
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
  comments: [
    {
      id: 1,
      authorImage:
        "https://images.pexels.com/photos/3532554/pexels-photo-3532554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorName: "Isabella Andrews",
      createdOn: "58 minutes ago",
      text: "Such an important mission! How can individuals contribute to this solar revolution, Solar Flare?",
      images: [
        "https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      likeCount: 420,
      commentCount: 20,
      comments: [
        {
          id: 1,
          authorImage:
            "https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          authorName: "Aurora Starlight",
          createdOn: "55 minutes ago",
          text: "Embracing the lunar magic tonight. The full moon is my muse. 🌕🌌 #MoonlightDreams",
          images: [],
          likeCount: 10,
          commentCount: 2,
          comments: [],
        },
      ],
    },
    {
      id: 2,
      authorImage:
        "https://images.pexels.com/photos/1092422/pexels-photo-1092422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorName: "Daniel Greenfield",
      createdOn: "45 minutes ago",
      text: "Absolutely love your commitment to clean energy, Solar Flare! Keep up the great work! 💚♻️",
      images: [
        "https://images.pexels.com/photos/1114619/pexels-photo-1114619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      likeCount: 45,
      commentCount: 0,
      comments: [],
    },
    {
      id: 3,
      authorImage:
        "https://images.pexels.com/photos/998716/pexels-photo-998716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorName: "Matthew Advocate",
      createdOn: "30 minutes ago",
      text: "Your efforts are helping us move towards a sustainable future. Kudos, Solar Flare! 🌞🌱",
      images: [
        "https://images.pexels.com/photos/998714/pexels-photo-998714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      likeCount: 60,
      commentCount: 2,
      comments: [
        {
          id: 1,
          authorImage:
            "https://images.pexels.com/photos/909489/pexels-photo-909489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          authorName: "Sophia Innovator",
          createdOn: "28 minutes ago",
          text: "Every ray of sunshine counts! Have you considered integrating solar in urban spaces, Solar Flare?",
          images: [],
          likeCount: 2,
          commentCount: 1,
          comments: [],
        },
        {
          id: 2,
          authorImage:
            "https://images.pexels.com/photos/909487/pexels-photo-909487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          authorName: "Michael Tech",
          createdOn: "2 minutes ago",
          text: "Your dedication to solar energy is inspiring, Solar Flare! Are there any upcoming projects we can look forward to?",
          images: [],
          likeCount: 0,
          commentCount: 0,
          comments: [],
        },
      ],
    },
    {
      id: 4,
      authorImage:
        "https://images.pexels.com/photos/909483/pexels-photo-909483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      authorName: "Samuel Eco",
      createdOn: "45 seconds ago",
      text: "You're doing incredible work for the environment, Solar Flare. 💪🌿 Let's all go solar!",
      images: [],
      likeCount: 9,
      commentCount: 1,
      comments: [],
    },
  ],
};

const PostDetail = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <header className="fixed top-0 z-50 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">View Post</h1>
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
      <div className="mt-[65px] grid grid-cols-12 gap-4 py-8 sm:px-4 md:mt-[83px] lg:px-10">
        {/* Profile */}
        <aside className="hidden text-white md:col-span-4 md:block lg:col-span-3">
          <div className="border p-4">
            <img
              className="mb-3 flex aspect-square h-16 w-16 flex-shrink-0 rounded-full object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
            <h2>Aurora Starlight</h2>
            <p className="text-sm">
              <a
                href="mailto:starryaurora@gmail.com"
                className="hover:text-[#ae7aff]"
              >
                starryaurora@gmail.com
              </a>
            </p>
            <hr className="my-2 h-[1px] w-full" />
            <p className="mb-4">
              Night owl | Moon enthusiast | Wanderlust 🌕🌙🌎
            </p>
            <button className="inline-flex w-max items-center bg-[#ae7aff] px-4 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
              View Profile
            </button>
          </div>
        </aside>
        <section className="col-span-12 border-b border-t border-white sm:border-l sm:border-r md:col-span-8 lg:col-span-6">
          {/* Post Card */}
          <div className="flex border-b border-white p-4 text-white last:border-none">
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
                  <h2 className="inline-block font-bold">{post.authorName}</h2>
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
                <a href={post.link.url} target="_blank">
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
                </a>
              )}
              {/* Post Actions Buttons */}
              <div className="flex gap-x-4">
                {/* Like Button */}
                <button
                  className={`group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] hover:text-[#ae7aff] focus:text-[#ae7aff] focus:after:content-[attr(data-like-count-inc)]`}
                  data-like-count={post.likeCount}
                  data-like-count-inc={post.likeCount + 1}
                >
                  <HeartIcon className="h-5 w-5 group-focus:fill-[#ae7aff]" />
                  {/* <span>{post.likeCount}</span> */}
                </button>
                {/* Comment Button */}
                <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                  <span>{post.commentCount}</span>
                </button>
                {/* Like Button */}
                <button className="ml-auto inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                  <ShareIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Add Comment Form */}
          <div className="flex w-full items-center justify-start border-b border-white px-4 py-2 last:border-none">
            <img
              className="flex aspect-square h-10 w-10 shrink-0 rounded-full object-cover"
              src="https://images.pexels.com/photos/7775642/pexels-photo-7775642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
            <input
              placeholder="Comment..."
              className="w-full bg-transparent p-2 text-white !outline-none placeholder:text-gray-500 md:p-4"
            />
            <div className="flex gap-x-1 sm:gap-x-2">
              <button className="flex shrink-0 items-center justify-center p-1">
                <FaceSmileIcon className="w-6 text-white" />
              </button>
              <button className="flex shrink-0 items-center justify-center p-1">
                <PlusIcon className="w-6 text-white" />
              </button>
              <button className="flex shrink-0 items-center justify-center bg-[#ae7aff] p-1">
                <PaperAirplaneIcon className="w-6 text-black" />
              </button>
            </div>
          </div>

          {/* Post Comments */}
          {post.comments.map((comment) => (
            <div
              className="relative border-b border-white last:border-none"
              key={comment.id}
            >
              <div className="flex p-4 text-white">
                {/* Author Profile */}
                <div
                  className={`relative shrink-0 before:absolute before:left-1/2 before:top-[30px] before:z-[5] before:h-full before:w-[1px] ${
                    comment.comments.length > 0
                      ? "before:bg-white"
                      : "before:bg-transparent"
                  }`}
                >
                  <div className="relative z-10 h-10 w-10 sm:h-12 sm:w-12">
                    <img
                      src={comment.authorImage}
                      alt={comment.authorName}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Center-Right Content */}
                <div className="pl-4 pt-1">
                  {/* Post Metadata */}
                  <div className="mb-2 flex items-center gap-x-2">
                    <div className="w-full">
                      <h2 className="inline-block font-bold">
                        {comment.authorName}
                      </h2>
                      <span className="ml-2 inline-block text-sm text-gray-400">
                        {comment.createdOn}
                      </span>
                    </div>
                    <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </div>
                  {/* Post Text */}
                  <p className="mb-4 text-sm sm:text-base">{comment.text}</p>
                  {/* Post Images */}
                  {comment.images.length > 0 && (
                    <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
                      {comment.images.map((image, i) => (
                        <img
                          key={image}
                          src={image}
                          alt={`attachment-${i}`}
                          className="rounded-md"
                        />
                      ))}
                    </div>
                  )}
                  {/* Post Actions Buttons */}
                  <div className="flex gap-x-4">
                    {/* Like Button */}
                    <button
                      className={`group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] hover:text-[#ae7aff] focus:text-[#ae7aff] focus:after:content-[attr(data-like-count-inc)]`}
                      data-like-count={comment.likeCount}
                      data-like-count-inc={comment.likeCount + 1}
                    >
                      <HeartIcon className="h-5 w-5 group-focus:fill-[#ae7aff]" />
                      {/* <span>{post.likeCount}</span> */}
                    </button>
                    {/* Comment Button */}
                    <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                      <span>{comment.commentCount}</span>
                    </button>
                    {/* Like Button */}
                    <button className="ml-auto inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                      <ShareIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Nested Comments */}
              {comment.comments.map((comment) => (
                <div key={comment.id} className="flex p-4 text-white">
                  {/* Author Profile */}
                  <div className="h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                    <img
                      src={comment.authorImage}
                      alt={comment.authorName}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  {/* Center-Right Content */}
                  <div className="pl-4 pt-1">
                    {/* Post Metadata */}
                    <div className="mb-2 flex items-center gap-x-2">
                      <div className="w-full">
                        <h2 className="inline-block font-bold">
                          {comment.authorName}
                        </h2>
                        <span className="ml-2 inline-block text-sm text-gray-400">
                          {comment.createdOn}
                        </span>
                      </div>
                      <button className="ml-auto shrink-0 hover:text-[#ae7aff]">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </button>
                    </div>
                    {/* Post Text */}
                    <p className="mb-4 text-sm sm:text-base">{comment.text}</p>
                    {/* Post Images */}
                    {comment.images.length > 0 && (
                      <div className="mb-4 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
                        {comment.images.map((image, i) => (
                          <img
                            key={image}
                            src={image}
                            alt={`attachment-${i}`}
                            className="rounded-md"
                          />
                        ))}
                      </div>
                    )}
                    {/* Post Actions Buttons */}
                    <div className="flex gap-x-4">
                      {/* Like Button */}
                      <button
                        className={`group inline-flex items-center gap-x-1 outline-none after:content-[attr(data-like-count)] hover:text-[#ae7aff] focus:text-[#ae7aff] focus:after:content-[attr(data-like-count-inc)]`}
                        data-like-count={comment.likeCount}
                        data-like-count-inc={comment.likeCount + 1}
                      >
                        <HeartIcon className="h-5 w-5 group-focus:fill-[#ae7aff]" />
                        {/* <span>{post.likeCount}</span> */}
                      </button>
                      {/* Comment Button */}
                      <button className="inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                        <span>{comment.commentCount}</span>
                      </button>
                      {/* Like Button */}
                      <button className="ml-auto inline-flex items-center gap-x-1 outline-none hover:text-[#ae7aff]">
                        <ShareIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
        {/* Trending Topics */}
        <aside className="hidden text-white lg:col-span-3 lg:block">
          <div className="border p-4">
            <h2 className="mb-4 font-bold"># Trending Hashtags</h2>
            <ul className="list-disc pl-4">
              {["javascript", "typescript", "java", "python", "golang"].map(
                (hashtag) => (
                  <li key={hashtag}>
                    <a href="#" className="hover:text-[#ae7aff]">
                      #{hashtag}
                    </a>
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

export default PostDetail;
