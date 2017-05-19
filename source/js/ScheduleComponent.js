var React = require('react');

module.exports = React.createClass({
    render : function(){

        var scheduleLayout = this.props.schedule.map(function(item, index){
            return (
                <li key = { index } >
                    <h2>{ item[2] }</h2>
                    <p>{ item[3] }</p>
                </li>
            )
        }.bind(this));

        return (
            <ul className="schedule"> { scheduleLayout }</ul>
        )
    }
})