var React = require('react');

module.exports = React.createClass({
    render : function(){

        var citiesLayout = this.props.cities.map(function(item, index){
            return (
                <li key = { index } >{ item.name }</li>
            )
        }.bind(this));        

        return (
            <ul> { citiesLayout }</ul>
        )
    }
})