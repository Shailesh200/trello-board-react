import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { ICard } from "../../constants/mock";

interface IAddCardProps {
  addCardItem: (card: ICard & { listIndex: number }) => void;
  listIndex: number;
}

const AddCard: React.FC<IAddCardProps> = ({ addCardItem, listIndex }: IAddCardProps) => {

  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showCardTitleError, setCardTitleError] = useState(false);

  const handleAddButtonClick = () => {
    if (!cardTitle) {
      setCardTitleError(true);
      return;
    }
    setCardTitleError(false);
    let timestamp = new Date();
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
    addCardItem({
      listIndex,
      header: cardTitle,
      description: cardDescription,
      date
    });
    setShowCard(false);
  }

  const handleFooterButtonClick = () => setShowCard(true);
  const handleFooterCancelClick = () => setShowCard(false);

  return (
    <React.Fragment>
      <footer className="add-card-btn">
        <Button onClick={handleFooterButtonClick}
          type="button"
          className="icon-button col-12">
          <ControlPointIcon />
        </Button>
      </footer>
      { showCard ?
        <Card>
          <CardContent>
            <TextField id="card-title"
              label="Card Title"
              error={showCardTitleError}
              onChange={event => setCardTitle(event.target.value)} />
            <TextField id="card-description"
              label="Card Description"
              onChange={event => setCardDescription(event.target.value)} />

          </CardContent>
          <CardActions>
            <Button onClick={handleAddButtonClick}
              variant="contained"
              className="btn-primary"
              color="primary"
              size="small">
              Add Card
            </Button>
            <Button onClick={handleFooterCancelClick}
              variant="outlined"
              color="primary"
              className="btn-secondary"
              size="small">
              Cancel
            </Button>
          </CardActions>
        </Card> :
        null
      }

    </React.Fragment>
  )
}

export default AddCard;