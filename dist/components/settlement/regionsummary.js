import * as React from "react";
import { VUtils } from "../../utils";
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class RegionSummary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "Population"),
                    React.createElement("td", null, "City Miles\u00B2"),
                    React.createElement("td", null, "Countryside Population"),
                    React.createElement("td", null, "Countryside Miles\u00B2"),
                    React.createElement("td", null, "Villages"),
                    React.createElement("td", null, "Services"),
                    React.createElement("td", null, "Total Buildings"),
                    React.createElement("td", null, "Noble Families"),
                    React.createElement("td", null, "Clergy"),
                    React.createElement("td", null, "Priests"),
                    React.createElement("td", null, "Law Officers"))),
            React.createElement("tbody", null, this.props.Settlements.sort((a, b) => b.CityPopulation - a.CityPopulation).map((settlement) => {
                const cityDimensions = Math.sqrt(settlement.CityMilesSq).toPrecision(3).toLocaleString();
                const countrysideDimensions = Math.sqrt(settlement.CountrysideMilesSq).toPrecision(3).toLocaleString();
                const avgVillagePop = Math.floor(settlement.CountrysidePopulation / settlement.SupportingVillages).toLocaleString();
                return (React.createElement("tr", null,
                    React.createElement("td", null, settlement.CityPopulation.toLocaleString()),
                    React.createElement("td", null,
                        VUtils.prettyPrintRounded(settlement.CityMilesSq),
                        " (",
                        cityDimensions,
                        "\u00B2 miles)"),
                    React.createElement("td", null, settlement.CountrysidePopulation.toLocaleString()),
                    React.createElement("td", null,
                        VUtils.prettyPrintRounded(settlement.CountrysideMilesSq),
                        " (",
                        countrysideDimensions,
                        "\u00B2 miles)"),
                    React.createElement("td", null,
                        settlement.SupportingVillages.toLocaleString(),
                        " (",
                        avgVillagePop.toLocaleString(),
                        " avg people)"),
                    React.createElement("td", null, settlement.Services.length.toLocaleString()),
                    React.createElement("td", null, settlement.TotalBuildings.toLocaleString()),
                    React.createElement("td", null, settlement.NobleFamilies.toLocaleString()),
                    React.createElement("td", null, settlement.Clergy.toLocaleString()),
                    React.createElement("td", null, settlement.Priests.toLocaleString()),
                    React.createElement("td", null, settlement.LawOfficers.toLocaleString())));
            }))));
    }
}
//# sourceMappingURL=regionsummary.js.map