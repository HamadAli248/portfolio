import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Profile from '../GBuster.jpg';

class Landing extends Component {
    render() {

        // code for the main landing page
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>

                    {/* Profile Image and name */}
                    <img 
                    src={Profile} alt="Profile" 
                    className="avatar-img"/>
                    <div className="banner-text"> 
                    <h1>Junior Software Engineer</h1>




                    {/* Links for Socail Media */}
                    <div className="social-links">
                        {/*Linkin*/}
                        <a href="https://www.linkedin.com/in/hamad-ali-5069b518a/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                        </a>
                        {/*Github*/}
                        <a href="https://github.com/HamadAli248" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                        </a>
                        {/*free code camp*/}
                        <a href="https://www.freecodecamp.org/fcc8eef0fcb-973d-4c54-bba3-c0fc28b43bb7" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp"  aria-hidden="true"/>
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