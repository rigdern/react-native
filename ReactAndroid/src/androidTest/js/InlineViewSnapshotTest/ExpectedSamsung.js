/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default expected = {
  "0 LTR: basic": {
    "output": [
      {
        "bottom": 45,
        "right": 165.75,
        "left": 155.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "1 LTR: multiple views": {
    "output": [
      {
        "bottom": 45,
        "right": 165.75,
        "left": 155.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      },
      {
        "bottom": 45,
        "right": 266.5,
        "left": 256.5,
        "index": 37,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "2 LTR: multiline": {
    "output": [
      {
        "bottom": 64,
        "right": 169.75,
        "left": 159.75,
        "index": 67,
        "top": 54,
        "visibility": "visible"
      }
    ]
  },
  "3 LTR: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  "4 LTR: not truncated by numberOfLines={1}": {
    "output": [
      {
        "bottom": 45.5,
        "right": 170.75,
        "left": 160.75,
        "index": 23,
        "top": 35.5,
        "visibility": "visible"
      }
    ]
  },
  "5 LTR: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  "6 LTR: not truncated by numberOfLines={2}": {
    "output": [
      {
        "bottom": 64.5,
        "right": 153.25,
        "left": 143.25,
        "index": 65,
        "top": 54.5,
        "visibility": "visible"
      }
    ]
  },
  "7 LTR: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  "8 LTR: inline view is last character on first line": {
    "output": [
      {
        "bottom": 62.75,
        "right": 211.75,
        "left": 201.75,
        "index": 29,
        "top": 52.75,
        "visibility": "visible"
      }
    ]
  },
  "9 LTR: inline view is last character on second line": {
    "output": [
      {
        "bottom": 81.75,
        "right": 194.5,
        "left": 184.5,
        "index": 71,
        "top": 71.75,
        "visibility": "visible"
      }
    ]
  },
  "10 LTR: nested": {
    "output": [
      {
        "bottom": 45,
        "right": 165.75,
        "left": 155.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "11 LTR: nested 2": {
    "output": [
      {
        "bottom": 45,
        "right": 165.75,
        "left": 155.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "12 Bidi LTR: basic": {
    "output": [
      {
        "bottom": 45,
        "right": 163.25,
        "left": 153.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "13 Bidi LTR: multiple views": {
    "output": [
      {
        "bottom": 45,
        "right": 163.25,
        "left": 153.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      },
      {
        "bottom": 45,
        "right": 259,
        "left": 249,
        "index": 37,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "14 Bidi LTR: multiline": {
    "output": [
      {
        "bottom": 64,
        "right": 167.25,
        "left": 157.25,
        "index": 67,
        "top": 54,
        "visibility": "visible"
      }
    ]
  },
  "15 Bidi LTR: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  "16 Bidi LTR: not truncated by numberOfLines={1}": {
    "output": [
      {
        "bottom": 63.25,
        "right": 168.25,
        "left": 158.25,
        "index": 23,
        "top": 53.25,
        "visibility": "visible"
      }
    ]
  },
  "17 Bidi LTR: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  "18 Bidi LTR: not truncated by numberOfLines={2}": {
    "output": [
      {
        "bottom": 82.25,
        "right": 150.75,
        "left": 140.75,
        "index": 65,
        "top": 72.25,
        "visibility": "visible"
      }
    ]
  },
  "19 Bidi LTR: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  "20 Bidi LTR: inline view is last character on first line": {
    "output": [
      {
        "bottom": 62.75,
        "right": 209.25,
        "left": 199.25,
        "index": 29,
        "top": 52.75,
        "visibility": "visible"
      }
    ]
  },
  "21 Bidi LTR: inline view is last character on second line": {
    "output": [
      {
        "bottom": 81.75,
        "right": 192,
        "left": 182,
        "index": 71,
        "top": 71.75,
        "visibility": "visible"
      }
    ]
  },
  "22 Bidi LTR: nested": {
    "output": [
      {
        "bottom": 45,
        "right": 163.25,
        "left": 153.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "23 Bidi LTR: nested 2": {
    "output": [
      {
        "bottom": 45,
        "right": 163.25,
        "left": 153.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "24 Bidi RTL: basic": {
    "output": [
      {
        "bottom": 45,
        "right": 190.25,
        "left": 180.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "25 Bidi RTL: multiple views": {
    "output": [
      {
        "bottom": 45,
        "right": 190.25,
        "left": 180.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      },
      {
        "bottom": 45,
        "right": 100.75,
        "left": 90.75,
        "index": 37,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "26 Bidi RTL: multiline": {
    "output": [
      {
        "bottom": 64,
        "right": 226.25,
        "left": 216.25,
        "index": 67,
        "top": 54,
        "visibility": "visible"
      }
    ]
  },
  "27 Bidi RTL: truncated by numberOfLines={1}": {
    "INCORRECTISH": true,
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  "28 Bidi RTL: not truncated by numberOfLines={1}": {
    "output": [
      {
        "bottom": 63.25,
        "right": 182,
        "left": 172,
        "index": 23,
        "top": 53.25,
        "visibility": "visible"
      }
    ]
  },
  "29 Bidi RTL: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  "30 Bidi RTL: not truncated by numberOfLines={2}": {
    "output": [
      {
        "bottom": 82.25,
        "right": 235.75,
        "left": 225.75,
        "index": 65,
        "top": 72.25,
        "visibility": "visible"
      }
    ]
  },
  "31 Bidi RTL: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  "32 Bidi RTL: inline view is last character on first line": {
    "output": [
      {
        "bottom": 62.75,
        "right": 155.5,
        "left": 145.5,
        "index": 29,
        "top": 52.75,
        "visibility": "visible"
      }
    ]
  },
  "33 Bidi RTL: inline view is last character on second line": {
    "output": [
      {
        "bottom": 81.75,
        "right": 201,
        "left": 191,
        "index": 71,
        "top": 71.75,
        "visibility": "visible"
      }
    ]
  },
  "34 Bidi RTL: nested": {
    "output": [
      {
        "bottom": 45,
        "right": 190.25,
        "left": 180.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "35 Bidi RTL: nested 2": {
    "output": [
      {
        "bottom": 45,
        "right": 190.25,
        "left": 180.25,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "36 RTL: basic": {
    "output": [
      {
        "bottom": 45,
        "right": 192.75,
        "left": 182.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "37 RTL: multiple views": {
    "output": [
      {
        "bottom": 45,
        "right": 192.75,
        "left": 182.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      },
      {
        "bottom": 45,
        "right": 108.25,
        "left": 98.25,
        "index": 37,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "38 RTL: multiline": {
    "output": [
      {
        "bottom": 64,
        "right": 228.75,
        "left": 218.75,
        "index": 67,
        "top": 54,
        "visibility": "visible"
      }
    ]
  },
  "39 RTL: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  "40 RTL: not truncated by numberOfLines={1}": {
    "output": [
      {
        "bottom": 45.5,
        "right": 184.5,
        "left": 174.5,
        "index": 23,
        "top": 35.5,
        "visibility": "visible"
      }
    ]
  },
  "41 RTL: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  "42 RTL: not truncated by numberOfLines={2}": {
    "output": [
      {
        "bottom": 64.5,
        "right": 238.25,
        "left": 228.25,
        "index": 65,
        "top": 54.5,
        "visibility": "visible"
      }
    ]
  },
  "43 RTL: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  "44 RTL: inline view is last character on first line": {
    "output": [
      {
        "bottom": 62.75,
        "right": 158,
        "left": 148,
        "index": 29,
        "top": 52.75,
        "visibility": "visible"
      }
    ]
  },
  "45 RTL: inline view is last character on second line": {
    "output": [
      {
        "bottom": 81.75,
        "right": 203.5,
        "left": 193.5,
        "index": 71,
        "top": 71.75,
        "visibility": "visible"
      }
    ]
  },
  "46 RTL: nested": {
    "output": [
      {
        "bottom": 45,
        "right": 192.75,
        "left": 182.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
  "47 RTL: nested 2": {
    "output": [
      {
        "bottom": 45,
        "right": 192.75,
        "left": 182.75,
        "index": 22,
        "top": 35,
        "visibility": "visible"
      }
    ]
  },
};