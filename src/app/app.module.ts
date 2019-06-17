import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ATHComponent} from './ath/ath.component';
import {TuningComponent} from './tuning/tuning.component';
import {MaintenanceComponent} from './maintenance/maintenance.component';
import {ClientComponent} from './client/client.component';
import {InscriptionComponent} from './client/inscription/inscription.component';
import {ConnexionComponent} from './client/connexion/connexion.component';
import {AdminComponent} from './admin/admin.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RdvComponent} from './rdv/rdv.component';
import {ServiceRapideComponent} from './service-rapide/service-rapide.component';
import {NotFound404Component} from './not-found404/not-found404.component';
import {ParametresCompteComponent} from './parametres-compte/parametres-compte.component';
import {TechnicienComponent} from './technicien/technicien.component';
import {RdvTechnicienComponent} from './technicien/rdv-technicien/rdv-technicien.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VoitureComponent } from './client/voiture/voiture.component';
import { RdvClientComponent } from './client/rdv-client/rdv-client.component';
import { AllRdvComponent } from './admin/all-rdv/all-rdv.component';
import { TechniciensComponent } from './admin/techniciens/techniciens.component';
import { ClientsComponent } from './admin/clients/clients.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ATHComponent,
    TuningComponent,
    MaintenanceComponent,
    ClientComponent,
    InscriptionComponent,
    ConnexionComponent,
    AdminComponent,
    ContactsComponent,
    RdvComponent,
    ServiceRapideComponent,
    NotFound404Component,
    ParametresCompteComponent,
    TechnicienComponent,
    RdvTechnicienComponent,
    VoitureComponent,
    RdvClientComponent,
    AllRdvComponent,
    TechniciensComponent,
    ClientsComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
