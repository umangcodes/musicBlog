import React from "react";
export default function CatalogueCards(props) {
  return (
    <div className="h-96 w-96 border-2 rounded-xl bg-white hover:scale-105 mx-2">
      <img
        src="https://raw.githubusercontent.com/Pavitra554/Tailwind-css-card-component/13ba5e26f76204b221f6ecef260e310822242d50/public/thumb.svg"
        className=" rounded-2xl object-fill px-2 py-2 "
      />
      <p className="text-semibold text-xl px-5 pt-5">
        card id: {props.data.cardId}
      </p>
      <p className="px-5 py">card desc: {props.data.cardDesc}</p>
      <p className="px-5 py-2">
        Subscription type: {props.data.subscriptionType}
      </p>
    </div>
  );
}
