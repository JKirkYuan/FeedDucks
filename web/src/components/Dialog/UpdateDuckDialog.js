import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const UpdateDuckDialog = ({ open, update, currRow, setCurrRow, feeds }) => {
  const [inputState, updateInput] = React.useState({ ...currRow });

  React.useEffect(() => {
    updateInput({ ...currRow });
  }, [currRow]);

  const handleClose = () => {
    update(false);
    setCurrRow({});
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/feed/${currRow.id}`,
        inputState
      );

      let idx = feeds.findIndex((feed) => feed.id === currRow.id);
      feeds[idx] = res.data;

      // const newFeed = res.data;
      // if (res.status !== 201 || !newFeed || !res) {
      //   throw new Error('Unable to create');
      // }

      handleClose();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Update Duck</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please input the food, location, # of ducks fed, # of food fed and
          time fed
        </DialogContentText>
        <TextField
          value={inputState.food}
          onChange={(e) =>
            updateInput((prevState) => ({
              ...prevState,
              food: e.target.value,
            }))
          }
          variant="outlined"
          margin="normal"
          id="food"
          label="Food Name"
          fullWidth
        />
        <TextField
          value={inputState.location}
          onChange={(e) =>
            updateInput((prevState) => ({
              ...prevState,
              location: e.target.value,
            }))
          }
          variant="outlined"
          margin="normal"
          id="location"
          label="Location"
          fullWidth
        />
        <TextField
          value={inputState.duckCount}
          onChange={(e) =>
            updateInput((prevState) => ({
              ...prevState,
              duckCount: e.target.value,
            }))
          }
          variant="outlined"
          margin="normal"
          id="ducksFed"
          label="Number of ducks fed"
          fullWidth
        />
        <TextField
          value={inputState.foodCount}
          onChange={(e) =>
            updateInput((prevState) => ({
              ...prevState,
              foodCount: e.target.value,
            }))
          }
          variant="outlined"
          margin="normal"
          id="foodsFed"
          label="Number of food fed"
          fullWidth
        />
        <TextField
          value={inputState.timeFed}
          onChange={(e) =>
            updateInput((prevState) => ({
              ...prevState,
              timeFed: e.target.value,
            }))
          }
          variant="outlined"
          margin="normal"
          id="timeFed"
          label="Time Fed"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateDuckDialog;
