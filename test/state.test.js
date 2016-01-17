import chai from 'chai';
import parsec from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;

var jsParsec = new parsec();


describe('test jsparsec', function () {
	describe('test name', function () {
		it('the name', () => {
			expect(jsParsec.name).to.be.equal('jsparsec');
		});
	});
});

describe('state',function (){
    describe('next',function () {
        it("should return a ",function(){
            var st = jsParsec.state('a');
			expect(st.next()).to.be.equal('a');
        });
    });
    
    describe('pos',function () {
        it('should return the pos',function() {
            var st = jsParsec.state('aa');
            st.next();
            st.next();
            expect(st.pos()).to.be.equal(2);
        });
    });
    describe('nextBy',function () {
        it('should return a',function(){
            var st = new jsParsec.state('aaa');
            expect( st.nextBy(new Function("x","return x == 'a';")) ).to.be.equal('a');
        });
    });
    describe('seek_to',function(){
        it('seek_to the 0 position',function(){
            var st = jsParsec.state('abc');
            st.next();
            st.next();
            st.seekTo(0);
            expect(st.pos()).to.be.equal(0);
        });
    });

    describe('trans test',function(){
        it('trans test suite',function(){
            var st = jsParsec.state('abc');
            var i = st.begin();
            st.next();
            expect(st.pos()).to.be.equal(1);
            st.rollBack(i);
            expect(st.pos()).to.be.equal(0);

        });
    });
});