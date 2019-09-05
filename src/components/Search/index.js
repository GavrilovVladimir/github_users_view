import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import userRequest from '../../store/action-creator';


export default function Search() {
  const [user, setText] = useState('');
  const onChange = ({ target: { value } }) => {
    if (!value.match('/')) setText(value);
  };
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    dispatch(userRequest(user));
  };

  return (
    <div>
      <Grid item xs={6} md={3}>
        <form className="commentForm" onSubmit={submit}>
          <TextField
            onChange={onChange}
            value={user}
            id="input-with-icon-textfield"
            label="UserName from Github"
            InputProps={{
              startAdornment: (
                <InputAdornment type="submit" position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <IconButton onClick={() => dispatch(userRequest(user))} aria-label="search">
            <SearchIcon />
          </IconButton>
        </form>
        <div />
      </Grid>
    </div>
  );
}
