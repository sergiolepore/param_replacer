// param-replace-test.js

var vows = require('vows'),
assert = require('assert'),
param_replacer = require('../');

var target = "Target: %en.hello% %en.world% - Inverted: %en.world% %en.hello% - Mixed: %es.hello% %en.world% - Unchanged: %no_value% - Single: %hello%";
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
  'Replace the params in the target string for "es" lang for single params': {
    topic: function() {
      return param_replacer.replace(target, replacements.es);
    },
    'We expect "Target: %en.hello% %en.world% - Inverted: %en.world% %en.hello% - Mixed: %es.hello% %en.world% - Unchanged: %no_value% - Single: Hola"': function (string) {
      assert.equal("Target: %en.hello% %en.world% - Inverted: %en.world% %en.hello% - Mixed: %es.hello% %en.world% - Unchanged: %no_value% - Single: Hola", string);
    }
  },
  'Replace the params in the target string for "en" lang for single params': {
    topic: function() {
      return param_replacer.replace(target, replacements.en);
    },
    'We expect "Target: %en.hello% %en.world% - Inverted: %en.world% %en.hello% - Mixed: %es.hello% %en.world% - Unchanged: %no_value% - Single: Hello"': function (string) {
      assert.equal("Target: %en.hello% %en.world% - Inverted: %en.world% %en.hello% - Mixed: %es.hello% %en.world% - Unchanged: %no_value% - Single: Hello", string);
    },
    'Finally, replace all params with JSON notation': {
      topic: function() {
        return param_replacer.replace(target, replacements);
      },
      'We expect "Target: Hello World - Inverted: World Hello - Mixed: Hola World - Unchanged: %no_value% - Single: %hello%"': function(string) {
        assert.equal("Target: Hello World - Inverted: World Hello - Mixed: Hola World - Unchanged: %no_value% - Single: %hello%", string);
      }
    }
  }
}).export(module);