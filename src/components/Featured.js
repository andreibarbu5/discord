import React from "react";
import picture2 from "../photos/lmfao.jpg";
import picture1 from "../photos/background2.jpg";
import Card from "./Card";
import bg1 from "../photos/bg01.jpg";
import bg2 from "../photos/bg02.jpg";
import bg3 from "../photos/bg03.jpg";
import bg4 from "../photos/bg04.jpg";
import { Outlet, Link } from "react-router-dom";

const Featured = () => {
  const cards = [
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg2,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg3,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg4,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: picture1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg1,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg2,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: bg3,
      profile: picture2,
      title: "Fire Emblem Heroes",
      description:
        "We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom",
      size: <p>85,532 Online &#x2022; 232,061 Members</p>,
    },
  ];
  return (
    <div className="pt-6   ">
      {/* Titles */}
      <div className="text-white pb-4">
        <p className="font-bold text-[20px]">Featured Servers</p>
        <p className="text-white/50">
          Some awesome Discords we think you'd love
        </p>
      </div>

      {/* Cards*/}
      <div className="grid grid-cols-1 xs:grid-cols-2   lg:grid-cols-3 gap-y-8 xs:gap-x-2 sm:gap-x-4 mb-4  ">
        {cards.map((card) => (
          <Link to="/card">
            <Card
              bg={card.bg}
              profile={card.profile}
              title={card.title}
              description={card.description}
              size={card.size}
              key={card.description}
            />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
