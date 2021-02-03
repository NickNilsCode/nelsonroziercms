import React from 'react';
import { BlogDiv } from '../styled-components/pages/blog';

export default function(blogData){
  return blogData.map((a,ai) => {
    let author = a.author == "On behalf of Nelson & Rozier" ? a.author : "by " + a.author;
    return (
      <BlogDiv key={ai}>
        <a href={a.link}><h2>{a.title}</h2></a>
        <p>
          <a href="/">{author}</a> | {a.date} | {
            a.categories.map((b,bi) => <a key={bi} href={`/blog/${b}`}>{b}</a>)
          }
        </p>
        <p className="ellipsisContent">{a.blurb}</p>
        <a href={a.link}>read more</a>
      </BlogDiv>
    )
  })
}
