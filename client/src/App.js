import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components 
import Welcome from './components/Home/Welcome';
import AuthController from './components/Authorization/AuthController';
import './components/Authorization/LoginStyle.scss'
import logo from './images/vidyalayamitra.JPG';
import Navbar from './components/Layout/Navbar';
import About from './components/Layout/About';
import ImageSlider from './components/ImageSlider/ImageSlider'
import Hamberger from './components/Hamberger/Hamberger';
import Backdrop from './components/Backdrop/Backdrop'
import TopBar from './components/TopBar/TopBar';
import WhatNyuray from './components/WhatIsNyuray/WhatNyuray'
import WhyNyuray from './components/WhyNyuray/WhyNyuray'
import AwesomeFeatures from './components/SomeAwesomeFeatures/AwesomeFeatures';
import DemoFeatures from './components/Demo/DemoNyuray';
import BeMember from './components/BeMember/BeMember';
import ReviewNyuray from './components/Reviews/ReviewNyuray';
import FooterNyuray from './components/FooterNyuray/FooterNyuray';

// //apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql'
});

class App extends Component {
  state = {
    sideDrawerOpen:false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }
  render(){
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop clicks={this.backdropClickHandler}/>;
    }

    let links = [
      {label: 'PRODUCT', link: '#product'},
      {label: 'ABOUT', link: '#about'},
      {label: 'PORTFOLIO', link: '#portfolio'},
      {label: 'MANAGEMENT', link: '#management'},
      {label: 'TEAM', link: '#team'}
      
    ]
    return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
            {/* <AuthController/> */}
            <div id="main" style={{height:'100%'}}>
              <Navbar/>
              <TopBar/>
              <Welcome weblinks={links} logo={logo} drawerToggleClickHandler={this.drawerToggleClickHandler}/>
              <Hamberger show={this.state.sideDrawerOpen}/>
              {backdrop}
              <ImageSlider/>
              <WhatNyuray/>
              <WhyNyuray/>
              <AwesomeFeatures/>
              <DemoFeatures/>
              <BeMember/>
              <ReviewNyuray/>
              <FooterNyuray/>
            </div>
            
            <Switch>
              <Route path="/signin" component={AuthController}/>
              <Route exact path="/about" component={About}/>
            </Switch>
            {/* <h1>Ninja's Reading List</h1>
            <BookList/>
            <AddBook/> */}
          
          </div>
      </BrowserRouter>       
    </ApolloProvider>
  );
  }
}

export default App;
