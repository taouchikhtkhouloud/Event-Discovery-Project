import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Merci pour votre soumission</h1>
            <p>Vous recevrez un e-mail avec des instructions supplémentaires.</p>
            <NavLink to="/evenement">
                      <Button style={{color:''}} className="btnretour">Quitter</Button>
                    </NavLink>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;