import React, {Component} from 'react';

class TextToUpper extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value : ''
        }
    };

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
                {this.state.value.toUpperCase()}
            </React.Fragment>
        );
    }
}

export default TextToUpper;