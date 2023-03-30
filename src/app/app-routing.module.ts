import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CoepianComponent } from './coepian/coepian.component';
import { GuestComponent } from './guest/guest.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'coepian', component: CoepianComponent},
  { path: 'guest', component: GuestComponent},
  { path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
