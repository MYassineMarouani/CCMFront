import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  email : String = ""
  password : String = ""
  constructor(private router:Router) { }

  ngOnInit(): void {
    let x = localStorage.getItem('admin');
    let k = localStorage.getItem('token');
    if (x!=null) {
      this.router.navigate(['/admindashboard']);
    } else if ( k!= null) {
      this.router.navigate(['/agentdashboard/mesRDVs']);
    }
  }
  connexion(){
    if (this.email =="CCM123" && this.password == "CCM123") {
      this.router.navigate(['/admindashboard']);
      Swal.fire("connexion admin avec success")
      localStorage.setItem('admin','1');

    } else {
      Swal.fire("email ou mot de passe invalide")
    }
  }

}
