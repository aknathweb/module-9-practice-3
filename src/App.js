import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Main from './Layout/Main';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <div><h1>wrong Route Page</h1></div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
