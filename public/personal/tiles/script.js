var tiles = [];
let strokeColor = ['black'];

var N = 0;
let nItemsPerTile = 2;


var Options = function() {
    this.reset = function() {
        reset();
    };
    this.animate = false;
    this.speed = .25;
    this.scale = .9;
    this.rows_cols = 4;
};

var gui = new dat.GUI();
var ops = new Options();


function setup() {
    if (windowWidth > windowHeight) {
        size = windowHeight;
    } else {
        size = windowWidth;
    }
    createCanvas(size, size);
    angleMode(DEGREES);

    gui.add(ops, 'reset');
    gui.add(ops, 'animate');
    gui.add(ops, 'speed', -1, 1);
    gui.add(ops, 'scale', 0.5, 1);
    gui.add(ops, 'rows_cols', 1, 10);

    for (var y = 0; y < height; y += height / ops.rows_cols) {
        for (var x = 0; x < width; x += width / ops.rows_cols) {
            tiles.push(new Tile(x, y, width / floor(ops.rows_cols), height / floor(ops.rows_cols)));
        }
    }
    for (var i = 0; i < tiles.length; i++) {
        while (tiles[i].items.length < nItemsPerTile) {
            tiles[i].choose();
        }
        tiles[i].display();
    }
}

function draw() {
    background('#FFFFFFFF');

    if (ops.animate) {
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].update();
        }
    }

    for (var i = 0; i < tiles.length; i++) {
        tiles[i].display();
    }

    if (floor(ops.rows_cols) != N) {
        tiles = [];
        for (var y = 0; y < height; y += height / floor(ops.rows_cols)) {
            for (var x = 0; x < width; x += width / floor(ops.rows_cols)) {
                tiles.push(new Tile(x, y, width / floor(ops.rows_cols), height / floor(ops.rows_cols)));
            }
        }
        for (var i = 0; i < tiles.length; i++) {
            while (tiles[i].items.length < nItemsPerTile) {
                tiles[i].choose();
            }
            tiles[i].display();
        }
    }

    N = floor(ops.rows_cols);

}

function reset() {
    tiles = [];
    for (var y = 0; y < height; y += height / floor(ops.rows_cols)) {
        for (var x = 0; x < width; x += width / floor(ops.rows_cols)) {
            tiles.push(new Tile(x, y, width / floor(ops.rows_cols), height / floor(ops.rows_cols)));
        }
    }
    for (var i = 0; i < tiles.length; i++) {
        while (tiles[i].items.length < nItemsPerTile) {
            tiles[i].choose();
        }
        tiles[i].display();
    }
}
