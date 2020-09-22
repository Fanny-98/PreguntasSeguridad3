import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AngularFireDatabase } from 'angularfire2/database';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preguntasseguridad3',
  templateUrl: './preguntasseguridad3.component.html',
  styleUrls: ['./preguntasseguridad3.component.css']
})


export class Preguntasseguridad3Component {
  title = 'PreguntasSeguridad3';

/*   //Ruta dinamica
  id = '';
  ngOnInit(){
 this.id = this.route.snapshot.paramMap.get('id');
} */

//Firebase
clientes:any;
poliza: any;
poliza2: any;
ramos: any;
perfiles: any;
nombreC: any;


  paramQuery: any;
  constructor (db:AngularFireDatabase, private activatedRoute: ActivatedRoute /* private router: Router, private route: ActivatedRoute */){
   this.activatedRoute.params.subscribe(data => {
     this.paramQuery = data.id;
   })
    db.object('/clientes/TGFS8822339S0/datosCliente')
      .valueChanges()
      .subscribe(clientes=> {
        this.clientes= clientes;
        console.log(this.clientes);
      });

    db.object('/clientes/TGFS8822339S0/datosPoliza')
      .valueChanges()
      .subscribe(poliza=> {
        this.poliza= poliza;
        console.log(this.poliza);
      });

      db.object('/clientes/RISW8822119S0/datosPoliza')
      .valueChanges()
      .subscribe(poliza2=> {
        this.poliza2= poliza2;
        console.log(this.poliza2);
      });


      db.object('/clientes/TGFS8822339S0/datosCliente/nombreCompleto')
      .valueChanges()
      .subscribe(nombreC=> {
        this.nombreC= nombreC;
        console.log(this.nombreC);
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
    
//Ng Zorro
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


/* export class NzDemoSelectCoordinateComponent {
  selectedProvince = 'Zhejiang';
  selectedCity = 'Hangzhou';
  provinceData = ['Zhejiang', 'Jiangsu'];
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }
} */