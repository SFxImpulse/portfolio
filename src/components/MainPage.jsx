import About from "./About";
import Button from "./Button";

import classNames from "classnames";

import "./MainPage.scss";

const MainPage = props => {

  let mainPage = classNames({
    "main-page": !props.dark,
    "main-page-dark": props.dark,
  });

  return (
    <div className={mainPage}>
      <section className="hero-section-container">
        <h2 className="title text--regular">Full Stack Web Developer</h2>
        <h1 className="name text--bold">David Braverman</h1>
        <h4 className="bio text--light">I am a full stack web developer based in Toronto Ontario. I love video games, making music, and my lovely animals.</h4>
      </section>
      {/* <img src="itsa me"></img> */}
      <section className="button-container">
        <Button dark={props.dark} label="About"/>
        <Button dark={props.dark} label="Portfolio"/>
        <Button dark={props.dark} label="Contact"/>
      </section>
      <About />
    </div>
  )
};

export default MainPage;