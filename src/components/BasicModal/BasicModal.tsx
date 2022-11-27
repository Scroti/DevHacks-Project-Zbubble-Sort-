import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './BasicModal.css';
import abilitiesJSON from '../../Models/abilities.json';
import { Chip } from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 750,
  bgcolor: 'background.paper',
  borderRadius: '25px',
  p: 4,
};

const styleText = {
  color: 'black',
  fontSize: '12px',
};
export default function BasicModal({ card }) {
  const dragItem = React.useRef();
  const dragOverItem = React.useRef();

  const [abList, setabList] = React.useState(abilitiesJSON.abilities);
  const [goodPoints, setGoodPoints] = React.useState([]);
  const [improvements, setImprovements] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData('id', id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData('id');

    improvements.push(abList[id].name);

    abList.splice(id, 1);
    setImprovements([...improvements]);
    setabList(abList);

    console.log(abList);
  };

  const onDropiing = (ev, cat) => {
    let id = ev.dataTransfer.getData('id');

    goodPoints.push(abList[id].name);

    abList.splice(id, 1);
    setGoodPoints([...goodPoints]);
    setabList(abList);

    console.log(abList);
  };
  return (
    <div>
      <Button variant="text" onClick={handleOpen} sx={styleText}>
        Review your colleague
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={card.img} className="profile" />
          <div className="d-flex w-100 justify-content-center nume">
            <Typography variant="h6">{card.name}</Typography>
          </div>

          <div className="d-flex justify-content-around mt-5">
            <div className="middle-text">
              <p className="points">Good Points</p>
              <div
                className="goodpoints"
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDropiing(e, 'complete')}
              >
                {goodPoints.map((ability, x) => (
                  <Chip
                    onDragStart={(e) => onDragStart(e, ability[x])}
                    draggable
                    label={ability[x]}
                    key={x}
                    variant="filled"
                    sx={{
                      bgcolor: '#fff',
                      marginLeft: '7px',
                      marginTop: '5px',
                      width: '60px',
                    }}
                    className="mb-2"
                  />
                ))}
              </div>
            </div>
            <div className="middle-text">
              <p className="points">What should be improved?</p>
              <div
                className="improvements"
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, 'complete')}
              >
                {improvements.map((ability, x) => (
                  <Chip
                    onDragStart={(e) => onDragStart(e, ability[x])}
                    draggable
                    label={ability[x]}
                    key={x}
                    variant="filled"
                    sx={{
                      bgcolor: '#fff',
                      marginLeft: '7px',
                      marginTop: '5px',
                      width: '60px',
                    }}
                    className="mb-2"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="left-text">
            <div className="abilitiones">
              <p>Abilites to assign</p>
            </div>
            <div className="abilities">
              {abList.map((ability, x) => (
                <Chip
                  onDragStart={(e) => onDragStart(e, x)}
                  draggable
                  label={ability.name}
                  key={x}
                  variant="filled"
                  sx={{ bgcolor: '#fff', marginLeft: '7px', marginTop: '5px' }}
                  className="mb-2"
                />
              ))}
            </div>
            <Button variant="contained">Send it</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
