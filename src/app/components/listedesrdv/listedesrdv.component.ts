import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listedesrdv',
  templateUrl: './listedesrdv.component.html',
  styleUrls: ['./listedesrdv.component.css'],
})
export class ListedesrdvComponent implements OnInit {
  allRDV: any[] = [];
  filteredRDV: any[] = [];
  types: string[] = ['Panneau', 'Pompe a chaleur', 'Rénovation globale', 'LTE', 'Isolation 1€'];

  itemsPerPage = 10;
  currentPage = 1;
  filterStatus = 'tous';
  selectedType: string = '';
  searchTerm: string = '';
  totalPages = 1;

  constructor(private RDV: RDVService, private Agent: AgentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.RDV.getall().subscribe(
      (res: any) => {
        this.allRDV = res;
        this.fetchAgentNames();
        this.filterRDV();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  fetchAgentNames(): void {
    this.allRDV.forEach((rdv: any) => {
      this.Agent.getbyid(rdv.idAgent).subscribe(
        (agent: any) => {
          rdv.agentName = agent.nom;
        },
        (err: any) => {
          console.log(err);
        }
      );
    });
  }

  filterRDVByStatus(status: string): void {
    if (status === 'tous') {
      this.filterStatus = 'tous';
    } else {
      this.filterStatus = status;
    }
    this.filterRDV();
  }

  filterRDVByType(): void {
    this.filterRDV();
  }

  search(): void {
    this.filterRDV();
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filterRDV();
  }

  filterRDV(): void {
    this.filteredRDV = this.allRDV.filter(
      (rdv) =>
        (rdv.Status === this.filterStatus || this.filterStatus === 'tous') &&
        (this.selectedType === '' || rdv.Type === this.selectedType) &&
        (this.searchTerm === '' ||
          rdv.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          rdv.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredRDV.length / this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  supprimer(idRDV: any) {
    Swal.fire({
      title: 'Voulez-vous supprimer le RDV?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        this.RDV.delete(idRDV).subscribe(
          () => {
            Swal.fire('Suppression réussie!', 'Le RDV a été supprimé avec succès.', 'success').then(() => {
              window.location.reload();
            });
          },
          (error) => {
            Swal.fire('Erreur de suppression!', 'Une erreur est survenue lors de la suppression.', 'error');
            console.error('Error while deleting RDV:', error);
          }
        );
      }
    });
  }
}
