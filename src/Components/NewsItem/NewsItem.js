import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    // console.log(description.length);

    return (
      <div className="my-3 ">
        <div className="card" style={{ width: " 18rem" }}>
          <img src={imgUrl} className="card-img-top" alt="crick" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
