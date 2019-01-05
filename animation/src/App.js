import React, { Component, Fragment } from 'react';
import './App.css';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: ['item']
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup
          >
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  timeout={1000}
                  classNames='fade'>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }

  handleAddItem () {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    });
  }
}

export default App;
