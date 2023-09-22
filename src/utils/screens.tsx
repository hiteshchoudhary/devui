import Register from "@/components/templates/authentication/register";
import Login from "@/components/templates/authentication/login";
import ForgotPassword from "@/components/templates/authentication/forgot-password";
import TodosList from "@/components/templates/todo/todos";
import EmptyTodos from "@/components/templates/todo/empty-todos";
import EmptyChats from "@/components/templates/chat/empty-chats";
import ChatScreen from "@/components/templates/chat/chat-screen";
import CreateGroupChat from "@/components/templates/chat/create-group-chat";
import CreateOneOnOneChat from "@/components/templates/chat/create-normal-chat";
import GroupChatInfo from "@/components/templates/chat/group-information";
import ChatRegister from "@/components/templates/chat/register";
import ChatLogin from "@/components/templates/chat/login";
import SocialMediaPostListing from "@/components/templates/social-media/post-listing";
import SocialMediaPostDetail from "@/components/templates/social-media/post-detail";
import SocialMediaUserProfile from "@/components/templates/social-media/user-profile";
import SocialMediaMyProfile from "@/components/templates/social-media/my-profile";
import SocialMediaEditProfile from "@/components/templates/social-media/edit-profile";
import SocialMediaChangePassword from "@/components/templates/social-media/change-password";
import SocialMediaBookmarkedPosts from "@/components/templates/social-media/bookmark-posts";
import SocialRegister from "@/components/templates/social-media/register";
import SocialLogin from "@/components/templates/social-media/login";
import YoutubeEmptyVideos from "@/components/templates/youtube/empty-videos";
import YoutubeVideoCards from "@/components/templates/youtube/video-cards";
import YoutubeVideoList from "@/components/templates/youtube/video-list";
import YoutubeVideoDetail from "@/components/templates/youtube/video-detail";
import YoutubeChannelEmptyVideo from "@/components/templates/youtube/channel-empty-video";
import YoutubeChannelVideoList from "@/components/templates/youtube/channel-video-list";
import YoutubeChannelEmptyPlaylist from "@/components/templates/youtube/channel-empty-playlist";
import YoutubeChannelPlaylist from "@/components/templates/youtube/channel-playlist";
import YoutubeChannelPlaylistVideos from "@/components/templates/youtube/channel-playlist-videos";
import YoutubeChannelEmptyTweet from "@/components/templates/youtube/channel-empty-tweet";
import YoutubeChannelTweets from "@/components/templates/youtube/channel-tweets";
import YoutubeChannelEmptySubscribed from "@/components/templates/youtube/channel-empty-subscribed";
import YoutubeChannelSubscribed from "@/components/templates/youtube/channel-subscribed";
import YoutubeMyChannelEmptyVideo from "@/components/templates/youtube/mychannel-empty-video";
import YoutubeMyChannelEmptyTweet from "@/components/templates/youtube/mychannel-empty-tweet";

