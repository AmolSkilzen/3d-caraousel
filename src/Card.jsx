import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="flex flex-col justify-center bg-slate-100 w-64 h-fit py-8 px-4 rounded-xl"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}>
      <img src={imagen} alt="card" className="w-full rounded-xl" />
      <h2 className="m-0 mt-4 text-lg font-bold text-gray-600 capitalize">
        Title
      </h2>
      <p className="m-0 mt-2 mb-6 text-[16px] font-semibold">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <div className="flex justify-between items-center">
        <Button text="Demo" />
        <Button text="Code" />
      </div>
    </animated.div>
  );
}

export default Card;
