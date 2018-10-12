import * as React from "react";
import * as ReactDOM from "react-dom";
import { RegionForm } from "./components/region/regionform";
import { RegionRender } from "./components/region/regionrender";
export class WorldBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { regions: [] };
        this.handleRegionSubmit = this.handleRegionSubmit.bind(this);
    }
    handleRegionSubmit(region) {
        this.setState({ regions: this.state.regions.concat([region]) });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(RegionForm, { onFormSubmit: this.handleRegionSubmit }),
            React.createElement("hr", null),
            this.state.regions.map((region, ind) => {
                return React.createElement(RegionRender, { region: region, key: ind });
            })));
    }
}
ReactDOM.render(React.createElement(WorldBuilder), document.getElementById("reactApp"));
//# sourceMappingURL=worldbuilder.js.map