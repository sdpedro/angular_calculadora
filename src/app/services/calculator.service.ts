import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CalculatorService {

	private readonly SOMA: string = '+'; 
	private readonly SUBTRACAO: string = '-'; 
	private readonly DIVISAO: string = '/'; 
	private readonly MULTIPLICACAO: string = '*';

	constructor() { }

	public calculation(number1: number, number2: number, operador: string): number {
		switch (operador) {
			case this.SOMA:
				return number1 + number2;
				break;

			case this.SUBTRACAO:
				return number1 - number2;
				break;

			case this.DIVISAO:
				return number1 / number2;
				break;

			case this.MULTIPLICACAO:
				return number1 * number2;
				break;
		
			default:
				return 0;
				break;
		}
	}
}
