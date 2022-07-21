import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(ele => {
          return (<Card
            key={ele.id}
            emoji={ele.emoji}
            name={ele.name}
            meaning={ele.meaning}
          />
          )
        })}
      </dl>
    </div>
  );
}

export default App;
