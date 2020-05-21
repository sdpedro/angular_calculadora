import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		CalculadoraComponent
	],
	imports: [
		CommonModule,
		FormsModule
	],
	providers: [
	]
})
export class CalculadoraModule { }
