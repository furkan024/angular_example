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
    console.log(this.formGroup.value.inputDeneme)
  }


}
