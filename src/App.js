import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./home";
import News from "./News";
import Categories from './Categories';
import RootLayout from "./RootLayout";
const router= createBrowserRouter(
    createRoutesFromElements(
        <Route>
        <Route path="/" element={<RootLayout/>}/>
             <Route path="Home" element={<Home/>}/>
         <Route path="News" element={<News/>}/>
         <Route path="Categories" element={<Categories/>}/>
         </Route>
    )
)
const App = () => {
    return ( 
        <RouterProvider router={router}/>
     );
}
 
export default App;