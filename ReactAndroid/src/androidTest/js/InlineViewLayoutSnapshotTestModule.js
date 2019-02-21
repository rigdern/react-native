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
const TestState = require('NativeModules').TestState;
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
        onAssertFail={(msg) => { Assert.assertFail(msg); }}
        onTestsComplete={() => { TestState.testsComplete(); }}
      />
    );
  }
}

const InlineViewLayoutSnapshotTestModule = {
  InlineViewLayoutSnapshotTestApp: InlineViewLayoutSnapshotTestApp,
};

BatchedBridge.registerCallableModule(
  'InlineViewLayoutSnapshotTestModule',
  InlineViewLayoutSnapshotTestModule,
);

module.exports = InlineViewLayoutSnapshotTestModule;