export const applications = [
  {
    name: "Authentication app",
    id: "authentication",
    subtitle: "User Authentication",
    cover: "/auth.png",
    description:
      "Explore authentication screens for a seamless and secure login and registration UI designs. Access the HTML templates by clicking below.",
    pages: [
      {
        id: "register",
        name: "Register Page",
        component: <Register />,
      },
      {
        id: "login",
        name: "Login Page",
        component: <Login />,
      },
      {
        id: "forgot-password",
        name: "Forgot Password Page",
        component: <ForgotPassword />,
      },
    ],
  },

  {
    name: "Chat app",
    id: "chat",
    subtitle: "Real-time Chat",
    cover: "/chat.png",
    description:
      "Discover HTML templates for our chat application screens. Explore sleek, intuitive and responsive designs for seamless communication experiences.",
    pages: [
      {
        id: "empty-chats",
        name: "Empty Chats",
        component: <EmptyChats />,
      },
      {
        id: "chat-screen",
        name: "Chat Screen",
        component: <ChatScreen />,
      },
      {
        id: "create-normal-chat",
        name: "Create Personal Chat",
        component: <CreateOneOnOneChat />,
      },
      {
        id: "create-group-chat",
        name: "Create Group Chat",
        component: <CreateGroupChat />,
      },
      {
        id: "group-chat-info",
        name: "About Group Chat",
        component: <GroupChatInfo />,
      },
      {
        id: "chat-register",
        name: "Chat Register",
        component: <ChatRegister />,
      },
      {
        id: "chat-login",
        name: "Chat Login",
        component: <ChatLogin />,
      },
    ],
  },
  {
    name: "Social Media App",
    id: "social-media",
    subtitle: "Social Media",
    cover: "/social-media.png",
    description:
      "Discover HTML templates for social media application screens. Dive into our UI designs to create engaging, responsive and user-friendly social platforms.",
    pages: [
      {
        id: "post-listing",
        name: "Post Listing",
        component: <SocialMediaPostListing />,
      },
      {
        id: "post-detail",
        name: "Post Detail",
        component: <SocialMediaPostDetail />,
      },
      {
        id: "user-profile",
        name: "User Profile",
        component: <SocialMediaUserProfile />,
      },
      {
        id: "my-profile",
        name: "My Profile",
        component: <SocialMediaMyProfile />,
      },
      {
        id: "edit-profile",
        name: "Edit Profile",
        component: <SocialMediaEditProfile />,
      },
      {
        id: "change-password",
        name: "Change Password",
        component: <SocialMediaChangePassword />,
      },
      {
        id: "bookmarked-posts",
        name: "Bookmarked Posts",
        component: <SocialMediaBookmarkedPosts />,
      },
      {
        id: "social-register",
        name: "Social Register",
        component: <SocialRegister />,
      },
      {
        id: "social-login",
        name: "Social Login",
        component: <SocialLogin />,
      },
    ],
  },
  {
    name: "Todo app",
    id: "todo",
    subtitle: "Task Management",
    cover: "/todo.png",
    description:
      "Explore UI designs for Todo app, a user-friendly task management application. Streamline your productivity by accessing the HTML templates.",
    pages: [
      {
        id: "empty-todos",
        name: "Empty Todos Page",
        component: <EmptyTodos />,
      },
      {
        id: "todos",
        name: "Todos Page",
        component: <TodosList />,
      },
    ],
  },
  {
    name: "Youtube App",
    id: "youtube",
    subtitle: "Video Sharing Platform",
    cover: "/youtube.png",
    description:
      "Explore UI designs for a Youtube clone, a user-friendly video sharing platform. Enhance your viewing experience with these accessible HTML templates.",
    pages: [
      {
        id: "empty-videos",
        name: "Empty Video Page",
        component: <YoutubeEmptyVideos />,
      },
      {
        id: "video-card",
        name: "Video Listing Page (Card View)",
        component: <YoutubeVideoCards />,
      },
      {
        id: "video-list",
        name: "Video Listing Page (List View)",
        component: <YoutubeVideoList />,
      },
      {
        id: "video-detail",
        name: "Video Detail Page",
        component: <YoutubeVideoDetail />,
      },
      {
        id: "channel-empty-video",
        name: "Channel Empty Video Page",
        component: <YoutubeChannelEmptyVideo />,
      },
      {
        id: "channel-video-list",
        name: "Channel Video List Page",
        component: <YoutubeChannelVideoList />,
      },
      {
        id: "channel-empty-playlist",
        name: "Channel Empty Playlist Page",
        component: <YoutubeChannelEmptyPlaylist />,
      },
      {
        id: "channel-playlist",
        name: "Channel Playlist Page",
        component: <YoutubeChannelPlaylist />,
      },
      {
        id: "channel-paylist-videos",
        name: "Channel Playlist Videos Page",
        component: <YoutubeChannelPlaylistVideos />,
      },
      {
        id: "channel-empty-tweet",
        name: "Channel Empty Tweet Page",
        component: <YoutubeChannelEmptyTweet />,
      },
      {
        id: "channel-tweets",
        name: "Channel Tweets Page",
        component: <YoutubeChannelTweets />,
      },
      {
        id: "channel-empty-subscribed",
        name: "Channel Empty Subscribed Page",
        component: <YoutubeChannelEmptySubscribed />,
      },
      {
        id: "channel-subscribed",
        name: "Channel Subscribed Page",
        component: <YoutubeChannelSubscribed />,
      },
      {
        id: "mychannel-empty-video",
        name: "My Channel Empty Video Page",
        component: <YoutubeMyChannelEmptyVideo />,
      },
      {
        id: "mychannel-empty-tweet",
        name: "My Channel Empty Tweet Page",
        component: <YoutubeMyChannelEmptyTweet />,
      },
    ],
  },
];

export const getComponentByAppPageId = (appId: string, pageId: string) => {
  const application = applications.find((app) => app.id === appId);

  if (!application) return <h1>Application id in invalid</h1>;

  const page = application.pages.find((page) => page.id === pageId);

  if (!page) return <h1>Page id in invalid</h1>;

  return page.component;
};
