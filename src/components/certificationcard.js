import React, { Component } from 'react';
import {Card , CardText , CardTitle , CardActions , Button ,} from 'react-mdl';

class CertificationCard extends Component {
    
    //code for project cards  used in project.js file

    render(props) {
        return(
            <Card shadow={0} style={{width: '350px', height: '380px', margin: 'auto',marginTop:'20px'}}>
            <CardTitle expand style={{color: '#fff', background: 'url(' + this.props.imgmyUrl + ') center / cover', maxwidth: '100%',maxheight: '100%',}}></CardTitle>
            <CardText>
                {this.props.certTitle}
            </CardText>
            <CardActions border>
            <a id="button" href={this.props.certURL}  target="_blank"><Button colored> View Certification</Button></a>
            </CardActions>
            </Card>
        )
    }
}

export default CertificationCard;