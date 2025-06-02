const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    short_code: { type: String, unique: true, required: true },
    original_url: { type: String, required: true },
    user_id: { type: String },
    created_at: { type: Date, default: Date.now },
    expires_at: { type: Date },
    metadata: { type: mongoose.Schema.Types.Mixed },
    custom_alias: { type: String, unique: true, sparse: true }
});

module.exports = mongoose.model('Url', UrlSchema);