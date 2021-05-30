import React, { useState } from 'react';
import './App.scss';
import CardItem from './components/CardItem/CardItem';
import List from './components/List/List';
import AddList from './components/AddList/AddList';
import { ICardList, initialData } from './constants/mock';
import AddCard from './components/AddCard/AddCard';
import { ICard } from './constants/mock';
import { ICardMetadata, ICardProps } from './components/CardItem/CardItem';
import { StorageUtil } from './StorageUtil';

const App: React.FC = () => {

  let draggedCard: Omit<ICardProps, 'removeClick' | 'dragAction'>;
  const storage = new StorageUtil();

  const [cardLists, setcardLists] = useState<ICardList[]>(
    () => {
      if (Array.isArray(storage.data) && storage.data.length) {
        return storage.data;
      } else {
        storage.data = initialData;
        return initialData;
      }
    }
  );

  const addToList = (title: string) => {
    const updatedCardList = [
      ...cardLists,
      {
        cardListHeader: title,
        cards: []
      }
    ]
    setcardLists(updatedCardList);
    storage.data = updatedCardList;
  }

  const handleListRemove = (key: number) => {
    cardLists.splice(key, 1);
    setcardLists([...cardLists]);
    storage.data = cardLists;
  }

  const handleAddCard = ({ header, description, date, listIndex }: ICard & { listIndex: number }) => {
    const cardList = cardLists[listIndex];
    cardList.cards.push({ header, description, date })

    cardList.cards.sort((a, b) => {
      return +new Date(b.date) - +new Date(a.date);
    });
    setcardLists([...cardLists]);
    storage.data = cardLists;
  }

  const handleCardRemove = ({ listIndex, cardIndex }: ICardMetadata) => {
    const cardList = cardLists[listIndex];
    cardList.cards.splice(cardIndex, 1);
    setcardLists([...cardLists]);
    storage.data = cardLists;
  }

  const setDragged = (card: Omit<ICardProps, 'removeClick' | 'dragAction'>) => {
    draggedCard = card
  }

  const cardDropped = (listIndex: number) => {
    const movedToList = cardLists[listIndex];
    const movedFromList = cardLists[draggedCard.listIndex];
    movedFromList.cards.splice(draggedCard.cardIndex, 1);
    movedToList.cards.unshift({
      header: draggedCard.header,
      description: draggedCard.description,
      date: draggedCard.date
    });
    movedToList.cards.sort((a, b) => {
      return +new Date(b.date) - +new Date(a.date);
    });
    setcardLists([...cardLists]);
    storage.data = cardLists;
  }

  return (
    <div className="app">
      <header>
        <h1>Trello Board</h1>
      </header>
      <div>
        <AddList listAddition={addToList} />
      </div>
      <section>
        {cardLists.map(({ cardListHeader, cards }, listIndex) => (
          <List header={cardListHeader}
            remove={handleListRemove}
            cardDropped={cardDropped}
            key={listIndex}
            index={listIndex}>
            {cards.map(({ header, description, date }, cardIndex) => (
              <CardItem
                header={header}
                date={date}
                description={description}
                cardIndex={cardIndex}
                listIndex={listIndex}
                removeClick={handleCardRemove}
                dragAction={setDragged}
                key={cardIndex} />
            ))}
            <AddCard listIndex={listIndex}
              addCardItem={handleAddCard} />
          </List>
        ))}

      </section>
    </div>
  );
}

export default App;
