import chai from 'chai';
import parsec from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;
var assert = chai.assert;

var jsParsec = new parsec();
var combinator = jsParsec.combinator();
var atom = jsParsec.atom();


describe('parsec',function (){
    describe('combinator',function () {
        it("attempt test",function(){
        	
            var state = jsParsec.state('a');
            var ne = atom.ne('a');
            var attempt = combinator.attempt(ne);
            var prePos = state.pos();
            expect(state.pos()).to.be.equal(prePos);

        });
        it('between',function(){
            var state = jsParsec.state('abd');
            var eq = atom.eq('a');
            var ne = atom.ne('a');
            var no = atom.noneOf('q','w','e','r','t','b','c');
            var between = combinator.between(eq, no, ne);
            expect(between(state)).to.be.equal('b');

        });
        it('either',function(){
            var state = jsParsec.state('aac');
            var eq = atom.eq('b');
            var ne = atom.ne('b');
            var either = combinator.either(eq,ne);
            var re = either(state);
            expect(re).to.be.equal('a');
        });
        it('either or',function(){
            var state = jsParsec.state('abc');
            var eq = atom.eq('b');
            var ne = atom.ne('b');
            var no = atom.noneOf('q','w','e','r','t','b','c');
            var or = combinator.either(eq,ne).or(no);

            assert.throw(function(){
                or(state);
            },Error);

            state = new jsParsec.state('abd');
            expect(or(state)).to.be.equal('d');
        });
        it('otherwise',function(){
            var state = new jsParsec.state('bd');
            var eq = atom.eq('a');
            var ow = combinator.otherwise(eq,'the first operator is fail , so sad');
            try{
                ow(state);
            }catch(err){
                expect(err.message).to.be.equal("the first operator is fail , so sad");
            }
        });
        it('many till',function(){
            var state = new jsParsec.state('aaaaaaaab');
            var a = atom.eq('a');
            var na = atom.ne('a');
            var mat = combinator.manyTill(a,na);
            console.log( mat(state) );
            console.log(state.pos())
            assert.equal(9,state.pos());
        });
        
        it('many',function(){
            var state = new jsParsec.state('aaab');
            var equal = atom.eq('a');
            var many = combinator.many(equal);
            var arr = many(state);
            expect(arr.length).to.be.equal(3);
        });
        

        it('many1',function(){
            var state = new jsParsec.state('aaab');
            var eq = atom.eq('a');
            var ma = combinator.many1(eq);
            var arr = ma(state);
            expect(arr.length).to.be.equal(3);

            state = new jsParsec.state('baaaaab');
            var ma1 = combinator.many1(eq);
            assert.throw(function () {
                ma1(state);
            },Error);

        });
        it('skip1',function(){
            var state = new jsParsec.state('aaaaaaaaab');
            var eq = atom.eq('a');
            var skip1 = combinator.skip1(eq);
            var m = skip1(state);
            expect(state.pos()).to.be.equal(9);

            state = new jsParsec.state('baaaaab');
            var ma1 = combinator.many1(eq);
            assert.throw(function () {
                ma1(state);
            },Error);

        });
        it('skip',function(){
            var state = new jsParsec.state('aaaaaaaaab');
            var equal = atom.eq('a');
            var sk = combinator.skip(equal);
            sk(state);
            expect(state.pos()).to.be.equal(9);
        });
        it('choice',function(){
            var state = new jsParsec.state('abd');

            var eq = atom.eq('b');
            var ne = atom.ne('b');
            var no = atom.noneOf('q','w','e','r','t','b','c');
            var choice = combinator.choice(eq,ne,no);

            expect(choice(state)).to.be.equal('d');
        });
        it('sep',function(){
            var state = new jsParsec.state('a|a|a|a');
            var s = atom.eq('|');
            var eq = atom.eq('a');
            var sep = combinator.sep1(eq, s);
            var re = sep(state);
             expect(re.length).to.be.equal(4);
        });

        it('sep1',function(){
            var state = new jsParsec.state('a|a|a|a');
            var s = atom.eq('|');
            var eq = atom.eq('a');
            var sep = combinator.sep1(eq, s);
            var re = sep(state);
            expect(re.length).to.be.equal(4);
        });
    });


});