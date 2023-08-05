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
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginagentComponent } from './components/loginagent/loginagent.component';
import { MesRDVsComponent } from './components/mes-rdvs/mes-rdvs.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ChangermdpComponent } from './components/changermdp/changermdp.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminsidebarComponent } from './components/adminsidebar/adminsidebar.component';
import { ListedesagentsComponent } from './components/listedesagents/listedesagents.component';
import { CreeragentComponent } from './components/creeragent/creeragent.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    AgentdashboardComponent,
    AgentsidebarComponent,
    AgentheaderComponent,
    AjouterRDVComponent,
    LoginadminComponent,
    LoginagentComponent,
    MesRDVsComponent,
    DateFormatPipe,
    ChangermdpComponent,
    AdmindashboardComponent,
    AdminsidebarComponent,
    ListedesagentsComponent,
    CreeragentComponent
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
