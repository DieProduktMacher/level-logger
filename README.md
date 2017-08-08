# Level Logger

A simple logger module wrapping the [`debug`](https://www.npmjs.com/package/debug) module.

It generates an object containing logging functions provided through the [`debug`](https://www.npmjs.com/package/debug) for the following log levels:

* `debug`
* `info`
* `warn`
* `error`
* `fatal`

prefixing the module name with the corresponding `<log level>:`

For convenience reasons the generated object also holds a reference to `console.trace`.

## Installation

```npm install level-logger```

## Usage

```javascript
const log = require('level-logger')('my-module')

log.debug('debug message')
log.info('info message')
log.warn('warning message')
log.error('error message')
log.fatal('fatal message')
```
