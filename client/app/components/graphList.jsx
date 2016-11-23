' use strict ';
import React from 'react';
import { connect } from 'react-redux';
import Graph from './graph';

@connect((store) => { 
  return {
    catData: store.weekData,
  };
})

export default class GraphList extends React.Component {
  componentDidMount() {
    console.log("data from graphlist", this.props.weekData);

    //   Item => (props) {
    //     return <option value="1" graph-line-item="">{props.message}</option>;
    //   }

    // TodoList => () {
    //   const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    //   return (
    //     <select>
    //       {todos.map((message) => <Item key={message} message={message} />)}
    //     </select>
    //   );
    // }
  }

  render() {
    return (
      <div>
       <div className="graph-row">
        <select className="custom-select form-control form-control-sm">
          <option selected>Compare Website</option>
          <option value="1">google.com</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <br/>
      </div>
      <div className="data-parent-container">      
        <Graph />
      </div>        
    </div>
    );
  }
}

   