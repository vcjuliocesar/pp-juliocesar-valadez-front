import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {

  @Output() newEvent = new EventEmitter<boolean>();

  public user: User;
  public status: string;

  constructor(private _userService: UserService) {
    this.user = new User('', '', '', 18, 'male');

  }

  ngOnInit(): void {
  }

  sendMessage(msg) {
    this.newEvent.emit(msg);
  }

  onSubmit(form) {
    this._userService.register(this.user).subscribe(
      response =>{
        if(response.user && response.user._id){
          this.status = "success";
          //this.userlist.allUsers();
          form.reset();
        }else{
          this.status = "error";
        }
      },
      error => {
        console.log(error);
      }
    );
  }


}
