import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/navbarfolder/navbar/navbar.component';
import { SubnavbarComponent } from './components/home/subnavbarfolder/subnavbar/subnavbar.component';
import { SidebarComponent } from './components/home/sidebarfolder/sidebar/sidebar.component';
import { CentreComponent } from './components/home/centrefolder/centre/centre.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavbarComponent,
    SidebarComponent,
    CentreComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
