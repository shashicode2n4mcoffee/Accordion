import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const { title, info } = question;
  const [btn,setBtn] = useState(false);
  const toggle =()=>{
    setBtn((btn)=>{
      return(!btn)
    })
  }
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={toggle} className="btn">{btn?<AiOutlineMinus />:<AiOutlinePlus />}</button>
      </header>
      {btn && <p>{info}</p>}
    </article>
  );
};

export default Question;
