console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const option = e.target.elements.option.value
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp();
    }

}

const removeAll = () => {
    app.options = [];
    renderCounterApp();
}



const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot);
}

renderCounterApp();
