import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
    
  }

  async getUsers(){
    const users = await this.httpClient.get<any[]>('localhost:3333/users').toPromise();
    console.log(users)
    return users
  }
}
