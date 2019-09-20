import * as eventsService from '../../../../src/services/events';

describe('events service', () => {
    describe('getAll()', () => {
        it('should resolve with expected data', () => {
            const expectedData = [];

            eventsService.getAll()
                .should.be.fulfilled
                .then((data) => {
                    expect(data).to.deep.equal(expectedData);
                });
        });
    });
});
