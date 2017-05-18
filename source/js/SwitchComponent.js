var React = require('react');

module.exports = React.createClass({
    render : function(){
        return (
            <h2>{ this.props.origin } - { this.props.destiny }</h2>
        )
    }
})