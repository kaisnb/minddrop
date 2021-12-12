import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryDialogComponent } from './shared-components/entry-dialog/entry-dialog.component';
import { FooterNavComponent } from './shared-components/footer-nav/footer-nav.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { MaterialModule } from './shared-components/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavComponent,
    HeaderComponent,
    EntryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
