import React from "react";
import Keyword from "./Keyword";

const keywords = [
  {
    url: "",
    name: "điện gia dụng",
  },
  {
    url: "",
    name: "xe cộ",
  },
  {
    url: "",
    name: "mẹ & bé",
  },
  {
    url: "",
    name: "khoẻ đẹp",
  },
  {
    url: "",
    name: "nhà cửa",
  },
  {
    url: "",
    name: "sách",
  },
  {
    url: "",
    name: "thể thao",
  },
];

const Keywords = () => {
  return (
    <div className="flex gap-3">
      {keywords.map((key) => (
        <Keyword key={key.name} href={key.url}>
          <p className="text-sm text-secondary">{key.name}</p>
        </Keyword>
      ))}
    </div>
  );
};

export default Keywords;
