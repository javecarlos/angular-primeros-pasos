import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHeroe?: string;

  removeLastHeroe():void{
    //const deletedHeroe = this.heroNames.pop();
    //console.log({ deletedHeroe });

    this.deletedHeroe = this.heroNames.pop();
  }
}
