import React from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item, index) => {
    return (
      <div className="list" key={index}>
        <p>
          {item.text}
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(index)}
            />
          </span>
        </p> 
      </div>
    );
  });
  return (
    <div>
      {listItems}
      <FlipMove duration={500} easing="ease-in-out"></FlipMove>
    </div>
  );
}

export default ListItems;
