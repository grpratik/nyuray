import React, {Component} from './node_modules/react'
import Modal from './node_modules/react-modal'
import AuthController from '../Authorization/AuthController';

class AuthModalBox extends Component{
    constructor() {
        super();
        
        this.state = {
            modalIsOpen: false
        };
        
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
        
    openModal() {
    this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
    }
    
    closeModal() {
    this.setState({modalIsOpen: false});
    }

    render(){
        return(
            <div>
                <Modal>
                <AuthController/>
        
                <button onClick={this.closeModal}>close</button>
            
                </Modal>
            </div>
        )
    }
}

export default AuthModalBox;