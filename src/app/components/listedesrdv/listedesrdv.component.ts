import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { RDVService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-listedesrdv',
  templateUrl: './listedesrdv.component.html',
  styleUrls: ['./listedesrdv.component.css'],
})
export class ListedesrdvComponent implements OnInit {
  allRDV: any[] = [];
  filteredRDV: any[] = [];
  itemsPerPage = 10;
  currentPage = 1;
  filterStatus = 'tous';
  totalPages = 1; // Add totalPages property and initialize it to 1

  constructor(private RDV: RDVService, private Agent: AgentService) {}

  ngOnInit(): void {
    this.RDV.getall().subscribe(
      (res: any) => {
        this.allRDV = res;
        this.fetchAgentNames(); // Fetch agent names after getting all RDVs
        this.filterRDVByStatus(this.filterStatus);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  fetchAgentNames(): void {
    // Fetch agent information for each RDV and update the array
    this.allRDV.forEach((rdv: any) => {
      this.Agent.getbyid(rdv.idAgent).subscribe(
        (agent: any) => {
          rdv.agentName = agent.nom; // Store agent name in the RDV object
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }

  filterRDVByStatus(status: string): void {
    this.filterStatus = status;
    if (status === 'tous') {
      this.filteredRDV = this.allRDV;
    } else {
      this.filteredRDV = this.allRDV.filter((rdv) => rdv.Status === status);
    }
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredRDV.length / this.itemsPerPage); // Calculate totalPages
  }

  getPaginationArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  supprimer() {
    
  }
}
