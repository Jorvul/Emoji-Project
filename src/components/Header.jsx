import React from "react";

function Header(props) {
    return (
        <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
    )
}
export default Header;
