import React, { Component } from 'react';
import {connect} from 'react-redux'
//import {postEvent} from '../actions'
import {Link} from 'react-router-dom'
class EventsNew extends Component {
  render() {
    const props=this.props
    return (
      <React.Fragment>
          <div>foo</div>
      </React.Fragment>
    );
  }
}


//const mapDispatchToProps=({postEvent})

export default connect(null,null)(EventsNew)
