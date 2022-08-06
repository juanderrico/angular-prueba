import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { HeaderComponent } from './components/header/header.component';
import { APIRestShowComponent } from './components/apirest-show/apirest-show.component';
import { ContentBarComponent } from './components/content-bar/content-bar.component';

const routes: Routes = [
  {path:"content-bar",
   component: ContentBarComponent},
   {path:"apirest-show",
    component: APIRestShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
