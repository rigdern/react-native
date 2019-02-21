/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import expected from './ExpectedAndroid4_4';

function padByWrapping(s, desiredLength) {
  while (true) {
    const remainingLength = desiredLength - s.length;
    if (remainingLength <= 0) {
      return s;
    } else if (remainingLength <= s.length) {
      return s + s.substr(0, remainingLength);
    } else {
      s += s;
    }
  }
}

const ltrText = padByWrapping(
  'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  500
);
const ltrChar = 'X';

const rtlText = padByWrapping(
  '\u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646\u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631\u0627\u0644\u0644\u063A\u0629 \u062F\u0648\u0646\u0645\u062D\u0627\u0630\u0627\u0629 \u0627\u0644\u0646\u0635',
  500
);
const rtlChar = '\u0645';

function inlineView(backgroundColor) {
  if (backgroundColor === undefined) {
    backgroundColor = 'steelblue';
  }
  return (
    <View style={{
      backgroundColor: backgroundColor,
      width: 10,
      height: 10,
    }} />
  );
}

// `TestText` wraps `Text` to add some props with the goal of making the text
// render consistently regardless of the type of the device, the version of
// Android, or the device's settings. This enables us to write tests that
// measure the text and compare the results with some known good snapshot
// measurements.
//
// Some example factors that we want to prevent from affecting the text rendering
// include the system font scale setting and the typefaces that happen to be
// installed on the device.
class TestText extends Component {
  render() {
    return (
      <Text
        allowFontScaling={false}
        style={{
          fontFamily: 'notoserif'
        }}
        {...this.props}
      >
        {this.props.children}
      </Text>
    );
  }
}

const testCases = [{
  title: 'basic',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 20)} {char}{inlineView()}{char} {text.substr(20, 16)}
      </TestText>
    );
  }
}, {
  title: 'multiple views',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 20)} {char}{inlineView()}{char} {text.substr(20, 10)} {char}{inlineView('orange')}{char} {text.substr(30, 3)}
      </TestText>
    );
  }
}, {
  title: 'multiline',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 65)} {char}{inlineView()}{char} {text.substr(65, 14)}
      </TestText>
    );
  }
}, {
  title: 'truncated by numberOfLines={1}',
  render: (text, char) => {
    return (
      <TestText numberOfLines={1}>
        {text.substr(0, 56)} {char}{inlineView()}{char} {text.substr(56, 14)}
      </TestText>
    );
  }
}, {
  title: 'not truncated by numberOfLines={1}',
  render: (text, char) => {
    return (
      <TestText numberOfLines={1}>
        {text.substr(0, 21)} {char}{inlineView()}{char} {text.substr(21, 54)}
      </TestText>
    );
  }
}, {
  title: 'truncated by numberOfLines={2}',
  render: (text, char) => {
    return (
      <TestText numberOfLines={2}>
        {text.substr(0, 123)} {char}{inlineView()}{char} {text.substr(123, 41)}
      </TestText>
    );
  }
}, {
  title: 'not truncated by numberOfLines={2}',
  render: (text, char) => {
    return (
      <TestText numberOfLines={2}>
        {text.substr(0, 63)} {char}{inlineView()}{char} {text.substr(63, 100)}
      </TestText>
    );
  }
}, {
  title: 'truncated by <Text> height',
  render: (text, char) => {
    return (
      <TestText style={{height: 20}}>
        {text.substr(0, 65)} {char}{inlineView()}{char} {text.substr(65, 14)}
      </TestText>
    );
  }
}, {
  title: 'inline view is last character on first line',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 27)} {char}{inlineView()}
      </TestText>
    );
  }
}, {
  title: 'inline view is last character on second line',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 69)} {char}{inlineView()}
      </TestText>
    );
  }
}, {
  title: 'nested',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 5)}
        <Text>
            {text.substr(5, 15)} {char}{inlineView()}{char} {text.substr(20, 16)}
        </Text>
        {text.substr(16, 10)}
      </TestText>
    );
  }
}, {
  title: 'nested 2',
  render: (text, char) => {
    return (
      <TestText>
        {text.substr(0, 5)}
        <Text>
          <Text>
              {text.substr(5, 15)} {char}{inlineView()}{char} {text.substr(20, 16)}
          </Text>
        </Text>
        {text.substr(16, 10)}
      </TestText>
    );
  }
},];

function withFallback(value, fallback) {
  return value === undefined ? fallback : value;
}

function deepEquals(a, b) {
  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray || bIsArray) {
    if (aIsArray !== bIsArray) return false;
    if (aIsArray.length !== bIsArray.length) return false;

    return a.every((aItem, i) => deepEquals(aItem, b[i]));
  }

  const aIsObject = typeof a === 'object';
  const bIsObject = typeof b === 'object';
  if (aIsObject || bIsObject) {
    if (aIsObject !== bIsObject) return false;
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    return Object.keys(a).every(key => deepEquals(a[key], b[key]));
  }

  return a === b;
}

