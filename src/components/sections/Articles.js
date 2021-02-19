import React, { Component } from "react";
import Article from "../elements/Article";
import Resume from "../../resume.json";

class Articles extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    let articles = [];
    Resume.articles
	    .map((item, index) => {
          articles.push(
            <div className="column" key={index}>
              <Article
                key={index}
                title={item.title}
                url={item.url}
                extract={item.abstract}
              />
            </div>
          );
        });
        this.setState({ articles: articles });
      };
  

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <h2 className="subtitle is-2">My latest articles</h2>
          <div className="columns">{this.state.articles}</div>
        </div>
      </section>
    );
  }
}

export default Articles;
