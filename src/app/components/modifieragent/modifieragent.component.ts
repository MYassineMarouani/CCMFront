import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifieragent',
  templateUrl: './modifieragent.component.html',
  styleUrls: ['./modifieragent.component.css']
})
export class ModifieragentComponent implements OnInit {
  agentId: any;
  Agentinfo: any;
  Agentinfomodif: any;
  

  constructor(private route: ActivatedRoute, private Agent:AgentService) { }

  ngOnInit(): void {

    this.agentId = this.route.snapshot.paramMap.get('id');
    this.Agent.getbyid(this.agentId).subscribe(
      (res: any) => {
        this.Agentinfo = res;
        console.log(this.Agentinfo)
      },
      (err: any) => {
        console.log(err);
      }
    );

    const Agentinfo1 = {
      DateEM: this.Agentinfo.DateEM
    };
  }
  modifier() {
    const fd = {
      nom: this.Agentinfo.nom ,
      prenom : this.Agentinfo.prenom,
      Email : this.Agentinfo.Email , 
      Password : this.Agentinfo.Password,
      portable : this.Agentinfo.portable
    }
    this.Agent.update(this.agentId,fd).subscribe(
      (res: any) => {
        this.Agentinfomodif = res;
        console.log(this.Agentinfomodif)
        Swal.fire("modifié avec success")
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
