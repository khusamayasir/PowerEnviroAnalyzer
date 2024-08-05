import React from "react";

interface Props {
  heading: string;
}

const HeadingTag = ({ heading }: Props) => {
  return (
    <h3
      className="text-left py-3 text-uppercase"
      style={{ fontWeight: 600, borderBottom: "1px solid #d5d5d5" }}
    >
      {heading}
    </h3>
  );
};

export default HeadingTag;
