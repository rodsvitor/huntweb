import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './pages/main';
import Product from "./pages/product";

const Routes = () => (
  <BrowserRouter>{/*Define que está utilizando as rotas através de um browser*/}
    <Switch> {/*permite apenas que uma única rota seja chamada por vez.*/}
      <Route exact path="/" component={Main}/> {/*exact verifica se o caminho está igual ao path*/}
      <Route path="/products/:id" component={Product}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;