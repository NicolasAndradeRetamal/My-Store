import { Component } from '@angular/core';

import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'my-store';
  name:string = 'Miatreo';
  age:number = 25;
  img:string = 'https://picsum.photos/600/400';
  btnDisabled:boolean = true;
  person={
    name: 'Nico',
    age: 25,
    avatar: 'https://picsum.photos/600/400'
  }
  names:string[]=['Nico', 'Pedro', 'Juan', 'Franco', 'Cris'];
  newName='';
  products:Product[] =[
    {
      name: 'Resident Evil HD Remake',
      price: 14990,
      image: './assets/images/Resident Evil.png',
      category: 'Horror'
    },
    {
      name: 'Resident Evil 2',
      price: 19990,
      image: './assets/images/Resident Evil 2.png'
    },
    {
      name: 'Resident Evil 3',
      price: 19990,
      image: './assets/images/Resident Evil 3.png'
    },
    {
      name: 'Resident Evil 4',
      price: 9990,
      image: './assets/images/Resident Evil 4.png'
    },
    {
      name: 'Resident Evil 8',
      price: 24990,
      image: './assets/images/Resident Evil 8.png'
    },
    {
      name: 'God of War PS4',
      price: 9990,
      image: './assets/images/God of War PS5.png'
    }
  ]
  toggleBtn(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.age = ++this.person.age;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName)
    this.newName ='';
  }
  deleteName(index:number){
    this.names.splice(index, 1);
  }
}
