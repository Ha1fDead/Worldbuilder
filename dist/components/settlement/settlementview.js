import * as React from "react";
import { VUtils } from "../../utils";
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export class SettlementView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cityDimensions = Math.sqrt(this.props.Settlement.CityMilesSq).toPrecision(3).toLocaleString();
        const countrysideDimensions = Math.sqrt(this.props.Settlement.CountrysideMilesSq).toPrecision(3).toLocaleString();
        const avgVillagePop = Math.floor(this.props.Settlement.CountrysidePopulation / this.props.Settlement.SupportingVillages).toLocaleString();
        return (React.createElement("div", null,
            React.createElement("dl", null,
                React.createElement("dt", null, "Population"),
                React.createElement("dd", null, this.props.Settlement.CityPopulation.toLocaleString()),
                React.createElement("dt", null, "City Area Miles\u00B2"),
                React.createElement("dd", null,
                    VUtils.prettyPrintRounded(this.props.Settlement.CityMilesSq),
                    " (",
                    cityDimensions,
                    "\u00B2 miles)"),
                React.createElement("dt", null, "Countryside Population"),
                React.createElement("dd", null, this.props.Settlement.CountrysidePopulation.toLocaleString()),
                React.createElement("dt", null, "Countryside Area Miles\u00B2"),
                React.createElement("dd", null,
                    VUtils.prettyPrintRounded(this.props.Settlement.CountrysideMilesSq),
                    " (",
                    countrysideDimensions,
                    "\u00B2 miles)"),
                React.createElement("dt", null, "Villages"),
                React.createElement("dd", null,
                    this.props.Settlement.SupportingVillages.toLocaleString(),
                    " (",
                    avgVillagePop.toLocaleString(),
                    " avg people)"),
                React.createElement("dt", null, "Services"),
                React.createElement("dd", null, this.props.Settlement.Services.length.toLocaleString()),
                React.createElement("dt", null, "Total Buildings"),
                React.createElement("dd", null, this.props.Settlement.TotalBuildings.toLocaleString()),
                React.createElement("dt", null, "Noble Families"),
                React.createElement("dd", null, this.props.Settlement.NobleFamilies.toLocaleString()),
                React.createElement("dt", null, "Clergy"),
                React.createElement("dd", null, this.props.Settlement.Clergy.toLocaleString()),
                React.createElement("dt", null, "Priests"),
                React.createElement("dd", null, this.props.Settlement.Priests.toLocaleString()),
                React.createElement("dt", null, "Guards"),
                React.createElement("dd", null, this.props.Settlement.LawOfficers.toLocaleString())),
            React.createElement("dl", null, this.props.Settlement.Services.map((service) => {
                return (React.createElement(React.Fragment, null,
                    React.createElement("dt", null, service.Name),
                    React.createElement("dd", null, service.SupportValue)));
            }))));
    }
}
//# sourceMappingURL=settlementview.js.map