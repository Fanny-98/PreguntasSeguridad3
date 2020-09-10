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

  

  isVisible = false;

  datosCliente: any[];
  constructor(db:AngularFireDatabase) {
    db.list('/datosCliente').valueChanges()
    .subscribe(datosCliente => {
      this.datosCliente = datosCliente;
       console.log(this.datosCliente);
      
});
}


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

