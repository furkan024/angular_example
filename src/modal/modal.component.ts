import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  formGroup: any = new FormGroup({
    inputDeneme: new FormControl('')
  })



  deneme: any;


  ngOnInit() {
  }

  clickDialog() {
    debugger;
    // console.log(this.formGroup.value.inputDeneme)
    //İsfendiyarCommitDeneme

    for (let index = 0; index < 5; index++) {
      if (index == 3){
        this.toastr.success(this.formGroup.value.inputDeneme);
        break;
      }
      else{
        this.toastr.error('Index is not "3"');
      }
    }
  }


}
