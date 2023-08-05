import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { RDVService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-listedesagents',
  templateUrl: './listedesagents.component.html',
  styleUrls: ['./listedesagents.component.css']
})
export class ListedesagentsComponent implements OnInit {
  agents: any
  allRDVs: any;

  constructor(private Agent: AgentService, private RDV: RDVService) { }

  ngOnInit(): void {
    this.loadData();
    this.RDV.getall().subscribe(
      (res: any) => {
        this.allRDVs = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  loadData(): void {
    this.Agent.getall().subscribe(
      (res: any) => {
        this.agents = res;
        this.fetchCountsForStatus();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  fetchCountsForStatus(): void {
    this.agents.forEach((agent: any) => {
      this.RDV.getbyidagent(agent._id).subscribe(
        (rdvRes: any) => {
          agent.rdv = rdvRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.RDV.getbynumberbystatus(agent._id, 'en cours').subscribe(
        (encoursRes: any) => {
          agent.encours = encoursRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.RDV.getbynumberbystatus(agent._id, 'installer').subscribe(
        (installerRes: any) => {
          agent.installer = installerRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.RDV.getbynumberbystatus(agent._id, 'confirmer').subscribe(
        (confirmerRes: any) => {
          agent.confirmer = confirmerRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.RDV.getbynumberbystatus(agent._id, 'annuller').subscribe(
        (annullerRes: any) => {
          agent.annuller = annullerRes;
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }
}
