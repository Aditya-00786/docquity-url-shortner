// analytics.model.js
const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  click_id: { type: String, required: true, unique: true },
  short_code: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  hashed_ip: { type: String },
  user_agent: { type: String },
  referrer: { type: String },
  campaign_id: { type: String },
  redirected_to: { type: String, enum: ['web', 'native'] },
}, {
  collection: 'analytics_events'
});

AnalyticsSchema.index({ timestamp: 1 }); // For time-series partitioning

module.exports = mongoose.model('AnalyticsEvent', AnalyticsSchema);
