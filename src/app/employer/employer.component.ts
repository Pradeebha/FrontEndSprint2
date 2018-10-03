import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../core/token.storage';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  userName: string;
  userId: string;


  constructor(private tokenStorage: TokenStorage) { 
    this.userId = tokenStorage.getUserId();
    this.userName = tokenStorage.getUserName();
  }

  ngOnInit() {
  }

}
