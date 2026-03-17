!function () {
    'use strict';
    var _0x3a0bc3, _0x18e875, _0x37ff6c, _0x3665df = Laya['ClassUtils']['regClass'];
    !function (_0x43396d) {
        class _0x59d2c3 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x59d2c3['uiView']);
            }
        }
        _0x59d2c3['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x1c
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x2a6,
                        'scaleY': 0.9,
                        'scaleX': 0.9,
                        'height': 0x384,
                        'centerY': -0x41,
                        'centerX': 0x0
                    },
                    'compId': 0x4,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'top': 0x0,
                                'skin': 'game/chess' + '_mid_bg.pn' + 'g',
                                'sizeGrid': '50,50,50,5' + '0',
                                'right': 0x0,
                                'left': 0x0,
                                'bottom': 0x0
                            },
                            'compId': 0x5
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'var': 'closeBtn',
                                'top': -0x30,
                                'stateNum': 0x1,
                                'skin': 'game/close' + '.png',
                                'right': 0x0
                            },
                            'compId': 0x7
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': -0xa0,
                                'skin': 'sign/sign_' + 'title.png',
                                'centerX': 0x0
                            },
                            'compId': 0x6
                        },
                        {
                            'type': 'List',
                            'props': {
                                'y': 0x37,
                                'width': 0x288,
                                'var': 'signList',
                                'spaceY': 0x18,
                                'spaceX': 0xc,
                                'repeatY': 0x2,
                                'repeatX': 0x3,
                                'height': 0x1b8,
                                'centerX': 0x0
                            },
                            'compId': 0x9,
                            'child': [{
                                    'type': 'SignItemVi' + 'ew',
                                    'props': {
                                        'renderType': 'render',
                                        'runtime': 'views/item' + '/DaySignIt' + 'emView.ts'
                                    },
                                    'compId': 0xa
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x1fc,
                                'width': 0x281,
                                'var': 'sevenBox',
                                'height': 0xca,
                                'centerX': 0x2
                            },
                            'compId': 0xb,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'top': 0x0,
                                        'skin': 'sign/seven' + '_bg.png',
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0xc
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x15,
                                        'x': 0x38,
                                        'text': 'DAY\x207',
                                        'fontSize': 0x46,
                                        'color': '#FFFFFF',
                                        'bold': !0x0
                                    },
                                    'compId': 0xd
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'top': -0xa,
                                        'skin': 'sign/1.png',
                                        'right': -0xa,
                                        'left': -0xa,
                                        'bottom': -0xa
                                    },
                                    'compId': 0xe
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': -0x27,
                                        'x': -0xa,
                                        'var': 'skinBox'
                                    },
                                    'compId': 0xf,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x87,
                                                'x': 46.75,
                                                'skin': 'sign/seven' + 't_tip.png'
                                            },
                                            'compId': 0x10
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x79,
                                                'x': 0x19b,
                                                'var': 'skinImageV' + 'iew',
                                                'skin': 'x/s_skin27' + '.png',
                                                'scaleY': 0.5,
                                                'scaleX': 0.5,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x11
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x21,
                                        'x': 0x106,
                                        'var': 'coinBox'
                                    },
                                    'compId': 0x15,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x41,
                                                'x': 128.361328125,
                                                'skin': 'game/gold2' + '.png',
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x16
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x25,
                                                'x': 0xc2,
                                                'var': 'coinLabel',
                                                'text': 'x100',
                                                'fontSize': 0x46,
                                                'color': '#FFFFFF',
                                                'bold': !0x0
                                            },
                                            'compId': 0x17
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'sevenSigne' + 'dView',
                                        'skin': 'sign/sign_' + 'item_get.p' + 'ng',
                                        'centerY': -0x1,
                                        'centerX': 0x49,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0x18
                                }
                            ]
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'y': 0x319,
                                'width': 0x190,
                                'var': 'signBtn',
                                'stateNum': 0x1,
                                'skin': 'game/r_btn' + '.png',
                                'sizeGrid': '0,60,0,60',
                                'labelStrokeColor': '#854428',
                                'labelStroke': 0x6,
                                'labelSize': 0x32,
                                'labelColors': '#FFFFFF,#F' + 'FFFFF,#FFF' + 'FFF,#FFFFF' + 'F,#FFFFFF',
                                'labelBold': !0x0,
                                'label': 'CLAIM',
                                'height': 0x87,
                                'centerX': 0x0,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x19,
                            'child': []
                        }
                    ]
                }
            ],
            'animations': [
                {
                    'nodes': [{
                            'target': 0xe,
                            'keyframes': {
                                'skin': [
                                    {
                                        'value': 'sign/1.png',
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x1,
                                        'target': 0xe,
                                        'key': 'skin',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 'sign/2.png',
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x1,
                                        'target': 0xe,
                                        'key': 'skin',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 'sign/3.png',
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x1,
                                        'target': 0xe,
                                        'key': 'skin',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 'sign/4.png',
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x1,
                                        'target': 0xe,
                                        'key': 'skin',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 'sign/5.png',
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x1,
                                        'target': 0xe,
                                        'key': 'skin',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 'sign/5.png',
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x1,
                                        'target': 0xe,
                                        'key': 'skin',
                                        'index': 0x16
                                    }
                                ]
                            }
                        }],
                    'name': 'ani1',
                    'id': 0x1,
                    'frameRate': 0x18,
                    'action': 0x0
                },
                {
                    'nodes': [{
                            'target': 0x19,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0x12
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleY',
                                        'index': 0x1e
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0x12
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x19,
                                        'key': 'scaleX',
                                        'index': 0x1e
                                    }
                                ]
                            }
                        }],
                    'name': 'ani2',
                    'id': 0x2,
                    'frameRate': 0x18,
                    'action': 0x0
                }
            ],
            'loadList': [
                'game/chess' + '_mid_bg.pn' + 'g',
                'game/close' + '.png',
                'sign/sign_' + 'title.png',
                'sign/seven' + '_bg.png',
                'sign/1.png',
                'sign/seven' + 't_tip.png',
                'x/s_skin27' + '.png',
                'game/gold2' + '.png',
                'sign/sign_' + 'item_get.p' + 'ng',
                'game/r_btn' + '.png',
                'common/ic_' + 'vedio1.png',
                'sign/2.png',
                'sign/3.png',
                'sign/4.png',
                'sign/5.png'
            ],
            'loadList3D': []
        }, _0x43396d['DaySignVie' + 'wUI'] = _0x59d2c3, _0x3665df('ui.DaySign' + 'ViewUI', _0x59d2c3);
        class _0x813bbf extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x813bbf['uiView']);
            }
        }
        _0x813bbf['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2ee,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x536,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.7
                    },
                    'compId': 0x3
                },
                {
                    'type': 'Box',
                    'props': {
                        'var': 'hitInfoVie' + 'w',
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x11,
                    'child': [
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0x212,
                                'var': 'dg',
                                'height': 0x1cc,
                                'centerY': 0x0,
                                'centerX': 0x0,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x37
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'top': 0xdb,
                                'skin': 'common/big' + '_title.png',
                                'centerX': -0x6
                            },
                            'compId': 0x4
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': 0x15e,
                                'x': 0x8e,
                                'texture': 'common/din' + 'gdandaojis' + 'hi.png'
                            },
                            'compId': 0x24
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x156,
                                'x': 0x190,
                                'var': 'coundDownI' + 'mg',
                                'skin': 'common/num' + '_5.png'
                            },
                            'compId': 0x25
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'width': 0x167,
                                'skin': 'egg/board.' + 'png',
                                'left': 0xbe,
                                'centerY': 0x147,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x6,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'width': 0x167,
                                        'texture': 'egg/bar.pn' + 'g',
                                        'height': 0x33
                                    },
                                    'compId': 0x7,
                                    'child': [{
                                            'type': 'Box',
                                            'props': {
                                                'width': 0x167,
                                                'var': 'maskView',
                                                'top': 0x0,
                                                'renderType': 'mask',
                                                'left': 0x0,
                                                'height': 0x33
                                            },
                                            'compId': 0x9
                                        }]
                                }]
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x2d0,
                        'var': 'hitActionV' + 'iew',
                        'right': 0x0,
                        'left': 0x0,
                        'height': 0x158,
                        'bottom': -0xa
                    },
                    'compId': 0x10,
                    'child': [
                        {
                            'type': 'Button',
                            'props': {
                                'y': 0x86,
                                'x': 0x177,
                                'width': 0x204,
                                'var': 'hitBtn',
                                'stateNum': 0x1,
                                'skin': 'game/r_btn' + '.png',
                                'sizeGrid': '0,60,0,60',
                                'labelSize': 0x41,
                                'labelColors': '#84442a,#8' + '4442a,#844' + '42a,#84442' + 'a',
                                'labelBold': !0x0,
                                'label': '疯狂搅拌',
                                'height': 0x96,
                                'centerX': 0x0,
                                'bottom': 0x7d,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x26,
                            'child': [
                                {
                                    'type': 'Script',
                                    'props': {
                                        'playEvent': 'mousedown',
                                        'runtime': 'ui.effect.' + 'BtnScaleDo' + 'wnUI'
                                    },
                                    'compId': 0x27
                                },
                                {
                                    'type': 'Script',
                                    'props': {
                                        'playEvent': 'mouseup',
                                        'runtime': 'ui.effect.' + 'BtnScaleUp' + 'UI'
                                    },
                                    'compId': 0x28
                                }
                            ]
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': 0x94,
                                'x': 510.5,
                                'texture': 'egg/ico_ha' + 'nd.png'
                            },
                            'compId': 0xd
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': -0x1a,
                                'x': 0x224,
                                'texture': 'egg/ico_pr' + 'ess_label.' + 'png'
                            },
                            'compId': 0xe
                        }
                    ]
                }
            ],
            'animations': [
                {
                    'nodes': [
                        {
                            'target': 0xd,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x2
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x5
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x2
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x5
                                    }
                                ]
                            }
                        },
                        {
                            'target': 0xe,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xe,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xe,
                                        'key': 'scaleY',
                                        'index': 0x2
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xe,
                                        'key': 'scaleY',
                                        'index': 0x5
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xe,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xe,
                                        'key': 'scaleX',
                                        'index': 0x2
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xe,
                                        'key': 'scaleX',
                                        'index': 0x5
                                    }
                                ]
                            }
                        }
                    ],
                    'name': 'ani1',
                    'id': 0x1,
                    'frameRate': 0xc,
                    'action': 0x0
                },
                {
                    'nodes': [{
                            'target': 0x13,
                            'keyframes': {
                                'rotation': [
                                    {
                                        'value': 0x0,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x13,
                                        'key': 'rotation',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0x168,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x13,
                                        'key': 'rotation',
                                        'index': 0xa
                                    }
                                ]
                            }
                        }],
                    'name': 'ani2',
                    'id': 0x2,
                    'frameRate': 0xc,
                    'action': 0x0
                },
                {
                    'nodes': [{
                            'target': 0x17,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x17,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.8,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x17,
                                        'key': 'scaleY',
                                        'index': 0x14
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x17,
                                        'key': 'scaleY',
                                        'index': 0x28
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x17,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.8,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x17,
                                        'key': 'scaleX',
                                        'index': 0x14
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x17,
                                        'key': 'scaleX',
                                        'index': 0x28
                                    }
                                ]
                            }
                        }],
                    'name': 'ani4',
                    'id': 0x4,
                    'frameRate': 0x18,
                    'action': 0x0
                },
                {
                    'nodes': [],
                    'name': 'ani5',
                    'id': 0x5,
                    'frameRate': 0x18,
                    'action': 0x0
                }
            ],
            'loadList': [
                'common/big' + '_title.png',
                'common/din' + 'gdandaojis' + 'hi.png',
                'common/num' + '_5.png',
                'egg/board.' + 'png',
                'egg/bar.pn' + 'g',
                'game/r_btn' + '.png',
                'egg/ico_ha' + 'nd.png',
                'egg/ico_pr' + 'ess_label.' + 'png'
            ],
            'loadList3D': []
        }, _0x43396d['EggViewUI'] = _0x813bbf, _0x3665df('ui.EggView' + 'UI', _0x813bbf);
        class _0x30e821 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x30e821['uiView']);
            }
        }
        _0x30e821['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'name': 'gameBox',
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'top': 0x0,
                        'right': 0x0,
                        'name': 'UI',
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0xe,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'visible': !0x0,
                                'top': 0x0,
                                'skin': 'common/m_b' + 'g2.png',
                                'right': 0x0,
                                'name': 'bg',
                                'left': 0x0,
                                'bottom': 0x0
                            },
                            'compId': 0x59
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x1,
                                'x': 0x0,
                                'visible': !0x1,
                                'var': 'ResultBox',
                                'top': 0x1,
                                'right': 0x0,
                                'left': 0x0,
                                'bottom': 0x0
                            },
                            'compId': 0x1e3,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'top': 0x0,
                                        'skin': 'common/m_b' + 'g2.png',
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x1e4
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x140,
                                        'var': 'NextBtn',
                                        'skin': 'game/m_btn' + '2.png',
                                        'height': 0x64,
                                        'centerY': 0x190,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x214,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x8,
                                                'x': 0xd,
                                                'width': 0x11f,
                                                'visible': !0x0,
                                                'var': 'NextLabel',
                                                'valign': 'middle',
                                                'text': 'CONTINUE',
                                                'height': 0x4d,
                                                'fontSize': 0x28,
                                                'font': 'Arial',
                                                'color': '#ffffff',
                                                'align': 'center'
                                            },
                                            'compId': 0x215
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x8,
                                                'x': 0xd,
                                                'visible': !0x1,
                                                'var': 'NextBox',
                                                'skin': 'game/chess' + 'brut.png'
                                            },
                                            'compId': 0x2cf,
                                            'child': [{
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x16,
                                                        'x': 0x7b,
                                                        'text': '幸运宝箱',
                                                        'fontSize': 0x28,
                                                        'color': '#ffffff',
                                                        'bold': !0x0
                                                    },
                                                    'compId': 0x2d0
                                                }]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xb,
                                                'x': 0x1e,
                                                'visible': !0x1,
                                                'var': 'StarBox'
                                            },
                                            'compId': 0x2d1,
                                            'child': [{
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x14,
                                                        'x': 0x3c,
                                                        'text': 'CHALLENGE',
                                                        'fontSize': 0x23,
                                                        'color': '#ffffff',
                                                        'bold': !0x0
                                                    },
                                                    'compId': 0x2d2
                                                }]
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'var': 'WinBox',
                                        'top': 0x1,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x203,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'top': 0x1,
                                                'skin': 'game/m_bg1' + '.png',
                                                'sizeGrid': '27,0,57,0',
                                                'runtime': 'views/runt' + 'ime/UIAdap' + 'ter.ts',
                                                'right': 0x0,
                                                'left': 0x0,
                                                'height': 0xdc
                                            },
                                            'compId': 0x204,
                                            'child': [
                                                {
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 75.5,
                                                        'left': 0x0,
                                                        'height': 0x43
                                                    },
                                                    'compId': 0x205,
                                                    'child': [
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0x12,
                                                                'x': 0x14,
                                                                'var': 'resultkey1',
                                                                'skin': 'game/m_gol' + 'd.png'
                                                            },
                                                            'compId': 0x206
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0x12,
                                                                'x': 0x4f,
                                                                'var': 'resultkey2',
                                                                'skin': 'game/m_gra' + 'y.png'
                                                            },
                                                            'compId': 0x207
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0x12,
                                                                'x': 0x8d,
                                                                'var': 'resultkey3',
                                                                'skin': 'game/m_gra' + 'y.png'
                                                            },
                                                            'compId': 0x208
                                                        }
                                                    ]
                                                },
                                                {
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 0x2a,
                                                        'width': 0x98,
                                                        'right': 0x21e,
                                                        'height': 0x43
                                                    },
                                                    'compId': 0x20b,
                                                    'child': [
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'y': 0xa,
                                                                'x': 0xa,
                                                                'skin': 'game/gold2' + '.png',
                                                                'scaleY': 0.5,
                                                                'scaleX': 0.5
                                                            },
                                                            'compId': 0x20c
                                                        },
                                                        {
                                                            'type': 'Label',
                                                            'props': {
                                                                'y': 0x11,
                                                                'x': 0x3f,
                                                                'width': 0x49,
                                                                'var': 'ResultGold',
                                                                'valign': 'middle',
                                                                'text': '275',
                                                                'height': 0x20,
                                                                'fontSize': 0x23,
                                                                'font': 'Arial',
                                                                'color': '#ffffff',
                                                                'align': 'center'
                                                            },
                                                            'compId': 0x20d
                                                        }
                                                    ]
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 75.5,
                                                        'x': 234.5,
                                                        'width': 0xfb,
                                                        'var': 'ResultLeve' + 'l',
                                                        'text': '关卡4',
                                                        'stroke': 0x3,
                                                        'height': 0x34,
                                                        'fontSize': 0x2d,
                                                        'font': 'Arial',
                                                        'color': '#ffffff',
                                                        'bold': !0x0,
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x209
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 142.5,
                                                        'x': 0x95,
                                                        'width': 0x1a6,
                                                        'var': 'WinTitle',
                                                        'valign': 'middle',
                                                        'text': 'WIN',
                                                        'stroke': 0x3,
                                                        'height': 0x47,
                                                        'fontSize': 0x46,
                                                        'font': 'Arial',
                                                        'color': '#ffffff',
                                                        'bold': !0x0,
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x20a
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'x': 0xd5,
                                                'width': 0xd6,
                                                'height': 0x36,
                                                'centerY': 0x12b
                                            },
                                            'compId': 0x310,
                                            'child': [
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'x': -0x27,
                                                        'width': 0xc8,
                                                        'var': 'OrderUpgra' + 'deTitle',
                                                        'valign': 'middle',
                                                        'text': '订单升级奖励',
                                                        'height': 0x36,
                                                        'fontSize': 0x23,
                                                        'color': '#f89808',
                                                        'centerY': 0x0,
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x311
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'x': 0xc7,
                                                        'width': 0xc8,
                                                        'var': 'OrderUpgra' + 'deGlod',
                                                        'valign': 'middle',
                                                        'height': 0x36,
                                                        'fontSize': 0x28,
                                                        'color': '#f89808',
                                                        'centerY': 0x2,
                                                        'align': 'left'
                                                    },
                                                    'compId': 0x312
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'x': 0xd4,
                                                'width': 0xd6,
                                                'height': 0x36,
                                                'centerY': 0x104
                                            },
                                            'compId': 0x201,
                                            'child': [
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'x': 0x0,
                                                        'width': 0xc8,
                                                        'var': 'ResultRank',
                                                        'valign': 'middle',
                                                        'text': '点评\x20S+',
                                                        'height': 0x36,
                                                        'fontSize': 0x23,
                                                        'color': '#f89808',
                                                        'centerY': 0x1,
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x202
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'x': 0xc7,
                                                        'width': 0xc8,
                                                        'var': 'ResultAddG' + 'old',
                                                        'valign': 'middle',
                                                        'text': '+300',
                                                        'height': 0x36,
                                                        'fontSize': 0x28,
                                                        'color': '#f89808',
                                                        'centerY': 0x2,
                                                        'align': 'left'
                                                    },
                                                    'compId': 0x258
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0x9f,
                                                'skin': 'game/m_gam' + 'epress.png',
                                                'centerY': 0xc8,
                                                'centerX': 0x0
                                            },
                                            'compId': 0x20e
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0xca,
                                                'width': 0xd2,
                                                'var': 'ResultImg',
                                                'skin': 'game/m_gam' + 'ePressGree' + 'n.png',
                                                'height': 0xe,
                                                'centerY': 0xcd
                                            },
                                            'compId': 0x20f
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'var': 'WinLevel3',
                                                'skin': 'game/m_rea' + 'dy1.png',
                                                'centerY': 0xcd,
                                                'centerX': -0x10
                                            },
                                            'compId': 0x212
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'var': 'WinLevel4',
                                                'skin': 'game/m_rea' + 'dy1.png',
                                                'centerY': 0xcd,
                                                'centerX': 0x43
                                            },
                                            'compId': 0x213
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'var': 'WinLevel2',
                                                'skin': 'game/m_rea' + 'dy1.png',
                                                'centerY': 0xcd,
                                                'centerX': -0x61
                                            },
                                            'compId': 0x210
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'width': 0x54,
                                                'var': 'WinLevel5',
                                                'height': 0x51,
                                                'centerY': 0xca,
                                                'centerX': 0xa4
                                            },
                                            'compId': 0x2be,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0x13,
                                                        'x': -0x11,
                                                        'var': 'WinLevel5l' + 'ight',
                                                        'skin': 'game/m_lig' + 'ht.png',
                                                        'scaleY': 0.6,
                                                        'scaleX': 0.6
                                                    },
                                                    'compId': 0x2c0
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x0,
                                                        'x': 0x0,
                                                        'width': 0x52,
                                                        'var': 'WinLevel5b' + 'ox',
                                                        'skin': 'game/chess' + 'brut.png',
                                                        'height': 0x4e
                                                    },
                                                    'compId': 0x2bf
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'var': 'LostBox',
                                        'top': 0x1,
                                        'right': 0x0,
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x256,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x128,
                                                'x': 0xe5,
                                                'var': 'ResultLost' + 'Match',
                                                'valign': 'middle',
                                                'text': '匹配:3%',
                                                'strokeColor': '#000000',
                                                'stroke': 0x5,
                                                'fontSize': 0x46,
                                                'font': 'Arial',
                                                'color': '#ffffff',
                                                'centerY': -0x135,
                                                'centerX': 0xc,
                                                'align': 'center'
                                            },
                                            'compId': 0x216
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x197,
                                                'x': 50.814453125,
                                                'width': 0x283,
                                                'var': 'showResult' + 'Box',
                                                'height': 0x246
                                            },
                                            'compId': 0x1f2
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'x': 0x168,
                                'width': 0x108,
                                'var': 'cupBox',
                                'name': 'cupBox',
                                'height': 0x119,
                                'centerX': 0x0,
                                'bottom': 0x1b6,
                                'anchorY': 0x1,
                                'anchorX': 0.5
                            },
                            'compId': 0x6c,
                            'child': [
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x11a,
                                        'x': 0x82,
                                        'width': 0x105,
                                        'visible': !0x0,
                                        'var': 'TeaImgBox',
                                        'height': 0x11a,
                                        'anchorY': 0x1,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0x88,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'var': 'TeaImg1',
                                                'scaleY': 0x1,
                                                'scaleX': 0x1,
                                                'pivotY': 0x157,
                                                'pivotX': 0xb0,
                                                'centerX': -0x1,
                                                'bottom': 0x0
                                            },
                                            'compId': 0x9a
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x115,
                                                'x': 0x85,
                                                'width': 0xf1,
                                                'var': 'NextTeaBox',
                                                'height': 0x119,
                                                'anchorY': 0x1,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x2bb
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'x': 0x0,
                                                'var': 'TeaMaskImg' + '1',
                                                'skin': 'game/w_0.p' + 'ng',
                                                'renderType': 'mask',
                                                'bottom': 0x0
                                            },
                                            'compId': 0x2c8
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'visible': !0x0,
                                        'var': 'cup',
                                        'skin': 'game/m_cup' + 'le.png',
                                        'centerY': 0x3,
                                        'centerX': -0x2
                                    },
                                    'compId': 0x27
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': -0x24,
                                        'x': -118.5,
                                        'visible': !0x0,
                                        'var': 'MoveTeaMas' + 'k',
                                        'skin': 'game/cupBG' + '.png',
                                        'rotation': 0x0
                                    },
                                    'compId': 0x2ca,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x2b,
                                                'x': 0x78,
                                                'width': 0x105,
                                                'visible': !0x1,
                                                'var': 'MoveTeaMas' + 'kImg',
                                                'skin': 'game/m_cup' + 'le.png',
                                                'height': 0x113
                                            },
                                            'compId': 0x2ce
                                        }]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0xf,
                                        'x': -12.5,
                                        'width': 0x11d,
                                        'visible': !0x1,
                                        'var': 'gaiziImg',
                                        'skin': 'x/s_skin1.' + 'png',
                                        'rotation': -0x14,
                                        'pivotY': 0xee,
                                        'height': 0xee
                                    },
                                    'compId': 0x1e1
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': -0x2ef,
                                        'x': -0xe4,
                                        'width': 0x2d0,
                                        'var': 'gameBox',
                                        'name': 'gameBox',
                                        'height': 0x500
                                    },
                                    'compId': 0x6a
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'var': 'MainBox',
                                'top': 0x0,
                                'right': 0x0,
                                'name': 'MainBox',
                                'left': 0x0,
                                'bottom': 0x0
                            },
                            'compId': 0x39,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'bg',
                                        'top': 0x0,
                                        'right': 0x0,
                                        'name': 'bg',
                                        'left': 0x0,
                                        'bottom': 0x0
                                    },
                                    'compId': 0x2e4
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'top': 0x1,
                                        'runtime': 'views/runt' + 'ime/UIAdap' + 'ter.ts',
                                        'right': 0x0,
                                        'left': 0x0
                                    },
                                    'compId': 0x106,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x33,
                                                'x': 0x92,
                                                'var': 'TeaImgBtn',
                                                'skin': 'game/m_go.' + 'png',
                                                'centerX': 0x0
                                            },
                                            'compId': 0x108
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': -0x1,
                                                'x': -0x1b,
                                                'var': 'keybox'
                                            },
                                            'compId': 0x111,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0xa1,
                                                        'x': 0x0,
                                                        'width': 0x82,
                                                        'skin': 'game/m_bg4' + '.png',
                                                        'sizeGrid': '22,0,70,0',
                                                        'height': 0x121
                                                    },
                                                    'compId': 0x100
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0xa1,
                                                        'x': 0x81,
                                                        'width': 0x82,
                                                        'skin': 'game/m_bg4' + '.png',
                                                        'sizeGrid': '13,0,70,0',
                                                        'height': 0x121
                                                    },
                                                    'compId': 0x101
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0xa1,
                                                        'x': 0x102,
                                                        'width': 0x82,
                                                        'skin': 'game/m_bg4' + '.png',
                                                        'sizeGrid': '22,0,70,0',
                                                        'height': 0x121
                                                    },
                                                    'compId': 0x112
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0xa1,
                                                        'x': 0x180,
                                                        'width': 0x82,
                                                        'skin': 'game/m_bg4' + '.png',
                                                        'sizeGrid': '13,0,70,0',
                                                        'height': 0x121
                                                    },
                                                    'compId': 0x113
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0xa1,
                                                        'x': 0x201,
                                                        'width': 0x82,
                                                        'skin': 'game/m_bg4' + '.png',
                                                        'sizeGrid': '22,0,70,0',
                                                        'height': 0x121
                                                    },
                                                    'compId': 0x114
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': -0xa1,
                                                        'x': 0x27f,
                                                        'width': 0x82,
                                                        'skin': 'game/m_bg4' + '.png',
                                                        'sizeGrid': '13,0,70,0',
                                                        'height': 0x121
                                                    },
                                                    'compId': 0x115
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x47,
                                                        'x': 0x234,
                                                        'var': 'Goldimg',
                                                        'skin': 'game/gold2' + '.png',
                                                        'scaleY': 0.5,
                                                        'scaleX': 0.5
                                                    },
                                                    'compId': 0x10a
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x4b,
                                                        'x': 0x277,
                                                        'width': 0x49,
                                                        'var': 'GoldCnt',
                                                        'valign': 'middle',
                                                        'text': '275',
                                                        'height': 0x20,
                                                        'fontSize': 0x23,
                                                        'font': 'Arial',
                                                        'color': '#ffffff',
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x10b
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0xac,
                                                        'x': 0x1b,
                                                        'visible': !0x1,
                                                        'var': 'flyKey',
                                                        'skin': 'game/chess' + 'Key.png'
                                                    },
                                                    'compId': 0x255
                                                },
                                                {
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 0x76,
                                                        'left': 0x21e,
                                                        'height': 0x2b
                                                    },
                                                    'compId': 0x10c,
                                                    'child': [
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'x': 0x14,
                                                                'width': 0x2e,
                                                                'var': 'key1',
                                                                'skin': 'game/m_gra' + 'y.png',
                                                                'height': 0x2b
                                                            },
                                                            'compId': 0x10d
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'x': 0x4f,
                                                                'width': 0x2e,
                                                                'var': 'key2',
                                                                'skin': 'game/m_gra' + 'y.png',
                                                                'height': 0x2b
                                                            },
                                                            'compId': 0x10f
                                                        },
                                                        {
                                                            'type': 'Image',
                                                            'props': {
                                                                'x': 0x8d,
                                                                'width': 0x2e,
                                                                'var': 'key3',
                                                                'skin': 'game/m_gra' + 'y.png',
                                                                'height': 0x2b
                                                            },
                                                            'compId': 0x110
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x9,
                                                'x': 276.5,
                                                'width': 0xa7,
                                                'var': 'LevelName',
                                                'valign': 'middle',
                                                'text': 'CHALLENGE\x20' + '1',
                                                'strokeColor': '#000000',
                                                'stroke': 0x1,
                                                'height': 0x42,
                                                'fontSize': 0x23,
                                                'font': 'Arial',
                                                'color': '#ffffff',
                                                'bold': !0x0,
                                                'align': 'center'
                                            },
                                            'compId': 0x187
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'width': 0x2d0,
                                        'var': 'box1',
                                        'right': 0x0,
                                        'left': 0x0,
                                        'height': 0xf8,
                                        'bottom': 0xbe
                                    },
                                    'compId': 0x116,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'top': 0x0,
                                                'skin': 'game/m_tab' + 'le.png',
                                                'sizeGrid': '45,11,31,1' + '9',
                                                'right': 0x0,
                                                'left': 0x0,
                                                'bottom': 0x0
                                            },
                                            'compId': 0x117
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x24,
                                                'x': 0x47,
                                                'width': 0x258,
                                                'var': 'BottomBtnB' + 'ox',
                                                'height': 0xd1
                                            },
                                            'compId': 0x13b,
                                            'child': [
                                                {
                                                    'type': 'Box',
                                                    'props': {
                                                        'width': 0x1f4,
                                                        'var': 'HBox1',
                                                        'space': 0x14,
                                                        'height': 0x64,
                                                        'centerY': 0x0,
                                                        'centerX': 0x0
                                                    },
                                                    'compId': 0x133
                                                },
                                                {
                                                    'type': 'Box',
                                                    'props': {
                                                        'width': 0x1f4,
                                                        'var': 'HBox2',
                                                        'space': 0x96,
                                                        'height': 0x64,
                                                        'centerY': 0x3c,
                                                        'centerX': 0x0,
                                                        'align': 'middle'
                                                    },
                                                    'compId': 0x137
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'width': 0xab,
                                        'left': 0x0,
                                        'height': 0x1ae,
                                        'bottom': 0x1fa
                                    },
                                    'compId': 0x11c,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x0,
                                                'var': 'SignBtn',
                                                'skin': 'game/m_bg.' + 'png',
                                                'scaleY': 0.7,
                                                'scaleX': 0.7
                                            },
                                            'compId': 0x302,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x32,
                                                        'x': 0x1f,
                                                        'skin': 'common/sig' + 'n.png'
                                                    },
                                                    'compId': 0x303
                                                },
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0xb,
                                                        'x': 0x59,
                                                        'var': 'signRed',
                                                        'skin': 'tui/redPoi' + 'nt.png'
                                                    },
                                                    'compId': 0x304
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x96,
                                                'x': 0x0,
                                                'var': 'SkinBtn',
                                                'skin': 'game/m_but' + 'tonBg.png',
                                                'scaleY': 0.7,
                                                'scaleX': 0.7
                                            },
                                            'compId': 0x122,
                                            'child': [
                                                {
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x1f,
                                                        'x': 0x13,
                                                        'var': 'UseSkinImg',
                                                        'skin': 'game/s_ski' + 'n1.png'
                                                    },
                                                    'compId': 0x123
                                                },
                                                {
                                                    'type': 'Label',
                                                    'props': {
                                                        'y': 0x78,
                                                        'x': 0x13,
                                                        'width': 0x5e,
                                                        'var': 'SkinCntLab',
                                                        'valign': 'middle',
                                                        'text': '1/25',
                                                        'stroke': 0x2,
                                                        'height': 0x18,
                                                        'fontSize': 0x1e,
                                                        'font': 'Arial',
                                                        'color': '#ffffff',
                                                        'align': 'center'
                                                    },
                                                    'compId': 0x124
                                                }
                                            ]
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x12f,
                                                'x': 0x0,
                                                'var': 'ResetBtn',
                                                'skin': 'game/m_bg.' + 'png',
                                                'scaleY': 0.7,
                                                'scaleX': 0.7
                                            },
                                            'compId': 0x11d,
                                            'child': [{
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x32,
                                                        'x': 0x1f,
                                                        'skin': 'common/m_d' + 'elete1.png'
                                                    },
                                                    'compId': 0x11e
                                                }]
                                        }
                                    ]
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'width': 0x74,
                                        'var': 'morePic',
                                        'right': 0x0,
                                        'height': 0x10f,
                                        'bottom': 0x1fa
                                    },
                                    'compId': 0x30f,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x87,
                                                'width': 0xa1,
                                                'var': 'Ready',
                                                'skin': 'game/m_bg.' + 'png',
                                                'scaleY': 0.7,
                                                'scaleX': -0.7,
                                                'right': 0x71,
                                                'height': 0xb2
                                            },
                                            'compId': 0x119,
                                            'child': [{
                                                    'type': 'Image',
                                                    'props': {
                                                        'y': 0x31,
                                                        'x': 0x68,
                                                        'width': 0x50,
                                                        'skin': 'game/m_bg1' + '1.png',
                                                        'scaleX': -0x1,
                                                        'height': 0x50
                                                    },
                                                    'compId': 0x121
                                                }]
                                        }]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0x3f,
                                'var': 'box2',
                                'height': 0x15a,
                                'centerX': -0x68,
                                'bottom': 0x17a
                            },
                            'compId': 0x1fe,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'x': 0x0,
                                        'width': 0xd,
                                        'var': 'leftCollid' + 'er',
                                        'rotation': -0x8,
                                        'height': 0x108
                                    },
                                    'compId': 0x7b,
                                    'child': [
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'width': 0xd,
                                                'label': 'cupground',
                                                'height': 0x15e,
                                                'runtime': 'laya.physi' + 'cs.BoxColl' + 'ider'
                                            },
                                            'compId': 0x2e9
                                        },
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'type': 'kinematic',
                                                'label': 'cupground',
                                                'gravityScale': 0x0,
                                                'category': 0x80,
                                                'runtime': 'laya.physi' + 'cs.RigidBo' + 'dy'
                                            },
                                            'compId': 0x2ea
                                        }
                                    ]
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0x3c,
                                'var': 'box3',
                                'height': 0x152,
                                'centerX': 0x66,
                                'bottom': 0x17e
                            },
                            'compId': 0x1ff,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x2d,
                                        'width': 0xd,
                                        'var': 'rightColli' + 'der',
                                        'rotation': 0x9,
                                        'height': 0x108
                                    },
                                    'compId': 0x7c,
                                    'child': [
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'width': 0xd,
                                                'label': 'cupground',
                                                'height': 0x15e,
                                                'runtime': 'laya.physi' + 'cs.BoxColl' + 'ider'
                                            },
                                            'compId': 0x2eb
                                        },
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'type': 'kinematic',
                                                'label': 'cupground',
                                                'gravityScale': 0x0,
                                                'category': 0x80,
                                                'runtime': 'laya.physi' + 'cs.RigidBo' + 'dy'
                                            },
                                            'compId': 0x2ec
                                        }
                                    ]
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0x112,
                                'var': 'box4',
                                'height': 0x38,
                                'centerX': -0x5,
                                'bottom': 0x1a3
                            },
                            'compId': 0x259,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'x': 0x112,
                                        'width': 0x26,
                                        'var': 'waterChang' + 'eGround',
                                        'rotation': 0x5a,
                                        'height': 0xf9
                                    },
                                    'compId': 0x25a,
                                    'child': [
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'width': 0x26,
                                                'label': 'watergroun' + 'd',
                                                'height': 0xf9,
                                                'runtime': 'laya.physi' + 'cs.BoxColl' + 'ider'
                                            },
                                            'compId': 0x2ed
                                        },
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'type': 'kinematic',
                                                'mask': 0x4,
                                                'label': 'watergroun' + 'd',
                                                'gravityScale': 0x0,
                                                'runtime': 'laya.physi' + 'cs.RigidBo' + 'dy'
                                            },
                                            'compId': 0x2ee
                                        }
                                    ]
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0x112,
                                'var': 'box5',
                                'height': 0x38,
                                'centerX': -0xc,
                                'bottom': 0x187
                            },
                            'compId': 0x200,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'x': 0x112,
                                        'width': 0x26,
                                        'var': 'downCollid' + 'er',
                                        'rotation': 0x5a,
                                        'height': 0xf9
                                    },
                                    'compId': 0x7d,
                                    'child': [
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'width': 0x26,
                                                'label': 'cupground',
                                                'height': 0xf9,
                                                'runtime': 'laya.physi' + 'cs.BoxColl' + 'ider'
                                            },
                                            'compId': 0x2ef
                                        },
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'type': 'kinematic',
                                                'label': 'cupground',
                                                'gravityScale': 0x0,
                                                'category': 0x80,
                                                'runtime': 'laya.physi' + 'cs.RigidBo' + 'dy'
                                            },
                                            'compId': 0x2f0
                                        }
                                    ]
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0xc8,
                                'var': 'ShowCupBox',
                                'height': 0xc8,
                                'centerY': -0x104,
                                'centerX': 0xfa
                            },
                            'compId': 0x118,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x68,
                                        'width': 0xcf,
                                        'var': 'showCupBg',
                                        'skin': 'game/m_sho' + 'wbg.png',
                                        'pivotX': 0x68,
                                        'height': 0xcf
                                    },
                                    'compId': 0x169
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'x': 0x0,
                                        'var': 'showCupTit' + 'le',
                                        'top': -0x32,
                                        'skin': 'common/din' + 'gdanshench' + 'eng.png'
                                    },
                                    'compId': 0x301
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'y': 0xf,
                                        'x': 0x2d,
                                        'width': 0x78,
                                        'height': 0xb4
                                    },
                                    'compId': 0x189,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x2f,
                                                'x': 0x0,
                                                'var': 'levelcolor',
                                                'skin': 'game/m_sho' + 'wWater.png',
                                                'scaleY': 0.8,
                                                'scaleX': 0.8
                                            },
                                            'compId': 0x185
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x2a,
                                                'x': 0xa,
                                                'var': 'IceShow1',
                                                'skin': 'game/m_sho' + 'wIce1.png',
                                                'scaleY': 0.3,
                                                'scaleX': 0.3
                                            },
                                            'compId': 0x18a
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x25,
                                                'x': 0x8,
                                                'var': 'IceShow2',
                                                'skin': 'game/m_sho' + 'wIce2.png',
                                                'scaleY': 0.3,
                                                'scaleX': 0.3
                                            },
                                            'compId': 0x18b
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x0,
                                                'skin': 'game/m_sho' + 'wCup.png',
                                                'scaleY': 0.8,
                                                'scaleX': 0.8
                                            },
                                            'compId': 0x188
                                        },
                                        {
                                            'type': 'Box',
                                            'props': {
                                                'y': 0x47,
                                                'x': 0xd,
                                                'width': 0x5c,
                                                'var': 'ZZpanel',
                                                'height': 0x67
                                            },
                                            'compId': 0x18c,
                                            'child': [{
                                                    'type': 'Box',
                                                    'props': {
                                                        'y': 0x27,
                                                        'width': 0x40,
                                                        'var': 'zzBox',
                                                        'height': 0x40,
                                                        'centerX': 0x0
                                                    },
                                                    'compId': 0x1d5
                                                }]
                                        }
                                    ]
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x14,
                                        'x': 0xae,
                                        'width': 0x6,
                                        'var': 'FailColor1',
                                        'height': 0x42
                                    },
                                    'compId': 0x253
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x14,
                                        'x': 0xb8,
                                        'width': 0x6,
                                        'var': 'FailColor2',
                                        'height': 0x42
                                    },
                                    'compId': 0x254
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'x': 0xea,
                                'width': 0x102,
                                'var': 'box6',
                                'height': 0xf8,
                                'bottom': 0xbe
                            },
                            'compId': 0xf9,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'width': 0x102,
                                        'var': 'IceGround',
                                        'height': 0x112
                                    },
                                    'compId': 0xfa,
                                    'child': [
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'width': 0x102,
                                                'label': 'iceground',
                                                'height': 0xfe,
                                                'runtime': 'laya.physi' + 'cs.BoxColl' + 'ider'
                                            },
                                            'compId': 0x2f1
                                        },
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'type': 'static',
                                                'mask': 0xa,
                                                'linearDamping': 0.9,
                                                'label': 'iceground',
                                                'group': 0x1,
                                                'gravityScale': 0x0,
                                                'category': 0x2,
                                                'bullet': !0x0,
                                                'runtime': 'laya.physi' + 'cs.RigidBo' + 'dy'
                                            },
                                            'compId': 0x2f2
                                        }
                                    ]
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'x': 0x0,
                                'width': 0x2d0,
                                'var': 'ground',
                                'height': 0xf8,
                                'bottom': 0xbe
                            },
                            'compId': 0x1e,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x28,
                                        'x': 0x0,
                                        'width': 0x2d0,
                                        'name': 'ground',
                                        'height': 0xf8
                                    },
                                    'compId': 0x3,
                                    'child': [
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'width': 0x2d0,
                                                'label': 'ground',
                                                'height': 0xd6,
                                                'runtime': 'laya.physi' + 'cs.BoxColl' + 'ider'
                                            },
                                            'compId': 0x2f3
                                        },
                                        {
                                            'type': 'Script',
                                            'props': {
                                                'type': 'static',
                                                'linearDamping': 0.9,
                                                'label': 'ground',
                                                'gravityScale': 0x0,
                                                'bullet': !0x0,
                                                'runtime': 'laya.physi' + 'cs.RigidBo' + 'dy'
                                            },
                                            'compId': 0x2f4
                                        }
                                    ]
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'var': 'zzsdkBox',
                                'top': 0x0,
                                'right': 0x0,
                                'mouseThrough': !0x0,
                                'left': 0x0,
                                'bottom': 0x0
                            },
                            'compId': 0x305
                        }
                    ]
                },
                {
                    'type': 'Script',
                    'props': {
                        'shortResult': '@Prefab:pr' + 'efab/short' + 'Result.jso' + 'n',
                        'longResult': '@Prefab:pr' + 'efab/longR' + 'esult.json',
                        'dropWater': '@Prefab:pr' + 'efab/DropW' + 'ater.json',
                        'dropBoxSugar': '@Prefab:pr' + 'efab/DropB' + 'oxSuger.js' + 'on',
                        'dropBoxIce': '@Prefab:pr' + 'efab/DropB' + 'oxIce.json',
                        'dropBox': '@Prefab:pr' + 'efab/DropB' + 'ox.json',
                        'btnMask': '@Prefab:pr' + 'efab/btnMa' + 'sk.json',
                        'runtime': 'script/Gam' + 'eControl.t' + 's'
                    },
                    'compId': 0x2f5
                }
            ],
            'animations': [{
                    'nodes': [{
                            'target': 0x313,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.8,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleY',
                                        'index': 0x5
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleY',
                                        'index': 0xa
                                    },
                                    {
                                        'value': 1.2,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleY',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleY',
                                        'index': 0x14
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 0.8,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleX',
                                        'index': 0x5
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleX',
                                        'index': 0xa
                                    },
                                    {
                                        'value': 1.2,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleX',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0x313,
                                        'key': 'scaleX',
                                        'index': 0x14
                                    }
                                ]
                            }
                        }],
                    'name': 'ani1',
                    'id': 0x1,
                    'frameRate': 0x18,
                    'action': 0x2
                }],
            'loadList': [
                'common/m_b' + 'g2.png',
                'game/m_btn' + '2.png',
                'game/chess' + 'brut.png',
                'common/fri' + 'endsbtn.pn' + 'g',
                'game/m_bg1' + '.png',
                'game/m_gol' + 'd.png',
                'game/m_gra' + 'y.png',
                'game/gold2' + '.png',
                'game/m_gam' + 'epress.png',
                'game/m_gam' + 'ePressGree' + 'n.png',
                'game/m_rea' + 'dy1.png',
                'game/m_lig' + 'ht.png',
                'game/w_0.p' + 'ng',
                'game/m_cup' + 'le.png',
                'game/cupBG' + '.png',
                'x/s_skin1.' + 'png',
                'game/m_go.' + 'png',
                'game/m_bg4' + '.png',
                'game/chess' + 'Key.png',
                'game/m_tab' + 'le.png',
                'game/m_bg.' + 'png',
                'common/sig' + 'n.png',
                'tui/redPoi' + 'nt.png',
                'game/m_but' + 'tonBg.png',
                'game/s_ski' + 'n1.png',
                'common/m_d' + 'elete1.png',
                'common/bgm' + 'ore.png',
                'game/m_bg1' + '1.png',
                'game/m_sho' + 'wbg.png',
                'common/din' + 'gdanshench' + 'eng.png',
                'game/m_sho' + 'wWater.png',
                'game/m_sho' + 'wIce1.png',
                'game/m_sho' + 'wIce2.png',
                'game/m_sho' + 'wCup.png',
                'prefab/sho' + 'rtResult.j' + 'son',
                'prefab/lon' + 'gResult.js' + 'on',
                'prefab/Dro' + 'pWater.jso' + 'n',
                'prefab/Dro' + 'pBoxSuger.' + 'json',
                'prefab/Dro' + 'pBoxIce.js' + 'on',
                'prefab/Dro' + 'pBox.json',
                'prefab/btn' + 'Mask.json'
            ],
            'loadList3D': []
        }, _0x43396d['gamemainUI'] = _0x30e821, _0x3665df('ui.gamemai' + 'nUI', _0x30e821);
        class _0x1594df extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x1594df['uiView']);
            }
        }
        _0x1594df['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x4cc,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'name': 'bg',
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.5
                    },
                    'compId': 0x3
                },
                {
                    'type': 'Box',
                    'props': {
                        'x': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'height': 0x1c2,
                        'centerY': -0x14
                    },
                    'compId': 0x1a,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'top': 0x0,
                                'skin': 'game/chess' + '_mid_bg.pn' + 'g',
                                'sizeGrid': '60,40,60,4' + '0',
                                'right': 0x32,
                                'left': 0x32,
                                'bottom': 0x0
                            },
                            'compId': 0x1b
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': 0x1c,
                                'width': 0x1f4,
                                'var': 'titleLab',
                                'valign': 'middle',
                                'text': 'FREE\x20COIN',
                                'name': 'titleLab',
                                'height': 0x46,
                                'fontSize': 0x32,
                                'color': '#333333',
                                'centerX': 0x0,
                                'bold': !0x0,
                                'align': 'center'
                            },
                            'compId': 0x1c
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'var': 'goldImage',
                                'skin': 'common/gol' + 'ds.png',
                                'centerY': 0x0,
                                'centerX': 0x0
                            },
                            'compId': 0x30
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'width': 0x12c,
                                'var': 'goldLab',
                                'valign': 'middle',
                                'text': 'COIN+200',
                                'strokeColor': '#000000',
                                'stroke': 1.5,
                                'height': 0x32,
                                'fontSize': 0x2d,
                                'color': '#f4bc08',
                                'centerX': 0x0,
                                'bottom': 0x3a,
                                'anchorY': 0.5,
                                'anchorX': 0.5,
                                'align': 'center'
                            },
                            'compId': 0x2c
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'var': 'closeBtn',
                                'top': 0x1e,
                                'stateNum': 0x1,
                                'skin': 'game/close' + '.png',
                                'sizeGrid': '10,10,10,1' + '0',
                                'right': 0x42,
                                'name': 'closeBtn',
                                'labelSize': 0x1e,
                                'labelColors': '#FFFFFF',
                                'labelBold': !0x0,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x2d,
                            'child': [
                                {
                                    'type': 'Script',
                                    'props': {
                                        'y': 0xe,
                                        'x': 0x0,
                                        'playEvent': 'mouseup',
                                        'runtime': 'ui.effect.' + 'BtnScaleUp' + 'UI'
                                    },
                                    'compId': 0x2e
                                },
                                {
                                    'type': 'Script',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'playEvent': 'mousedown',
                                        'runtime': 'ui.effect.' + 'BtnScaleDo' + 'wnUI'
                                    },
                                    'compId': 0x2f
                                }
                            ]
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'width': 0x104,
                                'visible': !0x0,
                                'var': 'doubleBtn',
                                'stateNum': 0x1,
                                'skin': 'game/green' + 'btn.png',
                                'sizeGrid': '31,48,32,4' + '1',
                                'name': 'doubleBtn',
                                'labelSize': 0x1e,
                                'labelColors': '#FFFFFF',
                                'labelBold': !0x0,
                                'height': 0x64,
                                'centerX': 0x0,
                                'bottom': -0x78,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x31,
                            'child': [
                                {
                                    'type': 'Script',
                                    'props': {
                                        'y': 0xe,
                                        'x': 0x0,
                                        'playEvent': 'mouseup',
                                        'runtime': 'ui.effect.' + 'BtnScaleUp' + 'UI'
                                    },
                                    'compId': 0x32
                                },
                                {
                                    'type': 'Script',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'playEvent': 'mousedown',
                                        'runtime': 'ui.effect.' + 'BtnScaleDo' + 'wnUI'
                                    },
                                    'compId': 0x33
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x38,
                                        'skin': 'common/ic_' + 'vedio.png',
                                        'scaleY': 0.6,
                                        'scaleX': 0.6,
                                        'name': 'video_icon',
                                        'left': 0x1d,
                                        'height': 0x35,
                                        'centerY': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0x34
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'wordWrap': !0x0,
                                        'width': 0xcf,
                                        'valign': 'middle',
                                        'text': 'FREE',
                                        'strokeColor': '#000000',
                                        'stroke': 0x1,
                                        'padding': '5',
                                        'name': 'lab',
                                        'leading': 0x5,
                                        'height': 0x3e,
                                        'fontSize': 0x28,
                                        'color': '#ffffff',
                                        'centerY': 0x0,
                                        'centerX': 0x13,
                                        'bold': !0x0,
                                        'align': 'center'
                                    },
                                    'compId': 0x35
                                }
                            ]
                        }
                    ]
                }
            ],
            'loadList': [
                'game/chess' + '_mid_bg.pn' + 'g',
                'common/gol' + 'ds.png',
                'game/close' + '.png',
                'game/green' + 'btn.png',
                'common/ic_' + 'vedio.png'
            ],
            'loadList3D': []
        }, _0x43396d['GoldViewUI'] = _0x1594df, _0x3665df('ui.GoldVie' + 'wUI', _0x1594df);
        class _0x349147 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x349147['uiView']);
            }
        }
        _0x349147['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Image',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'top': 0x0,
                        'skin': 'loading/lo' + 'ad_bg.jpg',
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x4
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x197,
                        'height': 0x28,
                        'centerX': 0x0,
                        'bottom': 0x93
                    },
                    'compId': 0x9,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x197,
                                'skin': 'loading/lo' + 'ading_prog' + 'ress_bg.pn' + 'g',
                                'height': 0x28
                            },
                            'compId': 0xf
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x197,
                                'skin': 'loading/lo' + 'ading_prog' + 'ress.png',
                                'sizeGrid': '17,51,22,4' + '0',
                                'height': 0x28
                            },
                            'compId': 0x8,
                            'child': [{
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x1,
                                        'x': 0x0,
                                        'width': 0x18b,
                                        'var': 'progressIm' + 'ageMask',
                                        'renderType': 'mask',
                                        'height': 0x24
                                    },
                                    'compId': 0xa
                                }]
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'width': 0x19a,
                                'var': 'loadingLab' + 'el',
                                'valign': 'middle',
                                'text': '0%',
                                'strokeColor': '#549FE4',
                                'stroke': 0x4,
                                'right': 0x0,
                                'left': -0x3,
                                'height': 0x28,
                                'fontSize': 0x28,
                                'color': '#FFFFFF',
                                'bottom': -0x28,
                                'align': 'center'
                            },
                            'compId': 0xb
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': -0x38,
                                'x': 2.5,
                                'width': 0x192,
                                'valign': 'middle',
                                'text': 'LOADING...',
                                'strokeColor': '#549FE4',
                                'stroke': 0x2,
                                'height': 0x43,
                                'fontSize': 0x1e,
                                'color': '#FFFFFF',
                                'align': 'center'
                            },
                            'compId': 0xc
                        }
                    ]
                },
                {
                    'type': 'Image',
                    'props': {
                        'y': 0x69,
                        'skin': 'loading/lo' + 'go.png',
                        'centerX': 0x0
                    },
                    'compId': 0xe
                }
            ],
            'loadList': [
                'loading/lo' + 'ad_bg.jpg',
                'loading/lo' + 'ading_prog' + 'ress_bg.pn' + 'g',
                'loading/lo' + 'ading_prog' + 'ress.png',
                'loading/lo' + 'go.png'
            ],
            'loadList3D': []
        }, _0x43396d['LoadingVie' + 'wUI'] = _0x349147, _0x3665df('ui.Loading' + 'ViewUI', _0x349147);
        class _0x193ff0 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x193ff0['uiView']);
            }
        }
        _0x193ff0['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x1c
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x2b2,
                        'var': 'contentBox',
                        'top': 0xa5,
                        'height': 0x381,
                        'centerX': 0x0
                    },
                    'compId': 0x4,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x2b2,
                                'skin': 'game/chess' + '_mid_bg.pn' + 'g',
                                'sizeGrid': '42,59,52,4' + '7',
                                'height': 0x328
                            },
                            'compId': 0x5
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': -0x51,
                                'x': 0xab,
                                'skin': 'common/lxs' + 'ytitle.png',
                                'scaleY': 0.8,
                                'scaleX': 0.8
                            },
                            'compId': 0x6
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'x': 0xd6,
                                'skin': 'game/gold2' + '.png',
                                'scaleY': 0.5,
                                'scaleX': 0.5,
                                'bottom': 0x10c,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x8
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'width': 0x15d,
                                'var': 'coinLabel',
                                'valign': 'middle',
                                'text': 'COIN+100',
                                'strokeColor': '#C07400',
                                'stroke': 0xa,
                                'height': 0x36,
                                'fontSize': 0x32,
                                'color': '#FDEC5A',
                                'centerX': 0x5a,
                                'bottom': 0x109,
                                'bold': !0x0,
                                'align': 'left'
                            },
                            'compId': 0x9
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'y': 0x2cb,
                                'x': 0x159,
                                'width': 0x116,
                                'var': 'btn',
                                'stateNum': 0x1,
                                'skin': 'game/green' + 'btn.png',
                                'scaleY': 0x1,
                                'scaleX': 0x1,
                                'pivotY': 0x23,
                                'pivotX': 0x8b,
                                'height': 0x68,
                                'centerX': -0x6,
                                'bottom': 0x71
                            },
                            'compId': 0xa,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x23,
                                        'skin': 'common/ic_' + 'vedio.png',
                                        'left': 0x23,
                                        'height': 0x23,
                                        'centerY': 0x0
                                    },
                                    'compId': 0xb
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'valign': 'middle',
                                        'text': '三倍领取x',
                                        'right': 0x1b,
                                        'fontSize': 0x28,
                                        'color': '#84442a',
                                        'centerY': 0x0,
                                        'align': 'center'
                                    },
                                    'compId': 0xc
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x32a,
                                'x': 0xee,
                                'width': 0xd5,
                                'var': 'closeBtn',
                                'height': 0x4b,
                                'bottom': 0xc
                            },
                            'compId': 0xd,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'x': -0.71875,
                                        'width': 0xd6,
                                        'skin': 'game/m_btn' + '2.png',
                                        'name': 'btnBg',
                                        'height': 0x45
                                    },
                                    'compId': 0xe
                                },
                                {
                                    'type': 'Script',
                                    'props': { 'runtime': 'views/item' + '/CloseBtnS' + 'cript.ts' },
                                    'compId': 0x10
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x0,
                                        'width': 0xd2,
                                        'valign': 'middle',
                                        'text': '普通领取',
                                        'stroke': 0x4,
                                        'height': 0x44,
                                        'fontSize': 0x1e,
                                        'color': '#FFFFFF',
                                        'bold': !0x0,
                                        'align': 'center'
                                    },
                                    'compId': 0x14
                                }
                            ]
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'width': 0xa3,
                                'visible': !0x1,
                                'var': 'upTip',
                                'valign': 'middle',
                                'text': '(收益已达上限)',
                                'height': 0x28,
                                'fontSize': 0x19,
                                'color': '#2f195f',
                                'centerX': 0xe8,
                                'bottom': 0x110,
                                'bold': !0x0,
                                'align': 'center'
                            },
                            'compId': 0x13
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': 0x278,
                                'x': 0xaa,
                                'width': 0x15d,
                                'var': 'offlineTip',
                                'valign': 'middle',
                                'text': 'COIN+100',
                                'height': 0x2c,
                                'fontSize': 0x19,
                                'color': '#2f195f',
                                'centerX': 0x6,
                                'bottom': 0xdd,
                                'bold': !0x0,
                                'align': 'center'
                            },
                            'compId': 0x12
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'var': 'zzsdkBox',
                        'top': 0x0,
                        'right': 0x0,
                        'mouseThrough': !0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x17,
                    'child': [{
                            'type': 'Box',
                            'props': {
                                'y': 0x50,
                                'width': 0x2d0,
                                'var': 'ztuiBox',
                                'mouseThrough': !0x0,
                                'height': 0x384
                            },
                            'compId': 0x19,
                            'child': [{
                                    'type': 'Box',
                                    'props': {
                                        'y': 0x6e,
                                        'x': 0x23,
                                        'width': 0x28a,
                                        'var': 'a3xbox',
                                        'height': 0x226,
                                        'centerX': 0x0
                                    },
                                    'compId': 0x1a,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'top': 0x0,
                                                'skin': 'tui/index-' + 'box.png',
                                                'sizeGrid': '20,20,20,2' + '0',
                                                'right': 0x0,
                                                'left': 0x0,
                                                'bottom': 0x0
                                            },
                                            'compId': 0x1b
                                        }]
                                }]
                        }]
                }
            ],
            'animations': [{
                    'nodes': [{
                            'target': 0xa,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'label': null,
                                        'key': 'scaleY',
                                        'index': 0x12
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x1e
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'label': null,
                                        'key': 'scaleX',
                                        'index': 0x12
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x1e
                                    }
                                ]
                            }
                        }],
                    'name': 'ani1',
                    'id': 0x1,
                    'frameRate': 0x18,
                    'action': 0x2
                }],
            'loadList': [
                'game/chess' + '_mid_bg.pn' + 'g',
                'common/lxs' + 'ytitle.png',
                'game/gold2' + '.png',
                'game/green' + 'btn.png',
                'common/ic_' + 'vedio.png',
                'game/m_btn' + '2.png',
                'tui/index-' + 'box.png'
            ],
            'loadList3D': []
        }, _0x43396d['OfflineVie' + 'wUI'] = _0x193ff0, _0x3665df('ui.Offline' + 'ViewUI', _0x193ff0);
        class _0x24dd81 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x24dd81['uiView']);
            }
        }
        _0x24dd81['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x22,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x28
                },
                {
                    'type': 'Box',
                    'props': {
                        'x': 0x0,
                        'width': 0x2d0,
                        'var': 'window',
                        'top': 0xf0,
                        'height': 0x352
                    },
                    'compId': 0x21,
                    'child': [
                        {
                            'type': 'Box',
                            'props': {
                                'x': 0x0,
                                'top': -0x64,
                                'name': 'title'
                            },
                            'compId': 0x24,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'width': 0x2d0,
                                        'skin': 'game/chess' + '_titlebg.p' + 'ng',
                                        'scaleY': 0.8,
                                        'left': 0x0
                                    },
                                    'compId': 0x6
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x8,
                                        'x': 0xcf,
                                        'texture': 'common/tit' + 'le.png',
                                        'scaleY': 0.7,
                                        'scaleX': 0.7
                                    },
                                    'compId': 0x7
                                }
                            ]
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x6b,
                                'x': 0x0,
                                'width': 0x2d0,
                                'skin': 'game/chess' + '_mid_bg.pn' + 'g',
                                'height': 0x241
                            },
                            'compId': 0xe
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': 41.5,
                                'x': 0x21e,
                                'texture': 'game/gold2' + '.png',
                                'scaleY': 0.5,
                                'scaleX': 0.5,
                                'name': 'gold'
                            },
                            'compId': 0x9
                        },
                        {
                            'type': 'Text',
                            'props': {
                                'y': 0x2a,
                                'x': 0x250,
                                'width': 0x74,
                                'var': 'goldCount',
                                'valign': 'middle',
                                'text': '1300',
                                'runtime': 'laya.displ' + 'ay.Text',
                                'height': 0x33,
                                'fontSize': 0x23,
                                'font': 'Microsoft\x20' + 'YaHei',
                                'color': '#ffffff',
                                'bold': !0x0,
                                'align': 'left'
                            },
                            'compId': 0xa
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': 0x2e,
                                'x': 0xd3,
                                'texture': 'game/chess' + '_hign.png',
                                'name': 'text'
                            },
                            'compId': 0xb
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x8,
                                'x': 388.5693359375,
                                'var': 'bestReward',
                                'skin': 'game/s_ski' + 'n10.png'
                            },
                            'compId': 0xc
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x83,
                                'x': 0x5c,
                                'var': 'rewardObj',
                                'styleSkin': 'game/s_ski' + 'n8.png'
                            },
                            'compId': 0xf
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x2ac,
                                'x': 0x4e,
                                'var': 'grade',
                                'height': 0x64
                            },
                            'compId': 0x11,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x17,
                                        'centerX': 0x0,
                                        'texture': 'game/chess' + 'text.png'
                                    },
                                    'compId': 0x12
                                },
                                {
                                    'type': 'Box',
                                    'props': {
                                        'centerX': 0x0,
                                        'y': 0x64
                                    },
                                    'compId': 0x25,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x0,
                                                'var': 'key1',
                                                'skin': 'game/chess' + 'Key.png',
                                                'scaleY': 0.8,
                                                'scaleX': 0.8
                                            },
                                            'compId': 0x10
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0x6d,
                                                'var': 'key2',
                                                'skin': 'game/chess' + 'Key.png',
                                                'scaleY': 0.8,
                                                'scaleX': 0.8
                                            },
                                            'compId': 0x13
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x0,
                                                'x': 0xda,
                                                'var': 'key3',
                                                'skin': 'game/chess' + 'Key.png',
                                                'scaleY': 0.8,
                                                'scaleX': 0.8
                                            },
                                            'compId': 0x14
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x2b7,
                                'x': 0xaf,
                                'width': 0x172,
                                'visible': !0x1,
                                'var': 'getchance',
                                'skin': 'game/r_btn' + '.png',
                                'sizeGrid': '26,26,26,2' + '6',
                                'height': 0x64
                            },
                            'compId': 0x15,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x11,
                                        'x': 0x25,
                                        'texture': 'game/m_AD.' + 'png'
                                    },
                                    'compId': 0x16
                                },
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x10,
                                        'x': 0x10c,
                                        'width': 0x3e,
                                        'texture': 'game/chess' + 'Key.png',
                                        'height': 0x43
                                    },
                                    'compId': 0x17
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x14,
                                        'x': 0x9a,
                                        'text': '+3',
                                        'styleSkin': 'game/chess' + '_hign.png',
                                        'fontSize': 0x3c,
                                        'font': 'Microsoft\x20' + 'YaHei',
                                        'color': '#ffffff',
                                        'bold': !0x0
                                    },
                                    'compId': 0x18
                                }
                            ]
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': 0x339,
                                'centerX': 0x0,
                                'visible': !0x1,
                                'var': 'back',
                                'text': 'NO,THANKS',
                                'styleSkin': 'game/chess' + '_hign.png',
                                'fontSize': 0x28,
                                'font': 'Microsoft\x20' + 'YaHei',
                                'color': '#ffffff',
                                'bold': !0x1
                            },
                            'compId': 0x19
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'var': 'zzsdkBox',
                        'top': 0x0,
                        'right': 0x0,
                        'mouseThrough': !0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x26
                }
            ],
            'loadList': [
                'game/chess' + '_titlebg.p' + 'ng',
                'common/tit' + 'le.png',
                'game/chess' + '_mid_bg.pn' + 'g',
                'game/gold2' + '.png',
                'game/chess' + '_hign.png',
                'game/s_ski' + 'n10.png',
                'game/s_ski' + 'n8.png',
                'game/chess' + 'text.png',
                'game/chess' + 'Key.png',
                'game/r_btn' + '.png',
                'game/m_AD.' + 'png'
            ],
            'loadList3D': []
        }, _0x43396d['OpenReward' + 'UI'] = _0x24dd81, _0x3665df('ui.OpenRew' + 'ardUI', _0x24dd81);
        class _0x222b11 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x222b11['uiView']);
            }
        }
        _0x222b11['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x42,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x43
                },
                {
                    'type': 'Box',
                    'props': {
                        'right': 0x0,
                        'left': 0x0,
                        'height': 0x384,
                        'centerY': -0x28
                    },
                    'compId': 0x16,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x2d0,
                                'skin': 'game/chess' + '_titlebg.p' + 'ng',
                                'sizeGrid': '0,94,0,77',
                                'height': 0xb5
                            },
                            'compId': 0x17,
                            'child': [{
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x2b,
                                        'x': 0xf0,
                                        'text': 'CHALLENGE',
                                        'strokeColor': '#000000',
                                        'stroke': 0x3,
                                        'fontSize': 0x3c,
                                        'centerX': 0x0,
                                        'color': '#ffffff',
                                        'bold': !0x0
                                    },
                                    'compId': 0x3e
                                }]
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x103,
                                'x': 0xdb,
                                'width': 0x17,
                                'skin': 'game/r_bg7' + '.png',
                                'height': 0x1bf
                            },
                            'compId': 0x38
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0xb9,
                                'width': 0x137,
                                'var': 'box1',
                                'height': 0x58,
                                'centerX': 0xe
                            },
                            'compId': 0x19,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x5,
                                        'x': 0x0,
                                        'width': 0x17f,
                                        'skin': 'game/r_bg3' + '.png',
                                        'sizeGrid': '0,41,0,47',
                                        'name': 'bg',
                                        'height': 0x4c
                                    },
                                    'compId': 0x1a,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x12,
                                                'x': 0x5f,
                                                'width': 0xe5,
                                                'text': 'REWARD！',
                                                'height': 0x28,
                                                'fontSize': 0x28,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x1c
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xa,
                                                'x': 0x18d,
                                                'width': 0x30,
                                                'visible': !0x1,
                                                'skin': 'game/m_rea' + 'dy.png',
                                                'name': 'bgright',
                                                'height': 0x30
                                            },
                                            'compId': 0x3b
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x0,
                                        'x': -0x2a,
                                        'skin': 'game/chess' + 'brut.png',
                                        'name': 'openbox'
                                    },
                                    'compId': 0x18
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x14c,
                                'width': 0x137,
                                'var': 'box2',
                                'height': 0x58,
                                'centerX': -0x14
                            },
                            'compId': 0x1d,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x0,
                                        'x': 0x26,
                                        'width': 0x155,
                                        'skin': 'game/r_bg3' + '.png',
                                        'sizeGrid': '0,41,0,47',
                                        'name': 'bg',
                                        'height': 0x4c
                                    },
                                    'compId': 0x1e,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x16,
                                                'x': 0x67,
                                                'text': '+1000',
                                                'fontSize': 0x1e,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x1f
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 14.5,
                                                'x': 0xc5,
                                                'skin': 'game/gold2' + '.png',
                                                'scaleY': 0.5,
                                                'scaleX': 0.5
                                            },
                                            'compId': 0x29
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xd,
                                                'x': 0x15d,
                                                'width': 0x30,
                                                'visible': !0x1,
                                                'skin': 'game/m_rea' + 'dy.png',
                                                'name': 'bgright',
                                                'height': 0x30
                                            },
                                            'compId': 0x3c
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': -0xe,
                                        'x': -0x5,
                                        'skin': 'game/r_bgs' + 'tar.png',
                                        'name': 'openbox'
                                    },
                                    'compId': 0x20,
                                    'child': [{
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x23,
                                                'x': 0x2c,
                                                'text': '3',
                                                'name': 'openlabel',
                                                'fontSize': 0x2d,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x2b
                                        }]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x1e3,
                                'width': 0x137,
                                'var': 'box3',
                                'height': 0x58,
                                'centerX': 0x0
                            },
                            'compId': 0x2c,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x6,
                                        'x': 0x17,
                                        'width': 0x143,
                                        'skin': 'game/r_bg3' + '.png',
                                        'sizeGrid': '0,41,0,47',
                                        'name': 'bg',
                                        'height': 0x4c
                                    },
                                    'compId': 0x2d,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x17,
                                                'x': 0x68,
                                                'text': '+750',
                                                'fontSize': 0x1e,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x2e
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xe,
                                                'x': 0xbf,
                                                'skin': 'game/gold2' + '.png',
                                                'scaleY': 0.5,
                                                'scaleX': 0.5
                                            },
                                            'compId': 0x2f
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xe,
                                                'x': 0x14f,
                                                'width': 0x30,
                                                'visible': !0x1,
                                                'skin': 'game/m_rea' + 'dy.png',
                                                'name': 'bgright',
                                                'height': 0x30
                                            },
                                            'compId': 0x3a
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': -13.5,
                                        'x': -0x16,
                                        'skin': 'game/r_bgs' + 'tar.png',
                                        'name': 'openbox'
                                    },
                                    'compId': 0x30,
                                    'child': [{
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x23,
                                                'x': 0x2c,
                                                'text': '2',
                                                'name': 'openlabel',
                                                'fontSize': 0x2d,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x32
                                        }]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x27b,
                                'width': 0x137,
                                'var': 'box4',
                                'height': 0x58,
                                'centerX': -0x1e
                            },
                            'compId': 0x25,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x0,
                                        'x': 57.5,
                                        'width': 0x10a,
                                        'skin': 'game/r_bg.' + 'png',
                                        'sizeGrid': '0,41,0,47',
                                        'height': 0x4c
                                    },
                                    'compId': 0x26,
                                    'child': [
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x16,
                                                'x': 99.21337890625,
                                                'text': '+500',
                                                'fontSize': 0x1e,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x27
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xe,
                                                'x': 0xb9,
                                                'skin': 'game/gold2' + '.png',
                                                'scaleY': 0.5,
                                                'scaleX': 0.5
                                            },
                                            'compId': 0x35
                                        },
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'y': 0xe,
                                                'x': 0x11f,
                                                'width': 0x30,
                                                'skin': 'game/m_rea' + 'dy.png',
                                                'height': 0x30
                                            },
                                            'compId': 0x39
                                        }
                                    ]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': -19.5,
                                        'x': 0xc,
                                        'skin': 'game/r_bg4' + '.png'
                                    },
                                    'compId': 0x28,
                                    'child': [{
                                            'type': 'Label',
                                            'props': {
                                                'y': 0x23,
                                                'x': 0x2c,
                                                'text': '1',
                                                'fontSize': 0x2d,
                                                'color': '#ffffff',
                                                'bold': !0x0
                                            },
                                            'compId': 0x34
                                        }]
                                }
                            ]
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x2e6,
                                'var': 'CloseBtn',
                                'skin': 'game/r_btn' + '.png',
                                'height': 0x64,
                                'centerX': 0x0
                            },
                            'compId': 0x36,
                            'child': [{
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x14,
                                        'x': 0x55,
                                        'text': 'NEXT',
                                        'fontSize': 0x3c,
                                        'color': '#ffffff'
                                    },
                                    'compId': 0x37
                                }]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'x': 0x0,
                                'width': 0xc8,
                                'top': -0x64,
                                'height': 0x64
                            },
                            'compId': 0x3f,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0x32,
                                        'x': 0x32,
                                        'width': 0x32,
                                        'skin': 'game/gold2' + '.png',
                                        'height': 0x32
                                    },
                                    'compId': 0x40
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x36,
                                        'x': 111.015625,
                                        'var': 'goldCnt',
                                        'text': '3865',
                                        'fontSize': 0x28,
                                        'color': '#ffffff'
                                    },
                                    'compId': 0x41
                                }
                            ]
                        }
                    ]
                }
            ],
            'loadList': [
                'game/chess' + '_titlebg.p' + 'ng',
                'game/r_bg7' + '.png',
                'game/r_bg3' + '.png',
                'game/m_rea' + 'dy.png',
                'game/chess' + 'brut.png',
                'game/gold2' + '.png',
                'game/r_bgs' + 'tar.png',
                'game/r_bg.' + 'png',
                'game/r_bg4' + '.png',
                'game/r_btn' + '.png'
            ],
            'loadList3D': []
        }, _0x43396d['RandomLeve' + 'lUI'] = _0x222b11, _0x3665df('ui.RandomL' + 'evelUI', _0x222b11);
        class _0x2ab3fe extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x2ab3fe['uiView']);
            }
        }
        _0x2ab3fe['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x1c
                },
                {
                    'type': 'Box',
                    'props': {
                        'var': 'btnShow',
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x21,
                    'child': [{
                            'type': 'Label',
                            'props': {
                                'y': 0x2f3,
                                'x': 0x9c,
                                'text': '点任意处开始游戏',
                                'fontSize': 0x32,
                                'color': '#ffffff',
                                'bold': !0x0
                            },
                            'compId': 0x23
                        }]
                },
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'var': 'zzsdkBox',
                        'top': 0x0,
                        'right': 0x0,
                        'mouseThrough': !0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x17,
                    'child': [{
                            'type': 'Box',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x74,
                                'var': 'morePic',
                                'right': 0x0,
                                'height': 0x10f,
                                'bottom': 0x1fa
                            },
                            'compId': 0x1d,
                            'child': [{
                                    'type': 'Image',
                                    'props': {
                                        'var': 'moreGame',
                                        'skin': 'common/bgm' + 'ore.png',
                                        'scaleY': 0.8,
                                        'scaleX': 0.8,
                                        'right': 0x0
                                    },
                                    'compId': 0x1e
                                }]
                        }]
                }
            ],
            'animations': [{
                    'nodes': [{
                            'target': 0xa,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'label': null,
                                        'key': 'scaleY',
                                        'index': 0x12
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleY',
                                        'index': 0x1e
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'label': null,
                                        'key': 'scaleX',
                                        'index': 0x12
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xa,
                                        'key': 'scaleX',
                                        'index': 0x1e
                                    }
                                ]
                            }
                        }],
                    'name': 'ani1',
                    'id': 0x1,
                    'frameRate': 0x18,
                    'action': 0x2
                }],
            'loadList': ['common/bgm' + 'ore.png'],
            'loadList3D': []
        }, _0x43396d['ShiPinView' + 'UI'] = _0x2ab3fe, _0x3665df('ui.ShiPinV' + 'iewUI', _0x2ab3fe);
        class _0x42eacc extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x42eacc['uiView']);
            }
        }
        _0x42eacc['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x16,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x1a
                },
                {
                    'type': 'Box',
                    'props': {
                        'x': 0x24,
                        'var': 'window',
                        'top': 0xda,
                        'styleSkin': 'game/m_AD.' + 'png'
                    },
                    'compId': 0x5,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x0,
                                'x': 0x0,
                                'width': 0x288,
                                'skin': 'game/bg2.p' + 'ng',
                                'sizeGrid': '33,30,35,2' + '8',
                                'name': 'bg',
                                'height': 0x384
                            },
                            'compId': 0x6
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': 0x15,
                                'x': 0x227,
                                'var': 'closebtn',
                                'texture': 'game/close' + '.png'
                            },
                            'compId': 0x7
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x89,
                                'x': 0x1c,
                                'var': 'skinobj',
                                'styleSkin': 'game/m_AD.' + 'png'
                            },
                            'compId': 0x9
                        },
                        {
                            'type': 'HBox',
                            'props': {
                                'y': 0x2e8,
                                'x': 0x144,
                                'width': 0x0,
                                'var': 'pageObj',
                                'styleSkin': 'game/m_AD.' + 'png',
                                'space': 0x14,
                                'height': 0x0,
                                'anchorY': 0.5,
                                'anchorX': 0.5,
                                'align': 'middle'
                            },
                            'compId': 0xa
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': 0x2fc,
                                'x': 0x8f,
                                'width': 0x169,
                                'var': 'unlockbtn',
                                'skin': 'game/green' + 'btn.png',
                                'sizeGrid': '53,81,53,8' + '6',
                                'height': 0x6e
                            },
                            'compId': 0xb,
                            'child': [
                                {
                                    'type': 'Sprite',
                                    'props': {
                                        'y': 0x1f,
                                        'x': 0x18,
                                        'texture': 'game/gold2' + '.png',
                                        'scaleY': 0.5,
                                        'scaleX': 0.5
                                    },
                                    'compId': 0xc
                                },
                                {
                                    'type': 'Text',
                                    'props': {
                                        'y': 0x1e,
                                        'x': 0x4c,
                                        'width': 0xb4,
                                        'var': 'unlockCoin',
                                        'valign': 'middle',
                                        'text': '500',
                                        'height': 0x2d,
                                        'fontSize': 0x2d,
                                        'font': 'Microsoft\x20' + 'YaHei',
                                        'color': '#ffffff',
                                        'bold': !0x0,
                                        'align': 'right',
                                        'runtime': 'laya.displ' + 'ay.Text'
                                    },
                                    'compId': 0xd
                                },
                                {
                                    'type': 'Text',
                                    'props': {
                                        'y': 0x1e,
                                        'x': 0xdb,
                                        'width': 0x6e,
                                        'valign': 'middle',
                                        'text': '',
                                        'runtime': 'laya.displ' + 'ay.Text',
                                        'height': 0x32,
                                        'fontSize': 0x2d,
                                        'font': 'Microsoft\x20' + 'YaHei',
                                        'color': '#ffffff',
                                        'bold': !0x0,
                                        'align': 'center'
                                    },
                                    'compId': 0xe
                                }
                            ]
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': 0x89,
                                'x': 0x1c,
                                'visible': !0x1,
                                'var': 'selectIcon',
                                'texture': 'game/skin_' + 'select.png'
                            },
                            'compId': 0x15
                        },
                        {
                            'type': 'Sprite',
                            'props': {
                                'y': -46.5,
                                'x': 0x1b4,
                                'texture': 'game/gold2' + '.png',
                                'scaleY': 0.5,
                                'scaleX': 0.5,
                                'name': 'coinobj'
                            },
                            'compId': 0x13
                        },
                        {
                            'type': 'Text',
                            'props': {
                                'y': -0x36,
                                'x': 0x1e7,
                                'width': 0xe8,
                                'var': 'coinCount',
                                'valign': 'middle',
                                'text': '1000',
                                'runtime': 'laya.displ' + 'ay.Text',
                                'height': 0x49,
                                'fontSize': 0x28,
                                'font': 'Microsoft\x20' + 'YaHei',
                                'color': '#ffffff',
                                'align': 'left'
                            },
                            'compId': 0x14
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'var': 'zzsdkBox',
                        'top': 0x0,
                        'right': 0x0,
                        'mouseThrough': !0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x17
                }
            ],
            'loadList': [
                'game/m_AD.' + 'png',
                'game/bg2.p' + 'ng',
                'game/close' + '.png',
                'game/green' + 'btn.png',
                'game/gold2' + '.png',
                'game/skin_' + 'select.png'
            ],
            'loadList3D': []
        }, _0x43396d['SkinUI'] = _0x42eacc, _0x3665df('ui.SkinUI', _0x42eacc);
        class _0xc1a316 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0xc1a316['uiView']);
            }
        }
        _0xc1a316['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'name': 'bg',
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.85
                    },
                    'compId': 0x3
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x2ee,
                        'right': 0x0,
                        'left': 0x0,
                        'height': 0x340,
                        'centerY': -0x16
                    },
                    'compId': 0x4,
                    'child': [
                        {
                            'type': 'Box',
                            'props': {
                                'y': 0x109,
                                'x': 0x177,
                                'width': 0x212,
                                'height': 0x212,
                                'centerX': 0x0,
                                'anchorY': 0.5,
                                'anchorX': 0.5
                            },
                            'compId': 0x5,
                            'child': [
                                {
                                    'type': 'Animation',
                                    'props': {
                                        'y': 0x195,
                                        'x': 0x114,
                                        'var': 'bgAni',
                                        'source': 'ani/Light.' + 'ani',
                                        'autoPlay': !0x0
                                    },
                                    'compId': 0x7
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'var': 'carImg',
                                        'skin': 'x/s_skin17' + '.png',
                                        'scaleY': 0x1,
                                        'scaleX': 0x1,
                                        'centerY': 0x64,
                                        'centerX': 0xb,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0x1c
                                },
                                {
                                    'type': 'Button',
                                    'props': {
                                        'y': 0x2a6,
                                        'x': 0x109,
                                        'width': 0x168,
                                        'var': 'btn',
                                        'top': 0x26a,
                                        'stateNum': 0x1,
                                        'skin': 'game/r_btn' + '.png',
                                        'sizeGrid': '0,75,0,75',
                                        'scaleY': 0x1,
                                        'scaleX': 0x1,
                                        'height': 0x78,
                                        'centerX': 0xb,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0xd,
                                    'child': [
                                        {
                                            'type': 'Image',
                                            'props': {
                                                'width': 0x3c,
                                                'skin': 'common/ic_' + 'vedio1.png',
                                                'scaleY': 0.8,
                                                'scaleX': 0.8,
                                                'height': 0x3c,
                                                'centerY': 0x0,
                                                'centerX': -0x73,
                                                'anchorY': 0.5,
                                                'anchorX': 0.5
                                            },
                                            'compId': 0x10
                                        },
                                        {
                                            'type': 'Label',
                                            'props': {
                                                'text': '立即试用',
                                                'strokeColor': '#854428',
                                                'stroke': 0x6,
                                                'fontSize': 0x32,
                                                'color': '#FFFFFF',
                                                'centerY': 0x0,
                                                'centerX': 0x28,
                                                'bold': !0x0
                                            },
                                            'compId': 0x11
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'Box',
                            'props': {
                                'width': 0xfa,
                                'var': 'closeBtn',
                                'top': 0x2eb,
                                'height': 0x61,
                                'centerX': 0x0
                            },
                            'compId': 0x12,
                            'child': [
                                {
                                    'type': 'Button',
                                    'props': {
                                        'top': 0x0,
                                        'stateNum': 0x1,
                                        'skin': 'game/m_btn' + '2.png',
                                        'sizeGrid': '0,52,0,62',
                                        'scaleY': 0x1,
                                        'scaleX': 0x1,
                                        'right': 0x0,
                                        'name': 'btnBg',
                                        'left': 0x0,
                                        'bottom': 0x0,
                                        'anchorY': 0.5,
                                        'anchorX': 0.5
                                    },
                                    'compId': 0x13
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x1e,
                                        'text': '放弃使用',
                                        'stroke': 0x4,
                                        'fontSize': 0x28,
                                        'color': '#FFFFFF',
                                        'centerY': 0x0,
                                        'centerX': 0x0,
                                        'bold': !0x0
                                    },
                                    'compId': 0x1b
                                },
                                {
                                    'type': 'Script',
                                    'props': { 'runtime': 'views/item' + '/CloseBtnS' + 'cript.ts' },
                                    'compId': 0x19
                                }
                            ]
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'y': 0x0,
                        'x': 0x0,
                        'var': 'zzsdkBox',
                        'top': 0x0,
                        'right': 0x0,
                        'mouseThrough': !0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x1d
                }
            ],
            'animations': [{
                    'nodes': [{
                            'target': 0xd,
                            'keyframes': {
                                'scaleY': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleY',
                                        'index': 0x19
                                    }
                                ],
                                'scaleX': [
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x0
                                    },
                                    {
                                        'value': 1.1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x3
                                    },
                                    {
                                        'value': 0.9,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x6
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x9
                                    },
                                    {
                                        'value': 1.05,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0xc
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0xf
                                    },
                                    {
                                        'value': 0x1,
                                        'tweenMethod': 'linearNone',
                                        'tween': !0x0,
                                        'target': 0xd,
                                        'key': 'scaleX',
                                        'index': 0x19
                                    }
                                ]
                            }
                        }],
                    'name': 'heartAni',
                    'id': 0x1,
                    'frameRate': 0x18,
                    'action': 0x0
                }],
            'loadList': [
                'ani/Light.' + 'ani',
                'x/s_skin17' + '.png',
                'game/r_btn' + '.png',
                'common/ic_' + 'vedio1.png',
                'game/m_btn' + '2.png'
            ],
            'loadList3D': []
        }, _0x43396d['TryViewUI'] = _0xc1a316, _0x3665df('ui.TryView' + 'UI', _0xc1a316);
        class _0x36b7c5 extends Laya['View'] {
            constructor() {
                super();
            }
            ['createChil' + 'dren']() {
                super['createChil' + 'dren'](), this['createView'](_0x36b7c5['uiView']);
            }
        }
        _0x36b7c5['uiView'] = {
            'type': 'View',
            'props': {
                'width': 0x2d0,
                'top': 0x0,
                'right': 0x0,
                'left': 0x0,
                'height': 0x500,
                'bottom': 0x0
            },
            'compId': 0x2df,
            'child': [
                {
                    'type': 'Box',
                    'props': {
                        'visible': !0x0,
                        'top': 0x0,
                        'right': 0x0,
                        'left': 0x0,
                        'bottom': 0x0,
                        'bgColor': '#000000',
                        'alpha': 0.8
                    },
                    'compId': 0x2ef
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x2d0,
                        'var': 'window',
                        'styleSkin': 'game/m_AD.' + 'png',
                        'height': 0x384,
                        'centerY': -0x32,
                        'centerX': 0x0
                    },
                    'compId': 0x5,
                    'child': [
                        {
                            'type': 'Image',
                            'props': {
                                'var': 'title',
                                'skin': 'common/suc' + 'cesst.png',
                                'scaleY': 0.8,
                                'scaleX': 0.8,
                                'centerX': 0.5
                            },
                            'compId': 0x2e2
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': -0x5f,
                                'x': 0x21f,
                                'width': 0xb1,
                                'var': 'GoldCnt',
                                'text': '123',
                                'height': 0x2d,
                                'fontSize': 0x2d,
                                'color': '#ffffff'
                            },
                            'compId': 0x26
                        },
                        {
                            'type': 'Image',
                            'props': {
                                'y': -0x5f,
                                'x': 0x1ea,
                                'skin': 'game/gold2' + '.png',
                                'scaleY': 0.5,
                                'scaleX': 0.5
                            },
                            'compId': 0x25
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': 0x69,
                                'x': 0xd0,
                                'var': 'resultVal',
                                'text': '88',
                                'fontSize': 0x1e,
                                'color': '#ffffff',
                                'align': 'center',
                                'centerX': 0x0
                            },
                            'compId': 0x28
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'width': 0x2d0,
                        'right': 0x0,
                        'name': 'windowCent' + 'er',
                        'left': 0x0,
                        'height': 0x1ba,
                        'centerY': 0x159
                    },
                    'compId': 0x2eb,
                    'child': [
                        {
                            'type': 'Label',
                            'props': {
                                'x': 293.5,
                                'width': 0x85,
                                'var': 'NormalBtn',
                                'valign': 'middle',
                                'underline': !0x0,
                                'text': 'CLAIM',
                                'height': 0x31,
                                'fontSize': 0x1e,
                                'font': 'Arial',
                                'color': '#ffffff',
                                'centerY': 0x23,
                                'bold': !0x0,
                                'align': 'center'
                            },
                            'compId': 0x8
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'x': 296.5,
                                'width': 0x85,
                                'var': 'NormalBtn2',
                                'valign': 'middle',
                                'underline': !0x0,
                                'text': 'CLAIM',
                                'height': 0x31,
                                'fontSize': 0x1e,
                                'font': 'Arial',
                                'color': '#ffffff',
                                'centerY': 0x76,
                                'bold': !0x0,
                                'align': 'center'
                            },
                            'compId': 0x2e6
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'y': 0x64,
                                'width': 0x172,
                                'var': 'NextBtn',
                                'stateNum': 0x1,
                                'skin': 'game/r_btn' + '.png',
                                'sizeGrid': '24,29,24,2' + '9',
                                'height': 0x6e,
                                'centerX': 0x3
                            },
                            'compId': 0x29,
                            'child': [
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x10,
                                        'x': 0x8b,
                                        'width': 0xbb,
                                        'visible': !0x0,
                                        'var': 'NextLabel',
                                        'valign': 'middle',
                                        'text': 'COIN\x20x\x203',
                                        'height': 0x4d,
                                        'fontSize': 0x28,
                                        'font': 'Arial',
                                        'align': 'center'
                                    },
                                    'compId': 0x215,
                                    'child': [{
                                            'type': 'Image',
                                            'props': {
                                                'y': 0x6,
                                                'x': -0x61,
                                                'skin': 'game/m_AD.' + 'png'
                                            },
                                            'compId': 0x2d7
                                        }]
                                },
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': 0xd,
                                        'x': 0x12,
                                        'visible': !0x1,
                                        'var': 'NextBox',
                                        'skin': 'game/chess' + 'brut.png'
                                    },
                                    'compId': 0x2cf,
                                    'child': [{
                                            'type': 'Label',
                                            'props': {
                                                'y': 24.5,
                                                'x': 0x9c,
                                                'text': 'OPEN',
                                                'fontSize': 0x23,
                                                'color': '#000000',
                                                'bold': !0x0
                                            },
                                            'compId': 0x2d2
                                        }]
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x23,
                                        'x': 0x67,
                                        'var': 'StarBox',
                                        'text': 'CHALLENGE',
                                        'centerX': 0x0,
                                        'fontSize': 0x28,
                                        'color': '#000000',
                                        'bold': !0x0
                                    },
                                    'compId': 0x2d0
                                }
                            ]
                        },
                        {
                            'type': 'Label',
                            'props': {
                                'y': 0x3a,
                                'x': 0xd1,
                                'text': 'COIN:',
                                'fontSize': 0x23,
                                'color': '#ffffff'
                            },
                            'compId': 0x2d3,
                            'child': [
                                {
                                    'type': 'Image',
                                    'props': {
                                        'y': -5.5,
                                        'x': 0xbb,
                                        'skin': 'game/gold2' + '.png',
                                        'scaleY': 0.5,
                                        'scaleX': 0.5
                                    },
                                    'compId': 0x2d4
                                },
                                {
                                    'type': 'Label',
                                    'props': {
                                        'y': 3.5,
                                        'x': 0xf3,
                                        'width': 0x74,
                                        'var': 'resultRewa' + 'rd',
                                        'text': '123',
                                        'height': 0x1c,
                                        'fontSize': 0x19,
                                        'color': '#ffffff'
                                    },
                                    'compId': 0x2d5
                                }
                            ]
                        },
                        {
                            'type': 'Button',
                            'props': {
                                'y': 0x64,
                                'x': 0x0,
                                'width': 0x172,
                                'var': 'NextBtnnew',
                                'stateNum': 0x1,
                                'skin': 'game/r_btn' + '.png',
                                'sizeGrid': '24,29,24,2' + '9',
                                'height': 0x6e,
                                'centerX': 0x3
                            },
                            'compId': 0x2f0,
                            'child': [{
                                    'type': 'Label',
                                    'props': {
                                        'y': 0x23,
                                        'x': 0x7b,
                                        'text': '下一关',
                                        'fontSize': 0x28,
                                        'color': '#000000',
                                        'bold': !0x0
                                    },
                                    'compId': 0x2f5
                                }]
                        }
                    ]
                },
                {
                    'type': 'Box',
                    'props': {
                        'var': 'zzsdkBox',
                        'top': 0x0,
                        'mouseThrough': !0x0,
                        'left': 0x0,
                        'bottom': 0x0
                    },
                    'compId': 0x2e8,
                    'child': [{
                            'type': 'Box',
                            'props': {
                                'width': 0x2d0,
                                'mouseThrough': !0x0,
                                'left': 0x0,
                                'height': 0x384,
                                'centerY': -0x73
                            },
                            'compId': 0x2ec,
                            'child': [{
                                    'type': 'Box',
                                    'props': {
                                        'width': 0x28a,
                                        'var': 'a3xbox',
                                        'height': 0x1ea,
                                        'centerY': 0x14,
                                        'centerX': 0x0
                                    },
                                    'child': [{
                                            'x': 0x3c,
                                            'type': 'List',
                                            'searchKey': 'List,gamel' + 'ist',
                                            'props': {
                                                'y': 0x6,
                                                'x': 0xb,
                                                'width': 0x275,
                                                'var': 'gamelist',
                                                'spaceY': 0xa,
                                                'spaceX': 0xa,
                                                'repeatY': 0x3,
                                                'repeatX': 0x3,
                                                'height': 0x1de
                                            },
                                            'nodeParent': 0x2ed,
                                            'label': 'gamelist',
                                            'isOpen': !![],
                                            'isDirectory': !![],
                                            'isAniNode': !![],
                                            'hasChild': !![],
                                            'compId': 0x2f6,
                                            'child': [{
                                                    'x': 0x4b,
                                                    'type': 'Box',
                                                    'searchKey': 'Box,render',
                                                    'props': {
                                                        'width': 0xc8,
                                                        'name': 'render',
                                                        'height': 0x96
                                                    },
                                                    'nodeParent': 0x2f6,
                                                    'label': 'render',
                                                    'isOpen': !![],
                                                    'isDirectory': !![],
                                                    'isAniNode': ![],
                                                    'hasChild': !![],
                                                    'compId': 0x2f8,
                                                    'child': [{
                                                            'x': 0x5a,
                                                            'type': 'Image',
                                                            'searchKey': 'Image,thum' + 'b',
                                                            'props': {
                                                                'y': 0x0,
                                                                'x': 0x0,
                                                                'width': 0xc8,
                                                                'name': 'thumb',
                                                                'height': 0x96
                                                            },
                                                            'nodeParent': 0x2f8,
                                                            'label': 'thumb',
                                                            'isDirectory': ![],
                                                            'isAniNode': ![],
                                                            'hasChild': ![],
                                                            'compId': 0x2f7,
                                                            'child': []
                                                        }]
                                                }]
                                        }],
                                    'compId': 0x2ed
                                }]
                        }]
                }
            ],
            'loadList': [
                'game/m_AD.' + 'png',
                'common/suc' + 'cesst.png',
                'game/gold2' + '.png',
                'game/r_btn' + '.png',
                'game/chess' + 'brut.png'
            ],
            'loadList3D': []
        }, _0x43396d['ZSResultUI'] = _0x36b7c5, _0x3665df('ui.ZSResul' + 'tUI', _0x36b7c5);
    }(_0x3a0bc3 || (_0x3a0bc3 = {})), function (_0x5f2554) {
        !function (_0x51a6c1) {
            class _0x54375e extends Laya['EffectAnim' + 'ation'] {
                constructor() {
                    super(), this['effectData'] = _0x5f2554['effect']['BtnScaleDo' + 'wnUI']['uiView'];
                }
            }
            _0x54375e['uiView'] = {
                'type': 'View',
                'props': { 'name': 'BtnScaleDo' + 'wn' },
                'compId': 0x1,
                'child': [{
                        'type': 'Image',
                        'props': { 'x': 0x0 },
                        'compId': 0x2
                    }],
                'animations': [{
                        'nodes': [{
                                'target': 0x2,
                                'keyframes': {
                                    'x': [{
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'x',
                                            'index': 0x0
                                        }],
                                    'scaleY': [
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleY',
                                            'index': 0x0
                                        },
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleY',
                                            'index': 0x1
                                        },
                                        {
                                            'value': 0.92,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleY',
                                            'index': 0x5
                                        }
                                    ],
                                    'scaleX': [
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleX',
                                            'index': 0x0
                                        },
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleX',
                                            'index': 0x1
                                        },
                                        {
                                            'value': 0.92,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleX',
                                            'index': 0x5
                                        }
                                    ]
                                }
                            }],
                        'name': 'PressDown',
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }],
                'loadList': [],
                'loadList3D': []
            }, _0x51a6c1['BtnScaleDo' + 'wnUI'] = _0x54375e, _0x3665df('ui.effect.' + 'BtnScaleDo' + 'wnUI', _0x54375e);
            class _0x123fad extends Laya['EffectAnim' + 'ation'] {
                constructor() {
                    super(), this['effectData'] = _0x5f2554['effect']['BtnScaleUp' + 'UI']['uiView'];
                }
            }
            _0x123fad['uiView'] = {
                'type': 'View',
                'props': { 'name': 'BtnScaleUp' },
                'compId': 0x1,
                'child': [{
                        'type': 'Image',
                        'props': {},
                        'compId': 0x2
                    }],
                'animations': [{
                        'nodes': [{
                                'target': 0x2,
                                'keyframes': {
                                    'x': [{
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'x',
                                            'index': 0x0
                                        }],
                                    'scaleY': [
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleY',
                                            'index': 0x0
                                        },
                                        {
                                            'value': 0.92,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleY',
                                            'index': 0x1
                                        },
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleY',
                                            'index': 0x5
                                        }
                                    ],
                                    'scaleX': [
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleX',
                                            'index': 0x0
                                        },
                                        {
                                            'value': 0.92,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleX',
                                            'index': 0x1
                                        },
                                        {
                                            'value': 0x1,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x2,
                                            'key': 'scaleX',
                                            'index': 0x5
                                        }
                                    ]
                                }
                            }],
                        'name': 'PressUp',
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }],
                'loadList': [],
                'loadList3D': []
            }, _0x51a6c1['BtnScaleUp' + 'UI'] = _0x123fad, _0x3665df('ui.effect.' + 'BtnScaleUp' + 'UI', _0x123fad);
        }(_0x5f2554['effect'] || (_0x5f2554['effect'] = {}));
    }(_0x3a0bc3 || (_0x3a0bc3 = {})), function (_0xb1783a) {
        !function (_0x4b03a9) {
            class _0x1975e5 extends Laya['View'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['createView'](_0x1975e5['uiView']);
                }
            }
            _0x1975e5['uiView'] = {
                'type': 'View',
                'props': {
                    'width': 0xc8,
                    'height': 0x76
                },
                'loadList': [],
                'loadList3D': []
            }, _0x4b03a9['AttributeB' + 'uttonUI'] = _0x1975e5, _0x3665df('ui.item.At' + 'tributeBut' + 'tonUI', _0x1975e5);
            class _0x4ac672 extends Laya['View'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['createView'](_0x4ac672['uiView']);
                }
            }
            _0x4ac672['uiView'] = {
                'type': 'View',
                'props': {
                    'width': 0xd0,
                    'runtime': 'views/item' + '/DaySignIt' + 'emView.ts',
                    'height': 0xd0
                },
                'compId': 0x2,
                'child': [{
                        'type': 'Box',
                        'props': {
                            'var': 'containBox',
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0
                        },
                        'compId': 0x3,
                        'child': [
                            {
                                'type': 'Image',
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'var': 'bgImage',
                                    'skin': 'sign/item_' + 'bg.png'
                                },
                                'compId': 0x4
                            },
                            {
                                'type': 'Label',
                                'props': {
                                    'y': 0x17,
                                    'width': 0xcc,
                                    'var': 'titleLabel',
                                    'valign': 'middle',
                                    'text': '第一天',
                                    'height': 0x28,
                                    'fontSize': 0x1c,
                                    'color': '#3b4482',
                                    'centerX': 0x0,
                                    'bold': !0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5,
                                    'align': 'center'
                                },
                                'compId': 0x5
                            },
                            {
                                'type': 'Label',
                                'props': {
                                    'y': 0xba,
                                    'width': 0xcc,
                                    'var': 'descLabel',
                                    'valign': 'middle',
                                    'text': 'X300',
                                    'stroke': 0x2,
                                    'height': 0x28,
                                    'fontSize': 0x28,
                                    'color': '#FFFFFF',
                                    'centerX': 0x0,
                                    'bold': !0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5,
                                    'align': 'center'
                                },
                                'compId': 0x6
                            },
                            {
                                'type': 'Image',
                                'props': {
                                    'var': 'shineImage',
                                    'skin': 'sign/shine' + '.png',
                                    'rotation': 0x2d0,
                                    'centerY': 0x0,
                                    'centerX': 0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5
                                },
                                'compId': 0x7
                            },
                            {
                                'type': 'Image',
                                'props': {
                                    'var': 'itemImageV' + 'iew',
                                    'skin': 'game/gold2' + '.png',
                                    'centerY': 0x0,
                                    'centerX': 0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5
                                },
                                'compId': 0x8
                            },
                            {
                                'type': 'Image',
                                'props': {
                                    'var': 'signedImag' + 'e',
                                    'skin': 'sign/sign_' + 'item_get.p' + 'ng',
                                    'centerY': 0x0,
                                    'centerX': 0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5
                                },
                                'compId': 0x9
                            }
                        ]
                    }],
                'animations': [{
                        'nodes': [{
                                'target': 0x7,
                                'keyframes': {
                                    'rotation': [
                                        {
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x7,
                                            'key': 'rotation',
                                            'index': 0x0
                                        },
                                        {
                                            'value': 0x2d0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x7,
                                            'key': 'rotation',
                                            'index': 0x1e
                                        }
                                    ]
                                }
                            }],
                        'name': 'ani1',
                        'id': 0x1,
                        'frameRate': 0xc,
                        'action': 0x0
                    }],
                'loadList': [
                    'sign/item_' + 'bg.png',
                    'sign/shine' + '.png',
                    'game/gold2' + '.png',
                    'sign/sign_' + 'item_get.p' + 'ng'
                ],
                'loadList3D': []
            }, _0x4b03a9['SignItemVi' + 'ewUI'] = _0x4ac672, _0x3665df('ui.item.Si' + 'gnItemView' + 'UI', _0x4ac672);
            class _0x4f9df4 extends Laya['View'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['createView'](_0x4f9df4['uiView']);
                }
            }
            _0x4f9df4['uiView'] = {
                'type': 'View',
                'props': {
                    'width': 0x2ee,
                    'top': 0x0,
                    'right': 0x0,
                    'left': 0x0,
                    'height': 0x536,
                    'bottom': 0x0
                },
                'compId': 0x2,
                'child': [
                    {
                        'type': 'Box',
                        'props': {
                            'y': 0x0,
                            'x': 0x0,
                            'visible': !0x0,
                            'top': 0x0,
                            'right': 0x0,
                            'name': 'bg',
                            'left': 0x0,
                            'bottom': 0x0,
                            'bgColor': '#484848',
                            'alpha': 0x1
                        },
                        'compId': 0x3
                    },
                    {
                        'type': 'Box',
                        'props': {
                            'var': 'fullBox',
                            'top': 0x64,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0
                        },
                        'compId': 0x4
                    },
                    {
                        'type': 'Button',
                        'props': {
                            'y': 0x486,
                            'x': 0x117,
                            'var': 'continueBt' + 'n',
                            'stateNum': 0x1,
                            'skin': 'game/green' + 'btn.png',
                            'sizeGrid': '35,39,36,3' + '6',
                            'name': 'continueBt' + 'n',
                            'labelSize': 0x1e,
                            'labelColors': '#FFFFFF',
                            'labelBold': !0x0,
                            'centerX': 0x0,
                            'bottom': 0x7e,
                            'anchorY': 0.5,
                            'anchorX': 0.5
                        },
                        'compId': 0x6,
                        'child': [
                            {
                                'type': 'Script',
                                'props': {
                                    'y': 0xe,
                                    'x': 0x0,
                                    'playEvent': 'mouseup',
                                    'runtime': 'ui.effect.' + 'BtnScaleUp' + 'UI'
                                },
                                'compId': 0x7
                            },
                            {
                                'type': 'Script',
                                'props': {
                                    'y': 0x0,
                                    'x': 0x0,
                                    'playEvent': 'mousedown',
                                    'runtime': 'ui.effect.' + 'BtnScaleDo' + 'wnUI'
                                },
                                'compId': 0x8
                            },
                            {
                                'type': 'Label',
                                'props': {
                                    'wordWrap': !0x1,
                                    'var': 'continueBt' + 'nLab',
                                    'valign': 'middle',
                                    'text': '继续游戏',
                                    'stroke': 0x3,
                                    'padding': '5',
                                    'name': 'continueBt' + 'nLab',
                                    'leading': 0x5,
                                    'fontSize': 0x32,
                                    'color': '#ffffff',
                                    'centerY': 0x0,
                                    'centerX': 0x0,
                                    'bold': !0x1,
                                    'align': 'center'
                                },
                                'compId': 0x9
                            }
                        ]
                    }
                ],
                'loadList': ['game/green' + 'btn.png'],
                'loadList3D': []
            }, _0x4b03a9['ZZSDKFullU' + 'I'] = _0x4f9df4, _0x3665df('ui.item.ZZ' + 'SDKFullUI', _0x4f9df4);
        }(_0xb1783a['item'] || (_0xb1783a['item'] = {}));
    }(_0x3a0bc3 || (_0x3a0bc3 = {})), function (_0xad5ead) {
        !function (_0x2606cc) {
            class _0xdac38a extends Laya['View'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['createView'](_0xdac38a['uiView']);
                }
            }
            _0xdac38a['uiView'] = {
                'type': 'View',
                'props': {
                    'width': 0x2ee,
                    'runtime': 'Tui/Bottom' + 'TuiView.ts',
                    'height': 0xda
                },
                'compId': 0x2,
                'child': [
                    {
                        'type': 'Image',
                        'props': {
                            'top': 0x0,
                            'skin': 'tui/index-' + 'box.png',
                            'sizeGrid': '50,50,50,5' + '0',
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0
                        },
                        'compId': 0x5
                    },
                    {
                        'type': 'List',
                        'props': {
                            'var': 'tuiList',
                            'spaceY': 0x0,
                            'spaceX': 0x14,
                            'runtime': 'Tui/AutoSc' + 'orllView.t' + 's',
                            'right': 0xf,
                            'repeatY': 0x1,
                            'left': 0xf,
                            'centerY': 0x0
                        },
                        'compId': 0x6,
                        'child': [{
                                'type': 'Box',
                                'props': {
                                    'width': 0xa5,
                                    'renderType': 'render',
                                    'name': 'item',
                                    'height': 0xbe
                                },
                                'compId': 0x7,
                                'child': [
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'top': 0x0,
                                            'skin': 'tui/bg.png',
                                            'sizeGrid': '30,30,30,3' + '0',
                                            'right': 0x0,
                                            'left': 0x0,
                                            'bottom': 0x0
                                        },
                                        'compId': 0x8
                                    },
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'width': 0x96,
                                            'top': 0x4,
                                            'runtime': 'Tui/GifIma' + 'geView.ts',
                                            'name': 'itemImg',
                                            'height': 0x96,
                                            'centerX': 0x0
                                        },
                                        'compId': 0x9
                                    },
                                    {
                                        'type': 'Label',
                                        'props': {
                                            'width': 0xb4,
                                            'valign': 'middle',
                                            'text': '游戏名称六字',
                                            'overflow': 'hidden',
                                            'name': 'itemName',
                                            'height': 0x1e,
                                            'fontSize': 0x1a,
                                            'color': '#000000',
                                            'centerX': 0x0,
                                            'bottom': 0x3,
                                            'align': 'center'
                                        },
                                        'compId': 0xa
                                    },
                                    {
                                        'type': 'Image',
                                        'props': {
                                            'top': 0x0,
                                            'skin': 'tui/icon-h' + 'ot.png',
                                            'right': 0x0,
                                            'name': 'itemRed'
                                        },
                                        'compId': 0xb
                                    }
                                ]
                            }]
                    }
                ],
                'loadList': [
                    'tui/index-' + 'box.png',
                    'tui/bg.png',
                    'tui/icon-h' + 'ot.png'
                ],
                'loadList3D': []
            }, _0x2606cc['BottomTuiV' + 'iewUI'] = _0xdac38a, _0x3665df('ui.tui.Bot' + 'tomTuiView' + 'UI', _0xdac38a);
            class _0x49509 extends Laya['View'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['createView'](_0x49509['uiView']);
                }
            }
            _0x49509['uiView'] = {
                'type': 'View',
                'props': {
                    'width': 0x2ee,
                    'top': 0x0,
                    'runtime': 'Tui/LeftTu' + 'iView.ts',
                    'right': 0x0,
                    'mouseThrough': !0x0,
                    'left': 0x0,
                    'height': 0x536,
                    'bottom': 0x0
                },
                'compId': 0x2,
                'child': [
                    {
                        'type': 'Button',
                        'props': {
                            'visible': !0x1,
                            'var': 'tuiBgTap',
                            'top': 0x0,
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0
                        },
                        'compId': 0x3
                    },
                    {
                        'type': 'Box',
                        'props': {
                            'width': 0x244,
                            'var': 'tuiBox',
                            'height': 0x384,
                            'centerY': 0x0
                        },
                        'compId': 0x4,
                        'child': [
                            {
                                'type': 'Image',
                                'props': {
                                    'top': 0x0,
                                    'skin': 'tui/index-' + 'box.png',
                                    'sizeGrid': '15,15,15,1' + '5',
                                    'right': 0x0,
                                    'left': 0x0,
                                    'bottom': 0x0
                                },
                                'compId': 0x5
                            },
                            {
                                'type': 'List',
                                'props': {
                                    'var': 'tuilistLef' + 't',
                                    'top': 0x14,
                                    'spaceY': 0x1e,
                                    'spaceX': 0x14,
                                    'runtime': 'Tui/AutoSc' + 'orllView.t' + 's',
                                    'right': 0x14,
                                    'repeatX': 0x3,
                                    'left': 0x14,
                                    'bottom': 0x14
                                },
                                'compId': 0x7,
                                'child': [{
                                        'type': 'Box',
                                        'props': {
                                            'width': 0xa5,
                                            'renderType': 'render',
                                            'name': 'item',
                                            'height': 0xbe
                                        },
                                        'compId': 0x8,
                                        'child': [
                                            {
                                                'type': 'Image',
                                                'props': {
                                                    'width': 0xa5,
                                                    'top': 0x0,
                                                    'runtime': 'Tui/GifIma' + 'geView.ts',
                                                    'name': 'itemImg',
                                                    'left': 0x0,
                                                    'height': 0xa5
                                                },
                                                'compId': 0x9
                                            },
                                            {
                                                'type': 'Label',
                                                'props': {
                                                    'width': 0xaf,
                                                    'valign': 'middle',
                                                    'top': 0xaa,
                                                    'text': '游戏名称六字',
                                                    'overflow': 'hidden',
                                                    'name': 'itemName',
                                                    'fontSize': 0x1c,
                                                    'color': '#FFFFFF',
                                                    'centerX': 0x0,
                                                    'align': 'center'
                                                },
                                                'compId': 0xa
                                            },
                                            {
                                                'type': 'Image',
                                                'props': {
                                                    'top': 0x0,
                                                    'skin': 'tui/icon-h' + 'ot.png',
                                                    'right': 0x0,
                                                    'name': 'itemRed'
                                                },
                                                'compId': 0xb
                                            }
                                        ]
                                    }]
                            },
                            {
                                'type': 'Box',
                                'props': {
                                    'y': 0x1c2,
                                    'x': 0x271,
                                    'width': 0x5a,
                                    'var': 'leftTuiTab',
                                    'scaleY': 0.8,
                                    'scaleX': 0.8,
                                    'left': 0x244,
                                    'height': 0x111,
                                    'centerY': 0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5
                                },
                                'compId': 0xc,
                                'child': [{
                                        'type': 'Image',
                                        'props': { 'skin': 'tui/more.p' + 'ng' },
                                        'compId': 0xd
                                    }]
                            }
                        ]
                    }
                ],
                'loadList': [
                    'tui/index-' + 'box.png',
                    'tui/icon-h' + 'ot.png',
                    'tui/more.p' + 'ng'
                ],
                'loadList3D': []
            }, _0x2606cc['LeftTuiVie' + 'wUI'] = _0x49509, _0x3665df('ui.tui.Lef' + 'tTuiViewUI', _0x49509);
            class _0x2d4dbc extends Laya['View'] {
                constructor() {
                    super();
                }
                ['createChil' + 'dren']() {
                    super['createChil' + 'dren'](), this['createView'](_0x2d4dbc['uiView']);
                }
            }
            _0x2d4dbc['uiView'] = {
                'type': 'View',
                'props': {
                    'width': 0x60,
                    'runtime': 'Tui/TuiBtn' + '.ts',
                    'height': 0x74
                },
                'compId': 0x2,
                'child': [
                    {
                        'type': 'Image',
                        'props': {
                            'y': 0x3a,
                            'x': 0x30,
                            'top': 0x0,
                            'skin': 'tui/bg.png',
                            'sizeGrid': '15,15,15,1' + '5',
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0,
                            'anchorY': 0.5,
                            'anchorX': 0.5
                        },
                        'compId': 0x3,
                        'child': [
                            {
                                'type': 'Image',
                                'props': {
                                    'y': 0x2f,
                                    'width': 0x5a,
                                    'var': 'iconImage',
                                    'runtime': 'Tui/GifIma' + 'geView.ts',
                                    'height': 0x5a,
                                    'centerX': 0x0,
                                    'anchorY': 0.5,
                                    'anchorX': 0.5
                                },
                                'compId': 0x4
                            },
                            {
                                'type': 'Label',
                                'props': {
                                    'width': 0x64,
                                    'var': 'titleLabel',
                                    'valign': 'middle',
                                    'text': 'label',
                                    'overflow': 'hidden',
                                    'height': 0x18,
                                    'fontSize': 0x10,
                                    'color': '#000000',
                                    'centerX': 0x0,
                                    'bottom': 0x0,
                                    'bold': !0x1,
                                    'align': 'center'
                                },
                                'compId': 0x5
                            }
                        ]
                    },
                    {
                        'type': 'Button',
                        'props': {
                            'top': 0x0,
                            'runtime': 'Tui/MoreGa' + 'meButton.t' + 's',
                            'right': 0x0,
                            'left': 0x0,
                            'bottom': 0x0
                        },
                        'compId': 0x6
                    }
                ],
                'animations': [{
                        'nodes': [{
                                'target': 0x3,
                                'keyframes': {
                                    'rotation': [
                                        {
                                            'value': 0x1e,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0x0
                                        },
                                        {
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0x5
                                        },
                                        {
                                            'value': -0x14,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0xa
                                        },
                                        {
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0xf
                                        },
                                        {
                                            'value': 0xa,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0x12
                                        },
                                        {
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0x15
                                        },
                                        {
                                            'value': -0xa,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0x18
                                        },
                                        {
                                            'value': 0x0,
                                            'tweenMethod': 'linearNone',
                                            'tween': !0x0,
                                            'target': 0x3,
                                            'key': 'rotation',
                                            'index': 0x1b
                                        }
                                    ]
                                }
                            }],
                        'name': 'tuiAni',
                        'id': 0x1,
                        'frameRate': 0x18,
                        'action': 0x0
                    }],
                'loadList': ['tui/bg.png'],
                'loadList3D': []
            }, _0x2606cc['TuiBtnUI'] = _0x2d4dbc, _0x3665df('ui.tui.Tui' + 'BtnUI', _0x2d4dbc);
        }(_0xad5ead['tui'] || (_0xad5ead['tui'] = {}));
    }(_0x3a0bc3 || (_0x3a0bc3 = {})), function (_0x5c68af) {
        _0x5c68af[_0x5c68af['Wechat'] = 0x1] = 'Wechat', _0x5c68af[_0x5c68af['Oppo'] = 0x2] = 'Oppo', _0x5c68af[_0x5c68af['Vivo'] = 0x3] = 'Vivo', _0x5c68af[_0x5c68af['Huawei'] = 0x4] = 'Huawei', _0x5c68af[_0x5c68af['Xiaomi'] = 0x5] = 'Xiaomi', _0x5c68af[_0x5c68af['QQ'] = 0x7] = 'QQ', _0x5c68af[_0x5c68af['TouTiao'] = 0x9] = 'TouTiao', _0x5c68af[_0x5c68af['Baidu'] = 0xa] = 'Baidu', _0x5c68af[_0x5c68af['Qutoutiao'] = 0xb] = 'Qutoutiao';
    }(_0x18e875 || (_0x18e875 = {})), function (_0x342eb3) {
        _0x342eb3[_0x342eb3['Normal'] = 0x1] = 'Normal', _0x342eb3[_0x342eb3['Check'] = 0x2] = 'Check', _0x342eb3[_0x342eb3['Fission'] = 0x3] = 'Fission';
    }(_0x37ff6c || (_0x37ff6c = {}));
    var _0x1c0419, _0x5a3976 = [{
                'imgUrl': '',
                'shareContent': '!'
            }], _0x3298a1 = {
            'sRecommend': !0x0,
            'acv': '',
            'ttacv': '',
            'qqacv': '',
            'ttTuiInfo': [],
            'oppoTuiInfo': [],
            'vsAllCount': 0x3c,
            'vsFailShareCount': 0x3c,
            'tRecommend': !0x0,
            'tIosRecommend': !0x0,
            'showInAd': !0x0,
            'attrAd': !0x0,
            'eInfo': {
                'onLine': 0xb4,
                'dayGame': 0x3
            },
            'taskAd': !0x0,
            'showInADC': 0x3,
            'showCheckBox': 0x3,
            'bTimer': 0x5a,
            'bCount': 0x4,
            'meteorInfo': {
                'count': 0x3,
                'level': 0x2,
                'time': 0x14
            },
            'eggInfo': {
                'aCount': 0x3,
                'level': 0x0,
                'gold': 0x1f4,
                'delay': 0x12c,
                'eDelay': 0x5dc
            },
            'recent': {
                'show': !0x0,
                'con': [
                    {
                        'count': 0x1,
                        'prob': 0x64
                    },
                    {
                        'count': 0x2,
                        'prob': 0x32
                    }
                ]
            },
            'reliveInfo': { 'dCount': 0x1 },
            'gameTui': {
                'show': !0x0,
                'time': 0x5a
            },
            'canE': !0x1,
            'mpcv': '110,111',
            'qqAppBox': !0x1,
            'qqADInfo': {
                'bannerCount': 0x3,
                'bannerTime': 0x5a,
                'eggInfo': {
                    'aCount': 0x98967f,
                    'level': 0x98967f,
                    'delay': 0x12c,
                    'eDelay': 0x5dc
                },
                'eInfo': {
                    'onLine': 0xb4,
                    'dayGame': 0x3
                },
                'showListJump': !0x0
            },
            'wxshowbtntime': 0x2,
            'wxADInfo': {
                'checkScene': !0x0,
                'sceneList': ['2054']
            },
            'qSmall': !0x1,
            'showHdStart': 0x1,
            'showHdCount': 0x5
        }, _0xc13cd9 = {
            'IgnoreShare': !0x1,
            'Platform': _0x18e875['Wechat'],
            'packageName': 'lbnjc',
            'ClientVer': '1.0.38',
            'Apiversion': '1',
            'SupportOpenDomain': !0x0,
            'State': _0x37ff6c['Normal'],
            'showRecommend': !0x1,
            'ShareTickTimer': 0xbb8,
            'host': 'https://ga' + 'meb.oss-cn' + '-hangzhou.' + 'aliyuncs.c' + 'om/lbnjc',
            'Dev': !0x1,
            'ShareInfoList': _0x5a3976,
            'isLimitCity': !0x1,
            'isLimitCityB': !0x1,
            'appId': 'wx7732fb42' + '78767d0a',
            'closeLD': !0x1,
            'isF': !0x1,
            'vList': [],
            'UseRemoteRes': !0x1,
            'resHost': '',
            'vsInfo': {
                'type': 0x0,
                'snum': 0x0,
                'vnum': 0x0
            },
            'vGameInfo': Object['assign']({}, _0x3298a1),
            'recoverData': !0x0,
            'vAdCount': 0x0,
            'isAnonymous': !0x1,
            'aiCount': 0x1b,
            'videoTopics': ['来杯奶加茶'],
            'hasAD': !0x0,
            'hasLogin': !0x1,
            'useZip': !0x1,
            'tResVer': 0x2
        }, _0x2276ef = (_0x18e875['Qutoutiao'], _0x37ff6c['Normal'], Object['assign']({}, _0x3298a1), _0xc13cd9);
    class _0x146294 {
        constructor() {
            this['uid'] = 0x0, this['nickName'] = '玩家', this['avatar'] = '', this['token'] = '', this['session_ke' + 'y'] = '', this['openid'] = '', this['authorized'] = !0x1, this['city'] = '', this['gender'] = 0x0, this['playerInfo'] = {}, this['isDefaultD' + 'ata'] = !0x0, this['resumePlay' + 'erInfoDefa' + 'ult'](), this['loadCacheD' + 'ata']();
        }
        ['setUid'](_0x341a38) {
            this['uid'] = _0x341a38;
        }
        ['loadCacheD' + 'ata']() {
            if (!this['uid']) {
                let _0x193ab0 = Laya['LocalStora' + 'ge']['getJSON']('uid');
                _0x193ab0 && (this['uid'] = _0x193ab0['uid']);
            }
            var _0x2977e3 = null;
            if (null !== (_0x2977e3 = _0x2276ef['recoverDat' + 'a'] ? Laya['LocalStora' + 'ge']['getJSON']('user_' + this['uid']) : Laya['LocalStora' + 'ge']['getJSON']('user_r_' + this['uid'])) && '' != _0x2977e3 || (_0x2977e3 = Laya['LocalStora' + 'ge']['getJSON']('user_0')), null == _0x2977e3 || '' == _0x2977e3)
                return !0x1;
            for (var _0x394f67 in (this['isDefaultD' + 'ata'] = !0x1, _0x2977e3))
                this[_0x394f67] = _0x2977e3[_0x394f67];
            return !0x0;
        }
        ['saveToStor' + 'age']() {
            _0x2276ef['recoverDat' + 'a'] ? Laya['LocalStora' + 'ge']['setJSON']('user_' + this['uid'], this) : Laya['LocalStora' + 'ge']['setJSON']('user_r_' + this['uid'], this), Laya['LocalStora' + 'ge']['setJSON']('uid', { 'uid': this['uid'] || 0x0 });
        }
        ['resumePlay' + 'erInfoDefa' + 'ult']() {
            this['playerInfo'] = {
                'diamond': 0x0,
                'gold': 0x0,
                'level': 0x1,
                'skinArr': { 0x1: !0x0 }
            };
        }
        ['getPlayerI' + 'nfo']() {
            return this['playerInfo'];
        }
    }
    class _0x4877e4 {
        static ['getCurrent' + 'TimeStamp']() {
            return Date['now']();
        }
        static ['currentYea' + 'r']() {
            return new Date(), new Date()['getFullYea' + 'r']();
        }
        static ['currentMon' + 'th']() {
            return new Date(), new Date()['getMonth']() + 0x1;
        }
        static ['currentDat' + 'e']() {
            return new Date(), new Date()['getDate']();
        }
        static ['currentHou' + 'rs']() {
            return new Date()['getHours']();
        }
        static ['currentDay']() {
            return new Date()['getDay']();
        }
        static ['isSameDay'](_0x4fe088, _0x1cb42e) {
            if (_0x1cb42e - _0x4fe088 >= 0x5265c00)
                return !0x1;
            if (_0x4fe088 - _0x1cb42e >= 0x5265c00)
                return !0x1;
            {
                let _0x141255 = new Date();
                _0x141255['setTime'](_0x4fe088);
                let _0x42704e = new Date();
                if (_0x42704e['setTime'](_0x1cb42e), _0x141255['getDate']() === _0x42704e['getDate']())
                    return !0x0;
            }
            return !0x1;
        }
        static ['showTime'](_0x3e0e9b) {
            let _0x37f7d1 = Math['floor'](_0x3e0e9b / 0x3c), _0x330bfa = _0x3e0e9b - 0x3c * _0x37f7d1, _0x2b73a1 = '' + _0x37f7d1;
            0xa > _0x37f7d1 && (_0x2b73a1 = '0' + _0x37f7d1);
            let _0x465c1c = '' + _0x330bfa;
            return 0xa > _0x330bfa && (_0x465c1c = '0' + _0x330bfa), _0x2b73a1 + ':' + _0x465c1c;
        }
        static ['isToday'](_0x16e5c2) {
            return this['isSameDay'](_0x16e5c2, Date['now']());
        }
        static ['timestampT' + 'oDay'](_0x165290) {
            var _0x2a8c4d = new Date(_0x165290);
            return _0x2a8c4d['getFullYea' + 'r']() + '-' + ((_0x2a8c4d['getMonth']() + 0x1 < 0xa ? '0' + (_0x2a8c4d['getMonth']() + 0x1) : _0x2a8c4d['getMonth']() + 0x1) + '-') + (_0x2a8c4d['getDate']() + '\x20');
        }
    }
    !function (_0x2317ab) {
        _0x2317ab['ResLoadPro' + 'gress'] = 'ResLoadPro' + 'gress', _0x2317ab['StartLoadF' + 'inish'] = 'StartLoadF' + 'inish', _0x2317ab['GetFocus'] = 'GetFocus', _0x2317ab['LostFocus'] = 'LostFocus', _0x2317ab['ShareSucce' + 'ss'] = 'ShareSucce' + 'ss', _0x2317ab['ShowAdComp' + 'leted'] = 'ShowAdComp' + 'leted', _0x2317ab['CloseShowA' + 'd'] = 'CloseShowA' + 'd', _0x2317ab['FetchVideo' + 'Fail'] = 'FetchVideo' + 'Fail', _0x2317ab['ShareFail'] = 'ShareFail', _0x2317ab['userLoginF' + 'inish'] = 'userLoginF' + 'inish', _0x2317ab['Subpackage' + 'LoadProgre' + 'ss'] = 'Subpackage' + 'LoadProgre' + 'ss', _0x2317ab['ShowBanner' + 'Completed'] = 'ShowBanner' + 'Completed', _0x2317ab['FinishVide' + 'oAd'] = 'FinishVide' + 'oAd', _0x2317ab['ShowShareV' + 'ideoComple' + 'ted'] = 'ShowShareV' + 'ideoComple' + 'ted', _0x2317ab['CloseShowS' + 'hareViedo'] = 'CloseShowS' + 'hareViedo', _0x2317ab['BannerPosC' + 'hange'] = 'BannerPosC' + 'hange', _0x2317ab['DestoryUse' + 'rInfoButto' + 'n'] = 'DestoryUse' + 'rInfoButto' + 'n', _0x2317ab['OverDayEve' + 'nt'] = 'OverDayEve' + 'nt', _0x2317ab['OpenView'] = 'OpenView', _0x2317ab['CloseView'] = 'CloseView', _0x2317ab['loadMapFin' + 'ish'] = 'loadMapFin' + 'ish', _0x2317ab['gameStartC' + 'DEnd'] = 'gameStartC' + 'DEnd', _0x2317ab['ShowView'] = 'showView', _0x2317ab['HideView'] = 'hideView', _0x2317ab['UpdateReco' + 'rdBtn'] = 'UpdateReco' + 'rdBtn', _0x2317ab['PlayerGood' + 'sUpdate'] = 'PlayerGood' + 'sUpdate', _0x2317ab['UserInfoCh' + 'ange'] = 'UserInfoCh' + 'ange', _0x2317ab['RoleDie'] = 'RoleDie', _0x2317ab['GameSceneR' + 'eady'] = 'GameSceneR' + 'eady', _0x2317ab['BattleTime' + 'Change'] = 'BattleTime' + 'Change', _0x2317ab['ReliveView' + 'Show'] = 'ReliveView' + 'Show', _0x2317ab['onAddEnerg' + 'y'] = 'onAddEnerg' + 'y', _0x2317ab['UpdateCrop' + 'sItem'] = 'UpdateCrop' + 'sItem', _0x2317ab['moveInputC' + 'hange'] = 'moveInputC' + 'hange', _0x2317ab['SkinUsedCh' + 'ange'] = 'SkinUsedCh' + 'ange', _0x2317ab['killNumCha' + 'nge'] = 'killNumCha' + 'nge', _0x2317ab['LevelUp'] = 'LevelUp', _0x2317ab['Switch_Pag' + 'e'] = 'Switch_Pag' + 'e', _0x2317ab['Skin_Click' + 'Item'] = 'Skin_Click' + 'Item', _0x2317ab['zsResultIt' + 'em_ClickIt' + 'em'] = 'zsResultIt' + 'em_ClickIt' + 'em', _0x2317ab['Reward_Cli' + 'ckItem'] = 'Reward_Cli' + 'ckItem', _0x2317ab['Reward_Upd' + 'ateInfo'] = 'Reward_Upd' + 'ateInfo', _0x2317ab['RefZZSDKMa' + 'nager'] = 'RefZZSDKMa' + 'nager';
    }(_0x1c0419 || (_0x1c0419 = {}));
    class _0x4441f7 extends Laya['EventDispa' + 'tcher'] {
        static get ['Instance']() {
            return null === _0x4441f7['_instance'] && (_0x4441f7['_instance'] = new _0x4441f7()), _0x4441f7['_instance'];
        }
    }
    _0x4441f7['_instance'] = null;
    class _0x4ace69 {
    }
    _0x4ace69['windowWidt' + 'h'] = 0x0, _0x4ace69['windowHeig' + 'ht'] = 0x0, _0x4ace69['screenWidt' + 'h'] = 0x0, _0x4ace69['screenHeig' + 'ht'] = 0x0, _0x4ace69['fetchingVi' + 'deoAd'] = !0x1, _0x4ace69['registerTi' + 'me'] = 0x0, _0x4ace69['accountTim' + 'e'] = 0x0, _0x4ace69['isNewPlaye' + 'r'] = !0x1, _0x4ace69['firstTimeP' + 'layer'] = !0x1, _0x4ace69['teachMode'] = !0x1, _0x4ace69['lastStartT' + 'ime'] = 0x0, _0x4ace69['isOverDay'] = !0x1, _0x4ace69['severTime'] = 0x0, _0x4ace69['scene'] = 0x0, _0x4ace69['registerDa' + 'yString'] = '', _0x4ace69['canE'] = !0x1, _0x4ace69['chid'] = null, _0x4ace69['chidState'] = !0x1, _0x4ace69['channel'] = null, _0x4ace69['isshowShiP' + 'in'] = !0x1;
    class _0x523ef5 {
        constructor() {
            this['game_name'] = '来杯奶加茶', this['isplaymuis' + 'c'] = !0x1;
        }
        static get ['Instance']() {
            return null === _0x523ef5['_instance'] && (_0x523ef5['_instance'] = new _0x523ef5()), _0x523ef5['_instance'];
        }
        ['reportData'](_0x30c579) {
            'undefined' != typeof qttGame && qttGame['reportData'] && qttGame['reportData']({
                'type': _0x30c579,
                'open_id': _0x1ae356['Instance']['getUUID'](),
                'app_id': _0x2276ef['appId'],
                'game_name': this['game_name']
            });
        }
        ['loadComple' + 'te']() {
            _0x26ee17['IsQutoutia' + 'o']() && this['reportData']('ready');
        }
        ['loginsucce' + 'ss']() {
            _0x26ee17['IsQutoutia' + 'o']() && this['reportData']('login');
        }
        ['loadingFin' + 'ished']() {
            _0x26ee17['IsQutoutia' + 'o']() && this['reportData']('load');
        }
        ['showPaster' + 'AD'](_0x568280, _0x4e692d, _0x176c03, _0x34a438) {
        }
        ['hidePaster' + 'Ad']() {
            _0x26ee17['isIos'] ? qttGame['hidePaster']() : qttGame['hideInters' + 'titialAd']();
        }
        ['showHDAD']() {
            let _0x2f77b0 = !0x1, _0x3c4426 = _0x1ae356['Instance']['dayBattleC' + 'ount'], _0x5d7288 = _0x2276ef['vGameInfo']['showHdStar' + 't'], _0x20913e = _0x2276ef['vGameInfo']['showHdCoun' + 't'];
            _0x5d7288 && _0x20913e && _0x3c4426 >= _0x5d7288 && (_0x3c4426 % _0x20913e != 0x0 && 0x1 != _0x3c4426 || (_0x2f77b0 = !0x0)), _0x2f77b0 && qttGame['showHDAD']({
                'index': 0x3,
                'gametype': 0x3,
                'rewardtype': 0x1,
                'data': {},
                'title': '刷新道具',
                'url': '//newidea4' + '-gamecente' + 'r-frontend' + '.1sapp.com' + '/game/prod' + '/fkxxl_img' + '/1.png',
                'callback': _0x5089ed => {
                }
            });
        }
    }
    _0x523ef5['_instance'] = null;
    var _0xc4e5f6 = {
        'Bgm': 'music/bgm.' + 'mp3',
        'Button': 'music/butt' + 'on.mp3',
        'Fail': 'music/over' + '.mp3',
        'Gold': 'music/coin' + '.mp3',
        'egg': 'music/egg.' + 'mp3',
        'water': 'music/wate' + 'r.mp3',
        'destroy': 'music/dest' + 'roy.mp3',
        'yaohuang': 'music/yaoh' + 'uang.mp3',
        'victory': 'music/Vict' + 'ory.mp3',
        'success': 'music/succ' + 'ess.mp3',
        'LevelUpdate': 'music/got.' + 'mp3'
    };
    class _0x2d5683 {
        constructor() {
            this['curBgmName'] = null, this['canPlay'] = !0x0, this['init'](), _0x4441f7['Instance']['on'](_0x1c0419['GetFocus'], this, this['onGetFocus']), _0x4441f7['Instance']['on'](_0x1c0419['LostFocus'], this, this['onLostFocu' + 's']), this['curBgmName'] = null;
        }
        static get ['Instance']() {
            return null == _0x2d5683['_instance'] && (_0x2d5683['_instance'] = new _0x2d5683()), _0x2d5683['_instance'];
        }
        ['init']() {
            Laya['SoundManag' + 'er']['autoStopMu' + 'sic'] = !0x1;
            var _0x406ab1 = Laya['LocalStora' + 'ge']['getItem']('musicVolum' + 'e'), _0x2e979e = 0x1;
            null !== _0x406ab1 && '' !== _0x406ab1 && (_0x2e979e = parseFloat(_0x406ab1 + '')), this['setMusicVo' + 'lume'](_0x2e979e), this['setMusicMu' + 'te'](0x0 == _0x2e979e);
            var _0x2546cb = Laya['LocalStora' + 'ge']['getItem']('soundVolum' + 'e'), _0x5a346a = 0x1;
            null !== _0x2546cb && '' !== _0x2546cb && (_0x5a346a = parseFloat(_0x2546cb)), this['setSoundVo' + 'lume'](_0x5a346a), this['setSoundMu' + 'te'](0x0 == _0x5a346a);
        }
        ['onLostFocu' + 's']() {
            this['stopAll']();
        }
        ['onGetFocus']() {
            this['startAll']();
        }
        ['startAll']() {
            null != this['curBgmName'] && setTimeout(() => {
                null != this['curBgmName'] && Laya['SoundManag' + 'er']['playMusic'](this['curBgmName']);
            }, 0x3e8);
        }
        ['playBgm']() {
            this['curBgmName'] = _0xc4e5f6['Bgm'], this['playMusic'](_0xc4e5f6['Bgm']);
        }
        ['playBattle' + 'Bgm']() {
        }
        ['stopSound'](_0x3209f0) {
            Laya['SoundManag' + 'er']['stopSound'](_0x3209f0);
        }
        ['stopMusic']() {
            Laya['SoundManag' + 'er']['stopMusic']();
        }
        ['playUIClic' + 'k']() {
            this['playSound'](_0xc4e5f6['Button']);
        }
        ['playMusic'](_0x3651a1) {
            this['canPlay'] && (this['stopMusic'](), Laya['SoundManag' + 'er']['playMusic'](_0x3651a1));
        }
        ['playSound'](_0x1bb7a5, _0x4ef4a9 = 0x1, _0x1299d9) {
            Laya['SoundManag' + 'er']['soundMuted'] || this['canPlay'] && Laya['SoundManag' + 'er']['playSound'](_0x1bb7a5, _0x4ef4a9, _0x1299d9);
        }
        ['playGameSo' + 'und'](_0x49ade0, _0x4db8ec = 0x1, _0x5d5c95) {
            if (!_0x49ade0 || 0x0 === _0x49ade0['length'])
                return;
            if (Laya['SoundManag' + 'er']['soundMuted'])
                return;
            let _0x4cff8a = 'music/' + _0x49ade0;
            Laya['SoundManag' + 'er']['playSound'](_0x4cff8a, _0x4db8ec, _0x5d5c95);
        }
        ['setMusicMu' + 'te'](_0x3e32c6) {
            Laya['SoundManag' + 'er']['musicMuted'] = _0x3e32c6;
        }
        ['isMusicMut' + 'ed']() {
            return Laya['SoundManag' + 'er']['musicMuted'];
        }
        ['setMusicVo' + 'lume'](_0x59acce) {
            Laya['SoundManag' + 'er']['setMusicVo' + 'lume'](0.5 * _0x59acce), Laya['LocalStora' + 'ge']['setItem']('musicVolum' + 'e', _0x59acce);
        }
        ['getMusicVo' + 'lume']() {
            return Laya['SoundManag' + 'er']['musicVolum' + 'e'];
        }
        ['setSoundMu' + 'te'](_0x1cb70c) {
            Laya['SoundManag' + 'er']['soundMuted'] = _0x1cb70c;
        }
        ['isSoundMut' + 'ed']() {
            return Laya['SoundManag' + 'er']['soundMuted'];
        }
        ['setSoundVo' + 'lume'](_0x4b8db2) {
            Laya['SoundManag' + 'er']['setSoundVo' + 'lume'](_0x4b8db2), Laya['LocalStora' + 'ge']['setItem']('soundVolum' + 'e', _0x4b8db2);
        }
        ['getSoundVo' + 'lume']() {
            return Laya['SoundManag' + 'er']['soundVolum' + 'e'];
        }
        ['stopAll']() {
            Laya['SoundManag' + 'er']['stopAll']();
        }
        ['stopAllSou' + 'nd']() {
            Laya['SoundManag' + 'er']['stopAllSou' + 'nd']();
        }
    }
    class _0x3dfdfb {
        constructor() {
            this['showBanner' + 'Pos'] = 0x0;
        }
        ['showBanner'](_0x405fe6, _0x93772c, _0x142d26, _0x2aca5c, _0x18bb8e, _0x1694a2 = 0x0, _0x27ffe0 = 0x0, _0x37e7ce = 0x0) {
        }
        ['hideBanner'](_0x4e1e80) {
        }
        ['showVideo'](_0x35c603, _0x29213f, _0x3b96f3) {
            _0x2b4af8['finishVide' + 'o'](_0x35c603);
        }
        ['shareM'](_0x10fb95, _0x10eb84, _0x430c81, _0x1c07ef, _0x1b4402, _0x532aae, _0xb4b167) {
            _0x2b4af8['finishVide' + 'o'](_0x10fb95);
        }
        ['postToOpen' + 'DataMessag' + 'e'](_0x5a2189, _0x55da4a) {
        }
        ['report'](_0x4b9d6a, _0x19a895) {
        }
        ['sdkLogin'](_0x501e88, _0x137b68) {
            var _0x3936d9 = _0x1ae356['Instance'];
            _0x3936d9['user']['resumePlay' + 'erInfoDefa' + 'ult'](), _0x3936d9['user']['loadCacheD' + 'ata'](), _0x3936d9['user']['nickName'] = '玩家10001', _0x1ae356['Instance']['logined'] = !0x0, _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], { 'logined': !0x0 });
        }
        ['isLowDevic' + 'e']() {
            return !0x1;
        }
        ['reportAnal' + 'ytics'](_0x5e8c9f) {
        }
        ['updataScor' + 'eInfo'](_0xa919d6) {
        }
        ['shareVideo'](_0x32a63a) {
            _0x2b4af8['finishShar' + 'e'](_0x32a63a);
        }
        ['hasOpenAD']() {
            return !0x0;
        }
        ['showModal'](_0x449438) {
        }
        ['setLoading' + 'Progress'](_0x1f6c16) {
            _0x26ee17['IsOppo']() && 'undefined' != typeof qg && (_0x1f6c16 >= 0x64 ? qg['loadingCom' + 'plete'] && qg['loadingCom' + 'plete']({
                'complete': function (_0x47ace4) {
                }
            }) : qg['setLoading' + 'Progress'] && qg['setLoading' + 'Progress']({ 'progress': _0x1f6c16 }));
        }
        ['hideheziAd']() {
        }
        ['showheziAd']() {
        }
    }
    class _0x1c84be {
        static ['setBoolVal' + 'ue'](_0x4d9fdf, _0x490b55) {
            _0x4d9fdf && Laya['LocalStora' + 'ge']['setItem'](_0x4d9fdf, _0x490b55 ? '1' : '0');
        }
        static ['getBoolVal' + 'ue'](_0x58ce82) {
            if (_0x58ce82) {
                let _0x31913d = Laya['LocalStora' + 'ge']['getItem'](_0x58ce82);
                if (null !== _0x31913d)
                    return '1' === _0x31913d;
            }
            return !0x1;
        }
        static ['setNumberV' + 'alue'](_0x5ae104, _0x3e2303) {
            _0x5ae104 && Laya['LocalStora' + 'ge']['setItem'](_0x5ae104, _0x3e2303 + '');
        }
        static ['getNumberV' + 'alue'](_0x408589) {
            if (_0x408589) {
                let _0x595efa = Laya['LocalStora' + 'ge']['getItem'](_0x408589);
                if (null !== _0x595efa)
                    return parseFloat(_0x595efa) || 0x0;
            }
            return 0x0;
        }
        static ['setStringV' + 'alue'](_0x4e9fcf, _0x3a4d74) {
            _0x4e9fcf && Laya['LocalStora' + 'ge']['setItem'](_0x4e9fcf, _0x3a4d74);
        }
        static ['getStringV' + 'alue'](_0x3df153) {
            if (_0x3df153)
                return Laya['LocalStora' + 'ge']['getItem'](_0x3df153) || '';
            return '';
        }
        static ['setDataVal' + 'ue'](_0x433dbc, _0x51273f) {
            _0x433dbc && Laya['LocalStora' + 'ge']['setJSON'](_0x433dbc, _0x51273f);
        }
        static ['getDataVal' + 'ue'](_0x2cc635) {
            if (_0x2cc635)
                return Laya['LocalStora' + 'ge']['getJSON'](_0x2cc635) || null;
            return null;
        }
    }
    var _0x40d7c6, _0x2128f4, _0x4c1205, _0x1a36aa, _0x363478, _0x48e450, _0x259e15, _0x1fa1ce, _0x3058a3, _0x5aa295, _0x2f37cd, _0x2ad709, _0x1f524e = {
            'showAD': 'showAD',
            'doShare': 'doShare',
            'watchADComplete': 'watchADCom' + 'plete',
            'watchADExit': 'watchADExi' + 't',
            'showBanner': 'showBanner',
            'loadBanner': 'loadBanner',
            'loadBannerError': 'loadBanner' + 'Error',
            'loadVideoError': 'loadVideoE' + 'rror',
            'Login': 'Login',
            'newLogin': 'newLogin',
            'LoginFail': 'LoginFail',
            'videoSuccess': 'videoSucce' + 'ss',
            'gameStart': 'gameStart',
            'loadRes': 'loadRes',
            'showStart': 'showStart',
            'MyRecommendJump': '自有产品导出',
            'BattleInfo': 'battleInfo',
            'BattleEnd': 'BattleEnd',
            'BannerJump': 'BannerJump',
            'showEgg': 'showEgg',
            'hitedEgg': 'hitedEgg',
            'showBig': 'showBig',
            'hitedBig': 'hitedBig'
        };
    class _0x1281fe {
        static ['getGameCon' + 'fig']() {
            let _0x47955a = _0x1281fe['RES_GAME_D' + 'ATA'];
            return _0x2276ef['UseRemoteR' + 'es'] && (_0x47955a = '/' + _0x47955a), [{
                    'url': _0x47955a,
                    'type': Laya['Loader']['TEXT']
                }];
        }
        static ['getGameRes']() {
            return [
                {
                    'url': _0x1281fe['RES_COMMON' + '_CONFIG'],
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': _0x1281fe['RES_x'],
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': _0x1281fe['RES_Game'],
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': _0x1281fe['RES_sign'],
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': _0x1281fe['RES_egg'],
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': _0x1281fe['RES_ADVER_' + 'PATH'],
                    'type': Laya['Loader']['ATLAS']
                },
                {
                    'url': _0x1281fe['RES_DropWa' + 'terAniItem'],
                    'type': Laya['Loader']['PREFAB']
                },
                {
                    'url': _0x1281fe['RES_WaterF' + 'ullAniItem'],
                    'type': Laya['Loader']['PREFAB']
                },
                {
                    'url': _0x1281fe['RES_BtnMas' + 'k'],
                    'type': Laya['Loader']['PREFAB']
                },
                {
                    'url': _0x1281fe['RES_SkinIt' + 'em'],
                    'type': Laya['Loader']['PREFAB']
                },
                {
                    'url': _0x1281fe['RES_reward' + 'Item'],
                    'type': Laya['Loader']['PREFAB']
                }
            ];
        }
    }
    _0x1281fe['RES_COMMON' + '_CONFIG'] = 'res/atlas/' + 'common.atl' + 'as', _0x1281fe['RES_GAME_D' + 'ATA'] = 'res/data/g' + 'ameData.js' + 'on', _0x1281fe['RES_Game'] = 'res/atlas/' + 'game.atlas', _0x1281fe['RES_x'] = 'res/atlas/' + 'x.atlas', _0x1281fe['RES_sign'] = 'res/atlas/' + 'sign.atlas', _0x1281fe['RES_egg'] = 'res/atlas/' + 'egg.atlas', _0x1281fe['RES_ADVER_' + 'PATH'] = 'res/atlas/' + 'adver.atla' + 's', _0x1281fe['RES_DropWa' + 'terAniItem'] = 'prefab/Dro' + 'pWaterAni.' + 'json', _0x1281fe['RES_WaterF' + 'ullAniItem'] = 'prefab/Wat' + 'erFullAni.' + 'json', _0x1281fe['RES_BtnMas' + 'k'] = 'prefab/btn' + 'Mask.json', _0x1281fe['RES_SkinIt' + 'em'] = 'prefab/Ski' + 'nItem.json', _0x1281fe['RES_reward' + 'Item'] = 'prefab/rew' + 'ardItem.js' + 'on';
    class _0x235821 {
        static ['getRadian2'](_0x246b64, _0x3c760a, _0x5da86c, _0x9a3d38) {
            let _0x3d831a = _0x5da86c - _0x246b64, _0x3bab60 = _0x9a3d38 - _0x3c760a;
            return Math['atan2'](_0x3bab60, _0x3d831a);
        }
        static ['getRandom'](_0x548ac2, _0x1073ba) {
            if (_0x548ac2 == _0x1073ba)
                return _0x548ac2;
            var _0x5b6346 = Math['random']();
            return Math['floor'](_0x5b6346 * _0x1073ba + (0x1 - _0x5b6346) * _0x548ac2 + _0x5b6346);
        }
        static ['getRandomI' + 'tem'](_0x2cac3b) {
            if (_0x2cac3b && _0x2cac3b['length']) {
                let _0x922278 = _0x235821['getRandom'](0x0, _0x2cac3b['length'] - 0x1);
                return _0x922278 > _0x2cac3b['length'] - 0x1 && (_0x922278 = 0x0), _0x2cac3b[_0x922278];
            }
            return null;
        }
        static ['getAngle'](_0xca0334, _0x5b70d3, _0x5a6c46, _0x35bd33) {
            var _0x2f2a2b = _0x5a6c46 - _0xca0334, _0x5dbd2f = _0x35bd33 - _0x5b70d3;
            if (0x0 == _0x5dbd2f)
                return _0x2f2a2b > 0x0 ? 0x0 : 0xb4;
            var _0x24e96c = 0xb4 * Math['atan'](_0x2f2a2b / _0x5dbd2f) / Math['PI'];
            return _0x5dbd2f < 0x0 && (_0x24e96c = _0x2f2a2b < 0x0 ? 0xb4 + Math['abs'](_0x24e96c) : 0xb4 - Math['abs'](_0x24e96c)), _0x24e96c = 0x5a - _0x24e96c;
        }
        static ['getDistanc' + 'e'](_0x13fb64, _0x26be6b, _0x3b85d9, _0x597a06) {
            var _0x15e590 = _0x3b85d9 - _0x13fb64, _0x3922fc = _0x597a06 - _0x26be6b;
            return Math['sqrt'](_0x15e590 * _0x15e590 + _0x3922fc * _0x3922fc);
        }
        static ['getDistanc' + 'eSqr'](_0x48f517, _0x352e3a, _0x24df62, _0x153cd3) {
            var _0x407974 = _0x24df62 - _0x48f517, _0x36ee2f = _0x153cd3 - _0x352e3a;
            return _0x407974 * _0x407974 + _0x36ee2f * _0x36ee2f;
        }
        static ['degToRad'](_0x7e25d6) {
            return _0x7e25d6 * Math['PI'] / 0xb4;
        }
        static ['radToDeg'](_0x304b26) {
            return 0xb4 * _0x304b26 / Math['PI'];
        }
        static ['isCircleCo' + 'llision'](_0x1d798b, _0x1a4758, _0x44d911, _0x26be01, _0x2c554d, _0x6a9899) {
            var _0x2bc9b3 = _0x1d798b - _0x26be01, _0x76bb48 = _0x1a4758 - _0x2c554d, _0x447798 = _0x44d911 + _0x6a9899;
            return _0x2bc9b3 * _0x2bc9b3 + _0x76bb48 * _0x76bb48 < _0x447798 * _0x447798;
        }
        static ['clamp'](_0x11f20e, _0x16939e, _0x3ead8e) {
            return _0x11f20e < _0x16939e ? _0x16939e : _0x11f20e > _0x3ead8e ? _0x3ead8e : _0x11f20e;
        }
        static ['nextNumber'](_0x889a21, _0x352928) {
            if (_0x889a21 == _0x352928)
                return _0x889a21;
            var _0x269d7f = Math['random']();
            return Math['floor'](_0x269d7f * _0x352928 + (0x1 - _0x269d7f) * _0x889a21 + _0x269d7f);
        }
        static ['validPos'](_0x1be7db, _0x28bfc0, _0x5a9318, _0x166456, _0x33f25c, _0x2ea044) {
            var _0x44e6ee = _0x1be7db - _0x5a9318;
            if (_0x44e6ee < -_0x33f25c || _0x44e6ee > _0x33f25c)
                return !0x1;
            var _0x15f168 = _0x28bfc0 - _0x166456;
            return !(_0x15f168 < -_0x2ea044 || _0x15f168 > _0x2ea044);
        }
        static ['getInt'](_0x357c43) {
            return Math['floor'](_0x357c43);
        }
        static ['clearDicti' + 'onary'](_0x1bf979) {
            for (var _0x5ecafe in _0x1bf979)
                delete _0x1bf979[_0x5ecafe];
        }
        static ['getCos'](_0xa6c32f) {
            return _0xa6c32f < 0x0 && (_0xa6c32f += 0x168), _0xa6c32f = Math['floor'](_0xa6c32f % 0x168), this['cosVals'][_0xa6c32f];
        }
        static ['getSin'](_0x328324) {
            return _0x328324 < 0x0 && (_0x328324 += 0x168), _0x328324 = Math['floor'](_0x328324 % 0x168), this['sinVals'][_0x328324];
        }
        static ['ptInRect'](_0x432f37, _0x44ab62, _0x184f7d, _0x1c51a0, _0x3cde4c, _0x329fbd, _0x547440 = 0x0) {
            return !(_0x432f37 + _0x547440 < _0x184f7d || _0x432f37 - _0x547440 > _0x184f7d + _0x3cde4c || _0x44ab62 + _0x547440 < _0x1c51a0 || _0x44ab62 - _0x547440 > _0x1c51a0 + _0x329fbd);
        }
        static ['initSinCos' + 'Val']() {
            this['sinVals'] = {}, this['cosVals'] = {};
            for (var _0xd09023 = 0x0; _0xd09023 < 0x168; _0xd09023++) {
                var _0x34dc49 = _0xd09023 * Math['PI'] / 0xb4;
                this['cosVals'][_0xd09023] = Math['cos'](_0x34dc49), this['sinVals'][_0xd09023] = Math['sin'](_0x34dc49);
            }
        }
        static ['isRectInte' + 'rsetWithLi' + 'ne'](_0x2f0cd8, _0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357) {
            if (_0x360f14 < _0x2f0cd8['x'] && _0x4c8691 < _0x2f0cd8['x'] || _0x360f14 > _0x2f0cd8['x'] && _0x4c8691 > _0x2f0cd8['x'])
                return !0x1;
            if (_0x6ff5bf < _0x2f0cd8['y'] && _0x5d5357 < _0x2f0cd8['y'] || _0x6ff5bf > _0x2f0cd8['y'] && _0x5d5357 > _0x2f0cd8['y'])
                return !0x1;
            let _0x85c942 = {
                    'x': _0x2f0cd8['x'],
                    'y': _0x2f0cd8['y']
                }, _0x4e7828 = {
                    'x': _0x2f0cd8['x'],
                    'y': _0x2f0cd8['bottom']
                }, _0x247ef8 = {
                    'x': _0x2f0cd8['right'],
                    'y': _0x2f0cd8['y']
                }, _0x31b687 = {
                    'x': _0x2f0cd8['right'],
                    'y': _0x2f0cd8['bottom']
                }, _0x55520a = _0x4e7828, _0x3cb2af = _0x31b687, _0x2b7fbb = _0x85c942, _0x46ae5b = _0x247ef8, _0x49a36f = _0x85c942, _0x1ba542 = _0x31b687, _0x4e3ff6 = _0x1ba542, _0x4e73ff = _0x247ef8;
            do {
                if (this['isLineColl' + 'isionLine'](_0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357, _0x85c942['x'], _0x85c942['y'], _0x4e7828['x'], _0x4e7828['y']))
                    break;
                if (this['isLineColl' + 'isionLine'](_0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357, _0x247ef8['x'], _0x247ef8['y'], _0x31b687['x'], _0x31b687['y']))
                    break;
                if (this['isLineColl' + 'isionLine'](_0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357, _0x2b7fbb['x'], _0x2b7fbb['y'], _0x46ae5b['x'], _0x46ae5b['y']))
                    break;
                if (this['isLineColl' + 'isionLine'](_0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357, _0x55520a['x'], _0x55520a['y'], _0x3cb2af['x'], _0x3cb2af['y']))
                    break;
                if (this['isLineColl' + 'isionLine'](_0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357, _0x49a36f['x'], _0x49a36f['y'], _0x1ba542['x'], _0x1ba542['y']))
                    break;
                if (this['isLineColl' + 'isionLine'](_0x360f14, _0x6ff5bf, _0x4c8691, _0x5d5357, _0x4e3ff6['x'], _0x4e3ff6['y'], _0x4e73ff['x'], _0x4e73ff['y']))
                    break;
                return !0x1;
            } while (0x0);
            return !0x0;
        }
        static ['mult'](_0x97ea6c, _0xc87ce0, _0x2ef2e3, _0x114930, _0x3efda0, _0x3cc762) {
            return (_0x97ea6c - _0x3efda0) * (_0x114930 - _0x3cc762) - (_0x2ef2e3 - _0x3efda0) * (_0xc87ce0 - _0x3cc762);
        }
        static ['isLineColl' + 'isionLine'](_0x568b51, _0x129485, _0x50af01, _0x53ae57, _0x4243ec, _0x2602db, _0x505d67, _0x14bf57) {
            return !(Math['max'](_0x568b51, _0x50af01) < Math['min'](_0x4243ec, _0x505d67)) && (!(Math['max'](_0x129485, _0x53ae57) < Math['min'](_0x2602db, _0x14bf57)) && (!(Math['max'](_0x4243ec, _0x505d67) < Math['min'](_0x568b51, _0x50af01)) && (!(Math['max'](_0x2602db, _0x14bf57) < Math['min'](_0x129485, _0x53ae57)) && (!(this['mult'](_0x4243ec, _0x2602db, _0x50af01, _0x53ae57, _0x568b51, _0x129485) * this['mult'](_0x50af01, _0x53ae57, _0x505d67, _0x14bf57, _0x568b51, _0x129485) < 0.0001) && !(this['mult'](_0x568b51, _0x129485, _0x505d67, _0x14bf57, _0x4243ec, _0x2602db) * this['mult'](_0x505d67, _0x14bf57, _0x50af01, _0x53ae57, _0x4243ec, _0x2602db) < 0.0001)))));
        }
        static ['getTidyAng' + 'le'](_0x44296b) {
            return 0.01 * Math['floor'](0x64 * _0x44296b % 0x8ca0);
        }
        static ['isInRange'](_0x278257, _0x1f5c08, _0xd7bfb, _0x14ef83, _0x400520, _0x132f51) {
            return _0x400520 > _0x278257 && _0x400520 < _0x1f5c08 && _0x132f51 > _0xd7bfb && _0x132f51 < _0x14ef83;
        }
        static ['getMoveTar' + 'getAngle'](_0x310a52, _0x2c6319, _0x68140a, _0x4ad11b) {
            var _0x1a161d = _0x68140a - _0x310a52, _0x15a63a = _0x4ad11b - _0x2c6319;
            return _0x15a63a ? _0x1a161d ? Math['atan2'](_0x15a63a, _0x1a161d) * this['angle1rad'] : 0x0 < _0x15a63a ? 0x5a : -0x5a : 0x0 < _0x1a161d ? 0x0 : 0xb4;
        }
        static ['fixPoint'](_0x2ba301, _0x433f53, _0x5969be) {
            return _0x433f53;
        }
        static ['fixFormRad' + 'ian'](_0x3e9afd) {
            for (; _0x3e9afd > Math['PI'];)
                _0x3e9afd -= 0x2 * Math['PI'];
            for (; _0x3e9afd < -Math['PI'];)
                _0x3e9afd += 0x2 * Math['PI'];
            return _0x3e9afd;
        }
        static ['fixFormAng' + 'le'](_0x1ed9c8) {
            for (; _0x1ed9c8 > 0xb4;)
                _0x1ed9c8 -= 0x168;
            for (; _0x1ed9c8 < -0xb4;)
                _0x1ed9c8 += 0x168;
            return _0x1ed9c8;
        }
    }
    _0x235821['cosVals'] = {}, _0x235821['sinVals'] = {}, _0x235821['rad1Angle'] = Math['PI'] / 0xb4, _0x235821['angle1rad'] = 0xb4 / Math['PI'], _0x235821['isPtInPoly' + 'gon'] = function (_0x11b7f5, _0xeeb2ca, _0x29ff4c) {
        var _0x1fbcea, _0x3e3e13 = 0x0, _0x471dcd = NaN, _0x4b1fd2 = NaN, _0x835949 = NaN, _0x539657 = NaN;
        _0x1fbcea = _0x29ff4c['length'];
        for (var _0xec115a = 0x0; _0xec115a < _0x1fbcea; _0xec115a += 0x2) {
            if (_0x471dcd = _0x29ff4c[_0xec115a], _0x4b1fd2 = _0x29ff4c[_0xec115a + 0x1], _0x835949 = _0x29ff4c[(_0xec115a + 0x2) % _0x1fbcea], _0x4b1fd2 != (_0x539657 = _0x29ff4c[(_0xec115a + 0x3) % _0x1fbcea])) {
                if (!(_0xeeb2ca < Math['min'](_0x4b1fd2, _0x539657))) {
                    if (!(_0xeeb2ca >= Math['max'](_0x4b1fd2, _0x539657)))
                        (_0xeeb2ca - _0x4b1fd2) * (_0x835949 - _0x471dcd) / (_0x539657 - _0x4b1fd2) + _0x471dcd > _0x11b7f5 && _0x3e3e13++;
                }
            }
        }
        return _0x3e3e13 % 0x2 == 0x1;
    };
    class _0xe0a486 {
        constructor() {
            this['skinCfg'] = null, this['videoCfgDa' + 'ta'] = null, this['bannerCfgD' + 'ata'] = null, this['signCfgDat' + 'a'] = {}, this['randomBann' + 'erCfgData'] = null, this['signRed'] = !0x0, this['playerCfgD' + 'ata'] = null, this['ainameCfgD' + 'ata'] = {}, this['userGradeC' + 'fgData'] = {}, this['cropsCfgDa' + 'ta'] = {}, this['levelConfi' + 'gData'] = {}, this['itemsConfi' + 'gData'] = {}, this['rewardConf' + 'igData'] = {}, this['signDaynfo'] = 'signDaynfo', this['maxUserGra' + 'de'] = 0x0, this['usedAIName' + 's'] = [], this['aiPlayerIn' + 'fos'] = [], this['cropsPreCa' + 'r'] = {}, this['loadData'](), this['signRed'] = !this['todayIsSig' + 'ned'](), Laya['timer']['loop'](0x2710, this, this['checkOverD' + 'ay']);
        }
        static get ['Instance']() {
            return null === _0xe0a486['_instance'] && (_0xe0a486['_instance'] = new _0xe0a486()), _0xe0a486['_instance'];
        }
        ['loadData']() {
            let _0x4d3418 = _0x1281fe['RES_GAME_D' + 'ATA'], _0x5cc12b = Laya['loader']['getRes'](_0x4d3418), _0x5a6a48 = JSON['parse'](_0x5cc12b);
            if (_0x5a6a48) {
                if (this['videoCfgDa' + 'ta'] = _0x5a6a48['videoShare' + 'Cfg'], this['bannerCfgD' + 'ata'] = _0x5a6a48['bannerCfg'], _0x26ee17['IsQutoutia' + 'o']() && this['bannerCfgD' + 'ata']['push']({}), this['signCfgDat' + 'a'] = _0x5a6a48['sign'], this['skinCfg'] = _0x5a6a48['skinCfg'], this['userGradeC' + 'fgData'] = _0x5a6a48['gradeConfi' + 'g'], this['cropsCfgDa' + 'ta'] = _0x5a6a48['cropConfig'], this['levelConfi' + 'gData'] = _0x5a6a48['levelConfi' + 'g'], this['itemsConfi' + 'gData'] = _0x5a6a48['itemsConfi' + 'g'], this['rewardConf' + 'igData'] = _0x5a6a48['rewardConf' + 'ig'], this['cropsCfgDa' + 'ta']) {
                    let _0x332e5e = 0x1;
                    _0x26ee17['isIos'] && (_0x332e5e = 0.6);
                    let _0x597bbf = 0x1 / _0x332e5e;
                    for (let _0x1c9a58 in this['cropsCfgDa' + 'ta']) {
                        if (this['cropsCfgDa' + 'ta'][_0x1c9a58] && this['cropsCfgDa' + 'ta'][_0x1c9a58]['color']) {
                            let _0xd8e9dd = this['cropsCfgDa' + 'ta'][_0x1c9a58]['color']['split'](',');
                            _0xd8e9dd && _0xd8e9dd['length'] >= 0x3 && (this['cropsCfgDa' + 'ta'][_0x1c9a58]['colorVec'] = new Laya['Vector4'](parseFloat(_0xd8e9dd[0x0]) / 0x64, parseFloat(_0xd8e9dd[0x1]) / 0x64, parseFloat(_0xd8e9dd[0x2]) / 0x64, 0x1));
                        }
                        this['cropsCfgDa' + 'ta'][_0x1c9a58] && (this['cropsCfgDa' + 'ta'][_0x1c9a58]['offset'] = Math['floor'](this['cropsCfgDa' + 'ta'][_0x1c9a58]['offset'] * _0x597bbf), this['cropsCfgDa' + 'ta'][_0x1c9a58]['cropsPreCa' + 'r'] = Math['floor'](this['cropsCfgDa' + 'ta'][_0x1c9a58]['cropsPreCa' + 'r'] * _0x332e5e));
                    }
                }
                if (this['bannerCfgD' + 'ata'] && this['bannerCfgD' + 'ata']['length']) {
                    this['randomBann' + 'erCfgData'] = [];
                    for (let _0x31f79a in this['bannerCfgD' + 'ata']) {
                        let _0x1dcc18 = this['bannerCfgD' + 'ata'][_0x31f79a];
                        this['randomBann' + 'erCfgData']['push'](_0x1dcc18);
                    }
                }
                this['ainameCfgD' + 'ata'] = _0x5a6a48['aiName'];
            }
            Laya['Loader']['clearRes'](_0x4d3418), this['init']();
        }
        ['init']() {
            _0x235821['initSinCos' + 'Val']();
        }
        ['getVideoSh' + 'areCfg'](_0x30227d) {
            if (null == this['videoCfgDa' + 'ta'])
                return null;
            for (var _0x2dc0ed = 0x0; _0x2dc0ed < this['videoCfgDa' + 'ta']['length']; _0x2dc0ed++)
                if (this['videoCfgDa' + 'ta'][_0x2dc0ed]['pos'] == _0x30227d)
                    return this['videoCfgDa' + 'ta'][_0x2dc0ed];
            return null;
        }
        ['getBannerC' + 'fg'](_0x179042) {
            if (null == this['bannerCfgD' + 'ata'])
                return null;
            for (var _0x4aa84b = 0x0; _0x4aa84b < this['bannerCfgD' + 'ata']['length']; _0x4aa84b++)
                if (this['bannerCfgD' + 'ata'][_0x4aa84b]['pos'] == _0x179042)
                    return this['bannerCfgD' + 'ata'][_0x4aa84b];
            return null;
        }
        ['saveAutoSh' + 'owSign']() {
            let _0x4b0e1c = _0x1c84be['getDataVal' + 'ue'](this['signDaynfo']) || {}, _0x4cee1f = new Date()['getDate']();
            _0x4b0e1c['showDay'] = _0x4cee1f, _0x1c84be['setDataVal' + 'ue'](this['signDaynfo'], _0x4b0e1c);
        }
        ['doSignActi' + 'on']() {
            let _0x2c4b3b = _0x1c84be['getDataVal' + 'ue'](this['signDaynfo']);
            if (_0x2c4b3b) {
                let _0x1e3924 = new Date(), _0x265d91 = _0x2c4b3b['signDay'] + 0x1;
                _0x2c4b3b['signDay'] = _0x265d91;
                let _0x29c1f6 = _0x1e3924['getTime']();
                _0x2c4b3b['ts'] = _0x29c1f6;
            }
            this['signRed'] = !0x1, _0x1c84be['setDataVal' + 'ue'](this['signDaynfo'], _0x2c4b3b);
        }
        ['getSignDay' + 'Info']() {
            let _0x3ee2ae = 0x0, _0x123e7f = 0x0, _0xd1e60d = _0x1c84be['getDataVal' + 'ue'](this['signDaynfo']), _0x1d1f77 = !0x1, _0x1da0be = new Date(), _0x5f2170 = _0x1da0be['getDate'](), _0xc3d733 = 0x0, _0x562522 = 0x0;
            if (_0xd1e60d) {
                if (_0x123e7f = _0xd1e60d['showDay'], _0x562522 = _0xd1e60d['ts'], _0x1d1f77 = !0x0, _0xd1e60d['ts'] > 0x0) {
                    let _0x1dbc6f = new Date();
                    if (_0x1dbc6f['setTime'](_0xd1e60d['ts']), _0x1da0be['getTime']() < _0xd1e60d['ts'] + 0x5265c00 && _0x5f2170 == _0x1dbc6f['getDate']())
                        _0xc3d733 = 0x1, _0x3ee2ae = _0xd1e60d['signDay'], _0x1d1f77 = !0x1;
                    else
                        (_0x1dbc6f = new Date())['setTime'](_0xd1e60d['ts'] + 0x5265c00), _0x5f2170 == _0x1dbc6f['getDate']() && (_0x3ee2ae = _0xd1e60d['signDay'], _0x1d1f77 = !0x1);
                }
            } else
                _0x1d1f77 = !0x0;
            _0x1d1f77 && ((_0xd1e60d = {})['signDay'] = _0x3ee2ae, _0xd1e60d['showDay'] = _0x123e7f, _0xd1e60d['ts'] = _0x562522, _0x1c84be['setDataVal' + 'ue'](this['signDaynfo'], _0xd1e60d));
            let _0x1e511f = {
                'signDay': _0x3ee2ae,
                'signed': _0xc3d733,
                'show': _0x5f2170 == _0x123e7f ? 0x1 : 0x0
            };
            return this['signRed'] = !_0xc3d733, _0x1e511f;
        }
        ['processDat' + 'a'](_0x14b0b9) {
            let _0x4e877f = this['uncompile'](_0x14b0b9);
            return JSON['parse'](_0x4e877f);
        }
        ['uncompile'](_0x243d20) {
            for (var _0x1f5ecd = String['fromCharCo' + 'de'](_0x243d20['charCodeAt'](0x0) - 0x1), _0x186d10 = 0x1; _0x186d10 < _0x243d20['length']; _0x186d10++)
                _0x1f5ecd += String['fromCharCo' + 'de'](_0x243d20['charCodeAt'](_0x186d10) - 0x1);
            return _0x1f5ecd;
        }
        ['checkOverD' + 'ay']() {
            _0x2b4af8['checkOverD' + 'ay']() && _0x4441f7['Instance']['event'](_0x1c0419['OverDayEve' + 'nt']);
        }
        ['getRandomB' + 'annerCfg']() {
            let _0x2e4c54 = this['randomBann' + 'erCfgData']['length'], _0x5e7a56 = Math['floor'](Math['random']() * (_0x2e4c54 - 0x1));
            if (_0x5e7a56 >= 0x0 && _0x5e7a56 < _0x2e4c54) {
                let _0x17f489 = this['randomBann' + 'erCfgData'][_0x5e7a56];
                if (_0x17f489 && _0x17f489['adunit'] && _0x17f489['adunit']['length'])
                    return this['randomBann' + 'erCfgData']['splice'](_0x5e7a56, 0x1), this['randomBann' + 'erCfgData']['push'](_0x17f489), _0x17f489;
            }
            return null;
        }
        ['isOverSeve' + 'rTime'](_0xb8469f = 0x1c20) {
            if (_0x4ace69['severTime'] > 0x0) {
                let _0x361791 = new Date()['getTime']();
                if (Math['abs'](_0x361791 - _0x4ace69['severTime']) < 0x3e8 * _0xb8469f)
                    return !0x1;
            }
            return !0x0;
        }
        ['todayIsSig' + 'ned']() {
            return this['getSignDay' + 'Info']()['signed'] > 0x0;
        }
        ['getAIPlaye' + 'rInfo'](_0x30c80b) {
            return _0x30c80b >= 0x0 && _0x30c80b < this['ainameCfgD' + 'ata']['length'] ? this['ainameCfgD' + 'ata'][_0x30c80b] : null;
        }
        ['getAINameC' + 'ount']() {
            return null == this['ainameCfgD' + 'ata'] ? 0x0 : this['ainameCfgD' + 'ata']['length'];
        }
        ['getRandomA' + 'IPlayerInf' + 'o']() {
            var _0x343d61 = this['getAINameC' + 'ount']() - 0x1;
            let _0x59b35a, _0x42e97d;
            for (;;)
                if (_0x42e97d = Math['round'](Math['random']() * _0x343d61), (_0x59b35a = this['getAIPlaye' + 'rInfo'](_0x42e97d)) && null == this['usedAIName' + 's'][_0x59b35a['name']]) {
                    this['usedAIName' + 's'][_0x59b35a['name']] = _0x59b35a['name'];
                    break;
                }
            return _0x59b35a;
        }
        ['generateAI' + 'PlayerList'](_0x677b08) {
            if (this['aiPlayerIn' + 'fos']['length'] < _0x677b08)
                for (; this['aiPlayerIn' + 'fos']['length'] < _0x677b08;) {
                    let _0x3761eb = this['getRandomA' + 'IPlayerInf' + 'o']();
                    _0x3761eb && this['aiPlayerIn' + 'fos']['push'](_0x3761eb);
                }
            return this['aiPlayerIn' + 'fos'];
        }
        ['clearAIInf' + 'o']() {
            _0x2b4af8['clearDicti' + 'onary'](this['usedAIName' + 's']), this['aiPlayerIn' + 'fos']['length'] = 0x0;
        }
        ['getCropsIn' + 'foByGrade'](_0x3ee1f7) {
            return (this['userGradeC' + 'fgData']['' + _0x3ee1f7]['crops'] || [])['map'](_0x43d7de => Object['assign']({ 'curNum': 0x0 }, _0x43d7de));
        }
        ['getRewardC' + 'fglength']() {
            return this['rewardConf' + 'igData']['length'];
        }
        ['getRewardC' + 'fg'](_0xc9c7de) {
            return this['rewardConf' + 'igData'][_0xc9c7de];
        }
        ['getLevelCf' + 'g'](_0x2f8d0d) {
            return _0x2f8d0d > 0x6a && (_0x2f8d0d = (_0x2f8d0d - 0x6a) % 0x39 + 0x32), this['levelConfi' + 'gData'][_0x2f8d0d];
        }
        ['getPassCfg'](_0x6255a1, _0x12be45) {
            _0x6255a1 > 0x6a && (_0x6255a1 = (_0x6255a1 - 0x6a) % 0x39 + 0x32);
            let _0x4087d6 = this['levelConfi' + 'gData'][_0x6255a1];
            null != _0x12be45 && (_0x4087d6 = _0x12be45);
            let _0x8a15ae = 0x0, _0x35ed25 = 0x0, _0x184011 = 0x0, _0xe6abb2 = 0x0, _0x3394a4 = 0x0, _0x6ee53a = 0x0, _0x2ddf23 = 0x0, _0x535ee5 = 0x0, _0x5156a9 = 0x0, _0x55bf36 = 0x0, _0x42783e = 0x0;
            if (_0x8a15ae = _0x4087d6['RedColorNu' + 'mber'], _0x35ed25 = _0x4087d6['YellowColo' + 'rNumber'], _0x184011 = _0x4087d6['BlueColorN' + 'umber'], _0x42783e = _0x4087d6['IceNumber'], null == _0x4087d6['PearlType'])
                return [
                    _0xe6abb2,
                    _0x3394a4,
                    _0x6ee53a,
                    _0x2ddf23,
                    _0x535ee5,
                    _0x5156a9,
                    _0x55bf36,
                    _0x42783e,
                    _0x8a15ae,
                    _0x35ed25,
                    _0x184011
                ];
            for (let _0x4a19d5 = _0x4087d6['PearlType']['length'] - 0x1; _0x4a19d5 >= 0x0; _0x4a19d5--)
                switch (_0x4087d6['PearlType'][_0x4a19d5]['type']) {
                case 0x1:
                    _0xe6abb2 = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                    break;
                case 0x2:
                    _0x3394a4 = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                    break;
                case 0x3:
                    _0x6ee53a = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                    break;
                case 0x4:
                    _0x2ddf23 = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                    break;
                case 0x5:
                    _0x535ee5 = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                    break;
                case 0x6:
                    _0x5156a9 = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                    break;
                case 0x7:
                    _0x55bf36 = _0x4087d6['PearlType'][_0x4a19d5]['num'] || 0x0;
                }
            return [
                _0xe6abb2,
                _0x3394a4,
                _0x6ee53a,
                _0x2ddf23,
                _0x535ee5,
                _0x5156a9,
                _0x55bf36,
                _0x42783e,
                _0x8a15ae,
                _0x35ed25,
                _0x184011
            ];
        }
    }
    _0xe0a486['isLarger'] = !0x1, _0xe0a486['_instance'] = null, function (_0x11a9c4) {
        _0x11a9c4[_0x11a9c4['Share'] = 0x1] = 'Share', _0x11a9c4[_0x11a9c4['Video'] = 0x2] = 'Video';
    }(_0x40d7c6 || (_0x40d7c6 = {})), function (_0x5d4b96) {
        _0x5d4b96[_0x5d4b96['Unknow'] = -0x1] = 'Unknow', _0x5d4b96[_0x5d4b96['DefaultSha' + 're'] = 0x0] = 'DefaultSha' + 're', _0x5d4b96[_0x5d4b96['HomeShare'] = 0x1] = 'HomeShare', _0x5d4b96[_0x5d4b96['FreeTryAD'] = 0xce] = 'FreeTryAD', _0x5d4b96[_0x5d4b96['OfflineAD'] = 0xcf] = 'OfflineAD', _0x5d4b96[_0x5d4b96['SignAD'] = 0xd0] = 'SignAD', _0x5d4b96[_0x5d4b96['ZSResultAD'] = 0xd1] = 'ZSResultAD', _0x5d4b96[_0x5d4b96['OpenReward' + 'AD'] = 0xd2] = 'OpenReward' + 'AD', _0x5d4b96[_0x5d4b96['goldAdVide' + 'oAD'] = 0xd3] = 'goldAdVide' + 'oAD', _0x5d4b96[_0x5d4b96['ShiPinAD'] = 0xd4] = 'ShiPinAD';
    }(_0x2128f4 || (_0x2128f4 = {})), _0x4c1205 || (_0x4c1205 = {}), function (_0x223371) {
        _0x223371[_0x223371['Default'] = 0x0] = 'Default', _0x223371[_0x223371['Share'] = 0x1] = 'Share', _0x223371[_0x223371['Video'] = 0x2] = 'Video';
    }(_0x1a36aa || (_0x1a36aa = {})), function (_0x2a4f0f) {
        _0x2a4f0f[_0x2a4f0f['Default'] = 0x0] = 'Default', _0x2a4f0f[_0x2a4f0f['Share'] = 0x1] = 'Share', _0x2a4f0f[_0x2a4f0f['Video'] = 0x2] = 'Video';
    }(_0x363478 || (_0x363478 = {}));
    class _0x353499 {
        constructor() {
            this['_lastCallT' + 'ime'] = 0x0, this['videoMappi' + 'ng'] = {}, this['shareMappi' + 'ng'] = {}, this['clickShare' + 'Cnts'] = {}, this['canFetchVi' + 'deo'] = !0x0, this['_isShowing' + 'Banner'] = !0x1, this['_inited'] = !0x1, this['_callShare'] = !0x1, this['_callShare' + 'Reward'] = !0x1, this['_dailyShar' + 'eMapping'] = {}, this['_vsCount'] = 0x0, this['_videoCoun' + 't'] = 0x0, this['_vsFailSha' + 'reCount'] = 0x0, this['_lastCallT' + 'ime'] = 0x0, this['videoMappi' + 'ng'] = {}, this['shareMappi' + 'ng'] = {}, this['clickShare' + 'Cnts'] = {}, this['canFetchVi' + 'deo'] = !0x0, this['_isShowing' + 'Banner'] = !0x1, this['_dailyShar' + 'eMapping'] = {}, this['_inited'] = !0x1, this['_callShare'] = !0x1, this['_callShare' + 'Reward'] = !0x1, this['registerEv' + 'ent'](), this['readVideoC' + 'ache']();
        }
        static get ['Instance']() {
            return null == _0x353499['_instance'] && (_0x353499['_instance'] = new _0x353499()), _0x353499['_instance'];
        }
        ['registerEv' + 'ent']() {
            _0x4441f7['Instance']['on'](_0x1c0419['FetchVideo' + 'Fail'], this, this['onFetchVid' + 'eoFail']), _0x4441f7['Instance']['on'](_0x1c0419['GetFocus'], this, this['onGameFocu' + 's']), _0x4441f7['Instance']['on'](_0x1c0419['OverDayEve' + 'nt'], this, this['resetByOve' + 'rDay']), _0x4441f7['Instance']['on'](_0x1c0419['FinishVide' + 'oAd'], this, this['onFinishVi' + 'deoAd']);
        }
        ['unregister' + 'Event']() {
            _0x4441f7['Instance']['off'](_0x1c0419['FetchVideo' + 'Fail'], this, this['onFetchVid' + 'eoFail']), _0x4441f7['Instance']['off'](_0x1c0419['GetFocus'], this, this['onGameFocu' + 's']), _0x4441f7['Instance']['off'](_0x1c0419['FinishVide' + 'oAd'], this, this['onFinishVi' + 'deoAd']);
        }
        ['canShowVid' + 'eo']() {
            return !0x0;
        }
        ['onFetchVid' + 'eoFail'](_0x36fbde) {
        }
        ['saveShareC' + 'ache'](_0x17e976, _0x416a62) {
        }
        ['saveVideoC' + 'ache']() {
        }
        ['readVideoC' + 'ache']() {
        }
        ['wxCheck']() {
        }
        ['aCheck']() {
        }
        ['getVideoCn' + 't'](_0x21423c) {
        }
        ['getShareCl' + 'ickCnt'](_0x432977) {
        }
        ['addShareCl' + 'ickCnt'](_0x1f17f1) {
        }
        ['showADBann' + 'er'](_0x588a64, _0xe5b26f = -0x1) {
        }
        ['hideBanner'](_0x68e5e0 = 0x0) {
        }
        ['isShowingB' + 'anner']() {
        }
        ['restoreBan' + 'ner'](_0x40ce08, _0x20fd95 = 0x0) {
        }
        ['showVideoO' + 'rrShare'](_0x1603f7, _0x56ec74) {
        }
        ['isForceVid' + 'eo'](_0x425708) {
        }
        ['isForceVid' + 'eoWithErro' + 'r'](_0x29ce54) {
        }
        ['checkShowS' + 'hareAfterV' + 'ideoFail'](_0x18c7ea) {
        }
        ['handleVide' + 'o'](_0x5da069) {
        }
        ['handleShar' + 'e'](_0xf85936, _0x47cc5d) {
        }
        ['hasDailySh' + 'ared'](_0x4e13d8) {
        }
        ['onShowAdCo' + 'mpleted'](_0x348fa1, _0x1d5c2a = !0x1) {
        }
        ['onGameFocu' + 's']() {
        }
        ['getVSShowT' + 'ype']() {
        }
        static ['getShowTyp' + 'e'](_0x541a07) {
            if (_0x353499['Instance']['wxCheck']())
                return 0x2;
            if (_0x26ee17['IsOppo']())
                return 0x2;
            let _0x172850 = _0x353499['Instance']['getVSShowT' + 'ype']();
            if (_0x172850 !== _0x363478['Default'])
                return _0x172850 === _0x363478['Video'] && _0x2276ef['vsInfo']['snum'] > 0x0 && !_0x353499['Instance']['canShowVid' + 'eoADByCoun' + 't']() ? _0x363478['Share'] : _0x172850;
            {
                let _0x2c3cd1 = _0x2276ef['vList'];
                if (_0x2c3cd1['length'])
                    for (let _0x4bd4b6 = 0x0; _0x4bd4b6 < _0x2c3cd1['length']; _0x4bd4b6++) {
                        let _0x489b27 = _0x2c3cd1[_0x4bd4b6];
                        if (_0x489b27 && _0x489b27['pos'] == _0x541a07)
                            return _0x489b27['type'] || 0x0;
                    }
            }
            return 0x0;
        }
        ['shouldShow' + 'ForBanner'](_0x1bba21) {
        }
        ['resetByOve' + 'rDay']() {
        }
        ['canAddVSCo' + 'unt'](_0x1967e7) {
        }
        ['canShowVid' + 'eoADByCoun' + 't']() {
        }
        ['onFinishVi' + 'deoAd'](_0x578657) {
        }
        ['updateView' + 'WithPos'](_0x533f2b, _0x21f97b) {
        }
        static ['canE']() {
            return ![];
        }
    }
    _0x353499['_instance'] = null;
    class _0x5d5e4c {
        constructor() {
            this['hideBanner'] = !0x1, this['adpaterArr' + 'ay'] = [], this['uiArray'] = [], this['debugStr'] = '', this['maskView'] = null, this['arrTips'] = null, this['reset'](), this['hideBanner'] = !0x1;
        }
        static get ['Instance']() {
            return null == _0x5d5e4c['_instance'] && (_0x5d5e4c['_instance'] = new _0x5d5e4c(), _0x5d5e4c['_instance']['init']()), _0x5d5e4c['_instance'];
        }
        ['init']() {
            Laya['stage']['on'](Laya['Event']['RESIZE'], this, this['onScreenRe' + 'size']);
        }
        ['addAdapter'](_0xb4f02a) {
            this['adpaterArr' + 'ay']['push'](_0xb4f02a);
        }
        ['clearAdapt' + 'erOnUI'](_0x3ffdd4) {
            for (var _0xbc7fcb = _0x3ffdd4['uiname'], _0xaf50d0 = this['adpaterArr' + 'ay']['length'] - 0x1; _0xaf50d0 >= 0x0; _0xaf50d0--)
                this['adpaterArr' + 'ay'][_0xaf50d0]['uiname'] == _0xbc7fcb && this['adpaterArr' + 'ay']['splice'](_0xaf50d0, 0x1);
        }
        ['onScreenRe' + 'size']() {
            for (var _0x156f17 = this['adpaterArr' + 'ay']['length'] - 0x1; _0x156f17 >= 0x0; _0x156f17--)
                this['adpaterArr' + 'ay'][_0x156f17]['adapter']();
        }
        ['reset']() {
            this['uiArray'] = [], this['adpaterArr' + 'ay'] = [];
        }
        ['pushUI'](_0xf836a3) {
            this['uiArray']['push'](_0xf836a3);
        }
        ['toUI'](_0x1d8231, _0x587f0b) {
            for (var _0x44ab84 = this['uiArray']['length'] - 0x1; _0x44ab84 >= 0x0; _0x44ab84--) {
                var _0x5f45aa = this['uiArray'][_0x44ab84];
                this['uninitUI'](_0x5f45aa);
            }
            this['uiArray']['length'] = 0x0, this['openUI'](_0x1d8231, _0x587f0b);
        }
        ['openUIUniq' + 'ue'](_0x32eab0, _0x1f8e24, _0x5c0c91 = !0x0) {
            0x0 == this['isUIOpen'](_0x32eab0) && this['openUI'](_0x32eab0, _0x1f8e24, _0x5c0c91);
        }
        ['checkBanne' + 'r']() {
            _0x353499['Instance']['isShowingB' + 'anner']() && (_0x353499['Instance']['hideBanner'](), this['hideBanner'] = !0x0);
        }
        ['restoreBan' + 'ner']() {
            if (this['hideBanner'])
                for (let _0x3a0703 = this['uiArray']['length'] - 0x1; _0x3a0703 >= 0x0; _0x3a0703--) {
                    let _0x7d729e = this['uiArray'][_0x3a0703];
                    if (_0x7d729e['visible']) {
                        let _0x5b43c9 = 0x0;
                        _0x7d729e['getPinY'] && (_0x5b43c9 = _0x7d729e['getPinY']());
                        let _0x207c01 = _0x7d729e['uiname'] && _0x7d729e['uiname']['id'] || 0x0;
                        _0x353499['Instance']['restoreBan' + 'ner'](_0x207c01, _0x5b43c9), this['hideBanner'] = !0x1;
                        break;
                    }
                }
        }
        ['openUI'](_0x413a55, _0x544b7c = null, _0x4528e7 = !0x0) {
            this['checkBanne' + 'r'](), null != _0x413a55['res'] ? Laya['loader']['load'](_0x413a55['res'], Laya['Handler']['create'](null, function () {
                _0x5d5e4c['Instance']['createUI'](_0x413a55, _0x544b7c, _0x4528e7);
            }), null) : this['createUI'](_0x413a55, _0x544b7c, _0x4528e7);
        }
        ['createUI'](_0x1f91ae, _0x56ce5b, _0x49deb8 = !0x0) {
            var _0x5a98a6 = new _0x1f91ae['cls']();
            if (null != _0x5a98a6) {
                _0x5a98a6['uiname'] = _0x1f91ae;
                let _0x3c3f96 = !0x0;
                switch (_0x1f91ae) {
                case _0xfa1fac['Load']:
                    _0x5a98a6['zOrder'] = _0x5d5e4c['_loadingVi' + 'ewZorder'];
                    break;
                default:
                    _0x5a98a6['zOrder'] = _0x5d5e4c['_viewZorde' + 'r']++;
                }
                if (_0x49deb8 && this['uiArray']['length'] > 0x0) {
                    let _0x3f1d12 = this['uiArray'][this['uiArray']['length'] - 0x1];
                    _0x3f1d12['visible'] && (null !== _0x3f1d12['didHide'] && void 0x0 !== _0x3f1d12['didHide'] && _0x3f1d12['didHide'](), _0x4441f7['Instance']['event'](_0x1c0419['HideView'], _0x3f1d12));
                }
                Laya['stage']['addChild'](_0x5a98a6), this['pushUI'](_0x5a98a6), _0x5a98a6['visible'] = _0x49deb8;
                let _0x53f24f = 0x0;
                _0x5a98a6['getPinY'] && (_0x53f24f = _0x5a98a6['getPinY']()), _0x4441f7['Instance']['event'](_0x1c0419['OpenView'], _0x1f91ae), null != _0x5a98a6['init'] && _0x49deb8 && _0x5a98a6['init'](_0x56ce5b), _0x3c3f96 = this['canShowBan' + 'er'](_0x5a98a6), _0x1f91ae === _0xfa1fac['Load'] && (_0x3c3f96 = !0x1), _0x49deb8 && _0x3c3f96 && _0x353499['Instance']['showADBann' + 'er'](_0x1f91ae['id'], _0x53f24f), _0x49deb8 && (_0x4441f7['Instance']['event'](_0x1c0419['ShowView'], _0x5a98a6), null !== _0x5a98a6['didShow'] && void 0x0 !== _0x5a98a6['didShow'] && _0x49deb8 && _0x5a98a6['didShow']());
            }
        }
        ['closeUI'](_0x3ad4a9) {
            for (var _0x2fe15e = this['uiArray']['length'] - 0x1; _0x2fe15e >= 0x0; _0x2fe15e--) {
                var _0x4a618b = this['uiArray'][_0x2fe15e];
                if (_0x4a618b['uiname'] == _0x3ad4a9) {
                    this['uninitUI'](_0x4a618b), this['uiArray']['splice'](_0x2fe15e, 0x1);
                    break;
                }
            }
            for (let _0x3208e1 = this['uiArray']['length'] - 0x1; _0x3208e1 >= 0x0; _0x3208e1--) {
                let _0x694802 = this['uiArray'][_0x3208e1];
                if (_0x694802['visible']) {
                    if (null !== _0x694802['didShow'] && void 0x0 !== _0x694802['didShow'] && _0x694802['didShow'](), _0x4441f7['Instance']['event'](_0x1c0419['ShowView'], _0x694802), this['hideBanner']) {
                        let _0x1f3062 = 0x0;
                        _0x694802['getPinY'] && (_0x1f3062 = _0x694802['getPinY']());
                        let _0xa40c2d = _0x694802['uiname'] && _0x694802['uiname']['id'] || 0x0;
                        _0x353499['Instance']['restoreBan' + 'ner'](_0xa40c2d, _0x1f3062), this['hideBanner'] = !0x1;
                    }
                    break;
                }
            }
        }
        ['isUIOpen'](_0x9a4e32) {
            for (var _0x32e7e0 = this['uiArray']['length'] - 0x1; _0x32e7e0 >= 0x0; _0x32e7e0--) {
                if (this['uiArray'][_0x32e7e0]['uiname'] === _0x9a4e32)
                    return !0x0;
            }
            return !0x1;
        }
        ['isTopUI'](_0x318211) {
            for (let _0xa8a69b = this['uiArray']['length'] - 0x1; _0xa8a69b >= 0x0; _0xa8a69b--) {
                let _0x4c8272 = this['uiArray'][_0xa8a69b];
                if (_0x4c8272['visible'])
                    return _0x4c8272['uiname'] === _0x318211;
            }
            return !0x1;
        }
        ['showUI'](_0x11f05a, _0x59f298) {
            for (var _0x2270fa = this['uiArray']['length'] - 0x1; _0x2270fa >= 0x0; _0x2270fa--) {
                var _0x4d1c43 = this['uiArray'][_0x2270fa];
                if (_0x4d1c43['uiname'] == _0x11f05a) {
                    null != _0x4d1c43['init'] && _0x4d1c43['init'](_0x59f298), null !== _0x4d1c43['didShow'] && _0x4d1c43['didShow'](), _0x4441f7['Instance']['event'](_0x1c0419['ShowView'], _0x4d1c43), _0x4d1c43['visible'] = !0x0, _0x4d1c43['zOrder'] = _0x5d5e4c['_viewZorde' + 'r']++;
                    let _0x1254ab = 0x0;
                    return _0x4d1c43['getPinY'] && (_0x1254ab = _0x4d1c43['getPinY']()), this['canShowBan' + 'er'](_0x4d1c43) && _0x353499['Instance']['showADBann' + 'er'](_0x11f05a['id'], _0x1254ab), _0x4441f7['Instance']['event'](_0x1c0419['OpenView'], _0x11f05a), !0x0;
                }
            }
            return !0x1;
        }
        ['hideUI'](_0x53701a) {
            for (var _0x4b850 = this['uiArray']['length'] - 0x1; _0x4b850 >= 0x0; _0x4b850--) {
                var _0x2ad938 = this['uiArray'][_0x4b850];
                if (_0x2ad938['uiname'] == _0x53701a) {
                    _0x2ad938['visible'] = !0x1, null !== _0x2ad938['didHide'] && _0x2ad938['didHide'](), _0x4441f7['Instance']['event'](_0x1c0419['HideView'], _0x2ad938), null !== _0x2ad938['uninit'] && _0x2ad938['uninit'](), this['checkBanne' + 'r']();
                    break;
                }
            }
            for (let _0x2fe1fb = this['uiArray']['length'] - 0x1; _0x2fe1fb >= 0x0; _0x2fe1fb--) {
                let _0x16a4bf = this['uiArray'][_0x2fe1fb];
                if (_0x16a4bf['visible']) {
                    if (this['hideBanner']) {
                        let _0x12fde5 = 0x0;
                        _0x16a4bf['getPinY'] && (_0x12fde5 = _0x16a4bf['getPinY']());
                        let _0x4f1b44 = _0x16a4bf['uiname'] && _0x16a4bf['uiname']['id'] || 0x0;
                        _0x353499['Instance']['restoreBan' + 'ner'](_0x4f1b44, _0x12fde5);
                    }
                    break;
                }
            }
        }
        ['findUI'](_0x491e55) {
            for (var _0x37d877 = this['uiArray']['length'] - 0x1; _0x37d877 >= 0x0; _0x37d877--) {
                var _0x1089ac = this['uiArray'][_0x37d877];
                if (_0x1089ac['uiname'] == _0x491e55)
                    return _0x1089ac;
            }
            return null;
        }
        ['uninitUI'](_0x14a070) {
            this['clearAdapt' + 'erOnUI'](_0x14a070), null != _0x14a070['uninit'] && _0x14a070['uninit'](), Laya['timer']['clearAll'](_0x14a070), _0x353499['Instance']['hideBanner'](_0x14a070['uiname']['id']), _0x14a070['removeSelf'](), _0x14a070['destroy']();
        }
        ['update']() {
            for (var _0x3cf6fa = this['uiArray']['length'] - 0x1; _0x3cf6fa >= 0x0; _0x3cf6fa--) {
                var _0x5c4d9c = this['uiArray'][_0x3cf6fa];
                null != _0x5c4d9c['update'] && _0x5c4d9c['update']();
            }
        }
        ['showDialog'](_0x2c8e2b) {
        }
        ['showMask'](_0x20d4fb) {
            if (_0x20d4fb && null == this['maskView']) {
                var _0x5631aa = new Laya['Sprite']();
                this['maskView'] = _0x5631aa, _0x5631aa['graphics']['drawRect'](-0x212, -0xb4, 0x924, 0x438, '#949494'), _0x5631aa['alpha'] = 0.5, _0x5631aa['mouseThrou' + 'gh'] = !0x1, _0x5631aa['mouseEnabl' + 'ed'] = !0x0;
                var _0x548a78 = new Laya['HitArea']();
                _0x548a78['hit']['drawRect'](0x0, 0x0, Laya['stage']['width'], Laya['stage']['height'], '#000000'), _0x5631aa['hitArea'] = _0x548a78, _0x5631aa['zOrder'] = _0x5d5e4c['_dialogZor' + 'der'], Laya['stage']['addChild'](this['maskView']);
            } else
                _0x20d4fb || null == this['maskView'] || (this['maskView']['removeSelf'](), this['maskView']['destroy'](), this['maskView'] = null);
        }
        ['showTips'](_0x11a64a, _0x13d3ac = 0x3e8, _0x1c6a08 = 0x1e, _0x4b7741 = '#FFFFFF') {
            var _0x5136a5 = this['arrTips'];
            let _0x1c56ba = null;
            if (null == _0x5136a5) {
                _0x5136a5 = [];
                var _0x270315 = new Laya['Box']();
                Laya['stage']['addChild'](_0x270315), _0x270315['zOrder'] = _0x5d5e4c['_tipsZorde' + 'r'];
                for (var _0x476fdd = 0x0; _0x476fdd < 0x3; _0x476fdd++) {
                    (_0x1c56ba = new Laya['Box']())['width'] = 0x258, _0x1c56ba['height'] = 0x72, _0x1c56ba['visible'] = !0x1;
                    {
                        let _0x2bf136 = new Laya['Image']();
                        _0x2bf136['skin'] = 'common/bg_' + 'toast.png', _0x2bf136['width'] = 0x258, _0x2bf136['height'] = 0x72, _0x1c56ba['addChild'](_0x2bf136);
                        let _0xc467d3 = new Laya['Label']();
                        _0xc467d3['wordWrap'] = !![], (_0xc467d3['name'] = 'txt', _0xc467d3['fontSize'] = 0x1e, _0xc467d3['color'] = '#FFFFFF', _0xc467d3['width'] = 0x258, _0xc467d3['height'] = 0x72, _0xc467d3['align'] = 'center', _0xc467d3['valign'] = 'middle', _0x1c56ba['addChild'](_0xc467d3));
                    }
                    _0x5136a5['push'](_0x1c56ba), _0x270315['addChild'](_0x1c56ba);
                }
                this['arrTips'] = _0x5136a5, _0x270315['width'] = 0x258, _0x270315['centerX'] = 0x0, _0x270315['centerY'] = 0x0;
            }
            if (0x0 != _0x5136a5['length']) {
                {
                    let _0x4d7c1c = (_0x1c56ba = _0x5136a5['shift']())['getChildBy' + 'Name']('txt');
                    _0x4d7c1c['text'] = _0x11a64a, _0x4d7c1c['fontSize'] = _0x1c6a08 || 0x1e, _0x4d7c1c['color'] = _0x4b7741 || '#FFFFFF';
                }
                _0x13d3ac = _0x13d3ac || 0x258, _0x1c56ba['visible'] = !0x0, _0x1c56ba['alpha'] = 0x1, Laya['Tween']['to'](_0x1c56ba, { 'alpha': 0x0 }, _0x13d3ac, null, Laya['Handler']['create'](this, function (_0x3e946a) {
                    _0x3e946a['visible'] = !0x1, _0x5136a5['push'](_0x3e946a);
                }, [_0x1c56ba]), 0x3e8);
            }
        }
        ['canShowBan' + 'er'](_0x3061c4) {
            return !_0x3061c4 || !_0x3061c4['hasETouch'] || _0x3061c4['uiname'] != _0xfa1fac['Result'] || !_0x3061c4['hasETouch']();
        }
    }
    _0x5d5e4c['_viewZorde' + 'r'] = 0x3e8, _0x5d5e4c['_loadingVi' + 'ewZorder'] = 0xbb7, _0x5d5e4c['_tipsZorde' + 'r'] = 0xbb8, _0x5d5e4c['_dialogZor' + 'der'] = 0xc1c, _0x5d5e4c['_maskZorde' + 'r'] = 0xc1c, _0x5d5e4c['_instance'] = null, _0x5d5e4c['_debugTxt'] = null;
    class _0x5893c0 {
        constructor() {
        }
        static ['currTimer']() {
            return Laya['timer']['currTimer'];
        }
        static ['scale']() {
            return Laya['timer']['scale'];
        }
        static ['currFrame']() {
            return Laya['timer']['currFrame'];
        }
        static ['delta']() {
            return Laya['timer']['delta'];
        }
        static ['once'](_0x591da8, _0x3b524d, _0x2ec151, _0x1afc6a = [], _0x446a81 = !0x0) {
            Laya['timer']['once'](_0x591da8, _0x3b524d, _0x2ec151, _0x1afc6a, _0x446a81);
        }
        static ['loop'](_0xb4d9b2, _0x95549a, _0x30869c, _0x458e62 = [], _0x2e168f = !0x0, _0x475253 = !0x1) {
            Laya['timer']['loop'](_0xb4d9b2, _0x95549a, _0x30869c, _0x458e62, _0x2e168f, _0x475253);
        }
        static ['frameOnce'](_0x1e8883, _0x447eaa, _0x191a88, _0x11d830, _0x4ed6b8) {
            Laya['timer']['frameOnce'](_0x1e8883, _0x447eaa, _0x191a88, _0x11d830, _0x4ed6b8);
        }
        static ['frameLoop'](_0x3f0730, _0x251f15, _0x113a9d, _0x33ab26 = null, _0xfb253d = !0x0) {
            Laya['timer']['frameLoop'](_0x3f0730, _0x251f15, _0x113a9d, _0x33ab26, _0xfb253d);
        }
        static ['clear'](_0x460373, _0x48d208) {
            Laya['timer']['clear'](_0x460373, _0x48d208);
        }
        static ['clearAll'](_0x55d1d7) {
            Laya['timer']['clearAll'](_0x55d1d7);
        }
        static ['callLater'](_0x9eac2f, _0x2ad93d, _0x280dd4) {
            Laya['timer']['callLater'](_0x9eac2f, _0x2ad93d, _0x280dd4);
        }
        static ['runCallLat' + 'er'](_0xf2b041, _0x32b163) {
            Laya['timer']['runCallLat' + 'er'](_0xf2b041, _0x32b163);
        }
        static ['runTimer'](_0x68ae7e, _0x30a4de) {
            Laya['timer']['runTimer'](_0x68ae7e, _0x30a4de);
        }
    }
    class _0x469528 {
        constructor() {
            this['mainScene'] = null, this['hasInited'] = null;
        }
        static get ['Instance']() {
            return null === _0x469528['_instance'] && (_0x469528['_instance'] = new _0x469528()), _0x469528['_instance'];
        }
        static ['getResPath'](_0x2cfed7) {
            return _0x2cfed7;
        }
        ['loadHomeSc' + 'ene']() {
            return new Promise((_0x5ef3b8, _0x6b2c40) => {
                _0x5ef3b8(!0x0);
            });
        }
        ['loadGameOb' + 'ject']() {
            return new Promise((_0x5b381f, _0x27d635) => {
                this['hasInited'], _0x5b381f(!0x0);
            });
        }
        get ['homeScene']() {
            return this['mainScene'];
        }
    }
    _0x469528['_instance'] = null;
    class _0x4c1e82 {
        constructor() {
            this['loadingRes'] = !0x1, this['loaded'] = !0x1, this['loadResCal' + 'lback'] = null, this['templet'] = null, this['bitmapFont'] = null, this['threeDResD' + 'ir'] = '', this['reset']();
        }
        static get ['Instance']() {
            return null == _0x4c1e82['_instance'] && (_0x4c1e82['_instance'] = new _0x4c1e82()), _0x4c1e82['_instance'];
        }
        ['reset']() {
            this['loadingRes'] = !0x1, this['loaded'] = !0x1, 'undefined' != typeof wx && _0x2276ef['useZip'] && (this['threeDResD' + 'ir'] = wx['env']['USER_DATA_' + 'PATH'] + '/DRes' + _0x2276ef['tResVer'] + '/');
        }
        ['loadRes'](_0x1fc851) {
            this['loadingRes'] || (this['loadResCal' + 'lback'] = _0x1fc851, this['loadingRes'] = !0x0, this['templet'] = new Laya['Templet'](), this['templet']['on'](Laya['Event']['COMPLETE'], this, this['onLoadAnim' + 'Complete']), this['templet']['on'](Laya['Event']['ERROR'], this, this['onError']), this['templet']['loadAni']('dg/tea.sk'), this['loadAllRes']());
        }
        ['onLoadAnim' + 'Complete']() {
        }
        ['onProgress'](_0x4956cd) {
            _0x4441f7['Instance']['event'](_0x1c0419['ResLoadPro' + 'gress'], _0x4956cd);
        }
        ['onLoad']() {
            this['loadingRes'] = !0x1;
        }
        ['onLoadResC' + 'omplete']() {
            this['loadResCal' + 'lback'] && this['loadResCal' + 'lback']['run'](), this['loadingRes'] = !0x1, this['loaded'] = !0x0, this['sentResToO' + 'penContext'](), _0x4441f7['Instance']['event'](_0x1c0419['StartLoadF' + 'inish']), _0x26ee17['nodeReport'](_0x1f524e['loadRes']);
        }
        ['loadAllRes']() {
            'undefined' == typeof wx || _0x2276ef['UseRemoteR' + 'es'], _0x2276ef['useZip'] ? this['unzipThree' + 'DRes']()['then'](_0x21bf8f => {
                this['deleteOldT' + 'hreeDResDi' + 'r'](), this['loadGRes']();
            })['catch'](_0x8cf5a8 => {
            }) : this['loadGRes'](), _0x523ef5['Instance']['loadComple' + 'te']();
        }
        ['loadGRes']() {
            let _0x5f1f77 = _0x1281fe['getGameRes']();
            Laya['loader']['load'](_0x5f1f77, Laya['Handler']['create'](this, this['loadHomeSc' + 'ene']), Laya['Handler']['create'](this, this['onProgress'], null, !0x1), null, 0x1, !0x0);
        }
        ['onError']() {
        }
        ['clear']() {
        }
        ['getSkeleto' + 'n']() {
            var _0x2c3d95 = this['templet']['buildArmat' + 'ure'](0x1);
            return _0x2c3d95['pos'](0x0, 0x0), _0x2c3d95;
        }
        ['sentResToO' + 'penContext']() {
            Laya['Browser']['onMiniGame'];
        }
        ['deleteOldT' + 'hreeDResDi' + 'r']() {
            if ('undefined' == typeof wx || !_0x2276ef['useZip'])
                return;
            var _0xe2f9fe = wx['getFileSys' + 'temManager']();
            let _0x237b47 = wx['env']['USER_DATA_' + 'PATH'], _0x242f55 = 'DRes' + _0x2276ef['tResVer'];
            _0xe2f9fe['readdir']({
                'dirPath': _0x237b47,
                'success': _0x474ade => {
                    let _0x258cd5 = _0x474ade['files'];
                    for (let _0x408b26 = 0x0; _0x408b26 < _0x258cd5['length']; _0x408b26++) {
                        let _0x534864 = _0x258cd5[_0x408b26];
                        _0x534864 !== _0x242f55 && 0x0 == _0x534864['indexOf']('DRes') && _0xe2f9fe['rmdir']({
                            'dirPath': wx['env']['USER_DATA_' + 'PATH'] + '/' + _0x534864,
                            'recursive': !0x0
                        });
                    }
                }
            });
        }
        ['unzipThree' + 'DRes']() {
            if ('undefined' == typeof wx || !_0x2276ef['useZip'])
                return new Promise((_0x38a0de, _0x52974e) => {
                    _0x38a0de('');
                });
            var _0x291b73 = wx['getFileSys' + 'temManager']();
            _0x2276ef['tResVer'];
            let _0xaa07ba = this['threeDResD' + 'ir'];
            return new Promise((_0xf80278, _0x483ffb) => {
                _0x291b73['access']({
                    'path': _0xaa07ba,
                    'success': _0x2c6e40 => {
                        _0xf80278(_0x2c6e40);
                    },
                    'fail': () => {
                        _0x483ffb('res\x20direct' + 'ory\x20not\x20ex' + 'ist.\x20upzip' + 'ing...');
                    }
                });
            })['then'](_0x2a497c => {
            })['catch'](_0x2cfc27 => new Promise((_0x5d6837, _0x1cd463) => {
                _0x291b73['unzip']({
                    'zipFilePath': 'res/DRes.z' + 'ip',
                    'targetPath': wx['env']['USER_DATA_' + 'PATH'],
                    'success': function (_0x57575f) {
                        _0x5d6837();
                    },
                    'fail': function (_0x4fe491) {
                        _0x1cd463('assets\x20unz' + 'ip\x20fail');
                    }
                });
            }));
        }
        ['loadHomeSc' + 'ene']() {
            _0x469528['Instance']['loadHomeSc' + 'ene']()['then'](_0xc72b4d => _0x469528['Instance']['loadGameOb' + 'ject']())['then'](_0x46e410 => {
                this['onLoadResC' + 'omplete']();
            });
        }
    }
    _0x4c1e82['_instance'] = null;
    class _0x55efa4 extends _0x3a0bc3['EggViewUI'] {
        constructor() {
            super(...arguments), this['count'] = 0x1e, this['finish'] = !0x1, this['isFirst'] = !0x0, this['tapTimeArr'] = [], this['totalCount'] = 0x0, this['sampleCoun' + 't'] = 0x0, this['coin'] = 0x0, this['startTime'] = 0x0, this['maskWidth'] = 0x0, this['banner'] = null, this['bannerPinY'] = 0x0, this['bannerTop'] = 0x0, this['_scene'] = null, this['rank'] = 0x0, this['styleTop'] = 0x0, this['countDown'] = 0x5, this['skeleton'] = null, this['ishitsucce' + 'ss'] = !0x1, this['isShow'] = !0x1;
        }
        ['init'](_0x4b2c18) {
            this['_scene'] = _0x4b2c18['se'], this['rank'] = _0x4b2c18['rank'], this['ishitsucce' + 'ss'] = !0x1, this['regiestEve' + 'nt'](), this['count'] = 0x14 + Math['floor'](0xa * Math['random']()), this['totalCount'] = this['count'], this['tapTimeArr'] = [], this['sampleCoun' + 't'] = Math['floor'](0x4 * Math['random']() + 0x4), this['ani1']['play'](0x0, !0x0), this['skeleton'] = _0x4c1e82['Instance']['getSkeleto' + 'n'](), this['skeleton']['pos'](0x109, 0x144), this['dg']['addChild'](this['skeleton']), this['skeleton']['play']('2', !0x0, !0x0), this['skeleton']['paused'](), this['countDown'] = 0x5, this['coundDownI' + 'mg']['skin'] = 'common/num' + '_' + this['countDown'] + '.png', this['coundDownI' + 'mg']['visible'] = !0x0;
        }
        ['startCount' + 'Down']() {
            this['stopCountD' + 'own'](), Laya['timer']['loop'](0x3e8, this, this['updateCoun' + 'tDown']);
        }
        ['stopCountD' + 'own']() {
            Laya['timer']['clear'](this, this['updateCoun' + 'tDown']);
        }
        ['updateCoun' + 'tDown']() {
            if (this['ishitsucce' + 'ss'])
                _0x5893c0['clear'](this, this['updateCoun' + 'tDown']);
            else {
                if (this['countDown'] -= 0x1, this['coundDownI' + 'mg']['skin'] = 'common/num' + '_' + this['countDown'] + '.png', 0x0 === this['countDown'])
                    return _0x5893c0['clear'](this, this['updateCoun' + 'tDown']), void Laya['timer']['loop'](0x1f4, this, this['closeView']);
            }
        }
        ['uninit']() {
            this['unregiestE' + 'vent']();
        }
        ['regiestEve' + 'nt']() {
            this['hitBtn']['on'](Laya['Event']['CLICK'], this, this['clickHitBt' + 'n']), _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['on'](_0x1c0419['BannerPosC' + 'hange'], this, this['onADBanner' + 'Change']), Laya['timer']['frameLoop'](0x1, this, this['updatemask' + 'Width']);
        }
        ['unregiestE' + 'vent']() {
            this['hitBtn']['off'](Laya['Event']['CLICK'], this, this['clickHitBt' + 'n']), _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['off'](_0x1c0419['BannerPosC' + 'hange'], this, this['onADBanner' + 'Change']), Laya['timer']['clear'](this, this['updatemask' + 'Width']);
        }
        ['updatemask' + 'Width']() {
            this['maskWidth'] -= 0x2, this['maskWidth'] < 0x0 && (this['maskWidth'] = 0x0), this['updateMask']();
        }
        ['updateMask']() {
            let _0x5f0e66 = this['maskWidth'];
            this['maskView']['graphics']['clear'](), this['maskView']['graphics']['drawRect'](0x0, 0x0, _0x5f0e66, this['maskView']['height'], '#FF0000');
        }
        ['clickHitBt' + 'n']() {
            this['skeleton']['resume'](), this['isFirst'] && (this['startTime'] = new Date()['getTime'](), this['isFirst'] = !0x1, this['startCount' + 'Down']());
            let _0x3c1e20 = 0x0, _0x2bcc16 = !0x1, _0x49cc73 = new Date()['getTime']();
            if (this['tapTimeArr']['push'](_0x49cc73), this['tapTimeArr']['length'] < this['sampleCoun' + 't'] ? (_0x3c1e20 = this['tapTimeArr']['length'] / (_0x49cc73 - this['tapTimeArr'][0x0]), _0x3c1e20 = Math['min'](_0x3c1e20, 0.001 * this['tapTimeArr']['length'])) : _0x3c1e20 = this['sampleCoun' + 't'] / (_0x49cc73 - this['tapTimeArr'][this['tapTimeArr']['length'] - this['sampleCoun' + 't']]), _0x3c1e20 *= 0x7d, _0x2bcc16 = (_0x3c1e20 = Math['min'](0x1, _0x3c1e20)) > 0.9, _0x3c1e20 >= 0.15 && _0x3c1e20 <= 0.4 && Math['random']() <= 0.4 && (this['banner'] && this['banner']['show'] && this['banner']['show'](), this['isShow'] = !0x0, _0x2bcc16 = !0x0), !this['isShow'] && _0x3c1e20 >= 0.41 && _0x3c1e20 <= 0.6 && Math['random']() <= 0.8 && (this['banner'] && this['banner']['show'] && this['banner']['show'](), this['isShow'] = !0x0, _0x2bcc16 = !0x0), !this['isShow'] && _0x3c1e20 >= 0.61 && (this['banner'] && this['banner']['show'] && this['banner']['show'](), this['isShow'] = !0x0, _0x2bcc16 = !0x0), this['maskWidth'] = this['maskView']['width'] * _0x3c1e20, this['updateMask'](), _0x2d5683['Instance']['playSound'](_0xc4e5f6['egg']), this['finish'])
                return this['maskWidth'] = this['maskView']['width'], this['updateMask'](), void Laya['timer']['clear'](this, this['updatemask' + 'Width']);
            if (this['count']--, 0x0 === this['count'] || _0x2bcc16) {
                let _0x1ebb04 = _0x2276ef['vGameInfo'] && _0x2276ef['vGameInfo']['eggInfo']['delay'] || 0x12c;
                0x0 === this['count'] && (_0x1ebb04 = (_0x2276ef['vGameInfo'] && _0x2276ef['vGameInfo']['eggInfo']['eDelay'] || 0x5dc) + Math['floor'](0x1f4 * Math['random']())), this['finish'] = !0x0, Laya['timer']['once'](_0x1ebb04, this, () => {
                    Laya['timer']['clear'](this, this['updatemask' + 'Width']), this['ani1']['stop'](), this['ani2']['play'](0x0, !0x0), this['ani4']['play'](0x0, !0x0);
                    let _0x204668 = new Date()['getTime']() - this['startTime'], _0x4742e0 = this['totalCount'] / _0x204668;
                    _0x4742e0 = Math['max'](_0x4742e0, 0.003), _0x4742e0 = (0x3e8 * Math['min'](_0x4742e0, 0.008) - 0x3) / 0xa + 0.3, this['coin'] = Math['ceil'](_0x2276ef['vGameInfo']['eggInfo']['gold'] * _0x4742e0), _0x26ee17['IsQQ']() && this['banner'] && this['banner']['style'] && (this['banner']['style']['top'] = this['styleTop'] || 0xbb8), this['isFirst'] || this['banner'] && this['banner']['show'] && this['banner']['show'](), _0x26ee17['Instance']['report'](_0x1f524e['hitedEgg'], {
                        'hitCount': this['totalCount'] - this['count'],
                        'totalCount': this['totalCount'],
                        'timeDiff': _0x204668 / 0x3e8,
                        'showBanner': null !== this['banner'] && void 0x0 !== this['banner'],
                        'heigthInfo': this['bannerPinY'] + '-' + this['bannerTop'] + '-' + this['stage']['height']
                    }), this['banner'] && this['banner']['show'] && this['banner']['show'](), this['ishitsucce' + 'ss'] = !0x0, Laya['timer']['loop'](0x7d0, this, this['closeView']);
                });
            }
        }
        ['clickClose' + 'Btn']() {
        }
        ['closeView']() {
            _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['EggView']), this['_scene']['showWinRes' + 'ultBoxView' + 'Do'](this['rank'], this['ishitsucce' + 'ss'], this['ishitsucce' + 'ss'] ? this['coin'] : 0x0);
        }
        ['onShowAdCo' + 'mpleted'](_0x42f387) {
        }
        ['onADBanner' + 'Change'](_0xdc4320) {
            _0xdc4320['ADPos'] === _0xfa1fac['EggView']['id'] && _0xdc4320['BannerAD'] && (this['bannerTop'] = _0xdc4320['top'], this['banner'] = _0xdc4320['BannerAD'], this['banner'] && this['banner']['hide'] && this['banner']['hide'](), Laya['timer']['once'](0xa, this, () => {
                this['banner'] && this['banner']['hide'] && this['banner']['hide']();
            }), Laya['timer']['once'](0x14, this, () => {
                this['banner'] && this['banner']['hide'] && this['banner']['hide']();
            }), Laya['timer']['once'](0x1e, this, () => {
                this['banner'] && this['banner']['hide'] && this['banner']['hide']();
            }), _0x26ee17['IsQQ']() && (this['banner'] && this['banner']['style'] ? (this['styleTop'] = this['banner']['style']['top'], this['banner']['style']['top'] = 0xbb8) : this['styleTop'] = 0xbb8));
        }
        ['getPinY']() {
            let _0x154865 = this['hitBtn']['localToGlo' + 'bal'](new Laya['Point'](0x0));
            return this['bannerPinY'] = _0x154865['y'], _0x154865['y'];
        }
    }
    class _0x11ecec extends _0x3a0bc3['RandomLeve' + 'lUI'] {
        constructor() {
            super(), this['_randomId'] = 0x0, this['_skinDrag'] = null, this['_skinMap'] = [], this['_skinPageA' + 'rr'] = [], this['_skinItemA' + 'rr'] = [], this['_scene'] = null, this['_control'] = null;
        }
        ['regiestEve' + 'nt']() {
            this['CloseBtn']['on']('click', this, this['closeClick' + 'Handle']);
        }
        ['unregieste' + 'rEvent']() {
            this['CloseBtn']['off']('click', this, this['closeClick' + 'Handle']);
        }
        ['uninit']() {
            this['unregieste' + 'rEvent'](), this['timer']['clearAll'](this);
        }
        ['init'](_0x43fdfe) {
            this['_scene'] = _0x43fdfe['se'], this['_control'] = _0x43fdfe['cot'], this['regiestEve' + 'nt']();
            let _0x30d7bb = this;
            this['CloseBtn']['visible'] = ![];
            if (Laya['timer']['once'](0x1f4, null, function () {
                    _0x30d7bb['CloseBtn']['visible'] = !0x0;
                }), _0x30d7bb['CloseBtn']['y'] = 0x2e6, this['goldCnt']['text'] = _0x1ae356['Instance']['gold'], this['_scene']['ChildScene' + 'Cnt'] >= 0x2)
                for (let _0x4b488c = 0x1; _0x4b488c <= 0x3; _0x4b488c++) {
                    let _0x147df3 = this['box' + _0x4b488c]['getChildBy' + 'Name']('bg'), _0x4b639d = _0x147df3['getChildBy' + 'Name']('bgright'), _0x3cd89c = this['box' + _0x4b488c]['getChildBy' + 'Name']('openbox');
                    _0x4b488c > 0x4 - this['_scene']['ChildScene' + 'Cnt'] ? (_0x147df3['skin'] = 'game/r_bg.' + 'png', _0x4b639d['visible'] = !0x0, 0x1 == _0x4b488c ? (_0x3cd89c['skin'] = 'game/chess' + 'brut_opene' + 'd.png', _0x5d5e4c['Instance']['showTips']('You\u00a0finish' + 'ed\u00a0all\u00a0cha' + 'llenges\u00a0an' + 'd\u00a0you’ve\u00a0g' + 'ot\u00a0the\u00a0coi' + 'n\u00a0reward!')) : _0x3cd89c['skin'] = 'game/r_bg4' + '.png') : _0x4b639d['visible'] = !0x1;
                }
        }
        ['closeClick' + 'Handle']() {
            this['_control']['NextGame'](), this['close']();
        }
        ['close']() {
            _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Rand']);
        }
    }
    class _0x2e6704 {
        constructor(_0x401daf) {
            this['httpCallba' + 'ck'] = null, this['url'] = '', this['httpCallba' + 'ck'] = _0x401daf, this['url'] = '', this['http'] = new Laya['HttpReques' + 't'](), this['http']['once'](Laya['Event']['PROGRESS'], this, this['onHttpRequ' + 'estProgres' + 's']), this['http']['once'](Laya['Event']['COMPLETE'], this, this['onHttpRequ' + 'estComplet' + 'e']), this['http']['once'](Laya['Event']['ERROR'], this, this['onHttpRequ' + 'estError']);
        }
        ['sendPost'](_0x7c97b4, _0x2bcf8e, _0x28c1ed) {
            var _0x1cead1 = this['parsToStr'](_0x2bcf8e);
            this['url'] = _0x7c97b4 + '/' + _0x28c1ed, this['http']['send'](this['url'], _0x1cead1, 'post', 'json');
        }
        ['sendGet'](_0xcea055, _0x505fd4, _0x315a84 = 'json', _0x394381 = null) {
            var _0x51f670 = this['parsToStr'](_0x505fd4);
            this['url'] = _0xcea055 + '?' + _0x51f670, this['http']['send'](this['url'], null, 'GET', _0x315a84, _0x394381);
        }
        ['sendGetWit' + 'hUrl'](_0x494f5c, _0x3bd7ab = 'json', _0x528036 = null) {
            this['url'] = _0x494f5c, this['http']['send'](_0x494f5c, null, 'get', _0x3bd7ab || 'json', _0x528036);
        }
        ['sendPostWi' + 'thUrl'](_0x24c00f, _0x24364b, _0x5a0e42 = 'json', _0x456652 = null) {
            this['url'] = _0x24c00f, this['http']['send'](_0x24c00f, _0x24364b, 'post', _0x5a0e42 || 'json', _0x456652);
        }
        ['parsToStr'](_0x640a55) {
            if (Array['isArray'](_0x99cde6)) {
                for (var _0x99cde6 = '', _0x267dce = 0x0; _0x267dce < _0x640a55['length']; _0x267dce++)
                    _0x99cde6 += _0x640a55[_0x267dce][0x0] + '=' + _0x640a55[_0x267dce][0x1], _0x267dce < _0x640a55['length'] - 0x1 && (_0x99cde6 += '&');
                return _0x99cde6;
            }
            return this['parseParam' + 's'](_0x640a55);
        }
        ['onHttpRequ' + 'estProgres' + 's'](_0x194e37) {
        }
        ['onHttpRequ' + 'estComplet' + 'e'](_0x13aaf9) {
            if (this['httpCallba' + 'ck']) {
                {
                    let _0x3ef083 = this['http'];
                    if (_0x3ef083['_http'] && _0x3ef083['_http']['getRespons' + 'eHeader']) {
                        let _0x159d26 = new Date();
                        if (!_0x26ee17['IsQutoutia' + 'o']()) {
                            let _0x2977ce = _0x3ef083['_http']['getRespons' + 'eHeader']('Date');
                            _0x159d26 = new Date(_0x2977ce);
                        }
                        let _0x1c902e = _0x159d26['getTime']();
                        _0x1c902e > 0x0 && (_0x4ace69['severTime'] = _0x1c902e);
                    }
                }
                this['httpCallba' + 'ck'](null, this['http']['data']);
            }
        }
        ['onHttpRequ' + 'estError'](_0xb29695) {
            this['httpCallba' + 'ck'] && this['httpCallba' + 'ck'](_0xb29695, null);
        }
        ['parseParam' + 's'](_0x241b73) {
            var _0x2ff30b = '';
            if (null != _0x241b73) {
                for (var _0x542f30 in _0x241b73)
                    _0x2ff30b += _0x542f30 + '=' + _0x241b73[_0x542f30] + '&';
                _0x2ff30b = _0x2ff30b['substring'](0x0, _0x2ff30b['length'] - 0x1);
            }
            return _0x2ff30b;
        }
    }
    !function (_0x379477) {
        _0x379477[_0x379477['OK'] = 0x2710] = 'OK', _0x379477[_0x379477['FAIL'] = 0x2712] = 'FAIL', _0x379477[_0x379477['LOGIN_PAR_' + 'ERROR'] = 0x3e9] = 'LOGIN_PAR_' + 'ERROR', _0x379477[_0x379477['ENTRY_TOKE' + 'N_EXPIRE'] = 0x2715] = 'ENTRY_TOKE' + 'N_EXPIRE', _0x379477[_0x379477['ENTRY_USER' + '_NOT_EXIST'] = 0x271b] = 'ENTRY_USER' + '_NOT_EXIST';
    }(_0x48e450 || (_0x48e450 = {}));
    class _0x4a3b70 {
        constructor() {
            this['packageNam' + 'e'] = _0x2276ef['packageNam' + 'e'], this['mt'] = _0x2276ef['Platform'], this['apiversion'] = _0x2276ef['Apiversion'], this['version'] = _0x2276ef['ClientVer'], this['sessionID'] = '';
        }
        static get ['Instance']() {
            return null === _0x4a3b70['_instance'] && (_0x4a3b70['_instance'] = new _0x4a3b70()), _0x4a3b70['_instance'];
        }
        ['addTsParas'](_0x5f4f70, _0x5003ef) {
            return _0x5f4f70;
        }
        ['qgPostUrl'](_0x18da1b) {
            return _0x26ee17['isQG'] || _0x26ee17['IsQutoutia' + 'o']() ? '/data' + _0x18da1b : _0x18da1b;
        }
        ['qgPostData'](_0x41014c) {
            return (_0x26ee17['isQG'] || _0x26ee17['IsQutoutia' + 'o']()) && (_0x41014c = 'data=' + JSON['stringify'](_0x41014c)), _0x41014c;
        }
        ['loginUser'](_0x2bb7c8) {
            let _0x58582d = Object['assign'](_0x2bb7c8, {
                'packageName': this['packageNam' + 'e'],
                'inviteCode': _0x1ae356['Instance']['inviteCode'] || ''
            });
            return this['post'](this['qgPostUrl']('/login'), _0x58582d);
        }
        ['login2User'](_0x86a4e8) {
            let _0x54b7ce = Object['assign'](_0x86a4e8, {
                'packageName': this['packageNam' + 'e'],
                'inviteCode': _0x1ae356['Instance']['inviteCode'] || ''
            });
            return this['post'](this['qgPostUrl']('/2/login'), _0x54b7ce);
        }
        ['getUserInf' + 'o'](_0x2096c8 = '', _0x9eca5e = 0x0, _0x5c3ea5 = '') {
            return this['get']('/hd/userIn' + 'fo', {
                'packageName': this['packageNam' + 'e'],
                'kid': _0x2096c8 || '',
                'isClick': _0x9eca5e,
                'isvs': _0x5c3ea5
            });
        }
        ['getAppConf' + 'ig']() {
        }
        ['updateInfo'](_0x22ffd5) {
            let _0x2f7e00 = Object['assign']({
                'packageName': this['packageNam' + 'e'],
                'gender': -0x1,
                'sessionID': this['sessionID']
            }, _0x22ffd5);
            return this['post'](this['qgPostUrl']('/hd/update' + '/info'), _0x2f7e00);
        }
        ['updataGame' + 'Data'](_0x58929d) {
            let _0x1dd6ff = {
                    'b': _0x1ae356['Instance']['gold']['base'],
                    'c': _0x1ae356['Instance']['gold']['power']
                }, _0x55ea21 = {
                    'b': _0x1ae356['Instance']['gold'],
                    'c': 0x1
                };
            return this['updateInfo']({
                'gamedata': _0x58929d,
                'gold': _0x1dd6ff,
                'diamond': 0x0,
                'cgold': _0x55ea21,
                'cpower': {
                    'b': 0x0,
                    'c': 0x1
                },
                'militaryId': 0x0,
                'plunderNum': 0x0,
                'stage': 0x0
            });
        }
        ['buildUrl'](_0x3b591a) {
            return _0x2276ef['host'] + _0x3b591a;
        }
        ['buildParas'](_0x30c2d4, _0x5ac161) {
            let _0x5eef09 = _0x30c2d4;
            return _0x5ac161 && (_0x5eef09 = Object['assign'](_0x30c2d4, {
                'sessionID': this['sessionID'],
                'apiversion': this['apiversion'],
                'version': this['version'],
                'mt': this['mt'],
                'a': Date['now']()
            })), _0x5eef09;
        }
        ['get'](_0x2fb7fb, _0x3ef68f = {}, _0x4cf7e4 = !0x0) {
            let _0x1683b5 = this['buildUrl'](_0x2fb7fb), _0x2658fa = this['buildParas'](_0x3ef68f, _0x4cf7e4);
            return new Promise((_0x4a3a1d, _0x50498d) => {
                new _0x2e6704((_0x13afd3, _0x522001) => {
                    this['handleResu' + 'lt'](_0x13afd3, _0x522001, _0x4a3a1d, _0x50498d);
                })['sendGet'](_0x1683b5, _0x2658fa);
            });
        }
        ['post'](_0x4efdf7, _0x475e7d = {}, _0x3819b8 = !0x0) {
            let _0x250e05 = this['buildUrl'](_0x4efdf7), _0x1b9e28 = this['buildParas'](_0x475e7d, _0x3819b8);
            return new Promise((_0x4f6293, _0x475afc) => {
                new _0x2e6704((_0xff4b15, _0x2f6513) => {
                    this['handleResu' + 'lt'](_0xff4b15, _0x2f6513, _0x4f6293, _0x475afc);
                })['sendPostWi' + 'thUrl'](_0x250e05, this['qgPostData'](_0x1b9e28));
            });
        }
        ['handleResu' + 'lt'](_0x185a77, _0x4e2122, _0x73ce1c, _0x1dd201) {
            if (_0x185a77)
                return _0x26ee17['Instance']['report']('NetworkErr' + 'or', { 'error': _0x185a77 }), void _0x1dd201(_0x185a77);
            _0x4e2122['code'] === _0x48e450['OK'] ? _0x73ce1c(_0x4e2122['result']) : (_0x26ee17['Instance']['report']('NetworkErr' + 'or', { 'code': _0x4e2122['code'] }), _0x1dd201(_0x4e2122));
        }
    }
    _0x4a3b70['_instance'] = null;
    class _0x5dfa1d {
        constructor() {
            this['sdkParams'] = null;
        }
        static get ['Instance']() {
            return null === _0x5dfa1d['_instance'] && (_0x5dfa1d['_instance'] = new _0x5dfa1d()), _0x5dfa1d['_instance'];
        }
        ['clear']() {
        }
        ['sdkLogin'](_0xa5bee4, _0x5004c) {
            _0x2276ef['hasLogin'] ? this['sdkLogin1'](_0xa5bee4, _0x5004c) : this['sdkLogin2'](_0xa5bee4, _0x5004c);
        }
        ['sdkLogin1'](_0x506e35, _0x20eb5c) {
            _0x4a3b70['Instance']['loginUser'](_0x506e35)['then'](_0x56d97f => {
                let _0x35d4ed = _0x56d97f['sessionID'];
                if (_0x35d4ed)
                    return _0x1ae356['Instance']['user']['session_ke' + 'y'] = _0x35d4ed, _0x4a3b70['Instance']['sessionID'] = _0x35d4ed, _0x2276ef['isLimitCit' + 'y'] = _0x56d97f['isL'] || !0x1, _0x2276ef['isLimitCit' + 'yB'] = _0x56d97f['isLB'] || !0x1, _0x2276ef['closeLD'] = _0x56d97f['closeLD'] || !0x1, _0x2276ef['isF'] = _0x56d97f['isF'] || !0x1, _0x26ee17['IsTouTiao']() && (_0x2276ef['closeLD'] = !0x0), _0x26ee17['Instance']['report'](_0x1f524e['Login'], { 'register': _0x4ace69['registerDa' + 'yString'] }), this['updateUser' + 'Info'](_0x20eb5c);
            })['then'](_0x1af370 => {
                _0x1ae356['Instance']['logined'] = !0x0, _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], {
                    'logined': !0x0,
                    'caller': _0x20eb5c
                });
            })['catch'](_0x8ef7bc => {
                _0x1ae356['Instance']['logined'] || (_0x1ae356['Instance']['loginError'] = !0x0, _0x26ee17['Instance']['report'](_0x1f524e['LoginFail'], {}), _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], {
                    'logined': !0x1,
                    'caller': _0x20eb5c
                }));
            });
        }
        ['sdkLogin2'](_0x40e87c, _0x47307b) {
            _0x40e87c['iscommit'] = 0x1, _0x26ee17['Instance']['report'](_0x1f524e['newLogin'], { 'register': _0x4ace69['registerDa' + 'yString'] }), this['doDefaultL' + 'oginAction'](_0x47307b);
        }
        ['updateUser' + 'Info'](_0x46dc3b = null) {
            return _0x4a3b70['Instance']['getUserInf' + 'o']()['then'](_0x1b512c => {
                let _0xae2adf = _0x1b512c['uid'];
                if (_0xae2adf) {
                    let _0x5596c7 = _0x1ae356['Instance']['user'];
                    if (_0x5596c7['resumePlay' + 'erInfoDefa' + 'ult'](), _0x5596c7['setUid'](_0xae2adf), _0x5596c7['loadCacheD' + 'ata'](), _0x5596c7['openid'] = _0x1b512c['openid'], _0x5596c7['city'] = _0x1b512c['city'], _0x5596c7['avatar'] = _0x1b512c['avatar'], _0x5596c7['nickName'] = _0x1b512c['nickName'], _0x5596c7['gender'] = _0x1b512c['gender'], _0x5596c7['setUid'](_0xae2adf), _0x26ee17['IsTouTiao']() && _0x2276ef['isAnonymou' + 's'] && (_0x5596c7['avatar'] = '', _0x5596c7['nickName'] = '玩家'), _0x5596c7['authorized'] = _0x1b512c['authorized'], _0x5596c7['authorized'] && _0x4441f7['Instance']['event'](_0x1c0419['DestoryUse' + 'rInfoButto' + 'n']), _0x1b512c['openid'] && 'undefined' != typeof wx && _0x26ee17['IsWeChat'](), !_0x1ae356['Instance']['isReadData']) {
                        if (_0x5596c7['isDefaultD' + 'ata']) {
                            let _0x360ac6 = null;
                            _0x1b512c['gamedata'] && (_0x360ac6 = JSON['parse'](_0x1b512c['gamedata'])), _0x1ae356['Instance']['readDataIn' + 'fo'](_0x360ac6);
                        } else
                            _0x1ae356['Instance']['readDataIn' + 'fo'](null);
                    }
                    _0x4441f7['Instance']['event'](_0x1c0419['UserInfoCh' + 'ange']);
                }
            });
        }
        ['doFailLogi' + 'n']() {
            this['doDefaultL' + 'oginAction']();
        }
        ['doDefaultL' + 'oginAction'](_0x2c7e1a = null) {
            _0x26ee17['IsTouTiao']() && (_0x2276ef['closeLD'] = !0x0);
            let _0x54c84e = _0x1ae356['Instance']['user'];
            _0x4a3b70['Instance']['sessionID'] = _0x54c84e['session_ke' + 'y'], _0x1ae356['Instance']['readDataIn' + 'fo'](null), _0x4441f7['Instance']['event'](_0x1c0419['UserInfoCh' + 'ange']), _0x1ae356['Instance']['logined'] = !0x0, _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], {
                'logined': !0x0,
                'caller': _0x2c7e1a
            });
        }
    }
    _0x5dfa1d['_instance'] = null, function (_0x4caa07) {
        _0x4caa07['JumpSucces' + 's'] = 'JumpSucces' + 's', _0x4caa07['JumpFail'] = 'JumpFail', _0x4caa07['JumpCancel'] = 'JumpCancel', _0x4caa07['UpdateData'] = 'UpdateData';
    }(_0x259e15 || (_0x259e15 = {})), function (_0x3a1b85) {
        _0x3a1b85['JumpSucces' + 's'] = '跳转成功', _0x3a1b85['JumpFail'] = '跳转失败', _0x3a1b85['Vedio'] = '拉取视频';
    }(_0x1fa1ce || (_0x1fa1ce = {})), function (_0x4b8f51) {
        _0x4b8f51['unkonw'] = '未知', _0x4b8f51['gameIcon'] = '游戏界面抖动Icon', _0x4b8f51['settlement' + 'Close'] = '结算界面关闭', _0x4b8f51['gradeupClo' + 'se'] = '段位升级界面关闭', _0x4b8f51['jumpFail'] = 'icon跳转失败后界' + '面', _0x4b8f51['homeGift'] = '首页礼包', _0x4b8f51['homeIcon'] = '首页抖动Icon', _0x4b8f51['homeList'] = '首页底部滚动横幅', _0x4b8f51['homeLeft'] = '首页侧拉热门按钮', _0x4b8f51['backHome'] = '游戏中小屋按钮', _0x4b8f51['reliveList'] = '复活界面', _0x4b8f51['settlement' + 'Icon'] = '结算界面抖动Icon', _0x4b8f51['settlement' + 'List'] = '结算界面滚动列表', _0x4b8f51['box'] = '宝箱界面', _0x4b8f51['notEnough'] = 'coin\x20is\x20no' + 't\x20enough', _0x4b8f51['offline'] = '', _0x4b8f51['banner'] = '', _0x4b8f51['recent'] = '', _0x4b8f51['noTouch'] = '', _0x4b8f51['homeOut'] = '', _0x4b8f51['gameOut'] = '游戏中退出按钮';
    }(_0x3058a3 || (_0x3058a3 = {}));
    class _0x341321 {
        constructor() {
            this['appTitle'] = '', this['appName'] = '', this['appID'] = '', this['advID'] = '', this['appIcon1'] = '', this['linkPath'] = '', this['appIconArr' + 'ay'] = [], this['fav'] = !0x1, this['isQy'] = !0x1;
        }
        get ['appIcon']() {
            if (this['appIconArr' + 'ay'] && this['appIconArr' + 'ay'] instanceof Array) {
                let _0x2692c9 = _0x235821['getRandom'](0x0, this['appIconArr' + 'ay']['length'] - 0x1);
                return _0x2692c9 > this['appIconArr' + 'ay']['length'] - 0x1 && (_0x2692c9 = 0x0), this['appIconArr' + 'ay'][_0x2692c9];
            }
            return this['appIcon1'];
        }
    }
    class _0x5584f8 {
        constructor() {
            this['qyInfo'] = null, this['tuiData'] = [], this['qyTuiData'] = {};
        }
        static get ['Instance']() {
            return null === _0x5584f8['_instance'] && (_0x5584f8['_instance'] = new _0x5584f8()), _0x5584f8['_instance'];
        }
        static ['qySdk']() {
            return window['G_AdvMgr'];
        }
        ['getQySdk'](_0xe614dc) {
            let _0x4679b7 = [
                    { 'index': '8f0a566d37' + '4213a260cd' + '13c9e4cf05' + '24' },
                    { 'lunbo': '71c46d1b32' + '5d8b30d02e' + 'db03601357' + '1b' },
                    { 'fail': '06d93ca88e' + '1318cf816c' + 'df19eb4bdf' + '4a' },
                    { 'settle': 'd696858336' + '4b8e0f86e6' + '45b0c6b482' + '69' },
                    { 'out': '1144bcdebf' + 'd4cb65a504' + '6e0998e046' + '48' },
                    { 'friend': '5896970d8c' + 'cd729c4e6f' + '5f2758014a' + '6b' },
                    { 'fubiao': 'b102cc9de9' + 'd4df5e35d3' + '9f3b0a0813' + '0f' }
                ], _0x3499c7 = _0x5584f8['qySdk']() || null;
            _0x3499c7 ? _0x3499c7['getIconBut' + 'tons'](_0x4679b7, _0x101ee2 => {
                this['qyInfo'] = Object['assign']({}, _0x101ee2), this['referashQy' + 'Data'](), _0xe614dc && _0xe614dc();
            }) : _0xe614dc && _0xe614dc();
        }
        ['referashQy' + 'Data']() {
            this['qyInfo'] && (this['qyTuiData'] = {}, this['setQyItems']('index'), this['setQyItems']('lunbo'), this['setQyItems']('fail'), this['setQyItems']('settle'), this['setQyItems']('out'), this['setQyItems']('friend'), this['setQyItems']('fubiao'));
        }
        ['setQyItems'](_0x2a342d) {
            if (this['qyInfo']) {
                let _0x4249ef = this['qyInfo'][_0x2a342d];
                if (_0x4249ef) {
                    let _0x714bb9 = _0x4249ef['map'](_0x1049ca => {
                        let _0x4e85d2 = new _0x341321();
                        return _0x4e85d2['appTitle'] = _0x1049ca['title'] || '', _0x4e85d2['appName'] = _0x1049ca['title'] || '', _0x4e85d2['appID'] = _0x1049ca['appid'] || '', _0x4e85d2['appIcon1'] = _0x1049ca['logo_url'] || '', _0x4e85d2['linkPath'] = _0x1049ca['path'] || '', _0x4e85d2['appIconArr' + 'ay'] = _0x1049ca['logo_url'] || [], _0x4e85d2['fav'] = !0x1, _0x4e85d2['advID'] = _0x1049ca['adv_id'], _0x4e85d2['isQy'] = !0x0, _0x4e85d2;
                    });
                    this['qyTuiData'][_0x2a342d] = _0x714bb9;
                }
            }
        }
        static ['getQyJudge' + 'Region'](_0x2fbd0a, _0x220cc7, _0x416a5d = null) {
            let _0x1af665 = {
                'appid': _0x2fbd0a,
                'scene': '' + _0x220cc7
            };
            return new Promise((_0x424616, _0x53a71b) => {
                new _0x2e6704((_0xd87958, _0x48b840) => {
                    _0xd87958 ? _0x53a71b(_0xd87958) : 0xc8 === _0x48b840['Status'] ? _0x424616(_0x48b840['Result']) : _0x53a71b(_0x48b840);
                })['sendPostWi' + 'thUrl']('https://ap' + 'i.game.hnq' + 'uyou.com/a' + 'pi/Product' + '/judgeRegi' + 'on.html', _0x1af665, 'json', { 'content-type': 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded' });
            });
        }
        get ['canShowWXR' + 'ecommend']() {
            return _0x26ee17['IsWeChat']() && this['canShowRec' + 'ommend'];
        }
        get ['canShowRec' + 'ommend']() {
            return (!_0x26ee17['IsWeChat']() || !_0x4ace69['chidState']) && (!_0x26ee17['IsQQ']() && (_0x26ee17['IsTouTiao']() ? _0x26ee17['shouldShow' + 'TReommend']() : !_0x353499['Instance']['wxCheck']() && _0x2276ef['vGameInfo']['sRecommend']));
        }
        ['getInfo'](_0x148a03) {
            let _0x593dfb = [];
            return _0x26ee17['IsWeChat']() ? _0x593dfb = this['qyTuiData'][_0x148a03] || [] : (_0x26ee17['IsTouTiao']() || _0x26ee17['IsOppo']()) && (_0x593dfb = this['tuiData']), _0x593dfb;
        }
        ['getShowInf' + 'o'](_0x832f41) {
            return this['qyInfo'] && this['qyInfo'][_0x832f41] ? this['qyInfo'][_0x832f41] : null;
        }
        ['getShowNam' + 'e'](_0x18457e) {
            return _0x18457e['title'];
        }
        ['getShowUrl'](_0x13856a) {
            if (_0x13856a['logo_url']) {
                if (_0x13856a['logo_url'] instanceof Array) {
                    let _0x508d44 = _0x235821['nextNumber'](0x0, _0x13856a['logo_url']['length'] - 0x1);
                    return _0x13856a['logo_url'][_0x508d44];
                }
                return _0x13856a['logo_url'];
            }
            return null;
        }
        static ['getShowUrl' + '2'](_0x580260) {
            if (_0x580260['logo_attr'] && _0x580260['logo_attr'] instanceof Array && _0x580260['logo_attr']['length']) {
                let _0x2ace79 = _0x235821['nextNumber'](0x0, _0x580260['logo_attr']['length'] - 0x1);
                return _0x580260['logo_attr'][_0x2ace79];
            }
            if (_0x580260['logo_url']) {
                if (_0x580260['logo_url'] instanceof Array) {
                    let _0x499ab2 = _0x235821['nextNumber'](0x0, _0x580260['logo_url']['length'] - 0x1);
                    return _0x580260['logo_url'][_0x499ab2];
                }
                return _0x580260['logo_url'];
            }
            return null;
        }
        ['referashDa' + 'ta']() {
            return new Promise((_0x5a059a, _0x556759) => {
                let _0x158345 = [];
                _0x26ee17['IsWeChat']() || (_0x26ee17['IsTouTiao']() ? _0x158345 = _0x2276ef['vGameInfo']['ttTuiInfo'] : _0x26ee17['IsOppo']() && (_0x158345 = _0x2276ef['vGameInfo']['oppoTuiInf' + 'o']));
                let _0x570cd1 = _0x158345['map'](_0x45d5ca => {
                    let _0x1a49e4 = new _0x341321();
                    return _0x1a49e4['appTitle'] = _0x45d5ca['name'] || '', _0x1a49e4['appName'] = _0x45d5ca['name_true'] || '', _0x1a49e4['appID'] = _0x45d5ca['pid'] || '', _0x1a49e4['appIcon1'] = _0x45d5ca['url'] || '', _0x1a49e4['linkPath'] = _0x45d5ca['path'] || '', _0x1a49e4['appIconArr' + 'ay'] = _0x45d5ca['urls'] || [], _0x1a49e4['fav'] = _0x45d5ca['fav'] || !0x1, _0x1a49e4['advID'] = '', _0x1a49e4['isQy'] = !0x1, _0x1a49e4;
                });
                this['tuiData'] = _0x570cd1, _0x4441f7['Instance']['event'](_0x259e15['UpdateData']), _0x5a059a({ 'tuiData': this['tuiData'] });
            });
        }
        static ['getScorllD' + 'ata'](_0x250467, _0x5deefc = 0x3c) {
            if (_0x250467) {
                let _0xc63c00 = []['concat'](_0x250467), _0x44bbd9 = [];
                for (; _0xc63c00['length'] < _0x5deefc;) {
                    0x0 === _0x44bbd9['length'] && (_0x44bbd9 = []['concat'](_0x250467));
                    let _0x55ee5c = _0x235821['nextNumber'](0x0, _0x44bbd9['length'] - 0x1);
                    _0x55ee5c > _0x44bbd9['length'] && (_0x55ee5c = 0x0), _0xc63c00['push'](_0x44bbd9[_0x55ee5c]), _0x44bbd9['splice'](_0x55ee5c, 0x1);
                }
                return _0xc63c00;
            }
            return [];
        }
        static ['checkTuiIt' + 'emRed'](_0x55b134, _0x29ae67 = -0x1) {
            _0x55b134 && (-0x1 == _0x29ae67 && (_0x29ae67 = _0x235821['nextNumber'](0x0, 0x64) < 0x14 ? 0x1 : 0x0), _0x29ae67 && _0x29ae67 > 0x0 ? (_0x55b134['skin'] = 0x1 == _0x29ae67 ? 'tui/icon-h' + 'ot.png' : 'tui/icon-n' + 'ew.png', _0x55b134['visible'] = !0x0) : _0x55b134['visible'] = !0x1);
        }
        ['jumpApp'](_0x203346, _0x29b921) {
            if (_0x203346 && _0x203346['appID'] && _0x203346['isQy']) {
                let _0x3f64aa = {
                        'adv_id': _0x203346['advID'],
                        'appId': _0x203346['appID'],
                        'path': _0x203346['linkPath'],
                        'success': _0xe011f7 => {
                            let _0x155b4c = _0x203346['appName'] && _0x203346['appName']['length'] ? _0x203346['appName'] : _0x203346['appTitle'];
                            _0x26ee17['IsWeChat']() || _0x26ee17['Instance']['report'](_0x1f524e['MyRecommen' + 'dJump'], {
                                'new': _0x4ace69['isNewPlaye' + 'r'] ? 0x1 : 0x0,
                                'userID': _0x1ae356['Instance']['user']['openid'],
                                'fromAPPID': _0x2276ef['appId'],
                                'toAPPID': _0x203346['appID'],
                                'name': _0x155b4c
                            }), _0x4441f7['Instance']['event'](_0x259e15['JumpSucces' + 's']), this['doJumpSucc' + 'ess'](_0x203346, _0x29b921);
                        },
                        'fail': _0x14e3d9 => {
                            _0x14e3d9['errMsg'] && _0x14e3d9['errMsg']['indexOf']('fail\x20cance' + 'l') ? _0x4441f7['Instance']['event'](_0x259e15['JumpCancel']) : _0x4441f7['Instance']['event'](_0x259e15['JumpFail']), this['doJumpFail'](_0x203346, _0x29b921);
                        },
                        'complete': () => {
                        }
                    }, _0x48a128 = wx;
                _0x48a128 && _0x48a128['h_ToMinPro' + 'gram'] && _0x48a128['h_ToMinPro' + 'gram'](_0x3f64aa);
            }
        }
        ['doJumpSucc' + 'ess'](_0x23e821, _0x21c979) {
            let _0x2479a0 = _0x1fa1ce['JumpSucces' + 's'], _0x14de93 = {
                    '游戏': _0x23e821['appTitle'],
                    '跳转来源': _0x21c979
                };
            this['report'](_0x2479a0, _0x14de93);
        }
        ['doJumpFail'](_0x5843c5, _0x45322d) {
            let _0x98e5fc = _0x1fa1ce['JumpFail'], _0x2123a8 = {
                    '游戏': _0x5843c5['appTitle'],
                    '跳转来源': _0x45322d
                };
            this['report'](_0x98e5fc, _0x2123a8), this['canFailOpe' + 'n'](_0x45322d) && _0x5d5e4c['Instance']['openUIUniq' + 'ue'](_0xfa1fac['TuiView'], {
                'cb': null,
                'from': _0x3058a3['jumpFail']
            });
        }
        ['report'](_0x274ba1, _0x612778) {
            _0x26ee17['IsWeChat']() && _0x26ee17['Instance']['report']('qy-' + _0x274ba1, _0x612778);
        }
        ['canFailOpe' + 'n'](_0x6568dd) {
            return _0x6568dd == _0x3058a3['homeGift'] || _0x6568dd == _0x3058a3['homeIcon'] || _0x6568dd == _0x3058a3['homeList'] || _0x6568dd == _0x3058a3['homeLeft'] || _0x6568dd == _0x3058a3['backHome'] || _0x6568dd == _0x3058a3['reliveList'] || _0x6568dd == _0x3058a3['settlement' + 'Icon'] || _0x6568dd == _0x3058a3['settlement' + 'List'] || _0x6568dd == _0x3058a3['box'] || _0x6568dd == _0x3058a3['notEnough'] || _0x6568dd == _0x3058a3['offline'];
        }
    }
    _0x5584f8['useThirdJu' + 'dge'] = !0x1, _0x5584f8['_instance'] = null;
    class _0x2c7186 {
        constructor() {
            this['hasShow'] = !0x1, this['m_offlineT' + 'ime'] = 0x0;
        }
        static get ['Instance']() {
            return null === _0x2c7186['_instance'] && (_0x2c7186['_instance'] = new _0x2c7186()), _0x2c7186['_instance'];
        }
        ['init']() {
            let _0x59a554 = this['getOffline' + 'Time']();
            this['m_offlineT' + 'ime'] = _0x59a554 > 0x0 ? new Date()['getTime']() - this['getOffline' + 'Time']() : 0x0;
        }
        ['getOffline' + 'Time']() {
            return _0x1c84be['getNumberV' + 'alue']('offlineTim' + 'e');
        }
        ['setOffline' + 'Time'](_0x157ee5) {
            _0x1c84be['setNumberV' + 'alue']('offlineTim' + 'e', _0x157ee5);
        }
        ['getOffline' + 'TimeCoin']() {
            let _0x27f707 = 0x0;
            if (!this['hasShow']) {
                let _0x2c9694 = Math['floor'](this['m_offlineT' + 'ime'] / 0xea60), _0x4d7a81 = 0x78;
                _0x2c9694 >= 0x3 && (_0x2c9694 > _0x4d7a81 && (_0x2c9694 = _0x4d7a81), _0x27f707 = 0x5 * _0x2c9694);
            }
            return _0x27f707;
        }
    }
    _0x2c7186['_instance'] = null;
    class _0x2f65d5 {
        constructor() {
            this['curSubPack' + 'etLoadProg' + 'ress'] = 0x0, this['loadProgre' + 'ss'] = 0x0, this['updateMana' + 'ger'] = null, this['subPackage' + 'Name'] = 'res', this['curHideTim' + 'er'] = 0x0;
        }
        static get ['Instance']() {
            return null === _0x2f65d5['_instance'] && (_0x2f65d5['_instance'] = new _0x2f65d5()), _0x2f65d5['_instance'];
        }
        ['onConfigLo' + 'aded']() {
            _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Load'], { 'loadSubpackage': !0x1 }), this['loadSubpac' + 'kageFinish']();
        }
        ['initEnv']() {
            _0xfa1fac['initConfig'](), _0x26ee17['registerQG' + 'AldRequest'](), _0x26ee17['onShow'](_0x4cf7ce => {
                this['onShowWX'](_0x4cf7ce);
            }, _0x3b7aa7 => {
                this['onHideWX'](_0x3b7aa7);
            });
            let _0x3b7aaf = parseInt(Laya['LocalStora' + 'ge']['getItem']('wxRegister' + 'Time') || '0');
            0x0 === _0x3b7aaf && (_0x3b7aaf = Date['now'](), Laya['LocalStora' + 'ge']['setItem']('wxRegister' + 'Time', _0x3b7aaf['toString']()), Laya['LocalStora' + 'ge']['removeItem']('canFetchVi' + 'deo'), Laya['LocalStora' + 'ge']['removeItem']('useVideoMa' + 'xTime'), _0x4ace69['firstTimeP' + 'layer'] = !0x0), _0x4ace69['registerTi' + 'me'] = _0x3b7aaf;
            let _0x31199d = Date['now']();
            _0x4ace69['accountTim' + 'e'] = _0x31199d - _0x3b7aaf;
            {
                let _0xe3fd0a = parseInt(Laya['LocalStora' + 'ge']['getItem']('lastStartL' + 'oadTime') || '0');
                _0x4ace69['lastStartT' + 'ime'] = _0xe3fd0a, Laya['LocalStora' + 'ge']['setItem']('lastStartL' + 'oadTime', _0x31199d['toString']());
            }
            if (_0x4ace69['registerDa' + 'yString'] = _0x4877e4['timestampT' + 'oDay'](_0x4ace69['registerTi' + 'me']), _0x4ace69['isOverDay'] = _0x2b4af8['checkOverD' + 'ay'](), _0x4ace69['isNewPlaye' + 'r'] = _0x4877e4['isSameDay'](_0x31199d, _0x3b7aaf), _0x2276ef['recoverDat' + 'a'] || (_0x4ace69['isNewPlaye' + 'r'] = !0x0), _0x4ace69['isNewPlaye' + 'r']) {
                let _0x366125 = 'curbannerr' + 'eshipin', _0x407352 = parseInt(Laya['LocalStora' + 'ge']['getItem'](_0x366125) || '0');
                _0x407352 += 0x1, Laya['LocalStora' + 'ge']['setItem'](_0x366125, _0x407352['toString']());
            }
            if (_0x26ee17['IsTencentG' + 'ame']() || _0x26ee17['IsTouTiao']()) {
                let _0x52ad11 = null, _0x36a3f0 = _0x26ee17['getPlatfor' + 'm']();
                _0x36a3f0 && _0x36a3f0['getSystemI' + 'nfoSync'] && (_0x52ad11 = _0x36a3f0['getSystemI' + 'nfoSync']()), _0x52ad11 && (_0x4ace69['windowHeig' + 'ht'] = _0x52ad11['windowHeig' + 'ht'], _0x4ace69['windowWidt' + 'h'] = _0x52ad11['windowWidt' + 'h'], _0x4ace69['screenHeig' + 'ht'] = _0x52ad11['screenHeig' + 'ht'], _0x4ace69['screenWidt' + 'h'] = _0x52ad11['screenWidt' + 'h'], _0x52ad11['platform'] && 'android' === _0x52ad11['platform']['toLowerCas' + 'e']() ? _0x26ee17['isAndroid'] = !0x0 : _0x52ad11['platform'] && 'ios' === _0x52ad11['platform']['toLowerCas' + 'e']() && (_0x26ee17['isIos'] = !0x0), _0x52ad11['benchmarkL' + 'evel'] && _0x52ad11['benchmarkL' + 'evel'] >= 0x1 && _0x52ad11['benchmarkL' + 'evel'] < 0x14 && (_0x26ee17['isLowDevic' + 'e'] = !0x0));
            }
            _0x26ee17['Instance']['setLoading' + 'Progress'](0x0), _0x26ee17['nodeReport'](_0x1f524e['gameStart']), _0x26ee17['IsOppo']() && this['onShowWX'](null);
        }
        ['onLoadComp' + 'lete']() {
            this['doLoginAct' + 'ion'](null);
        }
        ['canLoadSub' + 'package']() {
            if (!this['subPackage' + 'Name'] || !this['subPackage' + 'Name']['length'])
                return !0x1;
            if (_0x2276ef['UseRemoteR' + 'es'])
                return !0x1;
            let _0x432e76 = _0x26ee17['getPlatfor' + 'm']();
            return !(!_0x432e76 || !_0x432e76['loadSubpac' + 'kage']);
        }
        ['loadSubpac' + 'kageFinish']() {
            _0x4c1e82['Instance']['loadRes'](null), Laya['loader']['load'](_0x1281fe['getGameCon' + 'fig'](), Laya['Handler']['create'](this, this['onLoadComp' + 'lete']));
        }
        ['loadSubpac' + 'kage']() {
        }
        ['loadMusicS' + 'ubPackage']() {
            if (!this['canLoadSub' + 'package']())
                return;
            let _0x110157 = _0x26ee17['getPlatfor' + 'm']();
            _0x110157 && _0x110157['loadSubpac' + 'kage'] && (_0x2d5683['Instance']['canPlay'] = !0x1, _0x110157['loadSubpac' + 'kage']({
                'name': 'music',
                'success': _0x5e00f9 => {
                    _0x2d5683['Instance']['canPlay'] = !0x0, _0x2d5683['Instance']['playBgm']();
                },
                'fail': _0x30f89d => {
                }
            }));
        }
        ['doLoginAct' + 'ion'](_0x2e525c = null) {
            _0x1ede3d['Instance']['init'](null), this['getAppCfg'](), _0x5584f8['useThirdJu' + 'dge'] && _0x5584f8['getQyJudge' + 'Region'](_0x2276ef['appId'], _0x4ace69['scene'])['then'](_0x37a3fd => {
                _0x37a3fd && (0x1 == _0x37a3fd['Status'] ? _0x2276ef['isLimitCit' + 'yB'] = !0x0 : 0x0 == _0x37a3fd['Status'] && (_0x2276ef['isLimitCit' + 'yB'] = !0x1));
            })['catch'](_0x1cbe89 => {
            });
            let _0x5655fc = () => {
                _0x1ae356['Instance']['loginError'] = !0x1, _0x26ee17['Instance']['sdkLogin'](Laya['Handler']['create'](this, _0x279fec => {
                    _0x26ee17['Instance']['loginParam' + 's'] = _0x279fec, this['connectSdk' + 'LoginSrv'](_0x26ee17['Instance']['loginParam' + 's'], _0x2e525c);
                }), null);
            };
            _0x5655fc && _0x5655fc();
        }
        ['connectSdk' + 'LoginSrv'](_0x1c132f, _0x3f1841) {
            null !== _0x1c132f && _0x5dfa1d['Instance']['sdkLogin'](_0x1c132f, _0x3f1841);
        }
        ['onShowWX'](_0x39c626) {
            if (_0x1ae356['Instance']['onlineStar' + 'tTime'] = new Date()['getTime'](), _0x39c626) {
                _0x39c626['path'], _0x39c626 && _0x39c626['referrerIn' + 'fo'] && _0x39c626['referrerIn' + 'fo']['appId'];
                let _0x232147 = _0x39c626['query'];
                if (_0x232147 && this['updateLoad' + 'InfoFromWX'](_0x232147), _0x39c626['scene']) {
                    _0x4ace69['scene'] = _0x39c626['scene'], _0x26ee17['Instance']['report']('GameScene', { 'scene': _0x39c626['scene'] });
                    let _0x527095 = _0x39c626['scene'];
                    _0x4ace69['canE'] = !0x0, '1005' != _0x527095 && '1006' != _0x527095 && '1011' != _0x527095 && '1012' != _0x527095 && '1013' != _0x527095 && '1025' != _0x527095 && '1027' != _0x527095 && '1031' != _0x527095 && '1032' != _0x527095 && '1042' != _0x527095 && '1047' != _0x527095 && '1048' != _0x527095 && '1049' != _0x527095 && '1053' != _0x527095 && '1054' != _0x527095 && '1079' != _0x527095 && '1096' != _0x527095 && '1007' != _0x527095 && '1008' != _0x527095 || (_0x4ace69['canE'] = !0x1);
                }
            }
            let _0x41286a = 0x0;
            this['curHideTim' + 'er'] && (_0x41286a = Date['now']() - this['curHideTim' + 'er']) < 0x0 && (_0x41286a = 0x0), this['curHideTim' + 'er'] = null, _0x2c7186['Instance']['init'](), _0x4441f7['Instance']['event'](_0x1c0419['GetFocus'], { 'hideTime': _0x41286a });
        }
        ['onHideWX'](_0x3facd8) {
            let _0x3c2d63 = new Date()['getTime'](), _0x2d6835 = _0x3c2d63 - _0x1ae356['Instance']['onlineStar' + 'tTime'];
            _0x1ae356['Instance']['onlineTime'] += _0x2d6835, _0x2c7186['Instance']['hasShow'] = !0x1, _0x2c7186['Instance']['setOffline' + 'Time'](_0x3c2d63), _0x1ae356['saveGameDa' + 'ta'](!0x0, !0x0), this['curHideTim' + 'er'] = Date['now'](), _0x4441f7['Instance']['event'](_0x1c0419['LostFocus']), this['bannerClic' + 'kCheck'](_0x3facd8);
        }
        ['bannerClic' + 'kCheck'](_0x4f6f81) {
            null != _0x4f6f81 && (_0x26ee17['Instance']['report'](_0x1f524e['BannerJump'], { 'pos': _0x26ee17['Instance']['showBanner' + 'Pos'] }), _0x26ee17['shouldReBu' + 'ild'] = !0x0);
        }
        ['updateLoad' + 'InfoFromWX'](_0x16ed90) {
            if (null !== _0x16ed90 && (null !== _0x16ed90['inviteName'] || null !== _0x16ed90['openid'] || null !== _0x16ed90['inviteCode'])) {
                _0x16ed90['inviteName'], _0x16ed90['openid'], _0x16ed90['pos'], _0x16ed90['shareTime'];
                let _0x530c73 = _0x16ed90['inviteCode'];
                _0x530c73 && (_0x1ae356['Instance']['inviteCode'] = _0x530c73);
            }
            null !== _0x16ed90 && null !== _0x16ed90['chid'] && (_0x4ace69['chid'] = _0x16ed90['chid']);
        }
        ['getAppCfg']() {
        }
        ['updateLoad']() {
            this['loadProgre' + 'ss'] += 0.05, this['loadProgre' + 'ss'] >= 0x1 ? (Laya['timer']['clear'](this, this['updateLoad']), this['loadProgre' + 'ss'] = 0x1) : Laya['timer']['once'](0x1f4, this, this['updateLoad']), this['updateSubP' + 'acketLoad']();
        }
        ['updateSubP' + 'acketLoad']() {
            let _0x337f30 = this['curSubPack' + 'etLoadProg' + 'ress'];
            _0x337f30 < 0.9 || Laya['timer']['clear'](this, this['updateLoad']), _0x337f30 = 0.1 * this['curSubPack' + 'etLoadProg' + 'ress'] + 0.9 * this['loadProgre' + 'ss'], _0x4441f7['Instance']['event'](_0x1c0419['Subpackage' + 'LoadProgre' + 'ss'], _0x337f30);
        }
        ['checkForUp' + 'date']() {
        }
    }
    _0x2f65d5['_instance'] = null, function (_0x5894b1) {
    }(_0x5aa295 || (_0x5aa295 = {}));
    class _0x5684e2 {
        static get ['Instance']() {
            return null === _0x5684e2['_instance'] && (_0x5684e2['_instance'] = new _0x5684e2()), _0x5684e2['_instance'];
        }
        ['onBack'](_0x12d1f3) {
        }
        ['onReceive'](_0xc615cd) {
        }
        ['onSign'](_0x5c2920) {
        }
        ['onCark']() {
        }
        ['onTrain'](_0x420c95) {
        }
        ['onBtn'](_0x1676d8) {
        }
        ['onVideo'](_0x145bbe) {
        }
        ['onNewPlaye' + 'r'](_0x2e1e8e) {
        }
        ['report'](_0x5047a2, _0x1aaeb6) {
        }
    }
    _0x5684e2['_instance'] = null;
    class _0x18fdaf extends _0x3a0bc3['LoadingVie' + 'wUI'] {
        constructor() {
            super(...arguments), this['loadSubpac' + 'kage'] = !0x1, this['loadComple' + 'ted'] = !0x1, this['retryCount'] = 0x0;
        }
        ['init'](_0x4610d7) {
            this['loadSubpac' + 'kage'] = _0x4610d7['loadSubpac' + 'kage'] || !0x1, this['registerEv' + 'ent']();
        }
        ['uninit']() {
            Laya['timer']['clearAll'](this), this['unregister' + 'Event']();
        }
        ['registerEv' + 'ent']() {
            _0x4441f7['Instance']['on'](_0x1c0419['ResLoadPro' + 'gress'], this, this['onRefreshP' + 'rogress']), _0x4441f7['Instance']['on'](_0x1c0419['StartLoadF' + 'inish'], this, this['onLoadComp' + 'leted']), _0x4441f7['Instance']['on'](_0x1c0419['userLoginF' + 'inish'], this, this['userLoginF' + 'inish']), _0x4441f7['Instance']['on'](_0x1c0419['Subpackage' + 'LoadProgre' + 'ss'], this, this['onSubpacka' + 'geLoadProg' + 'ress']);
        }
        ['unregister' + 'Event']() {
            _0x4441f7['Instance']['off'](_0x1c0419['ResLoadPro' + 'gress'], this, this['onRefreshP' + 'rogress']), _0x4441f7['Instance']['off'](_0x1c0419['StartLoadF' + 'inish'], this, this['onLoadComp' + 'leted']), _0x4441f7['Instance']['off'](_0x1c0419['userLoginF' + 'inish'], this, this['userLoginF' + 'inish']), _0x4441f7['Instance']['off'](_0x1c0419['Subpackage' + 'LoadProgre' + 'ss'], this, this['onSubpacka' + 'geLoadProg' + 'ress']);
        }
        ['onRefreshP' + 'rogress'](_0x255986) {
            _0x255986 < 0x0 && (_0x255986 = 0x0), _0x255986 > 0x1 && (_0x255986 = 0x1), this['loadSubpac' + 'kage'] ? this['updateProg' + 'ress'](0.5 + _0x255986 / 0x2) : this['updateProg' + 'ress'](_0x255986);
        }
        ['onSubpacka' + 'geLoadProg' + 'ress'](_0x478362) {
            _0x478362 < 0x0 && (_0x478362 = 0x0), _0x478362 > 0x1 && (_0x478362 = 0x1), this['updateProg' + 'ress'](_0x478362 / 0x2);
        }
        ['updateProg' + 'ress'](_0x4aaad2) {
            _0x4aaad2 < 0x0 && (_0x4aaad2 = 0x0), _0x4aaad2 > 0x1 && (_0x4aaad2 = 0x1);
            let _0x51badb = (0x64 * _0x4aaad2)['toFixed'](0x0) + '%';
            this['loadingLab' + 'el']['changeText'](_0x51badb || '');
            let _0x1fb11a = Math['floor'](0x171 * _0x4aaad2);
            this['progressIm' + 'ageMask']['graphics']['clear'](), this['progressIm' + 'ageMask']['graphics']['drawRect'](0x0, 0x0, _0x1fb11a, 0x28, '#FF0000'), _0x26ee17['Instance']['setLoading' + 'Progress']((0x64 * _0x4aaad2)['toFixed'](0x0));
        }
        ['closeLoadi' + 'ngView']() {
            _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Load']);
        }
        ['showMainVi' + 'ew']() {
            FKGames['init']({
                'debug': !![],
                'appName': '',
                'gamemonetizeId': '8w7r1zgqznxfvcp3jdw1p3h2xuh8w8s0',
                'gamedistributionId': '',
                'complete': () => {
                    this['closeLoadi' + 'ngView'](), (_0x2f65d5['Instance']['loadMusicS' + 'ubPackage'](), _0x2d5683['Instance']['playBgm'](), _0x523ef5['Instance']['loadingFin' + 'ished'](), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Game']), _0x5684e2['Instance']['onNewPlaye' + 'r'](_0x5aa295['loaded'])), console['log']('----------' + '初始化成功!!!--' + '--------');
                }
            });
        }
        ['onLoadComp' + 'leted']() {
            this['loadComple' + 'ted'] = !0x0;
            let _0x526544 = _0x1ae356['Instance']['logined'];
            _0x26ee17['Instance']['setLoading' + 'Progress'](0x64), _0x526544 ? this['showMainVi' + 'ew']() : _0x1ae356['Instance']['loginError'] && this['showtReTry' + 'Btn']();
        }
        ['userLoginF' + 'inish'](_0x2ea358) {
            _0x2ea358['logined'] ? this['onStart']() : this['loadComple' + 'ted'] && this['showtReTry' + 'Btn']();
        }
        ['onStart']() {
            this['loadComple' + 'ted'] && this['showMainVi' + 'ew']();
        }
        ['showtReTry' + 'Btn']() {
            _0x5dfa1d['Instance']['doFailLogi' + 'n']();
        }
        ['reLogin']() {
            _0x2f65d5['Instance']['doLoginAct' + 'ion'](null);
        }
    }
    class _0x128589 {
        constructor() {
            this['showEggVie' + 'wCountDown'] = 0x0, this['showedEggV' + 'iewCount'] = 0x0, this['nextInterv' + 'al'] = 0x0;
        }
        static get ['Instance']() {
            return null === _0x128589['_instance'] && (_0x128589['_instance'] = new _0x128589()), _0x128589['_instance'];
        }
        ['checkShowE' + 'ggView']() {
            return !!(_0x26ee17['IsWeChat']() || _0x26ee17['IsOppo']() || _0x26ee17['IsQQ']()) && (!_0x353499['Instance']['aCheck']() && (!_0x353499['Instance']['wxCheck']() && !_0x2276ef['isLimitCit' + 'yB'] && (!!_0x1ede3d['Instance']['checkPianD' + 'ianE']() && (_0x1ae356['saveGameDa' + 'ta'](), _0x26ee17['Instance']['report'](_0x1f524e['showBig']), !0x0))));
        }
    }
    _0x128589['_instance'] = null;
    class _0x17f23d extends Laya['Script'] {
        constructor() {
            super(), this['level'] = 0x1, this['restitutio' + 'nCnt'] = 0x2, this['addscore'] = 0x0, this['IsAdd'] = !0x1, this['IsRemove'] = !0x1, this['_rig'] = null, this['_cir'] = null, this['data'] = null, this['_control'] = null;
        }
        ['onEnable']() {
            this['_rig'] = this['owner']['getCompone' + 'nt'](Laya['RigidBody']), this['_cir'] = this['owner']['getCompone' + 'nt'](Laya['CircleColl' + 'ider']);
        }
        ['initDate'](_0x57300d, _0x41f75f) {
            let _0x109dda = this['owner']['getChildBy' + 'Name']('img');
            switch (this['_control'] = _0x41f75f, _0x57300d) {
            case 0x1:
                _0x109dda['skin'] = 'game/m_dro' + 'pwriteZZ.p' + 'ng';
                break;
            case 0x2:
                _0x109dda['skin'] = 'game/m_dro' + 'pblackZZ.p' + 'ng';
                break;
            case 0x3:
                _0x109dda['skin'] = 'game/m_dro' + 'pyellowZZ.' + 'png';
                break;
            case 0x4:
                _0x109dda['skin'] = 'game/m_dro' + 'predZZ.png';
                break;
            case 0x5:
                _0x109dda['skin'] = 'game/m_dro' + 'pgreedZZ.p' + 'ng';
            }
            this['data'] = {
                'type': 0x2,
                'chilidtype': _0x57300d
            };
        }
        ['onUpdate']() {
        }
        ['onTriggerE' + 'nter'](_0x464da8, _0xef147c, _0x4797f3) {
            let _0x26f9f3 = this['owner'];
            'cupground' != _0x464da8['label'] && 'iceground' != _0x464da8['label'] && 'itembox' != _0x464da8['label'] || 0x0 != this['IsAdd'] ? 'ground' == _0x464da8['label'] && 0x0 == this['IsRemove'] && (_0x26ee17['vibrateSho' + 'rt'](), this['IsRemove'] = !0x0, _0x26f9f3['removeSelf']()) : (_0x26ee17['vibrateSho' + 'rt'](), this['IsAdd'] = !0x0, this['_control']['GameDate']['push'](this['data']), this['_control']['SpDate']['push'](this['owner']));
        }
        ['onDisable']() {
        }
    }
    class _0x23b833 extends Laya['Script'] {
        constructor() {
            super(), this['level'] = 0x1, this['restitutio' + 'nCnt'] = 0x2, this['addscore'] = 0x0, this['IsRemove'] = !0x1, this['IsAdd'] = !0x1, this['_rig'] = null, this['_cir'] = null, this['data'] = null, this['_control'] = null;
        }
        ['onEnable']() {
            this['_rig'] = this['owner']['getCompone' + 'nt'](Laya['RigidBody']), this['_cir'] = this['owner']['getCompone' + 'nt'](Laya['BoxCollide' + 'r']);
        }
        ['initDate'](_0x59220e) {
            this['_control'] = _0x59220e, this['owner']['getChildBy' + 'Name']('img')['skin'] = 'game/m_dro' + 'pIce.png', this['data'] = {
                'type': 0x3,
                'chilidtype': 0x1
            };
        }
        ['onUpdate']() {
        }
        ['onTriggerE' + 'nter'](_0x479aae, _0x5ee7e3, _0x66b050) {
            let _0x350af6 = this['owner'];
            'cupground' != _0x479aae['label'] && 'iceground' != _0x479aae['label'] && 'itembox' != _0x479aae['label'] || 0x0 != this['IsAdd'] ? 'ground' == _0x479aae['label'] && 0x0 == this['IsRemove'] && (_0x26ee17['vibrateSho' + 'rt'](), _0x350af6['removeSelf'](), this['IsRemove'] = !0x0) : (_0x26ee17['vibrateSho' + 'rt'](), this['IsAdd'] = !0x0, this['_control']['GameDate']['push'](this['data']), this['_control']['SpDate']['push'](this['owner']));
        }
        ['onDisable']() {
        }
    }
    class _0x2fe954 extends Laya['Script'] {
        constructor() {
            super(), this['level'] = 0x1, this['restitutio' + 'nCnt'] = 0x2, this['addscore'] = 0x0, this['IsAdd'] = !0x1, this['IsRemove'] = !0x1, this['_rig'] = null, this['_cir'] = null, this['data'] = null, this['_control'] = null;
        }
        ['onEnable']() {
            this['_rig'] = this['owner']['getCompone' + 'nt'](Laya['RigidBody']), this['_cir'] = this['owner']['getCompone' + 'nt'](Laya['BoxCollide' + 'r']);
        }
        ['initDate'](_0x372a93, _0x384b16) {
            this['_control'] = _0x384b16;
            let _0x48b73c = this['owner']['getChildBy' + 'Name']('img');
            0x6 == _0x372a93 && (_0x48b73c['skin'] = 'game/m_dro' + 'pblackSuga' + 'r.png'), 0x7 == _0x372a93 && (_0x48b73c['skin'] = 'game/m_dro' + 'predSugar.' + 'png'), this['data'] = {
                'type': 0x2,
                'chilidtype': _0x372a93
            };
        }
        ['onUpdate']() {
        }
        ['onTriggerE' + 'nter'](_0x34b053, _0x92dcf9, _0x633253) {
            let _0x3dce98 = this['owner'];
            'cupground' != _0x34b053['label'] && 'iceground' != _0x34b053['label'] && 'itembox' != _0x34b053['label'] || 0x0 != this['IsAdd'] ? 'ground' == _0x34b053['label'] && 0x0 == this['IsRemove'] && (_0x26ee17['vibrateSho' + 'rt'](), _0x3dce98['removeSelf'](), this['IsRemove'] = !0x0) : (_0x26ee17['vibrateSho' + 'rt'](), this['IsAdd'] = !0x0, this['_control']['GameDate']['push'](this['data']), this['_control']['SpDate']['push'](this['owner']));
        }
        ['destroyBox']() {
            var _0x435ddc = this['owner'];
            let _0x174b56 = Laya['Pool']['getItemByC' + 'reateFun']('effect', this['createEffe' + 'ct'], this);
            _0x174b56['pos'](_0x435ddc['x'], _0x435ddc['y']), _0x435ddc['parent']['addChild'](_0x174b56), _0x174b56['play'](0x0, !0x0);
            let _0x5a6646 = this['_control']['BoxList']['indexOf'](_0x435ddc);
            this['_control']['BoxList']['splice'](_0x5a6646, 0x1), _0x435ddc['removeSelf'](), _0x2d5683['Instance']['playSound'](_0xc4e5f6['destroy']);
        }
        ['createEffe' + 'ct']() {
            let _0x304d2f = new Laya['Animation']();
            return _0x304d2f['loadAnimat' + 'ion']('test/TestA' + 'ni.ani'), _0x304d2f['on'](Laya['Event']['COMPLETE'], null, function () {
                _0x304d2f['removeSelf'](), Laya['Pool']['recover']('effect', _0x304d2f);
            }), _0x304d2f;
        }
        ['onDisable']() {
        }
    }
    class _0x22929f {
        constructor(_0x5cfbe7) {
            this['gameobject'] = null, this['AniIndex'] = 0x0, this['MaxIndex'] = 0xf, this['addX'] = 0x0, this['addY'] = 0x0, this['posX'] = 0x0, this['posY'] = 0x0, this['IsLeft'] = 0x1, this['_Img'] = null;
            let _0x7f73d5 = Laya['loader']['getRes'](_0x1281fe['RES_WaterF' + 'ullAniItem']);
            this['gameobject'] = _0x7f73d5['create'](), Math['random']() > 0.5 ? (this['IsLeft'] = -0x1, this['MaxIndex'] = -0xa * Math['random']() - 0x64) : this['MaxIndex'] = 0xa * Math['random']() + 0x3c, this['AniIndex'] = 0x64 * Math['random']() + 0x64, this['_Img'] = this['gameobject']['getChildAt'](0x0), this['changeColo' + 'rFilter'](this['_Img'], _0x5cfbe7);
            let _0x1c97e4 = 0.5 * Math['random']() + 0.5;
            this['_Img']['scale'](_0x1c97e4, _0x1c97e4), Laya['timer']['frameLoop'](0x1, this, this['showAni']);
        }
        ['setPos'](_0x3c9521, _0x575964) {
            this['gameobject']['pos'](_0x3c9521 + this['MaxIndex'], _0x575964, !0x0), this['posX'] = _0x3c9521 + this['MaxIndex'], this['posY'] = _0x575964;
        }
        ['changeColo' + 'rFilter'](_0x3c7682, _0x164ed6) {
            let _0x40fabd;
            switch (_0x164ed6) {
            case 0x1:
                _0x40fabd = [
                    0xff,
                    0x0,
                    0x0
                ];
                break;
            case 0x2:
                _0x40fabd = [
                    0xff,
                    0xe5,
                    0x0
                ];
                break;
            case 0x3:
                _0x40fabd = [
                    0x0,
                    0x7a,
                    0xc3
                ];
            }
            this['showColorF' + 'ilter'](_0x3c7682, _0x40fabd);
        }
        ['showColorF' + 'ilter'](_0x7c219, _0x5a2ebe) {
            var _0x1d49d6 = [
                    _0x5a2ebe[0x0] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x5a2ebe[0x1] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x5a2ebe[0x2] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0
                ], _0x523ba2 = new Laya['ColorFilte' + 'r'](_0x1d49d6);
            _0x7c219['filters'] = [_0x523ba2];
        }
        ['showAni']() {
            this['addX'] += 0xf * this['IsLeft'], this['addY'] = this['addX'] * this['addX'] / this['AniIndex'], this['gameobject']['pos'](this['posX'] + this['addX'], this['posY'] + this['addY']), this['addY'] <= 0x0 && (Laya['timer']['clear'](this, this['showAni']), this['destroy']());
        }
        ['destroy']() {
            this['gameobject']['removeSelf'](), this['gameobject']['destroy']();
        }
    }
    class _0x481691 {
        constructor(_0x2f74a4) {
            this['gameobject'] = null, this['AniIndex'] = 0x0;
            let _0x29c203 = Laya['loader']['getRes'](_0x1281fe['RES_DropWa' + 'terAniItem']);
            this['gameobject'] = _0x29c203['create']();
            for (let _0x1c673b = 0x0; _0x1c673b < 0x7; _0x1c673b++) {
                let _0x83120 = this['gameobject']['getChildAt'](_0x1c673b);
                _0x83120['visible'] = !0x1, this['changeColo' + 'rFilter'](_0x83120, _0x2f74a4);
            }
            Laya['timer']['frameLoop'](0x1, this, this['showAni']);
        }
        ['setPos'](_0x188bc6, _0x5cf7d6) {
            this['gameobject']['pos'](_0x188bc6, _0x5cf7d6, !0x0);
        }
        ['changeColo' + 'rFilter'](_0x828a4d, _0xf86781) {
            let _0x265928;
            switch (_0xf86781) {
            case 0x1:
                _0x265928 = [
                    0xff,
                    0x0,
                    0x0
                ];
                break;
            case 0x2:
                _0x265928 = [
                    0xff,
                    0xe5,
                    0x0
                ];
                break;
            case 0x3:
                _0x265928 = [
                    0x0,
                    0x7a,
                    0xc3
                ];
            }
            this['showColorF' + 'ilter'](_0x828a4d, _0x265928);
        }
        ['showColorF' + 'ilter'](_0x21157b, _0x517dc8) {
            var _0x22d5b7 = [
                    _0x517dc8[0x0] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x517dc8[0x1] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x517dc8[0x2] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0
                ], _0x5d25db = new Laya['ColorFilte' + 'r'](_0x22d5b7);
            _0x21157b['filters'] = [_0x5d25db];
        }
        ['showAni']() {
            0x0 != this['AniIndex'] && (this['gameobject']['getChildAt'](this['AniIndex'] - 0x1)['visible'] = !0x1);
            let _0x1d6668 = this['gameobject']['getChildAt'](this['AniIndex']);
            this['AniIndex']++, _0x1d6668['visible'] = !0x0, this['AniIndex'] >= 0x7 && (Laya['timer']['clear'](this, this['showAni']), this['destroy']());
        }
        ['destroy']() {
            this['gameobject']['removeSelf'](), this['gameobject']['destroy']();
        }
    }
    class _0x5a2761 extends Laya['Script'] {
        constructor() {
            super(), this['level'] = 0x1, this['restitutio' + 'nCnt'] = 0x2, this['Color'] = 0x0, this['_rig'] = null, this['_cir'] = null, this['waterImg'] = null, this['data'] = null, this['_scene'] = null, this['_control'] = null;
        }
        ['onEnable']() {
            this['_rig'] = this['owner']['getCompone' + 'nt'](Laya['RigidBody']), this['_cir'] = this['owner']['getCompone' + 'nt'](Laya['CircleColl' + 'ider']);
        }
        ['onUpdate']() {
        }
        ['initDate'](_0x133840, _0x21a6af, _0xc08dad) {
            this['Color'] = _0x133840, this['_control'] = _0xc08dad, this['_scene'] = _0x21a6af, this['waterImg'] = this['owner']['getChildBy' + 'Name']('img'), 0x1 == _0x133840 && (this['waterImg']['skin'] = 'game/m_wat' + 'erred.png'), 0x2 == _0x133840 && (this['waterImg']['skin'] = 'game/m_wat' + 'eryellow.p' + 'ng'), 0x3 == _0x133840 && (this['waterImg']['skin'] = 'game/m_wat' + 'erbule.png'), this['data'] = {
                'type': 0x1,
                'chilidtype': _0x133840
            }, this['_scene']['createDrop' + 'WaterCnt']++;
        }
        ['onTriggerE' + 'nter'](_0x3c292a, _0x4e4e5c, _0x1a45d2) {
            Date['now']() > this['_scene']['PlayWaterS' + 'oundTime'] && (_0x2d5683['Instance']['playSound'](_0xc4e5f6['water']), this['_scene']['PlayWaterS' + 'oundTime'] = Date['now']() + 0x3e8);
            let _0x27657b = this['owner'];
            'cupground' == _0x3c292a['label'] || 'iceground' == _0x3c292a['label'] || 'watergroun' + 'd' == _0x3c292a['label'] ? (_0x26ee17['vibrateSho' + 'rt'](), _0x27657b['removeSelf'](), this['_scene']['_addTea'] += 0x1, 0xa === this['_scene']['_addTea'] && Laya['timer']['frameLoop'](0x1, this['_scene'], this['_scene']['updateAni']), this['_scene']['_addTea'] <= 0x3b ? (this['_control']['GameDate']['push'](this['data']), this['_control']['SpDate']['push'](_0x27657b), this['_scene']['ValCnt'] = 0x3c, this['Color'] != this['_scene']['NowColor'] && this['_scene']['IsFirstCol' + 'or'] ? this['_scene']['addChangeW' + 'ater'](this['Color']) : this['_scene']['ChangeWate' + 'rColor'] = this['Color'], 0x2 == _0x1ae356['Instance']['level'] && this['_scene']['createDrop' + 'WaterCnt'] >= 0x1e && this['_scene']['fingerImg']['visible'] && (this['_scene']['openBtnInB' + 'ottom'](), this['_scene']['BottomBtnA' + 'rr'][0x0]['off'](Laya['Event']['MOUSE_DOWN'], this['_control'], this['_control']['onMouseDow' + 'nBtn']), this['_scene']['BottomBtnA' + 'rr'][0x0]['off'](Laya['Event']['MOUSE_UP'], this['_control'], this['_control']['onMouseUpB' + 'tn']), this['_control']['onMouseUpB' + 'tn'](), this['_scene']['fingerImg']['visible'] = !0x1, this['_scene']['showfinger' + '2']())) : (Date['now']() > this['_scene']['createFull' + 'WaterTime'] && (this['_scene']['ValCnt'] = 0x3c, this['creatFullW' + 'ater']()), 0x1 == _0x1ae356['Instance']['level'] && this['_scene']['fingerImg']['visible'] && (this['_scene']['fingerImg']['visible'] = !0x1, this['_scene']['showfinger' + 'Ready'](), this['_scene']['Ready']['on'](Laya['Event']['CLICK'], this['_scene'], this['_scene']['ReadyGame'])), 0x2 == _0x1ae356['Instance']['level'] && this['_scene']['fingerImg2']['visible'] && (this['_scene']['fingerImg2']['visible'] = !0x1, this['_scene']['showfinger' + 'Ready'](), this['_scene']['Ready']['on'](Laya['Event']['CLICK'], this['_scene'], this['_scene']['ReadyGame']))), this['_scene']['_addTea'] = Math['min'](this['_scene']['_addTea'], 0x3b), this['_scene']['addColorIm' + 'g'](this['Color']), this['_scene']['IsFirstCol' + 'or'] || (this['_scene']['IsFirstCol' + 'or'] = !0x0, this['_scene']['NowColor'] = this['Color'], this['_scene']['changeColo' + 'rFilter'](this['Color'], this['_scene']['TeaImg1'])), Date['now']() > this['_scene']['createDrop' + 'WaterTime'] && this['_scene']['_addTea'] >= 0xa && this['destroyBox']()) : 'ground' == _0x3c292a['label'] && (_0x27657b['removeSelf'](), _0x26ee17['vibrateSho' + 'rt']());
        }
        ['creatFullW' + 'ater']() {
            let _0x1caef5 = this['owner'], _0x3444ce = new _0x22929f(this['Color']);
            _0x3444ce['setPos'](_0x1caef5['x'], _0x1caef5['y']), this['_scene']['gameBox']['addChild'](_0x3444ce['gameobject']);
        }
        ['destroyBox']() {
            this['owner'];
            let _0x34513a = new _0x481691(this['Color']);
            _0x34513a['setPos'](this['_scene']['cup']['x'], this['_scene']['waterChang' + 'eGround']['y'] + Laya['stage']['height'] - 0xe5 - 0x46), this['_scene']['createDrop' + 'WaterTime'] = Date['now']() + 0xc8, this['_scene']['gameBox']['addChild'](_0x34513a['gameobject']);
        }
        ['onDisable']() {
        }
    }
    class _0x3b246f extends Laya['Script'] {
        constructor() {
            super(), this['createBoxI' + 'nterval'] = 0x3e8, this['_time'] = 0x0, this['_started'] = !0x1, this['BoxList'] = [], this['outLineTim' + 'e'] = 0x0, this['ComboCnt'] = 0x0, this['GameDate'] = [], this['SpDate'] = [], this['MouseDownT' + 'ime'] = 0x0, this['CreatBoxTi' + 'me'] = 0x0, this['IsCreatBox'] = !0x1, this['CurBoxType'] = 0x0, this['MoveSpeed'] = 0.5, this['IsMove'] = !0x1, this['MovePos'] = 0x0, this['GameTime'] = 0x0, this['gameKeyBox' + 'Cnt'] = 0x0, this['ShowKeyBox'] = !0x1, this['_gameBox'] = null, this['dropBox'] = null, this['dropBoxIce'] = null, this['dropWater'] = null, this['dropBoxSug' + 'ar'] = null, this['btnMask'] = null, this['longResult'] = null, this['shortResul' + 't'] = null, this['_scene'] = null;
        }
        ['initDate'](_0x3512e8) {
            this['_scene'] = _0x3512e8;
        }
        ['onEnable']() {
            this['_time'] = Date['now'](), this['_gameBox'] = this['owner']['getChildBy' + 'Name']('UI')['getChildBy' + 'Name']('cupBox')['getChildBy' + 'Name']('gameBox'), this['_gameBox']['height'] = Laya['stage']['height'], this['_gameBox']['y'] = this['_gameBox']['y'] - Laya['stage']['height'] + 0x500;
        }
        ['onUpdate']() {
        }
        ['createWate' + 'rBox'](_0x5d67b0) {
            if (this['dropWater']) {
                let _0x18e3e9 = this['dropWater']['create']();
                _0x18e3e9['getCompone' + 'nt'](_0x5a2761)['initDate'](_0x5d67b0, this['_scene'], this);
                let _0x312d8e = this['randomPos']();
                _0x18e3e9['pos'](this['_scene']['TeaImgBtn']['x'] + 0xd6 + _0x312d8e - this['_scene']['RandomSenc' + 'eMovePos'] + this['MovePos'] - 0xe4, this['_scene']['TeaImgBtn']['y'] + 0x81), this['_gameBox']['addChild'](_0x18e3e9);
            }
        }
        ['randomPos']() {
            let _0x262861 = 0x1e * Math['random'](), _0x26a43a = 0x1;
            return Math['random']() > 0.5 && (_0x26a43a = -0x1), _0x262861 *= _0x26a43a;
        }
        ['createBox'](_0x4f0a3a) {
            let _0x184808 = this['dropBox']['create']();
            _0x184808['getCompone' + 'nt'](_0x17f23d)['initDate'](_0x4f0a3a, this);
            let _0x263f73 = this['randomPos']();
            _0x184808['pos'](this['_scene']['TeaImgBtn']['x'] + 0xd6 + _0x263f73 - this['_scene']['RandomSenc' + 'eMovePos'] + this['MovePos'] - 0xe4, this['_scene']['TeaImgBtn']['y'] + 0x81), this['_gameBox']['addChild'](_0x184808);
        }
        ['createIceB' + 'ox']() {
            let _0x246d80 = this['dropBoxIce']['create']();
            _0x246d80['getCompone' + 'nt'](_0x23b833)['initDate'](this);
            let _0x17600e = this['randomPos']();
            _0x246d80['pos'](this['_scene']['TeaImgBtn']['x'] + 0xd6 + _0x17600e - this['_scene']['RandomSenc' + 'eMovePos'] + this['MovePos'] - 0xe4, this['_scene']['TeaImgBtn']['y'] + 0x81), this['_gameBox']['addChild'](_0x246d80);
        }
        ['createSuga' + 'rBox'](_0x267bfd) {
            let _0x283883 = this['dropBoxSug' + 'ar']['create']();
            _0x283883['getCompone' + 'nt'](_0x2fe954)['initDate'](_0x267bfd, this);
            let _0x257aa9 = this['randomPos']();
            _0x283883['pos'](this['_scene']['TeaImgBtn']['x'] + 0xd6 + _0x257aa9 - this['_scene']['RandomSenc' + 'eMovePos'] + this['MovePos'] - 0xe4, this['_scene']['TeaImgBtn']['y'] + 0x81), this['_gameBox']['addChild'](_0x283883);
        }
        ['createRedW' + 'ater']() {
            this['createWate' + 'rBox'](0x1), this['_scene']['Color'] = 0x1;
        }
        ['createYell' + 'owWater']() {
            this['createWate' + 'rBox'](0x2), this['_scene']['Color'] = 0x2;
        }
        ['createBule' + 'Water']() {
            this['createWate' + 'rBox'](0x3), this['_scene']['Color'] = 0x3;
        }
        ['IceBox']() {
            this['createIceB' + 'ox']();
        }
        ['onMouseDow' + 'nBtn'](_0x79fc48) {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['createTea'](_0x79fc48), this['IsCreatBox'] = !0x0, this['CurBoxType'] = _0x79fc48, this['CreatBoxTi' + 'me'] = 0x0;
        }
        ['onMouseUpB' + 'tn']() {
            this['IsCreatBox'] = !0x1;
        }
        ['createTea'](_0x1b3b5f) {
            switch (_0x1b3b5f) {
            case _0x2ad709['black']:
                this['createBox'](_0x1b3b5f);
                break;
            case _0x2ad709['blacksugar']:
                this['createSuga' + 'rBox'](_0x1b3b5f);
                break;
            case _0x2ad709['bluewater']:
                this['createBule' + 'Water']();
                break;
            case _0x2ad709['green']:
                this['createBox'](_0x1b3b5f);
                break;
            case _0x2ad709['ice']:
                this['createIceB' + 'ox']();
                break;
            case _0x2ad709['red']:
                this['createBox'](_0x1b3b5f);
                break;
            case _0x2ad709['redsugar']:
                this['createSuga' + 'rBox'](_0x1b3b5f);
                break;
            case _0x2ad709['redwater']:
                this['createRedW' + 'ater']();
                break;
            case _0x2ad709['write']:
                this['createBox'](_0x1b3b5f);
                break;
            case _0x2ad709['yellowwate' + 'r']:
                this['createYell' + 'owWater']();
                break;
            case _0x2ad709['yellow']:
                this['createBox'](_0x1b3b5f);
            }
        }
        ['createEffe' + 'ct']() {
            let _0x56d89f = new Laya['Animation']();
            return _0x56d89f['loadAnimat' + 'ion']('test/TestA' + 'ni.ani'), _0x56d89f['on'](Laya['Event']['COMPLETE'], null, function () {
                _0x56d89f['removeSelf'](), Laya['Pool']['recover']('effect', _0x56d89f);
            }), _0x56d89f;
        }
        ['NextGame']() {
            this['_scene']['chooseBox'] && (this['_scene']['KeyCnt'] = 0x0, this['_scene']['showKeyBox'](), this['_scene']['chooseBox'] = !0x1, _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Reward'])), this['_scene']['ResultBox']['visible'] = !0x1, this['_scene']['MainBox']['visible'] = !0x0, (Laya['timer']['clear'](this['_scene'], this['_scene']['updateAni']), this['restGame']());
        }
        ['clearGame']() {
            Laya['timer']['clear'](this, this['update']), this['_scene']['flyKey']['off']('click', this['_scene'], this['_scene']['addflyBox']), this['_scene']['flyKey']['visible'] = !0x1, this['_scene']['flyKey']['x'] = 0x0, this['_scene']['flyKey']['y'] = 0xb4;
        }
        ['restGame']() {
            this['clearGame'](), this['IsMove'] = !0x1, this['_scene']['zzBox']['removeChil' + 'dren'](), this['_scene']['HBox1']['removeChil' + 'dren'](), this['_scene']['HBox2']['removeChil' + 'dren'](), this['_scene']['NextTeaBox']['removeChil' + 'dren'](), this['_scene']['ChangeWate' + 'rCnt'] = 0x0, this['_scene']['ChangeWate' + 'rImgCnt'] = 0x0, this['_scene']['ChangeWate' + 'rColor'] = 0x0, this['_scene']['waterChang' + 'eGround']['y'] = 0x0, this['_scene']['IsFirstCol' + 'or'] = !0x1;
            for (let _0x15156e = this['_scene']['BottomBtnA' + 'rr']['length'] - 0x1; _0x15156e >= 0x0; _0x15156e--)
                this['_scene']['BottomBtnA' + 'rr'][_0x15156e]['destroy']();
            for (let _0x2edf7e = this['_scene']['ShowZZCfg']['length'] - 0x1; _0x2edf7e >= 0x0; _0x2edf7e--)
                this['_scene']['ShowZZCfg'][_0x2edf7e]['destroy']();
            if (this['_scene']['ShowZZCfg'] = [], this['_scene']['BottomBtnA' + 'rr'] = [], this['_gameBox']['removeChil' + 'dren'](), this['GameDate'] = [], this['_scene']['TeaCnt'] = 0x0, this['_scene']['_addTea'] = 0x0, this['_scene']['TeaImg1']['skin'] = '', this['_scene']['ChangeWate' + 'rImgArr']['length'] > 0x0) {
                for (let _0x356d73 = this['_scene']['ChangeWate' + 'rImgArr']['length'] - 0x1; _0x356d73 > 0x0; _0x356d73--)
                    this['_scene']['ChangeWate' + 'rImgArr'][_0x356d73]['destroy']();
                this['_scene']['ChangeWate' + 'rImgArr'] = [];
            }
            this['onMouseUpB' + 'tn'](), Laya['timer']['once'](0x3e8, this, this['stopGame']), this['gameKeyBox' + 'Cnt'] = 0x0, this['_scene']['showResult' + 'Box']['removeChil' + 'dren'](), this['_scene']['IceGround']['y'] = 0x0, this['_scene']['loadScene']();
        }
        ['clearrig']() {
            if (0x0 == this['SpDate']['length'])
                return;
            this['_gameBox']['removeChil' + 'dren'](), this['MovePos'] = 0x0;
            let _0x4576c8, _0x8bfa06 = null, _0x51789e = null;
            for (let _0x37c2dc = this['SpDate']['length'] - 0x1; _0x37c2dc >= 0x0; _0x37c2dc--) {
                if (_0x51789e = 'DropWater' == this['SpDate'][_0x37c2dc]['name'] || 'DropBox' == this['SpDate'][_0x37c2dc]['name'] ? this['SpDate'][_0x37c2dc]['getCompone' + 'nt'](Laya['CircleColl' + 'ider']) : this['SpDate'][_0x37c2dc]['getCompone' + 'nt'](Laya['BoxCollide' + 'r']), _0x8bfa06 = this['SpDate'][_0x37c2dc]['getCompone' + 'nt'](Laya['RigidBody']), _0x51789e['destroy'](), _0x8bfa06['destroy'](), Laya['Physics']['I']['world']['DestroyBod' + 'y'](_0x8bfa06['body']), 'DropWater' != this['SpDate'][_0x37c2dc]['name'] && ('DropBox' == this['SpDate'][_0x37c2dc]['name'] ? _0x4576c8 = this['SpDate'][_0x37c2dc]['getCompone' + 'nt'](_0x17f23d) : 'DropBoxIce' == this['SpDate'][_0x37c2dc]['name'] ? _0x4576c8 = this['SpDate'][_0x37c2dc]['getCompone' + 'nt'](_0x23b833) : 'DropBoxSug' + 'er' == this['SpDate'][_0x37c2dc]['name'] && (_0x4576c8 = this['SpDate'][_0x37c2dc]['getCompone' + 'nt'](_0x2fe954)), 0x0 == _0x4576c8['IsRemove'] && this['SpDate'][_0x37c2dc]['y'] > Laya['stage']['height'] - 0xf8 - 0x113 - 0x32)) {
                    let _0x341395 = this['SpDate'][_0x37c2dc]['getChildBy' + 'Name']('img');
                    _0x341395['x'] = this['SpDate'][_0x37c2dc]['x'], _0x341395['y'] = this['SpDate'][_0x37c2dc]['y'], _0x341395['rotation'] = this['SpDate'][_0x37c2dc]['rotation'], this['_gameBox']['addChild'](_0x341395);
                }
                this['SpDate'][_0x37c2dc]['destroy']();
            }
            this['SpDate'] = [];
        }
        ['startGame']() {
            this['_started'] = !0x0, this['MovePos'] = 0x0, this['IsMove'] = !0x0, Laya['timer']['frameLoop'](0x1, this, this['update']);
        }
        ['update']() {
            this['ShowKeyBox'] ? (this['_scene']['flyKey']['x']++, this['_scene']['flyKey']['y'] = 0x14 * Math['sinh'](Math['sin'](this['_scene']['flyKey']['x'] / 0x14)) + 0xb4, this['_scene']['flyKey']['x'] > Laya['stage']['width'] - 0x64 && (this['ShowKeyBox'] = !0x1, this['_scene']['flyKey']['x'] = 0x0, this['_scene']['flyKey']['visible'] = !0x1)) : (this['GameTime']++, this['GameTime'] % 0x12c == 0x0 && this['gameKeyBox' + 'Cnt'] <= 0x3 && (this['gameKeyBox' + 'Cnt']++, this['ShowKeyBox'] = !0x0, this['_scene']['createKeyB' + 'ox'](0x0))), this['IsCreatBox'] && (this['CreatBoxTi' + 'me']++, this['CreatBoxTi' + 'me'] % 0x3 == 0x0 && this['createTea'](this['CurBoxType'])), _0x1ae356['Instance']['IsRandomSc' + 'ene'] && this['IsMove'] && (this['MovePos'] += this['MoveSpeed'], this['_scene']['cupBox']['centerX'] -= this['MoveSpeed'], this['_scene']['IceGround']['x'] -= this['MoveSpeed'], this['_scene']['downCollid' + 'er']['x'] -= this['MoveSpeed'], this['_scene']['leftCollid' + 'er']['x'] -= this['MoveSpeed'], this['_scene']['rightColli' + 'der']['x'] -= this['MoveSpeed'], this['_scene']['waterChang' + 'eGround']['x'] -= this['MoveSpeed'], this['MovePos'] >= Laya['stage']['width'] - this['_scene']['cup']['width'] && (Laya['timer']['clear'](this, this['update']), this['_scene']['ReadyGame']()));
        }
        ['stopGame']() {
            this['_started'] = !0x1;
        }
    }
    _0x3b246f['_instance'] = null;
    class _0x1a80c1 {
        static ['CloneJson'](_0x488d90, _0xc58e23 = 0x0, _0xb4d54 = _0x488d90['length']) {
            var _0x2caf17 = [];
            for (let _0x31783e = _0xc58e23; _0x31783e < _0xb4d54; _0x31783e++)
                _0x2caf17['push'](_0x488d90[_0x31783e]);
            return _0x2caf17;
        }
        static ['SplitToStr'](_0x3e0337, _0x525c51) {
            var _0x4cd08e = [], _0x4a7eaf = _0x3e0337['toString']()['split'](_0x525c51);
            for (let _0x3efdd6 = 0x0; _0x3efdd6 < _0x4a7eaf['length']; _0x3efdd6++)
                _0x4cd08e['push'](_0x4a7eaf[_0x3efdd6]);
            return _0x4cd08e;
        }
        static ['deltaTime']() {
            var _0x4937e5 = Laya['timer']['delta'] / 0x3e8;
            return _0x4937e5 > 0.5 ? 0.03 : _0x4937e5;
        }
        static ['NumberInRa' + 'nge'](_0x4bdbc2, _0x3a1962, _0x605786) {
            return _0x4bdbc2 <= _0x605786 && _0x4bdbc2 >= _0x3a1962;
        }
        static ['getCurrent' + 'Date']() {
            var _0x391d41 = new Date();
            return _0x391d41['getFullYea' + 'r']() + '年' + (_0x391d41['getMonth']() + 0x1) + '月' + _0x391d41['getDate']() + '日';
        }
        static ['Clamp'](_0x306357, _0x39f10d, _0x34b9f8) {
            return _0x306357 >= _0x34b9f8 ? _0x34b9f8 : _0x306357 <= _0x39f10d ? _0x39f10d : _0x306357;
        }
        static ['Clamp01'](_0x43fae0) {
            return _0x43fae0 < 0x0 ? 0x0 : _0x43fae0 > 0x1 ? 0x1 : _0x43fae0;
        }
        static ['Angle'](_0x4eaa05, _0x33ec49) {
            var _0x33840b = new Laya['Vector3'](), _0x16aaa4 = new Laya['Vector3']();
            return Laya['Vector3']['normalize'](_0x4eaa05, _0x33840b), Laya['Vector3']['normalize'](_0x33ec49, _0x16aaa4), 57.29578 * Math['acos'](this['Clamp'](this['Dot'](this['Normalized'](_0x4eaa05), this['Normalized'](_0x33ec49)), -0x1, 0x1));
        }
        static ['Distance'](_0x1da505, _0x4fc87c) {
            return Laya['Vector3']['distance'](_0x1da505, _0x4fc87c);
        }
        static ['Add'](_0x4b05c3, _0x368e8c) {
            var _0x15fb49 = new Laya['Vector3']();
            return Laya['Vector3']['add'](_0x4b05c3, _0x368e8c, _0x15fb49), _0x15fb49;
        }
        static ['Less'](_0x111fba, _0x1c52bb) {
            return new Laya['Vector3'](_0x111fba['x'] - _0x1c52bb['x'], _0x111fba['y'] - _0x1c52bb['y'], _0x111fba['z'] - _0x1c52bb['z']);
        }
        static ['Multiply'](_0x508cb0, _0x12a61b) {
            return new Laya['Vector3'](_0x508cb0['x'] * _0x12a61b, _0x508cb0['y'] * _0x12a61b, _0x508cb0['z'] * _0x12a61b);
        }
        static ['Lerp'](_0xf7ee62, _0xdfb98c, _0xd54e4f) {
            var _0x39388d = new Laya['Vector3']();
            return Laya['Vector3']['lerp'](_0xf7ee62, _0xdfb98c, _0xd54e4f, _0x39388d), _0x39388d;
        }
        static ['Divide'](_0x1b062b, _0x1cc569) {
            return new Laya['Vector3'](_0x1b062b['x'] / _0x1cc569, _0x1b062b['y'] / _0x1cc569, _0x1b062b['z'] / _0x1cc569);
        }
        static ['Normalized'](_0x3702ef) {
            var _0x3f4305 = new Laya['Vector3'](0x0, 0x0, 0x0);
            return Laya['Vector3']['normalize'](_0x3702ef, _0x3f4305), _0x3f4305;
        }
        static ['magnitude'](_0x3c9cf2) {
            return Math['sqrt'](this['sqrMagnitu' + 'de'](_0x3c9cf2));
        }
        static ['sqrMagnitu' + 'de'](_0x4f2be1) {
            var _0x204d7b = _0x4f2be1['x'] * _0x4f2be1['x'] + _0x4f2be1['y'] * _0x4f2be1['y'];
            return _0x204d7b += _0x4f2be1['z'] * _0x4f2be1['z'];
        }
        static ['clampMagni' + 'tude'](_0x5eec3b, _0x4769d4) {
            return this['sqrMagnitu' + 'de'](_0x5eec3b) > _0x4769d4 * _0x4769d4 ? (_0x5eec3b = this['Normalized'](_0x5eec3b), this['Multiply'](_0x5eec3b, _0x4769d4)) : _0x5eec3b;
        }
        static ['random'](_0x1d6413, _0x15f143) {
            return Math['random'](), Math['round'](_0x1d6413 + Math['random']() * (_0x15f143 - _0x1d6413));
        }
        static ['RandomPosi' + 'tionUnitSp' + 'here']() {
            var _0x30e037 = this['RandomRang' + 'e'](-0x1, 0x1), _0x146936 = this['RandomRang' + 'e'](-0x1, 0x1), _0x2e16bb = this['RandomRang' + 'e'](-0x1, 0x1);
            return new Laya['Vector3'](_0x30e037, _0x146936, _0x2e16bb);
        }
        static ['RandomRang' + 'e'](_0x253c91, _0x38d9bd) {
            return Math['random'](), _0x253c91 + Math['random']() * (_0x38d9bd - _0x253c91);
        }
        static ['sortHandle'](_0x2f6414, _0xb233d7) {
            return _0x2f6414 > _0xb233d7 ? 0x1 : -0x1;
        }
        static ['AddingZero'](_0x36e1ac, _0x3b3437) {
            var _0x206be9 = _0x36e1ac['toString']()['length'], _0x1b0bb = Math['max'](0x0, _0x3b3437 - _0x206be9), _0x29b919 = '';
            for (let _0x2f8f8a = 0x0; _0x2f8f8a < _0x1b0bb; _0x2f8f8a++)
                _0x29b919 += '0';
            return _0x29b919 + _0x36e1ac;
        }
        static ['isEmpty'](_0x16ae39) {
            return void 0x0 === _0x16ae39 || null == _0x16ae39 || '' == _0x16ae39;
        }
        static ['Dot'](_0x2adb3a, _0x4660be) {
            return Laya['Vector3']['dot'](_0x2adb3a, _0x4660be);
        }
        static ['showResult' + 'Color'](_0x4ecdd3) {
            let _0x240865 = '#000000';
            switch (_0x4ecdd3) {
            case 0x1:
                _0x240865 = '#3d2929';
                break;
            case 0x2:
                _0x240865 = '#b9b9b9';
                break;
            case 0x3:
                _0x240865 = '#3d2929';
                break;
            case 0x4:
                _0x240865 = '#ffa4a4';
                break;
            case 0x5:
                _0x240865 = '#d3eb64';
                break;
            case 0x6:
                _0x240865 = '#533535';
                break;
            case 0x7:
                _0x240865 = '#1e8d0c';
                break;
            case 0x8:
                _0x240865 = '#45e3ff';
                break;
            case 0x9:
                _0x240865 = '#ff0000';
                break;
            case 0xa:
                _0x240865 = '#ffe500';
                break;
            case 0xb:
                _0x240865 = '#007ac2';
            }
            return _0x240865;
        }
        static ['doUp'](_0x15d984, _0x3f0b51, _0x51459e, _0x366651, _0x26961c, _0x4f66a0, _0xa4607a) {
            _0x15d984['needStop'] || Laya['Tween']['to'](_0x51459e, {
                'x': _0x51459e['x'] + _0x26961c,
                'y': _0x51459e['y'] + _0x4f66a0
            }, _0x366651, null, Laya['Handler']['create'](this, this['doDown'], [
                _0x15d984,
                _0x3f0b51,
                _0x51459e,
                _0x366651,
                _0x26961c,
                _0x4f66a0,
                _0xa4607a
            ], !0x0));
        }
        static ['doDown'](_0x2817fa, _0x4ef5ae, _0x5e4670, _0x1eda25, _0x412184, _0x1848ba, _0x549e13) {
            Laya['timer']['once'](_0x549e13, this, (() => {
                Laya['Tween']['to'](_0x5e4670, {
                    'x': _0x5e4670['x'] - _0x412184,
                    'y': _0x5e4670['y'] - _0x1848ba
                }, _0x1eda25, null, Laya['Handler']['create'](this, this['doUp'], [
                    _0x2817fa,
                    _0x4ef5ae,
                    _0x5e4670,
                    _0x1eda25,
                    _0x412184,
                    _0x1848ba,
                    _0x549e13
                ], !0x0));
            })['bind'](this));
        }
        static ['drawCupWat' + 'er'](_0x35c18e, _0x2136b0, _0x3a1408) {
            let _0x59f088 = [
                0x43,
                0x37,
                0x37
            ];
            if (_0x35c18e + _0x2136b0 + _0x3a1408 == 0x0)
                return _0x59f088;
            let _0x43929f = 0x0, _0x2fef51 = _0x35c18e + _0x2136b0 + _0x3a1408, _0x2b5ea9 = Math['floor'](0x64 * _0x35c18e / _0x2fef51), _0x216ad = Math['floor'](0x64 * _0x2136b0 / _0x2fef51), _0x10bafc = Math['floor'](0x64 * _0x3a1408 / _0x2fef51);
            return _0x2b5ea9 < 0xf && (_0x59f088 = (_0x43929f = _0x216ad / _0x10bafc) > 5.7 ? [
                0x0,
                0x7a,
                0xc3
            ] : _0x43929f > 1.5 ? [
                0xa1,
                0xbe,
                0x48
            ] : _0x43929f > 0.7 ? [
                0x46,
                0xaf,
                0xa0
            ] : _0x43929f > 0.17 ? [
                0x40,
                0xa0,
                0x58
            ] : [
                0xff,
                0xe5,
                0x0
            ]), _0x216ad < 0xf && (_0x59f088 = (_0x43929f = _0x2b5ea9 / _0x10bafc) > 5.7 ? [
                0xff,
                0x0,
                0x0
            ] : _0x43929f > 1.5 ? [
                0xe4,
                0x64,
                0x33
            ] : _0x43929f > 0.7 ? [
                0xf5,
                0xbf,
                0x3b
            ] : _0x43929f > 0.17 ? [
                0xe8,
                0x8a,
                0x32
            ] : [
                0xff,
                0xe5,
                0x0
            ]), _0x10bafc < 0xf && (_0x59f088 = (_0x43929f = _0x2b5ea9 / _0x216ad) > 5.7 ? [
                0xff,
                0x0,
                0x0
            ] : _0x43929f > 1.5 ? [
                0x64,
                0x38,
                0xb4
            ] : _0x43929f > 0.7 ? [
                0xcf,
                0x2e,
                0x8c
            ] : _0x43929f > 0.17 ? [
                0x8c,
                0x52,
                0x9c
            ] : [
                0x0,
                0x7a,
                0xc3
            ]), _0x59f088;
        }
        static ['TransferSt' + 'ringToStrA' + 'rr'](_0x4ade14) {
            return _0x4ade14['toString']()['split'](',');
        }
        static ['TransformP' + 'oint'](_0x4dda0e, _0x4ba229) {
            var _0x1df0fe = new Laya['Vector3']();
            return Laya['Vector3']['transformQ' + 'uat'](_0x4ba229, _0x4dda0e['rotation'], _0x1df0fe), Laya['Vector3']['add'](_0x1df0fe, _0x4dda0e['position'], _0x1df0fe), _0x1df0fe;
        }
        static ['InverseTra' + 'nsformPoin' + 't'](_0x338228, _0x14dea1) {
            var _0x4c989e = new Laya['Vector3']();
            _0x338228['getRight'](_0x4c989e);
            var _0x3dfa9d = new Laya['Vector3']();
            _0x338228['getUp'](_0x3dfa9d);
            var _0x52890a = new Laya['Vector3']();
            _0x338228['getForward'](_0x52890a);
            var _0x4426a9 = new Laya['Vector3'](-_0x52890a['x'], -_0x52890a['y'], -_0x52890a['z']), _0x11123b = this['ProjectDis' + 'tance'](_0x14dea1, _0x338228['position'], _0x4c989e), _0x3cbafe = this['ProjectDis' + 'tance'](_0x14dea1, _0x338228['position'], _0x3dfa9d), _0x3e63ac = this['ProjectDis' + 'tance'](_0x14dea1, _0x338228['position'], _0x4426a9);
            return new Laya['Vector3'](_0x11123b, _0x3cbafe, _0x3e63ac);
        }
        static ['ProjectDis' + 'tance'](_0x2160fe, _0x1b15ea, _0x24e73e) {
            var _0x3fd0df = new Laya['Vector3']();
            Laya['Vector3']['subtract'](_0x2160fe, _0x1b15ea, _0x3fd0df);
            var _0x37803e = this['Angle2'](_0x3fd0df, _0x24e73e) * Math['PI'] / 0xb4, _0x4fc6bb = Laya['Vector3']['distance'](_0x2160fe, _0x1b15ea);
            return _0x4fc6bb *= Math['cos'](_0x37803e);
        }
        static ['Angle2'](_0x576c51, _0x236ff5) {
            var _0x532197 = (_0x576c51['x'] * _0x236ff5['x'] + _0x576c51['y'] * _0x236ff5['y'] + _0x576c51['z'] * _0x236ff5['z']) / (Math['sqrt'](_0x576c51['x'] * _0x576c51['x'] + _0x576c51['y'] * _0x576c51['y'] + _0x576c51['z'] * _0x576c51['z']) * Math['sqrt'](_0x236ff5['x'] * _0x236ff5['x'] + _0x236ff5['y'] * _0x236ff5['y'] + _0x236ff5['z'] * _0x236ff5['z']));
            return _0x532197 < -0x1 && (_0x532197 = -0x1), _0x532197 > 0x1 && (_0x532197 = 0x1), 0xb4 * Math['acos'](_0x532197) / Math['PI'];
        }
        static ['TransferSt' + 'ringToNumb' + 'erArr'](_0x847f42) {
            var _0x566a48 = [], _0x59a3a0 = _0x847f42['toString']()['split'](',');
            for (let _0x3a94d0 = 0x0; _0x3a94d0 < _0x59a3a0['length']; _0x3a94d0++)
                _0x566a48['push'](parseFloat(_0x59a3a0[_0x3a94d0]));
            return _0x566a48;
        }
        static ['ScoreToStr' + 'ing'](_0x5e15e8) {
            var _0x96a970 = Math['ceil'](_0x5e15e8)['toString']();
            if (0x4 == _0x96a970['length'])
                _0x96a970 = (_0x96a970 = _0x96a970['substring'](0x0, 0x3))['substring'](0x0, 0x1) + '.' + _0x96a970['substring'](0x1, 0x3), _0x96a970 = parseFloat(_0x96a970)['toString']() + 'K';
            else {
                if (0x5 == _0x96a970['length'])
                    _0x96a970 = (_0x96a970 = _0x96a970['substring'](0x0, 0x3))['substring'](0x0, 0x2) + '.' + _0x96a970['substring'](0x2, 0x3), _0x96a970 = parseFloat(_0x96a970)['toString']() + 'K';
                else {
                    if (0x6 == _0x96a970['length'])
                        _0x96a970 = (_0x96a970 = _0x96a970['substring'](0x0, 0x4))['substring'](0x0, 0x3) + '.' + _0x96a970['substring'](0x3, 0x4), _0x96a970 = parseFloat(_0x96a970)['toString']() + 'K';
                    else {
                        if (_0x96a970['length'] >= 0x7) {
                            var _0x345623 = _0x96a970['length'];
                            _0x96a970 = (_0x96a970 = _0x96a970['substring'](0x0, _0x345623 - 0x3))['substring'](0x0, _0x345623 - 0x6) + '.' + _0x96a970['substring'](_0x345623 - 0x6, _0x345623 - 0x5), _0x96a970 = parseFloat(_0x96a970)['toString']() + 'M';
                        }
                    }
                }
            }
            return _0x96a970;
        }
        static ['doSmall'](_0x586269, _0x529576, _0x4c05d9, _0x2f4f5f) {
            Laya['Tween']['to'](_0x529576, {
                'scaleX': 0x1,
                'scaleY': 0x1
            }, _0x4c05d9, null, Laya['Handler']['create'](this, this['doLager'], [
                _0x586269,
                _0x529576,
                _0x4c05d9,
                _0x2f4f5f
            ], !0x0));
        }
        static ['doLager'](_0x29674f, _0x5312fa, _0x561063, _0x518884) {
            Laya['Tween']['to'](_0x5312fa, {
                'scaleX': _0x518884,
                'scaleY': _0x518884
            }, _0x561063, null, Laya['Handler']['create'](this, this['doSmall'], [
                _0x29674f,
                _0x5312fa,
                _0x561063,
                _0x518884
            ], !0x0));
        }
        static ['doScale'](_0x1c2859, _0xe76a93) {
            Laya['Tween']['to'](_0x1c2859, {
                'scaleX': _0xe76a93,
                'scaleY': _0xe76a93
            }, 0x64, null, Laya['Handler']['create'](this, () => {
                Laya['Tween']['to'](_0x1c2859, {
                    'scaleX': 0x1,
                    'scaleY': 0x1
                }, 0x64);
            }));
        }
        static ['UIdoScale'](_0x44b8d5) {
            Laya['Tween']['from'](_0x44b8d5, {
                'scaleX': 0x0,
                'scaleY': 0x0
            }, 0x1f4, Laya['Ease']['elasticOut']);
        }
        static ['onClickWat' + 'chTV'](_0x43a9dc, _0x342230, _0x45973c) {
        }
        static ['getCurrent' + 'Time']() {
            return Date['parse'](new Date()['toString']());
        }
        static ['transferSe' + 'condToDHM'](_0x38f546) {
            var _0x34d4fd = Math['floor'](_0x38f546 / 0x15180);
            _0x38f546 -= 0x15180 * _0x34d4fd;
            var _0x31e59d = Math['floor'](_0x38f546 / 0xe10);
            _0x38f546 -= 0xe10 * _0x31e59d;
            var _0x14d5d4 = Math['floor'](_0x38f546 / 0x3c), _0x413df1 = _0x34d4fd > 0x0 ? '\x20' + _0x34d4fd + '天\x20' : '';
            return _0x413df1 += _0x31e59d > 0x0 ? _0x31e59d + '小时\x20' : '', _0x413df1 += _0x14d5d4 > 0x0 ? _0x14d5d4 + '分钟\x20' : '';
        }
        static ['quadEquati' + 'onGetX'](_0x113ad3, _0x57d441, _0x2b4266) {
            let _0x59b35e = [], _0xa8e9e = Math['pow'](_0x57d441, 0x2) - 0x4 * _0x113ad3 * _0x2b4266;
            return _0xa8e9e > 0x0 ? (_0x59b35e['push']((-_0x57d441 + Math['sqrt'](_0xa8e9e)) / (0x2 * _0x113ad3)), _0x59b35e['push']((-_0x57d441 - Math['sqrt'](_0xa8e9e)) / (0x2 * _0x113ad3))) : 0x0 == _0xa8e9e && _0x59b35e['push'](-_0x57d441 / (0x2 * _0x113ad3)), _0x59b35e;
        }
        static ['binaryEqua' + 'tionGetKB'](_0x4daa73, _0x4ddc41, _0x16bf96, _0x478084) {
            return [
                (_0x4ddc41 - _0x478084) / (_0x4daa73 - _0x16bf96),
                (_0x4daa73 * _0x478084 - _0x16bf96 * _0x4ddc41) / (_0x4daa73 - _0x16bf96)
            ];
        }
        static ['getInsertP' + 'ointBetwee' + 'nCircleAnd' + 'Line'](_0x20fa05, _0x3796c6, _0xce48ce, _0x40fbb6, _0x211b65, _0x2376a0, _0x47764a) {
            let _0x17fac1 = _0x1a80c1['binaryEqua' + 'tionGetKB'](_0x20fa05, _0x3796c6, _0xce48ce, _0x40fbb6), _0x16a009 = _0x17fac1[0x0], _0x30114d = _0x17fac1[0x1], _0x2b911d = 0x1 + _0x16a009 * _0x16a009, _0x464658 = 0x2 * _0x16a009 * (_0x30114d - _0x2376a0) - 0x2 * _0x211b65, _0x56baaa = _0x211b65 * _0x211b65 + (_0x30114d - _0x2376a0) * (_0x30114d - _0x2376a0) - _0x47764a * _0x47764a, _0x4f81a9 = [];
            return _0x1a80c1['quadEquati' + 'onGetX'](_0x2b911d, _0x464658, _0x56baaa)['forEach'](_0x1fdde1 => {
                let _0x52311e = _0x16a009 * _0x1fdde1 + _0x30114d;
                _0x4f81a9['push']({
                    'x': _0x1fdde1,
                    'y': _0x52311e
                });
            }), _0x4f81a9;
        }
        static ['Quaternion' + 'XVector3'](_0x148ad9, _0x1b0c2c) {
            var _0x42db6e = 0x2 * _0x148ad9['x'], _0x190934 = 0x2 * _0x148ad9['y'], _0x42023b = 0x2 * _0x148ad9['z'], _0x4d5b54 = _0x148ad9['x'] * _0x42db6e, _0x263412 = _0x148ad9['y'] * _0x190934, _0x2656e8 = _0x148ad9['z'] * _0x42023b, _0x2a33ec = _0x148ad9['x'] * _0x190934, _0x20e783 = _0x148ad9['x'] * _0x42023b, _0xaaae91 = _0x148ad9['y'] * _0x42023b, _0x5377e4 = _0x148ad9['w'] * _0x42db6e, _0x3402c7 = _0x148ad9['w'] * _0x190934, _0x247b3a = _0x148ad9['w'] * _0x42023b, _0x55babb = new Laya['Vector3']();
            return _0x55babb['x'] = (0x1 - (_0x263412 + _0x2656e8)) * _0x1b0c2c['x'] + (_0x2a33ec - _0x247b3a) * _0x1b0c2c['y'] + (_0x20e783 + _0x3402c7) * _0x1b0c2c['z'], _0x55babb['y'] = (_0x2a33ec + _0x247b3a) * _0x1b0c2c['x'] + (0x1 - (_0x4d5b54 + _0x2656e8)) * _0x1b0c2c['y'] + (_0xaaae91 - _0x5377e4) * _0x1b0c2c['z'], _0x55babb['z'] = (_0x20e783 - _0x3402c7) * _0x1b0c2c['x'] + (_0xaaae91 + _0x5377e4) * _0x1b0c2c['y'] + (0x1 - (_0x4d5b54 + _0x263412)) * _0x1b0c2c['z'], _0x55babb;
        }
        static ['getCircleP' + 'osByAngle'](_0x2eaa20, _0x41c13d, _0x2a5c5b, _0x25c231) {
            var _0x1de28d = new Laya['Vector2']();
            return _0x1de28d['x'] = _0x41c13d + _0x25c231 * Math['sin'](_0x2eaa20 * Math['PI'] / 0xb4), _0x1de28d['y'] = _0x2a5c5b + _0x25c231 * Math['cos'](_0x2eaa20 * Math['PI'] / 0xb4), _0x1de28d;
        }
        static ['GetStageVi' + 'ewCrossPoi' + 'nt'](_0x31f1ba, _0x335375) {
            var _0x44632c = new Laya['Point'](0x0, 0x0), _0xfb1866 = new Laya['Point'](Laya['stage']['width'], 0x0), _0x2da4b4 = new Laya['Point'](Laya['stage']['width'], Laya['stage']['height']), _0x2d12ce = new Laya['Point'](0x0, Laya['stage']['height']), _0x475324 = this['GetInterse' + 'ction'](_0x31f1ba, _0x335375, _0x44632c, _0xfb1866);
            return null == _0x475324 && (_0x475324 = this['GetInterse' + 'ction'](_0x31f1ba, _0x335375, _0xfb1866, _0x2da4b4)), null == _0x475324 && (_0x475324 = this['GetInterse' + 'ction'](_0x31f1ba, _0x335375, _0x2da4b4, _0x2d12ce)), null == _0x475324 && (_0x475324 = this['GetInterse' + 'ction'](_0x31f1ba, _0x335375, _0x2d12ce, _0x44632c)), _0x475324;
        }
        static ['isInStageV' + 'iew'](_0x44bfcf, _0x1cf483) {
            return _0x44bfcf >= 0x0 && _0x44bfcf <= Laya['stage']['width'] && _0x1cf483 >= 0x0 && _0x1cf483 <= Laya['stage']['height'];
        }
        static ['GetInterse' + 'ction'](_0x2f92f0, _0x2f05ac, _0x3b4483, _0x281f51) {
            var _0x289603, _0x381e2e, _0x237065 = _0x2f92f0['x'], _0x2a8323 = _0x2f92f0['y'], _0x32d3d1 = _0x2f05ac['x'], _0x53f16f = _0x2f05ac['y'], _0x16dfe5 = _0x3b4483['x'], _0x3b6299 = _0x3b4483['y'], _0x5bfe62 = _0x281f51['x'], _0x441d9c = _0x281f51['y'];
            if (_0x237065 == _0x32d3d1 && _0x16dfe5 == _0x5bfe62 && _0x237065 == _0x16dfe5)
                return null;
            if (_0x2a8323 == _0x53f16f && _0x3b6299 == _0x441d9c && _0x2a8323 == _0x3b6299)
                return null;
            if (_0x237065 == _0x32d3d1 && _0x16dfe5 == _0x5bfe62)
                return null;
            if (_0x2a8323 == _0x53f16f && _0x3b6299 == _0x441d9c)
                return null;
            if (_0x237065 == _0x32d3d1)
                _0x289603 = _0x237065, _0x381e2e = (_0x10db04 = -(_0x127a65 = (_0x441d9c - _0x3b6299) / (_0x5bfe62 - _0x16dfe5)) * _0x16dfe5 + _0x3b6299) + _0x127a65 * _0x237065;
            else {
                if (_0x16dfe5 == _0x5bfe62)
                    _0x289603 = _0x16dfe5, _0x381e2e = -(_0x4e2f2c = (_0x53f16f - _0x2a8323) / (_0x32d3d1 - _0x237065)) * _0x237065 + _0x2a8323 + _0x4e2f2c * _0x16dfe5;
                else {
                    var _0x4e2f2c, _0x127a65, _0x10db04;
                    _0x381e2e = (_0x10db04 = -(_0x127a65 = (_0x441d9c - _0x3b6299) / (_0x5bfe62 - _0x16dfe5)) * _0x16dfe5 + _0x3b6299) + _0x127a65 * (_0x289603 = (-(_0x4e2f2c = (_0x53f16f - _0x2a8323) / (_0x32d3d1 - _0x237065)) * _0x237065 + _0x2a8323 - _0x10db04) / (_0x127a65 - _0x4e2f2c));
                }
            }
            return this['IsInsideLi' + 'ne'](_0x2f92f0, _0x2f05ac, _0x289603, _0x381e2e) && this['IsInsideLi' + 'ne'](_0x3b4483, _0x281f51, _0x289603, _0x381e2e) ? new Laya['Point'](_0x289603, _0x381e2e) : null;
        }
        static ['IsInsideLi' + 'ne'](_0x4ef6b5, _0x1dd098, _0x23b206, _0x1fab3f) {
            return (_0x23b206 >= _0x4ef6b5['x'] && _0x23b206 <= _0x1dd098['x'] || _0x23b206 >= _0x1dd098['x'] && _0x23b206 <= _0x4ef6b5['x']) && (_0x1fab3f >= _0x4ef6b5['y'] && _0x1fab3f <= _0x1dd098['y'] || _0x1fab3f >= _0x1dd098['y'] && _0x1fab3f <= _0x4ef6b5['y']);
        }
    }
    class _0x744308 extends Laya['Script'] {
        constructor() {
            super(), this['duquanColo' + 'rSpeed'] = 0x3, this['duquanColo' + 'r'] = 0x0, this['duquanColo' + 'rImg'] = '', this['showWidth'] = 0x0, this['width'] = 0x185, this['height'] = 0x35, this['Passwidth'] = 0x0, this['lockwidth'] = 0x0, this['sprite'] = null, this['Locksprite'] = null, this['pass'] = null, this['passimg'] = null, this['iconImg'] = null;
        }
        ['onEnable']() {
            this['sprite'] = this['owner']['getChildBy' + 'Name']('SP'), this['Locksprite'] = this['owner']['getChildBy' + 'Name']('LockSp'), this['pass'] = this['owner']['getChildBy' + 'Name']('pass'), this['passimg'] = this['owner']['getChildBy' + 'Name']('passimg'), this['iconImg'] = this['owner']['getChildBy' + 'Name']('img');
        }
        ['showReult'](_0x1ed0dc, _0x2b1476) {
            this['sprite'] = this['owner']['getChildBy' + 'Name']('SP'), this['Locksprite'] = this['owner']['getChildBy' + 'Name']('LockSP'), this['pass'] = this['owner']['getChildBy' + 'Name']('pass'), this['passimg'] = this['owner']['getChildBy' + 'Name']('passimg'), this['iconImg'] = this['owner']['getChildBy' + 'Name']('img');
            let _0x27c5e2 = _0x2b1476['AllNum'] + _0x2b1476['AllwaterNu' + 'm'] / 0x5 + _0x2b1476['AlliceNum'];
            _0x1ed0dc > 0x8 && (_0x27c5e2 = _0x2b1476['AllwaterNu' + 'm']);
            let _0x441373 = _0x2b1476['levelPassC' + 'fg'][_0x1ed0dc - 0x1], _0x51ea58 = _0x2b1476['ResultCfg'][_0x1ed0dc - 0x1];
            this['iconImg']['skin'] = _0x2b1476['choseImgIn' + 'ResultEum'](_0x1ed0dc), this['Locksprite']['width'] = this['width'] * _0x51ea58 / _0x27c5e2, this['Locksprite']['width'] = Math['min'](this['Locksprite']['width'], this['width']), this['sprite']['width'] = this['width'] * _0x441373 / _0x27c5e2, this['passimg']['x'] = 0xaa + this['sprite']['width'], this['showWidth'] = Math['abs'](this['sprite']['width'] - this['Locksprite']['width']), this['showWidth'] = Math['min'](this['showWidth'], this['width']), this['sprite']['width'] - this['Locksprite']['width'] >= 0x0 ? this['lockwidth'] = this['Locksprite']['width'] : this['lockwidth'] = this['sprite']['width'], 0x0 != _0x441373 ? Math['abs']((_0x441373 - _0x51ea58) / _0x441373) < 0.2 ? (this['pass']['skin'] = 'game/m_rea' + 'dy.png', this['pass']['size'](0x3d, 0x3d)) : this['pass']['skin'] = _0x441373 - _0x51ea58 > 0x0 ? 'game/m_mis' + 'sing.png' : 'game/m_too' + 'much.png' : _0x51ea58 > 0x8 ? this['pass']['skin'] = 'game/m_too' + 'much.png' : (this['pass']['skin'] = 'game/m_rea' + 'dy.png', this['pass']['size'](0x3d, 0x3d));
            let _0x2cd7e8 = _0x1a80c1['showResult' + 'Color'](_0x1ed0dc);
            this['Locksprite']['width'] = Math['min'](this['Locksprite']['width'], this['width']), this['Locksprite']['graphics']['clear'](), this['Locksprite']['graphics']['drawRect'](0x0, 0x0, this['Locksprite']['width'], 0x35, _0x2cd7e8), Laya['timer']['frameLoop'](0x1, this, this['update']);
        }
        ['onUpdate']() {
        }
        ['update']() {
            this['duquanColo' + 'r'] += this['duquanColo' + 'rSpeed'], this['duquanColo' + 'r'] > 0xb4 && (this['duquanColo' + 'r'] = 0xb4, this['duquanColo' + 'rSpeed'] *= -0x1), this['duquanColo' + 'r'] <= 0x0 && (this['duquanColo' + 'r'] = 0x0, this['duquanColo' + 'rSpeed'] *= -0x1), this['syncDuquan']('#' + this['duquanColo' + 'r']['toString'](0x10) + '0000');
        }
        ['syncDuquan'](_0x5ef9bf) {
            this['sprite']['graphics']['clear'](), this['sprite']['graphics']['drawRect'](this['lockwidth'], 0x0, this['showWidth'], 0x35, _0x5ef9bf);
        }
        ['onDisable']() {
            Laya['timer']['clear'](this, this['update']);
        }
    }
    class _0x27fb72 extends Laya['Script'] {
        constructor() {
            super(), this['duquanColo' + 'rSpeed'] = 0x2, this['duquanColo' + 'r'] = 0x0, this['duquanColo' + 'rImg'] = '', this['showWidth'] = 0x0, this['width'] = 0x70, this['height'] = 0x27, this['Passwidth'] = 0x0, this['lockwidth'] = 0x0, this['sprite'] = null, this['Locksprite'] = null, this['pass'] = null, this['passimg'] = null, this['iconImg'] = null;
        }
        ['onEnable']() {
            this['sprite'] = this['owner']['getChildBy' + 'Name']('SP'), this['Locksprite'] = this['owner']['getChildBy' + 'Name']('LockSp'), this['pass'] = this['owner']['getChildBy' + 'Name']('pass'), this['passimg'] = this['owner']['getChildBy' + 'Name']('passimg'), this['iconImg'] = this['owner']['getChildBy' + 'Name']('img');
        }
        ['showReult'](_0x1bac6e, _0x1cdaec) {
            this['sprite'] = this['owner']['getChildBy' + 'Name']('SP'), this['Locksprite'] = this['owner']['getChildBy' + 'Name']('LockSp'), this['pass'] = this['owner']['getChildBy' + 'Name']('pass'), this['passimg'] = this['owner']['getChildBy' + 'Name']('passimg'), this['iconImg'] = this['owner']['getChildBy' + 'Name']('img');
            let _0x474b98 = _0x1cdaec['AllNum'] + _0x1cdaec['AllwaterNu' + 'm'] / 0x5 + _0x1cdaec['AlliceNum'];
            _0x1bac6e > 0x8 && (_0x474b98 = _0x1cdaec['AllwaterNu' + 'm']);
            let _0x56c7e6 = _0x1cdaec['levelPassC' + 'fg'][_0x1bac6e - 0x1], _0x4b2515 = _0x1cdaec['ResultCfg'][_0x1bac6e - 0x1];
            this['iconImg']['skin'] = _0x1cdaec['choseImgIn' + 'ResultEum'](_0x1bac6e), this['Locksprite']['width'] = this['width'] * _0x4b2515 / _0x474b98, this['sprite']['width'] = this['width'] * _0x56c7e6 / _0x474b98, this['Locksprite']['width'] = Math['min'](this['Locksprite']['width'], this['width']), this['passimg']['x'] = 0x66 + this['sprite']['width'], this['showWidth'] = Math['abs'](this['sprite']['width'] - this['Locksprite']['width']), this['showWidth'] = Math['min'](this['showWidth'], this['width']), this['sprite']['width'] - this['Locksprite']['width'] >= 0x0 ? this['lockwidth'] = this['Locksprite']['width'] : this['lockwidth'] = this['sprite']['width'], 0x0 != _0x56c7e6 ? Math['abs']((_0x56c7e6 - _0x4b2515) / _0x56c7e6) < 0.2 ? this['pass']['skin'] = 'game/m_rea' + 'dy.png' : (this['pass']['skin'] = 'game/m_cro' + 'ss2.png', this['pass']['size'](0x28, 0x28)) : _0x4b2515 > 0x8 ? (this['pass']['skin'] = 'game/m_cro' + 'ss2.png', this['pass']['size'](0x28, 0x28)) : this['pass']['skin'] = 'game/m_rea' + 'dy.png';
            let _0xadcb3d = _0x1a80c1['showResult' + 'Color'](_0x1bac6e);
            this['Locksprite']['width'] = Math['min'](this['Locksprite']['width'], this['width']), this['Locksprite']['graphics']['clear'](), this['Locksprite']['graphics']['drawRect'](0x0, 0x0, this['Locksprite']['width'], 0x25, _0xadcb3d), Laya['timer']['frameLoop'](0x1, this, this['update']);
        }
        ['onUpdate']() {
        }
        ['update']() {
            this['duquanColo' + 'r'] += this['duquanColo' + 'rSpeed'], this['duquanColo' + 'r'] > 0xb4 && (this['duquanColo' + 'r'] = 0xb4, this['duquanColo' + 'rSpeed'] *= -0x1), this['duquanColo' + 'r'] <= 0x0 && (this['duquanColo' + 'r'] = 0x0, this['duquanColo' + 'rSpeed'] *= -0x1), this['syncDuquan']('#' + this['duquanColo' + 'r']['toString'](0x10) + '0000');
        }
        ['syncDuquan'](_0x303ba7) {
            this['sprite']['graphics']['clear'](), this['sprite']['graphics']['drawRect'](this['lockwidth'], 0x0, this['showWidth'], 0x25, _0x303ba7);
        }
        ['onDisable']() {
            Laya['timer']['clear'](this, this['update']);
        }
    }
    class _0x5d928f extends _0x3a0bc3['gamemainUI'] {
        constructor() {
            super(), this['_addscore'] = 0x0, this['_addTea'] = 0x0, this['CanAddscor' + 'e'] = !0x1, this['Color'] = 0x0, this['NowColor'] = 0x0, this['TeaCnt'] = 0x0, this['leftpos'] = 0x0, this['downpos'] = 0x0, this['down'] = !0x0, this['Val'] = 0.001, this['MoveXVal'] = 0.3, this['Val2'] = 0.0002, this['ValCnt'] = 0x0, this['goLeft'] = 0x78, this['BottomBtnA' + 'rr'] = [], this['BottomBtnC' + 'nt'] = 0x3, this['zzleft'] = 0x1, this['zzleftnum'] = 0x1, this['startReady'] = !0x1, this['movetime'] = 0x0, this['levelCfg'] = [
                _0x2ad709['redwater'],
                _0x2ad709['bluewater'],
                _0x2ad709['yellowwate' + 'r'],
                _0x2ad709['black']
            ], this['ResultCfg'] = [], this['levelPassC' + 'fg'] = [], this['AllNum'] = 0x0, this['AllwaterNu' + 'm'] = 0x0, this['AlliceNum'] = 0x0, this['firstGame'] = !0x0, this['ChildScene' + 'Cnt'] = 0x1, this['ShowZZCfg'] = [], this['RandomSenc' + 'eMovePos'] = 0x0, this['KeyCnt'] = 0x0, this['rankcfg'] = {
                'rank': 0x0,
                'name': null,
                'gold': 0x0,
                'val': 0x0
            }, this['chooseBox'] = !0x1, this['IsFirstCol' + 'or'] = !0x1, this['createDrop' + 'WaterTime'] = 0x0, this['createDrop' + 'WaterCnt'] = 0x0, this['ChangeWate' + 'rCnt'] = 0x0, this['ChangeWate' + 'rColor'] = 0x0, this['ChangeWate' + 'rImgCnt'] = 0x0, this['ChangeWate' + 'rImgArr'] = [], this['createFull' + 'WaterTime'] = 0x0, this['PlayWaterS' + 'oundTime'] = 0x0, this['needStop'] = !0x1, this['zsConfig'] = null, this['zsbannerCo' + 'nfig'] = 0x0, this['zsjumpConf' + 'ig'] = 0x0, this['zsnativeCo' + 'nfig'] = 0x0, this['zsShownati' + 'veConfig'] = 0x0, this['zs_banner_' + 'show_time'] = 0x0, this['zs_banner_' + 'banner_tim' + 'e'] = 0x0, this['IceGroundB' + 'ox'] = null, this['_control'] = null, this['levelCfg1'] = null, this['isget1'] = !0x1, this['isget2'] = !0x1, this['zzFloat'] = null, this['zzYoulike'] = null, this['zzPic'] = null, this['fingerImg'] = null, this['fingerRead' + 'Img'] = null, this['fingerImg2'] = null, Laya['MouseManag' + 'er']['multiTouch' + 'Enabled'] = !0x1;
        }
        ['init'](_0x5228a5) {
            this['regiesterE' + 'vent'](), _0x1ede3d['Instance']['init'](null), this['_control'] = this['getCompone' + 'nt'](_0x3b246f), this['_control']['initDate'](this), this['IceGroundB' + 'ox'] = this['IceGround']['getCompone' + 'nt'](Laya['BoxCollide' + 'r']), this['isget1'] = !0x1, this['loadScene'](), this['showSkin'](), _0x26ee17['IsQutoutia' + 'o']() && (this['moreGame']['visible'] = !0x1, this['box1']['bottom'] = 0x96, this['box2']['bottom'] = 0x152, this['box3']['bottom'] = 0x156, this['box4']['bottom'] = 0x17b, this['box5']['bottom'] = 0x15f, this['box6']['bottom'] = 0x96, this['ground']['bottom'] = 0x96, this['SharBtn']['visible'] = !0x1, this['NextBtn']['centerX'] = 0x0);
        }
        ['showSkin']() {
            let _0x2396b8 = _0x5ad2aa['Instance']['getGameSki' + 'nId']();
            this['SkinCntLab']['text'] = _0x5ad2aa['Instance']['getUnlockS' + 'kinCount']() + '/' + _0x5ad2aa['Instance']['getItemCfg' + 'Length']();
            let _0x544a3d = _0x5ad2aa['Instance']['getItemCfg'](_0x2396b8);
            this['gaiziImg']['skin'] = _0x544a3d['ResIcon']['replace'](/game/g, 'x'), this['UseSkinImg']['skin'] = _0x544a3d['ResIcon'];
        }
        ['loadScene']() {
            this['MoveXVal'] = 0.3, this['goLeft'] = 0x3c, this['IceGround']['x'] = 0x0, this['MoveTeaMas' + 'kImg']['pos'](0x0, 0x0), this['MoveTeaMas' + 'kImg']['size'](0x1f5, 0x13e), this['MoveTeaMas' + 'kImg']['skin'] = 'common/m_b' + 'g2.png', this['TeaMaskImg' + '1']['pos'](-0x2e, -0x40), this['TeaMaskImg' + '1']['size'](0x15f, 0x157), this['TeaMaskImg' + '1']['skin'] = 'game/w_1.p' + 'ng', this['TeaImgBox']['x'] = 0x82, this['TeaImgBox']['scaleX'] = 0x1, this['TeaImgBox']['scaleY'] = 0x1, this['downCollid' + 'er']['x'] = 0x112, this['leftCollid' + 'er']['x'] = 0x0, this['rightColli' + 'der']['x'] = 0x2d, this['MoveTeaMas' + 'k']['x'] = -0x7b, this['waterChang' + 'eGround']['x'] = 0x112, this['gaiziImg']['visible'] = !0x1, this['gaiziImg']['rotation'] = -0x14, this['SkinBtn']['x'] = 0x0, this['RandomSenc' + 'eMovePos'] = 0x0, this['ShowCupBox']['visible'] = !0x0, this['showCupBg']['visible'] = !0x0, this['ShowCupBox']['centerX'] = 0xfa, this['ShowCupBox']['centerY'] = -0x104, this['showCupTit' + 'le']['visible'] = !0x0, this['gameBox']['scale'](0x1, 0x1), this['gameBox']['x'] = 0x0, this['cupBox']['scale'](0x1, 0x1), _0x26ee17['IsQutoutia' + 'o']() ? this['cupBox']['bottom'] = 0x18e : this['cupBox']['bottom'] = 0x1b6, this['cupBox']['centerX'] = 0x0, this['levelCfg1'] = _0xe0a486['Instance']['getLevelCf' + 'g']([_0x1ae356['Instance']['level'] - 0x1]), this['levelPassC' + 'fg'] = _0xe0a486['Instance']['getPassCfg'](_0x1ae356['Instance']['level'] - 0x1, null), this['createDrop' + 'WaterCnt'] = 0x0, this['LevelName']['text'] = 'LEVEL\x20' + _0x1ae356['Instance']['level'], _0x1ae356['Instance']['IsRandomSc' + 'ene'] && this['loadrandom' + 'Scene'](), this['AllNum'] = 0x0, this['AllwaterNu' + 'm'] = 0x0, this['AlliceNum'] = 0x0;
            for (let _0x4b74c0 = this['levelPassC' + 'fg']['length'] - 0x1; _0x4b74c0 >= 0x0; _0x4b74c0--)
                _0x4b74c0 >= 0x8 ? this['AllwaterNu' + 'm'] += this['levelPassC' + 'fg'][_0x4b74c0] : 0x7 == _0x4b74c0 ? this['AlliceNum'] += this['levelPassC' + 'fg'][_0x4b74c0] : this['AllNum'] += this['levelPassC' + 'fg'][_0x4b74c0];
            this['GoldCnt']['text'] = '' + _0x1ae356['Instance']['gold'], this['BottomBtnC' + 'nt'] = this['levelCfg1']['BtnType']['length'], 0x1 == _0x1ae356['Instance']['level'] && (this['BottomBtnC' + 'nt'] = 0x1);
            let _0x3e484c = _0x1a80c1['drawCupWat' + 'er'](this['levelPassC' + 'fg'][0x8], this['levelPassC' + 'fg'][0xa], this['levelPassC' + 'fg'][0x9]);
            this['showColorF' + 'ilter'](this['levelcolor'], _0x3e484c);
            let _0x163643 = this['levelCfg1']['IceNumber'];
            0x0 == _0x163643 ? (this['IceShow1']['visible'] = !0x1, this['IceShow2']['visible'] = !0x1) : _0x163643 <= 0xb ? (this['IceShow1']['visible'] = !0x0, this['IceShow2']['visible'] = !0x1) : (this['IceShow1']['visible'] = !0x1, this['IceShow2']['visible'] = !0x0), this['drawZZInCu' + 'p'](), this['showBtnLis' + 'tPos'](), this['FailColor1']['graphics']['clear'](), this['FailColor2']['graphics']['clear'](), this['showfailBo' + 'x'](), this['_control']['_started'] = !0x1, this['showZZSDK'](), Laya['stage']['on'](Laya['Event']['CLICK'], this, this['onTipClick']);
        }
        ['initallZZS' + 'DK']() {
        }
        ['showinitZz']() {
            if (_0x1ede3d['Instance']['isOpenSDK']()) {
                this['isget1'] = !0x0;
                let _0xaba44 = _0x26ee17['isLong']() ? 0xc8 : 0xaa;
                this['zzFloat'] || (this['zzFloat'] = _0x1ede3d['Instance']['addFloat'](this['zzsdkBox'], 0x0, _0xaba44)), this['zzYoulike'] || (this['zzYoulike'] = _0x1ede3d['Instance']['addYoulike'](this['zzsdkBox'], _0x5aa295['youlike1'], 0x0));
            }
        }
        ['showshipin' + 'Page']() {
            _0x4ace69['isshowShiP' + 'in'] || _0x1ede3d['Instance']['checkbanne' + 'rreshipin']() && (_0x4ace69['isshowShiP' + 'in'] = !0x0, _0x5d5e4c['Instance']['openUI'](_0xfa1fac['ShiPinView'], { 'se': this }));
        }
        ['showZZSDK']() {
            let _0x16095a = this;
            this['showshipin' + 'Page'](), _0x1ede3d['Instance']['isOpenSDK']() ? (_0x16095a['zzsdkBox']['visible'] = !0x0, _0x16095a['moreGame']['visible'] = _0x1ede3d['Instance']['_validAd'], _0x16095a['zzFloat'] && (_0x16095a['zzFloat']['visible'] = !0x0), _0x16095a['zzYoulike'] && (_0x16095a['zzYoulike']['visible'] = !0x0)) : _0x16095a['zzsdkBox']['visible'] = !0x1;
        }
        ['loadrandom' + 'Scene']() {
            let _0x578614 = Laya['stage']['width'] / 0x2 - 0x84;
            this['RandomSenc' + 'eMovePos'] = _0x578614, this['cupBox']['centerX'] = _0x578614, this['IceGround']['x'] = _0x578614, this['downCollid' + 'er']['x'] = 0x112 + _0x578614, this['leftCollid' + 'er']['x'] = _0x578614, this['rightColli' + 'der']['x'] = 0x2d + _0x578614, this['waterChang' + 'eGround']['x'] = 0x112 + _0x578614, this['LevelName']['text'] = 'CHALLENGE\x20' + this['ChildScene' + 'Cnt'];
            let _0x139c4f = [
                    0x0,
                    0x0,
                    0x0
                ], _0x151a1f = [
                    0x9,
                    0xa,
                    0xb
                ], _0xd25c08 = 0x0, _0x1de3c0 = [], _0x5bdc33 = [
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5,
                    0x6,
                    0x7,
                    0x8
                ], _0x21fc21 = null;
            if (0x1 == this['ChildScene' + 'Cnt'])
                _0x139c4f[Math['floor'](0x3 * Math['random']())] = 0x3c;
            else {
                let _0x122d65 = Math['floor'](0x3 * Math['random']()), _0x486b79 = 0x14 * (Math['floor'](0x2 * Math['random']()) + 0x1);
                0x0 == _0x122d65 && (_0x139c4f[0x1] = _0x486b79, _0x139c4f[0x2] = 0x3c - _0x486b79), 0x1 == _0x122d65 && (_0x139c4f[0x0] = _0x486b79, _0x139c4f[0x2] = 0x3c - _0x486b79), 0x2 == _0x122d65 && (_0x139c4f[0x0] = _0x486b79, _0x139c4f[0x1] = 0x3c - _0x486b79);
            }
            for (let _0x46c7de = 0x0; _0x46c7de < 0x3; _0x46c7de++)
                if (Math['random']() < 0.9) {
                    let _0x51901d = Math['floor'](Math['random']() * _0x5bdc33['length']) + 0x1, _0x2440be = _0x5bdc33[_0x51901d - 0x1];
                    if (_0x151a1f['push'](_0x2440be), 0x8 == _0x2440be)
                        _0xd25c08 = 0xb * (Math['floor'](0x2 * Math['random']()) + 0x1);
                    else {
                        let _0x3c8e6a = {
                            'type': _0x2440be,
                            'num': 0x8 * (Math['floor'](0x2 * Math['random']()) + 0x1)
                        };
                        _0x1de3c0['push'](_0x3c8e6a);
                    }
                    _0x5bdc33['splice'](_0x51901d - 0x1, 0x1);
                }
            _0x21fc21 = {
                'BtnType': _0x151a1f,
                'RedColorNumber': _0x139c4f[0x0],
                'YellowColorNumber': _0x139c4f[0x1],
                'BlueColorNumber': _0x139c4f[0x2],
                'PearlType': _0x1de3c0,
                'IceNumber': _0xd25c08
            }, this['levelCfg1'] = _0x21fc21, this['levelPassC' + 'fg'] = _0xe0a486['Instance']['getPassCfg'](_0x1ae356['Instance']['level'] - 0x1, _0x21fc21);
        }
        ['showfailBo' + 'x']() {
            let _0x5d7774 = this['levelPassC' + 'fg'][0x8], _0x5601ca = this['levelPassC' + 'fg'][0x9], _0x44489e = _0x5d7774 / 0x3c * 0x42, _0x672207 = _0x5601ca / 0x3c * 0x42, _0x29b214 = this['levelPassC' + 'fg'][0xa] / 0x3c * 0x42;
            0x0 == _0x5d7774 ? 0x0 == _0x5601ca ? this['FailColor1']['graphics']['drawRect'](0x0, 0x0, 0x8, _0x29b214, '#007ac2') : (this['FailColor1']['graphics']['drawRect'](0x0, 0x42 - _0x672207, 0x8, _0x672207, '#ffe500'), this['FailColor2']['graphics']['drawRect'](0x0, 0x42 - _0x29b214, 0x8, _0x29b214, '#007ac2')) : 0x0 == _0x5601ca ? (this['FailColor1']['graphics']['drawRect'](0x0, 0x42 - _0x44489e, 0x8, _0x44489e, '#ff0000'), this['FailColor2']['graphics']['drawRect'](0x0, 0x42 - _0x29b214, 0x8, _0x29b214, '#007ac2')) : (this['FailColor1']['graphics']['drawRect'](0x0, 0x42 - _0x44489e, 0x8, _0x44489e, '#ff0000'), this['FailColor2']['graphics']['drawRect'](0x0, 0x42 - _0x672207, 0x8, _0x672207, '#ffe500'));
        }
        ['choseDropI' + 'mgInResult' + 'Eum'](_0x13c3d0) {
            let _0x4b723e = _0x241c4b, _0xa47a16 = 'game/m_bla' + 'ckZZ.png';
            for (let _0x13f3ac = 0x0; _0x13f3ac < _0x4b723e['length']; _0x13f3ac++)
                if (_0x13c3d0 == _0x13f3ac + 0x1)
                    return _0xa47a16 = _0x4b723e[_0x13f3ac];
            return _0xa47a16;
        }
        ['showBtnLis' + 'tPos']() {
            let _0x2c4730 = this['BottomBtnC' + 'nt'];
            if (_0x2c4730 <= 0x3 ? (this['HBox2']['visible'] = !0x1, this['HBox1']['centerY'] = 0x0) : (this['HBox2']['visible'] = !0x0, this['HBox1']['centerY'] = -0x3c, this['HBox2']['centerY'] = 0x32), 0x1 == _0x2c4730) {
                let _0x34f9de = this['levelCfg1']['BtnType'][0x0], _0x817ddf = this['createBtn'](_0x34f9de);
                _0x817ddf['centerX'] = 0x0, this['HBox1']['addChild'](_0x817ddf), this['BottomBtnA' + 'rr']['push'](_0x817ddf);
            }
            0x2 == _0x2c4730 && this['addTwoImag' + 'eInBox'](this['HBox1']), 0x3 == _0x2c4730 && this['addThreeIm' + 'ageInBox'](this['HBox1']), 0x4 == _0x2c4730 && (this['addTwoImag' + 'eInBox'](this['HBox1']), this['addTwoImag' + 'eInBox'](this['HBox2'])), 0x5 == _0x2c4730 && (this['addThreeIm' + 'ageInBox'](this['HBox1']), this['addTwoImag' + 'eInBox'](this['HBox2'])), 0x6 == _0x2c4730 && (this['addThreeIm' + 'ageInBox'](this['HBox1']), this['addThreeIm' + 'ageInBox'](this['HBox2'])), 0x1 == _0x1ae356['Instance']['level'] && this['showfinger'](0x114), 0x2 == _0x1ae356['Instance']['level'] && this['showfinger'](0xb0);
        }
        ['addThreeIm' + 'ageInBox'](_0x8c5fea) {
            let _0x122935, _0x4120ad = !0x1;
            _0x8c5fea == this['HBox2'] && (_0x4120ad = !0x0);
            for (let _0x9defa8 = 0x0; _0x9defa8 < 0x3; _0x9defa8++) {
                _0x122935 = _0x4120ad ? this['levelCfg1']['BtnType'][_0x9defa8 + 0x3] : this['levelCfg1']['BtnType'][_0x9defa8];
                let _0x2e61db = this['createBtn'](_0x122935);
                _0x8c5fea['addChild'](_0x2e61db), this['BottomBtnA' + 'rr']['push'](_0x2e61db), _0x2e61db['centerX'] = 0x0 == _0x9defa8 ? -0xc8 : 0x1 == _0x9defa8 ? 0x0 : 0xc8;
            }
        }
        ['createBtn'](_0x59ae78) {
            if (_0x59ae78 >= 0x9) {
                let _0x1ff70d = Laya['loader']['getRes'](_0x1281fe['RES_BtnMas' + 'k'])['create'](), _0x198617 = _0x1ff70d['getChildBy' + 'Name']('img');
                return _0x1ff70d['dataSource'] = _0x59ae78, _0x198617['skin'] = this['choseImgIn' + 'Eum'](_0x59ae78), _0x1ff70d;
            }
            let _0x1997b4 = new Laya['Image'](), _0x2320d0 = new Laya['Image']();
            return _0x2320d0['skin'] = 'game/m_btn' + 'Bg.png', _0x2320d0['addChild'](_0x1997b4), _0x2320d0['dataSource'] = _0x59ae78, _0x1997b4['skin'] = this['choseImgIn' + 'Eum'](_0x59ae78), _0x1997b4['pos'](7.25, 2.25), _0x2320d0;
        }
        ['choseImgIn' + 'Eum'](_0x1ab48b) {
            let _0x54cbc5 = _0x4c9048, _0x326fb8 = 'game/m_bla' + 'ckZZ.png';
            for (let _0x29a2aa = 0x0; _0x29a2aa < _0x54cbc5['length']; _0x29a2aa++)
                if (_0x1ab48b == _0x29a2aa + 0x1)
                    return _0x326fb8 = _0x54cbc5[_0x29a2aa];
        }
        ['addTwoImag' + 'eInBox'](_0x185f02) {
            let _0x59ddde, _0x3f526a = !0x1, _0x2c804b = this['BottomBtnC' + 'nt'] - 0x2;
            _0x185f02 == this['HBox2'] && (_0x3f526a = !0x0);
            for (let _0x372938 = 0x0; _0x372938 < 0x2; _0x372938++) {
                _0x59ddde = _0x3f526a ? this['levelCfg1']['BtnType'][_0x372938 + _0x2c804b] : this['levelCfg1']['BtnType'][_0x372938];
                let _0x49e02f = this['createBtn'](_0x59ddde);
                _0x185f02['addChild'](_0x49e02f), this['BottomBtnA' + 'rr']['push'](_0x49e02f), _0x49e02f['centerX'] = 0x0 == _0x372938 ? -0x64 : 0x64;
            }
        }
        ['addzzInCup'](_0x172113, _0x221ec7, _0x4aefc5) {
            if (null == _0x172113)
                return;
            let _0x402b5b = _0x172113['type'], _0x5e079f = new Laya['Image']();
            _0x5e079f['skin'] = this['choseDropI' + 'mgInResult' + 'Eum'](_0x402b5b), _0x5e079f['size'](0x8, 0x8), _0x221ec7 <= 0x18 ? (_0x5e079f['centerY'] = 0x1c - 0x8 * Math['floor'](_0x221ec7 / 0x8), _0x5e079f['centerX'] = _0x221ec7 % 0x8 >= 0x4 ? 0x8 * Math['floor'](_0x221ec7 % 0x8 - 0x4) + 0x4 : -0x1 * (0x8 * Math['floor'](_0x221ec7 % 0x8) + 0x4)) : (_0x5e079f['centerY'] = 0x1c - 0x8 * Math['floor']((_0x221ec7 - 0x19) / 0x9 + 0x3), _0x5e079f['centerX'] = (_0x221ec7 - 0x19) % 0x9 > 0x4 ? 0x8 * Math['floor']((_0x221ec7 - 0x19) % 0x9 - 0x4) : 0x8 * Math['floor']((_0x221ec7 - 0x19) % 0x9) * -0x1), this['zzBox']['addChild'](_0x5e079f), this['ShowZZCfg']['push'](_0x5e079f);
        }
        ['drawZZInCu' + 'p']() {
            let _0xd10447 = this['levelCfg1']['PearlType'];
            if (null == _0xd10447 || 0x0 == _0xd10447['length'])
                return;
            let _0x25d1b0 = 0x0, _0x236ad4 = 0x0, _0x4d1acd = 0x0, _0x4e5832 = 0x0, _0x38fe50 = 0x0, _0x1fb14f = Math['min'](0x3, _0xd10447['length']), _0x5a6b95 = null, _0x23342 = null, _0x4ca72f = null;
            for (let _0x5472ae = 0x0; _0x5472ae < _0x1fb14f; _0x5472ae++) {
                let _0x2f45f5 = _0xd10447[_0x5472ae];
                _0x4e5832 += _0x2f45f5['num'], 0x0 == _0x5472ae && (_0x25d1b0 = _0x2f45f5['num'], _0x5a6b95 = _0x2f45f5, _0x38fe50++), 0x1 == _0x5472ae && (_0x236ad4 = _0x2f45f5['num'], _0x23342 = _0x2f45f5, _0x38fe50++), 0x2 == _0x5472ae && (_0x4d1acd = _0x2f45f5['num'], _0x4ca72f = _0x2f45f5, _0x38fe50++);
            }
            for (let _0x2a2503 = 0x0; _0x2a2503 < _0x4e5832; _0x2a2503++) {
                let _0x45d75d = _0x2a2503 % _0x38fe50;
                0x0 == _0x45d75d && (_0x25d1b0 > 0x0 ? (_0x25d1b0--, this['addzzInCup'](_0x5a6b95, _0x2a2503, this['zzBox'])) : _0x236ad4 > 0x0 ? (_0x236ad4--, this['addzzInCup'](_0x23342, _0x2a2503, this['zzBox'])) : (_0x4d1acd--, this['addzzInCup'](_0x4ca72f, _0x2a2503, this['zzBox']))), 0x1 == _0x45d75d && (_0x236ad4 > 0x0 ? (_0x236ad4--, this['addzzInCup'](_0x23342, _0x2a2503, this['zzBox'])) : _0x25d1b0 > 0x0 ? (_0x25d1b0--, this['addzzInCup'](_0x5a6b95, _0x2a2503, this['zzBox'])) : (_0x4d1acd--, this['addzzInCup'](_0x4ca72f, _0x2a2503, this['zzBox']))), 0x2 == _0x45d75d && (_0x4d1acd > 0x0 ? (_0x4d1acd--, this['addzzInCup'](_0x4ca72f, _0x2a2503, this['zzBox'])) : _0x25d1b0 > 0x0 ? (_0x25d1b0--, this['addzzInCup'](_0x5a6b95, _0x2a2503, this['zzBox'])) : (_0x236ad4--, this['addzzInCup'](_0x23342, _0x2a2503, this['zzBox'])));
            }
        }
        ['showColorF' + 'ilter'](_0x161a6c, _0x477c22) {
            var _0x8b2921 = [
                    _0x477c22[0x0] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x477c22[0x1] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    _0x477c22[0x2] / 0xff,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x1,
                    0x0
                ], _0x374e30 = new Laya['ColorFilte' + 'r'](_0x8b2921);
            _0x161a6c['filters'] = [_0x374e30];
        }
        ['uninit']() {
            this['unregieste' + 'rEvent'](), this['timer']['clearAll'](this), this['zzFloat'] && this['zzFloat']['clear'](), this['zzYoulike'] && this['zzYoulike']['clear']();
        }
        ['updateAni']() {
            if (this['ValCnt'] > 0x0)
                return this['ValCnt']--, void (this['ValCnt'] > 0x2d ? (this['TeaImgBox']['scaleX'] += 0x6 * this['Val'], this['TeaImgBox']['scaleY'] -= 0x6 * this['Val2'], this['TeaImgBox']['scaleX'] = Math['min'](this['TeaImgBox']['scaleX'], 0x1 + 0x6 * this['Val'] * 0x1e), this['TeaImgBox']['scaleY'] = Math['max'](this['TeaImgBox']['scaleY'], 0x1 - 0x6 * this['Val2'] * 0x1e)) : (this['TeaImgBox']['scaleX'] -= 0x2 * this['Val'], this['TeaImgBox']['scaleY'] += 0x2 * this['Val2'], this['TeaImgBox']['scaleX'] = Math['max'](this['TeaImgBox']['scaleX'], 0x1), this['TeaImgBox']['scaleY'] = Math['min'](this['TeaImgBox']['scaleY'], 0x1)));
            this['down'] ? (this['TeaImgBox']['x'] -= this['MoveXVal'], this['TeaImgBox']['scaleX'] += 0x2 * this['Val'], this['TeaImgBox']['scaleY'] -= 0x2 * this['Val2'], this['downpos']++, this['downpos'] >= this['goLeft'] && (0x78 != this['goLeft'] && (this['goLeft'] = 0x78), this['down'] = !0x1, this['downpos'] = 0x0)) : (this['downpos']++, this['TeaImgBox']['x'] += this['MoveXVal'], this['TeaImgBox']['scaleX'] -= 0x2 * this['Val'], this['TeaImgBox']['scaleY'] += 0x2 * this['Val2'], this['downpos'] >= this['goLeft'] && (this['down'] = !0x0, this['downpos'] = 0x0));
        }
        ['regiesterE' + 'vent']() {
            _0x4441f7['Instance']['on'](_0x1c0419['RefZZSDKMa' + 'nager'], this, this['initallZZS' + 'DK']), Laya['MouseManag' + 'er']['multiTouch' + 'Enabled'] = !0x1, this['NextBtn']['on'](Laya['Event']['CLICK'], this, this['openZsReul' + 't']), this['SkinBtn']['on'](Laya['Event']['CLICK'], this, this['skinClickH' + 'andle']), this['SignBtn']['on'](Laya['Event']['CLICK'], this, this['SignClickH' + 'andle']), _0x4441f7['Instance']['on'](_0x1c0419['PlayerGood' + 'sUpdate'], this, this['onPlayerGo' + 'odsUpdate']);
        }
        ['onPlayerGo' + 'odsUpdate']() {
            this['GoldCnt']['text'] = '' + _0x1ae356['Instance']['gold'];
        }
        ['unregieste' + 'rEvent']() {
            _0x4441f7['Instance']['off'](_0x1c0419['PlayerGood' + 'sUpdate'], this, this['onPlayerGo' + 'odsUpdate']), (_0x4441f7['Instance']['off'](_0x1c0419['RefZZSDKMa' + 'nager'], this, this['initallZZS' + 'DK']), this['NextBtn']['off'](Laya['Event']['CLICK'], this, this['openZsReul' + 't']), this['SkinBtn']['off'](Laya['Event']['CLICK'], this, this['skinClickH' + 'andle']), this['SignBtn']['off'](Laya['Event']['CLICK'], this, this['SignClickH' + 'andle']));
        }
        ['onSharBtn']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x353499['Instance']['showVideoO' + 'rrShare'](_0x2128f4['HomeShare']);
        }
        ['onTuiBack']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this['zzsdkBox'], _0x5aa295['back3']), _0x5684e2['Instance']['onBack'](_0x5aa295['back3']);
        }
        ['onMoreGame']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['openInterF' + 'ull'](), _0x5684e2['Instance']['onBtn'](_0x5aa295['coin4']);
        }
        ['restGame']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['_control']['restGame']();
        }
        ['openZsReul' + 't']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Result'], {
                'se': this,
                'cot': this['_control']
            });
        }
        ['update']() {
        }
        ['didShow']() {
            this['timer']['once'](0x64, this, this['doShowView']);
        }
        ['didHide']() {
            this['timer']['clear'](this, this['doShowView']);
        }
        ['doShowView']() {
            let _0x19ab2e = this['checkOffli' + 'ne']();
            _0x19ab2e = this['updateSign' + 'Tip'](!_0x19ab2e);
        }
        ['onShowWX']() {
            Laya['timer']['frameOnce'](0x1, this, this['checkOffli' + 'ne']);
        }
        ['checkOffli' + 'ne']() {
            let _0x18eab1 = _0x2c7186['Instance']['getOffline' + 'TimeCoin']();
            return _0x18eab1 > 0x0 && (_0x5d5e4c['Instance']['openUI'](_0xfa1fac['Offline'], {
                'coin': _0x18eab1,
                'se': this
            }), !0x0);
        }
        ['updateSign' + 'Tip'](_0x5ccde0 = !0x0) {
            let _0x262591 = _0xe0a486['Instance']['getSignDay' + 'Info'](), _0x4f89b1 = _0x262591['signed'] > 0x0;
            this['signRed']['visible'] = !_0x4f89b1;
            let _0x222727 = !0x1;
            return _0x262591['show'] && (_0x222727 = !0x0), !(!_0x5ccde0 || _0x222727 || _0x4f89b1 || _0x353499['Instance']['wxCheck']() || _0x4ace69['firstTimeP' + 'layer']) && (_0xe0a486['Instance']['saveAutoSh' + 'owSign'](), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['DaySign'], this), !0x0);
        }
        ['SignClickH' + 'andle']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['DaySign'], this), _0x5684e2['Instance']['onBtn'](_0x5aa295['coin1']);
        }
        ['skinClickH' + 'andle']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Skin'], this), _0x5684e2['Instance']['onBtn'](_0x5aa295['coin2']);
        }
        ['onTipClick']() {
            Laya['stage']['off'](Laya['Event']['CLICK'], this, this['onTipClick']), _0x2d5683['Instance']['playUIClic' + 'k']();
            if (this['_control']['_started']) {
            } else
                platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                    _0x5684e2['Instance']['onNewPlaye' + 'r'](_0x5aa295['level']), this['_control']['startGame'](), this['openBtnInB' + 'ottom'](), this['ResetBtn']['on'](Laya['Event']['CLICK'], this, this['restGame']), this['Ready']['on'](Laya['Event']['CLICK'], this, this['ReadyGame']);
                });
        }
        ['openBtnInB' + 'ottom']() {
            if (0x0 != this['BottomBtnA' + 'rr']['length'])
                for (let _0x1367e3 = 0x0; _0x1367e3 < this['BottomBtnA' + 'rr']['length']; _0x1367e3++) {
                    let _0x777fb6 = this['BottomBtnA' + 'rr'][_0x1367e3]['dataSource'];
                    this['BottomBtnA' + 'rr'][_0x1367e3]['on'](Laya['Event']['MOUSE_DOWN'], this['_control'], this['_control']['onMouseDow' + 'nBtn'], [_0x777fb6]), this['BottomBtnA' + 'rr'][_0x1367e3]['on'](Laya['Event']['MOUSE_UP'], this['_control'], this['_control']['onMouseUpB' + 'tn']);
                }
        }
        ['addChangeW' + 'ater'](_0x3ecde9) {
            let _0x489238 = new Laya['Image']();
            _0x489238['anchorX'] = 0.5, _0x489238['anchorY'] = 0x1, this['ChangeWate' + 'rColor'] != _0x3ecde9 && (this['ChangeWate' + 'rColor'] = _0x3ecde9, this['ChangeWate' + 'rCnt'] = 0x0, this['ChangeWate' + 'rImgCnt']++, this['ChangeWate' + 'rImgArr']['push'](_0x489238)), 0x0 == this['ChangeWate' + 'rCnt'] ? (_0x489238['centerX'] = 0x0, _0x489238['bottom'] = -this['waterChang' + 'eGround']['y'], this['changeColo' + 'rFilter'](_0x3ecde9, _0x489238), this['NextTeaBox']['addChild'](_0x489238), _0x489238['y'] = this['waterChang' + 'eGround']['y'] + 0x127, _0x489238['skin'] = 'game/h_1.p' + 'ng', this['ChangeWate' + 'rCnt']++, this['ChangeWate' + 'rCnt'] = Math['min'](this['ChangeWate' + 'rCnt'], 0x3b)) : (this['ChangeWate' + 'rCnt']++, this['ChangeWate' + 'rCnt'] = Math['min'](this['ChangeWate' + 'rCnt'], 0x3b), this['changeColo' + 'rFilter'](_0x3ecde9, this['ChangeWate' + 'rImgArr'][this['ChangeWate' + 'rImgCnt'] - 0x1]), this['ChangeWate' + 'rImgArr'][this['ChangeWate' + 'rImgCnt'] - 0x1]['y'] = this['waterChang' + 'eGround']['y'] + 0x24a, this['ChangeWate' + 'rImgArr'][this['ChangeWate' + 'rImgCnt'] - 0x1]['skin'] = 'game/h_' + this['ChangeWate' + 'rCnt'] + '.png');
        }
        ['addColorIm' + 'g'](_0x34cecf) {
            this['IceGround']['y'] > -0xf0 && (this['IceGround']['y'] -= 0x5), this['waterChang' + 'eGround']['y'] > -0x12c && this['_addTea'] > 0x9 && (this['waterChang' + 'eGround']['y'] -= 6.5, this['waterChang' + 'eGround']['y'] > -0xfa && (this['MoveXVal'] = 0x0)), this['TeaImg1']['skin'] = 'game/w_' + this['_addTea'] + '.png', this['TeaMaskImg' + '1']['skin'] = 'game/w_' + this['_addTea'] + '.png';
        }
        ['changeColo' + 'rFilter'](_0x12f135, _0x3b64a8) {
            let _0x1514c4;
            switch (_0x12f135) {
            case 0x1:
                _0x1514c4 = [
                    0xff,
                    0x0,
                    0x0
                ];
                break;
            case 0x2:
                _0x1514c4 = [
                    0xff,
                    0xe5,
                    0x0
                ];
                break;
            case 0x3:
                _0x1514c4 = [
                    0x0,
                    0x7a,
                    0xc3
                ];
            }
            this['showColorF' + 'ilter'](_0x3b64a8, _0x1514c4);
        }
        ['closeBtnIn' + 'Bottom']() {
            if (0x0 != this['BottomBtnA' + 'rr']['length']) {
                for (let _0x517a99 = 0x0; _0x517a99 < this['BottomBtnA' + 'rr']['length']; _0x517a99++) {
                    this['BottomBtnA' + 'rr'][_0x517a99]['dataSource'], (this['BottomBtnA' + 'rr'][_0x517a99]['off'](Laya['Event']['MOUSE_DOWN'], this['_control'], this['_control']['onMouseDow' + 'nBtn']), this['BottomBtnA' + 'rr'][_0x517a99]['off'](Laya['Event']['MOUSE_UP'], this['_control'], this['_control']['onMouseUpB' + 'tn']));
                }
                this['Ready']['off'](Laya['Event']['CLICK'], this, this['ReadyGame']), this['ResetBtn']['off'](Laya['Event']['CLICK'], this, this['restGame']);
            }
        }
        ['showfinger'](_0x55ea4a) {
            this['needStop'] = !0x1, this['fingerImg'] = new Laya['Image']('game/Tutor' + 'ialHand.pn' + 'g'), this['fingerImg']['scale'](-0x1, -0x1), this['fingerImg']['pos'](_0x55ea4a, 0x8), this['HBox1']['addChild'](this['fingerImg']), _0x1a80c1['doUp'](this, null, this['fingerImg'], 0x1f4, 0x0, 0x14, 0x0);
        }
        ['showfinger' + '2']() {
            this['needStop'] = !0x1, this['fingerImg2'] = new Laya['Image']('game/Tutor' + 'ialHand.pn' + 'g'), this['fingerImg2']['scale'](-0x1, -0x1), this['fingerImg2']['pos'](0x178, 0x8), this['HBox1']['addChild'](this['fingerImg2']), _0x1a80c1['doUp'](this, null, this['fingerImg2'], 0x1f4, 0x0, 0x14, 0x0);
        }
        ['showfinger' + 'Ready']() {
            this['fingerRead' + 'Img'] = new Laya['Image']('game/Tutor' + 'ialHand.pn' + 'g'), this['fingerRead' + 'Img']['scale'](0x1, 0x1), this['fingerRead' + 'Img']['rotation'] = -0x5a, this['fingerRead' + 'Img']['pos'](0x79, 0x77), this['Ready']['addChild'](this['fingerRead' + 'Img']), _0x1a80c1['doUp'](this, null, this['fingerRead' + 'Img'], 0x1f4, -0x14, 0x0, 0x0);
        }
        ['ReadyGameD' + 'o']() {
            _0x2d5683['Instance']['playSound'](_0xc4e5f6['yaohuang']), _0x5684e2['Instance']['onBtn'](_0x5aa295['coin5']), _0x26ee17['vibrateSho' + 'rt'](), 0x1 != _0x1ae356['Instance']['level'] && 0x2 != _0x1ae356['Instance']['level'] || (this['fingerRead' + 'Img'] && (this['fingerRead' + 'Img']['visible'] = !0x1), this['needStop'] = !0x0), _0x1ae356['Instance']['battleCoun' + 't'] = _0x1ae356['Instance']['battleCoun' + 't'] + 0x1, _0x1ae356['Instance']['dayBattleC' + 'ount'] = _0x1ae356['Instance']['dayBattleC' + 'ount'] + 0x1, Laya['timer']['clear'](this, this['updateAni']), this['closeBtnIn' + 'Bottom'](), this['gaiziImg']['visible'] = !0x0, this['_control']['IsMove'] = !0x1, this['_control']['onMouseUpB' + 'tn'](), this['TeaImgBox']['scale'](0x1, 0x1), this['TeaImgBox']['x'] = 0x82, this['TeaMaskImg' + '1']['pos'](0x5, -0x21), this['TeaMaskImg' + '1']['size'](0xfb, 0x13a), this['TeaMaskImg' + '1']['skin'] = 'game/w_0.p' + 'ng', this['MoveTeaMas' + 'kImg']['pos'](0x78, 0x2b), this['MoveTeaMas' + 'kImg']['size'](0x105, 0x113), this['MoveTeaMas' + 'kImg']['skin'] = 'game/m_cup' + 'le.png', this['_control']['clearrig'](), Laya['timer']['frameLoop'](0x1, this, this['cupRot']), this['_control']['clearGame']();
        }
        ['ReadyGame']() {
            platform['getInstanc' + 'e']()['showInters' + 'titial'](() => {
                _0x5ad2aa['Instance']['resetTempS' + 'kin'](), this['WinTitle']['color'] = '#ffffff', this['WinTitle']['text'] = 'WIN';
                let _0x424316 = !0x1, _0x9056fc = null;
                _0x1ae356['Instance']['level'] >= 0x3 && _0x1ae356['Instance']['level'] % 0x2 == 0x1 && _0x1ede3d['Instance']['checkPiFuE']() && (null == (_0x9056fc = _0x5ad2aa['Instance']['getRandomL' + 'ockSkinCfg']()) || _0x1ae356['Instance']['battleCoun' + 't'] < 0x1 || (_0x424316 = !0x0)), _0x424316 && null != _0x9056fc ? _0x5d5e4c['Instance']['openUI'](_0xfa1fac['TryView'], {
                    'se': this,
                    'skinCfg': _0x9056fc
                }) : this['ReadyGameD' + 'o']();
            });
        }
        ['choseImgIn' + 'ResultEum'](_0x1fa0f8) {
            let _0x340a96 = _0x1864af, _0x3ed71e = 'game/m_bla' + 'ckZZ.png';
            for (let _0x18cf5d = 0x0; _0x18cf5d < _0x340a96['length']; _0x18cf5d++)
                if (_0x1fa0f8 == _0x18cf5d + 0x1)
                    return _0x3ed71e = _0x340a96[_0x18cf5d];
            return _0x3ed71e;
        }
        ['cupRot']() {
            this['gaiziImg']['rotation'] < 0x0 ? this['gaiziImg']['rotation']++ : (this['movetime']++, this['movetime'] > 0x28 ? this['ResultColo' + 'r']() : this['startReady'] ? (this['cupBox']['rotation'] += 1.5, this['leftCollid' + 'er']['rotation'] += 1.5, this['rightColli' + 'der']['rotation'] += 1.5, this['downCollid' + 'er']['rotation'] += 1.5, this['IceGround']['rotation'] += 1.5, this['cupBox']['rotation'] > 0x3 && (this['startReady'] = !0x1)) : (this['cupBox']['rotation'] -= 1.5, this['leftCollid' + 'er']['rotation'] -= 1.5, this['rightColli' + 'der']['rotation'] -= 1.5, this['downCollid' + 'er']['rotation'] -= 1.5, this['IceGround']['rotation'] -= 1.5, this['cupBox']['rotation'] < -0x3 && (this['startReady'] = !0x0)));
        }
        ['ResultColo' + 'r']() {
            this['NextBtn']['centerY'] = 0x190, Laya['timer']['clear'](this, this['cupRot']), this['gaiziImg']['rotation'] = -0x14;
            let _0x50aca9 = 0x0, _0x17055d = 0x0, _0x4fd338 = 0.2, _0x232905 = 0x0, _0x3446fa = 0x0, _0x35e334 = 0x0, _0x5c35cb = 0x0, _0x122e20 = 0x0, _0xa56843 = 0x0, _0x1e196e = 0x0, _0x2149ea = 0x0, _0x4058cd = 0x0, _0x2d1486 = 0x0, _0x160592 = 0x0, _0x2d1ae4 = 0x0, _0x36f8e4 = !0x1;
            this['movetime'] = 0x0, this['showCupBg']['visible'] = !0x1, this['cupBox']['rotation'] = 0x0, this['leftCollid' + 'er']['rotation'] = -0x8, this['rightColli' + 'der']['rotation'] = 0x9, this['downCollid' + 'er']['rotation'] = 0x5a, this['IceGround']['rotation'] = 0x0;
            for (let _0x4814c0 = this['_control']['GameDate']['length'] - 0x1; _0x4814c0 > 0x0; _0x4814c0--)
                0x1 === this['_control']['GameDate'][_0x4814c0]['type'] && (0x1 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x3446fa++, 0x2 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x5c35cb++, 0x3 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x35e334++), 0x2 === this['_control']['GameDate'][_0x4814c0]['type'] && (0x1 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x122e20++, 0x2 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0xa56843++, 0x3 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x4058cd++, 0x4 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x1e196e++, 0x5 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x2149ea++, 0x6 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x160592++, 0x7 == this['_control']['GameDate'][_0x4814c0]['chilidtype'] && _0x2d1ae4++), 0x3 === this['_control']['GameDate'][_0x4814c0]['type'] && _0x2d1486++;
            this['ResultCfg'] = [
                _0x122e20,
                _0xa56843,
                _0x4058cd,
                _0x1e196e,
                _0x2149ea,
                _0x160592,
                _0x2d1ae4,
                _0x2d1486,
                _0x3446fa,
                _0x5c35cb,
                _0x35e334
            ];
            let _0x81b109 = _0x1a80c1['drawCupWat' + 'er'](_0x3446fa, _0x35e334, _0x5c35cb);
            _0x81b109[0x0] == this['levelPassC' + 'fg'][0x8] && _0x81b109[0x1] == this['levelPassC' + 'fg'][0xa] && _0x81b109[0x2] == this['levelPassC' + 'fg'][0x9] && this['_addTea'] >= 0x2a && (_0x36f8e4 = !0x0);
            for (let _0x309450 = this['BottomBtnC' + 'nt']; _0x309450 > 0x0; _0x309450--) {
                let _0x251720 = this['BottomBtnA' + 'rr'][_0x309450 - 0x1]['dataSource'];
                _0x232905 += 0x64 * (_0x4fd338 = _0x251720 >= 0x9 ? 0.8 : 0.2), 0x0 == this['levelPassC' + 'fg'][_0x251720 - 0x1] ? this['ResultCfg'][_0x251720 - 0x1] > 0x8 ? _0x50aca9 += 0x0 : _0x50aca9 += 0x64 * _0x4fd338 : ((_0x17055d = 0x64 - Math['abs'](Math['floor']((this['ResultCfg'][_0x251720 - 0x1] - this['levelPassC' + 'fg'][_0x251720 - 0x1]) / this['levelPassC' + 'fg'][_0x251720 - 0x1] * 0x64))) < 0x0 && (_0x17055d = 0x14), _0x36f8e4 && _0x251720 >= 0x9 && (_0x17055d = Math['max'](_0x17055d, 0x50)), _0x50aca9 += _0x17055d * _0x4fd338);
            }
            let _0x378ce9 = Math['floor'](_0x50aca9 / _0x232905 * 0x64);
            _0x1ae356['Instance']['level'] <= 0xa && !_0x1ae356['Instance']['IsRandomSc' + 'ene'] && (_0x378ce9 += 0x14, _0x378ce9 = Math['min'](_0x378ce9, 0x64));
            let _0x22c183 = this['Resultrank'](_0x378ce9);
            if (this['rankcfg'] = _0x22c183, this['NextTeaBox']['removeChil' + 'dren'](), this['ChangeWate' + 'rImgArr']['length'] > 0x0) {
                for (let _0x324d6f = this['ChangeWate' + 'rImgArr']['length'] - 0x1; _0x324d6f > 0x0; _0x324d6f--)
                    this['ChangeWate' + 'rImgArr'][_0x324d6f]['destroy']();
                this['ChangeWate' + 'rImgArr'] = [];
            }
            this['MainBox']['visible'] = !0x1, this['ResultBox']['visible'] = !0x0, _0x1ede3d['Instance']['isOpenSDK']() && (this['zzFloat'] && (this['zzFloat']['visible'] = !0x1), this['moreGame']['visible'] = !0x1, this['zzYoulike'] && (this['zzYoulike']['visible'] = !0x0)), _0x22c183['rank'] <= 0x6 ? (_0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), this['firstGame'] = !0x0, _0x1ae356['Instance']['IsRandomSc' + 'ene'] ? (this['ChildScene' + 'Cnt'] < 0x4 ? (_0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': 0xfa * this['ChildScene' + 'Cnt'] + 0xfa }), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Rand'], {
                'se': this,
                'cot': this['_control']
            }), this['ChildScene' + 'Cnt']++) : (_0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': 0xfa * this['ChildScene' + 'Cnt'] + 0xfa }), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['Rand'], {
                'se': this,
                'cot': this['_control']
            }), this['ChildScene' + 'Cnt'] = 0x0, _0x1ae356['Instance']['IsRandomSc' + 'ene'] = !0x1), this['MainBox']['visible'] = !0x0, this['ResultBox']['visible'] = !0x1) : this['showWinRes' + 'ultBoxView'](_0x22c183), _0x2d5683['Instance']['playSound'](_0xc4e5f6['victory'])) : (_0x2d5683['Instance']['playSound'](_0xc4e5f6['Fail']), this['showResult' + 'BoxView'](_0x378ce9)), _0x3446fa + _0x35e334 + _0x5c35cb != 0x0 && (this['TeaImg1']['skin'] = 'game/w_' + this['_addTea'] + '.png', this['showColorF' + 'ilter'](this['TeaImg1'], _0x81b109));
        }
        ['showWinRes' + 'ultBoxView' + 'Do'](_0x319186, _0x4f4249 = null, _0x1f8c61 = 0x0) {
            let _0xe2e7e6 = (Laya['stage']['height'] - 0x166) / 0x2 - 0xf8;
            this['LostBox']['visible'] = !0x1, Laya['Tween']['to'](this['cupBox'], {
                'centerX': 0x0,
                'bottom': _0xe2e7e6 + 0x116
            }, 0x1f4), this['WinBox']['visible'] = !0x0;
            let _0x5959a2 = _0x1ae356['Instance']['level'];
            this['ResultLeve' + 'l']['text'] = 'LEVEL\x20' + _0x5959a2, this['ShowCupBox']['visible'] = !0x1, this['ResultGold']['text'] = '' + _0x1ae356['Instance']['gold'], this['ResultRank']['text'] = 'GRADE\x20' + _0x319186['name'], this['ResultAddG' + 'old']['text'] = '+' + _0x319186['gold'];
            let _0x5a95d7 = _0x5959a2 % 0x5;
            this['showWinLev' + 'el'](_0x5a95d7), this['OrderUpgra' + 'deGlod']['visible'] = !0x1, this['OrderUpgra' + 'deTitle']['visible'] = !0x1, null != _0x4f4249 && (this['WinTitle']['color'] = '#690a09', _0x4f4249 ? (this['NextBtn']['centerY'] = 0x190, this['OrderUpgra' + 'deGlod']['visible'] = !0x0, this['OrderUpgra' + 'deTitle']['visible'] = !0x0, this['rankcfg']['gold'] += _0x1f8c61, this['OrderUpgra' + 'deGlod']['text'] = '+' + _0x1f8c61['toString'](), this['WinTitle']['text'] = '订单升级成功', this['WinTitle']['color'] = '#690a09') : this['WinTitle']['text'] = '订单升级失败'), this['ResultImg']['width'] = 0x1 == _0x5a95d7 ? 0x0 : 0x0 == _0x5a95d7 ? 0x118 : 0x28 + 0x50 * (_0x5a95d7 - 0x2), ++_0x5959a2 % 0x5 == 0x1 && (_0x1ae356['Instance']['IsRandomSc' + 'ene'] = !0x0);
            for (let _0x53d096 = 0x1; _0x53d096 <= 0x3; _0x53d096++)
                this['KeyCnt'] >= _0x53d096 ? this['resultkey' + _0x53d096]['skin'] = 'game/m_gol' + 'd.png' : this['resultkey' + _0x53d096]['skin'] = 'game/m_gra' + 'y.png';
            Laya['timer']['once'](0x1f4, this, function () {
                _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'level': 0x1 });
            });
        }
        ['showWinRes' + 'ultBoxView'](_0x11a01d) {
            _0x1ae356['Instance']['level'] >= 0x2 && _0x1ae356['Instance']['level'] % 0x2 == 0x0 && _0x128589['Instance']['checkShowE' + 'ggView']() ? _0x5d5e4c['Instance']['openUI'](_0xfa1fac['EggView'], {
                'se': this,
                'rank': _0x11a01d
            }) : this['showWinRes' + 'ultBoxView' + 'Do'](_0x11a01d);
        }
        ['showWinLev' + 'el'](_0x4237b5) {
            0x0 == _0x4237b5 && (_0x4237b5 = 0x5), this['WinLevel5l' + 'ight']['visible'] = !0x1, this['WinLevel5b' + 'ox']['skin'] = 'game/chess' + 'brut.png';
            for (let _0x3ea115 = 0x2; _0x3ea115 <= 0x4; _0x3ea115++)
                this['WinLevel' + _0x3ea115]['visible'] = _0x4237b5 > _0x3ea115 - 0x1;
            _0x4237b5 > 0x4 && (this['WinLevel5l' + 'ight']['visible'] = !0x0, this['WinLevel5b' + 'ox']['skin'] = 'game/chess' + 'brut_opene' + 'd.png');
        }
        ['showResult' + 'BoxView'](_0x97a2f6) {
            _0x1ae356['Instance']['IsRandomSc' + 'ene'] ? (_0x1ae356['Instance']['IsRandomSc' + 'ene'] = !0x1, this['ChildScene' + 'Cnt'] = 0x1) : this['firstGame'] = !0x1, this['WinBox']['visible'] = !0x1, this['LostBox']['visible'] = !0x0, this['ResultLost' + 'Match']['text'] = 'Similarity' + ':' + _0x97a2f6 + '%';
            let _0x5037e8 = this['BottomBtnC' + 'nt'];
            this['ShowCupBox']['centerX'] = 0x96, this['ShowCupBox']['centerY'] = -0x1cc;
            let _0x95e5b4 = Laya['stage']['height'] / 0x2 - 0x1cc + 0x64 - 0xa;
            this['showCupTit' + 'le']['visible'] = !0x1;
            let _0x2531e1 = Laya['stage']['height'] - _0x95e5b4 - 0xf8;
            this['NextLabel']['visible'] = !0x0, this['StarBox']['visible'] = !0x1, Laya['Tween']['to'](this['cupBox'], {
                'scaleX': 0.4,
                'scaleY': 0.4,
                'bottom': _0x2531e1 + 0xf8,
                'centerX': -0x96
            }, 0x1), Laya['timer']['once'](0x1, this, function () {
                if (_0x5037e8 <= 0x3)
                    for (let _0xdcdf98 = _0x5037e8; _0xdcdf98 > 0x0; _0xdcdf98--) {
                        let _0x374491 = this['_control']['longResult']['create'](), _0x21713c = this['BottomBtnA' + 'rr'][_0xdcdf98 - 0x1]['dataSource'];
                        _0x374491['getCompone' + 'nt'](_0x744308)['showReult'](_0x21713c, this), this['showResult' + 'Box']['addChild'](_0x374491), _0x374491['centerX'] = 0x0, 0x1 == _0x5037e8 && (_0x374491['centerY'] = 0x0), 0x2 == _0x5037e8 && (_0x374491['centerY'] = 0x50 * (0x2 * _0xdcdf98 - 0x3)), 0x3 == _0x5037e8 && (_0x374491['centerY'] = 0x78 * (_0xdcdf98 - 0x2));
                    }
                else
                    for (let _0x328543 = _0x5037e8; _0x328543 > 0x0; _0x328543--) {
                        let _0x3cc211 = this['_control']['shortResul' + 't']['create'](), _0x1c2fe3 = this['BottomBtnA' + 'rr'][_0x328543 - 0x1]['dataSource'];
                        _0x3cc211['getCompone' + 'nt'](_0x27fb72)['showReult'](_0x1c2fe3, this), this['showResult' + 'Box']['addChild'](_0x3cc211), _0x3cc211['centerX'] = -0x96 * (_0x328543 % 0x2 * 0x2 - 0x1) + 0x5, _0x3cc211['centerY'] = 0x4 == _0x5037e8 ? 0x50 * (0x2 * Math['floor']((_0x328543 - 0x1) / 0x2) - 0x1) : 0x78 * (Math['floor']((_0x328543 - 0x1) / 0x2) - 0x1);
                    }
            });
        }
        ['Resultrank'](_0x5c168d) {
            let _0x460faa = 0x0, _0x225274 = '', _0x28be2e = _0x5c168d;
            return _0x5c168d > 0x5f ? (_0x460faa = 0x1, _0x225274 = 'S+', _0x28be2e = 0x136) : _0x5c168d > 0x5c ? (_0x460faa = 0x2, _0x225274 = 'S', _0x28be2e = 0x10e) : _0x5c168d > 0x59 ? (_0x460faa = 0x3, _0x225274 = 'S-', _0x28be2e = 0xf0) : _0x5c168d > 0x56 ? (_0x460faa = 0x4, _0x225274 = 'A+', _0x28be2e = 0xd2) : _0x5c168d > 0x53 ? (_0x460faa = 0x5, _0x225274 = 'A', _0x28be2e = 0xb4) : _0x5c168d >= 0x50 ? (_0x460faa = 0x6, _0x225274 = 'A-', _0x28be2e = 0x96) : _0x5c168d > 0x46 ? (_0x460faa = 0x7, _0x225274 = 'B') : _0x5c168d > 0x3c ? (_0x460faa = 0x8, _0x225274 = 'C') : _0x5c168d > 0x32 ? (_0x460faa = 0x9, _0x225274 = 'D') : _0x5c168d > 0x28 ? (_0x460faa = 0xa, _0x225274 = 'E') : (_0x460faa = 0xb, _0x225274 = 'F'), {
                'rank': _0x460faa,
                'name': _0x225274,
                'gold': _0x28be2e,
                'val': _0x5c168d
            };
        }
        ['createKeyB' + 'ox'](_0x3a4606) {
            this['flyKey']['visible'] = !0x0, this['flyKey']['skin'] = 0x0 == _0x3a4606 ? 'game/chess' + 'Key.png' : 'game/gold2' + '.png', this['flyKey']['on']('click', this, this['addflyBox'], [_0x3a4606]);
        }
        ['showKeyBox']() {
            for (let _0x1d5f01 = 0x1; _0x1d5f01 <= 0x3; _0x1d5f01++)
                this['KeyCnt'] >= _0x1d5f01 ? this['key' + _0x1d5f01]['skin'] = 'game/chess' + 'Key.png' : this['key' + _0x1d5f01]['skin'] = 'game/chess' + 'Key2.png';
        }
        ['addflyBox'](_0x3d9268) {
            this['_control']['ShowKeyBox'] = !0x1;
            let _0x501d1e = this;
            0x0 == _0x3d9268 && (this['KeyCnt']++, this['KeyCnt'] = Math['min'](this['KeyCnt'], 0x3), Laya['Tween']['to'](this['flyKey'], {
                'x': this['key' + this['KeyCnt']]['x'] + 0x77,
                'y': this['key' + this['KeyCnt']]['y']
            }, 0x1f4, null, Laya['Handler']['create'](null, function () {
                _0x501d1e['showKeyBox'](), _0x501d1e['flyKey']['visible'] = !0x1;
            })));
        }
    }
    class _0x5a0b91 {
        constructor(_0x1145bc) {
            this['gameobject'] = null, this['isUnlock'] = !0x1, this['_info'] = null, this['_selected'] = null, this['_icon'] = null, this['_mask'] = null, this['_info'] = _0x1145bc;
            let _0x4c87e7 = Laya['loader']['getRes'](_0x1281fe['RES_SkinIt' + 'em']);
            this['gameobject'] = _0x4c87e7['create'](), this['_selected'] = this['gameobject']['getChildBy' + 'Name']('Selected'), this['_icon'] = this['gameobject']['getChildBy' + 'Name']('icon'), this['_mask'] = this['gameobject']['getChildBy' + 'Name']('skinMask'), this['_icon']['skin'] = _0x1145bc['ResIcon'], this['gameobject']['on'](Laya['Event']['CLICK'], this, this['onClickHan' + 'dle']), this['updateData'](_0x1145bc['Id']);
        }
        ['setPos'](_0x423d8a, _0x181777) {
            this['gameobject']['pos'](_0x423d8a, _0x181777, !0x0);
        }
        ['onClickHan' + 'dle']() {
            _0x4441f7['Instance']['event'](_0x1c0419['Skin_Click' + 'Item'], [
                this['_info'],
                this['isUnlock']
            ]);
        }
        ['updateData'](_0x46e254) {
            var _0x20e5ff = _0x5ad2aa['Instance']['getItemCfg'](_0x46e254);
            this['isUnlock'] = _0x5ad2aa['Instance']['getSkinInf' + 'o'](_0x20e5ff['Id']), this['isUnlock'] ? this['_mask']['visible'] = !0x1 : this['_mask']['visible'] = !0x0;
        }
        ['showSelect' + 'ed'](_0x290594) {
            this['_selected']['visible'] = _0x290594;
        }
        ['destroy']() {
            this['gameobject']['off'](Laya['Event']['CLICK'], this, this['onClickHan' + 'dle']), this['gameobject']['removeSelf']();
        }
    }
    class _0x4a5389 extends Laya['Script'] {
        constructor() {
            super(), this['_newIndex'] = -0x1, this['_space'] = 0x0, this['_startX'] = 0x0, this['_initX'] = 0x0, this['_startInde' + 'x'] = 0x0, this['dragFlag'] = !0x1, this['isHasBox'] = null, this['dragBox'] = null, this['_maxIndex'] = 0x3, this['gameObject'] = null, this['downFlag'] = null, this['_firstX'] = null, this['_offX'] = null;
        }
        ['onEnable']() {
        }
        ['addEvent'](_0x1e88f7 = !0x0) {
            this['isHasBox'] = _0x1e88f7, _0x1e88f7 ? (this['dragBox']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nHandle']), this['dragBox']['on'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpH' + 'andle']), this['dragBox']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eHandle'])) : (Laya['stage']['on'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nHandle']), Laya['stage']['on'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpH' + 'andle']), Laya['stage']['on'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eHandle']));
        }
        ['init'](_0x422f4a) {
            this['_space'] = _0x422f4a['space'], this['_startX'] = _0x422f4a['startX'], this['_startInde' + 'x'] = _0x422f4a['startIndex'], this['_maxIndex'] = _0x422f4a['len'] - 0x1, this['_newIndex'] = _0x422f4a['curIndex'], this['dragBox'] = _0x422f4a['dragBox'], this['gameObject'] = this['owner'], this['bouceBack'](!0x1);
        }
        ['onMouseDow' + 'nHandle']() {
            this['downFlag'] = !0x0, this['_firstX'] = Laya['stage']['mouseX'], this['_initX'] = this['_firstX'];
        }
        ['onMouseMov' + 'eHandle']() {
            this['downFlag'] && (this['_offX'] = Laya['stage']['mouseX'] - this['_firstX'], this['drag'](this['_offX']), this['_firstX'] = Laya['stage']['mouseX']);
        }
        ['onMouseUpH' + 'andle']() {
            this['_firstX'] - this['_initX'] > 0x1 ? (this['_newIndex']--, this['dragFlag'] = !0x0) : this['_firstX'] - this['_initX'] < -0x1 ? (this['dragFlag'] = !0x0, this['_newIndex']++) : this['dragFlag'] = !0x1, this['_newIndex'] = _0x1a80c1['Clamp'](this['_newIndex'], this['_startInde' + 'x'], this['_maxIndex']), this['bouceBack'](), this['downFlag'] = !0x1;
        }
        ['drag'](_0x270a19) {
            this['gameObject']['x'] += _0x270a19;
        }
        ['bouceBack'](_0x5f3726 = !0x0) {
            _0x5f3726 ? Laya['Tween']['to'](this['gameObject'], { 'x': this['_startX'] + this['_newIndex'] * this['_space'] * -0x1 }, 0x64) : this['gameObject']['x'] = this['_startX'] + this['_newIndex'] * this['_space'] * -0x1, _0x4441f7['Instance']['event'](_0x1c0419['Switch_Pag' + 'e'], [
                this['_newIndex'],
                this['dragFlag']
            ]);
        }
        ['removeEven' + 't']() {
            this['isHasBox'] ? (this['dragBox']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nHandle']), this['dragBox']['off'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpH' + 'andle']), this['dragBox']['off'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eHandle'])) : (Laya['stage']['off'](Laya['Event']['MOUSE_DOWN'], this, this['onMouseDow' + 'nHandle']), Laya['stage']['off'](Laya['Event']['MOUSE_UP'], this, this['onMouseUpH' + 'andle']), Laya['stage']['off'](Laya['Event']['MOUSE_MOVE'], this, this['onMouseMov' + 'eHandle']));
        }
    }
    class _0x8855f6 extends _0x3a0bc3['SkinUI'] {
        constructor(_0x4e7291) {
            super(), this['_randomId'] = 0x0, this['_skinDrag'] = null, this['_skinMap'] = [], this['_skinPageA' + 'rr'] = [], this['_skinItemA' + 'rr'] = [], this['_curPage'] = 0x0, this['_preSelect' + 'Id'] = 0x0, this['_dragFlag'] = null, this['_pageArr'] = [], this['zzYoulike'] = null, this['_scene'] = null;
        }
        ['init'](_0x30e1e9) {
            this['_scene'] = _0x30e1e9, this['initView'](), this['regiesterE' + 'vent']();
        }
        ['regiesterE' + 'vent']() {
            this['unlockbtn']['on'](Laya['Event']['CLICK'], this, this['unlockClic' + 'kHandle']), this['closebtn']['on'](Laya['Event']['CLICK'], this, this['closeClick' + 'Handle']), _0x4441f7['Instance']['on'](_0x1c0419['Switch_Pag' + 'e'], this, this['switchPage' + 'Handle']), _0x4441f7['Instance']['on'](_0x1c0419['Skin_Click' + 'Item'], this, this['skinClickH' + 'andle']);
        }
        ['unregieste' + 'rEvent']() {
            _0x4441f7['Instance']['off'](_0x1c0419['Switch_Pag' + 'e'], this, this['switchPage' + 'Handle']), _0x4441f7['Instance']['off'](_0x1c0419['Skin_Click' + 'Item'], this, this['skinClickH' + 'andle']), this['unlockbtn']['off'](Laya['Event']['CLICK'], this, this['unlockClic' + 'kHandle']), this['closebtn']['off'](Laya['Event']['CLICK'], this, this['closeClick' + 'Handle']);
        }
        ['uninit']() {
            Laya['timer']['clearAll'](this), this['unregieste' + 'rEvent']();
        }
        ['onTuiBack']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this['zzsdkBox'], _0x5aa295['back5']), _0x5684e2['Instance']['onBack'](_0x5aa295['back5']);
        }
        ['refglod']() {
            this['coinCount']['text'] = _0x1a80c1['ScoreToStr' + 'ing'](_0x1ae356['Instance']['gold']);
        }
        ['initView']() {
            this['refglod'](), this['_skinDrag'] = this['addItemInf' + 'o'](this['skinobj'], this['_skinMap'], this['_skinPageA' + 'rr']), this['switchTabV' + 'iew']();
            var _0x35265a = _0x26ee17['isLong']() ? 0x50 : 0x19;
            if (this['zzsdkBox']['visible'] = !0x1, _0x1ede3d['Instance']['isOpenSDK']()) {
                this['zzsdkBox']['visible'] = !0x0;
                let _0x35eaac = Laya['stage']['height'] / 0x2 + (_0x26ee17['isLong']() ? 0x230 : 0x1a4);
                this['zzYoulike'] = _0x1ede3d['Instance']['addYoulike'](this['zzsdkBox'], _0x5aa295['youlike3'], _0x35eaac);
            } else
                this['zzsdkBox']['visible'] = !0x1;
            this['window']['top'] = 0xda - (0x9b - (_0x35265a + 0x46));
        }
        ['unlockClic' + 'kHandle']() {
            if (_0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ae356['Instance']['gold'] < parseInt(this['unlockCoin']['text']))
                _0x5d5e4c['Instance']['showTips']('Coin\x20is\x20no' + 't\x20enough'), _0x5d5e4c['Instance']['openUI'](_0xfa1fac['GoldView'], this);
            else {
                this['unlockbtn']['mouseEnabl' + 'ed'] = !0x1, this['closebtn']['mouseEnabl' + 'ed'] = !0x1, _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': -parseInt(this['unlockCoin']['text']) }), this['coinCount']['text'] = _0x1a80c1['ScoreToStr' + 'ing'](_0x1ae356['Instance']['gold']), this['_scene']['GoldCnt']['text'] = '' + _0x1ae356['Instance']['gold'];
                var _0x8fc51c = this['getUnlockI' + 'ndex']();
                this['_skinDrag']['removeEven' + 't'](), Laya['timer']['loop'](0xc8, this, this['randomItem'], [_0x8fc51c]), _0x8fc51c['length'] > 0x1 ? Laya['timer']['once'](0xbb8, this, this['stopRandom' + 'Timer'], [_0x8fc51c]) : Laya['timer']['once'](0x12c, this, this['stopRandom' + 'Timer'], [_0x8fc51c]), _0x5684e2['Instance']['onCark']();
            }
        }
        ['randomItem'](_0xfe929c) {
            this['_randomId']++, this['_randomId'] >= _0xfe929c['length'] && (this['_randomId'] = 0x0);
            var _0x553d79 = _0xfe929c[this['_randomId']] % 0x9 - 0x1;
            _0xfe929c[this['_randomId']] % 0x9 == 0x0 && (_0x553d79 = 0x8), this['setSelectI' + 'conPos'](_0x553d79);
        }
        ['stopRandom' + 'Timer'](_0x2e70cf) {
            Laya['timer']['clear'](this, this['randomItem']), Laya['timer']['clear'](this, this['stopRandom' + 'Timer']);
            var _0x1943e0 = _0x2e70cf[_0x1a80c1['random'](0x0, _0x2e70cf['length'] - 0x1)];
            _0x5ad2aa['Instance']['setSkinInf' + 'o'](_0x1943e0, !0x0), this['_skinMap'][_0x1943e0] && this['_skinMap'][_0x1943e0]['updateData'](_0x1943e0), this['_skinDrag']['addEvent'](!0x1), this['unlockbtn']['mouseEnabl' + 'ed'] = !0x0, this['closebtn']['mouseEnabl' + 'ed'] = !0x0, this['selectIcon']['visible'] = !0x1, _0x2d5683['Instance']['playSound'](_0xc4e5f6['success']), this['skinClickH' + 'andle']({ 'Id': _0x1943e0 }, !0x0), this['switchPage' + 'Handle'](this['_curPage'], !0x1);
        }
        ['setSelectI' + 'conPos'](_0x41947f) {
            var _0xc5cf75 = _0x41947f % 0x3, _0xb16df1 = parseInt((_0x41947f / 0x3)['toString']());
            this['selectIcon']['pos'](0xc8 * _0xc5cf75 + 0x1c, 0xc8 * _0xb16df1 + 0x89), this['selectIcon']['visible'] = !0x0;
        }
        ['getUnlockI' + 'ndex']() {
            var _0x243e11 = [], _0x4d8720 = 0x9 * this['_curPage'] + 0x1, _0x37bacb = 0x9 * (this['_curPage'] + 0x1), _0x67c71e = this['_skinMap'], _0x444cab = null;
            for (let _0x2c2cac = _0x4d8720; _0x2c2cac <= _0x37bacb; _0x2c2cac++)
                _0x67c71e[(_0x444cab = _0x5ad2aa['Instance']['getItemCfg'](_0x2c2cac))['Id']]['isUnlock'] || _0x243e11['push'](_0x444cab['Id']);
            return _0x243e11;
        }
        ['skinClickH' + 'andle'](_0xc104ef, _0x482f5d) {
            _0x482f5d ? (this['_skinMap'][this['_preSelect' + 'Id']]['showSelect' + 'ed'](!0x1), this['_skinMap'][_0xc104ef['Id']]['showSelect' + 'ed'](!0x0), this['_preSelect' + 'Id'] = _0xc104ef['Id'], _0x5ad2aa['Instance']['curSkin'] = _0xc104ef['Id']) : this['_dragFlag'];
        }
        ['addItemInf' + 'o'](_0x2a673d, _0x54c8a4, _0x21f1f2) {
            var _0x17b5d0 = _0xe0a486['Instance']['itemsConfi' + 'gData'], _0xb435b2 = _0x17b5d0['length'] / 0x9, _0x19842c = 0x0;
            for (let _0x540d8a = 0x0; _0x540d8a < _0xb435b2; _0x540d8a++) {
                var _0x3452ff = new Laya['Sprite']();
                _0x2a673d['addChild'](_0x3452ff), _0x3452ff['pos'](0x2bc * _0x540d8a, 0x0, !0x0);
                for (let _0x56bd63 = 0x0; _0x56bd63 < 0x3; _0x56bd63++)
                    for (let _0x37b048 = 0x0; _0x37b048 < 0x3; _0x37b048++)
                        if (_0x19842c < _0x17b5d0['length']) {
                            var _0x4f606a = new _0x5a0b91(_0x17b5d0[_0x19842c]);
                            _0x4f606a['setPos'](0xc8 * _0x37b048, 0xc8 * _0x56bd63), _0x3452ff['addChild'](_0x4f606a['gameobject']), _0x54c8a4[_0x17b5d0[_0x19842c]['Id']] = _0x4f606a, this['_skinItemA' + 'rr']['push'](_0x4f606a), _0x19842c++;
                        }
            }
            for (let _0x593126 = 0x0; _0x593126 < _0xb435b2; _0x593126++) {
                var _0x1f85c1 = new Laya['Image'](0x0 == _0x593126 ? 'game/skin_' + 'dot1.png' : 'game/skin_' + 'dot2.png');
                _0x21f1f2['push'](_0x1f85c1);
            }
            var _0x2d96de = _0x2a673d['addCompone' + 'nt'](_0x4a5389);
            return _0x2d96de['init']({
                'len': _0xb435b2,
                'space': 0x2bc,
                'startX': _0x2a673d['x'],
                'startIndex': 0x0,
                'curIndex': 0x0
            }), _0x2d96de;
        }
        ['switchPage' + 'Handle'](_0x4f1e55, _0x24e027) {
            this['_curPage'] = _0x4f1e55, this['_dragFlag'] = _0x24e027;
            for (let _0x35373e = 0x0; _0x35373e < this['_pageArr']['length']; _0x35373e++)
                this['_pageArr'][_0x35373e]['skin'] = _0x35373e == _0x4f1e55 ? 'game/skin_' + 'dot1.png' : 'game/skin_' + 'dot2.png';
            if (this['getUnlockI' + 'ndex']()['length'] > 0x0) {
                this['unlockbtn']['visible'] = !0x0;
                var _0x571ea6 = 0x3e8;
                switch (_0x4f1e55) {
                case 0x1:
                    _0x571ea6 = 0xbb8;
                    break;
                case 0x2:
                    _0x571ea6 = 0x1770;
                }
                this['unlockCoin']['text'] = _0x571ea6['toString']();
            } else
                this['unlockbtn']['visible'] = !0x1;
        }
        ['switchTabV' + 'iew']() {
            this['pageObj']['removeChil' + 'dren'](0x0, this['pageObj']['numChildre' + 'n'] - 0x1), this['_pageArr'] = this['_skinPageA' + 'rr'], this['_skinDrag']['addEvent'](!0x1), this['_preSelect' + 'Id'] = _0x5ad2aa['Instance']['curSkin'], this['_skinMap'][this['_preSelect' + 'Id']]['showSelect' + 'ed'](!0x0);
            for (let _0x3cc577 = 0x0; _0x3cc577 < this['_pageArr']['length']; _0x3cc577++)
                this['pageObj']['addChild'](this['_pageArr'][_0x3cc577]);
            this['switchPage' + 'Handle'](0x0, !0x1);
        }
        ['closeClick' + 'Handle']() {
            this['_scene']['showSkin'](), this['_scene']['SkinBtn']['x'] = 0x1, this['close']();
        }
        ['close']() {
            this['zzYoulike'] && this['zzYoulike']['clear'](), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Skin']);
        }
    }
    class _0xfb773 extends _0x3a0bc3['ZSResultUI'] {
        constructor(_0x386651) {
            super(), this['downpanely'] = 0x0, this['ZsAdCnt'] = 0x0, this['maxsdown'] = !0x1, this['maxsdownCn' + 't'] = 0x0, this['_skinMap'] = [], this['_skinPageA' + 'rr'] = [], this['_skinItemA' + 'rr'] = [], this['_scene'] = null, this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['_control'] = null, this['addgold'] = 0x0, this['isETouch'] = !0x1, this['canbtn'] = !0x0, this['gettype'] = 0x0, this['a3xView'] = null, this['wxshowbtnt' + 'ime'] = 0x0;
        }
        ['init'](_0x1ba9db) {
            if (this['_scene'] = _0x1ba9db['se'], this['_control'] = _0x1ba9db['cot'], this['hidebtn'](-0x1), this['addgold'] = this['_scene']['rankcfg']['gold'], _0x26ee17['IsWeChat']() && (this['initETouch'](), this['wxshowbtnt' + 'ime'] = 0x3e8 * _0x2276ef['vGameInfo']['wxshowbtnt' + 'ime']), this['_scene']['rankcfg']['rank'] <= 0x6 && 0x0 != this['_scene']['rankcfg']['rank'] ? (this['title']['skin'] = 'common/suc' + 'cesst.png', _0x5684e2['Instance']['onNewPlaye' + 'r'](_0x5aa295['winLevel'])) : this['title']['skin'] = 'common/fai' + 'lt.png', this['resultVal']['text'] = 'Similarity' + '\x20' + this['_scene']['rankcfg']['val'] + '%', this['resultRewa' + 'rd']['text'] = '' + this['addgold'], this['showGoldCn' + 't'](), this['_scene']['KeyCnt'] >= 0x3 ? (this['_scene']['chooseBox'] = !0x0, this['NextBox']['visible'] = !0x0, this['NextLabel']['visible'] = !0x1, this['StarBox']['visible'] = !0x1) : (this['NextBox']['visible'] = !0x1, _0x1ae356['Instance']['IsRandomSc' + 'ene'] ? (this['NextLabel']['visible'] = !0x1, this['StarBox']['visible'] = !0x0) : (this['gettype'] = 0x1, this['NextLabel']['visible'] = !0x0, this['StarBox']['visible'] = !0x1)), this['NormalBtn']['visible'] = this['NextLabel']['visible'], this['NormalBtn2']['visible'] = !0x1, this['hasETouch']() && (this['NormalBtn']['visible'] = !0x1, this['NormalBtn2']['visible'] = !0x0, this['canbtn'] = !0x1, Laya['timer']['once'](0x7d0, this, () => {
                    this['canbtn'] = !0x0;
                })), _0x26ee17['IsQutoutia' + 'o']()) {
            }
            this['gamelist']['renderHand' + 'ler'] = new Laya['Handler'](this, function (_0x1e2bdb) {
                _0x1e2bdb['offAll'](Laya['Event']['MOUSE_DOWN']);
            }), this['regiestEve' + 'nt']();
        }
        ['showGoldCn' + 't']() {
            this['GoldCnt']['text'] = '' + _0x1ae356['Instance']['gold'], this['_scene']['GoldCnt']['text'] = '' + _0x1ae356['Instance']['gold'];
        }
        ['uninit']() {
            _0x26ee17['IsQutoutia' + 'o']() && _0x523ef5['Instance']['hidePaster' + 'Ad'](), Laya['timer']['clearAll'](this), this['unregiestE' + 'vent']();
        }
        ['regiestEve' + 'nt']() {
            this['NormalBtn']['on'](Laya['Event']['CLICK'], this, this['closeClick' + 'Handle']), this['NormalBtn2']['on'](Laya['Event']['CLICK'], this, this['closeClick' + 'Handle']), this['NextBtn']['on'](Laya['Event']['CLICK'], this, this['NextGame']), _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['on'](_0x1c0419['ShowBanner' + 'Completed'], this, this['onShowBann' + 'erComplete' + 'd']), this['NextBtnnew']['on'](Laya['Event']['CLICK'], this, this['btncloseNe' + 'xtHandle']);
        }
        ['unregiestE' + 'vent']() {
            this['NormalBtn']['off'](Laya['Event']['CLICK'], this, this['closeClick' + 'Handle']), this['NextBtn']['off'](Laya['Event']['CLICK'], this, this['NextGame']), this['NormalBtn2']['off'](Laya['Event']['CLICK'], this, this['closeClick' + 'Handle']), _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['off'](_0x1c0419['ShowBanner' + 'Completed'], this, this['onShowBann' + 'erComplete' + 'd']), this['NextBtnnew']['off'](Laya['Event']['CLICK'], this, this['btncloseNe' + 'xtHandle']);
        }
        ['onTuiBack']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this['zzsdkBox'], _0x5aa295['back4']), _0x5684e2['Instance']['onBack'](_0x5aa295['back4']);
        }
        ['onShowAdCo' + 'mpleted'](_0x291da9) {
            _0x291da9 === this['curSharePo' + 's'] && (_0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), this['hidebtn'](0x0), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': 0x3 * this['addgold'] }), _0x5684e2['Instance']['onReceive'](_0x5aa295['winReceive']), this['showGoldCn' + 't'](), _0x26ee17['IsWeChat']() ? _0x5893c0['once'](this['wxshowbtnt' + 'ime'], this, () => {
                this['hidebtn'](0x1);
            }) : this['btncloseNe' + 'xtHandle']());
        }
        ['onShowBann' + 'erComplete' + 'd'](_0x208132) {
        }
        ['NextGame']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), 0x1 === this['gettype'] ? platform['getInstanc' + 'e']()['showReward'](() => {
                _0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': 0x3 * this['addgold'] }), (this['showGoldCn' + 't'](), this['btncloseNe' + 'xtHandle']());
            }) : (_0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': this['addgold'] }), this['showGoldCn' + 't'](), this['btncloseNe' + 'xtHandle']()), this['_scene']['GoldCnt']['text'] = '' + _0x1ae356['Instance']['gold'];
        }
        ['closeClick' + 'Handle']() {
            this['canbtn'] && (_0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), this['hidebtn'](0x0), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': this['addgold'] }), this['showGoldCn' + 't'](), this['btncloseNe' + 'xtHandle']());
        }
        ['btncloseNe' + 'xtHandle']() {
            this['_control']['NextGame'](), Laya['timer']['once'](0x1f4, this, this['close']);
        }
        ['hidebtn'](_0x26bdab) {
            -0x1 == _0x26bdab ? (this['NextBtn']['visible'] = !0x0, this['NormalBtn']['visible'] = !0x0, this['NormalBtn2']['visible'] = !0x0, this['NextBtnnew']['visible'] = !0x1) : 0x0 == _0x26bdab ? (this['NextBtn']['visible'] = !0x1, this['NormalBtn']['visible'] = !0x1, this['NormalBtn2']['visible'] = !0x1, this['NextBtnnew']['visible'] = !0x1) : 0x1 == _0x26bdab && (this['NextBtnnew']['visible'] = !0x0);
        }
        ['close']() {
            this['a3xView'] && this['a3xView']['clear'](), this['closewindo' + 'w']();
        }
        ['closewindo' + 'w']() {
            _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Result']);
        }
        ['getPinY']() {
        }
        ['hasETouch']() {
            return this['isETouch'];
        }
        ['initETouch']() {
            _0x353499['Instance']['wxCheck']() || _0x353499['Instance']['aCheck']() || _0x26ee17['IsWeChat']() && _0x1ae356['Instance']['level'] > 0x2 && _0x1ede3d['Instance']['checkBanne' + 'rE']() && (this['isETouch'] = !0x0);
        }
    }
    class _0x43488e {
        constructor(_0x26fc14) {
            this['gameobject'] = null, this['_boxicon'] = null, this['_isOpen'] = !0x1, this['_index'] = -0x1, this['_icon'] = null, this['_gold'] = null, this['_goldCount'] = null, this['_videobtn'] = null, this['_index'] = _0x26fc14;
            let _0x36bf55 = Laya['loader']['getRes'](_0x1281fe['RES_reward' + 'Item']);
            this['gameobject'] = _0x36bf55['create'](), this['_boxicon'] = this['gameobject']['getChildBy' + 'Name']('boxicon'), this['_icon'] = this['gameobject']['getChildBy' + 'Name']('icon'), this['_gold'] = this['gameobject']['getChildBy' + 'Name']('gold'), this['_goldCount'] = this['_gold']['getChildBy' + 'Name']('goldCount'), this['_videobtn'] = this['gameobject']['getChildBy' + 'Name']('videoIcon'), this['_gold']['visible'] = !0x1, this['gameobject']['on'](Laya['Event']['CLICK'], this, this['onClickHan' + 'dle']);
        }
        ['setPos'](_0x1ab997, _0x3e22f1) {
            this['gameobject']['pos'](_0x1ab997, _0x3e22f1, !0x0);
        }
        ['onClickHan' + 'dle']() {
            if (this['_isOpen'])
                return;
            this['_isOpen'] = !![], _0x4441f7['Instance']['event'](_0x1c0419['Reward_Cli' + 'ckItem'], [this['_index']]);
        }
        ['watchTvCal' + 'lback'](_0xd71442, _0x4982da = null, _0x3b0623 = null) {
        }
        ['showReward'](_0x57650b) {
            this['_boxicon']['visible'] = !0x1, -0x5 == _0x57650b[0x0] ? (this['_gold']['visible'] = !0x0, this['_goldCount']['text'] = _0x57650b[0x1]['toString'](), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'glod': _0x57650b[0x1] }), _0x4441f7['Instance']['event'](_0x1c0419['Reward_Upd' + 'ateInfo'])) : (this['_icon']['visible'] = !0x0, this['_icon']['skin'] = _0x5ad2aa['Instance']['getItemCfg'](_0x57650b[0x0])['ResIcon'], _0x5ad2aa['Instance']['curSkin'] = _0x57650b[0x0]);
        }
        ['showVideob' + 'tn'](_0x33d49b) {
        }
        ['destroy']() {
            this['gameobject']['off'](Laya['Event']['CLICK'], this, this['onClickHan' + 'dle']), this['gameobject']['removeSelf']();
        }
    }
    class _0x2d9e8b extends _0x3a0bc3['OpenReward' + 'UI'] {
        constructor() {
            super(), this['_rewardMap'] = [], this['_rewardInf' + 'o'] = null, this['_openCount'] = 0x3, this['_rewardArr'] = [], this['_randomArr'] = null, this['_randomTot' + 'alNum'] = 0x0, this['_getChance' + 'Count'] = 0x0, this['_info'] = null, this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['zzYoulike'] = null;
        }
        ['init'](_0x2ae4bf) {
            this['regiesterE' + 'vent'](), this['goldCount']['text'] = _0x1a80c1['ScoreToStr' + 'ing'](_0x1ae356['Instance']['gold']), this['initView']();
        }
        ['initView']() {
            for (let _0x2dc9e9 = 0x0; _0x2dc9e9 < 0x9; _0x2dc9e9++) {
                var _0x439040 = new _0x43488e(_0x2dc9e9);
                _0x439040['setPos'](_0x2dc9e9 % 0x3 * 0xc8, 0xb2 * parseInt((_0x2dc9e9 / 0x3)['toString']())), this['rewardObj']['addChild'](_0x439040['gameobject']), this['_rewardMap'][_0x2dc9e9] = _0x439040;
            }
            var _0x11ce27 = _0xe0a486['Instance']['getRewardC' + 'fglength']();
            for (let _0x13cec8 = 0x1; _0x13cec8 <= _0x11ce27; _0x13cec8++) {
                var _0x1f3c77 = _0xe0a486['Instance']['getRewardC' + 'fg'](_0x13cec8);
                if (null == _0x5ad2aa['Instance']['getSkinCfg'](_0x1f3c77['ItemId'])) {
                    this['_rewardInf' + 'o'] = _0x1f3c77;
                    break;
                }
            }
            this['_rewardInf' + 'o'] && this['_rewardInf' + 'o']['ItemId'] > 0x0 ? this['bestReward']['skin'] = _0x5ad2aa['Instance']['getItemCfg'](this['_rewardInf' + 'o']['ItemId'])['ResIcon'] : this['bestReward']['visible'] = !0x1, this['addRewardL' + 'ist']();
            var _0x40c273 = _0x26ee17['isLong']() ? 0x50 : 0x19;
            this['zzsdkBox']['visible'] = !0x1, this['window']['top'] = 0xf0 - (0x9b - (_0x40c273 + 0x46));
        }
        ['regiesterE' + 'vent']() {
            this['back']['on'](Laya['Event']['CLICK'], this, this['backClickH' + 'andle']), this['getchance']['on'](Laya['Event']['CLICK'], this, this['getchanceH' + 'andle']), _0x4441f7['Instance']['on'](_0x1c0419['Reward_Cli' + 'ckItem'], this, this['rewardClic' + 'kHandle']), _0x4441f7['Instance']['on'](_0x1c0419['Reward_Upd' + 'ateInfo'], this, this['updateGold' + 'Handle']);
        }
        ['uninit']() {
            this['unregieste' + 'rEvent'](), this['timer']['clearAll'](this);
        }
        ['unregieste' + 'rEvent']() {
            this['back']['off'](Laya['Event']['CLICK'], this, this['backClickH' + 'andle']), this['getchance']['off'](Laya['Event']['CLICK'], this, this['getchanceH' + 'andle']), _0x4441f7['Instance']['off'](_0x1c0419['Reward_Cli' + 'ckItem'], this, this['rewardClic' + 'kHandle']), _0x4441f7['Instance']['off'](_0x1c0419['Reward_Upd' + 'ateInfo'], this, this['updateGold' + 'Handle']);
        }
        ['updateData'](_0x5ebb7a) {
            this['_info'] = _0x5ebb7a;
        }
        ['updateGold' + 'Handle']() {
            this['goldCount']['text'] = _0x1a80c1['ScoreToStr' + 'ing'](_0x1ae356['Instance']['gold']);
        }
        ['addRewardL' + 'ist']() {
            var _0x99b836 = this['_rewardInf' + 'o']['Reward']['split']('|');
            for (let _0x201edd = 0x0; _0x201edd < _0x99b836['length']; _0x201edd++) {
                var _0x1e4f63 = _0x1a80c1['TransferSt' + 'ringToNumb' + 'erArr'](_0x99b836[_0x201edd]);
                this['_rewardArr'][_0x201edd] = _0x1e4f63;
            }
        }
        ['rewardClic' + 'kHandle'](_0x24fb9b) {
            let _0x15bb64 = this;
            var _0x1482cb = this['randomRewa' + 'rd'](), _0x4b70e4 = this['_rewardArr'][_0x1482cb];
            if (this['_openCount'] > 0x0) {
                if (this['_rewardArr']['splice'](_0x1482cb, 0x1), this['_rewardMap'][_0x24fb9b]['showReward'](_0x4b70e4), this['key' + this['_openCount']]['skin'] = 'game/chess' + 'Key2.png', this['_openCount']--, 0x0 == this['_openCount']) {
                    for (let _0x293058 = 0x0; _0x293058 < 0x9; _0x293058++)
                        this['_rewardMap'][_0x293058]['showVideob' + 'tn'](!0x0);
                    this['grade']['visible'] = !0x1, this['getchance']['visible'] = this['_getChance' + 'Count'] < 0x1, _0x15bb64['back']['visible'] = !0x0;
                }
            }
        }
        ['randomRewa' + 'rd']() {
            this['_randomArr'] = [], this['_randomTot' + 'alNum'] = 0x0;
            for (let _0x784b52 = 0x0; _0x784b52 < this['_rewardArr']['length']; _0x784b52++)
                this['_randomArr'][_0x784b52] = this['_randomTot' + 'alNum'], this['_randomTot' + 'alNum'] += this['_rewardArr'][_0x784b52][0x2];
            var _0x25a2bf = _0x1a80c1['random'](0x0, this['_randomTot' + 'alNum']), _0x1bf489 = 0x0;
            for (let _0x8a7ef9 = 0x0; _0x8a7ef9 < this['_randomArr']['length']; _0x8a7ef9++)
                this['_randomArr'][_0x8a7ef9] > _0x1bf489 && this['_randomArr'][_0x8a7ef9] < _0x25a2bf && (_0x1bf489 = this['_randomArr'][_0x8a7ef9]);
            return this['_randomArr']['indexOf'](_0x1bf489);
        }
        ['getchanceH' + 'andle']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), platform['getInstanc' + 'e']()['showReward'](() => {
                this['watchTvCal' + 'lback']();
            });
        }
        ['onShowAdCo' + 'mpleted'](_0x206654) {
            _0x206654 === this['curSharePo' + 's'] && this['watchTvCal' + 'lback']();
        }
        ['watchTvCal' + 'lback']() {
            this['_openCount'] = 0x3, this['key1']['skin'] = 'game/chess' + 'Key.png', this['key2']['skin'] = 'game/chess' + 'Key.png', this['key3']['skin'] = 'game/chess' + 'Key.png';
            for (let _0x204952 = 0x0; _0x204952 < 0x9; _0x204952++)
                this['_rewardMap'][_0x204952]['showVideob' + 'tn'](!0x1);
            this['grade']['visible'] = !0x0, this['getchance']['visible'] = !0x1, this['back']['visible'] = ![], this['_getChance' + 'Count']++;
        }
        ['backClickH' + 'andle']() {
            for (let _0x2493ee = 0x0; _0x2493ee < this['_rewardMap']['length']; _0x2493ee++)
                this['_rewardMap'][_0x2493ee]['destroy']();
            this['close']();
        }
        ['close']() {
            this['zzYoulike'] && this['zzYoulike']['clear'](), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Reward']);
        }
    }
    class _0x4bd655 extends _0x3a0bc3['DaySignVie' + 'wUI'] {
        constructor() {
            super(...arguments), this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['signInfo'] = null, this['actionInfo'] = null, this['dataInfo'] = null, this['seventInfo'] = null, this['_scene'] = null;
        }
        ['init'](_0x187d3c) {
            this['_scene'] = _0x187d3c, this['regiestEve' + 'nt'](), this['signList']['renderHand' + 'ler'] = new Laya['Handler'](this, this['onListRend' + 'er']), this['updateList']();
        }
        ['uninit']() {
            this['unRegiestE' + 'vent']();
        }
        ['regiestEve' + 'nt']() {
            _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), this['signBtn']['on'](Laya['Event']['CLICK'], this, this['onDaySignI' + 'temClick']), this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['onCloseBtn']);
        }
        ['unRegiestE' + 'vent']() {
            _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), this['signBtn']['off'](Laya['Event']['CLICK'], this, this['onDaySignI' + 'temClick']), this['closeBtn']['off'](Laya['Event']['CLICK'], this, this['onCloseBtn']);
        }
        ['onDaySignI' + 'temClick']() {
            this['onSignFini' + 'sh'](0x2 === this['actionInfo']['d']);
        }
        ['onShowAdCo' + 'mpleted'](_0x403842) {
            _0x403842 === this['curSharePo' + 's'] && (this['onSignFini' + 'sh'](0x2 === this['actionInfo']['d']), this['curSharePo' + 's'] = _0x2128f4['Unknow']);
        }
        ['onSignFini' + 'sh'](_0xf24a82 = !0x0) {
            let _0x14d3bc = !0x1;
            if (this['actionInfo']) {
                if (0x1 == this['actionInfo']['goodstype']) {
                    let _0x4f227f = 0x1;
                    _0xf24a82 && (_0x4f227f = 0x2);
                    let _0x1fdc8a = this['actionInfo']['count'] * _0x4f227f;
                    _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': _0x1fdc8a }), _0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), _0x5d5e4c['Instance']['showTips']('COIN\x20x\x20' + _0x1fdc8a), _0x14d3bc = !0x0;
                } else
                    this['actionInfo']['skinid'] && (_0x2d5683['Instance']['playSound'](_0xc4e5f6['LevelUpdat' + 'e']), _0x5ad2aa['Instance']['curSkin'] = this['actionInfo']['skinid'], _0x5ad2aa['Instance']['setSkinInf' + 'o'](this['actionInfo']['skinid'], !0x0), _0x5d5e4c['Instance']['showTips']('SUCCESS'), _0x14d3bc = !0x0);
            }
            _0x14d3bc && (_0xe0a486['Instance']['doSignActi' + 'on'](), _0x5684e2['Instance']['onSign'](_0x5aa295['winSign']), this['_scene']['showSkin'](), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['DaySign']));
        }
        ['onCloseBtn']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['_scene']['showSkin'](), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['DaySign']);
        }
        ['onListRend' + 'er'](_0x5f46e3, _0x430a4e) {
            let _0x1d49e0 = _0x5f46e3['dataSource'];
            _0x5f46e3['updateSign' + 'Item'](_0x1d49e0);
        }
        ['updateList']() {
            this['signInfo'] = _0xe0a486['Instance']['getSignDay' + 'Info'](), this['generalDat' + 'aInfo'](), this['actionInfo'] = this['getSignInf' + 'oWithIndex'](this['getNowSign' + 'Index']());
            let _0x433179 = this['getNowSign' + 'Index']();
            0x0 !== _0x433179 && _0x353499['Instance']['wxCheck'](), _0x433179 %= 0x7;
            let _0x1cf078 = this['canDoSign']();
            this['signList']['dataSource'] = this['dataInfo']['map']((_0x48a8eb, _0x464d9e) => {
                let _0x37715c = new _0x364357();
                return _0x37715c['coin'] = _0x48a8eb['count'], _0x37715c['title'] = _0x48a8eb['title'], _0x37715c['isDouble'] = _0x48a8eb['d'], _0x37715c['skinId'] = _0x48a8eb['skinid'], _0x37715c['highlight'] = _0x464d9e === _0x433179, _0x37715c['signed'] = _0x464d9e < _0x433179 || _0x464d9e === _0x433179 && !_0x1cf078, _0x37715c;
            }), this['seventInfo'] = this['signList']['dataSource'][0x6], this['updateSeve' + 'nBox'](), this['updateSign' + 'Btn']();
        }
        ['updateSeve' + 'nBox']() {
            let _0x133561 = this['seventInfo'];
            if (_0x133561) {
                if (this['sevenSigne' + 'dView']['visible'] = _0x133561['signed'], this['sevenBox']['disabled'] = _0x133561['signed'], _0x133561['coin'] > 0x0)
                    this['skinBox']['visible'] = !0x1, this['coinBox']['visible'] = !0x0, this['coinLabel']['text'] = 'X\x20' + _0x133561['coin'];
                else {
                    if (this['skinBox']['visible'] = !0x0, this['coinBox']['visible'] = !0x1, _0x133561['dinsID']) {
                        let _0x2627ae = _0x5ad2aa['Instance']['getSkinCfg'](_0x133561['dinsID']);
                        this['skinImageV' + 'iew']['skin'] = _0x2627ae && _0x2627ae['img'] || '';
                    }
                }
            }
        }
        ['updateSign' + 'Btn']() {
            this['canDoSign']() ? this['signBtn']['disabled'] = ![] : (this['signBtn']['label'] = 'RECEIVED', this['signBtn']['disabled'] = !![]);
        }
        ['getSignInf' + 'oWithIndex'](_0x3d80ec) {
            if (_0x3d80ec < 0x0 && (_0x3d80ec = 0x0), _0x3d80ec > 0x6 && (_0x3d80ec %= 0x7), _0x3d80ec < this['dataInfo']['length'])
                return this['dataInfo'][_0x3d80ec];
            return null;
        }
        ['canDoSign']() {
            return !(this['signInfo']['signed'] > 0x0);
        }
        ['getNowSign' + 'Index']() {
            let _0x4fcb0d = this['signInfo']['signDay'];
            return this['canDoSign']() || (_0x4fcb0d -= 0x1), Math['max'](0x0, _0x4fcb0d);
        }
        ['generalDat' + 'aInfo']() {
            let _0x517d58 = _0xe0a486['Instance']['signCfgDat' + 'a'], _0x1b97dc = this['signInfo']['signDay'];
            _0x517d58 && (this['dataInfo'] = _0x517d58['map']((_0x34fbdd, _0x1a4d32) => {
                if (0x0 === _0x1a4d32 && 0x0 === _0x1b97dc && (_0x34fbdd['d'] = 0x0), 0x2 === _0x34fbdd['goodstype']) {
                    let _0x56866c = !0x1;
                    if (_0x34fbdd['skinid'], _0x1b97dc > 0x7 || _0x56866c)
                        return {
                            'id': _0x34fbdd['id'],
                            'title': _0x34fbdd['title'],
                            'goodstype': _0x34fbdd['goodstype2'],
                            'count': _0x34fbdd['count2'],
                            'skinid': 0x0,
                            'd': 0x2
                        };
                }
                return _0x34fbdd;
            }));
        }
    }
    class _0x2c7d80 extends _0x3a0bc3['OfflineVie' + 'wUI'] {
        constructor() {
            super(...arguments), this['coin'] = 0x0, this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['_scene'] = null, this['a3xView'] = null, this['isinit'] = !0x1;
        }
        ['init'](_0x167b24) {
            _0x167b24 && (this['coin'] = _0x167b24['coin'] || 0x0, this['_scene'] = _0x167b24['se']), this['regiestEve' + 'nt'](), this['initView']();
        }
        ['initView']() {
            let _0x222f20 = this;
            if (this['closeBtn']['visible'] = !0x1, Laya['timer']['once'](0x5dc, this, function () {
                    _0x222f20['closeBtn']['visible'] = !0x0;
                }), _0x26ee17['IsQutoutia' + 'o']()) {
                let _0x526e9a = this['a3xbox']['localToGlo' + 'bal'](new Laya['Point'](0x0, 0x0));
                _0x523ef5['Instance']['showPaster' + 'AD'](_0x526e9a['x'], _0x526e9a['y'] + 0x64, this['a3xbox']['width'], this['a3xbox']['height']);
            }
            _0x2c7186['Instance']['hasShow'] = !0x0, this['coinLabel']['text'] = 'Coin+' + (this['coin'] || 0x0);
            let _0x4e711e = _0x2c7186['Instance']['m_offlineT' + 'ime'], _0x10f448 = Math['floor'](_0x4e711e / 0xea60), _0x411208 = Math['floor'](_0x10f448 % 0x3c), _0x28c64f = Math['floor'](_0x10f448 / 0x3c), _0x3831f7 = Math['floor'](_0x28c64f / 0x18);
            _0x28c64f -= 0x18 * _0x3831f7, this['offlineTip']['text'] = _0x3831f7 > 0x0 ? '您已离开' + _0x3831f7 + '天' + _0x28c64f + '小时' + _0x411208 + '分钟，欢迎回来！' : '您已离开' + _0x28c64f + '小时' + _0x411208 + '分钟，欢迎回来！', this['upTip']['visible'] = _0x28c64f >= 0x2;
            var _0x4d6fc5 = _0x26ee17['isLong']() ? 0x9b : 0x5a;
            this['zzsdkBox']['visible'] = !0x1, this['contentBox']['top'] = 0xe6 - (0x9b - _0x4d6fc5), this['initallZZS' + 'DK']();
        }
        ['initallZZS' + 'DK']() {
            if (_0x1ede3d['Instance']['isOpenSDK']()) {
                this['zzsdkBox']['visible'] = !0x0;
                let _0x314977 = 0x91 - (0x9b - (_0x26ee17['isLong']() ? 0x9b : 0x5a));
                this['ztuiBox']['y'] = _0x314977, this['a3xView'] || (this['a3xView'] = _0x1ede3d['Instance']['add3x'](this['a3xbox'], 0x0, 0x0, _0x5aa295['lixianjies' + 'uan']));
            } else
                this['zzsdkBox']['visible'] = !0x1;
        }
        ['uninit']() {
            _0x26ee17['IsQutoutia' + 'o']() && _0x523ef5['Instance']['hidePaster' + 'Ad'](), Laya['timer']['clearAll'](this), this['unregiestE' + 'vent']();
        }
        ['regiestEve' + 'nt']() {
            _0x4441f7['Instance']['on'](_0x1c0419['RefZZSDKMa' + 'nager'], this, this['initallZZS' + 'DK']), this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['onClosed']), this['btn']['on'](Laya['Event']['CLICK'], this, this['onVedioBtn']), _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['on'](_0x1c0419['CloseShowA' + 'd'], this, this['onCloseSho' + 'wAd']);
        }
        ['unregiestE' + 'vent']() {
            this['closeBtn']['off'](Laya['Event']['CLICK'], this, this['onClosed']), this['btn']['off'](Laya['Event']['CLICK'], this, this['onVedioBtn']), _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['off'](_0x1c0419['CloseShowA' + 'd'], this, this['onCloseSho' + 'wAd']), _0x4441f7['Instance']['off'](_0x1c0419['RefZZSDKMa' + 'nager'], this, this['initallZZS' + 'DK']);
        }
        ['onTuiBack1']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this['zzsdkBox'], _0x5aa295['back6']), _0x5684e2['Instance']['onBack'](_0x5aa295['back6']);
        }
        ['onClosed']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x5d5e4c['Instance']['showTips']('SUCCESS'), _0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': this['coin'] }), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Offline']), this['_scene']['showSkin']();
        }
        ['onVedioBtn']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['curSharePo' + 's'] = _0x2128f4['OfflineAD'], _0x353499['Instance']['showVideoO' + 'rrShare'](this['curSharePo' + 's']);
        }
        ['onShowAdCo' + 'mpleted'](_0x2b88b0) {
            _0x2b88b0 === this['curSharePo' + 's'] && (_0x5d5e4c['Instance']['showTips']('SUCCESS'), _0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': 0x3 * this['coin'] }), this['a3xView'] && this['a3xView']['clear'](), this['curSharePo' + 's'] = _0x2128f4['Unknow'], _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['Offline']));
        }
        ['onCloseSho' + 'wAd'](_0x591c19) {
        }
        ['getPinY']() {
            if (_0x26ee17['IsWeChat']() && !_0x353499['Instance']['aCheck']() && this['closeBtn'])
                return this['closeBtn']['localToGlo' + 'bal'](new Laya['Point'](0x0, this['closeBtn']['height']))['y'] + _0x2b4af8['bannerMove' + 'Y']();
            return -0x1;
        }
    }
    class _0x8b45b7 extends _0x3a0bc3['item']['ZZSDKFullU' + 'I'] {
        constructor() {
            super(...arguments), this['cb'] = null, this['fullscroll'] = null;
        }
        ['init'](_0x3f2f04) {
            this['cb'] = _0x3f2f04['cb'], this['regiestEve' + 'nt'](), this['continueBt' + 'n']['visible'] = !0x1, this['initView'](), _0x5893c0['once'](0x3e8 * _0x2276ef['vGameInfo']['wxshowbtnt' + 'ime'], this, () => {
                this['continueBt' + 'n']['visible'] = !0x0;
            });
        }
        ['uninit']() {
            this['unregiestE' + 'vent']();
        }
        ['regiestEve' + 'nt']() {
            this['continueBt' + 'n']['on'](Laya['Event']['CLICK'], this, this['onContinue']);
        }
        ['unregiestE' + 'vent']() {
            this['continueBt' + 'n']['off'](Laya['Event']['CLICK'], this, this['onContinue']);
        }
        ['initView']() {
            this['fullBox']['top'] = _0x26ee17['isLong']() ? 0x64 : 0x23, this['fullscroll'] = _0x1ede3d['Instance']['addInterFu' + 'lllarge'](this['fullBox']);
        }
        ['onTuiBack']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this, _0x5aa295['back2']), _0x5684e2['Instance']['onBack'](_0x5aa295['back2']);
        }
        ['onContinue']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['fullscroll'] && this['fullscroll']['clear'](), this['cb'] && this['cb'](), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['ZZSDKFullV' + 'iew']);
        }
    }
    class _0x494ade extends _0x3a0bc3['TryViewUI'] {
        constructor() {
            super(...arguments), this['cfg'] = null, this['_scene'] = null, this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['zzYoulike'] = null;
        }
        ['init'](_0x139a94) {
            this['cfg'] = _0x139a94['skinCfg'], this['_scene'] = _0x139a94['se'], this['registerEv' + 'ent'](), this['initView']();
            let _0x56a159 = this;
            this['closeBtn']['visible'] = !0x1, Laya['timer']['once'](0x5dc, this, function () {
                _0x56a159['closeBtn']['visible'] = !0x0;
            });
            var _0x5a30d4 = _0x26ee17['isLong']() ? 0x50 : 0x19;
            _0x1ede3d['Instance']['isOpenSDK']() && (this['zzYoulike'] || (this['zzYoulike'] = _0x1ede3d['Instance']['addYoulike'](this['zzsdkBox'], 0x0, _0x5aa295['youlike4'], _0x5a30d4 + 0x46 + 0x32))), this['updateDayN' + 'otTryCheck']();
        }
        ['onTuiBack']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this['zzsdkBox'], _0x5aa295['back7']), _0x5684e2['Instance']['onBack'](_0x5aa295['back7']);
        }
        ['uninit']() {
            this['zzYoulike'] && this['zzYoulike']['clear'](), Laya['timer']['clearAll'](this), this['unregister' + 'Event']();
        }
        ['registerEv' + 'ent']() {
            this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['onClosed']), this['btn']['on'](Laya['Event']['CLICK'], this, this['onBtn']), _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['on'](_0x1c0419['CloseShowA' + 'd'], this, this['onCloseSho' + 'wAd']);
        }
        ['unregister' + 'Event']() {
            this['closeBtn']['off'](Laya['Event']['CLICK'], this, this['onClosed']), this['btn']['off'](Laya['Event']['CLICK'], this, this['onBtn']), _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['off'](_0x1c0419['CloseShowA' + 'd'], this, this['onCloseSho' + 'wAd']);
        }
        ['initView']() {
            _0x2d5683['Instance']['playSound'](_0xc4e5f6['LevelUpdat' + 'e']), this['carImg']['skin'] = this['cfg']['ResIcon']['replace'](/game/g, 'x'), this['bgAni']['play'](0x0, !0x0), this['heartAni']['play'](0x0, !0x0);
        }
        ['onClosed']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['doClose']();
        }
        ['onBtn']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['curSharePo' + 's'] = _0x2128f4['FreeTryAD'], _0x353499['Instance']['showVideoO' + 'rrShare'](this['curSharePo' + 's']);
        }
        ['onShowAdCo' + 'mpleted'](_0x146860) {
            _0x146860 === this['curSharePo' + 's'] && (_0x5ad2aa['Instance']['setTempSki' + 'n'](this['cfg']['Id']), this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['doClose']());
        }
        ['doClose']() {
            _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['TryView']), this['_scene']['showSkin'](), this['_scene']['ReadyGameD' + 'o']();
        }
        ['onCloseSho' + 'wAd'](_0x5f12d5) {
        }
        ['onDayNot']() {
            _0x1ae356['Instance']['dayNotTry'] = !_0x1ae356['Instance']['dayNotTry'], this['updateDayN' + 'otTryCheck']();
        }
        ['updateDayN' + 'otTryCheck']() {
        }
    }
    class _0x17e7b7 extends _0x3a0bc3['GoldViewUI'] {
        constructor() {
            super(...arguments), this['gold'] = 0xc8, this['doublebtnT' + 'imeLine'] = null, this['videoCallB' + 'ack'] = null, this['skinpage'] = null;
        }
        ['init'](_0x1489d6) {
            this['skinpage'] = _0x1489d6, this['initView'](), this['registerEv' + 'ent']();
        }
        ['uninit']() {
            this['unregister' + 'Event']();
        }
        ['registerEv' + 'ent']() {
            this['closeBtn']['on'](Laya['Event']['CLICK'], this, this['closeView']), this['doubleBtn']['on'](Laya['Event']['CLICK'], this, this['onDoubleBt' + 'nClick']), _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']);
        }
        ['unregister' + 'Event']() {
            this['closeBtn']['off'](Laya['Event']['CLICK'], this, this['closeView']), this['doubleBtn']['off'](Laya['Event']['CLICK'], this, this['onDoubleBt' + 'nClick']), _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), this['doublebtnT' + 'imeLine']['destroy']();
        }
        ['onCloseVie' + 'w']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['closeView']();
        }
        ['closeView']() {
            this['skinpage']['refglod'](), _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['GoldView']);
        }
        ['initView']() {
            this['gold'] = 0xc8;
            let _0xbdb1c8 = 0x64 * Math['floor'](_0x1ae356['Instance']['level'] / 0xa) + 0xc8;
            _0xbdb1c8 > 0x3e8 && (_0xbdb1c8 = 0x3e8), this['gold'] = _0xbdb1c8, this['goldLab']['text'] = 'COIN+' + _0xbdb1c8;
            {
                let _0x32c8a0 = new Laya['TimeLine']();
                _0x32c8a0['to'](this['doubleBtn'], {
                    'scaleX': 1.05,
                    'scaleY': 1.05
                }, 0x12c)['to'](this['doubleBtn'], {
                    'scaleX': 0.95,
                    'scaleY': 0.95
                }, 0x12c), _0x32c8a0['play'](0x0, !0x0), this['doublebtnT' + 'imeLine'] = _0x32c8a0;
            }
        }
        ['onDoubleBt' + 'nClick']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), platform['getInstanc' + 'e']()['showReward'](() => {
                _0x2d5683['Instance']['playSound'](_0xc4e5f6['Gold']), _0x1ae356['Instance']['updateWith' + 'ChangeData']({ 'gold': this['gold'] }), (_0x5d5e4c['Instance']['showTips']('SUCCESS'), this['closeView']());
            });
        }
        ['onShowAdCo' + 'mpleted'](_0x1c5745) {
            _0x1c5745 === this['curShareAD' + 'Pos'] && (this['videoCallB' + 'ack'] && this['videoCallB' + 'ack'](), this['videoCallB' + 'ack'] = null);
        }
    }
    class _0x3fca50 extends _0x3a0bc3['ShiPinView' + 'UI'] {
        constructor() {
            super(...arguments), this['coin'] = 0x0, this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['_scene'] = null, this['a3xView'] = null, this['isinit'] = !0x1, this['zzYoulike'] = null;
        }
        ['init'](_0x32278e) {
            this['_scene'] = _0x32278e, this['regiestEve' + 'nt'](), this['initView']();
        }
        ['initView']() {
            _0x1ede3d['Instance']['isOpenSDK']() && (_0x26ee17['isLong'](), this['zzYoulike'] || (this['zzYoulike'] = _0x1ede3d['Instance']['addYoulike'](this['zzsdkBox'], _0x5aa295['youlike5'], 0x0)));
        }
        ['uninit']() {
            _0x26ee17['IsQutoutia' + 'o']() && _0x523ef5['Instance']['hidePaster' + 'Ad'](), this['zzYoulike'] && this['zzYoulike']['clear'](), Laya['timer']['clearAll'](this), this['unregiestE' + 'vent']();
        }
        ['regiestEve' + 'nt']() {
            _0x4441f7['Instance']['on'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['on'](_0x1c0419['CloseShowA' + 'd'], this, this['onCloseSho' + 'wAd']), this['moreGame']['on'](Laya['Event']['CLICK'], this, this['onMoreGame']), this['btnShow']['on'](Laya['Event']['CLICK'], this, this['onbtnShow']);
        }
        ['onMoreGame']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['openInterF' + 'ull'](), _0x5684e2['Instance']['onBtn'](_0x5aa295['coin6']);
        }
        ['unregiestE' + 'vent']() {
            _0x4441f7['Instance']['off'](_0x1c0419['ShowAdComp' + 'leted'], this, this['onShowAdCo' + 'mpleted']), _0x4441f7['Instance']['off'](_0x1c0419['CloseShowA' + 'd'], this, this['onCloseSho' + 'wAd']), this['moreGame']['off'](Laya['Event']['CLICK'], this, this['onMoreGame']), this['btnShow']['off'](Laya['Event']['CLICK'], this, this['onbtnShow']);
        }
        ['onbtnShow']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), this['curSharePo' + 's'] = _0x2128f4['ShiPinAD'], _0x353499['Instance']['showVideoO' + 'rrShare'](this['curSharePo' + 's']);
        }
        ['onTuiBack1']() {
            _0x2d5683['Instance']['playUIClic' + 'k'](), _0x1ede3d['Instance']['addInterFu' + 'llList'](this['zzsdkBox'], _0x5aa295['back8']), _0x5684e2['Instance']['onBack'](_0x5aa295['back6']);
        }
        ['onShowAdCo' + 'mpleted'](_0x5767c3) {
            _0x5767c3 === this['curSharePo' + 's'] && (this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['close']());
        }
        ['onCloseSho' + 'wAd'](_0x26a33f) {
            _0x26a33f === this['curSharePo' + 's'] && (this['curSharePo' + 's'] = _0x2128f4['Unknow'], this['close']());
        }
        ['close']() {
            _0x5d5e4c['Instance']['closeUI'](_0xfa1fac['ShiPinView']);
        }
    }
    class _0xfa1fac {
        static ['initConfig']() {
            _0xfa1fac['Load']['cls'] = _0x18fdaf, _0xfa1fac['Game']['cls'] = _0x5d928f, _0xfa1fac['Skin']['cls'] = _0x8855f6, _0xfa1fac['Rand']['cls'] = _0x11ecec, _0xfa1fac['Result']['cls'] = _0xfb773, _0xfa1fac['Reward']['cls'] = _0x2d9e8b, _0xfa1fac['DaySign']['cls'] = _0x4bd655, _0xfa1fac['Offline']['cls'] = _0x2c7d80, _0xfa1fac['ZZSDKFullV' + 'iew']['cls'] = _0x8b45b7, _0xfa1fac['TryView']['cls'] = _0x494ade, _0xfa1fac['EggView']['cls'] = _0x55efa4, _0xfa1fac['GoldView']['cls'] = _0x17e7b7, _0xfa1fac['ShiPinView']['cls'] = _0x3fca50;
        }
    }
    _0xfa1fac['Load'] = {
        'id': 0x1,
        'cls': null,
        'res': null
    }, _0xfa1fac['Game'] = {
        'id': 0x2,
        'cls': null,
        'res': null
    }, _0xfa1fac['TuiView'] = {
        'id': 0x3,
        'cls': null,
        'res': null
    }, _0xfa1fac['Skin'] = {
        'id': 0x4,
        'cls': null,
        'res': null
    }, _0xfa1fac['Rand'] = {
        'id': 0x5,
        'cls': null,
        'res': null
    }, _0xfa1fac['Result'] = {
        'id': 0x6,
        'cls': null,
        'res': null
    }, _0xfa1fac['Reward'] = {
        'id': 0x7,
        'cls': null,
        'res': null
    }, _0xfa1fac['DaySign'] = {
        'id': 0x8,
        'cls': null,
        'res': null
    }, _0xfa1fac['Offline'] = {
        'id': 0x9,
        'cls': null,
        'res': null
    }, _0xfa1fac['ZZSDKFullV' + 'iew'] = {
        'id': 0xa,
        'cls': null,
        'res': null
    }, _0xfa1fac['TryView'] = {
        'id': 0xb,
        'cls': null,
        'res': null
    }, _0xfa1fac['EggView'] = {
        'id': 0xc,
        'cls': null,
        'res': null
    }, _0xfa1fac['GoldView'] = {
        'id': 0xd,
        'cls': null,
        'res': null
    }, _0xfa1fac['ZZSDKPicVi' + 'ew'] = {
        'id': 0xe,
        'cls': null,
        'res': null
    }, _0xfa1fac['ShiPinView'] = {
        'id': 0xf,
        'cls': null,
        'res': null
    };
    class _0x1ede3d {
        constructor() {
            this['isOpen'] = !0x0, this['_adSwitch'] = !0x1, this['_validAd'] = !0x1, this['_bannerE'] = !0x1, this['_bannerMod' + 'e'] = null, this['_piandianE'] = !0x1, this['_piandianM' + 'ode'] = null, this['_pifuE'] = !0x1, this['_pifuMode'] = null, this['_bannerref' + 'E'] = !0x1, this['_bannerref' + 'Mode'] = null, this['_bannerres' + 'hipin'] = !0x1, this['_bannerres' + 'hipinMode'] = null, this['_cb'] = null;
        }
        static get ['Instance']() {
            return null === _0x1ede3d['_instance'] && (_0x1ede3d['_instance'] = new _0x1ede3d()), _0x1ede3d['_instance'];
        }
        ['init'](_0xbe48e2) {
            if (this['_cb'] = _0xbe48e2, !this['isOpenSDK'](!0x0))
                return;
            let _0x551e9b = _0x2276ef['ClientVer'];
            this['onComlete']();
        }
        ['onComlete'](_0x2a6015) {
        }
        static ['getAdCfg']() {
            let _0x49ec42 = _0x4ace69['scene'] || '', _0x5f5dbc = _0x4ace69['channel'] || '', _0x10e636 = 'https://wx' + 'a.639311.c' + 'om/api/ban' + '?scene=' + _0x49ec42 + ('&reviewVer' + '=') + _0x2276ef['ClientVer'] + '&channel=' + _0x5f5dbc;
            return new Promise((_0x20ea24, _0x2692cc) => {
                let _0x3238aa = {
                    'content-type': 'applicatio' + 'n/json;cha' + 'rset-UTF-8',
                    'referer': 'https://se' + 'rvicewecha' + 't.com/wx77' + '32fb427876' + '7d0a/30/pa' + 'ge-frame.h' + 'tml'
                };
                new _0x2e6704((_0x1b910b, _0x23d552) => {
                    _0x1b910b ? _0x2692cc(_0x1b910b) : 0xc8 === _0x23d552['code'] ? _0x20ea24(_0x23d552['data']) : _0x2692cc(_0x23d552);
                })['sendGetWit' + 'hUrl'](_0x10e636, 'json', _0x3238aa);
            });
        }
        ['isOpenSDK'](_0x586b9b = !0x1) {
            return _0x586b9b ? this['isOpen'] && _0x26ee17['IsWeChat']() : this['isOpen'] && _0x26ee17['IsWeChat']() && this['adSwitch']();
        }
        ['adSwitch']() {
            return this['_adSwitch'];
        }
        ['validAd']() {
            return this['_validAd'];
        }
        ['checkBanne' + 'rRefE']() {
            return !!(this['isOpen'] && _0x26ee17['IsWeChat']() && this['_bannerref' + 'Mode']) && this['getERandDa' + 'ta'](this['_bannerref' + 'Mode'], 'curBannerR' + 'ef');
        }
        ['checkbanne' + 'rreshipin']() {
            if (this['isOpen'] && _0x26ee17['IsWeChat']() && this['_bannerres' + 'hipin']) {
                if (_0x4ace69['isNewPlaye' + 'r']) {
                    let _0x39bc7d = 'curbannerr' + 'eshipin';
                    if (parseInt(Laya['LocalStora' + 'ge']['getItem'](_0x39bc7d) || '0') <= 0x1)
                        return !0x1;
                    if (this['_bannerres' + 'hipinMode'] && '' != this['_bannerres' + 'hipinMode']['show_per']) {
                        if (Math['random']() <= this['_bannerres' + 'hipinMode']['show_per'])
                            return !0x1;
                    }
                }
                return !0x0;
            }
            return !0x1;
        }
        ['checkBanne' + 'rE']() {
            return !!(this['isOpen'] && _0x26ee17['IsWeChat']() && this['_bannerMod' + 'e']) && this['getERandDa' + 'ta'](this['_bannerMod' + 'e'], 'curBanner');
        }
        ['checkPianD' + 'ianE']() {
            return !!(this['isOpen'] && _0x26ee17['IsWeChat']() && this['_piandianE']) && this['getERandDa' + 'ta'](this['_piandianM' + 'ode'], 'curPianDia' + 'n');
        }
        ['getERandDa' + 'ta'](_0x586a27, _0x1b5d85) {
            let _0x2dbc0a = parseInt(Laya['LocalStora' + 'ge']['getItem'](_0x1b5d85) || '0'), _0x2ef87b = _0x1a80c1['random'](0x1, 0x64);
            if ('' != _0x586a27['show_per']) {
                if ('' != _0x586a27['show_num'] && _0x2dbc0a <= _0x586a27['show_num'] && _0x2ef87b <= 0x64 * _0x586a27['show_per'])
                    return _0x2dbc0a += 0x1, Laya['LocalStora' + 'ge']['setItem'](_0x1b5d85, _0x2dbc0a['toString']()), !0x0;
            } else {
                if (_0x2dbc0a <= _0x586a27['show_num'])
                    return _0x2dbc0a += 0x1, Laya['LocalStora' + 'ge']['setItem'](_0x1b5d85, _0x2dbc0a['toString']()), !0x0;
            }
            return !0x1;
        }
        ['checkPiFuE']() {
            return !!(this['isOpen'] && _0x26ee17['IsWeChat']() && this['_pifuE']) && this['getERandDa' + 'ta'](this['_pifuMode'], 'curpifu');
        }
        ['addYoulike'](_0x3f7518, _0x40fdb1, _0x417f69, _0x110605 = null) {
            if (this['isOpenSDK']()) {
                if (_0x3f7518) {
                    let _0x10e7e2 = window['zzsdkui']['createYoul' + 'ike'](null, _0x110605, _0x417f69, function () {
                        _0x1ede3d['Instance']['openInterF' + 'ull']();
                    });
                    return _0x10e7e2 && _0x3f7518['addChild'](_0x10e7e2), _0x10e7e2;
                }
                return null;
            }
        }
        ['addDrawer'](_0x315b7a) {
            if (this['isOpenSDK']() && this['validAd']) {
                if (_0x315b7a) {
                    let _0x2c7613 = window['zzsdkui']['createDraw' + 'er']('drawer_pic', null, function () {
                        _0x1ede3d['Instance']['openInterF' + 'ull']();
                    }, null, 0.5 * Laya['stage']['height'], null, null, function (_0x4651b8) {
                    });
                    return _0x2c7613 && _0x315b7a['addChild'](_0x2c7613), _0x2c7613;
                }
                return null;
            }
        }
        ['aliEvent'](_0x16cad5, _0x2f5875) {
        }
        ['addFloat'](_0x15da18, _0x2985a1, _0x1eabd4) {
            if (this['isOpenSDK']()) {
                if (_0x15da18) {
                    let _0x43aa16 = window['zzsdkui']['createFloa' + 't'](_0x2985a1, _0x1eabd4, null, function () {
                        _0x1ede3d['Instance']['openInterF' + 'ull']();
                    });
                    return _0x43aa16 && _0x15da18['addChild'](_0x43aa16), _0x43aa16;
                }
                return null;
            }
        }
        ['openInterF' + 'ull'](_0x273e20 = null) {
            this['isOpenSDK']() && this['validAd'] && parent ? _0x5d5e4c['Instance']['openUI'](_0xfa1fac['ZZSDKFullV' + 'iew'], { 'cb': _0x273e20 }) : _0x273e20 && _0x273e20();
        }
        ['addInterFu' + 'll'](_0x528e12) {
            if (this['isOpenSDK']() && this['validAd']) {
                if (_0x528e12) {
                    let _0x3c9379 = _0x26ee17['isLong']() ? 0x64 : 0x23, _0x1bcf5e = window['zzsdkui']['createFull' + 'scroll']('inter_full', Laya['stage']['height'] - _0x3c9379, 0x0, null, function () {
                        });
                    return _0x1bcf5e && _0x528e12['addChild'](_0x1bcf5e), _0x1bcf5e;
                }
                return null;
            }
        }
        ['addInterFu' + 'lllarge'](_0x5d0a62, _0x165977 = null) {
            if (this['isOpenSDK']() && this['validAd']) {
                if (_0x5d0a62) {
                    let _0x22c61e = _0x26ee17['isLong']() ? 0x64 : 0x23, _0x5495d3 = window['zzsdkui']['createFull' + 'scroll']('inter_full' + '_large', null, Laya['stage']['height'] - _0x22c61e, _0x165977, function () {
                        });
                    return _0x5495d3 && _0x5d0a62['addChild'](_0x5495d3), _0x5495d3;
                }
                return null;
            }
        }
        ['openInterP' + 'ic'](_0x2672f2 = null) {
            this['isOpenSDK']() && this['validAd'] && parent ? _0x5d5e4c['Instance']['openUI'](_0xfa1fac['ZZSDKPicVi' + 'ew'], { 'cb': _0x2672f2 }) : _0x2672f2 && _0x2672f2();
        }
        ['addInterFu' + 'llList'](_0x286c3b, _0x54cabb) {
            this['isOpenSDK']() && _0x1ede3d['Instance']['openInterF' + 'ull']();
        }
        ['add3x'](_0x120f02, _0x4d9e7f, _0x55ab41, _0x54dcfd, _0x423f3d = 'x') {
            if (this['isOpenSDK']()) {
                if (_0x120f02) {
                    let _0x412075 = window['zzsdkui']['createInte' + 'rScroll']('inter_' + _0x423f3d, 0x226, _0x4d9e7f, _0x55ab41, _0x54dcfd, function () {
                        _0x1ede3d['Instance']['openInterF' + 'ull']();
                    });
                    return _0x412075 && _0x120f02['addChild'](_0x412075), _0x412075;
                }
                return null;
            }
        }
        ['add3Num'](_0x48c82c, _0x5730db, _0x16b404, _0x254482, _0x50f51e = '3*2') {
            if (this['isOpenSDK']()) {
                if (_0x48c82c) {
                    let _0x363324 = window['zzsdkui']['createInte' + 'r'](_0x50f51e, _0x5730db, _0x16b404, _0x254482, function () {
                        _0x1ede3d['Instance']['openInterF' + 'ull']();
                    });
                    return _0x363324 && (_0x363324['refreshInt' + 'er'](), _0x48c82c['addChild'](_0x363324)), _0x363324;
                }
                return null;
            }
        }
    }
    _0x1ede3d['_instance'] = null, function (_0x1c57a4) {
        _0x1c57a4['showFriend' + 'Rank'] = 'showFriend' + 'Rank', _0x1c57a4['hideFriend' + 'Rank'] = 'hideFriend' + 'Rank', _0x1c57a4['showFriend' + 'RankNextPa' + 'ge'] = 'showFriend' + 'RankNextPa' + 'ge', _0x1c57a4['showFrient' + 'RnakPrevPa' + 'ge'] = 'showFrient' + 'RnakPrevPa' + 'ge', _0x1c57a4['updateGrad' + 'eList'] = 'updateGrad' + 'eList', _0x1c57a4['updataScor' + 'eInfo'] = 'updataScor' + 'eInfo', _0x1c57a4['showFriend' + 'ShareInfo'] = 'showFriend' + 'ShareInfo', _0x1c57a4['targetShar' + 'e'] = 'targetShar' + 'e';
    }(_0x2f37cd || (_0x2f37cd = {}));
    class _0x138f70 {
        constructor() {
            this['bannerAd'] = null, this['bannerShow' + 'Info'] = {}, this['checkShare' + 'd'] = !0x0, this['bannerLoad' + 'Error'] = !0x1, this['lastInters' + 'titialAdTi' + 'me'] = 0x0, this['interstiti' + 'alAd'] = null, this['info'] = {}, this['loginParam' + 's'] = {}, this['setNickNam' + 'eCallback'] = null, this['setHeadCal' + 'lback'] = null, this['showPos'] = 0x0, this['sharePos'] = 0x0, this['showBanner' + 'Pos'] = 0x0, this['lastFetchB' + 'annerTime'] = 0x0, this['rewardedVi' + 'deoAd'] = null, this['curShareTi' + 'mer'] = null, this['lastEndVid' + 'eoAdTime'] = 0x0, this['info'] = _0x138f70['sInfo'], this['loginParam' + 's'] = null, 'undefined' != typeof wx && (Laya['MiniAdpter']['window']['wx']['onShareApp' + 'Message'](_0x445ddc => this['onShareApp' + 'Message'](_0x445ddc)), Laya['MiniAdpter']['window']['wx']['showShareM' + 'enu']({
                'withShareTicket': !0x0,
                'success': function () {
                },
                'fail': function () {
                }
            }), _0x4441f7['Instance']['on'](_0x1c0419['GetFocus'], this, this['onGameFocu' + 's']));
        }
        ['onShareApp' + 'Message'](_0x18cb6c) {
            let _0x246e05 = _0x2128f4['DefaultSha' + 're'], _0x424ea6 = _0xe0a486['Instance']['getVideoSh' + 'areCfg'](_0x2128f4['DefaultSha' + 're']), _0x417628 = _0x2b4af8['getShareIn' + 'foByCfg'](_0x424ea6), _0x19c000 = _0x417628['shareConte' + 'nt'], _0x3e0f18 = _0x417628['imgUrl'], _0x2b6d7f = 0x0, _0x306354 = '';
            return null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0x306354 = _0x1ae356['Instance']['user']['openid'], _0x2b6d7f = _0x1ae356['Instance']['user']['uid']), {
                'title': _0x19c000,
                'imageUrl': _0x3e0f18,
                'query': 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0x306354 + '&pos=' + _0x246e05 + ('&shareTime' + '=') + Date['now']() + ('&inviteCod' + 'e=') + (_0x2b6d7f > 0x0 ? _0x2b6d7f : ''),
                'success': _0x55fe04 => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': 0x0,
                        'shareTickets': _0x55fe04['shareTicke' + 'ts'],
                        'from': 0x1
                    });
                }
            };
        }
        ['sdkLogin'](_0x4067e7, _0x233a82) {
            if ('undefined' != typeof wx) {
                var _0x2f3f6b = _0x4c95dc => {
                        _0x138f70['sInfo']['encryptedD' + 'ata'] = _0x4c95dc['encryptedD' + 'ata'], _0x138f70['sInfo']['iv'] = _0x4c95dc['iv'], _0x138f70['sInfo']['nickName'] = _0x4c95dc['userInfo']['nickName'], _0x138f70['sInfo']['avatar'] = _0x4c95dc['userInfo']['avatarUrl'], _0x138f70['sInfo']['sex'] = _0x4c95dc['userInfo']['gender'], _0x138f70['sInfo']['city'] = _0x4c95dc['userInfo']['city'], _0x4067e7['runWith'](_0x138f70['sInfo']);
                    }, _0x3032ee = _0x13d671 => {
                        _0x4067e7['runWith'](_0x138f70['sInfo']);
                    };
                wx['login']({
                    'success': _0x14f7fa => {
                        _0x138f70['sInfo']['wxCode'] = _0x14f7fa['code'], wx['getUserInf' + 'o']({
                            'withCredentials': !0x0,
                            'lang': 'zh_CN',
                            'success': _0x2f3f6b,
                            'fail': _0x3032ee,
                            'complete': null
                        });
                    },
                    'fail': () => {
                        _0x1ae356['Instance']['loginError'] = !0x0, _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], { 'logined': !0x1 });
                    },
                    'complete': null,
                    'pkgName': _0x2276ef['packageNam' + 'e']
                });
            } else
                _0x1ae356['Instance']['user']['loadCacheD' + 'ata']();
        }
        ['getSetting'](_0x19a6ce, _0x59c13b) {
            wx['getSetting']({
                'success': _0x217ec4 => {
                    var _0x4fa4de = _0x217ec4['authSettin' + 'g'];
                    !0x0 === _0x4fa4de['scope.user' + 'Info'] ? this['sdkLogin'](_0x19a6ce, _0x59c13b) : !0x1 === _0x4fa4de['scope.user' + 'Info'] ? this['openSettin' + 'g']() : _0x4fa4de['scope.reco' + 'rd'] ? _0x4fa4de['scope.writ' + 'ePhotosAlb' + 'um'] ? _0x4fa4de['scope.came' + 'ra'] || this['sdkAuthori' + 'ze']('scope.came' + 'ra') : this['sdkAuthori' + 'ze']('scope.writ' + 'ePhotosAlb' + 'um') : this['sdkAuthori' + 'ze']('scope.reco' + 'rd');
                },
                'fail': null,
                'complete': null
            });
        }
        ['openSettin' + 'g']() {
            wx['openSettin' + 'g']({
                'success': function (_0x4ecf70) {
                },
                'fail': null,
                'complete': null
            });
        }
        ['sdkAuthori' + 'ze'](_0x22aa02) {
            wx['authorize']({
                'scope': _0x22aa02,
                'success': _0x442272 => {
                },
                'fail': () => {
                },
                'complete': null
            });
        }
        ['shareM'](_0x4bebc0, _0x1772fb, _0x5ca762, _0x50c75b, _0x51f872, _0x50379f, _0x1b0d29 = '') {
            if (_0x2276ef['IgnoreShar' + 'e'])
                return void _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], { 'pos': _0x4bebc0 });
            if ('undefined' == typeof wx)
                return;
            this['checkShare' + 'd'] = !0x0, this['curShareTi' + 'mer'] = Date['now'](), this['sharePos'] = _0x4bebc0;
            var _0x1d4077 = _0x5ca762, _0x5e2b19 = '';
            null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0x5e2b19 = _0x1ae356['Instance']['user']['openid']);
            let _0x4ce25b = 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0x5e2b19 + '&pos=' + this['sharePos'] + ('&shareTime' + '=') + _0x50379f + ('&inviteCod' + 'e=') + _0x1ae356['Instance']['user']['uid'] + ('&shareScen' + 'e=') + this['sharePos'], _0x35ea2a = _0x50c75b;
            _0x1772fb && (_0x35ea2a = canvas['toTempFile' + 'PathSync']({
                'destWidth': 0x1f4,
                'destHeight': 0x190
            })), wx['aldShareAp' + 'pMessage']({
                'title': _0x51f872,
                'imageUrl': _0x35ea2a,
                'query': _0x4ce25b,
                'path': _0x4ce25b,
                'ald_desc': _0x1b0d29 || '',
                'success': _0x519339 => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': this['sharePos'],
                        'shareTickets': _0x519339['shareTicke' + 'ts'],
                        'from': _0x1d4077
                    });
                },
                'fail': () => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareFail'], {
                        'pos': this['sharePos'],
                        'from': _0x1d4077
                    });
                },
                'cancel': _0xf98bac => {
                }
            }), Laya['timer']['clear'](this, this['onCheckSha' + 're']);
        }
        ['showVideo'](_0x1f5df8, _0x491dc3, _0x5a3d4b = '') {
        }
        ['onTotal'](_0x2ce04a) {
            if (_0x2ce04a)
                switch (_0x2ce04a) {
                case _0x2128f4['OfflineAD']:
                    _0x5684e2['Instance']['onVideo'](_0x5aa295['video1']);
                    break;
                case _0x2128f4['OpenReward' + 'AD']:
                    _0x5684e2['Instance']['onVideo'](_0x5aa295['video2']);
                    break;
                case _0x2128f4['SignAD']:
                    _0x5684e2['Instance']['onVideo'](_0x5aa295['video3']);
                    break;
                case _0x2128f4['ZSResultAD']:
                    _0x5684e2['Instance']['onVideo'](_0x5aa295['video4']);
                }
        }
        ['showBanner'](_0x32f2e0, _0x3650c1, _0x3ac61c, _0x47b39d, _0x3b95ce, _0x35529d = 0x0, _0x4983cf = 0x0, _0x316ec4 = 0x0, _0x1fbc61 = !0x1) {
            if ('undefined' == typeof wx || !wx['createBann' + 'erAd'])
                return;
            var _0x81dff8 = 'adunit-1cd' + 'b539c9bb2f' + 'fcb';
            null != _0x3650c1 && (_0x81dff8 = _0x3650c1);
            var _0xe1af73 = !0x1;
            _0x26ee17['IsWeChat']() ? _0x32f2e0 === _0xfa1fac['EggView']['id'] ? _0xe1af73 = !0x0 : _0x1ede3d['Instance']['checkBanne' + 'rRefE']() && (_0xe1af73 = !0x0) : this['bannerShow' + 'Count'] >= _0x2276ef['vGameInfo']['bCount'] ? _0xe1af73 = !0x0 : Date['now']() - this['lastFetchB' + 'annerTime'] >= 0x3e8 * _0x2276ef['vGameInfo']['bTimer'] && (_0xe1af73 = !0x0), _0x26ee17['shouldReBu' + 'ild'] && (_0xe1af73 = !0x0, _0x26ee17['shouldReBu' + 'ild'] = !0x1), (_0xe1af73 || this['bannerLoad' + 'Error']) && null != this['bannerAd'] && (this['bannerAd']['destroy'](), this['bannerAd'] = null, this['bannerRes'] = null), this['bannerLoad' + 'Error'] = !0x1, this['showBanner' + 'Pos'] = _0x32f2e0;
            let _0x3d0670 = _0x3b95ce || 0x177;
            _0x3d0670 = _0x3d0670 / 0x177 * _0x4ace69['windowWidt' + 'h'], _0x4ace69['windowWidt' + 'h'] > 0x177 && (_0x35529d = _0x35529d / 0x177 * _0x4ace69['windowWidt' + 'h'], _0x4983cf = _0x4983cf / 0x177 * _0x4ace69['windowWidt' + 'h']);
            let _0x531afb = 0xa;
            if (_0x316ec4 = _0x316ec4 * (0x2 * _0x4ace69['windowHeig' + 'ht'] / Laya['stage']['height']) / 0x2, this['bannerShow' + 'Info']['hAlign'] = _0x3ac61c, this['bannerShow' + 'Info']['vAlign'] = _0x47b39d, this['bannerShow' + 'Info']['pinY'] = _0x316ec4, this['bannerShow' + 'Info']['xOffset'] = _0x35529d, this['bannerShow' + 'Info']['yOffset'] = _0x4983cf, null == this['bannerAd'])
                this['bannerShow' + 'Count'] = 0x1, this['lastFetchB' + 'annerTime'] = Date['now'](), this['bannerAd'] = wx['createBann' + 'erAd']({
                    'adUnitId': _0x81dff8,
                    'style': {
                        'left': 0x0,
                        'top': 0x0,
                        'width': _0x3d0670
                    }
                }), this['bannerAd']['onError'](_0x2ba788 => {
                    this['report'](_0x1f524e['loadBanner' + 'Error'], {
                        'errorCode': _0x2ba788['errCode'],
                        'errMsg': _0x2ba788['errMsg']
                    }), this['bannerLoad' + 'Error'] = !0x0;
                }), this['bannerAd']['onResize'](_0x5a330d => {
                    this['report'](_0x1f524e['loadBanner'], { 'duration': (Date['now']() - this['lastFetchB' + 'annerTime']) / 0x3e8 }), this['bannerRes'] = _0x5a330d, this['adjustBann' + 'er']();
                });
            else
                _0x531afb = 0x0, this['bannerShow' + 'Count']++, this['bannerRes'] && Laya['timer']['once'](0x1, this, this['adjustBann' + 'er']);
            this['bannerAd']['show']()['then'](() => {
                this['report'](_0x1f524e['showBanner'], {
                    'bannerPos': _0x32f2e0,
                    'adUnitID': this['bannerAd']['adUnitId']
                }), setTimeout(() => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShowBanner' + 'Completed'], _0x32f2e0);
                }, _0x531afb);
            })['catch'](_0x10e39b => {
                this['report'](_0x1f524e['loadBanner' + 'Error'], {
                    'errorCode': _0x10e39b['errCode'],
                    'errMsg': _0x10e39b['errMsg']
                }), this['bannerLoad' + 'Error'] = !0x0;
            }), this['bannerAd']['style'] && (this['bannerAd']['style']['width'] = _0x3d0670);
        }
        ['adjustBann' + 'er']() {
            let _0x16e4f8 = this['bannerShow' + 'Info']['hAlign'], _0x4a211f = this['bannerShow' + 'Info']['vAlign'], _0x5b016b = this['bannerShow' + 'Info']['pinY'], _0x5034aa = this['bannerShow' + 'Info']['xOffset'], _0x200a57 = this['bannerShow' + 'Info']['yOffset'];
            if (!this['bannerRes'])
                return;
            let _0x111bed = this['bannerRes'];
            if (null == this['bannerAd'] || null == this['bannerAd']['style'])
                return;
            if (0x0 == _0x16e4f8 ? this['bannerAd']['style']['left'] = 0x0 + _0x5034aa + (_0x2b4af8['getDeviceR' + 'atio']() > 0x2 ? 0x14 : 0x0) : 0x1 == _0x16e4f8 ? this['bannerAd']['style']['left'] = 0.5 * (_0x4ace69['windowWidt' + 'h'] - _0x111bed['width']) + _0x5034aa : 0x2 == _0x16e4f8 && (this['bannerAd']['style']['left'] = _0x4ace69['windowWidt' + 'h'] - _0x111bed['width'] + _0x5034aa - (_0x2b4af8['getDeviceR' + 'atio']() > 0x2 ? 0x14 : 0x0)), 0x0 == _0x4a211f)
                this['bannerAd']['style']['top'] = 0x0 + _0x200a57;
            else {
                if (0x1 == _0x4a211f)
                    this['bannerAd']['style']['top'] = 0.5 * (_0x4ace69['windowHeig' + 'ht'] - _0x111bed['height']) + _0x200a57;
                else {
                    if (0x2 == _0x4a211f) {
                        let _0x3591a8 = 0x0;
                        Laya['stage']['height'] / Laya['stage']['width'] > 0x2 && (_0x3591a8 = 0x32 / 0x984 * Laya['stage']['width']), this['bannerAd']['style']['top'] = _0x4ace69['windowHeig' + 'ht'] - _0x111bed['height'] + _0x200a57 - _0x3591a8, _0x5b016b > 0x0 && _0x5b016b < this['bannerAd']['style']['top'] && (this['bannerAd']['style']['top'] = _0x5b016b + 0x2);
                    }
                }
            }
            let _0x7ccbef = (this['bannerAd']['style']['top'] + _0x111bed['height']) * Laya['stage']['width'] / _0x4ace69['windowWidt' + 'h'], _0x31b3ad = this['bannerAd']['style']['top'] * Laya['stage']['width'] / _0x4ace69['windowWidt' + 'h'];
            _0x4441f7['Instance']['event'](_0x1c0419['BannerPosC' + 'hange'], {
                'ADPos': this['showBanner' + 'Pos'],
                'bottom': _0x7ccbef,
                'top': _0x31b3ad,
                'BannerAD': this['bannerAd']
            });
        }
        ['hideBanner']() {
            null != this['bannerAd'] && this['bannerAd']['hide']();
        }
        ['report'](_0x3caba5, _0x34210e) {
            wx['aldSendEve' + 'nt'] && wx['aldSendEve' + 'nt'](_0x3caba5, _0x34210e);
        }
        ['postToOpen' + 'DataMessag' + 'e'](_0x104728, _0x5d9446) {
            'undefined' != typeof wx && wx['getOpenDat' + 'aContext'] && wx['getOpenDat' + 'aContext']()['postMessag' + 'e']({
                'text': '',
                'type': _0x104728,
                'data': _0x5d9446,
                'openid': _0x1ae356['Instance']['user']['openid']
            });
        }
        ['onCheckSha' + 're']() {
            if (this['checkShare' + 'd'] && this['curShareTi' + 'mer'] > 0x0) {
                if (Date['now']() - this['curShareTi' + 'mer'] >= _0x2276ef['ShareTickT' + 'imer']) {
                    let _0x82cc3d = !(!_0x353499['Instance']['_callShare' + 'Cfg'] || !_0x353499['Instance']['_callShare' + 'Cfg']['fromVideoF' + 'ail']);
                    _0x2b4af8['finishShar' + 'e'](_0x353499['Instance']['_callShare' + 'Cfg']['pos'], !0x0, _0x82cc3d);
                } else {
                    if ('undefined' != typeof wx && !_0x353499['Instance']['wxCheck']()) {
                        let _0x29777c = '分享到不同群才能获得' + '奖励!';
                        0x0 === this['sharePos'] && (_0x29777c = '');
                    }
                }
                this['curShareTi' + 'mer'] = 0x0, this['checkShare' + 'd'] = !0x1;
            }
        }
        ['onGameFocu' + 's']() {
            setTimeout(() => {
                this['onCheckSha' + 're']();
            }, 0x64);
        }
        ['isLowDevic' + 'e']() {
            return _0x26ee17['isAndroid'] && _0x26ee17['isLowDevic' + 'e'];
        }
        ['reportAnal' + 'ytics'](_0x5dc1c8) {
        }
        ['updataScor' + 'eInfo'](_0xe84888) {
            this['postToOpen' + 'DataMessag' + 'e'](_0x2f37cd['updataScor' + 'eInfo'], _0xe84888);
        }
        ['shareVideo'](_0x2d5e65) {
        }
        ['hasOpenAD']() {
            return !0x0;
        }
        ['setLoading' + 'Progress'](_0x25d975) {
        }
        ['showModal'](_0x25b892) {
        }
        ['hideheziAd']() {
        }
        ['showheziAd']() {
        }
    }
    _0x138f70['sInfo'] = {};
    class _0xdb1c50 {
        constructor() {
            this['recorder'] = null, this['videoPath'] = null, this['recording'] = !0x1, this['doKilled'] = !0x1, this['pausing'] = !0x1, this['recordTime'] = 0x0, this['maxRecordT' + 'ime'] = 0x0, _0x26ee17['IsTouTiao']() && 'undefined' != typeof wx && (this['recorder'] = wx['getGameRec' + 'orderManag' + 'er'](), this['initRecord']());
        }
        static get ['Instance']() {
            return null == _0xdb1c50['_instance'] && (_0xdb1c50['_instance'] = new _0xdb1c50()), _0xdb1c50['_instance'];
        }
        ['start'](_0x54e313 = 0x78) {
            this['recorder'] && (this['recording'] && (this['recorder']['stop'](), this['recording'] = !0x1, this['pausing'] = !0x1), this['recorder']['start']({ 'duration': _0x54e313 }), this['maxRecordT' + 'ime'] = _0x54e313, this['recording'] = !0x0, this['doKilled'] = !0x1, this['pausing'] = !0x1, Laya['timer']['clearAll'](this), this['recordTime'] = 0x0, Laya['timer']['loop'](0x3e8, this, this['updateReco' + 'rdTime']), _0x4441f7['Instance']['event'](_0x1c0419['UpdateReco' + 'rdBtn']));
        }
        ['updateReco' + 'rdTime']() {
            this['recording'] && !this['pausing'] && (this['recordTime'] += 0x1, this['recordTime'] + 0x1 >= this['maxRecordT' + 'ime'] && this['stop']());
        }
        ['canShowSha' + 'reVideo']() {
            return !!this['videoPath'];
        }
        ['pause']() {
            this['recorder'] && this['recorder']['recording'] && (this['recorder']['pause'](), this['pausing'] = !0x0);
        }
        ['resume']() {
            this['recorder'] && this['recorder']['recording'] && this['pausing'] && this['recorder']['resume']();
        }
        ['stop']() {
            this['recorder'] && this['recording'] && (Laya['timer']['clearAll'](this), this['recorder']['stop'](), this['recording'] = !0x1, _0x4441f7['Instance']['event'](_0x1c0419['UpdateReco' + 'rdBtn']));
        }
        ['initRecord']() {
            this['recorder'] && (this['recorder']['onStart'](_0x256bfa => {
            }), this['recorder']['onStop'](_0x2545e0 => {
                let _0x54cd24 = _0x2545e0['videoPath'];
                this['recordTime'] <= 0x3 && (_0x54cd24 = null), this['videoPath'] = _0x54cd24;
            }), this['recorder']['onPause'](() => {
            }), this['recorder']['onResume'](() => {
            }), this['recorder']['onError'](_0x225ddd => {
            }), this['recorder']['onInterrup' + 'tionBegin'](_0x33125e => {
            }), this['recorder']['onInterrup' + 'tionEnd'](_0x163c3c => {
            }));
        }
        ['shareVideo'](_0x23584c) {
            this['recording'] && this['stop'](), _0x26ee17['Instance']['shareVideo'](_0x23584c);
        }
    }
    _0xdb1c50['_instance'] = null;
    class _0x56ad2f {
        constructor() {
            this['bannerAd'] = null, this['bannerAdPr' + 'e'] = null, this['bannerZero' + 'HeightCoun' + 't'] = 0x0, this['bannerShow' + 'Info'] = {}, this['bannerErro' + 'r'] = !0x1, this['bannerLoad' + 'Finish'] = !0x1, this['checkShare' + 'd'] = !0x0, this['curShareTi' + 'mer'] = 0x0, this['checkShare' + 'dVideo'] = !0x0, this['curShareVi' + 'deoTimer'] = 0x0, this['info'] = {}, this['loginParam' + 's'] = {}, this['setNickNam' + 'eCallback'] = null, this['setHeadCal' + 'lback'] = null, this['showPos'] = 0x0, this['sharePos'] = 0x0, this['showBanner' + 'Pos'] = 0x0, this['lastFetchB' + 'annerTime'] = 0x0, this['rewardedVi' + 'deoAd'] = null, this['mta'] = null, this['lastEndVid' + 'eoAdTime'] = 0x0, this['info'] = _0x56ad2f['sInfo'], this['loginParam' + 's'] = null, 'undefined' != typeof wx && (Laya['MiniAdpter']['window']['wx']['aldOnShare' + 'AppMessage'](_0x2f3e74 => this['onShareApp' + 'Message'](_0x2f3e74)), Laya['MiniAdpter']['window']['wx']['showShareM' + 'enu']({
                'withShareTicket': !0x0,
                'success': function () {
                },
                'fail': function () {
                }
            }), _0x4441f7['Instance']['on'](_0x1c0419['GetFocus'], this, this['onGameFocu' + 's']));
        }
        ['onShareApp' + 'Message'](_0x3f8509) {
            let _0x467e72 = _0x2128f4['DefaultSha' + 're'], _0x16b61b = _0xe0a486['Instance']['getVideoSh' + 'areCfg'](_0x2128f4['DefaultSha' + 're']), _0x50286c = _0x2b4af8['getShareIn' + 'foByCfg'](_0x16b61b), _0x4dd0ea = _0x50286c['shareConte' + 'nt'], _0x31e6f1 = _0x50286c['imgUrl'], _0x3c2785 = 0x0;
            this['checkShare' + 'd'] = !0x0, this['curShareTi' + 'mer'] = Date['now'](), this['sharePos'] = 0x0, _0x353499['Instance']['_callShare' + 'Cfg'] = null;
            let _0x3e79b8 = '';
            return null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0x3e79b8 = _0x1ae356['Instance']['user']['openid'], _0x3c2785 = _0x1ae356['Instance']['user']['uid']), {
                'title': _0x4dd0ea,
                'imageUrl': _0x31e6f1,
                'query': 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0x3e79b8 + '&pos=' + _0x467e72 + ('&shareTime' + '=') + Date['now']() + ('&inviteCod' + 'e=') + (_0x3c2785 > 0x0 ? _0x3c2785 : ''),
                'success': function (_0x275155) {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': 0x0,
                        'shareTickets': _0x275155['shareTicke' + 'ts'],
                        'from': 0x1
                    });
                }
            };
        }
        ['sdkLogin'](_0x530f21, _0x267568) {
            if ('undefined' != typeof wx) {
                var _0x558ea = _0x1f457d => {
                        _0x56ad2f['sInfo']['encryptedD' + 'ata'] = _0x1f457d['encryptedD' + 'ata'], _0x56ad2f['sInfo']['iv'] = _0x1f457d['iv'], _0x56ad2f['sInfo']['nickName'] = _0x1f457d['userInfo']['nickName'], _0x56ad2f['sInfo']['avatar'] = _0x1f457d['userInfo']['avatarUrl'], _0x56ad2f['sInfo']['sex'] = _0x1f457d['userInfo']['gender'], _0x56ad2f['sInfo']['city'] = _0x1f457d['userInfo']['city'], _0x530f21['runWith'](_0x56ad2f['sInfo']);
                    }, _0x28d76b = _0x508dbe => {
                        _0x530f21['runWith'](_0x56ad2f['sInfo']);
                    };
                wx['login']({
                    'pkgName': '',
                    'force': !0x1,
                    'success': _0x47419c => {
                        let _0x474f76 = null == _0x47419c['code'] ? '' : _0x47419c['code'], _0x4ea122 = null == _0x47419c['anonymousC' + 'ode'] ? '' : _0x47419c['anonymousC' + 'ode'], _0x4118e6 = !0x0;
                        _0x474f76['length'] > 0x5 ? _0x4118e6 = !0x1 : _0x4ea122['length'], _0x56ad2f['sInfo']['wxCode'] = _0x474f76, _0x56ad2f['sInfo']['nCode'] = _0x4ea122, _0x2276ef['isAnonymou' + 's'] = _0x4118e6, wx['getSetting']({
                            'success': _0x2480e7 => {
                                let _0x3d37d4 = _0x2480e7['authSettin' + 'g']['scope.user' + 'Info'];
                                !0x0 === _0x3d37d4 ? wx['getUserInf' + 'o']({
                                    'withCredentials': !0x0,
                                    'lang': 'zh_CN',
                                    'success': _0x558ea,
                                    'fail': _0x28d76b,
                                    'complete': null
                                }) : _0x28d76b && _0x28d76b();
                            },
                            'fail': () => {
                                _0x28d76b && _0x28d76b();
                            },
                            'complete': null
                        });
                    },
                    'fail': () => {
                        _0x1ae356['Instance']['loginError'] = !0x0, _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], { 'logined': !0x1 });
                    },
                    'complete': null
                });
            } else
                _0x1ae356['Instance']['user']['loadCacheD' + 'ata']();
        }
        ['getSetting'](_0x170f25, _0x6c04ea) {
            wx['getSetting']({
                'success': _0xbae0b4 => {
                    var _0x31a4e0 = _0xbae0b4['authSettin' + 'g'];
                    !0x0 === _0x31a4e0['scope.user' + 'Info'] ? this['sdkLogin'](_0x170f25, _0x6c04ea) : !0x1 === _0x31a4e0['scope.user' + 'Info'] ? this['openSettin' + 'g']() : _0x31a4e0['scope.reco' + 'rd'] ? _0x31a4e0['scope.writ' + 'ePhotosAlb' + 'um'] ? _0x31a4e0['scope.came' + 'ra'] || this['sdkAuthori' + 'ze']('scope.came' + 'ra') : this['sdkAuthori' + 'ze']('scope.writ' + 'ePhotosAlb' + 'um') : this['sdkAuthori' + 'ze']('scope.reco' + 'rd');
                },
                'fail': null,
                'complete': null
            });
        }
        ['openSettin' + 'g']() {
            wx['openSettin' + 'g']({
                'success': function (_0x40b529) {
                },
                'fail': null,
                'complete': null
            });
        }
        ['sdkAuthori' + 'ze'](_0x128732) {
            wx['authorize']({
                'scope': _0x128732,
                'success': _0x5a95e6 => {
                },
                'fail': () => {
                },
                'complete': null
            });
        }
        ['shareM'](_0x3c5c6f, _0x7a8e97, _0x263568, _0x2de8b1, _0x53bf87, _0x1aae64, _0x366ebc = '') {
        }
        ['shareVideo'](_0x332173) {
        }
        ['showVideo'](_0x30de9f, _0x38c122, _0x513129 = '') {
        }
        ['showBanner'](_0x6911a0, _0x21a1ad, _0xca632d, _0x4838d3, _0xeaaaaf, _0x228916 = 0x0, _0x401517 = 0x0, _0x50074d = 0x0) {
        }
        ['adjustBann' + 'er']() {
        }
        ['hideBanner']() {
        }
        ['report'](_0xed4c77, _0x2e7902) {
        }
        ['showFriend' + 'Rank'](_0x2f2849, _0x255b4d) {
        }
        ['hideFriend' + 'Rank'](_0x38e5b6) {
        }
        ['showFriend' + 'RankPage'](_0xfa0e93, _0x18e4b4) {
        }
        ['queryRank'](_0x8987fd, _0x1199fe, _0x5c7991) {
        }
        ['uploadGrad' + 'eData'](_0x56c11f) {
        }
        ['onCheckSha' + 're']() {
        }
        ['onCheckSha' + 'reVideo']() {
        }
        ['onGameFocu' + 's']() {
        }
        ['isLowDevic' + 'e']() {
        }
        ['reportAnal' + 'ytics'](_0x2faae9) {
        }
        ['postToOpen' + 'DataMessag' + 'e'](_0x122dfe, _0x415bab) {
        }
        ['updataScor' + 'eInfo']() {
        }
        ['hasOpenAD']() {
        }
        ['setLoading' + 'Progress'](_0x6e23ac) {
        }
        ['showModal'](_0x4ff84a) {
        }
        ['hideheziAd']() {
        }
        ['showheziAd']() {
        }
    }
    _0x56ad2f['sInfo'] = {};
    class _0x60bb3 {
        constructor() {
            this['bannerAd'] = null, this['bannerShow' + 'Info'] = {}, this['checkShare' + 'd'] = !0x0, this['bannerLoad' + 'Error'] = !0x1, this['appBox'] = null, this['appBoxHide'] = !0x1, this['maskBox'] = null, this['info'] = {}, this['loginParam' + 's'] = {}, this['setNickNam' + 'eCallback'] = null, this['setHeadCal' + 'lback'] = null, this['showPos'] = 0x0, this['sharePos'] = 0x0, this['showBanner' + 'Pos'] = 0x0, this['lastFetchB' + 'annerTime'] = 0x0, this['rewardedVi' + 'deoAd'] = null, this['curShareTi' + 'mer'] = null, this['lastEndVid' + 'eoAdTime'] = 0x0, this['info'] = _0x60bb3['sInfo'], this['loginParam' + 's'] = null, 'undefined' != typeof wx && (wx['onShareApp' + 'Message'](_0x33b7a9 => this['onShareApp' + 'Message'](_0x33b7a9)), wx['showShareM' + 'enu']({
                'withShareTicket': !0x0,
                'success': function () {
                },
                'fail': function () {
                }
            }), _0x4441f7['Instance']['on'](_0x1c0419['GetFocus'], this, this['onGameFocu' + 's']));
        }
        ['onShareApp' + 'Message'](_0x547008) {
            let _0x183d3b = _0x2128f4['DefaultSha' + 're'], _0x4d3021 = _0xe0a486['Instance']['getVideoSh' + 'areCfg'](_0x2128f4['DefaultSha' + 're']), _0x11ef9d = _0x2b4af8['getShareIn' + 'foByCfg'](_0x4d3021), _0x2d08c9 = _0x11ef9d['shareConte' + 'nt'], _0x159513 = _0x11ef9d['imgUrl'], _0x44c43c = 0x0, _0x6ce49 = '';
            return null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0x6ce49 = _0x1ae356['Instance']['user']['openid'], _0x44c43c = _0x1ae356['Instance']['user']['uid']), {
                'title': _0x2d08c9,
                'imageUrl': _0x159513,
                'query': 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0x6ce49 + '&pos=' + _0x183d3b + ('&shareTime' + '=') + Date['now']() + ('&inviteCod' + 'e=') + (_0x44c43c > 0x0 ? _0x44c43c : ''),
                'success': _0x506ff8 => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': 0x0,
                        'shareTickets': _0x506ff8['shareTicke' + 'ts'],
                        'from': 0x1
                    });
                }
            };
        }
        ['sdkLogin'](_0x1c443e, _0x46d0db) {
            if ('undefined' != typeof wx) {
                var _0x1aa845 = _0xe347b => {
                        _0x60bb3['sInfo']['encryptedD' + 'ata'] = _0xe347b['encryptedD' + 'ata'], _0x60bb3['sInfo']['iv'] = _0xe347b['iv'], _0x60bb3['sInfo']['nickName'] = _0xe347b['userInfo']['nickName'], _0x60bb3['sInfo']['avatar'] = _0xe347b['userInfo']['avatarUrl'], _0x60bb3['sInfo']['sex'] = _0xe347b['userInfo']['gender'], _0x60bb3['sInfo']['city'] = _0xe347b['userInfo']['city'], _0x1c443e['runWith'](_0x60bb3['sInfo']);
                    }, _0x29b619 = _0x5da74b => {
                        _0x1c443e['runWith'](_0x60bb3['sInfo']);
                    };
                wx['login']({
                    'success': _0x5bc942 => {
                        _0x60bb3['sInfo']['wxCode'] = _0x5bc942['code'], wx['getSetting']({
                            'success': _0x3d2e94 => {
                                let _0x1c8c7b = _0x3d2e94['authSettin' + 'g']['scope.user' + 'Info'];
                                !0x0 === _0x1c8c7b ? wx['getUserInf' + 'o']({
                                    'withCredentials': !0x0,
                                    'lang': 'zh_CN',
                                    'success': _0x1aa845,
                                    'fail': _0x29b619,
                                    'complete': null
                                }) : _0x29b619 && _0x29b619();
                            },
                            'fail': () => {
                                _0x29b619 && _0x29b619();
                            },
                            'complete': null
                        });
                    },
                    'fail': () => {
                        _0x1ae356['Instance']['loginError'] = !0x0, _0x4441f7['Instance']['event'](_0x1c0419['userLoginF' + 'inish'], { 'logined': !0x1 });
                    },
                    'complete': null,
                    'pkgName': _0x2276ef['packageNam' + 'e']
                });
            } else
                _0x1ae356['Instance']['user']['loadCacheD' + 'ata']();
        }
        ['getSetting'](_0x1f0af7, _0x2748a8) {
            wx['getSetting']({
                'success': _0x293275 => {
                    var _0x4d7c7f = _0x293275['authSettin' + 'g'];
                    !0x0 === _0x4d7c7f['scope.user' + 'Info'] ? this['sdkLogin'](_0x1f0af7, _0x2748a8) : !0x1 === _0x4d7c7f['scope.user' + 'Info'] ? this['openSettin' + 'g']() : _0x4d7c7f['scope.reco' + 'rd'] ? _0x4d7c7f['scope.writ' + 'ePhotosAlb' + 'um'] ? _0x4d7c7f['scope.came' + 'ra'] || this['sdkAuthori' + 'ze']('scope.came' + 'ra') : this['sdkAuthori' + 'ze']('scope.writ' + 'ePhotosAlb' + 'um') : this['sdkAuthori' + 'ze']('scope.reco' + 'rd');
                },
                'fail': null,
                'complete': null
            });
        }
        ['openSettin' + 'g']() {
            wx['openSettin' + 'g']({
                'success': function () {
                },
                'fail': null,
                'complete': null
            });
        }
        ['sdkAuthori' + 'ze'](_0x1afb5f) {
            wx['authorize']({
                'scope': _0x1afb5f,
                'success': () => {
                },
                'fail': () => {
                },
                'complete': null
            });
        }
        ['shareM'](_0x1fc2a3, _0x229f1c, _0x58f985, _0x4a0486, _0x37290d, _0x3248f6, _0x584613 = '') {
            if (_0x2276ef['IgnoreShar' + 'e'])
                return void _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], { 'pos': _0x1fc2a3 });
            if ('undefined' == typeof wx)
                return;
            this['checkShare' + 'd'] = !0x0, this['curShareTi' + 'mer'] = Date['now'](), this['sharePos'] = _0x1fc2a3;
            var _0xd82f9f = _0x58f985, _0x544717 = '';
            null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0x544717 = _0x1ae356['Instance']['user']['openid']);
            let _0x41e343 = 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0x544717 + '&pos=' + this['sharePos'] + ('&shareTime' + '=') + _0x3248f6 + ('&inviteCod' + 'e=') + _0x1ae356['Instance']['user']['uid'] + ('&shareScen' + 'e=') + this['sharePos'], _0x6e17b = _0x4a0486;
            _0x229f1c && (_0x6e17b = canvas['toTempFile' + 'PathSync']({
                'destWidth': 0x1f4,
                'destHeight': 0x190
            })), wx['aldShareAp' + 'pMessage']({
                'title': _0x37290d,
                'imageUrl': _0x6e17b,
                'query': _0x41e343,
                'path': _0x41e343,
                'ald_desc': _0x584613 || '',
                'success': _0xa6b17b => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': this['sharePos'],
                        'shareTickets': _0xa6b17b['shareTicke' + 'ts'],
                        'from': _0xd82f9f
                    });
                },
                'fail': () => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareFail'], {
                        'pos': this['sharePos'],
                        'from': _0xd82f9f
                    });
                },
                'cancel': () => {
                }
            }), Laya['timer']['clear'](this, this['onCheckSha' + 're']);
        }
        ['showVideo'](_0x4cedda, _0x14d468, _0xa9d693 = '') {
        }
        ['showBanner'](_0x275941, _0x33604f, _0xefc238, _0x285754, _0x17a31f, _0x29b97e = 0x0, _0x470fdf = 0x0, _0x5f2d43 = 0x0, _0x2ef396 = !0x1) {
        }
        ['adjustBann' + 'er']() {
        }
        ['hideBanner']() {
        }
        ['report'](_0x2c27bd, _0x9342bf) {
        }
        ['postToOpen' + 'DataMessag' + 'e'](_0x551f5c, _0x3b9d96) {
        }
        ['onCheckSha' + 're']() {
        }
        ['onGameFocu' + 's']() {
        }
        ['isLowDevic' + 'e']() {
        }
        ['reportAnal' + 'ytics'](_0x2bb2ec) {
        }
        ['updataScor' + 'eInfo'](_0x304f98) {
        }
        ['shareVideo'](_0x20f64a) {
        }
        ['hasOpenAD']() {
        }
        ['setLoading' + 'Progress'](_0x3b6ccd) {
        }
        ['showModal'](_0x4fd81e) {
        }
        ['hideheziAd']() {
        }
        ['showheziAd']() {
        }
        ['onMaskClic' + 'k'](_0x1de3b0) {
        }
    }
    _0x60bb3['sInfo'] = {};
    class _0x53b7c1 {
        constructor() {
            this['bannerAd'] = null, this['bannerShow' + 'Info'] = {}, this['checkShare' + 'd'] = !0x0, this['bannerLoad' + 'Error'] = !0x1, this['lastInters' + 'titialAdTi' + 'me'] = 0x0, this['interstiti' + 'alAd'] = null, this['info'] = {}, this['loginParam' + 's'] = {}, this['setNickNam' + 'eCallback'] = null, this['setHeadCal' + 'lback'] = null, this['showPos'] = 0x0, this['sharePos'] = 0x0, this['showBanner' + 'Pos'] = 0x0, this['lastFetchB' + 'annerTime'] = 0x0, this['rewardedVi' + 'deoAd'] = null, this['curShareTi' + 'mer'] = null, this['lastEndVid' + 'eoAdTime'] = 0x0, this['info'] = _0x53b7c1['sInfo'], this['loginParam' + 's'] = null;
        }
        ['onShareApp' + 'Message'](_0x1f9dca) {
            let _0x3895c6 = _0x2128f4['DefaultSha' + 're'], _0x53e2d7 = _0xe0a486['Instance']['getVideoSh' + 'areCfg'](_0x2128f4['DefaultSha' + 're']), _0x4374ba = _0x2b4af8['getShareIn' + 'foByCfg'](_0x53e2d7), _0x11b9a9 = _0x4374ba['shareConte' + 'nt'], _0x1319a5 = _0x4374ba['imgUrl'], _0x166c5d = 0x0, _0x3ad312 = '';
            return null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0x3ad312 = _0x1ae356['Instance']['user']['openid'], _0x166c5d = _0x1ae356['Instance']['user']['uid']), {
                'title': _0x11b9a9,
                'imageUrl': _0x1319a5,
                'query': 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0x3ad312 + '&pos=' + _0x3895c6 + ('&shareTime' + '=') + Date['now']() + ('&inviteCod' + 'e=') + (_0x166c5d > 0x0 ? _0x166c5d : ''),
                'success': _0x8709d9 => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': 0x0,
                        'shareTickets': _0x8709d9['shareTicke' + 'ts'],
                        'from': 0x1
                    });
                }
            };
        }
        ['sdkLogin'](_0x3ce4ed, _0x40d3e5) {
            _0x3ce4ed['runWith'](_0x53b7c1['sInfo']);
        }
        ['getSetting'](_0x516b47, _0x44a75b) {
            wx['getSetting']({
                'success': _0x31be77 => {
                    var _0x4a4290 = _0x31be77['authSettin' + 'g'];
                    !0x0 === _0x4a4290['scope.user' + 'Info'] ? this['sdkLogin'](_0x516b47, _0x44a75b) : !0x1 === _0x4a4290['scope.user' + 'Info'] ? this['openSettin' + 'g']() : _0x4a4290['scope.reco' + 'rd'] ? _0x4a4290['scope.writ' + 'ePhotosAlb' + 'um'] ? _0x4a4290['scope.came' + 'ra'] || this['sdkAuthori' + 'ze']('scope.came' + 'ra') : this['sdkAuthori' + 'ze']('scope.writ' + 'ePhotosAlb' + 'um') : this['sdkAuthori' + 'ze']('scope.reco' + 'rd');
                },
                'fail': null,
                'complete': null
            });
        }
        ['openSettin' + 'g']() {
            wx['openSettin' + 'g']({
                'success': function (_0x3be88c) {
                },
                'fail': null,
                'complete': null
            });
        }
        ['sdkAuthori' + 'ze'](_0x163ed5) {
            wx['authorize']({
                'scope': _0x163ed5,
                'success': _0x48e552 => {
                },
                'fail': () => {
                },
                'complete': null
            });
        }
        ['shareM'](_0x56e11e, _0x3490b7, _0x1bc9c4, _0x5d8c38, _0x2c34eb, _0x4dc243, _0x531421 = '') {
            if (_0x2276ef['IgnoreShar' + 'e'])
                return void _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], { 'pos': _0x56e11e });
            if ('undefined' == typeof wx)
                return;
            this['checkShare' + 'd'] = !0x0, this['curShareTi' + 'mer'] = Date['now'](), this['sharePos'] = _0x56e11e;
            var _0x1ba12e = _0x1bc9c4, _0xeef5a5 = '';
            null != _0x1ae356['Instance'] && null != _0x1ae356['Instance']['user'] && (_0xeef5a5 = _0x1ae356['Instance']['user']['openid']);
            let _0x3fc493 = 'inviteName' + '=' + _0x1ae356['Instance']['user']['nickName'] + '&openid=' + _0xeef5a5 + '&pos=' + this['sharePos'] + ('&shareTime' + '=') + _0x4dc243 + ('&inviteCod' + 'e=') + _0x1ae356['Instance']['user']['uid'] + ('&shareScen' + 'e=') + this['sharePos'], _0x1e3ce4 = _0x5d8c38;
            _0x3490b7 && (_0x1e3ce4 = canvas['toTempFile' + 'PathSync']({
                'destWidth': 0x1f4,
                'destHeight': 0x190
            })), wx['aldShareAp' + 'pMessage']({
                'title': _0x2c34eb,
                'imageUrl': _0x1e3ce4,
                'query': _0x3fc493,
                'path': _0x3fc493,
                'ald_desc': _0x531421 || '',
                'success': _0x1ee2b6 => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareSucce' + 'ss'], {
                        'pos': this['sharePos'],
                        'shareTickets': _0x1ee2b6['shareTicke' + 'ts'],
                        'from': _0x1ba12e
                    });
                },
                'fail': () => {
                    _0x4441f7['Instance']['event'](_0x1c0419['ShareFail'], {
                        'pos': this['sharePos'],
                        'from': _0x1ba12e
                    });
                },
                'cancel': _0x1e768e => {
                }
            }), Laya['timer']['clear'](this, this['onCheckSha' + 're']);
        }
        ['showVideo'](_0x13467c, _0xa64820, _0x273e1b = '') {
            if ('undefined' == typeof qttGame || !qttGame['showVideo'])
                return;
            let _0x4babac = {};
            _0x4babac['index'] = _0x13467c, _0x4babac['gametype'] = 0x1, _0x4babac['rewardtype'] = 0x1, _0x2d5683['Instance']['stopMusic'](), _0x523ef5['Instance']['isplaymuis' + 'c'] = !0x0, qttGame['showVideo'](_0xc2ab63 => {
                _0x2d5683['Instance']['playBgm'](), _0x523ef5['Instance']['isplaymuis' + 'c'] = !0x1, 0x1 == _0xc2ab63 ? (_0x353499['Instance']['onShowAdCo' + 'mpleted'](_0x13467c), _0x4441f7['Instance']['event'](_0x1c0419['ShowAdComp' + 'leted'], _0x13467c), _0x4441f7['Instance']['event'](_0x1c0419['CloseShowA' + 'd'], _0x13467c), this['lastEndVid' + 'eoAdTime'] = Date['now'](), _0x4441f7['Instance']['event'](_0x1c0419['FinishVide' + 'oAd'], _0x13467c)) : _0x4441f7['Instance']['event'](_0x1c0419['CloseShowA' + 'd'], _0x13467c);
            }, _0x4babac);
        }
        ['showBanner'](_0x43846d, _0x2fa4c8, _0x33c598, _0x386e55, _0x4a9b06, _0x33268e = 0x0, _0x1131b3 = 0x0, _0x111c8d = 0x0, _0x3e0e1f = !0x1) {
            'undefined' != typeof qttGame && qttGame['showBanner'] && qttGame['showBanner']({
                'index': _0x43846d,
                'x': 0x64,
                'y': 0x64,
                'w': 0x64,
                'stage_width': _0x4ace69['windowWidt' + 'h'],
                'stage_height': _0x4ace69['windowHeig' + 'ht']
            });
        }
        ['adjustBann' + 'er']() {
            let _0x2f281d = this['bannerShow' + 'Info']['hAlign'], _0xe1862b = this['bannerShow' + 'Info']['vAlign'], _0x594ed5 = this['bannerShow' + 'Info']['pinY'], _0x5f519e = this['bannerShow' + 'Info']['xOffset'], _0x4298a7 = this['bannerShow' + 'Info']['yOffset'];
            if (!this['bannerRes'])
                return;
            let _0x3b2de7 = this['bannerRes'];
            if (null == this['bannerAd'] || null == this['bannerAd']['style'])
                return;
            if (0x0 == _0x2f281d ? this['bannerAd']['style']['left'] = 0x0 + _0x5f519e + (_0x2b4af8['getDeviceR' + 'atio']() > 0x2 ? 0x14 : 0x0) : 0x1 == _0x2f281d ? this['bannerAd']['style']['left'] = 0.5 * (_0x4ace69['windowWidt' + 'h'] - _0x3b2de7['width']) + _0x5f519e : 0x2 == _0x2f281d && (this['bannerAd']['style']['left'] = _0x4ace69['windowWidt' + 'h'] - _0x3b2de7['width'] + _0x5f519e - (_0x2b4af8['getDeviceR' + 'atio']() > 0x2 ? 0x14 : 0x0)), 0x0 == _0xe1862b)
                this['bannerAd']['style']['top'] = 0x0 + _0x4298a7;
            else {
                if (0x1 == _0xe1862b)
                    this['bannerAd']['style']['top'] = 0.5 * (_0x4ace69['windowHeig' + 'ht'] - _0x3b2de7['height']) + _0x4298a7;
                else {
                    if (0x2 == _0xe1862b) {
                        let _0x384b27 = 0x0;
                        Laya['stage']['height'] / Laya['stage']['width'] > 0x2 && (_0x384b27 = 0x32 / 0x984 * Laya['stage']['width']), this['bannerAd']['style']['top'] = _0x4ace69['windowHeig' + 'ht'] - _0x3b2de7['height'] + _0x4298a7 - _0x384b27, _0x594ed5 > 0x0 && _0x594ed5 < this['bannerAd']['style']['top'] && (this['bannerAd']['style']['top'] = _0x594ed5 + 0x2);
                    }
                }
            }
            let _0x1053ad = (this['bannerAd']['style']['top'] + _0x3b2de7['height']) * Laya['stage']['width'] / _0x4ace69['windowWidt' + 'h'], _0x5172c0 = this['bannerAd']['style']['top'] * Laya['stage']['width'] / _0x4ace69['windowWidt' + 'h'];
            _0x4441f7['Instance']['event'](_0x1c0419['BannerPosC' + 'hange'], {
                'ADPos': this['showBanner' + 'Pos'],
                'bottom': _0x1053ad,
                'top': _0x5172c0,
                'BannerAD': this['bannerAd']
            });
        }
        ['hideBanner']() {
            'undefined' != typeof qttGame && qttGame['showBanner'] && qttGame['hideBanner']();
        }
        ['report'](_0x284f0d, _0x231541) {
        }
        ['postToOpen' + 'DataMessag' + 'e'](_0x8b1a03, _0x3c08e3) {
            'undefined' != typeof wx && wx['getOpenDat' + 'aContext'] && wx['getOpenDat' + 'aContext']()['postMessag' + 'e']({
                'text': '',
                'type': _0x8b1a03,
                'data': _0x3c08e3,
                'openid': _0x1ae356['Instance']['user']['openid']
            });
        }
        ['onCheckSha' + 're']() {
            if (this['checkShare' + 'd'] && this['curShareTi' + 'mer'] > 0x0) {
                if (Date['now']() - this['curShareTi' + 'mer'] >= _0x2276ef['ShareTickT' + 'imer']) {
                    let _0x3adb44 = !(!_0x353499['Instance']['_callShare' + 'Cfg'] || !_0x353499['Instance']['_callShare' + 'Cfg']['fromVideoF' + 'ail']);
                    _0x2b4af8['finishShar' + 'e'](_0x353499['Instance']['_callShare' + 'Cfg']['pos'], !0x0, _0x3adb44);
                } else {
                    if ('undefined' != typeof wx && !_0x353499['Instance']['wxCheck']()) {
                    }
                }
                this['curShareTi' + 'mer'] = 0x0, this['checkShare' + 'd'] = !0x1;
            }
        }
        ['onGameFocu' + 's']() {
            setTimeout(() => {
                this['onCheckSha' + 're']();
            }, 0x64);
        }
        ['isLowDevic' + 'e']() {
            return _0x26ee17['isAndroid'] && _0x26ee17['isLowDevic' + 'e'];
        }
        ['reportAnal' + 'ytics'](_0x59651e) {
        }
        ['updataScor' + 'eInfo'](_0x191a2c) {
            this['postToOpen' + 'DataMessag' + 'e'](_0x2f37cd['updataScor' + 'eInfo'], _0x191a2c);
        }
        ['shareVideo'](_0x15f488) {
        }
        ['hasOpenAD']() {
            return !0x0;
        }
        ['setLoading' + 'Progress'](_0x271989) {
        }
        ['showModal'](_0x4044e8) {
        }
        ['hideheziAd']() {
        }
        ['showheziAd']() {
        }
    }
    _0x53b7c1['sInfo'] = {};
    class _0x26ee17 {
        static get ['Instance']() {
            if (null == _0x26ee17['_instance'])
                switch (_0x2276ef['Platform']) {
                case _0x18e875['Wechat']:
                    'undefined' != typeof wx ? _0x26ee17['_instance'] = new _0x138f70() : _0x26ee17['_instance'] = new _0x3dfdfb();
                    break;
                case _0x18e875['TouTiao']:
                    'undefined' != typeof wx ? _0x26ee17['_instance'] = new _0x56ad2f() : _0x26ee17['_instance'] = new _0x3dfdfb();
                    break;
                case _0x18e875['QQ']:
                    'undefined' != typeof wx ? _0x26ee17['_instance'] = new _0x60bb3() : _0x26ee17['_instance'] = new _0x3dfdfb();
                    break;
                case _0x18e875['Qutoutiao']:
                    'undefined' != typeof qttGame ? _0x26ee17['_instance'] = new _0x53b7c1() : _0x26ee17['_instance'] = new _0x3dfdfb();
                    break;
                default:
                    _0x26ee17['_instance'] = new _0x3dfdfb();
                }
            return _0x26ee17['_instance'];
        }
        static ['IsTencentG' + 'ame']() {
            return _0x2276ef['Platform'] == _0x18e875['Wechat'] || _0x2276ef['Platform'] == _0x18e875['QQ'];
        }
        static ['IsWeChat']() {
            return _0x2276ef['Platform'] == _0x18e875['Wechat'];
        }
        static ['IsTouTiao']() {
            return _0x2276ef['Platform'] == _0x18e875['TouTiao'];
        }
        static ['IsQQ']() {
            return _0x2276ef['Platform'] == _0x18e875['QQ'];
        }
        static ['IsOppo']() {
            return _0x2276ef['Platform'] == _0x18e875['Oppo'];
        }
        static ['IsQutoutia' + 'o']() {
            return _0x2276ef['Platform'] == _0x18e875['Qutoutiao'];
        }
        static ['canShowWXO' + 'penDomain']() {
            return !!_0x2b4af8['onMobile']() && (!(!_0x26ee17['IsTencentG' + 'ame']() || !_0x2276ef['SupportOpe' + 'nDomain']) && 'undefined' != typeof wx);
        }
        static ['isLong']() {
            return !(Laya['stage']['height'] / Laya['stage']['width'] < 0x2);
        }
        static ['nodeReport'](_0x4af59a, _0x648bba) {
            _0x4ace69['isNewPlaye' + 'r'] && _0x26ee17['Instance']['report'](_0x4af59a, _0x648bba);
        }
        static ['shouldShow' + 'TReommend']() {
            return !!this['IsTouTiao']() && ('undefined' != typeof wx && void 0x0 !== wx['createMore' + 'GamesButto' + 'n'] && !(this['isIos'] && !_0x2276ef['vGameInfo']['tIosRecomm' + 'end']));
        }
        static ['getPlatfor' + 'm']() {
            return 'undefined' != typeof qg ? qg : 'undefined' != typeof wx ? wx : null;
        }
        static ['registerQG' + 'AldRequest']() {
            if ('undefined' != typeof qg && !qg['aldRequest']) {
                qg['aldRequest'] = _0x3c4470 => {
                    let _0xfc3573 = _0x3c4470['url'], _0x36843a = _0x3c4470['data'];
                    return new Promise((_0x521777, _0x284748) => {
                        new _0x2e6704((_0x418298, _0xe5eb6f) => {
                            _0x418298 ? _0x3c4470['fail']() : _0x3c4470['success']({
                                'statusCode': 0xc8,
                                'data': _0xe5eb6f
                            });
                        })['sendGet'](_0xfc3573, _0x36843a, 'text', _0x3c4470['header']);
                    });
                };
                {
                    let _0x2c8f6d = {}, _0x2d4030 = 'https://gl' + 'og.aldwx.c' + 'om/config/' + 'app.json';
                    new _0x2e6704((_0xa8276c, _0x5e5856) => {
                    })['sendGet'](_0x2d4030, _0x2c8f6d, 'text');
                }
            }
        }
        static ['onShow'](_0x503e2b, _0x3f5885) {
            return _0x26ee17['IsQutoutia' + 'o']() && window['document']['addEventLi' + 'stener']('visibility' + 'change', _0x246a8a => {
                window['document']['hidden'] ? _0x2d5683['Instance']['stopMusic']() : _0x523ef5['Instance']['isplaymuis' + 'c'] || _0x2d5683['Instance']['playBgm']();
            }), 'undefined' != typeof qg ? (qg['onShow'] && qg['onShow'](_0x503e2b), void (qg['onHide'] && qg['onHide'](_0x3f5885))) : 'undefined' != typeof qq ? (qq['onShow'] && qq['onShow'](_0x503e2b), void (qq['onHide'] && qq['onHide'](_0x3f5885))) : 'undefined' != typeof wx ? (Laya['MiniAdpter']['window']['wx']['onShow'](_0x503e2b), void Laya['MiniAdpter']['window']['wx']['onHide'](_0x3f5885)) : void 0x0;
        }
        static ['vibrateSho' + 'rt']() {
            'undefined' == typeof wx || wx['vibrateSho' + 'rt']({
                'success': null,
                'fail': null,
                'complete': null
            });
        }
    }
    _0x26ee17['isQG'] = !0x1, _0x26ee17['shouldReBu' + 'ild'] = !0x1;
    class _0x2b4af8 {
        static ['onMobile']() {
            return Laya['Browser']['onIOS'] || Laya['Browser']['onAndroid'] || Laya['Browser']['onMobile'];
        }
        static ['finishVide' + 'o'](_0x1a80a9) {
            _0x4441f7['Instance']['event'](_0x1c0419['ShowAdComp' + 'leted'], _0x1a80a9), _0x4441f7['Instance']['event'](_0x1c0419['CloseShowA' + 'd'], _0x1a80a9);
        }
        static ['getShareIn' + 'foByCfg'](_0x5c467e) {
            if (_0x5c467e && _0x5c467e['imgUrl'] && _0x5c467e['imgUrl']['length'] && _0x5c467e['shareConte' + 'nt'] && _0x5c467e['shareConte' + 'nt']['length'])
                return {
                    'imgUrl': _0x5c467e['imgUrl'],
                    'shareContent': _0x5c467e['shareConte' + 'nt']
                };
            let _0xc505e8 = _0x2276ef['ShareInfoL' + 'ist']['length'];
            if (_0xc505e8 > 0x0) {
                let _0x4dd0ae = Math['floor'](Math['random']() * _0xc505e8);
                if (_0x26ee17['IsTouTiao']() && (_0x4dd0ae = 0x0), _0x4dd0ae < _0xc505e8)
                    return _0x2276ef['ShareInfoL' + 'ist'][_0x4dd0ae];
            }
            return {
                'imgUrl': '',
                'shareContent': ''
            };
        }
        static ['getDeviceR' + 'atio']() {
            return Laya['stage']['height'] / Laya['stage']['width'];
        }
        static ['getBannerO' + 'ffset']() {
            return 0x14;
        }
        static ['getNormalB' + 'annerOffse' + 't']() {
            return 0x28 / _0x4ace69['windowWidt' + 'h'] * Laya['stage']['width'];
        }
        static ['bannerMove' + 'Y'](_0x114a07 = 0x0) {
            return _0x2b4af8['getNormalB' + 'annerOffse' + 't']() + _0x114a07;
        }
        static ['checkOverD' + 'ay']() {
            let _0xb994c0 = parseInt(Laya['LocalStora' + 'ge']['getItem']('curPlayDay') || '0'), _0x335f24 = Date['now'](), _0x5a6226 = !_0x4877e4['isSameDay'](_0x335f24, _0xb994c0);
            return _0x5a6226 && Laya['LocalStora' + 'ge']['setItem']('curPlayDay', _0x335f24['toString']()), _0x5a6226;
        }
        static ['finishShar' + 'e'](_0x48ac68, _0x4c3b2e = !0x1, _0x5e49b9 = !0x1) {
            _0x353499['Instance']['onShowAdCo' + 'mpleted'](_0x48ac68, _0x5e49b9), _0x4441f7['Instance']['event'](_0x1c0419['ShowAdComp' + 'leted'], _0x48ac68), _0x4441f7['Instance']['event'](_0x1c0419['CloseShowA' + 'd'], _0x48ac68);
        }
        static ['finishShar' + 'eVideo'](_0x684a9) {
            _0x4441f7['Instance']['event'](_0x1c0419['ShowShareV' + 'ideoComple' + 'ted'], _0x684a9), _0x4441f7['Instance']['event'](_0x1c0419['CloseShowS' + 'hareViedo'], _0x684a9);
        }
        static ['subString'](_0x5f04e4, _0x39afe1, _0x304b1e) {
            for (var _0x31ff52 = 0x0, _0x261982 = '', _0x1802d7 = /[^\x00-\xff]/g, _0x3cd055 = '', _0x3ff7dc = _0x5f04e4['replace'](_0x1802d7, '**')['length'], _0x40068d = 0x0; _0x40068d < _0x3ff7dc && (null == (_0x3cd055 = _0x5f04e4['charAt'](_0x40068d)['toString']())['match'](_0x1802d7) ? _0x31ff52++ : _0x31ff52 += 0x2, !(_0x31ff52 > _0x39afe1)); _0x40068d++)
                _0x261982 += _0x3cd055;
            return _0x304b1e && _0x3ff7dc > _0x39afe1 && (_0x261982 += '...'), _0x261982;
        }
        static ['clearDicti' + 'onary'](_0x4d2fcc) {
            for (var _0x517c21 in _0x4d2fcc)
                delete _0x4d2fcc[_0x517c21];
        }
        static ['arrayRemov' + 'e'](_0x145cd1, _0x22aa84) {
            let _0x3ad61d = _0x145cd1['indexOf'](_0x22aa84);
            _0x3ad61d > -0x1 && _0x145cd1['splice'](_0x3ad61d, 0x1);
        }
        static ['setVector3'](_0x5b7f57, _0x34e22e, _0x42d7e4, _0x26c9a2) {
            _0x5b7f57['x'] = _0x34e22e, _0x5b7f57['y'] = _0x42d7e4, _0x5b7f57['z'] = _0x26c9a2;
        }
        static ['Vector3Mul' + 'Number'](_0x25d79c, _0x1f9ab1) {
            return new Laya['Vector3'](_0x25d79c['x'] * _0x1f9ab1, _0x25d79c['y'] * _0x1f9ab1, _0x25d79c['z'] * _0x1f9ab1);
        }
        static ['uuid']() {
            var _0x5eb190, _0x56bc8f = ('0123456789' + 'ABCDEFGHIJ' + 'KLMNOPQRST' + 'UVWXYZabcd' + 'efghijklmn' + 'opqrstuvwx' + 'yz')['split'](''), _0x9f3af5 = [];
            for (_0x5eb190 = 0x0; _0x5eb190 < 0x20; _0x5eb190++)
                _0x9f3af5[_0x5eb190] = _0x56bc8f[0x0 | 0x10 * Math['random']()];
            return _0x9f3af5['join']('');
        }
    }
    !function (_0xb30e2d) {
        _0xb30e2d[_0xb30e2d['write'] = 0x1] = 'write', _0xb30e2d[_0xb30e2d['black'] = 0x2] = 'black', _0xb30e2d[_0xb30e2d['green'] = 0x3] = 'green', _0xb30e2d[_0xb30e2d['yellow'] = 0x4] = 'yellow', _0xb30e2d[_0xb30e2d['red'] = 0x5] = 'red', _0xb30e2d[_0xb30e2d['blacksugar'] = 0x6] = 'blacksugar', _0xb30e2d[_0xb30e2d['redsugar'] = 0x7] = 'redsugar', _0xb30e2d[_0xb30e2d['ice'] = 0x8] = 'ice', _0xb30e2d[_0xb30e2d['redwater'] = 0x9] = 'redwater', _0xb30e2d[_0xb30e2d['yellowwate' + 'r'] = 0xa] = 'yellowwate' + 'r', _0xb30e2d[_0xb30e2d['bluewater'] = 0xb] = 'bluewater';
    }(_0x2ad709 || (_0x2ad709 = {}));
    let _0x241c4b = [
            'game/m_dro' + 'pwriteZZ.p' + 'ng',
            'game/m_dro' + 'pblackZZ.p' + 'ng',
            'game/m_dro' + 'pyellowZZ.' + 'png',
            'game/m_dro' + 'predZZ.png',
            'game/m_dro' + 'pgreedZZ.p' + 'ng',
            'game/m_dro' + 'pblackSuga' + 'r.png',
            'game/m_dro' + 'predSugar.' + 'png',
            'game/m_dro' + 'pIce.png'
        ], _0x1864af = [
            'game/m_sho' + 'wwaitezz.p' + 'ng',
            'game/m_sho' + 'wblackzz.p' + 'ng',
            'game/m_sho' + 'wwaitezz.p' + 'ng',
            'game/m_sho' + 'wredzz.png',
            'game/m_sho' + 'wgreedzz.p' + 'ng',
            'game/m_sho' + 'wblacksuga' + 'r.png',
            'game/m_sho' + 'wredsugar.' + 'png',
            'game/m_sho' + 'wice.png',
            'game/m_sho' + 'wredwater.' + 'png',
            'game/m_sho' + 'wyellowwat' + 'er.png',
            'game/m_sho' + 'wbulewater' + '.png'
        ], _0x4c9048 = [
            'game/m_wri' + 'teZZ.png',
            'game/m_bla' + 'ckZZ.png',
            'game/m_yel' + 'lowZZ.png',
            'game/m_red' + 'ZZ.png',
            'game/m_gre' + 'edZZ.png',
            'game/m_bla' + 'cksugar.pn' + 'g',
            'game/m_red' + 'sugar.png',
            'game/m_ice' + '.png',
            'game/m_red' + 'water.png',
            'game/m_yel' + 'lowwater.p' + 'ng',
            'game/m_bul' + 'ewater.png'
        ];
    class _0x1ae356 {
        constructor() {
            this['inviteCode'] = '', this['headIconUr' + 'l'] = '', this['logined'] = !0x1, this['loginError'] = !0x1, this['successLog' + 'inCb'] = null, this['updateInfo' + 'Data'] = null, this['isReadData'] = !0x1, this['lastSendDa' + 'taTime'] = 0x0, this['saveDataTi' + 'me'] = 0xf0, this['flushSaveD' + 'ataTime'] = 0x14, this['IsRandomSc' + 'ene'] = !0x1, this['m_onlineSt' + 'artTime'] = 0x0, this['user'] = new _0x146294(), this['headIconUr' + 'l'] = '', Laya['timer']['loop'](0x3e8 * this['flushSaveD' + 'ataTime'], this, this['doSaveGame' + 'Data']), _0x4441f7['Instance']['on'](_0x1c0419['OverDayEve' + 'nt'], this, this['resetByOve' + 'rDay']);
        }
        static get ['Instance']() {
            return null == _0x1ae356['_instance'] && (_0x1ae356['_instance'] = new _0x1ae356()), _0x1ae356['_instance'];
        }
        ['resetByOve' + 'rDay']() {
            let _0x16f0c8 = Laya['Browser']['now'](), _0x34a475 = this['user']['playerInfo'];
            _0x34a475['login_date'] = _0x16f0c8, _0x34a475['dayBattleC' + 'ount'] = 0x0, _0x34a475['dayNotTry'] = !0x1;
        }
        ['doSaveGame' + 'Data'](_0x47ed29 = !0x1, _0x5cc8e0 = !0x1) {
            let _0x154dfc = _0x5cc8e0, _0x41eef5 = Laya['Browser']['now']();
            this['realSaveDa' + 'ta']();
        }
        ['realSaveDa' + 'ta'](_0x3477ed = !0x1, _0x1f9be3 = 0x0) {
            Laya['timer']['clear'](this, this['realSaveDa' + 'ta']);
            let _0x295829 = Laya['Browser']['now']();
            this['user']['playerInfo']['save_time'] = _0x295829, this['user']['playerInfo']['ver'] = _0x2276ef['ClientVer'], this['user']['saveToStor' + 'age']();
        }
        static ['saveGameDa' + 'ta'](_0x309dab = !0x1, _0x11ebd7 = !0x1) {
            _0x1ae356['Instance']['doSaveGame' + 'Data'](_0x309dab, _0x11ebd7);
        }
        ['readDataIn' + 'fo'](_0x1e3914) {
            if (this['isReadData'])
                return;
            _0x2276ef['recoverDat' + 'a'] || (_0x1e3914 = null), this['user']['isDefaultD' + 'ata'] && _0x1e3914 && (this['user']['playerInfo'] = Object['assign']({}, _0x1e3914)), this['user']['isDefaultD' + 'ata'] = !0x1, this['isReadData'] = !0x0;
            let _0xac9915 = this['user']['playerInfo']['login_date'];
            !0x1 === _0x4877e4['isToday'](_0xac9915) && this['resetByOve' + 'rDay'](), this['doSaveGame' + 'Data']();
        }
        get ['gold']() {
            return this['user']['playerInfo']['gold'] || (this['user']['playerInfo']['gold'] = 0x0), this['user']['playerInfo']['gold'] || 0x0;
        }
        set ['gold'](_0x48cbf9) {
            this['user']['playerInfo']['gold'] = _0x48cbf9;
        }
        get ['playerInfo']() {
            return this['user'] && !this['user']['playerInfo'] && (this['user']['playerInfo'] = {}), this['user']['playerInfo'];
        }
        ['updateWith' + 'ChangeData'](_0x5a89e1) {
            if (!this['playerInfo'])
                return;
            let _0x4f534f = this['playerInfo'];
            for (let _0x46805a in _0x5a89e1) {
                _0x4f534f[_0x46805a] += _0x5a89e1[_0x46805a];
            }
            this['playerInfo']['gold'] && (this['user']['playerInfo']['gold'] = this['playerInfo']['gold']), _0x4441f7['Instance']['event'](_0x1c0419['PlayerGood' + 'sUpdate']), this['doSaveGame' + 'Data']();
        }
        get ['battleCoun' + 't']() {
            return this['playerInfo']['battleCoun' + 't'] || 0x0;
        }
        set ['battleCoun' + 't'](_0x3cf802) {
            this['playerInfo']['battleCoun' + 't'] = _0x3cf802 || 0x0;
        }
        get ['dayBattleC' + 'ount']() {
            return this['playerInfo']['dayBattleC' + 'ount'] || 0x0;
        }
        set ['dayBattleC' + 'ount'](_0x2b0df2) {
            this['playerInfo']['dayBattleC' + 'ount'] = _0x2b0df2 || 0x0;
        }
        get ['grade']() {
            return this['playerInfo']['grade'] || 0x1;
        }
        set ['grade'](_0x4cde39) {
            this['playerInfo']['grade'] = _0x4cde39;
        }
        get ['level']() {
            return this['user']['playerInfo']['level'] || 0x1;
        }
        set ['level'](_0x668d66) {
            this['user']['playerInfo']['level'] = _0x668d66;
        }
        get ['onlineStar' + 'tTime']() {
            return this['m_onlineSt' + 'artTime'] || 0x0;
        }
        set ['onlineStar' + 'tTime'](_0x1dc2da) {
            this['m_onlineSt' + 'artTime'] = _0x1dc2da;
        }
        get ['onlineTime']() {
            return this['playerInfo']['onlineTime'] || 0x0;
        }
        set ['onlineTime'](_0x4373db) {
            this['playerInfo']['onlineTime'] = _0x4373db;
        }
        get ['dayNotTry']() {
            return this['playerInfo']['dayNotTry'] || !0x1;
        }
        set ['dayNotTry'](_0x348cda) {
            this['playerInfo']['dayNotTry'] = _0x348cda;
        }
        ['getUUID']() {
            let _0x122790 = Laya['LocalStora' + 'ge']['getJSON']('useruuid');
            return _0x122790 || (_0x122790 = _0x2b4af8['uuid']()) && Laya['LocalStora' + 'ge']['setJSON']('useruuid', _0x122790), _0x122790;
        }
    }
    var _0x26d183;
    _0x1ae356['_instance'] = null, _0x1ae356['taskRed'] = !0x1, function (_0x3daf5b) {
        _0x3daf5b[_0x3daf5b['free'] = 0x0] = 'free', _0x3daf5b[_0x3daf5b['vedio'] = 0x1] = 'vedio', _0x3daf5b[_0x3daf5b['grade'] = 0x2] = 'grade', _0x3daf5b[_0x3daf5b['sign'] = 0x3] = 'sign';
    }(_0x26d183 || (_0x26d183 = {}));
    class _0x5ad2aa {
        constructor() {
            this['tempSkin'] = -0x1;
        }
        static get ['Instance']() {
            return null === _0x5ad2aa['_instance'] && (_0x5ad2aa['_instance'] = new _0x5ad2aa()), _0x5ad2aa['_instance'];
        }
        get ['curSkin']() {
            return _0x1ae356['Instance']['playerInfo']['curSkin'] || 0x1;
        }
        set ['curSkin'](_0x2fed59) {
            _0x1ae356['Instance']['playerInfo']['curSkin'] = _0x2fed59;
        }
        ['getSkinCfg'](_0x4f8c24) {
            return _0x4f8c24 > _0xe0a486['Instance']['skinCfg']['length'] && (_0x4f8c24 = 0x1), _0xe0a486['Instance']['skinCfg'][_0x4f8c24 - 0x1];
        }
        ['hasComplet' + 'e'](_0xb926e) {
            return !0x1;
        }
        ['getSkinInf' + 'o'](_0x4a0b97) {
            return (_0x1ae356['Instance']['playerInfo']['skinArr'] || [])[_0x4a0b97] || !0x1;
        }
        ['setSkinInf' + 'o'](_0xcf6bc5, _0x331300) {
            _0x1ae356['Instance']['playerInfo']['skinArr'][_0xcf6bc5] = _0x331300, _0x1ae356['Instance']['doSaveGame' + 'Data']();
        }
        ['setTempSki' + 'n'](_0x33766c) {
            this['tempSkin'] = _0x33766c;
        }
        ['resetTempS' + 'kin']() {
            this['tempSkin'] = -0x1;
        }
        ['getGameSki' + 'nId']() {
            let _0x11f183 = this['curSkin'];
            return this['tempSkin'] >= 0x0 && (_0x11f183 = this['tempSkin']), _0x11f183;
        }
        ['getRandomS' + 'kinId']() {
            return _0x235821['getRandom'](0x1, 0x5);
        }
        ['getRandomL' + 'ockSkinCfg']() {
            let _0x44e7a6 = [], _0x36dea7 = _0xe0a486['Instance']['itemsConfi' + 'gData'];
            if (_0x36dea7)
                for (let _0x1f5a1c = 0x0; _0x1f5a1c < _0x36dea7['length']; _0x1f5a1c++) {
                    let _0x53e214 = _0x36dea7[_0x1f5a1c];
                    _0x5ad2aa['Instance']['getSkinInf' + 'o'](_0x53e214['Id']) || _0x44e7a6['push'](_0x53e214);
                }
            if (_0x44e7a6['length'] > 0x0)
                return _0x44e7a6[Math['floor'](Math['random']() * (_0x44e7a6['length'] - 0x1))];
            return null;
        }
        ['getItemCfg'](_0x38635c) {
            return _0xe0a486['Instance']['itemsConfi' + 'gData'][_0x38635c - 0x1];
        }
        ['getItemCfg' + 'Length']() {
            return _0xe0a486['Instance']['itemsConfi' + 'gData']['length'];
        }
        ['getUnlockS' + 'kinCount']() {
            var _0x445c4b = 0x0, _0x49742f = _0xe0a486['Instance']['itemsConfi' + 'gData'];
            for (let _0x377b3a = 0x0; _0x377b3a < _0x49742f['length']; _0x377b3a++)
                this['getSkinInf' + 'o'](_0x49742f[_0x377b3a]['Id']) && _0x445c4b++;
            return _0x445c4b;
        }
    }
    _0x5ad2aa['_instance'] = null;
    class _0x364357 {
        constructor() {
            this['coin'] = 0x0, this['title'] = '', this['skinId'] = 0x0, this['isDouble'] = !0x1, this['highlight'] = !0x1, this['signed'] = !0x1;
        }
    }
    class _0x3bce27 extends _0x3a0bc3['item']['SignItemVi' + 'ewUI'] {
        constructor() {
            super(...arguments), this['item'] = null;
        }
        ['onEnable']() {
        }
        ['onDisable']() {
        }
        ['updateSign' + 'Item'](_0x349f12) {
            if (this['item'] = _0x349f12, this['bgImage']['skin'] = _0x349f12['highlight'] ? 'sign/cur_i' + 'tem_bg.png' : 'sign/item_' + 'bg.png', this['titleLabel']['color'] = _0x349f12['highlight'] ? '#AF7302' : '#343D72', _0x349f12['skinId'] > 0x0) {
                this['shineImage']['visible'] = !0x0, this['ani1']['play'](0x0, !0x0);
                let _0x2b4418 = _0x5ad2aa['Instance']['getSkinCfg'](_0x349f12['skinId']);
                this['itemImageV' + 'iew']['skin'] = _0x2b4418 && _0x2b4418['img'] || '', this['descLabel']['text'] = '';
            } else
                this['shineImage']['visible'] = !0x1, this['ani1']['stop'](), this['descLabel']['text'] = 'X' + (_0x349f12['coin'] || 0x0), this['itemImageV' + 'iew']['skin'] = 'game/gold2' + '.png';
            this['titleLabel']['text'] = _0x349f12['title'], this['signedImag' + 'e']['visible'] = _0x349f12['signed'], this['containBox']['disabled'] = _0x349f12['signed'];
        }
    }
    class _0x566779 extends Laya['Box'] {
        constructor() {
            super(), this['uiname'] = '', this['uiname'] = null, Laya['timer']['once'](0x14, this, this['adapter']);
        }
        ['onDisable']() {
            Laya['timer']['clearAll'](this);
        }
        static ['getBangSaf' + 'eOffX']() {
            return Laya['stage']['width'] / Laya['stage']['height'] < 0x2 ? 0x0 : 0x84 / 0x984 * Laya['stage']['width'];
        }
        ['adapter']() {
            if ('scale' === this['name']) {
                var _0x27b96a = Laya['stage']['width'] / Laya['stage']['designWidt' + 'h'], _0x2dd013 = Laya['stage']['height'] / Laya['stage']['designHeig' + 'ht'], _0x518df7 = _0x27b96a > _0x2dd013 ? _0x27b96a : _0x2dd013;
                return this['scaleX'] = _0x518df7, this['scaleY'] = _0x518df7, this['uiname'] = this['parent']['uiname'], void _0x5d5e4c['Instance']['addAdapter'](this);
            }
            Laya['stage']['designHeig' + 'ht'], Laya['stage']['designWidt' + 'h'];
            if (!(Laya['stage']['height'] / Laya['stage']['width'] < 0x2)) {
                var _0x2afafd = 0x84 / 0x984 * Laya['stage']['height'];
                isNaN(this['top']) || (this['top'] = _0x2afafd + this['top']);
            }
        }
    }
    class _0x9e71a2 extends Laya['Script'] {
        constructor() {
            super();
        }
        ['onEnable']() {
            if (this['owner']) {
                let _0x5e949a = this['owner']['getChildBy' + 'Name']('btnBg');
                _0x26ee17['IsTouTiao']() || _0x26ee17['IsOppo']() ? _0x5e949a['visible'] = !0x0 : _0x5e949a['visible'] = !0x1;
            }
        }
        ['onDisable']() {
        }
    }
    class _0x15beed extends _0x3a0bc3['tui']['BottomTuiV' + 'iewUI'] {
        constructor() {
            super();
        }
        ['onEnable']() {
            _0x5584f8['Instance']['canShowWXR' + 'ecommend'] ? (this['registerEv' + 'ent'](), this['updateData' + 'Source']()) : this['visible'] = !0x1;
        }
        ['onDisable']() {
            this['unregister' + 'Event'](), Laya['timer']['clearAll'](this);
        }
        ['registerEv' + 'ent']() {
            _0x4441f7['Instance']['on'](_0x259e15['UpdateData'], this, this['updateData' + 'Source']);
        }
        ['unregister' + 'Event']() {
            _0x4441f7['Instance']['off'](_0x259e15['UpdateData'], this, this['updateData' + 'Source']);
        }
        ['updateData' + 'Source']() {
            let _0x2819d8 = _0x5584f8['Instance']['getInfo']('lunbo');
            if (_0x2819d8 && _0x2819d8['length'] > 0x0) {
                let _0x32cde3 = []['concat'](_0x2819d8);
                this['tuiList']['visible'] = !0x0, this['tuiList']['hScrollBar' + 'Skin'] = '', this['tuiList']['updateData' + 'Source'](_0x5584f8['getScorllD' + 'ata'](_0x32cde3)), this['tuiList']['selectEnab' + 'le'] = !0x0;
                let _0x482b63 = Math['floor'](Math['random']() * _0x32cde3['length']);
                this['tuiList']['renderHand' + 'ler'] = new Laya['Handler'](this, function (_0x180a84, _0x3fab60) {
                    let _0x2fdedb = (_0x3fab60 + _0x482b63) % _0x32cde3['length'], _0x28afb6 = _0x32cde3[_0x2fdedb];
                    if (!_0x28afb6)
                        return;
                    let _0x4b6cd1 = _0x180a84['getChildBy' + 'Name']('itemImg'), _0x42ab28 = _0x180a84['getChildBy' + 'Name']('itemName'), _0x612f07 = _0x180a84['getChildBy' + 'Name']('itemRed');
                    _0x5584f8['checkTuiIt' + 'emRed'](_0x612f07), _0x4b6cd1['updateImag' + 'e'](_0x28afb6['appIcon']), _0x42ab28['text'] = _0x28afb6['appName'], _0x180a84['offAll'](null), _0x180a84['on'](Laya['Event']['CLICK'], this, function () {
                        _0x5584f8['Instance']['jumpApp'](_0x28afb6, _0x3058a3['homeList']);
                    });
                });
            }
        }
    }
    class _0x1acc28 extends Laya['List'] {
        constructor() {
            super(...arguments), this['isForward'] = !0x0;
        }
        ['onEnable']() {
            this['on'](Laya['Event']['MOUSE_UP'], this, this['doAnimate']), this['on'](Laya['Event']['MOUSE_OUT'], this, this['doAnimate']);
        }
        ['onDisable']() {
            Laya['timer']['clear'](this, this['doAnimate']), Laya['timer']['clearAll'](this), this['off'](Laya['Event']['MOUSE_UP'], this, this['doAnimate']), this['off'](Laya['Event']['MOUSE_OUT'], this, this['doAnimate']);
        }
        ['updateData' + 'Source'](_0x5c4ff1) {
            this['array'] = _0x5c4ff1, Laya['timer']['once'](0x1f4, this, this['doAnimate']);
        }
        ['doAnimate']() {
            if (!this['destroyed'] && this['array']['length'] > 0x0) {
                let _0xe4b4ba = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x423c4b = Math['floor'](this['_scrollBar']['value'] / this['_cellSize']), _0x1e7ff6 = 0x0;
                if (this['isForward']) {
                    let _0x2e5aa5 = 0x0;
                    _0x2e5aa5 = this['_isVertica' + 'l'] ? Math['ceil'](this['displayHei' + 'ght'] / this['_cellSize']) * _0xe4b4ba : Math['ceil'](this['displayWid' + 'th'] / this['_cellSize']) * _0xe4b4ba, _0x1e7ff6 = this['array']['length'] - _0x2e5aa5;
                }
                let _0x2f3aa9 = Math['abs'](_0x423c4b - Math['ceil'](_0x1e7ff6 / _0xe4b4ba)), _0x4927d2 = 0x14 * this['_cellSize'] * _0x2f3aa9;
                this['tweenTo'](_0x1e7ff6, _0x4927d2, Laya['Handler']['create'](this, () => {
                    this['destroyed'] || (this['isForward'] = !this['isForward'], Laya['timer']['once'](0x64, this, this['doAnimate']));
                }));
            }
        }
    }
    class _0xac5a35 extends Laya['Image'] {
        constructor() {
            super(...arguments), this['gifAni'] = null, this['url'] = null;
        }
        ['updateImag' + 'e'](_0x3e2506) {
            -0x1 != _0x3e2506['indexOf']('.json') ? (this['gifAni'] && this['gifAni']['stop'](), this['gifAni'] || (this['gifAni'] = new Laya['Animation'](), this['gifAni']['interval'] = 0x96, this['addChild'](this['gifAni'])), this['gifAni'] && (this['gifAni']['visible'] = !0x0, this['gifAni']['loadAtlas'](_0x3e2506, null, _0x3e2506), this['gifAni']['play'](0x0, !0x0), this['gifAni']['scale'](this['width'] / 0x78, this['height'] / 0x78), this['skin'] = '')) : (this['gifAni'] && (this['gifAni']['stop'](), this['gifAni']['visible'] = !0x1), this['skin'] = _0x3e2506), this['url'] = _0x3e2506;
        }
    }
    class _0x564de6 extends _0x3a0bc3['tui']['LeftTuiVie' + 'wUI'] {
        constructor() {
            super(), this['showLeftTu' + 'i'] = !0x1;
        }
        ['onEnable']() {
            _0x5584f8['Instance']['canShowWXR' + 'ecommend'] ? (this['registerEv' + 'ent'](), this['updateData' + 'Source']()) : this['visible'] = !0x1;
        }
        ['onDisable']() {
            this['unregister' + 'Event'](), Laya['timer']['clearAll'](this);
        }
        ['registerEv' + 'ent']() {
            this['tuiBgTap']['on'](Laya['Event']['CLICK'], this, this['onleftTuiC' + 'lick']), this['leftTuiTab']['on'](Laya['Event']['CLICK'], this, this['onleftTuiT' + 'abClick']), _0x4441f7['Instance']['on'](_0x259e15['UpdateData'], this, this['updateData' + 'Source']);
        }
        ['unregister' + 'Event']() {
            this['tuiBgTap']['off'](Laya['Event']['CLICK'], this, this['onleftTuiC' + 'lick']), this['leftTuiTab']['off'](Laya['Event']['CLICK'], this, this['onleftTuiT' + 'abClick']), _0x4441f7['Instance']['off'](_0x259e15['UpdateData'], this, this['updateData' + 'Source']);
        }
        ['updateData' + 'Source']() {
            let _0x48638f = _0x5584f8['Instance']['getInfo']('index');
            if (_0x48638f && _0x48638f['length'] > 0x0) {
                let _0x3021d6 = []['concat'](_0x48638f);
                this['tuilistLef' + 't']['visible'] = !0x0, this['tuilistLef' + 't']['vScrollBar' + 'Skin'] = '', this['tuilistLef' + 't']['updateData' + 'Source'](_0x5584f8['getScorllD' + 'ata'](_0x3021d6)), this['tuilistLef' + 't']['selectEnab' + 'le'] = !0x0;
                let _0x1f8170 = Math['floor'](Math['random']() * _0x3021d6['length']);
                this['tuilistLef' + 't']['renderHand' + 'ler'] = new Laya['Handler'](this, function (_0x3c9f7b, _0x2c32bc) {
                    let _0x47db16 = (_0x2c32bc + _0x1f8170) % _0x3021d6['length'], _0x58c32d = _0x3021d6[_0x47db16];
                    if (!_0x58c32d)
                        return;
                    let _0x1c6b4e = _0x3c9f7b['getChildBy' + 'Name']('itemImg'), _0x1ba01a = _0x3c9f7b['getChildBy' + 'Name']('itemName'), _0x566147 = _0x3c9f7b['getChildBy' + 'Name']('itemRed');
                    _0x5584f8['checkTuiIt' + 'emRed'](_0x566147), _0x1c6b4e['updateImag' + 'e'](_0x58c32d['appIcon']), _0x1ba01a['text'] = _0x58c32d['appName'], _0x3c9f7b['offAll'](null), _0x3c9f7b['on'](Laya['Event']['CLICK'], this, function () {
                        _0x5584f8['Instance']['jumpApp'](_0x58c32d, _0x3058a3['homeLeft']);
                    });
                });
            }
        }
        ['onleftTuiC' + 'lick']() {
            this['showLeftTu' + 'i'] && this['showLeftTu' + 'iAni'](!0x1);
        }
        ['showLeftTu' + 'iAni'](_0x1c27d5 = !0x0) {
            let _0x2e7041 = _0x1c27d5 ? -0x244 : 0x0, _0x55a413 = _0x1c27d5 ? 0x0 : -0x244;
            this['left'] = _0x2e7041, this['tuiBgTap']['visible'] = !0x1, Laya['timer']['clearAll'](this), Laya['Tween']['to'](this, { 'left': _0x55a413 }, 0x12c, Laya['Ease']['linearIn'], new Laya['Handler'](this, () => {
                this['tuiBgTap']['visible'] = _0x1c27d5, this['showLeftTu' + 'i'] = _0x1c27d5;
            }));
        }
        ['onleftTuiT' + 'abClick']() {
            this['showLeftTu' + 'i'] ? this['showLeftTu' + 'iAni'](!0x1) : this['showLeftTu' + 'iAni'](!0x0);
        }
    }
    class _0x40d873 extends _0x3a0bc3['tui']['TuiBtnUI'] {
        constructor() {
            super(), this['tuiInfo'] = null, this['fromUI'] = null, this['canShow'] = !0x0;
        }
        ['onEnable']() {
            this['timer']['loop'](0x1770, this, this['updateTuiB' + 'tn']), this['on'](Laya['Event']['CLICK'], this, this['onClickTui' + 'Btn']), _0x4441f7['Instance']['on'](_0x259e15['UpdateData'], this, this['updateTuiB' + 'tn']), this['updateTuiB' + 'tn']();
        }
        ['onDisable']() {
            this['tuiAni']['stop'](), this['timer']['clear'](this, this['updateTuiB' + 'tn']), this['off'](Laya['Event']['CLICK'], this, this['onClickTui' + 'Btn']), _0x4441f7['Instance']['off'](_0x259e15['UpdateData'], this, this['updateTuiB' + 'tn']);
        }
        ['updateTuiB' + 'tn']() {
            if (!this['canShow'])
                return void (this['visible'] = !0x1);
            if (!_0x5584f8['Instance']['canShowRec' + 'ommend'])
                return void (this['visible'] = !0x1);
            let _0x22f422 = _0x5584f8['Instance']['getInfo']('fubiao');
            if (this['visible'] = !0x0, _0x40d873['tuiIndex'] < 0x0 && (_0x40d873['tuiIndex'] = Math['floor'](_0x22f422['length'] * Math['random']())), _0x40d873['tuiIndex'] += 0x1, _0x40d873['tuiIndex'] >= _0x22f422['length'] && (_0x40d873['tuiIndex'] = 0x0), _0x40d873['tuiIndex'] < 0x0 && (_0x40d873['tuiIndex'] = 0x0), this['tuiInfo'] = _0x22f422[_0x40d873['tuiIndex']], this['tuiInfo']) {
                if (this['destroyed'])
                    return;
                this['visible'] = !0x0, this['iconImage']['updateImag' + 'e'](this['tuiInfo']['appIcon'] && this['tuiInfo']['appIcon']['length'] > 0x0 ? this['tuiInfo']['appIcon'] : null), this['titleLabel']['text'] = this['tuiInfo']['appTitle'] || '', this['tuiAni']['play'](0x0, !0x1);
            } else
                this['visible'] = !0x1;
        }
        ['onClickTui' + 'Btn']() {
            let _0x3b74a0 = _0x3058a3['unkonw'];
            this['fromUI'] === _0xfa1fac['Game'] && (_0x3b74a0 = _0x3058a3['gameIcon']), _0x5584f8['Instance']['jumpApp'](this['tuiInfo'], _0x3b74a0);
        }
        ['setFromUI'](_0x2af308) {
            this['fromUI'] = _0x2af308;
        }
    }
    _0x40d873['tuiIndex'] = -0x1;
    class _0x10adc7 extends Laya['Button'] {
        ['onEnable']() {
            super['onEnable'](), this['registerEv' + 'ent']();
        }
        ['onDisable']() {
            this['destoryBut' + 'ton'](), Laya['timer']['clear'](this, this['checkShowB' + 'utton']), super['onDestroy']();
        }
        ['registerEv' + 'ent']() {
            _0x4441f7['Instance']['on'](_0x1c0419['ShowView'], this, this['onViewShow']), _0x4441f7['Instance']['on'](_0x1c0419['HideView'], this, this['onViewHide']);
        }
        ['unregisete' + 'rEvent']() {
            _0x4441f7['Instance']['off'](_0x1c0419['ShowView'], this, this['onViewShow']), _0x4441f7['Instance']['off'](_0x1c0419['HideView'], this, this['onViewHide']);
        }
        ['checkShowB' + 'utton']() {
            _0x2276ef['vGameInfo']['tRecommend'] ? _0x26ee17['IsTouTiao']() ? this['showButton']() : this['destoryBut' + 'ton']() : this['visible'] = !0x1;
        }
        ['showButton']() {
            if (_0x2276ef['vGameInfo']['ttTuiInfo']['length'] < 0x4)
                return void (this['visible'] = !0x1);
            if (!_0x26ee17['shouldShow' + 'TReommend']())
                return;
            let _0x2df9e6 = _0x2276ef['vGameInfo']['ttTuiInfo']['map'](_0x257b19 => ({
                'appId': String(_0x257b19['pid']),
                'query': '',
                'extraData': {}
            }));
            if ('undefined' != typeof wx && wx['createMore' + 'GamesButto' + 'n']) {
                if (this['moreButton'])
                    this['moreButton']['show']();
                else {
                    let _0x337b56 = this['width'] * _0x4ace69['windowWidt' + 'h'] / Laya['stage']['width'], _0x415cab = this['height'] * _0x4ace69['windowHeig' + 'ht'] / Laya['stage']['height'], _0x32c0e4 = this['localToGlo' + 'bal'](new Laya['Point'](0x0, 0x0)), _0x97b1f4 = _0x32c0e4['y'] * _0x4ace69['windowHeig' + 'ht'] / Laya['stage']['height'], _0x2d10d4 = _0x32c0e4['x'] * _0x4ace69['windowWidt' + 'h'] / Laya['stage']['width'];
                    this['moreButton'] = wx['createMore' + 'GamesButto' + 'n']({
                        'type': 'image',
                        'image': 'tui/more_g' + 'ames_btn1.' + 'png',
                        'style': {
                            'left': _0x2d10d4,
                            'top': _0x97b1f4,
                            'width': _0x337b56,
                            'height': _0x415cab,
                            'lineHeight': 0x28,
                            'backgroundColor': '#FFFFFF00',
                            'textAlign': 'center',
                            'fontSize': 0x12,
                            'textColor': '#ffffff',
                            'borderRadius': 0x4,
                            'borderWidth': 0x0,
                            'borderColor': '#ff0000'
                        },
                        'appLaunchOptions': _0x2df9e6,
                        'onNavigateToMiniGame': _0x5d0b7f => {
                        }
                    }), this['moreButton'] && (this['moreButton']['show'](), this['moreButton']['onTap'](_0x2b255b => {
                        this['tapMoreGam' + 'e'](_0x2b255b);
                    }));
                }
            }
        }
        ['hideButton']() {
            this['moreButton'] && this['moreButton']['hide'](), Laya['timer']['clear'](this, this['checkShowB' + 'utton']);
        }
        ['destoryBut' + 'ton']() {
            this['moreButton'] && (this['moreButton']['destroy'](), this['moreButton'] = null), this['visible'] = !0x1;
        }
        ['tapMoreGam' + 'e'](_0x18644f) {
        }
        ['onViewHide'](_0x3b9666) {
            this['checkIsPar' + 'entView'](_0x3b9666) && this['hideButton']();
        }
        ['onViewShow'](_0x92fce6) {
            this['checkIsPar' + 'entView'](_0x92fce6) && Laya['timer']['once'](0x3e8, this, this['checkShowB' + 'utton']);
        }
        ['checkIsPar' + 'entView'](_0x17c668) {
            let _0x17684a = this;
            for (; _0x17684a && _0x17684a['parent'];) {
                if (_0x17684a['parent'] === _0x17c668)
                    return !0x0;
                _0x17684a = _0x17684a['parent'];
            }
            return !0x1;
        }
    }
    class _0x3661f2 extends Laya['Script'] {
        constructor() {
            super(), this['moveleft'] = !0x0, this['mask'] = null;
        }
        ['onEnable']() {
            let _0x53f972 = this['owner']['getChildBy' + 'Name']('img');
            this['mask'] = _0x53f972['mask'], Laya['timer']['frameLoop'](0x1, this, this['update']);
        }
        ['onUpdate']() {
        }
        ['update']() {
            this['mask']['x']++, this['mask']['x'] > 0x0 && (this['mask']['x'] = -0x93);
        }
        ['onDisable']() {
            Laya['timer']['clear'](this, this['update']);
        }
    }
    class _0x4eb97a {
        constructor() {
        }
        static ['init']() {
            var _0x42e1c8 = Laya['ClassUtils']['regClass'];
            _0x42e1c8('views/item' + '/DaySignIt' + 'emView.ts', _0x3bce27), _0x42e1c8('views/runt' + 'ime/UIAdap' + 'ter.ts', _0x566779), _0x42e1c8('script/Gam' + 'eControl.t' + 's', _0x3b246f), _0x42e1c8('views/item' + '/CloseBtnS' + 'cript.ts', _0x9e71a2), _0x42e1c8('Tui/Bottom' + 'TuiView.ts', _0x15beed), _0x42e1c8('Tui/AutoSc' + 'orllView.t' + 's', _0x1acc28), _0x42e1c8('Tui/GifIma' + 'geView.ts', _0xac5a35), _0x42e1c8('Tui/LeftTu' + 'iView.ts', _0x564de6), _0x42e1c8('Tui/TuiBtn' + '.ts', _0x40d873), _0x42e1c8('Tui/MoreGa' + 'meButton.t' + 's', _0x10adc7), _0x42e1c8('script/Btn' + 'Mask.ts', _0x3661f2), _0x42e1c8('script/Dro' + 'pBox.ts', _0x17f23d), _0x42e1c8('script/Dro' + 'pBoxIce.ts', _0x23b833), _0x42e1c8('script/Dro' + 'pBoxSuger.' + 'ts', _0x2fe954), _0x42e1c8('script/Dro' + 'pWater.ts', _0x5a2761), _0x42e1c8('script/lon' + 'gResult.ts', _0x744308), _0x42e1c8('script/sho' + 'rtResult.t' + 's', _0x27fb72);
        }
    }
    _0x4eb97a['width'] = 0x2d0, _0x4eb97a['height'] = 0x500, _0x4eb97a['scaleMode'] = 'showall', _0x4eb97a['screenMode'] = 'vertical', _0x4eb97a['alignV'] = 'top', _0x4eb97a['alignH'] = 'center', _0x4eb97a['startScene'] = 'ShiPinView' + '.scene', _0x4eb97a['sceneRoot'] = '', _0x4eb97a['debug'] = !0x1, _0x4eb97a['stat'] = !0x1, _0x4eb97a['physicsDeb' + 'ug'] = !0x1, _0x4eb97a['exportScen' + 'eToJson'] = !0x1, _0x4eb97a['init'](), new class {
        constructor() {
            (_0x26ee17['IsTouTiao']() || _0x26ee17['IsOppo'] || _0x26ee17['IsQQ']) && (Laya['Config']['useWebGL2'] = !0x1), window['Laya3D'] ? Laya3D['init'](_0x4eb97a['width'], _0x4eb97a['height']) : Laya['init'](_0x4eb97a['width'], _0x4eb97a['height'], Laya['WebGL']), Laya['Physics'] && Laya['Physics']['enable'](), Laya['DebugPanel'] && Laya['DebugPanel']['enable'](), Laya['stage']['scaleMode'] = _0x4eb97a['scaleMode'], Laya['stage']['alignV'] = _0x4eb97a['alignV'], Laya['stage']['alignH'] = _0x4eb97a['alignH'], Laya['URL']['exportScen' + 'eToJson'] = _0x4eb97a['exportScen' + 'eToJson'], (_0x4eb97a['debug'] || 'true' == Laya['Utils']['getQuerySt' + 'ring']('debug')) && Laya['enableDebu' + 'gPanel'](), _0x4eb97a['physicsDeb' + 'ug'] && Laya['PhysicsDeb' + 'ugDraw'] && Laya['PhysicsDeb' + 'ugDraw']['enable'](), _0x4eb97a['stat'] && Laya['Stat']['show'](), Laya['alertGloba' + 'lError'] = !0x0, Laya['ResourceVe' + 'rsion']['enable']('version.js' + 'on', Laya['Handler']['create'](this, this['onVersionL' + 'oaded']), Laya['ResourceVe' + 'rsion']['FILENAME_V' + 'ERSION']), _0x2f65d5['Instance']['initEnv']();
        }
        ['onVersionL' + 'oaded']() {
            Laya['AtlasInfoM' + 'anager']['enable']('fileconfig' + '.json', Laya['Handler']['create'](this, this['onConfigLo' + 'aded']));
        }
        ['onConfigLo' + 'aded']() {
            _0x2f65d5['Instance']['onConfigLo' + 'aded']();
        }
    }();
}();