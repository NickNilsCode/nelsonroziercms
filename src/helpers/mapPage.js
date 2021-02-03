import React from 'react';

export default function(pageData){
  return pageData.map((a,i) => {
    let A = a.type;
    if(a.content){
      return <A key={i} className={a.className} dangerouslySetInnerHTML={{__html: a.content}}/>
    } else {
      return <A key={i} className={a.className}/>
    }
  })
}
