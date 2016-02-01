import chai from 'chai';
import {a,p} from '../lib/parsec.js';


chai.expect();

const expect = chai.expect;

var psc = new p();


describe('parsec',function (){
    describe('atom and parsec',function () {
        it("eq",function(){
            var expr = (st = 
                () => psc.state('a')) =>
                    a.eq('a') (st());
            
            expect(expr()).to.be.equal('a');
        });
        it('one',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        a.one('a')(st());

            expect(expr()).to.be.equal('a');
        });
        it('one of',function(){
            var expr = ( st = () => psc.state('abc') ) =>
                psc.parsec( a.oneOf('a','w','e','r','t','b') ) ( st() )


            expect(expr()).to.be.equal('a');
        });
        it('none of',function(){
            var expr = ( st = () => psc.state('abc') ) =>
                psc.parsec( a.noneOf('q','w','e','r','t','b')) ( st() )

            expect(expr()).to.be.equal('a');
        });
        it('pack',function(){
            var pack = a.pack();
            pack();
        });
        it('fail',function(){
            var fail = a.fail();
            //todo
        });
        it('parsec then',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( a.one('c') )
                            .then( a.one('b') ) (st());

            expect(expr()).to.be.equal('b');
        });

        it('parsec bind',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( a.one('c') )
                            .bind( (x,state) =>
                             "b" ) (st());
            expect(expr()).to.be.equal('b');
        });
        it('parsec over',function(){
            var expr = (st = 
                () => psc.state('abc')) =>
                        psc.parsec( a.one('a') )
                            .over( a.one('b') ) (st());

            expect(expr()).to.be.equal('a');
        });

    });


});
