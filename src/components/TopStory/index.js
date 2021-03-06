import React, { Component } from 'react';
import Tabletop from 'tabletop';

import TopStory from './TopStory';

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '16EDYidZSNnbGPcxedzWMbjNyQPcKUZuf5PP8LbP5BTY',
      callback: (data, tabletop) => {
        const sheetData = tabletop.sheets('Top Story').all();
        this.setState({
          data: sheetData
        });
      }
    });
  }

  render() {
    const { data } = this.state;
    return data.map(obj => (
      <TopStory
        key={obj.blogTitle}
        blogTitle={obj.blogTitle}
        blogText={obj.blogText}
        blogLink={obj.blogLink}
      />
    ));
  }
}

export default Stories;
