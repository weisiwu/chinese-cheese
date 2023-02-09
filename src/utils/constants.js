export const BLACK_ROLE = {
    VEHICLE: '車',
    HORSE: '馬',
    ELEPHANT: '象',
    GUARD: '士',
    MARSHAL: '将',
    GUN: '炮',
    SOLIDER: '卒',
};

export const RED_ROLE = {
    VEHICLE: '車',
    HORSE: '馬',
    ELEPHANT: '相',
    GUARD: '仕',
    MARSHAL: '帅',
    GUN: '砲',
    SOLIDER: '兵',
};

export const ROLE = {
    BLACK: 'black',
    RED: 'red',
};

// 初始化棋盘点
export const InitCheckBoardPoints = [
    // 黑色
    [
        {
            role: BLACK_ROLE.VEHICLE, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.HORSE, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.ELEPHANT, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.GUARD, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.MARSHAL, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.GUARD, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.ELEPHANT, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.HORSE, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.VEHICLE, group: ROLE.BLACK
        }
    ],
    ['', '', '', '', '', '', '', '', ''],
    [
        '',
        { role: BLACK_ROLE.GUN, group: ROLE.BLACK },
        '',
        '',
        '',
        '',
        '',
        { role: BLACK_ROLE.GUN, group: ROLE.BLACK },
        ''
    ],
    [
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        }
    ],
    ['', '', '', '', '', '', '', '', ''],
    // 红色
    ['', '', '', '', '', '', '', '', ''],
    [
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        }
    ],
    [
        '',
        { role: RED_ROLE.GUN, group: ROLE.RED },
        '',
        '',
        '',
        '',
        '',
        { role: RED_ROLE.GUN, group: ROLE.RED },
        ''
    ],
    ['', '', '', '', '', '', '', '', ''],
    [
        {
            role: RED_ROLE.VEHICLE, group: ROLE.RED
        },
        {
            role: RED_ROLE.HORSE, group: ROLE.RED
        },
        {
            role: RED_ROLE.ELEPHANT, group: ROLE.RED
        },
        {
            role: RED_ROLE.GUARD, group: ROLE.RED
        },
        {
            role: RED_ROLE.MARSHAL, group: ROLE.RED
        },
        {
            role: RED_ROLE.GUARD, group: ROLE.RED
        },
        {
            role: RED_ROLE.ELEPHANT, group: ROLE.RED
        },
        {
            role: RED_ROLE.HORSE, group: ROLE.RED
        },
        {
            role: RED_ROLE.VEHICLE, group: ROLE.RED
        }
    ],
];

// 测试dnd使用，移动棋子位置
export const InitCheckBoardPointsTmp = [
    // 黑色
    [
        '',
        '',
        {
            role: BLACK_ROLE.ELEPHANT, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.GUARD, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.MARSHAL, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.GUARD, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.ELEPHANT, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.HORSE, group: ROLE.BLACK
        },
        {
            role: BLACK_ROLE.VEHICLE, group: ROLE.BLACK
        }
    ],
    ['', '', '', '', '', '', '', '', ''],
    [
        '',
        { role: BLACK_ROLE.GUN, group: ROLE.BLACK },
        '',
        '',
        '',
        '',
        '',
        { role: BLACK_ROLE.GUN, group: ROLE.BLACK },
        ''
    ],
    [
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        },
        '',
        {
            role: BLACK_ROLE.SOLIDER, group: ROLE.BLACK
        }
    ],
    ['', '', '', '', '', '', '', '', ''],
    // 红色
    ['', '', '', '', '', '', '', '', ''],
    [
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        },
        '',
        {
            role: RED_ROLE.SOLIDER, group: ROLE.RED
        }
    ],
    [
        '',
        { role: RED_ROLE.GUN, group: ROLE.RED },
        '',
        '',
        '',
        '',
        '',
        { role: RED_ROLE.GUN, group: ROLE.RED },
        ''
    ],
    ['', '', '', '', '', '', '', '', ''],
    [
        {
            role: RED_ROLE.VEHICLE, group: ROLE.RED
        },
        {
            role: RED_ROLE.HORSE, group: ROLE.RED
        },
        {
            role: RED_ROLE.ELEPHANT, group: ROLE.RED
        },
        {
            role: RED_ROLE.GUARD, group: ROLE.RED
        },
        {
            role: RED_ROLE.MARSHAL, group: ROLE.RED
        },
        {
            role: RED_ROLE.GUARD, group: ROLE.RED
        },
        {
            role: RED_ROLE.ELEPHANT, group: ROLE.RED
        },
        {
            role: RED_ROLE.HORSE, group: ROLE.RED
        },
        {
            role: RED_ROLE.VEHICLE, group: ROLE.RED
        }
    ],
];

// dnd type
export const ItemTypes = {
    CARD: 'card',
};
