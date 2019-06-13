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
import {ParametresCompteComponent} from './parametres-compte/parametres-compte.component';
import {ConnexionTechnicienComponent} from './technicien/connexion-technicien/connexion-technicien.component';
import {RdvTechnicienComponent} from './technicien/rdv-technicien/rdv-technicien.component';
import {AdminComponent} from './admin/admin.component';
import {RdvClientComponent} from './client/rdv-client/rdv-client.component';
import {VoitureComponent} from './client/voiture/voiture.component';

const routes: Routes = [
  {path: 'Accueil', component: BodyComponent},
  {path: 'Ath', component: ATHComponent},
  {path: 'Maintenance', component: MaintenanceComponent},
  {path: 'Tuning', component: TuningComponent},
  {path: 'Contacts', component: ContactsComponent},
  {path: 'Client/Conexion', component: ConnexionComponent},
  {path: 'Client/Inscription', component: InscriptionComponent},
  {path: 'Technicien/Conexion', component: ConnexionTechnicienComponent},
  {path: 'Technicien/RDV', component: RdvTechnicienComponent},
  {path: 'ParametreCompte', component: ParametresCompteComponent},
  {path: 'ParametreCompte/RdvsClient', component: RdvClientComponent},
  {path: 'ParametreCompte/Voiture', component: VoitureComponent},
  {path: 'AdminDashboard', component: AdminComponent},
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
