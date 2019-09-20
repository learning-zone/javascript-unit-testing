// All tests that are skipped are done so because otherwise I won't allow
// them to be pushed to a git repo due to running the tests on the prepush rule in package.json
describe('Example asynchronous JavaScript tests', () => {
    describe('while testing asynchronous function', () => {
        // eslint-disable-next-line no-unused-vars
        it.skip('[FAILING TEST] should timeout because the done callback is not called', (done) => {
            setTimeout(() => {
                expect(true).to.be.true;
            }, 1000);
        });

        it('[PASSING BUT BAD TEST] should pass because the done callback is called but takes too long (~1000ms) to run', (done) => {
            setTimeout(() => {
                expect(true).to.be.true;
                done();
            }, 1000);
        });

        describe('better asynchronous test that stubs timer', () => {
            let fakeClock;

            beforeEach(() => {
                fakeClock = sinon.useFakeTimers();
            });

            afterEach(() => {
                fakeClock.restore();
            });

            it('[PASSING AND BETTER TEST] should stub clock to allow quick resolution of asynchronous function', (done) => {
                setTimeout(() => {
                    expect(true).to.be.true;
                    done();
                }, 1000);

                fakeClock.tick(1000);
            });
        });

        // eslint-disable-next-line no-unused-vars
        it.skip('[FAILING TEST] should timeout because the done callback is not called when function has errors', (done) => {
            setTimeout(() => {
                throw new Error('Something has gone wrong');

                // eslint-disable-next-line no-unreachable
                expect(true).to.be.true;
            }, 10);
        });

        it('[PASSING TEST] should call the done callback when error occurs', (done) => {
            setTimeout(() => {
                try {
                    throw new Error('Something has gone wrong');

                } catch(error) {
                    expect(true).to.be.true;
                    done();
                }
            }, 10);
        });
    });

    describe('while testing Promises', () => {
        describe('when Promise resolves', () => {
            it('[INCORRECT TEST] should pass but it never checks expectation', () => {
                const givenString = 'finished';
                Promise.resolve(givenString)
                    .then((data) => {
                        expect(data).to.equal(givenString);
                    });
            });

            it('[PASSING TEST] should pass because it returns the promise', () => {
                const givenString = 'finished';
                return Promise.resolve(givenString)
                    .then((data) => {
                        expect(data).to.equal(givenString);
                    });
            });

            it('[PASSING TEST] should pass because it calls the done callback when Promise has resolved', (done) => {
                const givenString = 'finished';
                Promise.resolve(givenString)
                    .then((data) => {
                        expect(data).to.equal(givenString);
                        done();
                    });
            });

            it('[PASSING TEST] should pass because it calls the done callback when Promise has resolved using chai-as-promised syntax', (done) => {
                const givenString = 'finished';
                Promise.resolve(givenString)
                    .then((data) => {
                        expect(data).to.equal(givenString);
                    })
                    .should.notify(done);
            });
        });

        describe('when Promise rejects', () => {
            it('[FAILING TEST] should pass because it does not return the Promise', () => {
                const givenString = 'error';
                Promise.reject(givenString);
            });

            it.skip('[FAILING TEST] should fail because it does not catch the rejection when returning the Promise', () => {
                const givenString = 'error';
                return Promise.reject(givenString);
            });

            it('[PASSING TEST] should pass because it catches the rejection and returns the Promise', () => {
                const givenString = 'error';
                return Promise.reject(givenString)
                    .catch((error) => {
                        expect(error).to.equal(givenString);
                    });
            });

            it('[PASSING TEST] should pass because it catches the rejection and calls the done callback', (done) => {
                const givenString = 'error';
                Promise.reject(givenString)
                    .catch((error) => {
                        expect(error).to.equal(givenString);
                        done();
                    });
            });

            it('[PASSING TEST] should pass because it catches the rejection and calls the done callback using chai-as-promised syntax', (done) => {
                const givenString = 'error';
                Promise.reject(givenString)
                    .catch((error) => {
                        expect(error).to.equal(givenString);
                    })
                    .should.notify(done);
            });
        });
    });

    describe('while testing function with internal function which takes some time', () => {
        const moduleUnderTest = {
            longFunction(data) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(data);
                    }, 1000);
                });
            }
        };

        it('[BAD TEST] should pass but takes too long (~1000ms) to run', () => {
            const givenString = 'finished';

            return Promise.resolve(givenString)
                .then(data => moduleUnderTest.longFunction(data))
                .then((data) => {
                    expect(data).to.equal(givenString);
                });
        });

        describe('when long function is stubbed to execute immediately', () => {
            let stubLongFunction;

            beforeEach(() => {
                stubLongFunction = sinon.stub(moduleUnderTest, 'longFunction');
            });

            afterEach(() => {
                stubLongFunction.restore();
            });

            it('[FIXED TEST] should pass and long function will execute immediately', () => {
                const givenString = 'finished';

                // Stub our long function so it returns immediately
                // with the data we expect it to return
                stubLongFunction.resolves(givenString);

                return Promise.resolve(givenString)
                    .then(data => moduleUnderTest.longFunction(data))
                    .then((data) => {
                        expect(data).to.equal(givenString);
                    });
            });
        });
    });
});
