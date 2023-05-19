
import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  //  createRoutesFromElements 
} from 'react-router-dom'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Root from './pages/Root';
import ProductDetails from './pages/ProductDetails';

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='*' element={<PageNotFound/>}/>
//     <Route path='/products' element={<Product/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '*', element: <PageNotFound /> },
      { path: '/products', element: <Product /> },
      { path: '/products/:productId', element: <ProductDetails /> },

    ]
    ,
  },
])

// const router=createBrowserRouter(routerDefinition)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
