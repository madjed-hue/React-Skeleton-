import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";
import Loader from "./Loader/Loader";

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  let offSetStart = 0;
  let offSetEnd = 9;

  // const
  useEffect(() => {
    const fetchingArticles = () => {
      setTimeout(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        const dataToShow = data.slice(offSetStart, offSetEnd);
        const newData = [];
        dataToShow.forEach((data) => {
          newData.push(data);
        });
        console.log(newData);

        setArticles([...newData]);
      }, 2000);
    };
    fetchingArticles();
    window.addEventListener("scroll", function handleScroll(e) {
      const theScrollTop = e.target.documentElement.scrollTop;
      const windowInnerHeight = window.innerHeight;
      const theScrollHeight = e.target.documentElement.scrollHeight;
      if (theScrollTop + windowInnerHeight + 1 >= theScrollHeight) {
        // console.log(offSetStart, offSetEnd);
        fetchingArticles();
        if (offSetEnd <= 100) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          offSetEnd += 10;
        }
      }
    });
  }, []);
  const arr = [1, 2, 3, 4, 5, 7, 8, 9];
  return (
    <div className="articles">
      <h2>All Articles</h2>

      {loading ? (
        <Loader />
      ) : (
        articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))
      )}

      {!articles &&
        arr.map((n) => {
          return <SkeletonArticle key={n} />;
        })}
    </div>
  );
};

export default Articles;
