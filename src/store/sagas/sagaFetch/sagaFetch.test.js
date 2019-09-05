import sagaFetch from "./";


describe('sagaFetch', () => {

    it('should return fetchData', () => {
        const action = {user:'1',}
        const gen = sagaFetch(action);

        expect(gen.next().value).toBeDefined()

    });
});



