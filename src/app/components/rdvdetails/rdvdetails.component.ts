import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rdvdetails',
  templateUrl: './rdvdetails.component.html',
  styleUrls: ['./rdvdetails.component.css']
})
export class RDVdetailsComponent implements OnInit {
  RDVid: any
  RDVinfo: any;
  selectedStatus: any
  commentaireAdmin: any
  dateemail: any
  constructor(private route: ActivatedRoute, private RDV: RDVService) { }

  ngOnInit(): void {
    this.RDVid = this.route.snapshot.paramMap.get('id');
    this.RDV.getbyid(this.RDVid).subscribe(
      (res: any) => {
        this.RDVinfo = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  Changer() {
    Swal.fire({
      title: 'Changer le status',
      html:
        `
        <div>
          <label for="status">Select Status:</label>
          <select id="status">
            <option value="en cours">en cours</option>
            <option value="installer">installer</option>
            <option value="confirmer">confirmer</option>
            <option value="annuller">annuller</option>
            <option value="audite">audite</option>
          </select>
        </div>
        <div>
          <label for="commentaireAdmin">Commentaire Admin:</label>
          <textarea id="commentaireAdmin"></textarea>
        </div>
        <br>
        <div>
          <label for="datePicker">Date debut :</label>
          <input type="datetime-local" id="datePicker">
        </div>
        <div>
        <label for="datePicker1">Date fin :</label>
        <input type="datetime-local" id="datePicker1">
      </div>
        `,
      confirmButtonText: 'Envoyer',
      showCancelButton: true,
      cancelButtonText: 'Annuler',
      preConfirm: () => {
        const status = (document.getElementById('status') as HTMLSelectElement).value;
        const commentaireAdmin = (document.getElementById('commentaireAdmin') as HTMLTextAreaElement).value;
        const dateEmail = (document.getElementById('datePicker') as HTMLInputElement).value;
        const dateEmailFin = (document.getElementById('datePicker1') as HTMLInputElement).value;
        // Check if the status is 'en cours' and dateEmail is empty
        if (status === 'confirmer' && (dateEmail.trim() === '' || dateEmailFin.trim() === '')) {
          Swal.fire("Il faut mettre les dates debut/fin ");
          return false; // Prevent form submission
        }
  
        const formData = {
          CommentaireAd: commentaireAdmin,
          Status: status,
          dateEmail: dateEmail ,
          dateEmailFin : dateEmailFin
        };
        return formData;
      }
    }).then((formData) => {
      if (!formData.dismiss) {
        // The "Envoyer" button was clicked and the form data is valid
        // formData contains the selected options and CommentaireAd as JSON data
        console.log('FormData:', formData);
  
        // Send the data using RDV.update()
        this.RDV.update(this.RDVid, formData.value).subscribe(
          (response: any) => {
            console.log('Data updated successfully:', response);
            Swal.fire("Modifié avec succès").then(() => {
              // Page reloads after the Swal fire is closed
              window.location.reload();
            });
            // You can handle the success message or any other actions here.
          },
          (error: any) => {
            console.error('Error updating data:', error);
            // You can handle the error message or any other error handling here.
          }
        );
      }
    });
  }
  

}
