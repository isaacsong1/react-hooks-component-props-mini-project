import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./article/Article";
import ArticleList from "./article/ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <Article />
      <ArticleList />
    </div>
  );
}

export default App;
