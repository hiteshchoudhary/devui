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
      {
        id: "create-normal-chat",
        name: "Create one on one chat",
        component: <CreateOneOnOneChat />,
      },
      {
        id: "create-group-chat",
        name: "Create a group chat",
        component: <CreateGroupChat />,
      },
      {
        id: "group-chat-info",
        name: "Group chat information",
        component: <GroupChatInfo />,
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
