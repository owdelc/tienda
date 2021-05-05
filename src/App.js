import React, { Component } from 'react';
import Navbar from './visual/Navbar.jsx';
import Products from './visual/Products.jsx';
import Footer from './visual/footer.jsx';




class App extends Component {
    render(){
        return(
            <div className='App' class="">
                <div className='navbar'>
                    <Navbar></Navbar>
                </div>
                <div>
                    <Products></Products>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default App;
