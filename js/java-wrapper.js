import RMLMapperWrapper from '@rmlio/rmlmapper-java-wrapper'
import { prettyPrint, getMappingDataset } from '../src/support.js'
import { readFileSync } from 'fs'

const path = 'transformation/mappings'
const dataset = await getMappingDataset({ path })
// const sources = new Proxy({}, {
//   get: (target, property) => {
//     if (!target[property]) {
//       console.log('reading', property) // The thing tries to read 'undefined' somewhere
//       target[property] = readFileSync(property, 'utf-8')
//     }
//     return target[property]
//   },
// })

const sources = {
  'data/source.xml': readFileSync('data/source.xml', 'utf-8'),
  'transformation/resources/buyer_legal_type.csv': readFileSync('transformation/resources/buyer_legal_type.csv', 'utf-8'),
  'transformation/resources/contract_nature.json': readFileSync('transformation/resources/contract_nature.json', 'utf-8'),
  'transformation/resources/country.json': readFileSync('transformation/resources/country.json', 'utf-8'),
  'transformation/resources/cpv.json': readFileSync('transformation/resources/cpv.json', 'utf-8'),
  'transformation/resources/currency.json': readFileSync('transformation/resources/currency.json', 'utf-8'),
  'transformation/resources/legal_basis.json': readFileSync('transformation/resources/legal_basis.json', 'utf-8'),
  'transformation/resources/main_activity.csv': readFileSync('transformation/resources/main_activity.csv', 'utf-8'),
  'transformation/resources/nuts.json': readFileSync('transformation/resources/nuts.json', 'utf-8'),
}

const rml =  readFileSync('full_mapping.rml.ttl', 'utf-8') // await prettyPrint({ dataset })

const rmlmapperPath = './rmlmapper.jar'
const tempFolderPath = './tmp'

const wrapper = new RMLMapperWrapper(rmlmapperPath, tempFolderPath, true)

const result = await wrapper.execute(rml,
  { sources, generateMetadata: false, serialization: 'turtle' })

console.log(result)
