import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginagent',
  templateUrl: './loginagent.component.html',
  styleUrls: ['./loginagent.component.css']
})
export class LoginagentComponent implements OnInit {
  email : String | undefined;
  password : String | undefined;
  cred : any
  token: any | null = null;
  
  constructor(private Agent:AgentService,private router:Router) { }

  ngOnInit(): void {  
    let x = localStorage.getItem('token');
    if (x!=null) {
      this.router.navigate(['/agentdashboard/mesRDVs']);
    }
  }
  Connexion(){
 
    this.cred = {
      Email : this.email,
      Password : this.password
    }

    this.Agent.login(this.cred).subscribe(

      res => {

        this.token = res;
        localStorage.setItem('token', this.token.token);
        console.log(this.token)
        Swal.fire(

          'Connexion avec success'
        )
        this.router.navigate(['/agentdashboard/mesRDVs']);
        let token = localStorage.getItem('token');
        let decodedToken = JSON.parse(window.atob(token!.split('.')[1]));
        localStorage.setItem('id',decodedToken.id); // inspect the decoded token in the console
        localStorage.setItem('email',decodedToken.email);
 

      },
      err => {
        Swal.fire(err.error.message)

      }

    );
  }

}
