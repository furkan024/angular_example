import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Eğitim Projesi';

  constructor (private router : Router, private dialogRef: MatDialog){}

  openDailog() {
    this.dialogRef.open(ModalComponent)
  }

}
