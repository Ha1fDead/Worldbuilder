import * as React from "react";
import { RegionModel } from "./components/region/region";
interface IWorldBuilderState {
    regions: RegionModel[];
}
export declare class WorldBuilder extends React.Component<{}, IWorldBuilderState> {
    constructor(props: object);
    handleRegionSubmit(region: RegionModel): void;
    render(): JSX.Element;
}
export {};
