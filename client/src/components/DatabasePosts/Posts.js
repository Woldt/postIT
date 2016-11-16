import React, { Component } from 'react';
import './Posts.css';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

export default class Posts extends Component {

  constructor(props) {
    super(props);

    // Binds the different functions so they are able to use this
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.deleteAPost = this.deleteAPost.bind(this)

    this.APIurl = 'http://it2810-02.idi.ntnu.no:8080/api'; // The url to the api, where we want to do the POST and GET requests.
    this.state = {
      resultSearch: "", // Saves the text written in search input field.
      inputTitle: "", // Saves the text written in title input field.
      inputCategory: "", // Saves the text written in category input field.
      inputDescription: "", // Saves the text written in description input field.
      posts: [], // A list containing all posts
    };

    this.getAllPosts();  // When the page gets initialized, fetch and display all.

  }

  // Handles the search, if the resultSearch is empty or undefined all posts are colleced, else handleSearch() is called.
  handleSearchChange(event) {
    this.setState({
      resultSearch: event.target.value
    }, () => {
      if(this.state.resultSearch === 'undefined' || this.state.resultSearch === "" || this.state.resultSearch === null || this.state.resultSearch === " "){
        console.log(this.resultSearch + " should be empty");
        this.getAllPosts();
      }
      else {
        console.log(this.state.resultSearch + "should be defined");
          this.handleSearch();
      }

    });
  }

  // This function gets all posts that matched the search from the database. Uses the RESTapi to collect the relevant search.
  handleSearch(){
    fetch(this.APIurl + '/postit/search/' + this.state.resultSearch, {
        method: 'GET',
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState(Object.assign({}, this.state, { posts: data }))
    })
  }

  // Saves the value written in the title input to a variable.
  handleTitleChange(event){
    this.setState({
      inputTitle: event.target.value
    })
  }

  // Saves the value written in the category input to a variable.
  handleCategoryChange(event){
    this.setState({
      inputCategory: event.target.value
    })
  }

  // Saves the value written in the description input to a variable.
  handleDescriptionChange(event){
    this.setState({
      inputDescription: event.target.value
    })
  }

  // This function posts the values in the three input fields(title, category & description) into the database, using a POST request.
  handleSubmit(event){
    //Client side validation
    var newData ={
      title: this.state.inputTitle,
      category: this.state.inputCategory,
      description: this.state.inputDescription,
    }
    //Sends request to backend server with fetch
    fetch(this.APIurl + '/postit/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    }).then((response) => {
        return response.status
      })
      .then((data) => {
        if (data == 200) {
          this.getAllPosts(); // Update display of all posts, with the new
          this.setState(Object.assign({}, this.state, {inputTitle: "", inputCategory: "", inputDescription: "",})) // Sets the state of input fields to be empty, so you can write a new post.
        }
      })
  }

  // Collects all posts from the database, uses GET and fetches using the RESTapi.
  getAllPosts() {
    fetch(this.APIurl + '/postit/all', {
      method: 'GET',
    }).then((response) => {
        return response.json()
      })
      .then((data) => {
          this.setState(Object.assign({}, this.state, {posts: data})) // Sets the state of the list post to be the collected data.
        })
  }

  // Removes a spesific post from the database.
  deleteAPost(event) {
    const index = this.state.posts.map((post, i) => post._id).indexOf(event.target.id); // Finds the index of the element in posts that the user wants to delete.
    fetch(this.APIurl + '/postit/delete/' + event.target.id, {
        method: 'DELETE',
    }).then((response) => {
        return response.status
      })
      .then((data) => {
        if (data == 200) {
          this.getAllPosts(); // Update display of all posts, the deleted item is removed.
        }
      })
  }

  render() {
    let postITS = this.state.posts;
    return (
      <div>
        <h1 className="Title">PostIT</h1>

        <div className="InputAdd">
          <h3>Legg til ny i databasen</h3>
          <FormGroup id="title" type="text" label="Text" >
            <FormControl type="text" value={this.state.inputTitle} onChange={this.handleTitleChange} placeholder="Tittel" />
          </FormGroup>
          <FormGroup id="category" type="text" label="Text" >
            <FormControl type="text" value={this.state.inputCategory} onChange={this.handleCategoryChange} placeholder="Kategori" />
          </FormGroup>
          <FormGroup id="description" type="text" label="Text" >
            <FormControl type="text" value={this.state.inputDescription} onChange={this.handleDescriptionChange} placeholder="Beskrivelse" />
          </FormGroup>
          <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Legg til</Button>
        </div>

        <div className="SearchAndDisplay">
        <h3>Søk i databasen</h3>
        <div className="InputSearch">
          <FormControl type="text" value={this.state.resultSearch} onChange={this.handleSearchChange} placeholder="søk i databasen på tittel"/>

        </div>
        <Table responsive>
          <thead>
            <tr>
              <th className="TableHeader">ID</th>
              <th className="TableHeader">Tittel</th>
              <th className="TableHeader">Kategori</th>
              <th className="TableHeader">Beskrivelse</th>
              <th className="TableHeader">Slett</th>
            </tr>
          </thead>
          <tbody>
            {postITS.map((post, i) =>
            <tr key={post._id}>
              <td>{post._id}</td>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.description}</td>
              <td><Button className="GlyphButton" id={post._id} onClick={this.deleteAPost}><Glyphicon glyph="remove" id={post._id}/></Button></td>
            </tr>
          )}
          </tbody>
        </Table>
        </div>
      </div>
    )
  }
}
