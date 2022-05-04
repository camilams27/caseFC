import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users : any;

  constructor(private usersService:UsersService) { }

  async ngOnInit() {
    this.Users = await this.usersService.getUsers()
  }

}
