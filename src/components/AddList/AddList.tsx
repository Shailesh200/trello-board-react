import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

interface IAddListProps {
  listAddition: (listTitle: string) => void;
}

const AddList: React.FC<IAddListProps> = ({ listAddition }: IAddListProps) => {

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    listAddition(title);
    setOpen(false);
  }

  return (
    <React.Fragment>
      <div className="addListButtonContainer">
        <Button
          className="addListButton"
          variant="outlined"
          onClick={handleClickOpen}>
          Add List
        </Button>
      </div>
      <Dialog className="addListdialogContainer" open={open} onClose={handleClose}>
        <DialogTitle>Add new List</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type a title of the list
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="List Title"
            type="text"
            fullWidth
            onChange={event => setTitle(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}
            color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd}
            color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

  )
}

export default AddList;