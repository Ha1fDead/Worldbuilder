export class VUtils {
    static prettyPrintPercent(val) {
        return parseFloat((val * 100).toPrecision(3)).toLocaleString();
    }
    static prettyPrintRounded(val) {
        return parseFloat(val.toPrecision(3)).toLocaleString();
    }
    static sum(a, b) {
        return a + b;
    }
}
//# sourceMappingURL=utils.js.map