import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Profile from '../GBuster.jpg';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                    src={Profile} alt="Profile" 
                    className="avatar-img"/>
                    <div className="banner-text"> 
                    <h1>Junior Software Developer</h1>

                    <hr/>
                    <p> HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | SWIFT | NODEJS </p>
                    <div className="social-links">

                        {/*Linkin*/}
                        <a href="https://www.linkedin.com/in/hamad-ali-5069b518a/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                        </a>

                        {/*Github*/}
                        <a href="https://github.com/HamadAli248" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                        </a>


                    </div>

                    </div>
                </Cell>
            </Grid>
            </div>
            
        )
    }
}
export default Landing;