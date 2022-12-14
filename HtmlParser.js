const ejs = require("ejs")

class HtmlParser{

    static async Parse(table){
        return ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows})
    }
}

module.exports = HtmlParser