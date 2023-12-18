import { TurtleSerializer } from '@rdfjs-elements/formats-pretty'
import rdf from 'rdf-ext'
import ns from './namespaces.js'
import getStream from 'get-stream'
import formats from '@rdfjs/formats'
import fs from 'fs'
import { extname, join } from 'path';


function toPlain (prefixes) {
  const result = {}
  for (const [key, value] of Object.entries({ ...prefixes })) {
    result[key] = value().value
  }
  return result
}

const sink = new TurtleSerializer({
  prefixes: toPlain(ns),
})

async function prettyPrint ({ dataset }) {
  const stream = await sink.import(dataset.toStream())
  return await getStream(stream)
}

async function readTurtleFiles ({ path }) {
  const files = fs.readdirSync(path)
  const combinedDataset = rdf.dataset()
  for (const file of files) {
    if (extname(file) === '.ttl') {
      const filePath = join(path, file)
      const fileStream = fs.createReadStream(filePath, 'utf-8')
      await combinedDataset.import(
        formats.parsers.import('text/turtle', fileStream))
    }
  }
  return combinedDataset
}

export { prettyPrint, readTurtleFiles }
