import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './modules/calculadora';
import { FooterComponent, NavComponent } from "./components";

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CalculadoraModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
