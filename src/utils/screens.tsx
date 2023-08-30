import Register from "@/components/templates/authentication/register";
import Login from "@/components/templates/authentication/login";
import ForgotPassword from "@/components/templates/authentication/forgot-password";
import TodosList from "@/components/templates/todo/todos";
import TodoForm from "@/components/templates/todo/todo-form";
import EmptyTodos from "@/components/templates/todo/empty-todos";

export const applications = [
  {
    name: "Authentication app",
    id: "authentication",
    subtitle: "UIs for Authentication app",
    description: "Ui of Register, Login and Forgot password screens",
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
    subtitle: "UIs for Todo app",
    description: "UI of Todo listing and Todo form screens",
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
      {
        id: "todo-form",
        name: "Todo form",
        component: <TodoForm />,
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
