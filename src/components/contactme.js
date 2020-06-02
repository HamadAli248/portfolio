import React, { Component } from 'react';
import { Grid , Cell , List , ListItem , ListItemContent , } from 'react-mdl';
import Profile from '../GBuster.jpg';

class Contact extends Component {
    render() {
        return(

            // contact page
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/* Splitting the page into 2 with cell */}

                    {/* Right side of page with picture and name */}
                    <Cell col={6}> 
                        <h2 class="name">HAMAD ALI</h2>
                        <img class="picture"
                         src={Profile}
                          alt="profile pic"
                          style={{ height:'250px' }}/>
                    </Cell>
                    {/* Left Side Of the page with contact details */}
                    <Cell col={6}> 
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <div class="contact-info">
                                        <i class="font" className="fa fa-phone-square" aria-hidden="true"/>
                                        <p>07424983269</p>
                                        </div>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <div class="contact-info">
                                        <i class="font" className="fa fa-envelope" aria-hidden="true"/>
                                        <p>hammadali248@gmail.com</p>
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
export default Contact;