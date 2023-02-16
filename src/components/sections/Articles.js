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
	    <div className="columns">
            <div className="column is-12" key={index}>
              <Article
                key={index}
                title={item.title}
                url={item.url}
                extract={item.abstract}
              />
            </div>
            </div>
          );
        });
        this.setState({ articles: articles });
      };
  

  render() {
    return (
      <section className="section" id="articles">
        <div className="container">
          <h2 className="title has-text-dark has-text-weight-bold">Publications</h2>
          {this.state.articles}
        </div>
      </section>
    );
  }
}

export default Articles;
