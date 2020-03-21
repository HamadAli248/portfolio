import React, { Component } from 'react';
import {Card , CardText , CardTitle , CardActions , Button , CardMenu , IconButton} from 'react-mdl';

class ProjectCard extends Component {
    
    //code for project cards  used in project.js file

    render(props) {
        return(
            <Card className="project-grid" shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
             <CardTitle style={{color:'black', height: '176px', background: 'url(' + this.props.myUrl + ') center / cover'}}>
             </CardTitle>
             <CardText>
                 {this.props.cardText}
             </CardText>
             <CardActions border>
                 <Button colored>{this.props.GithubbuttonText}</Button>
                 <Button colored>{this.props.livebuttonText}</Button>
                 
             </CardActions>
             <CardMenu style={{color: 'black'}}>
                 <IconButton name="share" />
             </CardMenu>
             </Card>  
        )
    }
}

export default ProjectCard;
