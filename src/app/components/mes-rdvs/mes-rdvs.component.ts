import { Component, OnInit } from '@angular/core';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mes-rdvs',
  templateUrl: './mes-rdvs.component.html',
  styleUrls: ['./mes-rdvs.component.css']
})
export class MesRDVsComponent implements OnInit {
  rdv: any;
  res: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  encours: any
  installer: any
  confirmer: any
  annuller: any

  constructor(private RDV: RDVService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.RDV.getbyidagent(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.rdv = res;
        this.updateDisplayedItems();
      },
      (err: any) => {
        console.log(err);
      }
    );

    // Fetch data for each status
    this.RDV.getbynumberbystatus(localStorage.getItem('id'), 'en cours').subscribe(
      (res1: any) => {
        this.encours = res1;
      },
      (err: any) => {
        console.log(err);
      }
    );

    this.RDV.getbynumberbystatus(localStorage.getItem('id'), 'installer').subscribe(
      (res2: any) => {
        this.installer = res2;
      },
      (err: any) => {
        console.log(err);
      }
    );

    this.RDV.getbynumberbystatus(localStorage.getItem('id'), 'confirmer').subscribe(
      (res3: any) => {
        this.confirmer = res3;
      },
      (err: any) => {
        console.log(err);
      }
    );

    this.RDV.getbynumberbystatus(localStorage.getItem('id'), 'annuller').subscribe(
      (res4: any) => {
        this.annuller = res4;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  updateDisplayedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.res = this.rdv ? this.rdv.slice(startIndex, endIndex) : [];
  }

  details(id: any): void {
    const item = this.res.find((i: any) => i._id === id);
    if (item) {
      Swal.fire('Avis confirmateur:', item.CommentaireAd, 'question');
    } else {
      console.log('Item not found.');
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
      this.updateDisplayedItems();
    }
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  getTotalPages(): number {
    return Math.ceil((this.rdv?.length || 0) / this.itemsPerPage);
  }
}
