import React from "react";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./common/Header";
import Navigation from "./common/Navigation";
import FunctionCom from "./FunctionCom";
import ClassCom from "./ClassCom";
import Practice1 from "./Practice1";
import ToDoList from "./component/ToDoList";
import App from "./App";
import Footer from "./common/Footer";
import ShowModal from "./ShowModal";
import Digitalclock from "./component/DigitalClock";
import CurrencyConverter from "./component/CurrencyConverter";
import ThemeSelector from "./component/ThemeSelector";
import { colorPalette, ThemeContext } from "./store";

const SinglePageApp = () => {
    return(
        <BrowserRouter>
        <React.Fragment>
            <Header/>
            <Navigation/>
            <div className='row'>
              <div className='col-sm-12 col-lg-2 bg-warning'>Left Aside</div>
              <div className='col-sm-12 col-lg-8 bg-light'>
                <ThemeContext.Provider value={colorPalette}>
                <Routes>
                  <Route path='/app' element = {<App/>}/>
                  <Route path='/practice' element = {<Practice1/>}/>
                  <Route path='/todolist' element = {<ToDoList/>}/>
                  <Route path='/functioncom' element = {<FunctionCom/>}/>
                  <Route path='/classcom' element = {<ClassCom/>}/>
                  <Route path='/showmodal' element = {<ShowModal/>}/>
                  <Route path='/digitalclock' element = {<Digitalclock/>}/>
                  <Route path='/currencyconverter' element = {<CurrencyConverter/>}/>
                  <Route path='/themeselector' element = {<ThemeSelector/>}/>
                </Routes>
                </ThemeContext.Provider>
              </div>
              <div className='col-sm-12 col-lg-2 bg-warning'>Right Aside</div>
           </div>
           <Footer/>
        </React.Fragment>
        </BrowserRouter>
    )
}

export default SinglePageApp;