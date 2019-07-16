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
                currencies.sort();
               this.setState({
                   currencies:currencies,
                   currencyFrom:currencies[0],
                   currencyTo:currencies[0],
                   result:null
               });
            });
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit(event){ //Au clic sur le bouton
        event.preventDefault();// annule le comportement par défaut.
        fetch('https://api.exchangeratesapi.io/latest?base=' + this.state.currencyFrom)
            .then(response => response.json())
            .then(data => {
                const result=data.rates[this.state.currencyTo] * this.state.value;
                this.setState({result:result})
            });
    }

    render() {

        const currencyOptions = this.state.currencies.map(
            currency => <option key={currency} value={currency}>{currency}</option>
        );

        const formStyle ={
            display:'flex',
            justifyContent:'center',
            flexDirection:this.props.layout
        };

        return (
            <React.Fragment>
                <form onSubmit={event => this.handleSubmit(event)} style={formStyle}>
                    <input type="number" name="value" value={this.state.value} onChange={event => this.handleChange(event)}/>
                    <select name="currencyFrom" onChange={event => this.handleChange(event)}>
                        {currencyOptions}
                    </select>
                    <select name="currencyTo" onChange={event => this.handleChange(event)}>
                        {currencyOptions}
                    </select>
                    <input type="submit"/>
                </form>
                <p>{this.state.result}</p>
            </React.Fragment>
        );
    }
}

export default CurrencyConverter;