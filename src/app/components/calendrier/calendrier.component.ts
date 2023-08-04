import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { RDVService } from 'src/app/services/rdv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    eventClick: (arg) => {
      // Access the rdv object from the extendedProps of the event
      const rdv = arg.event.extendedProps['rdv'];

      // Show a Swal alert with rdv.prenom
      Swal.fire({
        title: 'RDV Details',
        html: `<p><strong>Prénom:</strong> ${rdv.prenom}</p><p><strong>Status:</strong> ${rdv.Status}</p>
        <p><strong>Numero Tel :</strong> ${rdv.NumPor}</p>`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    slotLabelFormat: {
      hour: '2-digit', // Display hours in 2-digit format (e.g., 01, 02, ..., 12, 13, ..., 23)
      minute: '2-digit', // Display minutes in 2-digit format (e.g., 00, 01, ..., 59)
      hour12: false // Use 24-hour format
    },
    events: [] // Initialize the events array
  };

  constructor(private RDV: RDVService) {}

  ngOnInit(): void {
    this.RDV.getall().subscribe(
      (rdvs) => {
        if (Array.isArray(rdvs)) { // Check if rdvs is an array
          this.calendarOptions.events = rdvs.map((rdv) => ({
            title: rdv.name,
            start: rdv.date,
            extendedProps: {
              rdv // Store the whole rdv object in the extendedProps for later access
            }
          }));
          console.log(this.calendarOptions.events); // Log the events in the console
        }
      },
      (error) => {
        console.error('Error fetching RDVs:', error);
      }
    );
  }
}
