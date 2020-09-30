import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { Preguntasseguridad3Component } from './preguntasseguridad3/preguntasseguridad3.component';

import {DemoNgZorroAntdModule} from './ng-zorro-antd.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

//firebase
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

//Ruta dinamica

registerLocaleData(es);



const rutas: Routes =[
/*   { //Si pone La ruta principa lhttp://localhost:4200/  te redirigira a la ruta de preguntas-seguridad
    path:'',
    pathMatch: 'full',
    redirectTo: 'preguntas-seguridad'
  }, */
  { //RutaSimple
    path: 'preguntas-seguridad',
    component: Preguntasseguridad3Component
  },
  { //Ruta dinamica
    path: 'preguntas-seguridad/:claveCliente',
    component: Preguntasseguridad3Component,
  },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    Preguntasseguridad3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(rutas),
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

