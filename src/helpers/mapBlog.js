import React from 'react';
import { BlogDiv } from '../styled-components/pages/blog';

export default function(blogData){
  return blogData.map((a,ai) => {
    return (
      <BlogDiv key={ai}>
        <a href={a.link}><h2>{a.title}</h2></a>
        <p>
          <a href="/">On behalf of Nelson & Rozier</a> | {a.date} | {
            a.categories.map((b,bi) => <a key={bi} href={`/blog/${b}`}>{b}</a>)
          }
        </p>
        <p className="ellipsisContent">{a.blurb}</p>
        <a href={a.link}>read more</a>
      </BlogDiv>
    )
  })
}
