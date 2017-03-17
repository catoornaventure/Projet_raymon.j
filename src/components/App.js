import '../assets/stylesheets/base.scss';
import React               from 'react';
import Header              from './Header/Header';
import Footer              from './Footer/Footer';
import Home                from './Pages/Home/Home';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        )
    }
};

