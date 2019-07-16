import React, {Component} from 'react';

class TextToUpper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>TextToUpper</h2>
                <input type="text" name="text" value={this.state.text} onChange={event => this.handleChange(event)}/>
                {this.state.text.toUpperCase()}
            </div>
        );
    }
}

export default TextToUpper;