// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
// import page from './documents/page'
import event from './documents/event'
import post from './documents/post'
import press from './documents/press'
// import route from './documents/route'
import member from './documents/member'
import siteConfig from './documents/siteConfig'

// Object types
// import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
// import hero from './objects/hero'
// import imageSection from './objects/imageSection'
// import mailchimp from './objects/mailchimp'
// import textSection from './objects/textSection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // cta,
    embedHTML,
    figure,
    // hero,
    // imageSection,
    // internalLink,
    link,
    // mailchimp,
    // page,
    event,
    post,
    press,
    member,
    portableText,
    // route,
    simplePortableText,
    siteConfig
    // textSection
  ])
})
