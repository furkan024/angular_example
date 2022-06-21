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

    // console.log(this.formGroup.value.inputDeneme)
    //İsfendiyarCommitDeneme
    //BarışDeneme
    //ömer deneme
    // t,e,s,t
    let temparray = this.formGroup.value.inputDeneme.split("");


    // for (let templine of temparray)
    // {
    //   console.log(templine);

    // }

    // let temparraylenght=temparray.length;
    let tempfinal="";
    for (let index = 0; index < temparray.length; index++) {
        //console.log(temparray[index]);

        temparray[index]= temparray[index]+"-";
        // console.log(temparray[index]);
        // tempfinal = tempfinal + temparray[index];
        tempfinal+=temparray[index];
        console.log(tempfinal);
      // if (index == 3){
      //   this.toastr.success(this.formGroup.value.inputDeneme);
      //   break;
      // }
      // else{
      //   this.toastr.error('Index is not "3"');
      // }
    }
    console.log(tempfinal);
    debugger;
    //tempfinal = tempfinal.replace("-","");
    tempfinal = tempfinal.slice(2, -2);
    console.log(tempfinal);
  }


}
