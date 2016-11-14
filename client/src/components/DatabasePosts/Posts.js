import React, { Component } from 'react';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      resultSearch: ""
    };
  }

  handleChange(event) {
    this.setState({
      resultSearch: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>PostIT</h1>
        <div>
          <input type="text" value={this.state.resultSearch} onChange={this.handleChange} placeholder="søk i databasen" />
        </div>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}
