import {createRequest, createResponse} from 'node-mocks-http';
import promiseTest from '../../../src/middleware/promiseTest';

describe('promiseTest middleware', () => {
    let fakeRequest;
    let fakeResponse;
    let stubResponseJson;

    beforeEach(() => {
        fakeRequest = createRequest();
        fakeResponse = createResponse();

        stubResponseJson = sinon.stub(fakeResponse, 'json');
    });

    afterEach(() => {
        stubResponseJson.restore();
    });

    it('should render expected json when Promise resolves', () => {
        const expectedJson = {
            message: 'resolved Promise',
            error: false
        };

        return promiseTest(fakeRequest, fakeResponse)
            .then(() => {
                expect(stubResponseJson)
                    .to.have.been.calledWithExactly(expectedJson);
            });
    });

    it('should render expected json when Promise rejects', () => {
        fakeRequest.query.fail = true;
        const expectedJson = {
            message: 'rejected Promise',
            error: true
        };

        return promiseTest(fakeRequest, fakeResponse)
            .then(() => {
                expect(stubResponseJson)
                    .to.have.been.calledWithExactly(expectedJson);
            });
    });
});
