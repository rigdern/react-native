/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.tests;

import com.facebook.react.testing.ReactInstanceSpecForTest;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.testing.AssertModule;
import com.facebook.react.testing.ReactAppInstrumentationTestCase;

public class InlineViewLayoutSnapshotTest extends ReactAppInstrumentationTestCase {

  private static interface InlineViewLayoutSnapshotTestModule extends JavaScriptModule {
    public void verify();
  }

  private InlineViewLayoutSnapshotTestModule mTestJSModule;
  private AssertModule mAssertModule;

  @Override
  protected void setUp() throws Exception {
    super.setUp();
    mTestJSModule = getReactContext().getJSModule(InlineViewLayoutSnapshotTestModule.class);
  }

  @Override
  protected String getReactApplicationKeyUnderTest() {
    return "InlineViewLayoutSnapshotTestApp";
  }

  @Override
  protected ReactInstanceSpecForTest createReactInstanceSpecForTest() {
    mAssertModule = new AssertModule();
    return super.createReactInstanceSpecForTest()
        .addNativeModule(mAssertModule);
  }

  private void waitForBridgeIdleAndVerifyAsserts() {
    waitForBridgeAndUIIdle();
    mAssertModule.verifyAssertsAndReset();
  }

  public void testInlineViewLayout() {
    mTestJSModule.verify();
    waitForBridgeIdleAndVerifyAsserts();
  }
}
