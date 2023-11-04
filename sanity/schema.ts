import { type SchemaTypeDefinition } from 'sanity'
import { informationPage } from './schema/informationPage'
import { mediumType } from './schema/mediumType'
import { project } from './schema/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    informationPage,
    mediumType,
    project,
  ],
}
