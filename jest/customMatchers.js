expect.extend({
	toEqualFunction(received, expected) {
		if (typeof received !== 'function') {
			return {
				message: () => `Received (${this.utils.printReceived(received)}) must be a function`,
				pass: false
			};
		} else if (typeof expected !== 'function') {
			return {
				message: () => `Expected (${this.utils.printExpected(expected)}) must be a function`,
				pass: false
			};
		}

		const pass = received === expected;
		return {
			message: () =>
				this.utils.matcherHint('.toEqualFunction') +
				`\n\nexpected ${received} to ${pass ? 'not ' : ''}match ${expected} // received === expected`,
			pass
		};
	}
});
