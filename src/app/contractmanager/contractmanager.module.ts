import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ContractmanagerAppComponent } from './contractmanager-app/contractmanager-app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { ModuleModule } from 'src/app/shared/module/module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: ContractmanagerAppComponent,
children:[
  {path:'id',component:MainContentComponent},
  {path:'',component:MainContentComponent}
]
},
  { path: '**', redirectTo: ''}
]


@NgModule({
  declarations: [
    ContractmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModuleModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserServiceService]
})
export class ContractmanagerModule { }
