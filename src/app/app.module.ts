import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//mapas
import { AgmCoreModule } from '@agm/core';

import { GuardadosPage,HomePage,MapaPage,TabsPage } from "../pages/index.paginas";
import { MyApp } from './app.component';
//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contacts} from '@ionic-native/contacts';


//servicios
import { HistorialServece } from "../providers/historial/historial";

@NgModule({
  declarations: [
    MyApp,
    GuardadosPage,
    HomePage,
    MapaPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4_wB8oUfvLiBCSqZLnlRvWmyNaVtlFwU'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuardadosPage,
    HomePage,
    MapaPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    HistorialServece,
    InAppBrowser,
    Contacts,

    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
