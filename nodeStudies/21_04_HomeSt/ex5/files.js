const fs = require ('fs')
let result = fs.readFileSync('some.txt','utf-8')
console.log(result)
fs.writeFileSync('some.txt', result + '\nand good bye files')
// fs.mkdirSync('text-files')


// fs.mkdir('text-files', ()=>{
//     fs.writeFile('./text-files/some.txt', 'my new text to be printed',()=>{})
// })
fs.unlink('./text-files/some.txt', ()=>{
  fs.rmdir('./text-files',()=>{})
})
