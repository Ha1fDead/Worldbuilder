import * as React from "react";
import { Settlement } from "./settlement";
interface IRegionSummaryProps {
    Settlements: Settlement[];
}
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export declare class RegionSummary extends React.Component<IRegionSummaryProps, {}> {
    constructor(props: IRegionSummaryProps);
    render(): JSX.Element;
}
export {};
