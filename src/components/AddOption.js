import React from 'react';

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const optionValue = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(optionValue)

        this.setState(() => ({error: error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export {AddOption};