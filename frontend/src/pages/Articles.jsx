import React from "react";
import { Helmet } from "react-helmet";
import articles from "../assets/data.json";
import ArticleCard from "../components/ArticleCard";

function Articles() {
  return (
    <div>
      <Helmet>
        <title>Working Mom Lifestyle Blog</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repellendus deleniti nam corrupti eius ipsam accusantium pariatur nesciunt eos, perspiciatis saepe eveniet. Ut aperiam, velit sit alias eaque dignissimos quis."
        />
      </Helmet>
      <h1 className="text-center text-secondary">Working mom lifestyle</h1>
      <section className="container">
        <div className="row">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Articles;