function createNewExpected(expected, actual) {
  const newExpected = [];
  let newExpectedStringified = '{\n';

  Object.keys(actual)
    .sort((key0, key1) => {
      return actual[key0].index - actual[key1].index;
    })
    .forEach((title) => {
      const entry = Object.assign({}, expected[title], {
        output: actual[title].payload
      });
      newExpected[title] = entry;
      newExpectedStringified += `/* ${actual[title].index} */ "${title}": ${JSON.stringify(entry, null, 2)},\n`;
    });
  newExpectedStringified += '}\n';

  return {
    newExpected,
    newExpectedStringified,
  };
}

// Only render last test. Useful when adding new tests.
// testCases = testCases.slice(testCases.length - 1, testCases.length);

type Props = $ReadOnly<{|
  onAssertFail?: (msg: string) => void,
  onTestsComplete?: () => void,
|}>;

type State = {|
  testsComplete: boolean,
  succeeded: number|undefined,
  failed: number|undefined,
  disabled: number|undefined,
|};

export default class InlineViewSnapshotTest extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      testsComplete: false,
      succeeded: undefined,
      failed: undefined,
      disabled: undefined
    };

    // Populated by the `_onInlineViewLayout` callback
    this._actual = {};

    let count = 0;
    this._allTestCases = [ltrText, rtlText].flatMap(text => {
      return [ltrChar, rtlChar].flatMap(char => {
        return testCases.flatMap(test => {
          const paragraphIsRtl = text === rtlText;
          const inlineViewIsRtl = char === rtlChar;
          let fullTitle = (
            (paragraphIsRtl === inlineViewIsRtl ? '' : 'Bidi ') +
            (paragraphIsRtl ? 'RTL: ' : 'LTR: ') +
            test.title
          );
          const index = count;
          ++count;
          return () => {
            return (
              <View key={fullTitle} collapsable={false}>
                <Text allowFontScaling={false} style={{fontSize: 15, marginTop: 10}}>
                  {index} {fullTitle}
                </Text>
                
                {React.cloneElement(
                  test.render(text, char), {
                    onInlineViewLayout: (eventObject) => {
                      this._onInlineViewLayout(index, fullTitle, eventObject.nativeEvent)
                    }
                  }
                )}
              </View>
            );
          };
        });
      });
    });
  }

  _assertFail(msg) {
    if (this.props.onAssertFail) {
      this.props.onAssertFail(msg);
    } else {
      console.error('ASSERT FAILED: ' + msg);
    }
  }
  
  _onInlineViewLayout(index, key, e) {
    if (this._actual[key]) {
      this._assertFail(`Test '${key}' completed multiple times`);
      return;
    }

    this._actual[key] = {
      payload: e.inlineViews,
      index: index
    };

    const numOfCompletedTests = Object.keys(this._actual).length;
    if (numOfCompletedTests === this._allTestCases.length) {
      let {newExpected, newExpectedStringified} = createNewExpected(expected, this._actual);
      console.log(newExpectedStringified + '\n');

      // Analyze the test results
      //

      let succeeded = 0;
      let failed = 0;
      let disabled = 0;
      const changes = [];
      
      Object.keys(this._actual).forEach((title) => {
        const fullTitle = this._actual[title].index + ' ' + title;

        if (!expected[title]) {
          ++failed;
          changes.push(fullTitle);
          this._assertFail(`Test added: '${fullTitle}'.`);
        } else if (!newExpected[title]) {
          ++failed;
          changes.push(fullTitle);
          this._assertFail(`Test removed: '${fullTitle}'.`);
        } else if (expected[title].disabled) {
          ++disabled;
        } else if (!deepEquals(expected[title].output, newExpected[title].output)) {
          ++failed;
          changes.push(fullTitle);
          this._assertFail(
            `Test failed: '${fullTitle}'` +
            '\nExpected: ' + JSON.stringify(expected[title].output, null, 2) +
            '\nActual: ' + JSON.stringify(newExpected[title].output, null, 2)
          );
        } else {
          ++succeeded;
        }
      });

      console.log(changes.length + ' changes:');
      changes.forEach(title => console.log('  ' + title));

      // Signal that the tests are done
      //
      
      this.setState({
        testsComplete: true,
        succeeded,
        disabled,
        failed,
      });
      if (this.props.onTestsComplete) {
        this.props.onTestsComplete();
      }
    }
  }

  _renderAllTests() {
    const testsState = (
      !this.state.testsComplete ? <Text>Running tests...</Text> :
      this.state.failed > 0 ? <Text style={{color: 'red'}}>Test run failed</Text> :
      <Text>Test run succeeded</Text>
    );

    return (
      <ScrollView style={{ marginTop: 20, width: 300 }}>
        {testsState}
        <Text>    Total: {withFallback(this._allTestCases.length, '?')}</Text>
        <Text>    Succeeded: {withFallback(this.state.succeeded, '?')}</Text>
        <Text>    Failed: {withFallback(this.state.failed, '?')}</Text>
        <Text>    Disabled: {withFallback(this.state.disabled, '?')}</Text>
        <Text>See the JavaScript console for more details.</Text>
        {this._allTestCases.map(render => render(this))}
      </ScrollView>
    );
  }

  // Useful for debugging individual test cases
  _renderTestCaseAtIndex(index) {
    return (
    <ScrollView style={{ marginTop: 20, width: 300 }}>
      {this._allTestCases[index](this)}
    </ScrollView>
    );
  }

  render() {
    // return this._renderTestCaseAtIndex(5);
    return this._renderAllTests();
  }
}
