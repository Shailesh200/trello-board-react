export interface ICard {
  header: string;
  description: string;
  date: string;
}
export interface ICardList {
  cardListHeader: string;
  cards: ICard[];
}

export const initialData: ICardList[] = [
  {
    cardListHeader: 'Lorem Ipsum',
    cards: [
      {
        header: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        date: "May 29, 2021, 03:38:06 AM"
      },
      {
        header: 'Lorem Ipsum 2',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
        date: "May 28, 2021, 03:38:06 AM"
      }
    ]
  },
  {
    cardListHeader: 'Lorem',
    cards: [
      {
        header: 'Lorem Ipsum',
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
        date: "May 30, 2021, 03:38:06 AM"
      },
      {
        header: 'Lorem Ipsum 2',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,',
        date: "May 25, 2021, 03:38:06 AM"
      }
    ]
  }
];
