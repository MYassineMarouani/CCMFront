import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changermdp',
  templateUrl: './changermdp.component.html',
  styleUrls: ['./changermdp.component.css']
})
export class ChangermdpComponent implements OnInit {
  ancien: string = '';
  new: string = '';
  new1: string = '';
  agent: any;
  res: any;

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  changer() {
    this.agentService.getbyid(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.agent = res;
        if (this.agent.Password != this.ancien) {
          Swal.fire('verifier votre ancien mot de passe')
        } else {

          const fd = {
            Password : this.new 
          }
          this.agentService.update(localStorage.getItem('id'), fd).subscribe();
          Swal.fire('mot de passe changé avec success')
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
   
  }
}
