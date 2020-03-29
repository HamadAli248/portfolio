import React, { Component } from 'react';
import {Card , CardText , CardTitle , CardActions , Button , CardMenu , IconButton} from 'react-mdl';

class ProjectCard extends Component {
    
    //code for project cards  used in project.js file

    render(props) {
        return(
            <Card className="project-grid-initial" shadow={5} style={{minWidth: '450',maxheight:'300px' ,margin:'auto',marginTop:'10px'}}>
             <CardTitle style={{color:'black', height: '176px', background: 'url(' + this.props.imgmyUrl + ') center / cover', maxwidth: '100%',maxheight: '100%'}}>
             </CardTitle>
             <CardText id="cardtext">
                 {this.props.cardText}
             </CardText>
             <CardActions id="buttontab" border>
                <a id="button" href={this.props.GithubbuttonText}  target="_blank"><Button colored >Git Hub</Button> </a>
                <a id="button" href={this.props.livebuttonText}  target="_blank"><Button colored>Live Demo</Button> </a>
                 
             </CardActions>
             <CardMenu style={{color: 'black'}}>
                 <IconButton name="share" />
             </CardMenu>
             </Card>  
        )
    }
}

export default ProjectCard;
