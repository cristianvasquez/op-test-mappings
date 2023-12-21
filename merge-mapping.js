import { readTurtleFiles } from './src/support.js'
import { prettyPrint, print } from './src/support.js'

const path = 'transformation/mappings'
const dataset = await readTurtleFiles({ path })

console.log(await prettyPrint({ dataset }))
