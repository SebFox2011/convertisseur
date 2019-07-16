import React, {Component} from 'react';
import InputRadio from "../Form/InputRadio";

const units =['C','F','K'];

class TemperatureConverter extends Component {

    constructor(props){
        super(props);
        this.state = {
            value : 1,
            tempFrom : units[0],
            tempTo : units[1],
            result : null
        }
    };

    handleChange(event){
        //this.setState([event.target.name]:event.target.value)
    };

    render() {

        const tempOptions = units.map(unit =>
            <InputRadio>
        );
        return (
            <React.Fragment>
                <form>
                    <input type="text" name="value" value={this.state.value} onChange={event => this.handleChange(event)}/>
                    =
                    <input type="text"/>
                </form>
                <form>
                    {tempOptions}
                </form>
            </React.Fragment>
        );
    }
}

export default TemperatureConverter;