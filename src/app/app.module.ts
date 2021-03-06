import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './color.directive';
import { RepositoryComponent } from './repository/repository.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ColorDirective,
    RepositoryComponent,
    NavbarComponent,
    HomeComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
