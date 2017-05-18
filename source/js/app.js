var React = require('react');
var ReactDOM = require('react-dom');

var MenuComponent = require('./MenuComponent');
var SwitchComponent = require('./SwitchComponent');
var ItemComponent = require('./ItemComponent');
var ScheduleComponent = require('./ScheduleComponent');

var App = React.createClass({
    
    getInitialState : function(){
        return {
            cities : [
                { name : 'Carlos paz', code : 'cp' },
                { name : 'San Nicolas', code : 'sn' },
                { name : 'Córdoba', code : 'cb' }
            ],
            schedule : [],
            origin : '',
            destiny : ''
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

    selectCity : function(city){

        if(this.state.origin === ''){
            this.setState({
                origin : city
            })
        }
        if(this.state.origin !== ''){
            this.setState({
                destiny : city
            })
        }        


    },

    render: function(){
        return(
            <div className="container">
                <div className = "row">
                    <div className="col-xs-12">
                        <h1>{ this.state.title }</h1>
                        <SwitchComponent origin={ this.state.origin } destiny={ this.state.destiny } />
                    </div>
                </div>
                <div className = "row">
                    <div className="col-xs-2">
                        <MenuComponent cities={ this.state.cities } selectCity={ this.selectCity } origin={ this.state.origin } destiny={ this.state.destiny } />
                    </div>
                    <div className="col-xs-10">
                        <ScheduleComponent schedule = { this.state.schedule } />
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