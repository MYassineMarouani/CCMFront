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
  // Add "Tous" option to the list of types
  types: string[] = ['Panneau', 'Pompe a chaleur', 'Rénovation globale', 'LTE', 'Isolation 1€'];

  itemsPerPage = 10;
  currentPage = 1;
  filterStatus = 'tous';
  // In your component class
  selectedType: string = ''; // Default value is an empty string

  totalPages = 1; // Add totalPages property and initialize it to 1

  constructor(private RDV: RDVService, private Agent: AgentService) { }

  ngOnInit(): void {
    this.RDV.getall().subscribe(
      (res: any) => {
        this.allRDV = res;
        this.fetchAgentNames();
        this.filterRDV(); // Call the common filter method
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
    if (status === 'tous') {
      this.filteredRDV = this.allRDV;
    } else {

   
    this.filterStatus = status;
    this.filterRDV(); // Call the common filter method
  }
  }

  filterRDVByType(): void {
    this.filterRDV(); // Call the common filter method
  }
  filterRDV(): void {
    this.filteredRDV = this.allRDV.filter(
      (rdv) =>
        rdv.Status === this.filterStatus &&
        (this.selectedType === '' || rdv.Type === this.selectedType)
    );
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredRDV.length / this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  supprimer(idRDV: any) {
    // Show the Swal fire with the confirmation message
    Swal.fire({
      title: 'Voulez-vous supprimer le RDV?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        // The "Oui" button was clicked
        this.RDV.delete(idRDV).subscribe(
          () => {
            // Data deleted successfully
            Swal.fire('Suppression réussie!', 'Le RDV a été supprimé avec succès.', 'success').then(() => {
              // Page reloads after the Swal fire is closed
              window.location.reload();
            });
          },
          (error) => {
            // Error occurred during deletion
            Swal.fire('Erreur de suppression!', 'Une erreur est survenue lors de la suppression.', 'error');
            console.error('Error while deleting RDV:', error);
          }
        );
      }
    });
  }

}
