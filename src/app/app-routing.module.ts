import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CoepianComponent } from './coepian/coepian.component';
import { GuestComponent } from './guest/guest.component';
import { LocateComponent } from './locate/locate.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GatewayComponent } from './gateway/gateway.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { MyplacesComponent } from './myplaces/myplaces.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'coepian', component: CoepianComponent},
  { path: 'guest', component: GuestComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'locate', component: LocateComponent},
  { path: 'gateway/:id', component: GatewayComponent},
  { path: 'book', component: BookComponent},
  { path: 'login', component: LoginComponent},
  { path: 'myplaces', component: MyplacesComponent},
  { path: 'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
