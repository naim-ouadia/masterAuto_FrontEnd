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
import {FormsModule} from '@angular/forms';
import { RdvComponent } from './rdv/rdv.component';
import { ServiceRapideComponent } from './service-rapide/service-rapide.component';

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
    ServiceRapideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
