import { Component,OnInit } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { error } from 'console';

@Component({
  selector: 'app-formulario-inventario',
  standalone: true,
  imports: [],
  templateUrl: './formulario-inventario.component.html',
  styleUrl: './formulario-inventario.component.css'
})
export class FormularioInventarioComponent implements OnInit{


  formData: any = {}
  constructor(private inventarioService: InventarioService) { }
  ngOnInit():void{}
}


submitForm() {
  this.inventarioService.saveInventario(this.formData).subscribe(()=>{
    console.log('Inventario guardado')};
  },error=>{
    console.log('Error al guardar inventario');
  });
}