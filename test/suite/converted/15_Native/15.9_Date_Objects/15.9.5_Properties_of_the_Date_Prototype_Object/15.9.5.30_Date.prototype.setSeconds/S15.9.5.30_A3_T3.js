// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.setSeconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @section 15.9.5.30
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.30_Date.prototype.setSeconds/S15.9.5.30_A3_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.setSeconds.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.setSeconds.length property has the attribute DontEnum');
}

for(x in Date.prototype.setSeconds) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.setSeconds.length has the attribute DontEnum');
  }
}

