import React from "react";

function Article(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title">{props.title}</p>
        </a>
      </div>
      <div className="card-content">
        <a href={props.url} target="blank">
          Read the full article
        </a>
      </div>
    </div>
  );
}

export default Article;
