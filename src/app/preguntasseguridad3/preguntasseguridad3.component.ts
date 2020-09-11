import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-preguntasseguridad3',
  templateUrl: './preguntasseguridad3.component.html',
  styleUrls: ['./preguntasseguridad3.component.css']
})


export class Preguntasseguridad3Component {
  title = 'PreguntasSeguridad3';

/*   datosCliente: any[];
  constructor(db:AngularFireDatabase) {
    db.list('/datosCliente').valueChanges()
    .subscribe(datosCliente => {
      this.datosCliente = datosCliente;
       console.log(this.datosCliente);  
});
}
 */
clientes:any;
poliza: any;
ramos: any;
perfiles: any;
  constructor (db:AngularFireDatabase){
    db.object('/clientes/TGFS8822339S0/datosCliente')
      .valueChanges()
      .subscribe(clientes=> {
        this.clientes= clientes;
        console.log(this.clientes);
      });

    db.object('/clientes/RISW8822119S0/datosPoliza')
      .valueChanges()
      .subscribe(poliza=> {
        this.poliza= poliza;
        console.log(this.poliza);
      });

      db.object('/ramos')
      .valueChanges()
      .subscribe(ramos=> {
        this.ramos= ramos;
        console.log(this.ramos);
      });

      db.object('/perfiles')
      .valueChanges()
      .subscribe(perfiles=> {
        this.perfiles= perfiles;
        console.log(this.perfiles);
      });
    }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  size: NzButtonSize = 'large';
}


export class NzDemoBreadcrumbSeparatorComponent {}


