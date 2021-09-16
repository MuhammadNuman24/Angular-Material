import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoRoutingModule } from './demo/demo/demo-routing.module';
import { ContractmanagerModule } from './contractmanager/contractmanager.module';
const routes: Routes = [
  { path: 'demo', loadChildren: '../demo/demo.module#DemoModule' },
  { path: 'contractmanager',loadChildren: '../contractmanager/contractmanager.module' },
  { path: '**', redirectTo: 'contractmanager' }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,ContractmanagerModule,
    DemoRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


