// param-replace-test.js

var vows = require('vows'),
    assert = require('assert'),
    param_replacer = require('../');

var target = "Target: %hello% %world% - Inverted: %world% %hello% - Unchanged: %no_value%";
var replacements = {
  "en": {
    "hello": "Hello",
    "world": "World"
  },
  "es": {
    "hello": "Hola",
    "world": "Mundo"
  }
};

// Start test unit...
vows.describe('Parameter Replacement').addBatch({
    'Replace the params in the target string for "es" lang': {
        topic: function() {
            return param_replacer.replace(target, replacements.es);
        },
        'We expect "Target: Hola Mundo - Inverted: Mundo Hola - Unchanged: %no_value%"': function (string) {
            assert.equal("Target: Hola Mundo - Inverted: Mundo Hola - Unchanged: %no_value%", string);
        }
    },
    'Replace the params in the target string for "en" lang': {
        topic: function() {
            return param_replacer.replace(target, replacements.en);
        },
        'We expect "Target: Hello World - Inverted: World Hello - Unchanged: %no_value%"': function (string) {
            assert.equal("Target: Hello World - Inverted: World Hello - Unchanged: %no_value%", string);
        }
    }
}).export(module);