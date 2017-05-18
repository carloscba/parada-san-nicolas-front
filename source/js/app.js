var React = require('react');
var ReactDOM = require('react-dom');

var MenuComponent = require('./MenuComponent');
var SwitchComponent = require('./SwitchComponent');
var ItemComponent = require('./ItemComponent');

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



        var scheduleLayout = this.state.schedule.map(function(item, index){
            return (
                <li key = { index } >{ item[0] }</li>
            )
        }.bind(this));        


        return(
            <div className="container">
                <div className = "row">
                    <div className="col-md-2">
                        <MenuComponent cities = { this.state.cities } />
                    </div>
                    <div className="col-md-10">
                        <h1>{ this.state.title }</h1>
                        <SwitchComponent />
                        <ul>{ scheduleLayout }</ul>
                    </div>
                </div>
            </div>
        )
    } 
});

ReactDOM.render(
    <App />,
    document.getElementById('appContainer')
);