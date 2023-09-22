import Authentication from "@/components/templates/authentication";
import Chat from "@/components/templates/chat";
import SocialMedia from "@/components/templates/social-media";
import Todo from "@/components/templates/todo";
import Youtube from "@/components/templates/youtube";

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
        component: <Authentication.Register />,
      },
      {
        id: "login",
        name: "Login Page",
        component: <Authentication.Login />,
      },
      {
        id: "forgot-password",
        name: "Forgot Password Page",
        component: <Authentication.ForgotPassword />,
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
        component: <Chat.EmptyChats />,
      },
      {
        id: "chat-screen",
        name: "Chat Screen",
        component: <Chat.ChatScreen />,
      },
      {
        id: "create-normal-chat",
        name: "Create Personal Chat",
        component: <Chat.CreateOneOnOneChat />,
      },
      {
        id: "create-group-chat",
        name: "Create Group Chat",
        component: <Chat.CreateGroupChat />,
      },
      {
        id: "group-chat-info",
        name: "About Group Chat",
        component: <Chat.GroupInfo />,
      },
      {
        id: "chat-register",
        name: "Chat Register",
        component: <Chat.Register />,
      },
      {
        id: "chat-login",
        name: "Chat Login",
        component: <Chat.Login />,
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
        component: <SocialMedia.PostListing />,
      },
      {
        id: "post-detail",
        name: "Post Detail",
        component: <SocialMedia.PostDetail />,
      },
      {
        id: "user-profile",
        name: "User Profile",
        component: <SocialMedia.UserProfile />,
      },
      {
        id: "my-profile",
        name: "My Profile",
        component: <SocialMedia.MyProfile />,
      },
      {
        id: "edit-profile",
        name: "Edit Profile",
        component: <SocialMedia.EditProfile />,
      },
      {
        id: "change-password",
        name: "Change Password",
        component: <SocialMedia.ChangePassword />,
      },
      {
        id: "bookmarked-posts",
        name: "Bookmarked Posts",
        component: <SocialMedia.BookmarkedPosts />,
      },
      {
        id: "social-register",
        name: "Social Register",
        component: <SocialMedia.Register />,
      },
      {
        id: "social-login",
        name: "Social Login",
        component: <SocialMedia.Login />,
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
        component: <Todo.EmptyTodos />,
      },
      {
        id: "todos",
        name: "Todos Page",
        component: <Todo.TodosList />,
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
        component: <Youtube.EmptyVideos />,
      },
      {
        id: "video-card",
        name: "Video Listing Page (Card View)",
        component: <Youtube.VideoCards />,
      },
      {
        id: "video-list",
        name: "Video Listing Page (List View)",
        component: <Youtube.VideoList />,
      },
      {
        id: "video-detail",
        name: "Video Detail Page",
        component: <Youtube.VideoDetail />,
      },
      {
        id: "channel-empty-video",
        name: "Channel Empty Video Page",
        component: <Youtube.ChannelEmptyVideo />,
      },
      {
        id: "channel-video-list",
        name: "Channel Video List Page",
        component: <Youtube.ChannelVideoList />,
      },
      {
        id: "channel-empty-playlist",
        name: "Channel Empty Playlist Page",
        component: <Youtube.ChannelEmptyPlaylist />,
      },
      {
        id: "channel-playlist",
        name: "Channel Playlist Page",
        component: <Youtube.ChannelPlaylist />,
      },
      {
        id: "channel-paylist-videos",
        name: "Channel Playlist Videos Page",
        component: <Youtube.ChannelPlaylistVideos />,
      },
      {
        id: "channel-empty-tweet",
        name: "Channel Empty Tweet Page",
        component: <Youtube.ChannelEmptyTweet />,
      },
      {
        id: "channel-tweets",
        name: "Channel Tweets Page",
        component: <Youtube.ChannelTweets />,
      },
      {
        id: "channel-empty-subscribed",
        name: "Channel Empty Subscribed Page",
        component: <Youtube.ChannelEmptySubscribed />,
      },
      {
        id: "channel-subscribed",
        name: "Channel Subscribed Page",
        component: <Youtube.ChannelSubscribed />,
      },
      {
        id: "mychannel-empty-video",
        name: "My Channel Empty Video Page",
        component: <Youtube.MyChannelEmptyVideo />,
      },
      {
        id: "mychannel-empty-tweet",
        name: "My Channel Empty Tweet Page",
        component: <Youtube.MyChannelEmptyTweet />,
      },
      {
        id: "mychannel-tweets",
        name: "My Channel Tweets Page",
        component: <Youtube.MyChannelTweets />,
      },
      {
        id: "edit-personal-info",
        name: "Edit Personal Info Page",
        component: <Youtube.EditPersonalInfo />,
      },
      {
        id: "edit-channel-info",
        name: "Edit Channel Info Page",
        component: <Youtube.EditChannelInfo />,
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
