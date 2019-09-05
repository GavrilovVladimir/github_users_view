import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userRequest from '../../store/action-creator';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
export default function Search() {
  const [user, setText] = useState('');
  const onChange = ({ target: { value } }) => {
    setText(value);
  };
  const dispatch = useDispatch();


  return (


    <div >


        <Grid item xs={6} md={2}>
        <TextField
            onChange={onChange} value={user}
            id="input-with-icon-textfield"
            label="UserName from Github"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),
            }}

        />
        <IconButton onClick={() => dispatch(userRequest(user))} aria-label="search">
            <SearchIcon />
        </IconButton>
        <div></div>

      {/*<input type="text" onChange={onChange} value={user} className="form-control" />*/}


    </Grid>

    </div>
  );
}
