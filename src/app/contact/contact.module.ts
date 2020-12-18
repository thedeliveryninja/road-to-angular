import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactsHomeComponent } from './contacts-home/contacts-home.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ContactsHomeComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatSliderModule,
    MatCardModule
  ],
  exports: []
})
export class ContactModule { }
