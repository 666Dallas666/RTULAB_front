import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowdialogsService {
constructor() { }
 private dialogues:any[][] = [
  ["Пользователь 1","20:25", "sfgdsfgdfgdff","token1"],
  ["Пользователь 2","21:15","fdgrg srgfrfg svf","token2"],
  ["Пользователь 3","13:12","frgrt dffgrgg","token3"]
];
public getDialogues(): Array<any> {
  return this.dialogues;
}

}
