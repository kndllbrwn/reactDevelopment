var React = require('react');

var GreeterMessage = React.createClass({
    render: function() {
      var name = this.props.name;
      var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>Postman delivered {message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;