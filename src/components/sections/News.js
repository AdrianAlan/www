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
          <div className="container">
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
          </div>
        );
      });
    this.setState({ news: news });
  };


  render() {
    return (
      <section className="section" id="news">
        <div className="container summary-text">
          <p className="subtitle is-5">News:</p>
          {this.state.news}
        </div>
      </section>
    );
  }
}

export default News;
