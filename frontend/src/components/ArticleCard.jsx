import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import articleType from "../types/article";

function ArticleCard({ article }) {
  return (
    <article className="col-md-4 col-sm-12 d-flex flex-column">
      <div className="border m-2 p-2 h-100 rounded-1 shadow-sm flex-fill">
        <h2 className="text-center">{article.title}</h2>
        <img
          src={article.image.src}
          alt={article.image.alt}
          className="p-2 img-fluid w-100"
        />
      </div>
      <div className="">
        <Link
          to={`/articles/${article.id}`}
          className="btn btn-secondary w-100"
        >
          En savoir plus
        </Link>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.instanceOf(articleType).isRequired,
};

export default ArticleCard;
