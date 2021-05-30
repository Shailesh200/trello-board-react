import React, { DragEventHandler, ReactNode } from 'react';
import './List.scss';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';



export interface IListProps {
  index: number;
  header: string;
  remove: (key: number) => void;
  cardDropped: (listIndex: number) => void;
  children: ReactNode;
}

const List: React.FC<IListProps> = ({
  index,
  header,
  children,
  remove,
  cardDropped
}: IListProps) => {

  const handleDeleteClick = () => {
    remove(index);
  }

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    cardDropped(index);
  }

  const allowDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  }

  return (
    <div className="list">
      <div className="header">
        <div className="list-header">
          <h4 className="">{header}</h4>
          <IconButton className=""
            type="button"
            onClick={handleDeleteClick}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div className="cardList"
        onDrop={handleDrop}
        onDragOver={allowDrop}
        onDragEnter={allowDrop}>
        {children}
      </div>
    </div>
  )
}

export default List;