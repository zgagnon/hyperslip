import { Card } from "../design-system/Card";
import React from "react";

const EntryCard: React.FC = () => {
  return (
    <Card
      title={"example"}
      note={"some complex note, I am sure"}
      id={"1"}
      tags={["example"]}
    />
  );
};

export default EntryCard;
