'use strict'

const mockery = require('mockery')
const sinon = require('sinon')
const chai = require('chai')

const expect = chai.expect
chai.use(require('sinon-chai'))
chai.config.includeStack = true
// const assert = chai.assert
// const AssertionError = chai.AssertionError
// const Assertion = chai.Assertion

describe('level-logger', function () {
  let levelLogger,
    debug

  const levels = ['debug', 'info', 'warn', 'error', 'fatal']

  beforeEach(function () {
    mockery.enable({
      useCleanCache: true,
      warnOnReplace: false,
      warnOnUnregistered: false
    })

    debug = sinon.stub().callsFake(name => ({name}))
    mockery.registerMock('debug', debug)

    levelLogger = require('../lib/level-logger')
  })

  afterEach(function () {
    mockery.deregisterAll()
    mockery.disable()
  })

  it('creates debug functions for all log levels', function () {
    const log = levelLogger()
    levels.forEach(level => {
      const name = `${level}:`
      expect(debug).to.have.been.calledWith(name)
      expect(log[level].name).to.equal(name)
    })
  })

  it('creates debug functions for all log levels and the given name', function () {
    const log = levelLogger('name')
    levels.forEach(level => {
      const name = `${level}:name`
      expect(debug).to.have.been.calledWith(name)
      expect(log[level].name).to.equal(name)
    })
  })

  it('also holds the reference to console.trace', function () {
    const log = levelLogger('name')
    expect(log.trace).to.equal(console.trace)
  })
})
