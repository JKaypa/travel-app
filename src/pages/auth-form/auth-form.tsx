import { Link, useLocation } from "react-router-dom";
import { BtnChild, BtnCls, BtnTest, InputTest, InputType, Label, Name, Route } from "~/enums/enums";
import { Button, Input } from "../../components/components";
import { PWord } from "./enums/password.enum";
import "./styles/auth-form.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AuthRequestDto } from "~/types/types";
import { useAppDispatch } from "~/hooks/hooks";
import { signin, signup } from "~/store/actions/actions";

const AuthForm = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isSignin = pathname === Route.SIGNIN;
  const testId = isSignin ? "auth-sign-in-link" : "auth-sign-up-link";
  const title = isSignin ? BtnChild.SIGNIN : BtnChild.SIGNUP;
  const [user, setUser] = useState<AuthRequestDto>({ email: "", password: "" });

  useEffect(() => {
    isSignin
      ? setUser({ email: "", password: "" })
      : setUser({ email: "", password: "", fullName: "" });
  }, [isSignin]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case Name.FULL_NAME:
        setUser({ ...user, fullName: value });
        break;
      case Name.EMAIL:
        setUser({ ...user, email: value });
        break;
      case Name.PASSWORD:
        setUser({ ...user, password: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isSignin ? dispatch(signin(user)) : dispatch(signup(user));
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
            value={user.fullName}
            onChange={handleChange}
          />
        ) : null}
        <Input
          label={Label.EMAIL}
          name={Name.EMAIL}
          testId={InputTest.EMAIL}
          type={InputType.EMAIL}
          value={user.email}
          onChange={handleChange}
        />
        <Input
          label={Label.PASSWORD}
          name={Name.PASSWORD}
          testId={InputTest.PASSWORD}
          type={InputType.PASSWORD}
          maxLength={PWord.MAX}
          minLength={PWord.MIN}
          value={user.password}
          onChange={handleChange}
        />
        <Button children={title} cls={BtnCls.BUTTON} testId={BtnTest.SUBMIT} type={"submit"} />
      </form>
      <span>
        {isSignin ? "Don't have an account? " : "Already have an account? "}
        <Link
          to={isSignin ? Route.SIGNUP : Route.SIGNIN}
          data-test-id={testId}
          className="sign-up-form__link"
        >
          {isSignin ? BtnChild.SIGNUP : BtnChild.SIGNIN}
        </Link>
      </span>
    </main>
  );
};

export { AuthForm };
