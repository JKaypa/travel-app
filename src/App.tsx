import "./App.css";
import { Router } from "./components/components";
import { Route } from "./enums/enums";
import { AuthForm, Layout, MainPage } from "./pages/pages";

function App() {
  return (
    <Router
      routes={[
        {
          element: <Layout />,
          children: [
            { path: Route.SIGNIN, element: <AuthForm /> },
            { path: Route.SIGNUP, element: <AuthForm /> },
            { path: Route.ROOT, element: <MainPage /> },
          ],
        },
      ]}
    />
  );
}

export default App;
