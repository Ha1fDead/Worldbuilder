import * as React from "react";
import { VUtils } from "../../utils";
import { RegionSummary } from "../settlement/regionsummary";
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class RegionRender extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settlements = this.props.region.Cities.concat(this.props.region.Towns);
        const farmland = settlements.map((x) => x.CountrysideMilesSq).reduce(VUtils.sum, 0);
        const urbanArea = settlements.map((x) => x.CityMilesSq).reduce(VUtils.sum, 0);
        const cityDwellers = settlements.map((x) => x.CityPopulation).reduce(VUtils.sum, 0);
        const ruralDwellers = settlements.map((x) => x.CountrysidePopulation).reduce(VUtils.sum, 0);
        const totalPopulation = ruralDwellers + cityDwellers;
        const untamedWilderness = this.props.region.AreaSqMiles - (farmland + urbanArea);
        return (React.createElement("div", { className: "laff-wb-region" },
            React.createElement("div", null,
                React.createElement("h3", null, "Region Info"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Age (Years): ",
                        this.props.region.Age.toLocaleString()),
                    React.createElement("li", null,
                        "Area: ",
                        this.props.region.AreaSqMiles.toLocaleString(),
                        " Miles^2"),
                    React.createElement("li", null,
                        "Urban Area: ",
                        VUtils.prettyPrintRounded(urbanArea),
                        " Miles^2 (",
                        VUtils.prettyPrintPercent(urbanArea / this.props.region.AreaSqMiles),
                        "%)"),
                    React.createElement("li", null,
                        "Farmland: ",
                        VUtils.prettyPrintRounded(farmland),
                        " Miles^2 (",
                        VUtils.prettyPrintPercent(farmland / this.props.region.AreaSqMiles),
                        "%)"),
                    React.createElement("li", null,
                        "Untamed Wilderness:",
                        VUtils.prettyPrintRounded(untamedWilderness),
                        " Miles^2 (",
                        VUtils.prettyPrintPercent(untamedWilderness / this.props.region.AreaSqMiles),
                        "%)")),
                React.createElement("h3", null, "Population Stats"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "People: ",
                        (cityDwellers + ruralDwellers).toLocaleString()),
                    React.createElement("li", null,
                        "City Dwellers: ",
                        cityDwellers.toLocaleString(),
                        "\t(",
                        VUtils.prettyPrintPercent(cityDwellers / totalPopulation),
                        "%)"),
                    React.createElement("li", null,
                        "Rural Dwellers: ",
                        ruralDwellers.toLocaleString(),
                        " (",
                        VUtils.prettyPrintPercent(ruralDwellers / totalPopulation),
                        "%)"),
                    React.createElement("li", null,
                        "Avg Population Density: ",
                        Math.round(totalPopulation / this.props.region.AreaSqMiles).toLocaleString(),
                        " People / Mi\u00B2")),
                React.createElement("h3", null, "Livestock"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Total: ",
                        this.props.region.TotalLivestock.toLocaleString()),
                    React.createElement("li", null,
                        "Fowl: ",
                        this.props.region.Fowl.toLocaleString()),
                    React.createElement("li", null,
                        "Cows, Sheep, & Pigs: ",
                        this.props.region.BurdenBeasts.toLocaleString()))),
            React.createElement("div", null,
                React.createElement("h3", null, "Castle Info"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "Total Castles: ",
                        this.props.region.CastlesTotal.toLocaleString()),
                    React.createElement("li", null,
                        "Active Castles: ",
                        this.props.region.CastlesActive.toLocaleString()),
                    React.createElement("li", null,
                        "Ruined Castles: ",
                        this.props.region.CastlesRuined.toLocaleString()))),
            React.createElement("div", null,
                React.createElement("h3", null, "Settlement Info"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "#Cities: ",
                        this.props.region.Cities.length.toLocaleString()),
                    React.createElement("li", null,
                        "#Towns: ",
                        this.props.region.Towns.length.toLocaleString())),
                React.createElement(RegionSummary, { Settlements: settlements }))));
    }
}
//# sourceMappingURL=regionrender.js.map