import heart from "~/assets/images/heart.svg";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        © 2025, by
        <a className="footer__link" href="https://www.linkedin.com/in/jkaypa/">
          Jose Kaypa
        </a>
        with
        <img className="footer__icon" src={heart} alt="heart" />
      </span>
    </footer>
  );
};

export { Footer };
