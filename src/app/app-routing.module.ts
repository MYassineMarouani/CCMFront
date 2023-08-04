import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { AgentdashboardComponent } from './components/agentdashboard/agentdashboard.component';
import { AjouterRDVComponent } from './components/ajouter-rdv/ajouter-rdv.component';
import { LoginadminComponent } from './components/loginadmin/loginadmin.component';
import { LoginagentComponent } from './components/loginagent/loginagent.component';
import { MesRDVsComponent } from './components/mes-rdvs/mes-rdvs.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'loginadmin',component:LoginadminComponent ,  },
  {path:'',component:LoginagentComponent},
  {path:'calendrier',component:CalendrierComponent , canActivate: [AuthGuard]},
  {path:'agentdashboard',component:AgentdashboardComponent,canActivate: [AuthGuard],children:[
    {path:'mesRDVs',component:MesRDVsComponent},
    {path:'ajouterRDV',component:AjouterRDVComponent},
    {path:'',component:MesRDVsComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
