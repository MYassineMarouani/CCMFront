import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listedesagents',
  templateUrl: './listedesagents.component.html',
  styleUrls: ['./listedesagents.component.css']
})
export class ListedesagentsComponent implements OnInit {
  agents: any[] = [];
  allRDVs: any[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  ins : any
  enc : any
  conf : any
  annul : any
  constructor(private agentService: AgentService, private rdvService: RDVService) { }

  ngOnInit(): void {
    this.rdvService.getbystatus('en cours').subscribe(
      (en1: any) => {
        this.enc = en1;
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.rdvService.getbystatus('installer').subscribe(
      (nins: any) => {
        this.ins = nins;
        console.log(this.ins.length)
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.rdvService.getbystatus('confirmer').subscribe(
      (conf1: any) => {
        this.conf = conf1;
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.rdvService.getbystatus('installer').subscribe(
      (inst1: any) => {
        this.ins = inst1;
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.rdvService.getbystatus('annuller').subscribe(
      (ann1: any) => {
        this.annul = ann1;
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.loadData();
    this.rdvService.getall().subscribe(
      (res: any) => {
        this.allRDVs = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  supprimer(idag : any) {
    // Show the Swal fire with the confirmation message
    Swal.fire({
      title: 'Voulez-vous supprimer l\'agent?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      // Check if the user clicked the "Oui" button
      if (result.isConfirmed) {
        window.location.reload();

        // Call the agentService.delete(idag) method to delete the agent
        this.agentService.delete(idag).subscribe(
          () => {
            // Agent deleted successfully
            Swal.fire('Suppression réussie!', 'L\'agent a été supprimé avec succès.', 'success');
          },
          (error) => {
            // Error occurred during deletion
            Swal.fire('Erreur de suppression!', 'Une erreur est survenue lors de la suppression de l\'agent.', 'error');
            console.error('Error while deleting agent:', error);
          }
        );
      }
    });
    
  }

  loadData(): void {
    this.agentService.getall().subscribe(
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
    for (const agent of this.agents) {
      this.rdvService.getbyidagent(agent._id).subscribe(
        (rdvRes: any) => {
          agent.rdv = rdvRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.rdvService.getbynumberbystatus(agent._id, 'en cours').subscribe(
        (encoursRes: any) => {
          agent.encours = encoursRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.rdvService.getbynumberbystatus(agent._id, 'installer').subscribe(
        (installerRes: any) => {
          agent.installer = installerRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.rdvService.getbynumberbystatus(agent._id, 'confirmer').subscribe(
        (confirmerRes: any) => {
          agent.confirmer = confirmerRes;
        },
        (err: any) => {
          console.log(err);
        }
      );

      this.rdvService.getbynumberbystatus(agent._id, 'annuller').subscribe(
        (annullerRes: any) => {
          agent.annuller = annullerRes;
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  get pagedAgents(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.agents.length);
    return this.agents.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.agents.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  gotoPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
