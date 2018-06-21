import React from 'react';
import ListItems from './ListItems'

export default class List extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.users.map(item =>
          
          <ListItems
                  key={item.get('email')}
                  email={item.get('email')}
                  image={item.get('img_name')}
                  phone_mobile={item.get('phone_mobile')}
                  first_name={item.get('first_name')}
                  middle_name={item.get('middle_name')}
                  last_name={item.get('last_name')}
                  designation={item.get('designation')}

                  />
        )}
      </div>
  )}
  }
