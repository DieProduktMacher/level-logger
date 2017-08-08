'use strict'

const debug = require('debug')

module.exports = (name = '') => {
  return ['debug', 'info', 'warn', 'error', 'fatal'].reduce((loggers, level) => {
    const logger = debug(`${level}:${name}`)
    let consoleName = level === 'debug' ? 'log' : level === 'fatal' ? 'error' : level
    logger.log = console[consoleName].bind(console)
    loggers[level] = logger
    return loggers
  }, {trace: console.trace})
}
