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
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {

        const tempOptionsFrom = units.map(unit =>
            <InputRadio key={unit} id={"temp-from-"+unit} label={unit} name={"temp-from"} checked={this.state.tempFrom === unit}/>
        );

        const tempOptionsTo = units.map(unit =>
            <InputRadio key={unit} id={"temp-to-"+unit} label={unit} name={"temp-to"} checked={this.state.tempTo === unit}/>
        );
        return (
            <React.Fragment>
                <form>
                    <input type="number" step={0.5} name="value" value={this.state.value} onChange={event => this.handleChange(event)}/>

                <div>
                    {tempOptionsFrom}
                </div>
                <div>
                    {tempOptionsTo}
                </div>
                </form>
            </React.Fragment>
        );
    }
}

export default TemperatureConverter;