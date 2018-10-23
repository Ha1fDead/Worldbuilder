import { RegionGenConfig } from "../region/regiongenconfig";
import { Service } from "../services/service";
/**
 * A settlement where humanoids live
 */
export declare class Settlement {
    CityMilesSq: number;
    CityPopulation: number;
    Clergy: number;
    CountrysideMilesSq: number;
    CountrysidePopulation: number;
    LawOfficers: number;
    NobleFamilies: number;
    Priests: number;
    Services: Service[];
    SupportingVillages: number;
    TotalBuildings: number;
    constructor(cityPopulation: number, advancedSettings: RegionGenConfig);
    GetTotalPopulation(): number;
    GetTotalSizeAcres(): number;
}
