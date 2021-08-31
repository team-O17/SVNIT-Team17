const fs = require('fs');
const filePath = 'data.json'
async function main() {
    async function filterFunc(input) {

        let filteredResult = [];
    
        //method to read file in string
        const data = await fs.promises.readFile(filePath, 'utf8');
    
        //coverting the string data to JSON or javascript object and now i can treat it as array
        const jsonData = JSON.parse(data);
    
        //iterating over jsonData...
        jsonData.forEach(element => {
            if(element.key == input) {
                filteredResult.push(element)
            }
        });
    
        //returning the filtered result
        return filteredResult;
    }
    
    //storing the result
    const result = await filterFunc("AAPL")
    
    //printing the result
    //console.log(result);
}

main();

