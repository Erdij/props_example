import React from "react";
import Card from "./Card";
import Collapse from "./Collapse";
const Cards = (props) => {
  console.log(props.children);
  return (
    <div className="Cards">
      <Collapse href="collapseExample1">
        <Card
          cardTitle="Card Title 1 "
          cardText="Lorem Ipsum Text 1"
          updatedTime="Last Updated 1 min ago"
          image="https://picsum.photos/id/1/200/300"
        />
      </Collapse>
      <Collapse href="collapseExample2">
        <Card
          cardTitle="Card Title 2 "
          cardText="Lorem Ipsum Text 1"
          updatedTime="Last Updated 1 min ago"
          image="https://picsum.photos/id/2/200/300"
        />
      </Collapse>
      <Collapse href="collapseExample3">
        <Card
          cardTitle="Card Title 3 "
          cardText="Lorem Ipsum Text 3"
          updatedTime="Last Updated 3 min ago"
          image="https://picsum.photos/id/3/200/300"
        />
      </Collapse>
    </div>
  );
};

export default Cards;
