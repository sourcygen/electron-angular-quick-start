export class AbstractService<In, Out> {
	receptionChannel(): string {
		throw new Error('Method not implemented yet.');
	}

	sendingChannel(): string {
		throw new Error('Method not implemented yet.');
	}

	process(_input: In): Out {
		throw new Error('Method not implemented yet.');
	}
}
