import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services';

@Component({
	selector: 'app-calculadora',
	templateUrl: './calculadora.component.html',
	styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

	display: string = "";
	number1: string = '';
	number2: string = '';
	operador: string = '';

	constructor(private calculator: CalculatorService) { }

	ngOnInit(): void {
	}

	addValue(value: string): void {
		this.display += value;
		if (this.operador == '') {
			this.number1 += value;
		} else {
			this.number2 += value;
		}
	}

	addOperador(operador: string): void {
		if (this.operador == '') {
			this.operador = operador;
			this.display = '';
		}
	}

	executeOperacao(): void {
		let result: number = this.calculator.calculation(parseFloat(this.number1),  parseFloat(this.number2), this.operador);
		this.resetValues();
		this.addValue(result.toString());
	}

	resetValues(): void {
		this.number1 = this.number2 = this.operador  = this.display = '';
	}
}
