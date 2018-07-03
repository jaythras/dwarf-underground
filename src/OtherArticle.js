import React from 'react';

const OtherArticle = (props) => {
  return (
    <div className="small-6 medium-3 columns other-article">
      <a href={props.href}>
        <img src={props.image} alt={props.alt} />
        <p>{props.description}</p>
      </a>
    </div>
  );
};

export default OtherArticle;