import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Login from "../pages/login";
import Project from "../pages/project";
import Calendar from "../pages/calendar";
import Home from "../pages/home";
import { Contact } from "../pages/contact";
import Task from "../pages/task";

// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx");

// // * 处理路由
// export const routerArray: RouteObject[] = [];
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key]);
// 	});
// });
// interface customRouteObject extends RouteObject{
//     meta?: {
//         requiresAuth?: boolean; // 是否需要登录
//         title?: string; // 页面标题
//         key?: string; // 用于缓存
//     }
// }

export const rootRouter:RouteObject[] = [
    {
		path: "/",
		element: <Navigate to="/task" />
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
        
		// meta: {
		// 	requiresAuth: false,
		// 	title: "登录页",
		// 	key: "login"
		// }
	},
	{
		path: "/project",
		element: <Project />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/task",
		element: <Task />,
	},
	{
		path: "/calendar",
		element: <Calendar />,
	},
]

const Router = ()=>{
    const routes = useRoutes(rootRouter);
    return routes;
}

export default Router;