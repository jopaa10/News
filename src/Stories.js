import React from "react";

import { useGlobalContext } from "./context";
import { GetStories } from "./utils/fetch";

const Stories = () => {
  const { state } = useGlobalContext();
  GetStories();

  console.log(state.isLoading, state.hits);
  if (state.isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {state.hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments}
              comments
            </p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noreferrer"
              >
                read more
              </a>
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;