# JavaScript Unit Testing Examples

Example project to allow me to show how best to unit test a JavaScript Express application.

## Install

Clone this repository and install the dependencies as follows:

```
git clone git@github.com:MarcL/js-unit-testing-framework.git
npm install
```

## Running the tests

The code sets up a basic Express server with a few routes and some tests which cover testing the server setup. Run the test suite using npm:

```
npm test
```

## JavaScript Tests

Take a look in the `test` directory to see all of the test code. There are lots of examples of different types of tests and how to create them.

### Asynchronous functions and promises

Some examples of how to test asynchronous functions and promises, including some tips and tricks and gotchas.

#### Asynchronous function
- Timeout because `done` callback isn't called when function succeeds
- Passing test but slow because timer isn't stubbed
- Passing test and fast because timer is stubbed
- Timeout because `done` callback isn't called when function throws an error
- Passing test to call `done` callback when function throws an error

#### Promise : resolving
- Test passes incorrectly because Promise isn't returned
- Passing test because promise is returned
- Passing test because `done` callback is called after resolution
- Passing test because `done` callback is called after resolution using `chai-as-promised` syntax

#### Promise : rejecting
- Test passes incorrectly because Promise isn't returned
- Failing test because rejected Promise error isn't caught
- Passing test because Promise is returned and rejection is caught
- Passing test because Promise rejection is caught and `done` callback is called
- Passing test because Promise rejection is caught and `done` callback is called using `chai-as-promised` syntax

#### Slow tests
- Passing test but is slow due to Promise function in chain taking a long time
- Passing test and much faster as longer function is now stubbed to execute immediately

## License

See [LICENSE](LICENSE)
