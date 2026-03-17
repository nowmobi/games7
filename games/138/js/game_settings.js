var PIPE_EMPTY = {
        'img': 0x0,
        'solution_rot': [0x0],
        'open_top': ![],
        'open_right': ![],
        'open_bottom': ![],
        'open_left': ![]
    }, PIPE_HORIZONTAL1 = {
        'img': 0x1,
        'solution_rot': [
            0x5a,
            0x10e
        ],
        'open_top': !![],
        'open_right': ![],
        'open_bottom': !![],
        'open_left': ![]
    }, PIPE_HORIZONTAL2 = {
        'img': 0x1,
        'solution_rot': [
            0x0,
            0xb4
        ],
        'open_top': ![],
        'open_right': !![],
        'open_bottom': ![],
        'open_left': !![]
    }, PIPE_ANGLE1 = {
        'img': 0x2,
        'solution_rot': [0x5a],
        'open_top': !![],
        'open_right': !![],
        'open_bottom': ![],
        'open_left': ![]
    }, PIPE_ANGLE2 = {
        'img': 0x2,
        'solution_rot': [0xb4],
        'open_top': ![],
        'open_right': !![],
        'open_bottom': !![],
        'open_left': ![]
    }, PIPE_ANGLE3 = {
        'img': 0x2,
        'solution_rot': [0x10e],
        'open_top': ![],
        'open_right': ![],
        'open_bottom': !![],
        'open_left': !![]
    }, PIPE_ANGLE4 = {
        'img': 0x2,
        'solution_rot': [0x0],
        'open_top': !![],
        'open_right': ![],
        'open_bottom': ![],
        'open_left': !![]
    }, PIPE_CROSS = {
        'img': 0x3,
        'solution_rot': [0x0],
        'open_top': !![],
        'open_right': !![],
        'open_bottom': !![],
        'open_left': !![]
    }, PIPE_START1 = {
        'img': 0x4,
        'solution_rot': [0x5a],
        'open_top': ![],
        'open_right': !![],
        'open_bottom': ![],
        'open_left': ![]
    }, PIPE_START2 = {
        'img': 0x4,
        'solution_rot': [0x10e],
        'open_top': ![],
        'open_right': ![],
        'open_bottom': ![],
        'open_left': !![]
    }, PIPE_START3 = {
        'img': 0x4,
        'solution_rot': [0xb4],
        'open_top': ![],
        'open_right': ![],
        'open_bottom': !![],
        'open_left': ![]
    }, PIPE_START4 = {
        'img': 0x4,
        'solution_rot': [0x0],
        'open_top': !![],
        'open_right': ![],
        'open_bottom': ![],
        'open_left': ![]
    }, SQUARE_TYPES = [
        PIPE_EMPTY,
        PIPE_HORIZONTAL1,
        PIPE_HORIZONTAL2,
        PIPE_ANGLE1,
        PIPE_ANGLE2,
        PIPE_ANGLE3,
        PIPE_ANGLE4,
        PIPE_CROSS,
        PIPE_START1,
        PIPE_START2,
        PIPE_START3,
        PIPE_START4
    ];