# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [me](https://github.com/reganjs) as part of the curriculum at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @reganjs/lotide`

**Require it:**

`const _ = require('@reganjs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` : Compares two arrays. Logs "👍🏻👍🏻👍🏻 Assertion Passed" or "👎🏻👎🏻👎🏻 Assertion Failed".
* `assertEqual` : Compares two primitives. Logs "👍🏻👍🏻👍🏻 Assertion Passed" or "👎🏻👎🏻👎🏻 Assertion Failed".
* `assertObjectsEqual` : Compares two flat objects. Logs "👍🏻👍🏻👍🏻 Assertion Passed" or "👎🏻👎🏻👎🏻 Assertion Failed".
* `countLetters` : Returns an object, counts the times a letter appears in a string. Will return the count of a specific character. 
* `countOnly` : Returns an object of the count of instances of the item in itemsToCount in allItems. 
* `eqObjects` : Compares two flat objects. Returns true if they are identical.
* `findKey` : Takes an object and searches it for the first key that satisfies a callback function and returns that key. 
* `findKeyByValue` : Takes an object and searches through its values, returns the parent key upon a match. 
* `flatten` : Returns an array that is flattened.
* `head` : Returns the first item in an array.
* `letterPositions` : Returns an object where each key is the letter(s) in a string and the value(s) are the indices of their locations.
* `map` : Returns a modified array 
* `middle` : Returns the middle value from a given array as a separate array.
* `tail` : Returns the tail of the array (all but the first item in an array).
* `takeUntil` : Returns an array of values until the callback function has been met.
* `without` : Returns an array that contains all the elements from an array, but with those contained in another array removed. 
