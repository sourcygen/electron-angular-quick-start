import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MutiplesComponent } from './components/mutiples/mutiples.component';

@NgModule({
  declarations: [AppComponent, MutiplesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: MutiplesComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
