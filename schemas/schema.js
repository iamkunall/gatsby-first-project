// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas3
import siteSettings from './siteSettings';
import blockContent from './blockContent';
import category from './category';
import courses from './courses';
import author from './author';
import page from './page';
import featuresPoint from './featuresPoint';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ,
    // The following are document types which will appear
    // in the studio.
    // page,
    courses,
    // author,
    // category,
    siteSettings,
    featuresPoint,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
