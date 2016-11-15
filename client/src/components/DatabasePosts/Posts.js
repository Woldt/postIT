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
    })
  }

  getAllPosts() {
    fetch(this.APIurl + '/postit/all', {
      method: 'GET',

    })
  }

/*
fetch('/users.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })*/

  render() {
     const allPosts = [
       {id: 1, title: "test", category: "test1", description: "test2"},
       {id: 2, title: "tull", category: "tull1", description: "tull2"},
       {id: 3, title: "hest", category: "hest1", description: "hest2"}
     ]

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
          <FormControl type="text" value={this.state.resultSearch} onChange={this.handleChange} placeholder="søk i databasen"/>
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
            {allPosts.map((post, i) =>
            <tr key={post.id + i}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>{post.description}</td>
              <td><Button className="GlyphButton"><Glyphicon glyph="remove" /></Button></td>
            </tr>
          )}
          </tbody>
        </Table>
        </div>
      </div>
    )
  }
}
