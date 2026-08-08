import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClimbView from './views/ClimbView';

function Layout(){
    return(
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index:true, element: <h1>Home Page</h1>},
            {path: '/climbs', element: <ClimbView/>},
            {path:'*', element: <h1>Error 404: Page Not Found</h1>}
        ]
    }
]);

export default function App(){
    return <RouterProvider router={router}/>
}