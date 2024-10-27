import { lazy, Suspense } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import AppHeader from "../appHeader/AppHeader"
import SingleComicsPage from "../pages/SingleComicsPage"
import Spinner from "../spinner/Spinner"
 const Appp = ()=>{
    const MainPage = lazy(() => import('../pages/MainPage'));
    const ComicsPage = lazy(() => import('../pages/ComicsPage'));
    const Page404 = lazy(() => import('../pages/404'));
    return(   
        <Suspense fallback={<Spinner/>}>
        <Router> 
        <div className="app">
        <AppHeader/>
        <main>
        <Routes>
               <Route path="/comics" element={<ComicsPage/>}/>
               <Route path="/" element={<MainPage/>}/>
               <Route path="/comics/:comicID" element={<SingleComicsPage/>}/>
               <Route path="*" element={<Page404/>}/>
               
        </Routes>
        </main>
        </div>
        </Router>
        </Suspense>  

        
    )
   }


export default Appp