import { WindowApiConst } from 'shared-lib';
import { AbstractService } from './abstract-service';

export class MultiplesService extends AbstractService<number, number[]> {
	receptionChannel(): string {
		return WindowApiConst.MULTIPLES_INPUT;
	}

	sendingChannel(): string {
		return WindowApiConst.MULTIPLES_OUTPUT;
	}

	process(input: number): number[] {
		// From 1 to 10, return input multiples
		const multiples = [];
		for (let n = 1; n <= 10; n++) {
			multiples.push(n * input);
		}
		return multiples;
	}
}
