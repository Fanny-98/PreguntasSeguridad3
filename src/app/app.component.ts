import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
/* import {AngularFire, FirebaseListObservable} from 'angularfire2'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PreguntasSeguridad3';

  datosCliente: any[];
  constructor(db: AngularFireDatabase){
    db.list('/datosCliente').valueChanges()
    .subscribe(datosCliente => {
      this.datosCliente = datosCliente;
       console.log(this.datosCliente);
    });
  }
}
