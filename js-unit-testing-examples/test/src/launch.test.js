import proxyquire from 'proxyquire';

describe('Express server', () => {
    let stubExpress;
    let spyExpressGet;
    let stubExpressListen;
    let spyHomepage;
    let spyLogin;
    let spyAuthenticate;
    let spyDashboard;
    let fakeExpress;
    let server;
    const fakeHttpServer = {};

    beforeEach(() => {
        spyExpressGet = sinon.spy();
        stubExpressListen = sinon.stub();
        spyHomepage = sinon.spy();
        spyLogin = sinon.spy();
        spyAuthenticate = sinon.spy();
        spyDashboard = sinon.spy();

        // Create fake express application with spy methods
        fakeExpress = {
            get: spyExpressGet,
            listen: stubExpressListen,
            use: () => {}
        };

        // Return fake express application when express() is called
        stubExpress = sinon.stub().returns(fakeExpress);

        // app.listen returns a fake HttpServer
        stubExpressListen.returns(fakeHttpServer);

        // Use proxyquire to stub required modules and return
        // our spies so we can check assertions
        server = proxyquire('../../src/launch', {
            express: stubExpress,
            './middleware/homepage' : {default: spyHomepage},
            './middleware/login': {default: spyLogin},
            './middleware/authenticate': {default: spyAuthenticate},
            './middleware/dashboard': {default: spyDashboard}
        });
    });

    it('should return expected http server', () => {
        const returnedServer = server.start();
        expect(returnedServer).to.eql(fakeHttpServer);
    });

    it('should setup default route', () => {
        server.start();
        spyExpressGet.should.have.been.calledWithExactly('/', spyHomepage);
    });

    it('should setup login route', () => {
        server.start();
        spyExpressGet.should.have.been.calledWithExactly('/login', spyLogin);
    });

    it('should setup dashboard route', () => {
        server.start();
        spyExpressGet.should.have.been.calledWithExactly(
            '/dashboard',
            spyAuthenticate,
            spyDashboard
        );
    });

    it('should listen on default port 7080', () => {
        server.start();
        stubExpressListen.should.have.been.calledWithExactly(7080, sinon.match.func);
    });

    it('should listen on expected port if passed', () => {
        const expectedPort = 8888;
        server.start(expectedPort);
        stubExpressListen.should.have.been.calledWithExactly(expectedPort, sinon.match.func);
    });
});
