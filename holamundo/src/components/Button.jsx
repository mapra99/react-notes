import React, {Component} from 'react';

class Button extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    const {count} = this.state;

    return (
      <div>
        <h1>Apples: {count}</h1>
        <button type="button" onClick={this.handleClick}>
          Add
        </button>
      </div>
    )
  }

}

export default Button;
