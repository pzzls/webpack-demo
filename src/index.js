var React = require('react');
var ReactDOM = require('react-dom');

var ChatSend = require('./components/chat');
var Timer = require('./components/timer');
var TodoApp = require('./components/TodoItem');
var AjaxDemo = require('./components/ajax');

var img1 = document.createElement("img");
img1.src = require('./imgs/small.png');
document.body.appendChild(img1);

var Avator = React.createClass({

  getInitialState: function(){

    return {
      name: 'mosl',
      number: Math.random()
    };

  },

  handleClick: function() {

    this.setState({
      number: Math.random()
    })
  },

  componentDidMount: function() {

    alert("HaHa componentDidMount");
  },

  componentWillMount: function() {

    alert("HaHa componentWillMount");
  },

  render: function(){


    return (
      <div>
        <h1>Hello World ! </h1>

        <h2>{this.state.number}</h2>

        <button onClick={this.handleClick}>send</button>

        <AjaxDemo />
      </div>
    );
  }
});

ReactDOM.render(
  <Avator />,
  document.getElementById('ex')
);
