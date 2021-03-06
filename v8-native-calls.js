/*
 --------------------------------------
 (c)2014, Nathanael Anderson.
 Repository: https://github.com/Nathanaela/v8-Natives
 --------------------------------------
 v8-Natives is under The MIT License (MIT)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

(function (_global) {

    "use strict";

// v8 Functions are located in v8/lib/runtime.cc & runtime.h
// SMI = SMall Integer

_global.v8 = {
    isNative: function() { return true },
    getOptimizationStatus: function(fun) {
      return %GetOptimizationStatus(fun);
    },
    getOptimizationCount: function(fun) {
       return %GetOptimizationCount(fun);
    },
    optimizeFunctionOnNextCall: function(fun) {
        return %OptimizeFunctionOnNextCall(fun);
    },
    deoptimizeFunction: function(fun) {
        return %DeoptimizeFunction(fun);
    },
    clearFunctionTypeFeedback: function(fun) {
        return %ClearFunctionTypeFeedback(fun);
    },
    debugPrint: function(data) {
        return %DebugPrint(data);
    },
    collectGarbage: function() {
        return %CollectGarbage(null);
    },
    getHeapUsage: function() {
        return %GetHeapUsage();
    },
    hasFastProperties: function(data) {
        return %HasFastProperties(data);
    },
    hasFastSmiElements: function(data) {
        return %HasFastSmiElements(data);
    },
    hasFastObjectElements: function(data) {
        return %HasFastObjectElements(data);
    },
    hasFastDoubleElements: function(data) {
        return %HasFastDoubleElements(data);
    },
    hasDictionaryElements: function(data) {
        return %HasDictionaryElements(data);
    },
    hasFastHoleyElements: function(data) {
        return %HasFastHoleyElements(data);
    },
    hasFastSmiOrObjectElements: function(data) {
        return %HasFastSmiOrObjectElements(data);
    },
    hasSloppyArgumentsElements: function(data) {
        return %HasSloppyArgumentsElements(data);
    },
    haveSameMap: function(data1, data2) {
        return %HaveSameMap(data1, data2);
    },
    functionGetName: function(func) {
        return %FunctionGetName(func);
    },
//    isInPrototypeChain: function(value, proto) {
//        return %IsInPrototypeChain(value, proto);
//    },
    isSmi: function(data) {
        return %_IsSmi(data);
    },
    isValidSmi: function(data) {
       return %IsValidSmi(data);
    },
    neverOptimizeFunction: function(func) {
        return %NeverOptimizeFunction(func);
    },
    getV8Version: function() {
        return %GetV8Version();
    },
    isObserved: function(data) {
        return %IsObserved(data);
    }
};


}(typeof exports === 'undefined' ? this : exports));
