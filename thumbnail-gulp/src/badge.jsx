var React = require('react');

// Badge Class
module.exports = React.createClass({
  //Must have render
  render: function() {
    return (
      <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
    );
  }
});
