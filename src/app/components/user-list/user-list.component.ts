import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  public users: Array<User>;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.allUsers();
  }

  allUsers(name = null) {
    this._userService.getUsers(name).subscribe(
      (response) => {
        if (response.users) {
          this.users = response.users;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(id) {
    this._userService.delete(id).subscribe(
      (response) => {
        this.allUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
