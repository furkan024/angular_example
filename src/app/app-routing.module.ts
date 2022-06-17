import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTestComponent } from 'src/inputTest/inputTest.component';
import { ModalComponent } from 'src/modal/modal.component';

const routes: Routes = [
  {path: 'input-test', component: InputTestComponent},
  {path: 'modal', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
