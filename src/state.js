
export default class states{
    constructor (st){
        this.st = st;
        this._position = 0;
        this._tran = -1;
    }

    next(){
        var item;
        if (this._position >= 0 && this._position < this.st.length) {
            item = this.st[this._position];
            this._position++;
        }else {
            item = null;
        }

        return item; 
    }

    pos(){
        return this._position;
    }
    
    nextBy (pred) {
        if (this._position >= 0 && this._position < this.st.length) {
            var item = this.st[this._position];
            if (pred(item)) {
                return item;
            } else{
                throw new Error("predicate failed");
            }
        } else {
            return -1;
        }
    }

    seekTo (to) {
        if (to >= 0 && to < this.st.length) {
            this._position = to;
            return true;
        } else {
            return false;
        }
    }

    begin(){
        var theindex = this._position
        if (this._tran == -1){
            this._tran =this._position
        }
        return theindex;
    }

    commit(tranNumber){
        if (this._tran == tranNumber) {
            this._tran = -1
        }
    }

    rollBack(tranNumber){
        this._position = tranNumber
        if(this._tran == tranNumber){
            this._tran = -1
        }
    }

}
