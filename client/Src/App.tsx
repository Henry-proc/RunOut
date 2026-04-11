import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

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
            {path:'*', element: <h1>Error 404: Page Not Found</h1>}
        ]
    }
]);

export default function App(){
    return <RouterProvider router={router}/>
}