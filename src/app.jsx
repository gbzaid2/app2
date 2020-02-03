import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './chart.jsx'
class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            prices: {}
        }
    }
    componentDidMount(){
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then(data => {
                this.setState({ prices: data.data.bpi });
            })
            .catch(err => console.log(err));
    }


    render(){
        let listOfPrices = [];
        for (let price in this.state.prices){
            listOfPrices.push(this.state.prices[price]);
        }
        return (<div>
            <ul>
               {listOfPrices.map(amount => {return <li>{amount}</li>})}
            </ul>
        </div>);
    }
}

export default App