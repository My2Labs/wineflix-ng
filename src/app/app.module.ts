import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './components/button-secondary/button-secondary.component';
import { ControlsComponent } from './components/controls/controls.component';
import { PrimaryNavigationComponent } from './components/primary-navigation/primary-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { MainComponent } from './components/main/main.component';
import { ProgressComponent } from './components/progress/progress.component';
import { WineComponent } from './components/wine/wine.component';
import { WineNewComponent } from './components/wine-new/wine-new.component';
import { WineDrinkingComponent } from './components/wine-drinking/wine-drinking.component';
import { DrinkAgainComponent } from './components/drink-again/drink-again.component';
import { KeepDrinkingComponent } from './components/keep-drinking/keep-drinking.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    ControlsComponent,
    PrimaryNavigationComponent,
    HeaderComponent,
    HeroContentComponent,
    MainComponent,
    ProgressComponent,
    WineComponent,
    WineNewComponent,
    WineDrinkingComponent,
    DrinkAgainComponent,
    KeepDrinkingComponent,
    HeroImageComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
