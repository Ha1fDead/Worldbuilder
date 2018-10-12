import { Settlement } from "../settlement/settlement";
/**
 * A region on a map, or a kingdom / nation / state
 */
export declare class RegionModel {
    /**
     * The age of the region / Kingdom, in years (code smell)
     */
    Age: number;
    /**
     * The size of the region, in sq miles
     */
    AreaSqMiles: number;
    /**
     * The total number of cows/pigs/etc.. in the region
     */
    BurdenBeasts: number;
    /**
     * The number of activate castles in the region, meaning occupied & used
     */
    CastlesActive: number;
    readonly CastlesInCivilized: number;
    CastlesInOutskirts: number;
    /**
     * The total number of ruined or forgotten castles in the region
     */
    CastlesRuined: number;
    /**
     * The sum of active & ruined castles
     */
    CastlesTotal: number;
    /**
     * A list of large settlements inside of the region (code smell, size should be defined in the Settlement itself and this should be one array)
     */
    Cities: Settlement[];
    /**
     * The total number of fowl (Chickens) in the region
     */
    Fowl: number;
    /**
     * The total amount of cultivated livestock in the region
     */
    TotalLivestock: number;
    /**
     * A list of medium-sized settlements in the region (code smell, size should be defined in the Settlement itself and this should be one array)
     */
    Towns: Settlement[];
    GetBigSettlements(): Settlement[];
}
