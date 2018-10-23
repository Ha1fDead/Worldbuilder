import * as React from "react";
import { RegionModel } from "./region";
interface IRegionRenderProps extends React.Props<RegionRender> {
    region: RegionModel;
}
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export declare class RegionRender extends React.Component<IRegionRenderProps, {}> {
    constructor(props: IRegionRenderProps);
    render(): JSX.Element;
}
export {};
