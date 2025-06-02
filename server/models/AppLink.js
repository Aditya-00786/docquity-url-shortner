// appLinkMetadata.model.js
const mongoose = require('mongoose');

const AppLinkMetadataSchema = new mongoose.Schema({
  app_id: { type: String, required: true, unique: true },
  platform: { type: String, enum: ['ios', 'android'], required: true },
  domain: { type: String, required: true },
  uri_template: { type: String, required: true },
  validation: { type: String }
}, {
  collection: 'app_link_metadata'
});

module.exports = mongoose.model('AppLinkMetadata', AppLinkMetadataSchema);
