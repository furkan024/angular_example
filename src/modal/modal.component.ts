import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HammerGestureConfig } from '@angular/platform-browser';
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
  studentinfo: students | any;
  // studentForm : FormGroup;
  allstudents: students[] = [];
  // privateStudents : students | any;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private dialogRef: MatDialog,
    private _formBuilder: FormBuilder,
  ) {
    this.studentinfo = new students()
  }

  formGroup: any = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    number: new FormControl(''),
    gender: new FormControl(''),
    birthdate: new FormControl('')
  })

  privateStudents: students[] = [
    {
      name: 'İsfendiyar',
      surname: 'Akpınar',
      number: 1,
      gender: 'Male',
      birthdate: '01.01.1965'
    }

  ];

  studentList: students[] = [
    {
      name: 'Furkan',
      surname: 'Zingal',
      number: 1,
      gender: 'Male',
      birthdate: '05.04.1996'
    },
    {
      name: 'John',
      surname: 'Hopkins',
      number: 2,
      gender: 'Male',
      birthdate: '01.01.1985'
    },
    {
      name: 'Marina',
      surname: 'Kisel',
      number: 3,
      gender: 'Female',
      birthdate: '01.01.1995'
    },
    {
      name: 'Jack',
      surname: 'Daniels',
      number: 4,
      gender: 'Male',
      birthdate: '01.01.1956'
    },
    {
      name: 'Maria',
      surname: 'Sandos',
      number: 5,
      gender: 'Female',
      birthdate: '01.01.1980'
    },
    {
      name: 'Eva',
      surname: 'Hertzigova',
      number: 6,
      gender: 'Female',
      birthdate: '01.01.1975'
    },
    {
      name: 'Pablo',
      surname: 'Escobar',
      number: 7,
      gender: 'Male',
      birthdate: '01.01.1962'
    },
    {
      name: 'Eleni',
      surname: 'Koftiyan',
      number: 8,
      gender: 'Female',
      birthdate: '01.01.2007'
    },
    {
      name: 'Gregory',
      surname: 'Chevchenko',
      number: 9,
      gender: 'Male',
      birthdate: '01.01.1987'
    },
    {
      name: 'Edda',
      surname: 'Pelesenkova',
      number: 10,
      gender: 'Female',
      birthdate: '01.01.1985'
    }
  ]



  deneme: any;


  ngOnInit() {
  }
  closedDialog() {
    this.dialogRef.closeAll()
  }

  executeDialog() {
    




    for(let i= 0;i<10;i++)
    {
      if(i == 4)
      {
        continue;
      }
      if(i == 8)
      {
        console.log(i + " The end.");
        break;
      }
      console.log(i);
    }
    debugger;
      let index = 0;
      while(this.studentList[index].name)
      {
        let name = this.studentList[index].name;
          if(name =="Eva")
          {
            let editstudents :students ={
              name: this.studentList[index].name,
              surname:this.studentList[index].surname,
              birthdate:this.studentList[index].birthdate,
              gender:this.studentList[index].gender,
              number:this.studentList[index].number,

            }
            this.studentList.push(editstudents);
            this.studentList.shift();
            continue;
          }
           if(name =="Eleni")
          {
            break;
          }
         console.log(this.studentList.shift()?.name +" adlı öğrenci silindi..!!");
        
     }
     
       console.log("Kalan öğrenci sayısı :" + this.studentList.length);
    
  
    
    // test istnildigi gibi calismayan
    // this.studentList.forEach((jaf:students)=>
    // {
    //     console.log(jaf.name);
    //     this.studentList.shift();
    // });
    // debugger;

    // var testShiftIlkEleman = this.studentList.shift();
    // console.log("Shifted value is : " + testShiftIlkEleman );
    // var arr = [10, 7, 9, 11].shift();
    // console.log("Shifted value is : " + arr );

    // var arr = this.studentList.reverse();
    // console.log("Reversed array is : " + arr );
    // var arr = [0, 1, 2, 3].reverse();
    // console.log("Reversed array is : " + arr );
  }
  // executeDialog() {
  //   debugger;
  //   // tesekkurler Furkan
  //   let sumList = this.studentList.reduce((acc, item) => acc + item.number, 0);
  //   console.log(sumList);

  //   // Sagol Ahmet
  //   // const allNumbers = this.studentList.map(item => {
  //   //   return item.number;
  //   // });
  //   // const totalNotes = allNumbers.reduce((a: number, b: number) => {
  //   //   return a + b;
  //   // });
  //   // console.log(totalNotes);


  //   // var total = [3, -1, 2, -5].reduce(function(a, b)
  //   // {
  //   //   debugger;
  //   //   console.log(a);
  //   //   console.log(b);
  //   //   return a - b;
  //   // });

  //   // console.log("total is : " + total );

  // }


  // executeDialog() {
  //   debugger;

  //   //--> ayni tipte nesne oluyor
  //   // const testSutudent:any={
  //   //   name: 'Fernandina',
  //   //   surname: 'Alanzo',
  //   //   number: 10,
  //   //   gender: 'Female',
  //   //   birthdate: '20.02.1977'
  //   // };

  //   //--> ayni tipte nesne Olmuyor
  //   // let testSutudent = new students();
  //   // testSutudent.birthdate = '01.01.2007';
  //   // testSutudent.gender = 'Female';
  //   // testSutudent.number = 8;
  //   // testSutudent.surname = 'Koftiyan';
  //   // testSutudent.name = 'Eleni';


  //   //--> tamda istedigimizi veriyor, tesekkurler TEVFIK
  //   let testSutudent :students ={
  //     name: 'Fernandina',
  //     surname : 'Alanzo',
  //     gender : 'Female',
  //     birthdate : '20.02.1977',
  //     number:11
  //   }
  //   this.studentList.push(testSutudent);


  //   // var numbers = new Array(1, 4, 9);
  //   // numbers.push(18);
  //   // var length = numbers.push(10);
  //   // console.log("new numbers is : " + numbers );
  //   // length = numbers.push(20);
  //   // console.log("new numbers is : " + numbers );

  //   // var numbers = [1, 4, 9];

  //   // var element = numbers.pop();
  //   // console.log("element is : " + element);

  //   // var element = numbers.pop();
  //   // console.log("element is : " + element);

  //   // var testLastElement=this.studentList.pop();
  //   // console.log(testLastElement);


  //   // var numbers = [16, 125, 375];
  //   // var roots = numbers.map(Math.sqrt);
  //   // console.log("roots is : " + roots);

  //   // var testNamePlusSurname=this.studentList.map((jaf:students)=>
  //   // {
  //   //   debugger;
  //   //   jaf.name=jaf.name+' '+jaf.surname+' '+(jaf.name+' '+jaf.surname).length ;
  //   //   console.log(jaf.name);
  //   // });


  // }

  // executeDialog() {

  //   debugger;

  //   //var arr = new Array("First", "Second", "Third");
  //   // var arrNumber = new Array(1, 2, 3, 4);
  //   // var str = arrNumber.join();
  //   // console.log("str : " + str);


  //   const namesArray = this.studentList.map((s:students) => {
  //     return s.number;
  //   });

  //   console.log(namesArray.join(", "));

  //   // let valueList="";

  //   // this.studentList.forEach(function (value:students) {
  //   //   debugger;
  //   //     var str=value.name;
  //   //     valueList=str.join(' + ');
  //   //     console.log(valueList);
  //   // });
  //   // console.log(valueList);


  //   // var str = arr.join();
  //   // console.log("str : " + str);

  //   // var str = arr.join(", ");
  //   // console.log("str : " + str);

  //   // var str = arr.join(" + ");
  //   // console.log("str : " + str);

  //   // var testJoinFor = this.studentList.join();
  //   // console.log("Sonuc : " + testJoinFor);


  // }
  // executeDialog() {
  //   var index = [12, 5, 8, 130, 44].indexOf(18);
  //   console.log("index is 01 : " + index);



  //   index = this.studentList.indexOf(18);
  //   console.log("index is 02 : " + index);

  //   debugger;

  //   let testSutudent = new students();
  //   testSutudent.birthdate = '01.01.2007';
  //   testSutudent.gender = 'Female';
  //   testSutudent.number = 8;
  //   testSutudent.surname = 'Koftiyan';
  //   testSutudent.name = 'Eleni';
  //   index = this.studentList.indexOf((jaf:students)=> jaf.name===testSutudent.name);
  //   index = this.studentList.findIndex((x : students) => x === testSutudent);
  //   console.log("index is 03 : " + index);


  // }

  // executeDialog() {
  //   debugger;

  //   function isBigEnough(element: number) {
  //     return (element >= 4);
  //   }
  //   var passed = [12, 5, 8, 130, 44].every(isBigEnough);
  //   console.log("Test Value 01 : " + passed);

  //   //--//-->

  //   passed = [12, 5, 8, 130, 44].every((value:number)=>
  //   {
  //     return (value >= 10);
  //   });
  //   console.log("Test Value 02 : " + passed);

  //   //--//-->

  //   passed = this.studentList.every((value:students)=>
  //   {
  //     return (new Date(value.birthdate).getFullYear()>2000);
  //     // return (new Date(value.birthdate).getFullYear()>1955);
  //   });
  //   console.log("Test Value 03 : " + passed);

  // }

  // executeDialog()
  // {
  //   debugger;
  //   // console.log(new Date().getTime());
  //   // console.log(new Date().getFullYear());
  //   // console.log(new Date().getMonth());
  //   // console.log(new Date().getTime());
  //   // let num = [7, 8, 9];
  //   // num.forEach(function (value) {
  //   //   console.log(value);
  //   // });

  //   // for (let i = 0; i < this.studentList.length; i++){
  //   //   console.log(this.studentList[i].name+" "+this.studentList[i].surname);
  //   // }

  //   this.studentList.forEach(function (value:students) {
  //     //if(value.gender==="Female" &&   new Date(value.birthdate).getFullYear()>2000)
  //     // const [month, day, year] = value.birthdate.split('.');
  //     // if(year > 2000){
  //     //   console.log(value.name + " " + value.surname);
  //     // }
  //     if(value.gender==="Female" &&   new Date(value.birthdate).getFullYear()>2000)
  //     {
  //       console.log(value.name+" "+value.surname);
  //     }
  //   });


  //   // for (let i = 0; i < this.allstudents.length; i++){
  //   //   if (this.allstudents[i].gender == 'male'){
  //   //     this.privateStudents.push(this.allstudents[i]);
  //   //   }
  //   // }
  //   //this.privateStudents = this.studentList.filter((s: { gender: string; }) => s.gender === "Male");
  //   // this.privateStudents = this.studentList.filter((s: { name: string; }) => s.name === "Furkan");
  //   //var testConcat = this.privateStudents.concat(this.studentList);
  //   //console.log(this.privateStudents);
  // }


  clickDialog() {
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
