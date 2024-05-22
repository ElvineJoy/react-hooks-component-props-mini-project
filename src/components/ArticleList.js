import React from 'react'
import Article from './Article';

function ArticleList({posts}) {
    // console.log(posts);
    

    const articleList = posts.map((article) => {
        return (
            <Article 
                key={article.id} 
                title={article.title} 
                date={article.date} 
                preview={article.preview} 
                minutes={article.minutes}
            />
        ); 
    }); 
  return (
    <main>{articleList}</main>
  )
}

export default ArticleList