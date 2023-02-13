import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./News.css";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?  category=business&country=us&apiKey=ea4eb1b5480848ad8f99134504578f85&page=1";
    let data = await fetch(url);
    let response = await data.json();

    this.setState({
      articles: response.articles,
    });
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?  category=business&country=us&apiKey=ea4eb1b5480848ad8f99134504578f85&page=${
      this.state.page - 1
    }`;

    let data = await fetch(url);
    let response = await data.json();

    this.setState({
      articles: response.articles,
      page: this.state.page - 1,
    });
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?  category=business&country=us&apiKey=ea4eb1b5480848ad8f99134504578f85&page=${
      this.state.page + 1
    }`;

    let data = await fetch(url);
    let response = await data.json();

    this.setState({
      articles: response.articles,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <div className="container my-4">
        <div className="container  d-flex justify-content-between  ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={""}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
        <h1>News Top Headline</h1>
        <div className="row">
          {this.state.articles.map((list) => {
            // console.log(list);
            return (
              <div className="col-md-4 " key={list.url}>
                <NewsItem
                  title={list.title ? list.title : ""}
                  description={list.description ? list.description : ""}
                  newsUrl={list.url}
                  imgUrl={
                    !list.urlToImage
                      ? "https://image.cnbcfm.com/api/v1/image/107188769-16%E2%80%A6tgpta230202_npsLK.jpeg?v=1676090024&w=1920&h=1080"
                      : list.urlToImage
                  }
                />
              </div>
            );
          })}
        </div>
        {/* ========== */}
      </div>
    );
  }
}
