import React from "react";
import { PaperAirplaneIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import {
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
    message: "Hey there, how's it going? I hope you're having a great day!",
    time: "Just now",
    isOwnMessage: true,
    hasAttachments: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message:
      "Hi! I'm doing well, thanks. Just working on some coding projects. How about you?",
    time: "2 minutes ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
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
    fullName: "Jane Smith",
    message:
      "I'll have to add it to my reading list. By the way, have you seen the latest episode of that new TV series?",
    time: "30 minutes ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Not yet, but I plan to watch it tonight. No spoilers, please!",
    time: "35 minutes ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Haha, don't worry, no spoilers from me. Enjoy the show!",
    time: "40 minutes ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    fullName: "Jane Smith",
    message: "Sure thing! Have a productive day!",
    time: "1 hour ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Thanks! You too!",
    time: "2 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Goodbye!",
    time: "3 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Goodbye, take care!",
    time: "4 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "See you!",
    time: "5 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Hello again! How's your day been so far?",
    time: "6 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "It's been pretty good, thanks for asking! How about yours?",
    time: "7 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message:
      "My day has been busy but productive. I'm looking forward to the evening.",
    time: "8 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "That's great to hear! Any exciting plans for the evening?",
    time: "9 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Not sure yet, but I might go out for dinner with some friends.",
    time: "10 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "That sounds like a fun plan! Enjoy your evening!",
    time: "11 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Thanks! I hope you have a wonderful evening too.",
    time: "12 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Indeed, have a great one!",
    time: "13 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "I'm counting down the hours until the weekend!",
    time: "14 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Me too! Do you have any exciting weekend plans?",
    time: "15 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Not yet, but I'm open to suggestions!",
    time: "16 hours ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message:
      "Well, there's a new restaurant that just opened downtown. We could check it out!",
    time: "17 hours ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    fullName: "Dan Abramov",
    message: "You too!",
    time: "1 day ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Hello again! How's everything going?",
    time: "2 days ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message:
      "I'm doing well, thanks! Just staying busy with work and other projects.",
    time: "3 days ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "That's great to hear! Staying productive is always a good thing.",
    time: "4 days ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Absolutely! It helps keep me motivated.",
    time: "5 days ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
  {
    fullName: "Dan Abramov",
    message: "Goodbye for now!",
    time: "1 week ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "See you later!",
    time: "2 weeks ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Dan Abramov",
    message: "Hello again! How's everything going?",
    time: "3 weeks ago",
    isOwnMessage: true,
    avatar:
      "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Jane Smith",
    message: "Hey there! Things are going well on my end. How about you?",
    time: "1 month ago",
    isOwnMessage: false,
    avatar:
      "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const dummyAttachments = [
  "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const ChatScreen = () => {
  return (
    <div className="bg-[#121212]">
      <header className="fixed top-0 z-10 mx-auto flex w-full max-w-[85rem] items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
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
      <div className="mt-[83px] flex h-[calc(100vh-83px)] w-full items-center justify-center overflow-hidden p-0">
        <div className="h-full w-[30%] border-r-[1px] border-white">
          <div className="flex w-full items-center justify-start gap-2 border-b-[1px] border-white p-4">
            <input
              placeholder="Search chat..."
              className="w-full bg-transparent px-2 text-white !outline-none placeholder:text-gray-500 md:px-4"
            />
            <button className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            </button>
            <button className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1">
              <FunnelIcon className="h-5 w-5 text-white" />
            </button>
          </div>
          <ul className="flex h-[calc(100%-73px)] w-full flex-col items-start justify-start divide-y-[1px] divide-white overflow-y-auto">
            {chatListDummyData.map((item, i) => {
              return (
                <li
                  className="w-full cursor-pointer p-6 hover:bg-[#232323]"
                  key={i}
                >
                  <div className="flex w-full items-start justify-start gap-4">
                    <img
                      className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src={item.avatar}
                      alt="avatar"
                    />
                    <div className="flex w-full flex-col items-start justify-start gap-1 truncate text-ellipsis">
                      <div className="flex w-full items-center justify-between text-xs">
                        <p className="text-gray-400">{item.fullName}</p>
                        <p className="text-gray-400">{item.dateTime}</p>
                      </div>
                      <p className="text-sm text-white">{item.lastMessage}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-full w-[70%]">
          <div className="flex w-full items-center justify-between gap-2 border-b-[1px] border-white p-4">
            <div className="flex w-full items-center justify-start gap-3">
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <p className="font-semibold text-white">Jane smith</p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1">
                <ShareIcon className="h-5 w-5 text-white" />
              </button>
              <button className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center border-[1px] border-white p-1">
                <EllipsisVerticalIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-158px)] w-full p-4">
            <div className="flex h-[calc(100%-90px)] w-full flex-col-reverse gap-8 overflow-y-auto">
              <div
                className={
                  "flex min-w-[150px] max-w-[70%] items-start justify-start gap-2 text-white"
                }
              >
                <img
                  className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
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
                      "flex min-w-[150px] max-w-[70%] items-start justify-start gap-2 text-white",
                      message.isOwnMessage
                        ? "ml-auto flex-row-reverse"
                        : "mr-0",
                    )}
                    key={i}
                  >
                    <img
                      className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src={message.avatar}
                      alt="avatar"
                    />
                    <div
                      className={classNames(
                        "flex w-full flex-col gap-2",
                        message.isOwnMessage ? "items-end justify-end" : "",
                      )}
                    >
                      <p className="text-xs">
                        {message.fullName}
                        <span className="ml-2 text-gray-400">
                          {message.time}
                        </span>
                      </p>
                      <div
                        className={classNames(
                          "relative w-fit p-3 text-sm after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212]",
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
                            "flex items-center justify-start gap-2",
                            message.isOwnMessage ? "ml-auto" : "",
                          )}
                        >
                          {dummyAttachments.map((img, i) => {
                            return (
                              <img
                                key={i}
                                className="flex aspect-video w-44 flex-shrink-0 object-cover"
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
            <div className="sticky top-full flex w-full items-center justify-start gap-4 border-[1px] border-white px-4 py-2 shadow-[5px_5px_0px_0px_#4f4e4e]">
              <img
                className="flex aspect-square h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              <input
                placeholder="Message..."
                className="w-full bg-transparent p-2 text-white !outline-none placeholder:text-gray-500 md:p-4"
              />
              <button className="flex h-10 w-10  flex-shrink-0 items-center justify-center p-1">
                <FaceSmileIcon className="h-6 w-6 text-white" />
              </button>
              <button className="flex h-10 w-10  flex-shrink-0 items-center justify-center p-1">
                <PaperClipIcon className="h-6 w-6 text-white" />
              </button>
              <button className="flex h-10 w-10 flex-shrink-0  items-center justify-center bg-[#ae7aff] p-1">
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
