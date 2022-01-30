import React from "react";
// do not create sub components for this component as the footer is static and is never going to change.
export default function Footer() {
  return (
    <div className="my-5">
      <div className="mx-5 h-auto lg:grid flex flex-col">
        <div className="px-5 py-5 lg:col-start-1">
          <p className="text-xl">About</p>
          <p className="px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio
            soluta aliquam ex vel ea.
          </p>
        </div>
        <div className="px-5 py-5 lg:col-start-2">
          <p className="text-xl">Program</p>
          <p className="px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio
            soluta aliquam ex vel ea.
          </p>
        </div>
        <div className="px-5 py-5 lg:col-start-3">
          <p className="text-xl">Misc</p>
          <p className="px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In optio
            soluta aliquam ex vel ea.
          </p>
        </div>
      </div>
    </div>
  );
}
