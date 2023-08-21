import { Component } from '@angular/core';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRDVComponent {
  samedate: any;
  constructor(private rdvService: RDVService) { }
  // Properties to hold form data
  nom: string = '';
  prenom: string = '';
  date: string = ''; // This will hold the date in the format: 'YYYY-MM-DDTHH:mm:ss.sssZ'
  typeRDV: string = '';
  adresse: string = '';
  ville: string = '';
  cp: string = '';
  NumFix: string = '';
  NumPor: string = '';
  nbPers: number = 0;
  Revenuclient: string = '';
  Numfisc: string = '';
  ReferenceAvis: string = '';
  superficie : string ='' ;
  Precarite: string = '';
  CommentaireAg: string = '';
  TypeChauf : string  = '';
  PropouLoc : string = '';
  Email : string = '' ;
  onSubmit() {
    
    const formData = {
      name: this.nom,
      prenom: this.prenom,
      date: this.date,
      Type: this.typeRDV,
      superficie : this.superficie,
      Adresse: this.adresse,
      Ville: this.ville,
      Email : this.Email , 
      CP: this.cp,
      NumFix: this.NumFix,
      NumPor: this.NumPor,
      Propriatire : this.PropouLoc,
      TypeChauf : this.TypeChauf,
      NombrePer: this.nbPers,
      RevenuCli: this.Revenuclient,
      NumeroFisc: this.Numfisc,
      ReferenceAvis: this.ReferenceAvis,
      Precarite: this.Precarite,
      CommentaireAg: this.CommentaireAg,
      idAgent : localStorage.getItem('id')
    };

    if (
      this.nom == '' ||
      this.prenom == '' ||
      this.date == '' ||
      this.typeRDV == '' ||
      this.adresse == '' ||
      this.ville == '' ||
      this.cp == '' ||
      this.NumFix == '' ||
      this.NumPor == '' ||
      this.superficie == '' ||
      this.CommentaireAg == '' ||
      this.TypeChauf == '' ||
      this.PropouLoc == ''
    ) {
      Swal.fire("il faut remplir tous les champs")
      
    } else {
  
     this.rdvService.samedate(this.date).subscribe(
      (res3: any) => {
        this.samedate = res3;
        if (this.samedate.count==2) {
          Swal.fire("cette date et horaires est deja reservé pour 2 RDV")

        } else {
          this.rdvService.add(formData).subscribe(
            (response) => {
              console.log('Form data added to the database:', response);
              Swal.fire("RDV ajouté avec success")
              // Optionally, you can perform other actions or show a success message here
            },
            (error) => {
              console.error('Error while adding form data:', error);
              // Optionally, you can show an error message here
            }
          );
          
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

    // Output the form data in JSON format to the console
    console.log(JSON.stringify(formData));
    

  }
}
