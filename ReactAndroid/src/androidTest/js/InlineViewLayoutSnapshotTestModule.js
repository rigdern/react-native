/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const BatchedBridge = require('BatchedBridge');
const React = require('React');
import InlineViewSnapshotTest from './InlineViewSnapshotTest/InlineViewSnapshotTest';

const Assert = require('Asserts');

function assertEquals(expected, actual, msg) {
  if (msg) {
    msg = msg + ' -- Expected: ' + expected + ', received: ' + actual;
  }
  Assert.assertEquals(expected, actual, msg);
}

class InlineViewLayoutSnapshotTestApp extends React.Component {
  render() {
    return (
      <InlineViewSnapshotTest
        onAssertFail={(msg) => { Assert.fail(msg); }}
        onTestsComplete={() => { done = true; }}
      />
    );
  }
}

let done = false;
const InlineViewLayoutSnapshotTestModule = {
  InlineViewLayoutSnapshotTestApp: InlineViewLayoutSnapshotTestApp,
  verify: function() {
    if (!done) {
      Assert.fail('TESTS STILL RUNNING');
    }
    // assertEquals(1, 1, 'Test assert failed');
  }
};

BatchedBridge.registerCallableModule(
  'InlineViewLayoutSnapshotTestModule',
  InlineViewLayoutSnapshotTestModule,
);

module.exports = InlineViewLayoutSnapshotTestModule;
