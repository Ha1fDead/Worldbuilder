import * as React from "react";
import { RegionGenConfig } from "./regiongenconfig";
import { RegionGenerator } from "./regiongenerator";
/**
 * Form with configuration to set up and build a region. Will call an external function when the form is submitted with the generated region
 */
export class RegionForm extends React.Component {
    constructor(props) {
        super(props);
        // set initial state to default configuration
        this.state = new RegionGenConfig();
        // WRITING OUT THESE SUCKED AND THERE HAS TO BE A BETTER WAY
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegionPopulation = this.handleRegionPopulation.bind(this);
        this.handleRegionSizeMilesSq = this.handleRegionSizeMilesSq.bind(this);
        this.handleRegionAgeYears = this.handleRegionAgeYears.bind(this);
        this.handleLivestockPerPerson = this.handleLivestockPerPerson.bind(this);
        this.handlePeoplePerCastle = this.handlePeoplePerCastle.bind(this);
        this.handlePeoplePerRuinedCastle = this.handlePeoplePerRuinedCastle.bind(this);
        this.handlePercentageOfLivestockIsFowl = this.handlePercentageOfLivestockIsFowl.bind(this);
        this.handlePercentageOfCastlesInOutskirts = this.handlePercentageOfCastlesInOutskirts.bind(this);
        this.handlepeoplePerFarmlandSqMiles = this.handlepeoplePerFarmlandSqMiles.bind(this);
        this.handleAverageFarmSizeAcres = this.handleAverageFarmSizeAcres.bind(this);
        this.handlePeoplePerNobleFamily = this.handlePeoplePerNobleFamily.bind(this);
        this.handlePeoplePerOfficer = this.handlePeoplePerOfficer.bind(this);
        this.handlePeoplePerClergy = this.handlePeoplePerClergy.bind(this);
        this.handleClergyPerPriest = this.handleClergyPerPriest.bind(this);
        this.handleHouseholdSize = this.handleHouseholdSize.bind(this);
        this.handleWarehousesPerBuildingMultiplier = this.handleWarehousesPerBuildingMultiplier.bind(this);
        this.handlecityPeoplePerMileSq = this.handlecityPeoplePerMileSq.bind(this);
        this.regionGenerator = new RegionGenerator();
    }
    handleAverageFarmSizeAcres(event) {
        this.setState({ AverageFarmSizeAcres: Number.parseInt(event.target.value, 10) });
    }
    handlecityPeoplePerMileSq(event) {
        this.setState({ CityPeoplePerSqMile: Number.parseInt(event.target.value, 10) });
    }
    handleClergyPerPriest(event) {
        this.setState({ ClergyPerPriest: Number.parseInt(event.target.value, 10) });
    }
    handleHouseholdSize(event) {
        this.setState({ HouseholdSize: Number.parseInt(event.target.value, 10) });
    }
    handleLivestockPerPerson(event) {
        this.setState({ LivestockPerPerson: Number.parseInt(event.target.value, 10) });
    }
    handlePeoplePerCastle(event) {
        this.setState({ PeoplePerCastle: Number.parseInt(event.target.value, 10) });
    }
    handlePeoplePerClergy(event) {
        this.setState({ PeoplePerClergy: Number.parseInt(event.target.value, 10) });
    }
    handlepeoplePerFarmlandSqMiles(event) {
        this.setState({ PeoplePerSqMileFarmland: Number.parseInt(event.target.value, 10) });
    }
    handlePeoplePerNobleFamily(event) {
        this.setState({ PeoplePerNobleFamily: Number.parseInt(event.target.value, 10) });
    }
    handlePeoplePerOfficer(event) {
        this.setState({ PeoplePerOfficer: Number.parseInt(event.target.value, 10) });
    }
    handlePeoplePerRuinedCastle(event) {
        this.setState({ PeoplePerRuinedCastle: Number.parseInt(event.target.value, 10) });
    }
    handlePercentageOfCastlesInOutskirts(event) {
        this.setState({ PercentageOfCastlesInOutskirts: Number.parseInt(event.target.value, 10) });
    }
    handlePercentageOfLivestockIsFowl(event) {
        this.setState({ PercentageOfLivestockIsFowl: Number.parseInt(event.target.value, 10) });
    }
    handleRegionAgeYears(event) {
        this.setState({ RegionAgeYears: Number.parseInt(event.target.value, 10) });
    }
    handleRegionPopulation(event) {
        this.setState({ RegionPopulation: Number.parseInt(event.target.value, 10) });
    }
    handleRegionSizeMilesSq(event) {
        this.setState({ RegionSizeSqMiles: Number.parseInt(event.target.value, 10) });
    }
    handleSubmit(event) {
        const region = this.regionGenerator.generate(this.state);
        this.props.onFormSubmit(region);
        event.preventDefault();
    }
    handleWarehousesPerBuildingMultiplier(event) {
        this.setState({ WarehousesPerBuildingMultiplier: Number.parseInt(event.target.value, 10) });
    }
    // I could pass a "Default" settings object to the form
    // I could have the form make a callback to this
    render() {
        const regionPop = this.state.RegionPopulation;
        const regionMilesSq = this.state.RegionSizeSqMiles;
        const regionAgeYears = this.state.RegionAgeYears;
        // adv settings
        const livestockPerPerson = this.state.LivestockPerPerson;
        const peoplePerCastle = this.state.PeoplePerCastle;
        const peoplePerRuinedCastle = this.state.PeoplePerRuinedCastle;
        const percentageOfLivestockIsFowl = this.state.PercentageOfLivestockIsFowl;
        const percentageOfCastlesInOutskirts = this.state.PercentageOfCastlesInOutskirts;
        const peoplePerFarmlandSqMiles = this.state.PeoplePerSqMileFarmland;
        const averageFarmSizeAcres = this.state.AverageFarmSizeAcres;
        const peoplePerNobleFamily = this.state.PeoplePerNobleFamily;
        const peoplePerOfficer = this.state.PeoplePerOfficer;
        const peoplePerClergy = this.state.PeoplePerClergy;
        const clergyPerPriest = this.state.ClergyPerPriest;
        const householdSize = this.state.HouseholdSize;
        const warehousesPerBuildingMultiplier = this.state.WarehousesPerBuildingMultiplier;
        const cityPeoplePerMileSq = this.state.CityPeoplePerSqMile;
        return (React.createElement("div", null,
            React.createElement("form", { action: "javascript:void(0);", onSubmit: this.handleSubmit },
                React.createElement("h3", null, "Region Parameters"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionPop" }, "Region Total Population"),
                        React.createElement("input", { id: "regionPop", type: "number", value: regionPop, onChange: this.handleRegionPopulation }),
                        React.createElement("p", null, "Population affects the number of castles, villages, towns, and cities")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionAgeYears" }, "Region Age Years"),
                        React.createElement("input", { id: "regionAgeYears", type: "number", value: regionAgeYears, onChange: this.handleRegionAgeYears }),
                        React.createElement("p", null, "Older regions have more ruined / abandoned castles")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "regionMilesSq" }, "Region Area Size Miles\u00B2"),
                        React.createElement("input", { id: "regionMilesSq", type: "number", value: regionMilesSq, onChange: this.handleRegionSizeMilesSq }),
                        React.createElement("p", null, "Total size of the region, including inhospitable land"))),
                React.createElement("h3", null, "City Settings"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "warehousesPerBuildingMultiplier" }, "Warehouses per Building Multiplier"),
                        React.createElement("input", { type: "number", id: "warehousesPerBuildingMultiplier", value: warehousesPerBuildingMultiplier, onChange: this.handleWarehousesPerBuildingMultiplier }),
                        React.createElement("p", null, "Used in conjunction with people per household to determine storage requirements of the cities.")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "cityPeoplePerMileSq" }, "City People per Miles\u00B2"),
                        React.createElement("input", { type: "number", id: "cityPeoplePerMileSq", value: cityPeoplePerMileSq, onChange: this.handlecityPeoplePerMileSq }),
                        React.createElement("p", null, "Average density is ~40,000 per Mile\u00B2. Lowering this will create larger (in area) cities"))),
                React.createElement("h3", null, "Profession Ratios"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerNobleFamily" }, "People per Noble Family"),
                        React.createElement("input", { type: "number", id: "peoplePerNobleFamily", value: peoplePerNobleFamily, onChange: this.handlePeoplePerNobleFamily }),
                        React.createElement("p", null, "Higher amounts imply fewer nobility, and vice-versa")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerOfficer" }, "People per Officer"),
                        React.createElement("input", { type: "number", id: "peoplePerOfficer", value: peoplePerOfficer, onChange: this.handlePeoplePerOfficer }),
                        React.createElement("p", null, "Higher amounts imply fewer officers, and vice-versa")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerClergy" }, "People per Clergy"),
                        React.createElement("input", { type: "number", id: "peoplePerClergy", value: peoplePerClergy, onChange: this.handlePeoplePerClergy }),
                        React.createElement("p", null, "Higher amounts imply fewer clergy, and vice-versa")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "clergyPerPriest" }, "Clergy per Priest"),
                        React.createElement("input", { type: "number", id: "clergyPerPriest", value: clergyPerPriest, onChange: this.handleClergyPerPriest }),
                        React.createElement("p", null, "Higher amounts imply fewer priests, and vice-versa"))),
                React.createElement("h3", null, "Castle Settings"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerCastle" }, "People per Castle"),
                        React.createElement("input", { type: "number", id: "peoplePerCastle", value: peoplePerCastle, onChange: this.handlePeoplePerCastle })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerRuinedCastle" }, "People per Ruined Castle"),
                        React.createElement("input", { type: "number", id: "peoplePerRuinedCastle", value: peoplePerRuinedCastle, onChange: this.handlePeoplePerRuinedCastle })),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "percentageOfCastlesInOutskirts" }, "Castle % in outskirts"),
                        React.createElement("input", { type: "number", id: "percentageOfCastlesInOutskirts", value: percentageOfCastlesInOutskirts, onChange: this.handlePercentageOfCastlesInOutskirts }))),
                React.createElement("h3", null, "Farming Settings"),
                React.createElement("fieldset", null,
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "peoplePerFarmlandSqMiles" }, "People Per Mile\u00B2 Farmland"),
                        React.createElement("input", { type: "number", id: "peoplePerFarmlandSqMiles", value: peoplePerFarmlandSqMiles, onChange: this.handlepeoplePerFarmlandSqMiles }),
                        React.createElement("p", null, "The viability of the farmable land itself, assuming maximum productivity. Higher numbers reduce sprawl, increase density")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "averageFarmSizeAcres" }, "Average Farm Size Acres"),
                        React.createElement("input", { type: "number", id: "averageFarmSizeAcres", value: averageFarmSizeAcres, onChange: this.handleAverageFarmSizeAcres }),
                        React.createElement("p", null, "The productivity of a single farmer, and the amount of land they can work. Higher numbers reduce sprawl, increase density. The average farm size is normally between 20 to 40 acres.")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "householdSize" }, "Household Size"),
                        React.createElement("input", { type: "number", id: "householdSize", value: householdSize, onChange: this.handleHouseholdSize }),
                        React.createElement("p", null, "Average people per household. Higher numbers significantly increase sprawl, reduce density")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "livestockPerPerson" }, "Livestock per Person"),
                        React.createElement("input", { type: "number", id: "livestockPerPerson", value: livestockPerPerson, onChange: this.handleLivestockPerPerson }),
                        React.createElement("p", null, "Medieval societies had a lot of animals, mostly work animals. This includes Cows, Sheeps, Pigs, Chickens, etc.")),
                    React.createElement("div", null,
                        React.createElement("label", { htmlFor: "percentageOfLivestockIsFowl" }, "Livestock Fowl Ratio"),
                        React.createElement("input", { type: "number", id: "percentageOfLivestockIsFowl", value: percentageOfLivestockIsFowl, onChange: this.handlePercentageOfLivestockIsFowl }),
                        React.createElement("p", null, "Medieval societies generally raised more fowl. Higher percentages imply more fowl. (Chickens, Turkeys, etc.)"))),
                React.createElement("button", { className: "laff-btn laff-btn-primary", type: "submit" }, "Generate Region"))));
    }
}
//# sourceMappingURL=regionform.js.map