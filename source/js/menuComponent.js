var React = require('react');

module.exports = React.createClass({
    
    selectCity: function(event){
        this.props.selectCity(event.target.innerHTML);
    },

    render : function(){
        
        var citiesLayout = this.props.cities.map(function(item, index){
            return (
                <li key={ index }><a onClick={ this.selectCity } className={(this.props.origin === item.code || this.props.destiny === item.code) ? "active" : null } >{ item.code }</a></li>
            )
        }.bind(this));        

        return (
            <ul className="cities-menu"> { citiesLayout } </ul>
        )
    }
})