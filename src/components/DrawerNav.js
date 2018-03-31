import React from 'react';
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {greenA200} from 'material-ui/styles/colors';
import ActionHomeIcon from 'material-ui/svg-icons/action/home';
import SocialPersonIcon from 'material-ui/svg-icons/social/person';
import NavMenuIcon from 'material-ui/svg-icons/navigation/menu';

const iconStyles = {
    marginRight: 24,
};

export default class DrawerNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>      
        <RaisedButton
          label={<NavMenuIcon hoverColor={greenA200} />}
          onClick={this.handleToggle}
        />
        <nav>
            <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
                <Link to='/'><MenuItem onClick={this.handleClose}><ActionHomeIcon style={iconStyles} hoverColor={greenA200}/>H o m e</MenuItem></Link>
                <Link to='/persona'><MenuItem onClick={this.handleClose}><SocialPersonIcon style={iconStyles} hoverColor={greenA200} />P e r s o n a</MenuItem></Link>
            </Drawer>
        </nav>
      </div>
    );
  }
}