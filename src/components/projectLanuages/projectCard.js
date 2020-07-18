import React, { Component } from 'react';
import {Card , CardText , CardTitle , CardActions , Button} from 'react-mdl';

class ProjectCard extends Component {
    
    //code for project cards  used in project.js file

    render(props) {
        return(
            <Card className="project-grid-initial" shadow={8} style={{maxWidth: '310px',maxheight:'300px' ,margin:'auto',marginTop:'10px',textAlign:'center'}}>
             <CardTitle style={{color:'black', height: '176px', background: 'url(' + this.props.imgmyUrl + ') center / cover', maxwidth: '100%',maxheight: '100%'}}/>
             <CardText id="cardtext">
                 {this.props.cardText}
             </CardText>
             <CardActions id="buttontab" border>
                <a id="button" href={this.props.GithubbuttonText}  target="_blank"><Button colored >Git Hub Code</Button> </a>
                <a id="button" href={this.props.livebuttonText}  target="_blank"><Button colored>{this.props.livebuttondisplay}</Button> </a>
             </CardActions>
             </Card>  
        )
    }
}

export default ProjectCard;
