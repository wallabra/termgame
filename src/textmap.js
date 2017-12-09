// Generated by CoffeeScript 2.0.2
var TextMap;

module.exports = TextMap = class TextMap {
    constructor(width = 80, height = 45) {
        this.set = this.set.bind(this);
        this.render = this.render.bind(this);
        this.clear = this.clear.bind(this);
        this.width = width;
        this.height = height;
        this.clear();
    }

    set(x, y, sprite, maskSpace = true) {
        var c, i, ix, j, len, len1, ref, t;
        sprite = sprite.replace(/\r/g, '');
        ref = sprite.split('\n');
        for (i = 0, len = ref.length; i < len; i++) {
            t = ref[i];
            if (y > this.height) {
                return;
            }
            ix = x;
            for (j = 0, len1 = t.length; j < len1; j++) {
                c = t[j];
                if (ix >= this.width) {
                    continue;
                }
                if (c !== ' ' || !maskSpace) {
                    this.text[y] = this.text[y].slice(0, ix) + c + this.text[y].slice(++ix);
                } else {
                    ix++;
                }
            }
            y++;
        }
    }

    render(linesep = '\n') {
        return this.text.join(linesep);
    }

    clear() {
        var _;
        return this.text = (function() {
            var i, ref, results;
            results = [];
            for (_ = i = 0, ref = this.height; 0 <= ref ? i < ref : i > ref; _ = 0 <= ref ? ++i : --i) {
                results.push(' '.repeat(this.width));
            }
            return results;
        }).call(this);
    }

};