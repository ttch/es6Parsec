import chai from 'chai';
import {a,c,jp} from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;
var assert = chai.assert;

var psc = new jp();


describe('parsec',function (){
    describe('combinator',function () {
        it("Try test",function(){
            var state = psc.state('a');

            var expr = (st) =>
                    c.Try( a.ne('a') )(st);

            var prePos = state.pos();

            expr(state);

            expect(state.pos()).to.be.equal(prePos);

        });

        it('between',function(){
            var expr = (st = () => psc.state('abd')) =>
                    c.between(
                        (state) => 
                            a.eq('a')(state),
                        (state) => 
                            a.noneOf('q','w','e','r','t','b','c')(state),
                        (state) =>
                            a.ne('a')(state)
                    )(st());
            
            expect(expr()).to.be.equal('b');
        });

        it('either',function(){

            var expr = (st = () => psc.state("aac")) =>
                c.either(
                    (state)=>
                        a.eq("b")(state),
                    (state)=>
                        a.ne("b")(state)
                )(st());

            expect(expr()).to.be.equal('a');
        });

        it('either or',function(){
            var state = psc.state('abc')
            var expr = (st ) =>
                c.either(
                    (state)=>
                        a.eq('b')(state),
                    (state)=>
                        a.ne('b')(state)
                ).or(
                    (state)=>
                        a.noneOf('q','w','e','r','t','b','c')(state)
                )(st)

            assert.throw(function(){
                expr(state);
            },Error);

            state = psc.state('abd');
            expect(expr(state)).to.be.equal('d');
        });
        
        it('otherwise',function(){
            var state = psc.state('bd');

            var expr = (st) =>
                c.otherwise(
                    a.eq('a'),
                    'the first operator is fail , so sad'
                )(st)

            try{
                expr(state);
            }catch(err){
                expect(err.message).to.be.equal("the first operator is fail , so sad");
            }
        });

        it('many',function(){
            var state = psc.state('aaab');

            var expr = (st) =>
                c.many(
                    a.eq('a')
                )(st)

            expect(expr(state).length).to.be.equal(3);

        });
        
        it('many1',function(){
            var state = psc.state('aaab');

            var expr = (st) =>
                c.many1(
                    a.eq('a')
                )(st)
            
            expect(expr(state).length).to.be.equal(3);

            state = psc.state('baaaaab');

            assert.throw(function () {
                ma1(state);
            },Error);

        });

        it('skip1',function(){
            var state = psc.state('aaaaaaaaab');

            var expr = (st) =>
                c.skip1(
                    a.eq('a')
                )(st)

            expr(state)

            expect(state.pos()).to.be.equal(9)
            expect(state.next()).to.be.equal('b')

            state = psc.state('baaaaab');
            assert.throw(function () {
                expr(state);
            },Error);
        });


        it('skip',function(){
            var state = psc.state('aaaaaaaaab');

            var expr = (st) =>
                c.skip1(
                    a.eq('a')
                )(st)

            expr(state)

            expect(state.pos()).to.be.equal(9);
            expect(state.next()).to.be.equal('b')
        });

        it('choice',function(){
            var state = psc.state('abd');
            var expr = (st) =>
                c.choice(
                    (state) =>
                        a.eq('b')(state),
                    (state) =>
                        a.ne('b')(state),
                    (state) =>
                        a.noneOf('q','w','e','r','t','b','c')(state)
                )(st)

            expect(expr(state)).to.be.equal('d');
        });

        it('sep',function(){
            var state = psc.state('a|a|a|a');
            var expr = (st) =>
                c.sep(
                    a.eq('a'),
                    a.eq('|')
                )(st)

            expect(expr(state).length).to.be.equal(4);
        });

        it('sep1',function(){
            var state =  psc.state('a|a|a|a');
            var expr = (st) =>
                c.sep1(
                    a.eq('a'),
                    a.eq('|')
                )(st)

            expect(expr(state).length).to.be.equal(4);

            state = psc.state('bdfasdf');

            assert.throw( ()=> expr(state),Error);
        });

    });


});