/**
 * This expands slightly on the event handling approach described at
 * https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs
 */
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    description: '',
    like: false,
    month: 'January',
    name: '',
    timeOfDay: 'morning'
  };

  handleChange = event => {
    const {target} = event;
    const {name, type} = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  };

  render() {
    const {description, like, month, name, timeOfDay} = this.state;

    return (
      <div className="App">
        <h1>Holiday Entry</h1>
        <div>
          <label>Name</label>
          <input
            name="name"
            onChange={this.handleChange}
            type="text"
            value={name}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            onChange={this.handleChange}
            type="text"
            value={description}
          />
        </div>
        <div>
          <label>Like?</label>
          <input
            checked={like}
            name="like"
            onChange={this.handleChange}
            type="checkbox"
          />
        </div>
        <div>
          <label>Time of Day</label>
          <input
            checked={timeOfDay === 'morning'}
            name="timeOfDay"
            onChange={this.handleChange}
            type="radio"
            value="morning"
          />
          Morning
          <input
            checked={timeOfDay === 'afternoon'}
            name="timeOfDay"
            onChange={this.handleChange}
            type="radio"
            value="afternoon"
          />
          Afternoon
          <input
            checked={timeOfDay === 'evening'}
            name="timeOfDay"
            onChange={this.handleChange}
            type="radio"
            value="evening"
          />
          Evening
        </div>
        <div>
          <label>Month</label>
          <select name="month" onChange={this.handleChange} value={month}>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        <h4>Here is what you entered:</h4>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <div>Like?: {String(like)}</div>
        <div>Time of Day: {timeOfDay}</div>
        <div>Month: {month}</div>
      </div>
    );
  }
}

export default App;
