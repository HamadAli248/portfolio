import React, { Component } from 'react';
import { Grid , Cell , List , ListItem , ListItemContent } from 'react-mdl';
import Profile from '../GBuster.jpg';

class Landing extends Component {
    render() {

        // code for the main landing page
        return(
            <div className="contact-body" style={{width: '100%', margin: 'auto'}}>
            <Grid className="contact-grid" >
                <Cell col={7}>

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
                <Cell col={5}> 
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <div class="contact-info">
                                    <i class="font" className="fa fa-phone-square" aria-hidden="true"/>
                                    <a href="tel:00447424983269">07424983269</a>
                                    </div>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <div class="contact-info">
                                    <i class="font" className="fa fa-envelope" aria-hidden="true"/>
                                    <a href="mailto:hammadali248@gmail.com">Email</a>
                                    </div>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
            </div>
           
        )
    }
}
export default Landing;