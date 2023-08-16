import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creeragent',
  templateUrl: './creeragent.component.html',
  styleUrls: ['./creeragent.component.css']
})
export class CreeragentComponent implements OnInit {
  agentId: any
  Agentinfo: any;
  nom: string = '';
  prenom: string = '';
  Email: string = '';
  Password: string = '';
  portable: string = '';

  constructor(private route:ActivatedRoute,private Agent:AgentService) { }

  ngOnInit(): void {
  }
  Creer() {
    const fd = {
      nom: this.nom,
      prenom : this.prenom,
      Email : this.Email,
      Password : this.Password,
      portable : this.portable
    }
    if (this.nom=='' || this.prenom =='' || this.Email == '' || this.Password =='' || this.portable == '') {
      Swal.fire("il faut remplir tous les champs")

    } else {
    this.agentId = this.route.snapshot.paramMap.get('id');
    this.Agent.add(fd).subscribe(
      (res: any) => {
        this.Agentinfo = res;
        console.log(this.Agentinfo)
        Swal.fire("agent creé avec sucess")
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  }

}
