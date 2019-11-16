// This is the substitute for React that manages all of the states for every hook in one "component"
export const storage = { data: [], hasUnmount: [] };
let calls = -1;

// Each new hook will need to call this to make sure it has it's own index in the data array
export const incrementCalls = () => ++calls;

// This will be called any time a hook "rerenders" to update everything in data
export const resetCalls = () => {
	calls = -1;
};

/** Put afterEach(clearData) at top of any test file that uses multiple tests
 * 	so that you get a fresh version of data with every test.
 *
 * This method is akin to unmouning the React component using this hook
 */
export const clearData = () => {
	storage.data.splice(0, storage.data.length);
	storage.hasUnmount.splice(0, storage.hasUnmount.length);
	calls = -1;
};
