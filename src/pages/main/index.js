import React, { Component } from "react";
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
  state = {//o Metodo render fica monitorando as alterações no objeto state
    docs: [],
    productInfo: {},
    page: 1,
  }

  componentDidMount() { //executa uma ação sempre que um componente é exibido em tela
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const {docs, ...productInfo } = response.data;

    this.setState({ docs, productInfo, page});
  }

  prevPage = () => {
    const {page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);

  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }

  render() {
    const { docs, page, productInfo } = this.state;

    return <div className="product-list">
      {
        docs.map(product =>
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href={""}>Acessar</a>
          </article>)
      }
      <div className={"actions"}>
        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
        <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button>
      </div>
    </div>
  }
}