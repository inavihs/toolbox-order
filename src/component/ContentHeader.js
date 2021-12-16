import React from "react";
import "../asset/css/app.css";

const ContentHeader = (props) => {
  return (
    <div className="content-header">
      <h1>{props.title}</h1>
      <p>{props.noOfItems} item(s) selected</p>
    </div>
  );
};

export default ContentHeader;
