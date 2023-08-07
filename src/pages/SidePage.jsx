import React, { Component } from 'react';
import { connect } from 'react-redux';


// Component
class App extends Component {

  render() {
    return (
      <div className="ui-g"> Side Page </div>
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