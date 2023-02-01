import Button from "./Button";

import classNames from "classnames";

import "./MainPage.scss";

function MainPage(props) {

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
        <Button label="About"/>
        <Button label="Portfolio"/>
        <Button label="Contact"/>
      </section>
    </div>
  )
};

export default MainPage;