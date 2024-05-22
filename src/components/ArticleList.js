import React from 'react'
import blogData from '../data/blog';
import Article from './Article';

function ArticleList() {
    // console.log(posts);

    const articleList = blogData.posts.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
    })
  return (
    <main>{articleList}</main>
  )
}

export default ArticleList