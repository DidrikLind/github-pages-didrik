import React from 'react';
import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from 'material-ui-icons/Menu';


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
          label={<Menu/>}
          onClick={this.handleToggle}
        />
        <nav>
            <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
                <Link to='/'><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
                <Link to='/persona'><MenuItem onClick={this.handleClose}>Roster</MenuItem></Link>
            </Drawer>
        </nav>
      </div>
    );
  }
}