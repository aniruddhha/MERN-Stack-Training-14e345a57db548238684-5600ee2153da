const mod = {
    x: 42,
    getX: function () {
        console.log(this)
        return this.x;
    }
};

const unboundGetX = mod.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(mod);
console.log(boundGetX());