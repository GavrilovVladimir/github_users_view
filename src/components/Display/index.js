import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
// import TextField from '@material-ui/core/TextField';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { USER_FETCH_REQUESTED, USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from '../../store/action/constant';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function Display() {
  const {
    repositories, organizations, statusDownload, userName, error,
  } = useSelector(state => ({
    repositories: state.repositories,
    organizations: state.organizations,
    statusDownload: state.statusDownload,
    userName: state.userName,
    error: state.error,
  }));
  return (
    <div>

        <Grid item xs={6} md={2}>
      {statusDownload === USER_FETCH_REQUESTED && <span> Спинер! *крутиться* </span>}
      {statusDownload === USER_FETCH_SUCCEEDED

        && (

          <>
          <div>


              <Typography variant="h5" >
                  User Name:
                  {' '}
                  {userName}
              </Typography>

          </div>


          <Typography variant="h6" >
              Organizations
          </Typography>

          { organizations.map(item => (
          <div key={item}>

              <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                          <FolderIcon   />
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                      primary={item}
                  />
              </ListItem>

          </div>

        )) }

      <Typography variant="h6" >
          Repositories
      </Typography>

      <List >
          {repositories.map(item => (

          <div key={item}>
              <ListItem>
                  <ListItemIcon>
                      <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                      primary=  {item}

                  />
              </ListItem>
          </div>
        ))}
      </List>
      </> )
      }

      {statusDownload === USER_FETCH_FAILED && (
        <>
          <div>
            Something went wrong :`(
          </div>
          <div>
            {error.message}
          </div>
        </>
      )}
        </Grid>
    </div>

  );

}


// Print.defaultProps = {
//   statusDownload: '',
//   userName: '',
//   repositories: [],
//   organizations: [],
//   error: '',
// };
// Print.propTypes = {
//   statusDownload: PropTypes.string,
//   userName: PropTypes.string,
//   repositories: PropTypes.arrayOf(PropTypes.string),
//   organizations: PropTypes.arrayOf(PropTypes.string),
//   error: PropTypes.string,
//
// };
//
//
// const mapStateToProps = state => ({
//   repositories: state.repositories,
//   organizations: state.organizations,
//   statusDownload: state.statusDownload,
//   userName: state.userName,
//   error: state.error,
// });


// export default connect(mapStateToProps)(Print);
