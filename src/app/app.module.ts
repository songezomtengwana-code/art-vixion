import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { CrewComponent } from './pages/crew/crew.component';
import { CrewCardComponent } from './components/crew-card/crew-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PackageCardComponent,
    NewsCardComponent,
    CrewComponent,
    CrewCardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
