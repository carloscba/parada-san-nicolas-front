var React = require('react');
var ReactDOM = require('react-dom');

var MenuComponent = require('./MenuComponent');

var App = React.createClass({
    
    getInitialState : function(){
        return {
            cities : [
                { name : 'Carlos paz' },
                { name : 'San Nicolas' },
                { name : 'Córdoba' }
            ],
            schedule : []
        }
    },

    componentDidMount : function(){
        this.serverRequest = $.get('./data/cp-sn', function(results){
            this.setState({
                schedule: results[0].data
            })
        }.bind(this))
    },

    componentWillUnmount : function(){
        this.serverRequest.abort();
    },

    render: function(){

        var citiesLayout = this.state.cities.map(function(item, index){
            return (
                <li key = { index } >{ item.name }</li>
            )
        }.bind(this));

        var scheduleLayout = this.state.schedule.map(function(item, index){
            return (
                <li key = { index } >{ item[0] }</li>
            )
        }.bind(this));        


        return(
            <div className="class-name">
                <MenuComponent />
                <h1>{ this.state.title }</h1>
                <ul>{ citiesLayout }</ul>
                <ul>{ scheduleLayout }</ul>
            </div>
        )
    } 
});

ReactDOM.render(
    <App />,
    document.getElementById('appContainer')
);