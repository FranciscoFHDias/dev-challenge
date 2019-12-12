const port = process.env.PORT || 4000
const env = process.env.NODE_ENV || 'development'
const dbURI = process.env.MONGODB_URI || `mongodb://localhost:27017/dev-challenge${env}`
const secret = process.env.SECRET || 'Tgs5aG_^GH@lKmnN=++/dgyhhebded'

module.exports = { port, env, dbURI, secret }