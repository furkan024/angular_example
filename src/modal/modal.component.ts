import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private router: Router) { }

  formGroup: any = new FormGroup({
    inputDeneme: new FormControl('')
  })



  deneme: any;


  ngOnInit() {
  }

  clickDialog() {
    debugger;
    // console.log(this.formGroup.value.inputDeneme)

    for (let index = 0; index < 5; index++) {
      if (index == 3){
        console.log(this.formGroup.value.inputDeneme, index);
        break;
      }
      else{
        console.log('Index is not "3"', index);
      }
    }
  }


}
