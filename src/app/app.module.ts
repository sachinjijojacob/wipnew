import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './content/aboutme/aboutme.component';
import { ResumeSectionComponent } from './content/resume-section/resume-section.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { ContactComponent } from './content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AboutmeComponent,
    ResumeSectionComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
