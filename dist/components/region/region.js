/**
 * A region on a map, or a kingdom / nation / state
 */
export class RegionModel {
    get CastlesInCivilized() {
        return this.CastlesTotal - this.CastlesInOutskirts;
    }
    GetBigSettlements() {
        return this.Cities.concat(this.Towns);
    }
}
//# sourceMappingURL=region.js.map