import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Protected, Router } from "./components/components";
import { Privacy, Route, StorageKey } from "./enums/enums";
import { useAppDispatch } from "./hooks/hooks";
import { AuthForm, Bookings, Layout, MainPage, TripDetail } from "./pages/pages";
import { storage } from "./services/services";
import { authUser, getUser } from "./store/actions/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const hasToken = storage.has(StorageKey.TOKEN);

  useEffect(() => {
    if (hasToken) {
      dispatch(getUser());
    } else {
      dispatch(authUser(false));
    }
  }, [dispatch, hasToken]);

  return (
    <Router
      routes={[
        {
          element: <Layout />,
          children: [
            {
              path: Route.SIGNIN,
              element: (
                <Protected privacy={Privacy.PUBLIC}>
                  <AuthForm />
                </Protected>
              ),
            },
            {
              path: Route.SIGNUP,
              element: (
                <Protected privacy={Privacy.PUBLIC}>
                  <AuthForm />
                </Protected>
              ),
            },
            {
              path: Route.ROOT,
              element: (
                <Protected privacy={Privacy.PRIVATE}>
                  <MainPage />
                </Protected>
              ),
            },
            {
              path: Route.TRIP_ID,
              element: (
                <Protected privacy={Privacy.PRIVATE}>
                  <TripDetail />
                </Protected>
              ),
            },
            {
              path: Route.BOOKINGS,
              element: (
                <Protected privacy={Privacy.PRIVATE}>
                  <Bookings />
                </Protected>
              ),
            },
            { path: Route.UNKNOWN, element: <Navigate to={Route.ROOT} /> },
          ],
        },
      ]}
    />
  );
}

export default App;
