import React, { Component } from 'react';
import { connect } from 'react-redux';


// Component
class App extends Component {

  render() {
    return (
      <div className="ui-g"> OLAR MUNDO </div>
     ); 
  }
} 

const mapDispatchToProps = {
};

const mapStateToProps = ({ HomeReducer }) => ({
  HomeReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  App,
);