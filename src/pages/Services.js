import CatalogueCards from "../components/cards/CatalogueCards";
import React from "react";

export default function Services() {
  const typesOfService = [
    {
      cardId: 1,
      cardTitle: "string",
      cardTitleImg: "url",
      cardDesc: "string",
      subscriptionType: "string",
    },
    {
      cardId: 2,
      cardTitle: "string",
      cardTitleImg: "url",
      cardDesc: "string",
      subscriptionType: "string",
    },
    {
      cardId: 3,
      cardTitle: "string",
      cardTitleImg: "url",
      cardDesc: "string",
      subscriptionType: "string",
    },
    {
      cardId: 4,
      cardTitle: "string",
      cardTitleImg: "url",
      cardDesc: "string",
      subscriptionType: "string",
    },
    {
      cardId: 5,
      cardTitle: "string",
      cardTitleImg: "url",
      cardDesc: "string",
      subscriptionType: "string",
    },
    {
      cardId: 6,
      cardTitle: "string",
      cardTitleImg: "url",
      cardDesc: "string",
      subscriptionType: "string",
    },
  ];
  let listOfServices = typesOfService.map((service) => (
    <CatalogueCards key={service.cardId} data={service} />
  ));
  return (
    <div className="py-5 px-5">
      <p className="text-center text-2xl pb-5">Services</p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        {listOfServices}
      </div>
    </div>
  );
}
