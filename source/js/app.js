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
            origin : 'sn',
            destiny : 'cp'
        }
    },

    getData : function(route){
        $.get('./data/'+route, function(results){
            this.setState({
                schedule: results[0].data
            })
        }.bind(this))
    },

    componentDidMount : function(){
        this.getData(this.state.origin+'-'+this.state.destiny);
    },

    componentWillUnmount : function(){
        this.serverRequest.abort();
    },

    selectCity : function(city){

        if(this.state.origin !== '' && this.state.destiny !== ''){
            this.state.origin = '';
            this.state.destiny = '';   
        }
        if(this.state.origin === ''){
            this.state.origin = city;
            this.setState();
        }else{
            this.state.destiny = city;
            this.setState();
            
            this.getData(this.state.origin+'-'+this.state.destiny);
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