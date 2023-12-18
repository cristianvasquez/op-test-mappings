import { readTurtleFiles } from './src/support.js'
import { prettyPrint } from './src/support.js'

const path = 'transformation/mappings'
const dataset = await readTurtleFiles({ path })
const pretty = await prettyPrint({ dataset })

console.log(pretty)
