import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [{
            name: "Szymon",
            age: 35
        },
            {
                name: "Aga",
                age: 36
            }],
        personVisible: false

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

    switchPersonsVisibility = () => {
        console.log("onchange")
        this.setState({personVisible: !this.state.personVisible})
    }

    render() {
        let persons = null;

        if (this.state.personVisible) {
            persons = this.state.persons.map((person) => {
                  return  <Person
                        name={person.name}
                        age={person.age}
                    />
            });
        }

        return (
            <div>
                <button onClick={this.switchPersonsVisibility}>Click me</button>
                <div>
                {persons}
                </div>
            </div>
        );
    }
}

export default App;
