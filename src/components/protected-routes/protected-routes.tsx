import { Navigate } from "react-router-dom";
import { Privacy, Route } from "~/enums/enums";
import { useAppSelector } from "~/hooks/hooks";
import { ValueOf } from "~/types/types";

type Properties = {
  children: React.ReactNode;
  privacy: ValueOf<typeof Privacy>;
};

const Protected: React.FC<Properties> = ({ children, privacy }) => {
  const isUserAuth = useAppSelector((state) => state.auth.isUserAuth);

  if (isUserAuth === undefined) {
    return null;
  }

  switch (privacy) {
    case Privacy.PRIVATE: {
      return isUserAuth ? children : <Navigate to={Route.SIGNIN} />;
    }

    case Privacy.PUBLIC: {
      return isUserAuth ? <Navigate to={Route.ROOT} /> : children;
    }
  }
};

export { Protected };
