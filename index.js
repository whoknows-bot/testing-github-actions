import * as fs from 'node:fs'

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log(process.env)

fs.writeFileSync(randomNumber(0, 10000) + '.txt', 'new file')