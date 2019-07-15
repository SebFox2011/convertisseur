import React, {Component} from 'react';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json ())
            .then(data =>{
               console.log(data);
            });
    }


    render() {
        return (
            <form>
                <input type="number"/>
                <select>

                </select>
                <select>

                </select>
                <input type="submit"/>
            </form>
        );
    }
}

export default CurrencyConverter;