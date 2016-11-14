import React, { Component } from 'react';
import './Posts.css';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.APIurl = 'http://localhost:8080/api';
    this.state = {
      resultSearch: "",
      inputTitle: "",
      inputCategory: "",
      inputDescription: "",
    };
  }

  handleChange(event) {
    this.setState({
      resultSearch: event.target.value
    });
  }

  handleTitleChange(event){
    this.setState({
      inputTitle: event.target.value
    })
  }

  handleCategoryChange(event){
    this.setState({
      inputCategory: event.target.value
    })
  }

  handleDescriptionChange(event){
    this.setState({
      inputDescription: event.target.value
    })
  }

  handleSubmit(event){
    //Client side validation

    //Sends request to backend server with fetch
    fetch(this.APIurl + '/postit/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.inputTitle,
        category: this.state.inputCategory,
        description: this.state.inputDescription,
      })
    }).then((response) => {
      alert(response);
    })
  }


  render() {
    return (
      <div>
        <h1>PostIT</h1>
        <div className="InputSearch">
          <input type="text" value={this.state.resultSearch} onChange={this.handleChange} placeholder="søk i databasen" />
        </div>
        <div className="InputAdd">
          <form>
            <input type="text" value={this.state.inputTitle} onChange={this.handleTitleChange} placeholder="Tittel" />
            <input type="text" value={this.state.inputCategory} onChange={this.handleCategoryChange} placeholder="Kategori" />
            <input type="text" value={this.state.inputDescription} onChange={this.handleDescriptionChange} placeholder="Beskrivelse" />
            <button  type="submit" onClick={this.handleSubmit}>Legg til</button>
          </form>
        </div>
        <table>
          <tbody className="Table">
            <tr>
              <th className="TableHeader">ID</th>
              <th className="TableHeader">Title</th>
              <th className="TableHeader">Category</th>
              <th className="TableHeader">Description</th>
              <th className="TableHeader">Delete</th>
            </tr>
            <tr>

            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}
