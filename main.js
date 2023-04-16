const fs = require("fs")
const path = require("path")

const folderPath = './data';

fs.mkdirSync(folderPath, { recursive: true });

const filePath = './data/persons.txt';

fs.writeFileSync(filePath, 'Nuriya Nurmuhammad Abdulloh Hadicha');

fs.readFile('./data/persons.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        
        data=data.split(' ')
        // console.log(data);
        data.map(item=>{
            // console.log(item);
            file =`./data/${item}.txt`
            fs.writeFileSync(file, `Salom ${item}`);

        })

    }
})

