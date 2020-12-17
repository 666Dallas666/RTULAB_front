import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowmessagesService {
constructor() { }
private messages:any[][] = [
  [1, "Пользователь 1","здарова", "21:55"],[0, "Пользователь 2","пгнпгнпгнпгнпгнп", "21:58"],[1, "Пользователь 1","ршгршгршгаенавк", "22:03"],[0, "Пользователь 2","огшлнршгеаен","22:09"],
  [1, "Пользователь 1","шщгхщаааааааааааааааааааааааааааааааааааааа ааааааааааааааааааааааааааааа ааа iujoiuoiuou uououououdfg idiofhuiodf oduoibufdo oudobudjsfbo oudfbouj odsfbodsfhb ododfuhbvo", "22:14"],
  [1, "Пользователь 1", "bruh moment", "22:30"],[0, "Пользователь 2", "ршгыаршщаг", "22:40"],[0, "Пользователь 2", "dhfuvhfdiu", "22:50"]
];
public getMessages(): Array<any> {
  return this.messages;
}
public addMessage(message: string) {
  if (message) {
    this.messages.push([1, "Пользователь 1", message, "хз"]);
  }
}
}
