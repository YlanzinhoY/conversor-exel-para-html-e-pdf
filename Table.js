class Table {

    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }

    get lineRows(){
        return this.rows.length
    }

    get collunm(){
        return this.header.length
    }
}
module.exports = Table