import * as React from 'react';
import {useState}from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [days, setDays] = useState('');

  const handleClick = (e) => {
    e.preventDefault()
    const user = { name, surname, days }
    console.log(user)
    fetch("http://localhost:8080/user/add",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => { console.log("New student") })
     setOpen(false);
    }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
        Wypożycz
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CarRent</DialogTitle>
        <DialogContent>
          <DialogContentText>
                      Wypełnij formularz wypożyczenia,
                      koszt jednej doby 75 zł.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Imię"
            fullWidth
                      variant="standard"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                  />

                  <TextField
            autoFocus
            margin="dense"
            id="surname"
            label="Nazwisko"
            fullWidth
            variant="standard"
            value={surname}
            onChange={(e)=>setSurname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="days"
            label="Podaj na ile dni"
            fullWidth
                      variant="standard"
                      value={days}
                      onChange={(e)=>setDays(e.target.value)}
                  />
                 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Zakończ</Button>
          <Button onClick={handleClick}>Wyślij</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}