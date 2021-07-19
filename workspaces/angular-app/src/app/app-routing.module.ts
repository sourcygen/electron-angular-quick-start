import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutiplesComponent } from './components/mutiples/mutiples.component';

const routes: Routes = [
  {
    path: '',
    component: MutiplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
