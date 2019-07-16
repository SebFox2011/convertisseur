import React, {Component} from 'react';
import InputRadio from "../Form/InputRadio";

const units = ['C', 'F', 'K'];

class TemperatureConverter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            tempFrom: units[0],
            tempTo: units[1],
            result: null
        }
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        },
            () =>{
            let result=0;
            if (this.state.tempFrom === "C"){
                if (this.state.tempTo === "F"){
                    result=(this.state.value * 9 / 5) + 32;
                }
            }
            this.setState({
                result:result
            });
            }
        );


    }

    render() {

        const tempOptionsFrom = units.map(unit =>
            <InputRadio key={unit} id={"temp-from-" + unit} label={unit} name={"tempFrom"} value={unit}
                        checked={this.state.tempFrom === unit} onChange={event => this.handleChange(event)}/>
        );

        const tempOptionsTo = units.map(unit =>
            <InputRadio key={unit} id={"temp-to-" + unit} label={unit} name={"tempTo"} value={unit}
                        checked={this.state.tempTo === unit} onChange={event => this.handleChange(event)}/>
        );
        return (
            <React.Fragment>
                <form>
                    <input type="number" step={0.5} name="value" value={this.state.value}
                           onChange={event => this.handleChange(event)}/>

                    <div>
                        {tempOptionsFrom}
                    </div>
                    <div>
                        {tempOptionsTo}
                    </div>
                </form>
                <p>{this.state.result}</p>
            </React.Fragment>
        );
    }
}

export default TemperatureConverter;