import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './todos/components/header/header.component';
import { FooterComponent } from './todos/components/footer/footer.component';
import { MainComponent } from './todos/components/main/main.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
