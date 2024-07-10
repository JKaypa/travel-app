import "./App.css";
import { Router } from "./components/components";
import { Route } from "./enums/enums";
import { AuthForm, Layout } from "./pages/pages";

function App() {
  return (
    <Router
      routes={[
        {
          path: Route.ROOT,
          element: <Layout />,
          children: [
            { path: Route.SIGNIN, element: <AuthForm /> },
            { path: Route.SIGNUP, element: <AuthForm /> },
          ],
        },
      ]}
    />
  );
}

export default App;
