/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.tests;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.testing.AssertModule;
import com.facebook.react.testing.ReactInstanceSpecForTest;
import com.facebook.react.testing.ReactAppInstrumentationTestCase;

public class InlineViewLayoutSnapshotTest extends ReactAppInstrumentationTestCase {

  private class TestStateModule extends BaseJavaModule {
    private final CountDownLatch mCountDownLatch = new CountDownLatch(1);

    @Override
    public String getName() {
      return "TestState";
    }

    @ReactMethod
    public void testsComplete() {
      mCountDownLatch.countDown();
    }

    public void waitForTestsToComplete() {
      try {
        if (!mCountDownLatch.await(15000, TimeUnit.MILLISECONDS)) {
          throw new RuntimeException("Timed out waiting for tests to complete");
        }
      } catch (InterruptedException e) {
        throw new RuntimeException(e);
      }
    }
  }

  private AssertModule mAssertModule;
  private TestStateModule mTestStateModule;

  @Override
  protected void setUp() throws Exception {
    super.setUp();
  }

  @Override
  protected String getReactApplicationKeyUnderTest() {
    return "InlineViewLayoutSnapshotTestApp";
  }

  @Override
  protected ReactInstanceSpecForTest createReactInstanceSpecForTest() {
    mAssertModule = new AssertModule();
    mTestStateModule = new TestStateModule();
    return super.createReactInstanceSpecForTest()
        .addNativeModule(mAssertModule)
        .addNativeModule(mTestStateModule);
  }

  public void testInlineViewLayout() {
    mTestStateModule.waitForTestsToComplete();
    mAssertModule.verifyAssertsAndReset();
  }
}
