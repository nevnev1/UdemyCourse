console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer'
};

var template = (
    <div> 
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Nevin',
    age: 22,
    location: 'Lelystad'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

