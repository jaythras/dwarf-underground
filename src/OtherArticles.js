import React from 'react';

import OtherArticle from './OtherArticle.js';

class OtherArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      others: [
        {
          href: '#',
          image: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif',
          alt: 'orc',
          description: "Single Orcs in Indianapolis"
        },
        {
          href: '#',
          image: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',
          alt: 'mountain',
          description: 'You won\'t believe what\'s under this mountain'
        },
        {
          href: '#',
          image: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
          alt: 'gold',
          description: 'Mine 20% more gold with One Weird Trick'
        },
        {
          href: '#',
          image: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg',
          alt: 'hobbit',
          description: 'Surprise for Indiana Hobbits born before 1999'
        }
      ]
    };
  }
  render() {
    return (
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        {this.state.others.map((other, index) =>
          <OtherArticle href={other.href} image={other.image} alt={other.alt} description={other.description} key={index} />)}
      </div>
    );
  }
}

export default OtherArticles;