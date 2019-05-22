import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ATHComponent} from './ath/ath.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {TuningComponent} from './tuning/tuning.component';
import {BodyComponent} from './body/body.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ConnexionComponent} from './client/connexion/connexion.component';
import {InscriptionComponent} from './client/inscription/inscription.component';
import {RdvComponent} from './rdv/rdv.component';
import {ServiceRapideComponent} from './service-rapide/service-rapide.component';
import {NotFound404Component} from './not-found404/not-found404.component';
import {ParametresCompteComponent} from "./parametres-compte/parametres-compte.component";

const routes: Routes = [
  {path: 'Accueil', component: BodyComponent},
  {path: 'Ath', component: ATHComponent},
  {path: 'Maintenance', component: MaintenanceComponent},
  {path: 'Tuning', component: TuningComponent},
  {path: 'Contacts', component: ContactsComponent},
  {path: 'Client/Conexion', component: ConnexionComponent},
  {path: 'Client/Inscription', component: InscriptionComponent},
  {path: 'ParametreCompte', component: ParametresCompteComponent},
  {path: 'Rdv', component: RdvComponent},
  {path: 'ServiceRapide', component: ServiceRapideComponent},
  {path: '', component: BodyComponent},
  {path: 'not-found-404', component: NotFound404Component},
  {path: '**', redirectTo: '/not-found-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
