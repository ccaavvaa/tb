import { HelloWorld } from '../lib/hello-world';
import * as chai from 'chai';
import 'mocha';
const expect = chai.expect;
// tslint:disable:only-arrow-functions
describe('Hello world', function () {
    it('greeting should be Hello World ! when name is empty', function () {
        const target = new HelloWorld();
        expect(target.greeting).equals('Hello World !');
    });
});
