// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: B.2.5.1
description: >
  RegExp.prototype.compile.name is "compile".
info: >
  RegExp.prototype.compile (pattern, flags )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(RegExp.prototype.compile.name, "compile");

verifyNotEnumerable(RegExp.prototype.compile, "name");
verifyNotWritable(RegExp.prototype.compile, "name");
verifyConfigurable(RegExp.prototype.compile, "name");
