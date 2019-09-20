import {createRequest, createResponse} from 'node-mocks-http';
import eventsGetAll from '../../../../src/middleware/api/eventsGetAll';
import * as eventsService from '../../../../src/services/events';

describe('eventsGetAll()', () => {
    let fakeRequest;
    let fakeResponse;
    let stubEventServiceGetAll;
    let spyResponseJson;

    const fakeData = [];

    beforeEach(() => {
        fakeRequest = createRequest();
        fakeResponse = createResponse();

        stubEventServiceGetAll = sinon.stub(eventsService, 'getAll');
        stubEventServiceGetAll.resolves(fakeData);
        spyResponseJson = sinon.spy(fakeResponse, 'json');
    });

    afterEach(() => {
        stubEventServiceGetAll.restore();
    });

    it('should call data service getAll()', (done) => {
        eventsGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(stubEventServiceGetAll.callCount).to.equal(1);
            })
            .should.notify(done);
    });

    it('should render expected json when data request succeeds', (done) => {
        const expectedData = {
            data: [],
            success: true
        };

        eventsGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(spyResponseJson)
                    .to.have.been.calledWithExactly(expectedData);
            })
           .should.notify(done);
    });

    it('should render expected failure json when data request fails', (done) => {
        const givenFailureData = 'error connecting to database';
        stubEventServiceGetAll.rejects(givenFailureData);

        const expectedData = {
            success: false,
            message: givenFailureData
        };

        eventsGetAll(fakeRequest, fakeResponse)
            .should.be.fulfilled
            .then(() => {
                expect(spyResponseJson)
                    .to.have.been.calledWithExactly(expectedData);
            })
            .should.notify(done);
    });
});
