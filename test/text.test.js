import chai from 'chai';
import parsec from '../lib/parsec.js';

chai.expect();

const expect = chai.expect;
var assert = chai.assert;

var jsParsec = new parsec();
var combinator = jsParsec.combinator();
var text = jsParsec.text();


describe('parsec',function (){
    describe('text',function () {
       it('space',function(){
            var state = new jsParsec.state('\n \r\ni love you');
            var sp = text.space();
            assert.throw(function(){
                sp(state);
            },Error);
            assert.equal(' ',sp(state));
            assert.throw(function(){
                sp(state);
            },Error);
        });
        it('new line',function(){
            var state = new jsParsec.state('\n');
            var nl = text.newLine();
            assert.equal('\n',nl(state));
            // \n\r 算两个字符
            var state1 = new jsParsec.state('\n\r');
            assert.equal("\n\r",nl(state1));

            state = new jsParsec.state('i love you');
            assert.throw(function(){
                nl(state);
            },Error);
        });
        it('white space',function(){
            var state = new jsParsec.state(' \t');
            var ws = text.whiteSpace();
            assert.equal(' ',ws(state));
            assert.equal('\t',ws(state));

            state = new jsParsec.state('i love you');
            assert.throw(function(){
                ws(state);
            },Error);
        });
        it('Text',function(){
            var str = text.Text('love');
            var state = new jsParsec.state('love you');
            var re = str(state);
            assert.equal('love',re);


            assert.throw(function(){
                str(state);
            },Error);
        });
        it('digit',function(){
            var digit = text.digit();
            var state = new jsParsec.state('a1');
            assert.throw(function(){
                digit(state);
            },Error);
            digit(state);
        });
        it('letter',function(){
            var letter = text.letter();
            var state = new jsParsec.state('a1');
            assert.equal('a',letter(state));
            assert.throw(function(){
                letter(state);
            },Error);
        });
        it('alphaNumber',function(){
            var al = text.alphaNumber();
            var state = new jsParsec.state('1a%');
            assert.equal('1',al(state));
            assert.equal('a',al(state));
            assert.throw(function(){
                al(state);
            },Error);
        });
        /*
        it('uInt',function(){
            var state = new jsParsec.state('12');
            var uInt = text.uInt();
            assert.equal('12',uInt(state));


            state = new jsParsec.state('i love you');
            assert.throw(function(){
                uInt(state);
            });


            state = new jsParsec.state('12.3');
            assert.throw(function(){
                uInt(state);
            },Error);
        });
		*/
        it('int',function(){
            var state = new jsParsec.state('-123');
            var Int = text.Int();
            assert.equal('-123',Int(state));

            state = new jsParsec.state('123');
            assert.equal('123',Int(state));
        });
        /*
        it('uFloat',function(){
            var  state = new jsParsec.state('123.5asd');
            var uFloat = text.uFloat();
            assert.equal('123.5',uFloat(state));


            state = new jsParsec.state('.5664');
            assert.equal('0.5664',uFloat(state));

            state = new jsParsec.state('45661');
            assert.throw(function(){
                uFloat(state);
            },Error);
        });
        it('float',function(){
            var state = new jsParsec.state('123.5asd');
            var Float = text.Float();
            assert.equal('123.5',Float(state));


            state = new jsParsec.state('.5664');
            assert.equal('0.5664',Float(state));

            state = new jsParsec.state('45661');
            assert.throw(function(){
                Float(state);
            },Error);



            state = new jsParsec.state('-123.5asd');
            var Float = text.Float();
            assert.equal('-123.5',Float(state));


            state = new jsParsec.state('-.5664');
            assert.equal('-0.5664',Float(state));

            state = new jsParsec.state('-45661');
            assert.throw(function(){
                Float(state);
            },Error);
        });
		*/
    })
});