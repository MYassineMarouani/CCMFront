import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { AgentdashboardComponent } from './components/agentdashboard/agentdashboard.component';
import { AgentsidebarComponent } from './components/agentsidebar/agentsidebar.component';
import { AgentheaderComponent } from './components/agentheader/agentheader.component';
import { AjouterRDVComponent } from './components/ajouter-rdv/ajouter-rdv.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    AgentdashboardComponent,
    AgentsidebarComponent,
    AgentheaderComponent,
    AjouterRDVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
