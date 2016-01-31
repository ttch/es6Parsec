import chai from 'chai';
import parsec from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;

var psc = new parsec();


describe('parsec',function (){
    describe('eq',function () {
        it("eq test",function(){
        	
            var expr = (st = 
                () => psc.state('a')) =>
                    psc.atom().eq('a') (st());
            
            expect(expr()).to.be.equal('a');
        });
        it('one',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.atom().one('a')(st());

            expect(expr()).to.be.equal('a');
        });
        it('one of',function(){
            var expr = ( st = () => psc.state('abc') ) =>
                psc.parsec( psc.atom().oneOf('a','w','e','r','t','b') ) ( st() )


            expect(expr()).to.be.equal('a');
        });
        it('none of',function(){
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
        it('parsec then',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( psc.atom().one('c') )
                            .then( psc.atom().one('b') ) (st());

            expect(expr()).to.be.equal('b');
        });

        it('parsec bind',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( psc.atom().one('c') )
                            .bind( (x,state) =>
                             "b" ) (st());
            expect(expr()).to.be.equal('b');
        });
        it('parsec over',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( psc.atom().one('a') )
                            .over( psc.atom().one('b') ) (st());

            expect(expr()).to.be.equal('a');
        });

    });


});