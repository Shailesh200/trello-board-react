import React, { DragEvent, DragEventHandler } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './CardItem.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { CardActions } from '@material-ui/core';
import { formatDate } from '../../constants/util';


export interface ICardMetadata {
  cardIndex: number;
  listIndex: number;
}

export interface ICardProps extends ICardMetadata {
  header: string;
  description: string;
  date: string;
  removeClick: ({ cardIndex, listIndex }: ICardMetadata) => void;
  dragAction: (data: Omit<ICardProps, 'removeClick' | 'dragAction'>) => void;
}

const CardItem: React.FC<ICardProps> = ({
  header,
  description,
  cardIndex,
  listIndex,
  date,
  removeClick,
  dragAction
}: ICardProps) => {

  const handleRemoveClick = () => removeClick({
    cardIndex,
    listIndex
  })

  const handleDragStart: DragEventHandler<HTMLDivElement> = (event: DragEvent) => {
    const cardData = {
      header,
      description,
      cardIndex,
      listIndex,
      date,
    }
    event.dataTransfer.setData("text", JSON.stringify(cardData));
    dragAction(cardData);
  }
  console.log(date)
  return (
    <Card draggable="true"
      onDragStart={handleDragStart}
      className="card">
      <CardContent>
        <span className="card-heading">Title</span><div className="card-content">{header}</div>
        <IconButton onClick={handleRemoveClick}
          className="icon-button"
          size="small">
          <CloseIcon />
        </IconButton>
        <span className="card-heading">Description</span>
        <div className="card-desc">
          {description}
        </div>
      </CardContent>
      <CardActions>
        <span className="card-heading">Created At:</span>
        <div className="card-desc">{formatDate(date)}</div>
      </CardActions>
    </Card >
  );
}

export default CardItem;