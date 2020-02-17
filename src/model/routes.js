import Home from "../components/Home";
import User from "../components/User";
import Info from "../components/User/Info";
import Main from "../components/User/Main";
import Shop from "../components/Shop";
import ShopList from "../components/Shop/List";
import ShopAdd from "../components/Shop/Add";
const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/user",
        component: User,
        routes: [
            {
                path: "/user/",
                component: Main,
                exact: true
            },
            {
                path: "/user/info",
                component: Info
            }
        ]
    },
    {
        path: "/shop",
        component: Shop,
        routes: [
            {
                path: "/shop/",
                component: ShopList,
                exact: true
            },
            {
                path: "/shop/add",
                component: ShopAdd
            }
        ]
    }
];
export default routes;
