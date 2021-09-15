import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  //Properties//
  nombreEmpleado:string = "Julio José";
  apellidoEmpleado:string  = "Martinez Gómez";   
  edadEmpleado: number = 0;
  empresaEmpleado:string = "colimassoft";

  habilitacionCuadro:boolean = false;

  usuarioLogueado:boolean = false;

  textoUsuarioLogueado: string = "Nadie logueado";




  //Methods//
  constructor() { }

  ngOnInit(): void {
  }

  validarEmpresa(empresa:string):void{
    this.empresaEmpleado = empresa;  
  }



  setUsuarioRegistrado(event:any){   
    console.log(event.target.value);
    if(event.target.value === "registrado"){
      this.textoUsuarioLogueado="Usuario Logueado";
    }
    else{
      this.textoUsuarioLogueado="Usuario No Logueado";    
    }    
  }




  

  

  
}

