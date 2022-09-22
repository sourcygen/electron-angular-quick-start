import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplesComponent } from './components/multiples/multiples.component';

const routes: Routes = [
	{
		path: '',
		component: MultiplesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
