import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeticionesapiService } from '../../services/peticionesapi.service';
import { Router } from "@angular/router";
import { Alumno } from 'src/app/models/alumno';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private peticionesAPI: PeticionesapiService) { }


  nombre: any;
  apellido: any;
  todo: {};

  ngOnInit() {
    
  }
 

  login(form: NgForm) {

    if (form.value.name != null && form.value.pass != null) {

      this.peticionesAPI.loginAlumno(form.value.name,form.value.pass).subscribe((res) =>{

        if (res[0] !== undefined) {

          console.log("va ?");
        

        
        }

      },(err)=>{

      }
      
      )
      

    }
   

  }

}
