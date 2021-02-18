import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Pages
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Material
import { MaterialModule } from './app-material.module';

import { WavesComponent } from './waves/waves.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { GithubComponent } from './github/github.component';
import { DiscordComponent } from './discord/discord.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WavesComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    ProjectsComponent,
    GithubComponent,
    DiscordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
