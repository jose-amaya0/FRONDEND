import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
//import { SocialesComponent } from './components/sociales/sociales.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
//import { NewSkillsComponent } from './components/hys/new-skills.component';
import { EditSkillsComponent } from './components/hys/edit-skills.component';
//import { NewProyectosComponent } from './components/proyecto/new-proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyecto/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyecto/new-proyectos.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
//import { NewSkillComponent } from './components/hys/new-skill/new-skill.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
   // SocialesComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    EditSkillsComponent,
    NewProyectosComponent,
    EditProyectosComponent,
    NewSkillComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
