import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mes-rdvs',
  templateUrl: './mes-rdvs.component.html',
  styleUrls: ['./mes-rdvs.component.css']
})
export class MesRDVsComponent implements OnInit {
   rdv : any | undefined
   res : any
  encours: any;
  res1 : any
  installer: any;
  res2 : any
  confirmer: any;
  annuller: any;
  det: any;
  constructor(private RDV:RDVService) { }

  ngOnInit(): void {
    this.RDV.getbyidagent(localStorage.getItem('id')).subscribe(
      res=>{
        this.rdv = res;

      },
      err=>{
        console.log(err);
        
      }
    );
    this.RDV.getbynumberbystatus(localStorage.getItem('id'),"en cours").subscribe(
      res1=>{
        this.encours = res1;
        

      },
      err=>{
        console.log(err);
        
      }
    );
    this.RDV.getbynumberbystatus(localStorage.getItem('id'),"installer").subscribe(
      res2=>{
        this.installer = res2;
        console.log(this.installer)
  

      },
      err=>{
        console.log(err);
        
      }
    );
    this.RDV.getbynumberbystatus(localStorage.getItem('id'),"confirmer").subscribe(
      res3=>{
        this.confirmer = res3;

      },
      err=>{
        console.log(err);
        
      }
    );
    this.RDV.getbynumberbystatus(localStorage.getItem('id'),"annuller").subscribe(
      res4=>{
        this.annuller = res4;

      },
      err=>{
        console.log(err);
        
      }
    );
  
  }
  details(id:any) {

    this.RDV.getbyid(id).subscribe(
      res5=>{
        this.det = res5;
        Swal.fire(
          'Avis confirmateur :',
          this.det.CommentaireAd,
          'question'
        )

      },
      err=>{
        console.log(err);
        
      }
    );

  }

}
