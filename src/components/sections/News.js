import React, { Component } from "react";
import NewsItem from "../elements/NewsItem";
import Resume from "../../resume.json";

class News extends Component {
  constructor(props) {
    super();
    this.state = { news: [] };
  }

  componentDidMount() {
    let news = [];
    Resume.news
	  .map((item, index) => {
          news.push(
	    <div className="columns">
            <div className="column is-12" key={index}>
              <NewsItem
                key={index}
                title={item.title}
                date={item.date}
                content={item.content}
              />
            </div>
            </div>
          );
        });
        this.setState({ news: news });
      };
  

  render() {
    return (
      <section className="section" id="news">
        <div className="container">
          <h2 className="title has-text-dark has-text-weight-bold">News</h2>
          {this.state.news}
        </div>
      </section>
    );
  }
}

export default News;
