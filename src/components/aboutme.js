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
                        <hr style={{borderTop: '3px solid #833fb2' , width:'50%'}}/>
                        <p>Currently enrolled onto the 12-week training at Code Nation, Manchester. 
                           I am learning Front-End development including HTML5, CSS3, JavaScript,
                           React, Back-End programming such as APIs, Node.JS, Mongo. DB, MySQL, Express, 
                           iOS Swift programming and using the terminal and command line, using git and git hub.
                           I am looking to use the skills I have learnt to help develop my career by earning an
                           apprenticeship so I can return to Code Nation and improve my knowledge further.</p>  
                        <hr style={{borderTop: '3px solid #833fb2' , width:'50%'}}/> 

                        <h2>Skills</h2>  
                        <Skills className="skill"
                        skill="HTML/CSS"
                        progress={90}/> 
                        <Skills className="skill"
                        skill="JavaScript"
                        progress={70}/> 
                        <Skills className="skill"
                        skill="React"
                        progress={60}/>
                        <Skills className="skill"
                        skill="Swift"
                        progress={30}/>   
                        <Skills className="skill"
                        skill="NodeJS"
                        progress={20}/>                      
                    </Cell>
                    <Cell className="aboutme-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            sYear={2012}
                            eYear={2017}
                            schoolName="Harper Green School"
                            schoolDiscription=" Mathematics - 7 | English Language - 4 | English Literature - 4 | Science - B | Additional Science - B | Art - B | Religious Education - A | Geography - A | ECDL - D*
                         "/>
                         <Education
                            sYear={2017}
                            eYear={2019}
                            schoolName="Pendleton Sixth Form"
                            schoolDiscription=" BTEC Extended Diploma in Engineering: D*D*D* " />
                          <hr style={{borderTop: '3px solid #e22947'}}/>  
                          
                          <h2>Work Experience</h2>     

                            <Experience 
                                sYear="Sep 2017"
                                eYear="Present"
                                jobName="Floor Manager"
                                jobDiscription=" 
                                As a Floor Manager at McDonalds my duties include: 
                                Manage an area within the store. Trainer new and current crew members the procedures and standard od McDonald.
                                Interacting with costumers, taking orders, handling cash, till work, preparing food at a hygienic level 
                                and maintaining the store’s appearance. The restaurant is a fast-paced environment which requires speed,
                                efficiency and accuracy. By taking on these elements I am able to multi-task in a high-pressured environment 
                                and this has enabled me to accomplish critical objectives set out by the management team. At the restaurant we
                                have a diverse set of people coming in to the restaurant with diverse needs and abilities, so it is important 
                                that I am cultivated in public service skills. This is something I enjoy doing as my people skills are developing 
                                all the times, and I am working alongside diverse types of people.
                                 "
                            /> 
                            <Experience 
                                sYear="Jul 2016"
                                eYear="Jul 2016"
                                jobName="Teacher Assistant"
                                jobDiscription="               
                                During my time at All Saints Primary School, I assisted the classroom teacher on a daily basis in a variety of roles.
                                At the beginning of each school day and before each session, I would assist with classroom setup and welcomed
                                students into class. I was also able to support a range of pupils with various needs during my time at the school 
                                especially pupils who had difficulty understanding English as I can speak Urdu.
                                "
                            />    


                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default About;