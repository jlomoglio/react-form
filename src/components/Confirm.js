import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form Data Here //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { firstName, lastName, email, city, occupation, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={ firstName }
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={ lastName }
            />
            <ListItem
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem
              primaryText="City"
              secondaryText={ city }
            />
            <ListItem
              primaryText="Occupation"
              secondaryText={ occupation }
            />
            <ListItem
              primaryText="Bio"
              secondaryText={ bio }
            />
          </List>
          <br />
          <RaisedButton 
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton 
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  };
};

const styles = {
  button: {
    marginTop: '25px',
    marginRight: '10px'
  }
};

export default Confirm;
