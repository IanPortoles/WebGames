import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas:any[]=[
    {titulo:'Juan Perez',numeroTarjeta:'223242424242', fechaExpiracaion:'11/12',cvv:'123'},
    {titulo:'Miguel Perez',numeroTarjeta:'99999999999', fechaExpiracaion:'01/02',cvv:'567'}
  ];
  listUsuarios:any[]=[
    {titulo:'ramon',contra:'123'},
    {titulo:'carlos',contra:'456'}
  ]
  form: FormGroup;

  
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      titulo:[''],
      contra:['']
    })
    }
  
  ngOnInit(): void {
    
  }
  agregarUsuario(){
    const usuario:any={
      titulo: this.form.get('titulo')?.value,
      contra: this.form.get('contra')?.value

    }
    this.listUsuarios.push(usuario)
    this.form.reset()
    console.log(usuario)
  }
}
