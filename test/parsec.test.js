import chai from 'chai';
import parsec from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;

var psc = new parsec();


describe('parsec',function (){
    describe('eq',function () {
        it("eq test",function(){
        	
            var st = psc.state('a');
            var p = psc.atom().eq('a');
            expect(p(st)).to.be.equal('a');
        });
        it('one',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.atom().one('a')(st()
            );

            expect(expr()).to.be.equal('a');
        });
        it('one of',function(){
            var state = psc.state('abc');
            var oneOf = psc.atom().oneOf('q','w','e','r','t','a');
            
            var re = oneOf(state);
            expect(re).to.be.equal('a');
        });
        it('none of',function(){
            /*
            var state = psc.state('abc');
            var noneOf = psc.atom().noneOf('q','w','e','r','t','b');
            var re = noneOf(state);
            */

            var expr = ( st = () => psc.state('abc') ) =>
                psc.parsec( psc.atom().noneOf('q','w','e','r','t','b')) ( st() )

            expect(expr()).to.be.equal('a');
        });
        it('pack',function(){
            var pack = psc.atom().pack();
            pack();
        });
        it('fail',function(){
            var fail = psc.atom().fail();
            //todo
        });
        it('parsec',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( psc.atom().one('c') )
                            .then( psc.atom().one('b') ) (st());

            expect(expr()).to.be.equal('b');
        });

    });


});