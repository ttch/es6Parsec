import chai from 'chai';
import {p} from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;

var psc = new p();


describe('test jsparsec', function () {
	describe('test name', function () {
		it('the name', () => {
			expect(psc.name).to.be.equal('jsparsec');
		});
	});
});

describe('state',function (){
    describe('next',function () {
        it("should return a ",function(){
            var st = psc.state('a');
			expect(st.next()).to.be.equal('a');
        });
    });
    
    describe('pos',function () {
        it('should return the pos',function() {
            var st = psc.state('aa');
            st.next();
            st.next();
            expect(st.pos()).to.be.equal(2);
        });
    });
    describe('nextBy',function () {
        it('should return a',function(){
            var st = new psc.state('aaa');
            expect( st.nextBy(new Function("x","return x == 'a';")) ).to.be.equal('a');
        });
    });
    describe('seek_to',function(){
        it('seek_to the 0 position',function(){
            var st = psc.state('abc');
            st.next();
            st.next();
            st.seekTo(0);
            expect(st.pos()).to.be.equal(0);
        });
    });

    describe('trans test',function(){
        it('trans test suite',function(){
            var st = psc.state('abc');
            var i = st.begin();
            st.next();
            expect(st.pos()).to.be.equal(1);
            st.rollBack(i);
            expect(st.pos()).to.be.equal(0);

        });
    });
});