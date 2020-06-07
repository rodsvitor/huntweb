import React, { Component } from "react";
import api from '../../services/api';

export default class Main extends Component {
  state = {//o Metodo render fica monitorando as alterações no objeto state
    products: [],
  }

  componentDidMount() { //executa uma ação sempre que um componente é exibido em tela
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    this.setState({ products: response.data.docs});
  }

  render() {
    return <div className="product-list">
      {
        this.state.products.map(product =>
        <h2 key={product._id}>{product.title}</h2>)
      }
    </div>
  }
}