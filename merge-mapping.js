import { getMappingDataset } from './src/support.js'
import { prettyPrint, print } from './src/support.js'

const path = 'transformation/mappings'
const dataset = await getMappingDataset({ path })

console.log(await prettyPrint({ dataset }))
