import {
  TurtleSerializer, TrigSerializer,
} from '@rdfjs-elements/formats-pretty'
import rdf from 'rdf-ext'
import ns from './namespaces.js'
import getStream from 'get-stream'
import formats from '@rdfjs/formats'
import fs from 'fs'
import { extname, join } from 'path'

function toPlain (prefixes) {
  const result = {}
  for (const [key, value] of Object.entries({ ...prefixes })) {
    result[key] = value().value
  }
  return result
}

async function print ({ dataset }) {
  const sink = new TrigSerializer({
    prefixes: toPlain(ns),
  })
  const stream = await sink.import(dataset.toStream())
  return await getStream(stream)
}

async function prettyPrint ({ dataset }) {
  const sink = new TurtleSerializer({
    prefixes: toPlain(ns),
  })
  const stream = await sink.import(dataset.toStream())
  return await getStream(stream)
}

// What is the working combination?
// const test = (x) => x.endsWith('notice.rml.ttl')
//     | x.endsWith('technical_mapping_F03.rml.ttl')
//     | x.endsWith('s4_procedure.rml.ttl')
//     | x.endsWith('annex_d1.rml.ttl')
//     | x.endsWith('notice.rml.ttl')

async function getMappingDataset ({ path }) {
  const files = fs.readdirSync(path)
  const combinedDataset = rdf.dataset()
  for (const file of files) {
    if (extname(file) === '.ttl') {

      const filePath = join(path, file)
      const fileStream = fs.createReadStream(filePath, 'utf-8')

      const current = rdf.dataset()
      await current.import(formats.parsers.import('text/turtle', fileStream))

      for (const quad of current) {
        quad.namedgraph = rdf.namedNode('file')
        combinedDataset.add(quad)
      }

    }
  }
  return combinedDataset
}

export { print, prettyPrint, getMappingDataset }
