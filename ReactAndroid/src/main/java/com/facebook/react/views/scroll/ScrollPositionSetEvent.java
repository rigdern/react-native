/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

package com.facebook.react.views.scroll;

import android.support.v4.util.Pools;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * A event dispatched from a ScrollView scrolling.
 */
public class ScrollPositionSetEvent extends Event<ScrollPositionSetEvent> {

    private static final Pools.SynchronizedPool<ScrollPositionSetEvent> EVENTS_POOL =
            new Pools.SynchronizedPool<>(3);

    private int mId;

    private ScrollPositionSetEvent() {
    }

    public static ScrollPositionSetEvent obtain(
            int viewTag,
            int id) {
        ScrollPositionSetEvent event = EVENTS_POOL.acquire();
        if (event == null) {
            event = new ScrollPositionSetEvent();
        }
        event.init(
                viewTag,
                id);
        return event;
    }

    @Override
    public void onDispose() {
        EVENTS_POOL.release(this);
    }

    private void init(
            int viewTag,
            int id) {
        super.init(viewTag);
        mId = id;
    }

    @Override
    public String getEventName() {
        return ScrollEventType.SCROLL_POSITION_SET.getJSEventName();
    }

    @Override
    public boolean canCoalesce() {
        return false;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
    }

    private WritableMap serializeEventData() {
        WritableMap event = Arguments.createMap();
        event.putDouble("id", mId);

        return event;
    }
}
