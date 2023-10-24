import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SelectBoxComponent } from './Components/select-box/select-box.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectBoxComponent,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
