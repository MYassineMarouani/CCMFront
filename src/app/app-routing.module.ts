import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { AgentdashboardComponent } from './components/agentdashboard/agentdashboard.component';
import { AjouterRDVComponent } from './components/ajouter-rdv/ajouter-rdv.component';

const routes: Routes = [
  {path:'calendrier',component:CalendrierComponent},
  {path:'agentdashboard',component:AgentdashboardComponent,children:[
    {path:'ajouterRDV',component:AjouterRDVComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
