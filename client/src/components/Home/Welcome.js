import React, {Component} from 'react';
import AuthController from "../Authorization/AuthController"
import searchIcon from '../../images/search-icon.png';
import './../Home/Welcome.css';
import HambergerToggleButton from '../Hamberger/HambergerToggleButton';
//import Hamberger from '../Hamberger/Hamberger';

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {showForm: false, isEnableLogin: false}

    }
    showForm = (e) => {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    showLoginBox = (e) => {
        return(
            alert(<AuthController/>)
        )
        // this.setState({
        //     isEnableLogin: !this.state.isEnableLogin 
        // });
    }
    render(){
        let searchForm = this.state.showForm ? (<form className="menu__search-form" method="POST">
                                        <input className="menu__search-input" placeholder="Type and hit enter"/>
                                        </form>) : '';
        let linksMarkup = this.props.weblinks.map((link, index) => {
            return (<li key={index} className="home menu__list-item"><a className="menu__link" onClick={this.showLoginBox.bind(this)} href="{link.link}">{link.label}</a></li>)
        })
        
        // if (this.state.isEnableLogin)
        // {
        //    return <AuthModalBox/>
        // }
        console.log("From welcome.js "+ this.props.drawerToggleClickHandler);
        
        return(
            <div className="center">
            <nav className="menu">
                <div className="hamberger-button">
                    <HambergerToggleButton click = {this.props.drawerToggleClickHandler}/>
                </div>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                    <button onClick={this.showForm.bind(this)} style={{
                        backgroundImage : 'url('+ searchIcon +')'
                        }} className="menu__search-button"></button>
                    {searchForm}
                </div>
            </nav>
            </div>
        )
    }
}
export default Welcome;