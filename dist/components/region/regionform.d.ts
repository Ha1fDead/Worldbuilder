import * as React from "react";
import { RegionModel } from "./region";
import { RegionGenConfig } from "./regiongenconfig";
import { RegionGenerator } from "./regiongenerator";
interface IRegionFormProp {
    onFormSubmit: (region: RegionModel) => any;
}
/**
 * Form with configuration to set up and build a region. Will call an external function when the form is submitted with the generated region
 */
export declare class RegionForm extends React.Component<IRegionFormProp, RegionGenConfig> {
    regionGenerator: RegionGenerator;
    constructor(props: IRegionFormProp);
    handleAverageFarmSizeAcres(event: React.ChangeEvent<HTMLInputElement>): void;
    handlecityPeoplePerMileSq(event: React.ChangeEvent<HTMLInputElement>): void;
    handleClergyPerPriest(event: React.ChangeEvent<HTMLInputElement>): void;
    handleHouseholdSize(event: React.ChangeEvent<HTMLInputElement>): void;
    handleLivestockPerPerson(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePeoplePerCastle(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePeoplePerClergy(event: React.ChangeEvent<HTMLInputElement>): void;
    handlepeoplePerFarmlandSqMiles(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePeoplePerNobleFamily(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePeoplePerOfficer(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePeoplePerRuinedCastle(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePercentageOfCastlesInOutskirts(event: React.ChangeEvent<HTMLInputElement>): void;
    handlePercentageOfLivestockIsFowl(event: React.ChangeEvent<HTMLInputElement>): void;
    handleRegionAgeYears(event: React.ChangeEvent<HTMLInputElement>): void;
    handleRegionPopulation(event: React.ChangeEvent<HTMLInputElement>): void;
    handleRegionSizeMilesSq(event: React.ChangeEvent<HTMLInputElement>): void;
    handleSubmit(event: React.FormEvent<HTMLElement>): void;
    handleWarehousesPerBuildingMultiplier(event: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
