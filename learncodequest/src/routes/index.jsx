import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/login';
import { Register } from '../pages/Register/register';
import { Home } from '../pages/Home/home';
import { Principal } from '../pages/Principal/principal';
import Navbar from '../layoutPages/navbar/navbar';
import Footer from '../layoutPages/footer/footer';
import Seletor from '../pages/Seletor/seletorDeTarefas';
import Bootcamp from '../pages/Bootcamp/bootcamp';
import Desafios from '../pages/Desafio/desafio';


export const AppRouter = () =>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/register" exact element={<Register/>}/>
                <Route path="/principal" exact element={<Principal/>}/>
                <Route path="/seletor" exact element={<Seletor/>}/>
                <Route path="/bootcamp" exact element={<Bootcamp/>}/>
                <Route path="/desafios" exact element={<Desafios/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}