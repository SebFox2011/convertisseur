import React, {Component} from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            value: 1,
            currencyFrom : null,
            currencyTo : null
        }
    }
//chargement du composant
    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json ())
            .then(data =>{
               let currencies = Object.keys(data.rates);
               currencies.push(data.base);
               this.setState({currencies:currencies.sort()});
            });
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();// annule le comportement par défaut.
    }


    render() {

        const currencyOptions = this.state.currencies.map(
            currency => <option key={currency} value={currency}>{currency}</option>
        );

        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="number" name="value" value={this.state.value} onChange={event => this.handleChange(event)}/>
                <select name="currencyFrom" onChange={event => this.handleChange(event)}>
                    {currencyOptions}
                </select>
                <select name="currencyTo" onChange={event => this.handleChange(event)}>
                    {currencyOptions}
                </select>
                <input type="submit"/>
            </form>
        );
    }
}

export default CurrencyConverter;