import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.routes);
    }
    render() {
        return (
            <div className="p_nest">
                <ul className="left">
                    <li>
                        <Link to="/user/">主页</Link>
                    </li>
                    <li>
                        <Link to="/user/info">个人信息</Link>
                    </li>
                </ul>
                <div className="right">
                    <Switch>
                        {this.props.routes.map((route, key) => {
                            if (route.exact) {
                                return (
                                    <Route
                                        key={key}
                                        exact
                                        path={route.path}
                                        component={route.component}
                                    />
                                );
                            } else {
                                return (
                                    <Route
                                        key={key}
                                        path={route.path}
                                        component={route.component}
                                    />
                                );
                            }
                        })}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default User;
