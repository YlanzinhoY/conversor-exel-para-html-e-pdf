const Reader = require("./Reader")
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const writer = require("./Writer")
const pdfWriter = require("./PdfWriter")

const reader = new Reader()
const clerk = new writer()

async function mainRead(){
    const dataRead = await reader.Read('./lista pessoas.csv')
    const dataProcessor = Processor.Process(dataRead)
    console.log(dataProcessor)

    const users = new Table(dataProcessor)
    
    const html = await HtmlParser.Parse(users)
    
    clerk.Write(Date.now() + ".html", html)
    pdfWriter.WritePdf(Date.now() + ".PDF", html)
}
mainRead()