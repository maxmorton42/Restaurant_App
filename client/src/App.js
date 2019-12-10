import React from 'react';
import axios from "axios";
import MenuForm from './components/MenuForm';
import MenuList from './components/MenuList';
import { Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { 
    menus: [],
    items: [],
  }

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({menus: res.data, })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addMenu = (name) => {
    axios.post("/api/menus", {name, })
    .then( res => {
      this.setState({ menus: [...this.state.menus, res.data], })
    })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        this.setState({ menus: this.state.menus.filter( t => t.id !== id ) })
      })
  };

render() {
  return (
    <Container>
      <h1>Bob's Burgers</h1>
        <MenuForm addMenu={this.addMenu}/>
        <br />
        <MenuList 
          menus={this.state.menus} 
          deleteMenu={this.deleteMenu} 
          // updateTodo={this.updateTodo}
        />
    </Container>
  )
  }
}

export default App;
