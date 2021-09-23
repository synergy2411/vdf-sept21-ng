import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService) { }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout()
    // alert("Should be logged out.")
  }
  ngOnInit(): void {
  }

}
