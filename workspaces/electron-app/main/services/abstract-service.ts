const NOT_IMPEMENTED_YET = 'Method not implemented yet.';
export class AbstractService<In, Out> {
	receptionChannel(): string {
		throw new Error(NOT_IMPEMENTED_YET);
	}

	sendingChannel(): string {
		throw new Error(NOT_IMPEMENTED_YET);
	}

	process(_input: In): Out {
		throw new Error(NOT_IMPEMENTED_YET);
	}
}
