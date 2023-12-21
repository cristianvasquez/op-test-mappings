import * as RmlMapper from '@comake/rmlmapper-js'
import { readTurtleFiles } from '../src/support.js'
import { prettyPrint, print } from '../src/support.js'
import { readFileSync } from 'fs'

const path = 'transformation/mappings'
const dataset = await readTurtleFiles({ path })
const turtleMapping = await prettyPrint({ dataset })

// // Lazily load stuff
const inputFiles = new Proxy({}, {
  get: (target, property) => {
    if (!target[property]) {
      // If the property (file content) doesn't exist, read the file and store it
      target[property] = readFileSync(property, 'utf-8')
    }
    return target[property];
  },
});

const options = {
  toRDF: true, replace: false,
}

const turtleMappingResult = await RmlMapper.parseTurtle(turtleMapping,
  inputFiles, options)

console.log('result',turtleMappingResult)
