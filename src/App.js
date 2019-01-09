import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [{
            name: "Szymon",
            age: 36
        }]
    };

    changeNameHandler = (newName) => {
        this.setState(
            {
                persons: [{
                    name: newName, age: 12
                }]
            }
        )
    };

    onHobbyChange = (event) => {
        this.setState(
            {
                persons: [{
                    name: event.target.value, age: 12
                }]
            }
        )


    };

    render() {
        return (
            <div>
                <button onClick={this.changeNameHandler.bind(this, 'Aga')}>Click me</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    onHobbyChange={this.onHobbyChange}
                />
            </div>
        );
    }
}

export default App;
