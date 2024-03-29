import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
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