import * as React from "react";
import { Settlement } from "./settlement";
interface ISettlementProps {
    Settlement: Settlement;
}
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export declare class SettlementView extends React.Component<ISettlementProps, {}> {
    constructor(props: ISettlementProps);
    render(): JSX.Element;
}
export {};
