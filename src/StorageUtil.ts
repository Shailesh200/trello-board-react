import { ICardList } from "./constants/mock";

export class StorageUtil {
  dataKey: string = 'data';

  get data(): ICardList[] {
    const dataString = localStorage.getItem(this.dataKey);
    return JSON.parse(dataString ? dataString : '[]');
  }

  set data(data: ICardList[]) {
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }
}