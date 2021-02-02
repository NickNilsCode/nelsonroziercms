import React from 'react';

export default function(pageData){
  return pageData.map((a,i) => {
    let A = a.type;
    return <A key={i} className={a.className} dangerouslySetInnerHTML={{__html: a.content}}/>
  })
}
