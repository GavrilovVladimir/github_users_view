import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


export default function Header() {
  return (
    <>
      <header>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <SearchIcon />
              </IconButton>
              <Typography variant="h6">
                GitHub Users
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </header>
    </>
  );
}
