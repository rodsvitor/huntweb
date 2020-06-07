import React, { Component } from "react";
import api from '../../services/api';

export default class Main extends Component {
  componentDidMount() { //executa uma ação sempre que um componente é exibido em tela
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    console.log(response.data.docs);
  }

  render() {
    return <h1>Hello Rocketseat 2</h1>
  }
}