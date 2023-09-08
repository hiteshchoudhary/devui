import Register from "@/components/templates/authentication/register";
import Login from "@/components/templates/authentication/login";
import ForgotPassword from "@/components/templates/authentication/forgot-password";
import TodosList from "@/components/templates/todo/todos";
import EmptyTodos from "@/components/templates/todo/empty-todos";
import EmptyChats from "@/components/templates/chat/empty-chats";
import ChatScreen from "@/components/templates/chat/chat-screen";
import PostListing from "@/components/templates/social-media/post-listing";
import PostDetail from "@/components/templates/social-media/post-detail";
import MyProfile from "@/components/templates/social-media/my-profile";

export const applications = [
  {
    name: "Authentication app",
    id: "authentication",
    subtitle: "User Authentication",
    description: "Screens for user registration, login, and password recovery",
    pages: [
      {
        id: "register",
        name: "Register page",
        component: <Register />,
      },
      {
        id: "login",
        name: "Login page",
        component: <Login />,
      },
      {
        id: "forgot-password",
        name: "Forgot Password page",
        component: <ForgotPassword />,
      },
    ],
  },
  {
    name: "Todo app",
    id: "todo",
    subtitle: "Task Management",
    description: "Screens for managing your tasks and to-dos",
    pages: [
      {
        id: "empty-todos",
        name: "Empty todos page",
        component: <EmptyTodos />,
      },
      {
        id: "todos",
        name: "Todos page",
        component: <TodosList />,
      },
    ],
  },
  {
    name: "Chat app",
    id: "chat",
    subtitle: "Real-time Chat",
    description: "Screens for real-time chat conversations",
    pages: [
      {
        id: "empty-chats",
        name: "Empty chats",
        component: <EmptyChats />,
      },
      {
        id: "chat-screen",
        name: "Chat screen",
        component: <ChatScreen />,
      },
    ],
  },
  {
    name: "Social Media App",
    id: "social-media",
    subtitle: "Social Media",
    description: "All-in-one social media solution for posts and profiles.",
    pages: [
      {
        id: "post-listing",
        name: "Post Listing",
        component: <PostListing />,
      },
      {
        id: "post-detail",
        name: "Post Detail",
        component: <PostDetail />,
      },
      {
        id: "my-profile",
        name: "My Profile",
        component: <MyProfile />,
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
