import React, { Component } from "react";
import Home from "./components/Home";
import User from "./components/User";
import Shop from "./components/Shop"
import routes from "./model/routes"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="nav">
                        <ul className="nav-menu">
                            <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="/user">个人中心</Link>
                            </li>
                            <li>
                                <Link to="/shop">门店</Link>
                            </li>
                        </ul>
                    </header>
                    <div className="app_content">
                        <Switch>
                            {routes.map((route,key)=>{
                              if(route.exact){
                              //  return <Route exact key={key} path={route.path} component={route.component} />
                              // 通过向子组件传值将子路由传递出去
                               return <Route exact key={key} path={route.path} render={props=>(<route.component {...props} routes={route.routes}/>)} />
                              }else{
                               return <Route  key={key} path={route.path} render={props=>(<route.component {...props} routes={route.routes}/>)} />
                              }
                            })}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
