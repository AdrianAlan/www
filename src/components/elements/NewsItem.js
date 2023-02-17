import React from "react";

function NewsItem(props) {
  return (
    <div className="news-item is-light">
      <div className="news-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="news-content">
        <p className="title is-6 has-text-dark has-text-weight-bold">{props.date}</p>
        <p className="title is-4 has-text-dark has-text-weight-bold">{props.title}</p>
        <p className="subtitle is-6 has-text-dark  has-text-weight-bold">{props.content}</p>
      </div>
    </div>
  );
}

export default NewsItem;
