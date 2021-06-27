import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { LogoComponent } from './logo/logo.component';
import { HeadingsComponent } from './headings/headings.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorFormComponent,
    LogoComponent,
    HeadingsComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
