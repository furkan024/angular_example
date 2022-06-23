import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { students } from 'src/inputTest/models/students';





@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    studentinfo : students | any;
    // studentForm : FormGroup;
    allstudents : students[] = [];
    privateStudents : students[] = [];

  constructor(
    private router: Router,
     private toastr: ToastrService,
     private dialogRef: MatDialog,
     private _formBuilder: FormBuilder,
     ) {this.studentinfo = new students()}

  formGroup: any = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    number: new FormControl(''),
    gender: new FormControl(''),
    birthdate: new FormControl('')
  })




  deneme: any;


  ngOnInit() {
    console.log(this.formGroup.value.name);
  }
  closedDialog() {
    this.dialogRef.closeAll()
  }
  executeDialog()
  {
    debugger;
    
  }
  clickDialog(){
    //denemedeniz
    debugger;
     this.studentinfo.name = this.formGroup.value.name;
     this.studentinfo.surname = this.formGroup.value.surname;
     this.studentinfo.number = this.formGroup.value.number;
     this.studentinfo.gender = this.formGroup.value.gender;
     this.studentinfo.birthdate = this.formGroup.value.birthdate;

     this.allstudents.push(this.studentinfo);
     this.studentinfo = new students();
     console.log(this.studentinfo);

    // let str = '';
    // for (let i = 0; i < Math.max(temparray.length, temparray2.length); i++) {
    //   if (temparray[i] != undefined) {
    //     str += temparray[i];
    //   }
    //   if (temparray2[i] != undefined) {
    //     str += temparray2[i];
    //   }
    // }


    // for (let index = 0; index < temparray.length; index++) {
    //   console.log()

    // }

    // let total = '';
    // let  maxLength: number ;
    // if(temparray.length <= temparray2.length){
    //   maxLength = temparray2.length;
    // }
    // else{
    //   maxLength = temparray.length ;
    // }
    // for(let i = 0; i < maxLength; i++){
    //   if(i == temparray2.length ||i < temparray.length ){
    //     total += temparray[i];
    //   }
    //   if(i == temparray.length || i < temparray2.length ){
    //     total += temparray2[i];
    //   }
    // }
    // console.log(total);





    // let total = '';
    // for(let i = 0; i < temparray.length; i++){
    //   if(i == temparray2.length ||i < temparray.length ){
    //     total += temparray[i];
    //   }
    //   if(i == temparray.length || i < temparray2.length ){
    //     total += temparray2[i];
    //   }
    // }
    // console.log(total);
    // var str = temparray.join();
    // // console.log("str : " + str );
    // // str = temparray.join(", ");
    // // console.log("str : " + str );
    // str = temparray.join(this.formGroup.value.inputDeneme2);
    // console.log("str : " + str );

  }

  // clickDialog() {
  //   debugger;

  //   // console.log(this.formGroup.value.inputDeneme)
  //   //İsfendiyarCommitDeneme
  //   //BarışDeneme
  //   //ömer deneme
  //   // t,e,s,t
  //   let temparray = this.formGroup.value.inputDeneme.split("");


  //   // for (let templine of temparray)
  //   // {
  //   //   console.log(templine);

  //   // }

  //   // let temparraylenght=temparray.length;
  //   let tempfinal="";
  //   for (let index = 0; index < temparray.length; index++) {
  //       //console.log(temparray[index]);

  //       temparray[index]= temparray[index]+"-";
  //       // console.log(temparray[index]);
  //       // tempfinal = tempfinal + temparray[index];
  //       tempfinal+=temparray[index];
  //       console.log(tempfinal);
  //     // if (index == 3){
  //     //   this.toastr.success(this.formGroup.value.inputDeneme);
  //     //   break;
  //     // }
  //     // else{
  //     //   this.toastr.error('Index is not "3"');
  //     // }
  //   }
  //   console.log(tempfinal);
  //   debugger;
  //   //tempfinal = tempfinal.replace("-","");
  //   tempfinal = tempfinal.slice(0, -1);
  //   console.log(tempfinal);
  // }



}
