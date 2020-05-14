import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;

  constructor(private _userService: UserService) {
    this.user = new User('', '', '', 18, 'male');
  }

  ngOnInit(): void {
    console.log(this._userService.prueba());
  }

  onSubmit(form) {
    this._userService.register(this.user).subscribe(
      response =>{
        if(response.user && response.user._id){
          this.status = "success";
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
