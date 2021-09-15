import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleModule } from 'src/app/shared/module/module.module';
import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexComponent } from '../flex/flex.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [FlexComponent,ButtonsComponent],
  imports: [
    CommonModule,
    ModuleModule,
    FlexLayoutModule,
    DemoRoutingModule,
    FormsModule
  ],
 
})

export class DemoModule { }
