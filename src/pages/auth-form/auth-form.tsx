import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components/components";
import { BtnCls, BtnTest, InputTest, InputType, Label, Name, Route, Title } from "~/enums/enums";
import "./styles/auth-form.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const testId = pathname === Route.SIGNIN ? "auth-sign-in-link" : "auth-sign-up-link";
  const title = pathname === Route.SIGNIN ? Title.SIGNIN : Title.SIGNUP;

  const handleSubmit = () => {
    navigate(Route.ROOT);
  };

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="sign-up-form__title">{title}</h2>
        {pathname === Route.SIGNUP ? (
          <Input
            label={Label.FULL_NAME}
            name={Name.FULL_NAME}
            testId={InputTest.FULL_NAME}
            type={InputType.TEXT}
          />
        ) : null}
        <Input
          label={Label.EMAIL}
          name={Name.EMAIL}
          testId={InputTest.EMAIL}
          type={InputType.EMAIL}
        />
        <Input
          label={Label.PASSWORD}
          name={Name.PASSWORD}
          testId={InputTest.PASSWORD}
          type={InputType.PASSWORD}
        />
        <Button children={title} cls={BtnCls.BUTTON} testId={BtnTest.SUBMIT} type={"submit"} />
      </form>
      <span>
        {pathname === Route.SIGNUP ? "Already have an account? " : "Don't have an account? "}
        <Link
          to={pathname === Route.SIGNUP ? Route.SIGNIN : Route.SIGNUP}
          data-test-id={testId}
          className="sign-up-form__link"
        >
          {pathname === Route.SIGNUP ? Title.SIGNIN : Title.SIGNUP}
        </Link>
      </span>
    </main>
  );
};

export { AuthForm };
