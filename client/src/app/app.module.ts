import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule  } from './core/core.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { WhenLoadingPage } from './core/Interceptors/WhenLoadingPage';
import { ErrorInterceptor } from './core/Interceptors/error.interceptor';
import { HomePageModule } from './home-page/home-page.module';


@NgModule({
  declarations: [
    AppComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    CoreModule ,
    HttpClientModule,
    NgxSpinnerModule,
    HomePageModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: WhenLoadingPage,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
