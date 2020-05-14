import { Component,ViewChild} from '@angular/core';
import {UserListComponent} from './components/user-list/user-list.component';

import {Search} from './models/search';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(UserListComponent) userlist: UserListComponent;


  title = 'pp-juliocesar-valadez-front';
  public search:Search;

  message: boolean = false;

  receiveMessage(confirm) {
    this.message = confirm;
    if(this.message){
      this.userlist.allUsers();
    }
  }

  isEmpty(){
    //console.log(this.search);
  }

  goSearch(){
    this.userlist.allUsers(this.search);
  }

  onEnter(e){
   this.goSearch();
  }
}
