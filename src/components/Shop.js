import React, { Component } from 'react';
// import List from "./Shop/List"
// import Add from "./Shop/Add"
import {  Switch, Route, Link } from "react-router-dom";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="p_nest">
      <ul className="left">
          <li>
            <Link to="/shop/">门店列表</Link>
          </li>
          <li>
          <Link  to="/shop/add">新增门店</Link>
          </li>
      </ul>
      <div className="right">
          <Switch>
            {
              this.props.routes.map((route,key)=>{
                if(route.exact){
                  return <Route exact key={key} path={route.path} component={route.component} />
                }else{
                  return <Route key={key} path={route.path} component={route.component} />
                }
              })
            }
              {/* <Route exact path={`${this.props.match.url}/`} component={List} />
              <Route path={`${this.props.match.url}/add`} component={Add} /> */}
          </Switch>
      </div>
  </div>
    );
  }
}

export default Shop;