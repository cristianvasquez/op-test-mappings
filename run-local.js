import { createMapper } from './mapper.js'

const triplify = await createMapper()

// const result = await triplify({
//   mappingFile: './mappings/characters.rml.ttl', outputFile: 'output-local.nt',
// })

const result = await triplify({
  mappingFile: './transformation/mappings/notice.rml.ttl',
  outputFile: 'output-notice.nt',

})
console.log(result)
