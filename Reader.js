const fs = require("fs")
const util = require("util")


class Reader{

    constructor(){
        this.read = util.promisify(fs.readFile)
    }
    async Read(filepath){
            try{
                return this.read(filepath, {encoding: "utf-8"})
            }catch(err){
                return undefined
            }
    }
}

module.exports = Reader