class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleDetail = this.handleToggleDetail.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleDetail() {
        this.setState((prevState) => {
            return {visibility: !prevState.visibility}
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleDetail}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (
                    <div>
                        <p>Here is a message you can see now!</p>
                    </div>
                )}
            </div>
        );
    }
}


ReactDOM.render(<Visible/>, document.getElementById('app'));