import React, {Component} from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: []
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


    render() {

        const currencyOptions = this.state.currencies.map(
            currency => <option key={currency} value={currency}>{currency}</option>
        );

        return (
            <form>
                <input type="number"/>
                <select>
                    {currencyOptions}
                </select>
                <select>
                    {currencyOptions}
                </select>
                <input type="submit"/>
            </form>
        );
    }
}

export default CurrencyConverter;