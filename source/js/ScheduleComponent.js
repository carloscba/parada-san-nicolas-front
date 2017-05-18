var React = require('react');

module.exports = React.createClass({
    render : function(){

        var scheduleLayout = this.props.schedule.map(function(item, index){
            return (
                <li key = { index } >{ item[0] }</li>
            )
        }.bind(this));

        return (
            <ul> { scheduleLayout }</ul>
        )
    }
})