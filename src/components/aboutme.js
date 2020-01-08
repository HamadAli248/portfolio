import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Profile from '../GBuster.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class About extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img
                            src={Profile}
                            alt="profile pic"
                            style={{ height:'200px' }}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Hamad Ali</h2>
                        <h4 style={{color: 'grey'}}>Software Developer</h4>
                        

                        <h2>Skills</h2>  
                        <Skills className="skill"
                        skill="HTML/CSS"
                        progress={90}/> 
                        <Skills className="skill"
                        skill="JAVA"
                        progress={80}/>   
                        <Skills className="skill"
                        skill="JavaScript"
                        progress={85}/> 
                        <Skills className="skill"
                        skill="React"
                        progress={75}/>
                        <Skills className="skill"
                        skill="Swift"
                        progress={30}/>   
                        <Skills className="skill"
                        skill="NodeJS"
                        progress={20}/> 
                                           
                    </Cell>
                    <Cell className="aboutme-right-col" col={8}> 
                    <h2>About Me</h2>
                           <p>Currently enrolled onto the 12-week training at Code Nation, Manchester. 
                           I am learning Front-End development including HTML5, CSS3, JavaScript,
                           React, Back-End programming such as APIs, Node.JS, Mongo. DB, MySQL, Express, 
                           iOS Swift programming and using the terminal and command line, using git and git hub.
                           I am looking to use the skills I have learnt to help develop my career by earning an
                           apprenticeship so I can return to Code Nation and improve my knowledge further.</p>     

                     <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Certification</h2>

                        <a href="https://www.sololearn.com/Certificate/1014-13208616/pdf/" target="_blank">HTML Fundamentals course</a> <br></br>    
                        <a href="https://www.sololearn.com/Certificate/1023-13208616/pdf/" target="_blank">CSS Fundamentals course </a> <br></br>    
                        <a href="https://www.sololearn.com/Certificate/1024-13208616/pdf/" target="_blank">JavaScript Tutorial course</a> <br></br> 
                        <a href="https://www.sololearn.com/Certificate/1068-13208616/pdf/" target="_blank"> Java Tutorial course </a> <br></br>       
                        <a href="https://www.freecodecamp.org/certification/fcc8eef0fcb-973d-4c54-bba3-c0fc28b43bb7/responsive-web-design" target="_blank">Responsive Web Design</a><br></br>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default About;