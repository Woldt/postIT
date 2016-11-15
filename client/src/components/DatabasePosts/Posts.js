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
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.deleteAPost = this.deleteAPost.bind(this)

    this.APIurl = 'http://localhost:8080/api';
    this.state = {
      resultSearch: "",
      inputTitle: "",
      inputCategory: "",
      inputDescription: "",
      posts: [],
    };

    this.getAllPosts();  // when the page gets initialized, fetch and display all.

  }

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

  handleSearch(){
    fetch(this.APIurl + '/postit/search/' + this.state.resultSearch, {
        method: 'GET',
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState(Object.assign({}, this.state, { posts: data }))
    })
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
          this.state.posts.push(newData);
          this.setState(Object.assign({}, this.state, {inputTitle: "", inputCategory: "", inputDescription: "",}))
        }
      })
      //this.getAllPosts(); // update display of all posts, with the new

      //this.forceUpdate();
  }

  getAllPosts() {
    fetch(this.APIurl + '/postit/all', {
      method: 'GET',
    }).then((response) => {
        return response.json()
      })
      .then((data) => {
          this.setState(Object.assign({}, this.state, {posts: data}))
        })
  }

  deleteAPost(event) {
    const index = this.state.posts.map((post, i) => post._id).indexOf(event.target.id);
    fetch(this.APIurl + '/postit/delete/' + event.target.id, {
        method: 'DELETE',
    }).then((response) => {
        return response.status
      })
      .then((data) => {
        if (data == 200) {
          this.state.posts.splice(index, 1);
          this.forceUpdate();
        }
      })
      console.log()//.indexOf(event.target.id))
  }

  render() {

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
          <FormControl type="text" value={this.state.resultSearch} onChange={this.handleSearchChange} placeholder="søk i databasen"/>

        </div>
        <Table responsive>
          <thead>
            <tr>
              <th className="TableHeader">ID</th>
              <th className="TableHeader">Title</th>
              <th className="TableHeader">Category</th>
              <th className="TableHeader">Description</th>
              <th className="TableHeader">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, i) =>
            <tr key={post._id}>
              <td>{post._id}</td>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.description}</td>
              <td><Button className="GlyphButton" id={post._id} onClick={this.deleteAPost}><Glyphicon glyph="remove" /></Button></td>
            </tr>
          )}
          </tbody>
        </Table>
        </div>
      </div>
    )
  }
}
