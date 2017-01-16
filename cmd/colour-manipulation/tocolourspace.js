/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Mark van Seventer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// @see http://sharp.dimens.io/en/stable/api-colour/#tocolourspace

// Strict mode.
'use strict'

// Local modules.
const baseHandler = require('../../lib/handler')
const constants = require('../../lib/constants')
const queue = require('../../lib/queue')

// Configure.
const options = {
  colourspace: { // Hidden option.
    choices: constants.COLOURSPACE,
    // desc: 'The output colourspace',
    type: 'string'
  }
}

// Command handler.
const handler = (args) => {
  return queue.push([ 'toColourspace', (sharp) => sharp.toColourspace(args.colourspace) ])
}

// Exports.
module.exports = {
  command: 'toColourspace <colourspace>',
  aliases: 'toColorspace',
  describe: 'Set the output colourspace',
  builder: (yargs) => yargs.strict().options(options),
  handler: baseHandler(handler)
}
