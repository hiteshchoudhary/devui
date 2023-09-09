import React from "react";
import { PaperAirplaneIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@/utils";

const chatListDummyData = [
  {
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Jane Smith",
    lastMessage:
      "Hi there! How have you been? It's been a while since we last caught up. Let's plan to meet up soon.",
    dateTime: "2 hours ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Alice Smith",
    lastMessage:
      "How's it going on your end? I heard you had an exciting trip last week. Tell me all about it!",
    dateTime: "4 hours ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/13847652/pexels-photo-13847652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Bob Johnson",
    lastMessage:
      "What's for dinner tonight? I'm craving some Italian food. Any recommendations?",
    dateTime: "Yesterday",
  },
  {
    avatar:
      "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Emily Davis",
    lastMessage:
      "Can you help me with this coding problem? I'm stuck on it for hours now.",
    dateTime: "2 days ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Michael Wilson",
    lastMessage:
      "See you tomorrow at the park. Don't forget to bring your running shoes!",
    dateTime: "2 weeks ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Sophia Anderson",
    lastMessage:
      "I miss you so much! It's been ages since we hung out. Let's plan something soon.",
    dateTime: "2 weeks ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/7775640/pexels-photo-7775640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Liam Brown",
    lastMessage:
      "Let's meet up for coffee. I have some exciting news to share with you!",
    dateTime: "3 weeks ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Olivia Lee",
    lastMessage:
      "I have some big news! Guess what? I'm getting married next month!",
    dateTime: "4 weeks ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Noah White",
    lastMessage:
      "How's the weather there? I'm planning a weekend hike and hoping for good weather.",
    dateTime: "1 month ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Ava Garcia",
    lastMessage:
      "Good morning! Did you catch the sunrise today? It was breathtaking.",
    dateTime: "2 months ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/7775640/pexels-photo-7775640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Ethan Martinez",
    lastMessage:
      "Let's go for a long walk by the beach this evening. The weather is perfect.",
    dateTime: "3 months ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/18107025/pexels-photo-18107025/free-photo-of-man-reading-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "Mia Jones",
    lastMessage:
      "Happy birthday! I hope you have an amazing day filled with joy and surprises.",
    dateTime: "4 months ago",
  },
  {
    avatar:
      "https://images.pexels.com/photos/7775640/pexels-photo-7775640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fullName: "James Harris",
    lastMessage:
      "What's new with you lately? I've been swamped with work, but I miss our chats.",
    dateTime: "5 months ago",
  },
];

const chatMessagesDummyData = [
  {
    fullName: "Dan Abramov",
    message:
      "I'm good too, just catching up on some reading and enjoying the weather outside.",
    time: "5 minutes ago",
    isOwnMessage: true,
    hasAttachments: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "That sounds lovely! What book are you currently reading?",
    time: "10 minutes ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message:
      "I'm reading 'The Great Gatsby' by F. Scott Fitzgerald. It's a classic!",
    time: "15 minutes ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Oh, I've heard great things about that book. Enjoy your reading!",
    time: "20 minutes ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Thanks! It's such a beautifully written novel.",
    time: "25 minutes ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    fullName: "Dan Abramov",
    message:
      "I can't wait to see what happens next in the series. It's been so captivating!",
    time: "45 minutes ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message:
      "I completely understand. It's always exciting when a series keeps you hooked.",
    time: "50 minutes ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message:
      "Absolutely! Well, I should get back to work now. Catch up with you later!",
    time: "55 minutes ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Sounds like a plan! Let's do it!",
    time: "18 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Count me in too!",
    time: "19 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Great! I'll make a reservation then.",
    time: "20 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Awesome! Looking forward to it.",
    time: "21 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Catch up with you later!",
    time: "22 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Sure thing! Take care!",
    time: "23 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    fullName: "Jane Smith",
    message: "That's the spirit! Keep up the good work.",
    time: "6 days ago",
    isOwnMessage: false,
    hasAttachments: true,

    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const dummyAttachments = [
  "https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const ChatScreen = () => {
  return (
    <div className="bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
        <h1 className="text-xl font-extrabold md:text-3xl">Inbox</h1>
        <div className="flex w-max flex-shrink-0 items-center justify-end gap-6">
          <span className="relative">
            <BellIcon className="h-6 w-6 text-white md:h-8 md:w-8" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-1 text-sm text-white md:h-5 md:w-5 md:text-base">
              4
            </span>
          </span>
          <div className="h-11 w-11 rounded-full border-2 border-white">
            <img
              src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <button className="hidden w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white md:inline-flex">
            <PlusCircleIcon className="mr-2 h-5 w-5" /> Create a chat
          </button>
        </div>
      </header>
      <div className="mt-[77px] flex h-[calc(100vh-77px)] w-full items-center justify-center overflow-hidden p-0 md:mt-[83px] md:h-[calc(100vh-83px)]">
        <button
          className="peer fixed h-full w-full md:hidden"
          aria-label="mobile-chatlist-toggler"
          aria-details="Remove when using in your project. Following button is only to toggle chatlist sidebar"
        ></button>
        <div className="fixed right-full top-[77px] z-10 h-full w-full border-white bg-[#121212] transition-all duration-300 ease-in-out peer-focus:right-0 md:static md:static md:block md:w-[30%] md:border-r-[1px]">
          <div className="flex w-full items-center justify-start gap-2 border-b-[1px] border-white p-4">
            <input
              placeholder="Search chat..."
              className="w-full bg-transparent px-2 text-white !outline-none placeholder:text-gray-500 md:px-4"
            />
            <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </button>
            <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
              <FunnelIcon className="h-5 w-5 text-white" />
            </button>
          </div>
          <ul className="flex h-[calc(100%-140px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto md:h-[calc(100%-73px)]">
            {chatListDummyData.map((item, i) => {
              return (
                <li
                  className="w-full cursor-pointer p-4 hover:bg-[#232323] md:p-6"
                  key={i}
                >
                  <div className="flex w-full items-start justify-start gap-3 md:gap-4">
                    <img
                      className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src={item.avatar}
                      alt="avatar"
                    />
                    <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                      <div className="flex w-full items-center justify-between text-[10px] md:text-xs">
                        <p className="text-gray-400">{item.fullName}</p>
                        <p className="text-gray-400">{item.dateTime}</p>
                      </div>
                      <p className="text-xs text-white md:text-sm">
                        {item.lastMessage}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-full w-full md:w-[70%]">
          <div className="flex w-full items-center justify-between gap-2 border-b-[1px] border-white p-4">
            <div className="flex w-full items-center justify-start gap-3">
              <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:hidden md:h-10 md:w-10">
                <Bars3BottomLeftIcon className="h-5 w-5 text-white" />
              </button>
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <p className="font-semibold text-white">Jane smith</p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button className="hidden h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:inline-flex">
                <ShareIcon className="h-5 w-5 text-white" />
              </button>
              <button className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center border-[1px] border-white p-1 md:h-10 md:w-10">
                <EllipsisVerticalIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-150px)] w-full p-0 md:h-[calc(100vh-158px)] md:p-4">
            <div className="flex h-[calc(100%-53px)] w-full flex-col-reverse gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
              <div
                className={
                  "flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%]"
                }
              >
                <img
                  className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                  src={
                    "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt="avatar"
                />
                <div className="flex w-full max-w-[70%] flex-col gap-2">
                  <p className="text-xs">Jane Smith</p>
                  <div
                    className={
                      "relative w-fit bg-[#343434] p-3 text-sm after:absolute after:left-0 after:top-0 after:border-r-[15px] after:border-t-[15px] after:border-r-transparent after:border-t-[#121212]"
                    }
                  >
                    <div className="flex w-full items-center justify-center gap-1.5 px-3 py-1">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                    </div>
                  </div>
                </div>
              </div>
              {chatMessagesDummyData.map((message, i) => {
                return (
                  <div
                    className={classNames(
                      "flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%]",
                      message.isOwnMessage
                        ? "ml-auto flex-row-reverse"
                        : "mr-0",
                    )}
                    key={i}
                  >
                    <img
                      className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                      src={message.avatar}
                      alt="avatar"
                    />
                    <div
                      className={classNames(
                        "flex w-full flex-col gap-1 md:gap-2",
                        message.isOwnMessage ? "items-end justify-end" : "",
                      )}
                    >
                      <p className="text-[10px] md:text-xs">
                        {message.fullName}
                        <span className="ml-2 text-gray-400">
                          {message.time}
                        </span>
                      </p>
                      <div
                        className={classNames(
                          "relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm",
                          message.isOwnMessage
                            ? "bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent"
                            : "bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent",
                        )}
                      >
                        {message.message}
                      </div>
                      {message?.hasAttachments ? (
                        <div
                          className={classNames(
                            "grid w-full grid-cols-2 items-start justify-start gap-1 md:max-w-[90%] md:gap-2",
                            message.isOwnMessage ? "ml-auto" : "",
                          )}
                        >
                          {dummyAttachments.map((img, i) => {
                            return (
                              <img
                                key={i}
                                className="flex aspect-video w-full flex-shrink-0 object-cover"
                                src={img}
                                alt="avatar"
                              />
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="sticky top-full flex w-full items-center justify-start gap-1 border-t-[1px] border-white px-4 py-2 md:gap-4 md:border-[1px] md:shadow-[5px_5px_0px_0px_#4f4e4e]">
              <img
                className="hidden aspect-square h-5 w-5 flex-shrink-0 rounded-full object-cover md:flex md:h-10 md:w-10"
                src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <input
                placeholder="Message..."
                className="w-full bg-transparent p-2 text-sm text-white !outline-none placeholder:text-gray-500 md:p-4 md:text-base"
              />
              <button className="hidden h-5 w-5 flex-shrink-0 items-center justify-center p-1 md:flex md:h-10 md:w-10">
                <FaceSmileIcon className="h-6 w-6 text-white" />
              </button>
              <button className="flex h-7 w-7 flex-shrink-0 items-center  justify-center p-1 md:h-10 md:w-10">
                <PaperClipIcon className="h-6 w-6 text-white" />
              </button>
              <button className="flex h-7 w-7 flex-shrink-0 items-center justify-center  bg-[#ae7aff] p-1 md:h-10 md:w-10">
                <PaperAirplaneIcon className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
