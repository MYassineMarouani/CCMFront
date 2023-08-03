import { Component } from '@angular/core';
import { RDVService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRDVComponent {
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
  prop: string = '';
  nbPers: number = 0;
  Revenuclient: string = '';
  Numfisc: string = '';
  ReferenceAvis: string = '';
  Precarite: string = '';
  CommentaireAg: string = '';
  
  onSubmit() {
    
    const formData = {
      name: this.nom,
      prenom: this.prenom,
      date: this.date,
      Type: this.typeRDV,
      Adresse: this.adresse,
      Ville: this.ville,
      CP: this.cp,
      NumFix: this.NumFix,
      NumPor: this.NumPor,
      Prop: this.prop,
      NombrePer: this.nbPers,
      RevenuCli: this.Revenuclient,
      NumeroFisc: this.Numfisc,
      ReferenceAvis: this.ReferenceAvis,
      Precarite: this.Precarite,
      commentaire_ag: this.CommentaireAg
    };

    // Output the form data in JSON format to the console
    console.log(JSON.stringify(formData));
    this.rdvService.add(formData).subscribe(
      (response) => {
        console.log('Form data added to the database:', response);
        // Optionally, you can perform other actions or show a success message here
      },
      (error) => {
        console.error('Error while adding form data:', error);
        // Optionally, you can show an error message here
      }
    );

  }
}
