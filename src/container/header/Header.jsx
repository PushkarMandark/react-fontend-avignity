import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum
          cumque explicabo dicta unde aspernatur necessitatibus esse commodi
          omnis ratione. Cupiditate amet molestiae nihil, hic dolore aperiam
          dicta omnis. Aliquam?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header__people">
          <img src={people} alt="people" />
          <p>1,600 People requested access a visit in last 24 hours</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
