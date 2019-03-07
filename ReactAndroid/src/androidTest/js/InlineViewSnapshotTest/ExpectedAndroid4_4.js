/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default expected = {
  /* 0 */ "LTR: basic": {
    "output": [
      {
        "bottom": 46,
        "right": 165,
        "top": 36,
        "left": 155,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 1 */ "LTR: multiple views": {
    "output": [
      {
        "bottom": 46,
        "right": 165,
        "top": 36,
        "left": 155,
        "index": 22,
        "visibility": "visible"
      },
      {
        "bottom": 46,
        "right": 265,
        "top": 36,
        "left": 255,
        "index": 37,
        "visibility": "visible"
      }
    ]
  },
  /* 2 */ "LTR: multiline": {
    "output": [
      {
        "bottom": 65,
        "right": 169,
        "top": 55,
        "left": 159,
        "index": 67,
        "visibility": "visible"
      }
    ]
  },
  /* 3 */ "LTR: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  /* 4 */ "LTR: not truncated by numberOfLines={1}": {
    "output": [
      {
        "bottom": 46,
        "right": 170,
        "top": 36,
        "left": 160,
        "index": 23,
        "visibility": "visible"
      }
    ]
  },
  /* 5 */ "LTR: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  /* 6 */ "LTR: not truncated by numberOfLines={2}": {
    "output": [
      {
        "bottom": 65,
        "right": 152,
        "top": 55,
        "left": 142,
        "index": 65,
        "visibility": "visible"
      }
    ]
  },
  /* 7 */ "LTR: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  /* 8 */ "LTR: inline view is last character on first line": {
    "output": [
      {
        "bottom": 64,
        "right": 212,
        "top": 54,
        "left": 202,
        "index": 29,
        "visibility": "visible"
      }
    ]
  },
  /* 9 */ "LTR: inline view is last character on second line": {
    "output": [
      {
        "bottom": 83,
        "right": 193,
        "top": 73,
        "left": 183,
        "index": 71,
        "visibility": "visible"
      }
    ]
  },
  /* 10 */ "LTR: nested": {
    "output": [
      {
        "bottom": 46,
        "right": 165,
        "top": 36,
        "left": 155,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 11 */ "LTR: nested 2": {
    "output": [
      {
        "bottom": 46,
        "right": 165,
        "top": 36,
        "left": 155,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 12 */ "Bidi LTR: basic": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 174,
        "top": 36,
        "left": 164,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 13 */ "Bidi LTR: multiple views": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 174,
        "top": 36,
        "left": 164,
        "index": 22,
        "visibility": "visible"
      },
      {
        "bottom": 46,
        "right": 272,
        "top": 36,
        "left": 262,
        "index": 37,
        "visibility": "visible"
      }
    ]
  },
  /* 14 */ "Bidi LTR: multiline": {
    "disabled": true,
    "output": [
      {
        "bottom": 65,
        "right": 178,
        "top": 55,
        "left": 168,
        "index": 67,
        "visibility": "visible"
      }
    ]
  },
  /* 15 */ "Bidi LTR: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  /* 16 */ "Bidi LTR: not truncated by numberOfLines={1}": {
    "disabled": true,
    "output": [
      {
        "bottom": 64,
        "right": 179,
        "top": 54,
        "left": 169,
        "index": 23,
        "visibility": "visible"
      }
    ]
  },
  /* 17 */ "Bidi LTR: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  /* 18 */ "Bidi LTR: not truncated by numberOfLines={2}": {
    "disabled": true,
    "output": [
      {
        "bottom": 83,
        "right": 161,
        "top": 73,
        "left": 151,
        "index": 65,
        "visibility": "visible"
      }
    ]
  },
  /* 19 */ "Bidi LTR: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  /* 20 */ "Bidi LTR: inline view is last character on first line": {
    "output": [
      {
        "bottom": 64,
        "right": 210,
        "top": 54,
        "left": 200,
        "index": 29,
        "visibility": "visible"
      }
    ]
  },
  /* 21 */ "Bidi LTR: inline view is last character on second line": {
    "output": [
      {
        "bottom": 83,
        "right": 192,
        "top": 73,
        "left": 182,
        "index": 71,
        "visibility": "visible"
      }
    ]
  },
  /* 22 */ "Bidi LTR: nested": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 174,
        "top": 36,
        "left": 164,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 23 */ "Bidi LTR: nested 2": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 174,
        "top": 36,
        "left": 164,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 24 */ "Bidi RTL: basic": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 164,
        "top": 36,
        "left": 154,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 25 */ "Bidi RTL: multiple views": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 164,
        "top": 36,
        "left": 154,
        "index": 22,
        "visibility": "visible"
      },
      {
        "bottom": 46,
        "right": 66,
        "top": 36,
        "left": 56,
        "index": 37,
        "visibility": "visible"
      }
    ]
  },
  /* 26 */ "Bidi RTL: multiline": {
    "disabled": true,
    "output": [
      {
        "bottom": 65,
        "right": 206,
        "top": 55,
        "left": 196,
        "index": 67,
        "visibility": "visible"
      }
    ]
  },
  /* 27 */ "Bidi RTL: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  /* 28 */ "Bidi RTL: not truncated by numberOfLines={1}": {
    "disabled": true,
    "output": [
      {
        "bottom": 64,
        "right": 154,
        "top": 54,
        "left": 144,
        "index": 23,
        "visibility": "visible"
      }
    ]
  },
  /* 29 */ "Bidi RTL: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  /* 30 */ "Bidi RTL: not truncated by numberOfLines={2}": {
    "disabled": true,
    "output": [
      {
        "bottom": 83,
        "right": 216,
        "top": 73,
        "left": 206,
        "index": 65,
        "visibility": "visible"
      }
    ]
  },
  /* 31 */ "Bidi RTL: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  /* 32 */ "Bidi RTL: inline view is last character on first line": {
    "output": [
      {
        "bottom": 64,
        "right": 135,
        "top": 54,
        "left": 125,
        "index": 29,
        "visibility": "visible"
      }
    ]
  },
  /* 33 */ "Bidi RTL: inline view is last character on second line": {
    "output": [
      {
        "bottom": 83,
        "right": 187,
        "top": 73,
        "left": 177,
        "index": 71,
        "visibility": "visible"
      }
    ]
  },
  /* 34 */ "Bidi RTL: nested": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 164,
        "top": 36,
        "left": 154,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 35 */ "Bidi RTL: nested 2": {
    "disabled": true,
    "output": [
      {
        "bottom": 46,
        "right": 164,
        "top": 36,
        "left": 154,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 36 */ "RTL: basic": {
    "output": [
      {
        "bottom": 46,
        "right": 175,
        "top": 36,
        "left": 165,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 37 */ "RTL: multiple views": {
    "output": [
      {
        "bottom": 46,
        "right": 175,
        "top": 36,
        "left": 165,
        "index": 22,
        "visibility": "visible"
      },
      {
        "bottom": 46,
        "right": 80,
        "top": 36,
        "left": 70,
        "index": 37,
        "visibility": "visible"
      }
    ]
  },
  /* 38 */ "RTL: multiline": {
    "output": [
      {
        "bottom": 65,
        "right": 217,
        "top": 55,
        "left": 207,
        "index": 67,
        "visibility": "visible"
      }
    ]
  },
  /* 39 */ "RTL: truncated by numberOfLines={1}": {
    "output": [
      {
        "index": 58,
        "visibility": "gone"
      }
    ]
  },
  /* 40 */ "RTL: not truncated by numberOfLines={1}": {
    "output": [
      {
        "bottom": 64,
        "right": 165,
        "top": 54,
        "left": 155,
        "index": 23,
        "visibility": "visible"
      }
    ]
  },
  /* 41 */ "RTL: truncated by numberOfLines={2}": {
    "output": [
      {
        "index": 125,
        "visibility": "gone"
      }
    ]
  },
  /* 42 */ "RTL: not truncated by numberOfLines={2}": {
    "output": [
      {
        "bottom": 83,
        "right": 228,
        "top": 73,
        "left": 218,
        "index": 65,
        "visibility": "visible"
      }
    ]
  },
  /* 43 */ "RTL: truncated by <Text> height": {
    "output": [
      {
        "index": 67,
        "visibility": "gone"
      }
    ]
  },
  /* 44 */ "RTL: inline view is last character on first line": {
    "output": [
      {
        "bottom": 64,
        "right": 136,
        "top": 54,
        "left": 126,
        "index": 29,
        "visibility": "visible"
      }
    ]
  },
  /* 45 */ "RTL: inline view is last character on second line": {
    "output": [
      {
        "bottom": 83,
        "right": 188,
        "top": 73,
        "left": 178,
        "index": 71,
        "visibility": "visible"
      }
    ]
  },
  /* 46 */ "RTL: nested": {
    "output": [
      {
        "bottom": 46,
        "right": 175,
        "top": 36,
        "left": 165,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
  /* 47 */ "RTL: nested 2": {
    "output": [
      {
        "bottom": 46,
        "right": 175,
        "top": 36,
        "left": 165,
        "index": 22,
        "visibility": "visible"
      }
    ]
  },
};