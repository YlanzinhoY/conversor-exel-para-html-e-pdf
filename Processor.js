class Processor{
    static Process(data){
        const textFile = data.split("\r\n")
        
        const rows = []
        textFile.forEach(row => {
            const arr = row.split(",")
            rows.push(arr)
        });
        return rows
    } 
} 

module.exports = Processor