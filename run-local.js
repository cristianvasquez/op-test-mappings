import { createMapper } from './mapper.js'

const triplify = await createMapper()

const result = await triplify({
  mappingFile: './mappings/characters.rml.ttl', outputFile: 'output-local.nt',
})

console.log(result)
