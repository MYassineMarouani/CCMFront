import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentsidebar',
  templateUrl: './agentsidebar.component.html',
  styleUrls: ['./agentsidebar.component.css']
})
export class AgentsidebarComponent implements OnInit {
  x=localStorage.getItem('nom')
  
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  Deco() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('nom');
    this.router.navigate(['']);
  }

}
