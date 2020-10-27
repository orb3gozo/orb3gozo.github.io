import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Every day we change the world. But to change the world in a way that means anything that takes more time than most people have. it never happens all at once." 
          +"Its slow. Its methodical. Its exhausting. We don't all have the stomach for it.")}        
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>🤖🤖</p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
