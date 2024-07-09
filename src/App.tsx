import "./App.css";
import { Router } from "./components/components";
import { Layout } from "./pages/pages";

function App() {
  return (
    <Router
      routes={[
        {
          path: "/",
          element: <Layout />,
          children: [],
        },
      ]}
    />
  );
}

export default App;
