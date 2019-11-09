class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(JSON.parse(json), 10);
    
            if (!isNaN(count)) {
                this.setState(() => ({count: count}));
            }
        } 
        catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    handleAddOne() {
        this.setState({count: this.state.count + 1});
    }
    handleRemoveOne() {
        this.setState({count: this.state.count - 1});
    }
    handleReset() {
        this.setState({count: 0});
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleRemoveOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));