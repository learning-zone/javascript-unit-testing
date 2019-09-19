# BDD in JavaScript: Getting Started with Cucumber and Gherkin

This repository exists as a set of example implementations of Cucumber.js functionality.  
Article URL: https://www.sitepoint.com/bdd-in-javascript-cucumber-gherkin

## Examples

This repository has the following set of examples:

* simple - A very simple example that does nothing special
* background - Identical to the 'simple' example in terms of Javascript, but using a Background for common initialisation
* outline - Identical to the 'simple' example in terms of Javascript, but using a Scenario Outline to generate Scenarios
* datatable - Adaptation of the 'simple' example to use a Data Table to add an arbitrary list of numbers
* hooks - Demonstration of a Before hook for resetting data
* events - Demonstration of event handling for the lifecycle of running tests
* world - Demonstration of the World concept for data sharing

## Running examples

The examples are all set up to run with either npm Scripts, Grunt or Gulp. They can all be run as either:

* npm run-script <example>
* grunt shell:<example>
* gulp <example>

## License

For example, `npm run-script simple`, `grunt shell:background` or `gulp outline`.

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2017 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
