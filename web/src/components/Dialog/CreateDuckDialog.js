import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const CreateDuckDialog = ({ open, update, updateFeedList }) => {
  const initialState = {
    food: '',
    location: '',
    duckCount: '',
    foodCount: '',
    timeFed: '',
  };

  const [inputState, updateInput] = React.useState(initialState);

  const handleClose = () => {
    update(false);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/feed', inputState);
      const newFeed = res.data;

      if (res.status !== 201 || !newFeed || !res) {
        throw new Error('Unable to create');
      }

      updateFeedList((prevState) => [...prevState, newFeed]);
      updateInput(initialState);
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
      <DialogTitle id="form-dialog-title">Add Duck</DialogTitle>
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
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDuckDialog;
