import React from 'react';
import ListItems from './ListItems'

export default class List extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.campgrounds.map(item =>
          
          <ListItems
                  key={item.get('title')}
                  title={item.get('title')}
                  image={item.get('image')}
                  url={item.get('url')}
                  position={item.get('position')}
                  description={item.get('description')}
                  />
        )}
      </div>
  )}
  }
