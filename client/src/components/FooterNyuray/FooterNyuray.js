import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './FooterNyuray.css'


const FooterNyuray = () => {
    return(
        <div className="footer-Features">
            <h6 style={{alignItems:"center"}}></h6>
                <div className="container">
                <div className="row">
                    <div className="vidyalayaMitra-Footer">
                        <h4 className="vidyalayaMitra">Vidyalaya Mitra</h4>
                    </div>
                    <div className="vl"></div>
                    <div className="col-md-3 col-sm-6">
                        <h6  className="footer-Heading">Product</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Promo</a></li>
                            <li><a href="#">Download</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6 className="footer-Heading">Contact</h6>
                        <ul className="list-unstyled">
                            <li><a href="#">Find Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6  className="footer-Heading">Follow Us</h6>
                        <ul className="icons list-unstyled">
                            <li><a className="fb" href="https://www.facebook.com"><FacebookIcon/></a></li>
                            <li><a className="twitter" href="https://www.twitter.com"><TwitterIcon/></a></li>
                            <li><a className="instagram" href="https://www.instagram.com"><InstagramIcon/></a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6 className="footer-Heading">Subscribe</h6>
                        <ul className="list-unstyled">
                            <li>Subscribe Us</li>
                            <li><input type="text" color="black" placeholder="Enter your email id"></input></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FooterNyuray;