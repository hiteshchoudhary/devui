import Register from "@/components/templates/authentication/register";
import Login from "@/components/templates/authentication/login";
import ForgotPassword from "@/components/templates/authentication/forgot-password";

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
];

export const getComponentByAppPageId = (appId: string, pageId: string) => {
  const application = applications.find((app) => app.id === appId);

  if (!application) return <h1>Application id in invalid</h1>;

  const page = application.pages.find((page) => page.id === pageId);

  if (!page) return <h1>Page id in invalid</h1>;

  return page.component;
};
