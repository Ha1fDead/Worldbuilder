import { RegionModel } from "./region";
import { RegionGenConfig } from "./regiongenconfig";
/**
 * Handles pulling in settings & dependencies to build a region
 */
export declare class RegionGenerator {
    /**
     * Creates and returns a region from the provided configuration
     * @param regionGenConfiguration the configuration to build the region from
     */
    generate(regionGenConfiguration: RegionGenConfig): RegionModel;
    private getRandomArbitraryInteger;
}
