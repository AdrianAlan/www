import React from "react";
import parse from "html-react-parser";

function NewsItem(props) {
  return (
    <div className="news-item is-light">
      <div className="news-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="news-content">
        <p className="subtitle is-6 has-text-dark">{props.date}</p>
        <p className="title is-6 has-text-dark has-text-weight-bold">{parse(props.title)}</p>
        <p className="subtitle is-6 has-text-dark">{parse(props.content)}</p>
      </div>
    </div>
  );
}

export default NewsItem;
