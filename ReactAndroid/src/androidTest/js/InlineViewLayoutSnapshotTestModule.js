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
const View = require('View');
import InlineViewSnapshotTest from './InlineViewSnapshotTest/InlineViewSnapshotTest';

const Assert = require('Asserts');

function assertEquals(expected, actual, msg) {
  if (msg) {
    msg = msg + ' -- Expected: ' + expected + ', received: ' + actual;
  }
  Assert.assertEquals(expected, actual, msg);
}

class InlineViewLayoutSnapshotTestApp extends React.Component {
  state = { renderTest: false };

  componentDidMount() {
    Assert.assertEquals(true, true);
    setTimeout(() => {
      this.setState({ renderTest: true });
    }, 16);
  }
  render() {
    if (this.state.renderTest) {
      return (
        <InlineViewSnapshotTest
          onAssertFail={(msg) => { Assert.assertFail(msg); }}
          onTestsComplete={() => { TestState.testsComplete(); }}
        />
      );
    } else {
      return <View></View>;
    }
  }
}

const InlineViewLayoutSnapshotTestModule = {
  InlineViewLayoutSnapshotTestApp: InlineViewLayoutSnapshotTestApp,
  startTest: () => {
  },
};

BatchedBridge.registerCallableModule(
  'InlineViewLayoutSnapshotTestModule',
  InlineViewLayoutSnapshotTestModule,
);

module.exports = InlineViewLayoutSnapshotTestModule;
