import chai from 'chai';
import parsec from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;

var jsParsec = new parsec();


describe('parsec',function (){
    describe('eq',function () {
        it("eq test",function(){
        	
            var st = jsParsec.state('a');
            var p = jsParsec.atom().eq('a');
            expect(p(st)).to.be.equal('a');
        });
        it('one',function(){
            var st = jsParsec.state('abc');
            var one = jsParsec.atom().one();
            var re = one(st);
            expect(re).to.be.equal('a');
        });
        it('one of',function(){
            var state = jsParsec.state('abc');
            var oneOf = jsParsec.atom().oneOf('q','w','e','r','t','a');
            var re = oneOf(state);
            expect(re).to.be.equal('a');
        });
        it('none of',function(){
            var state = jsParsec.state('abc');
            var noneOf = jsParsec.atom().noneOf('q','w','e','r','t','b');
            var re = noneOf(state);
            expect(re).to.be.equal('a');
        });
        it('pack',function(){
            var pack = jsParsec.atom().pack();
            pack();
        });
        it('fail',function(){
            var fail = jsParsec.atom().fail();
            //todo
        });
    });


});