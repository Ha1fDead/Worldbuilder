import * as React from "react";
import { Settlement } from "./settlement";
interface ISettlementRenderProps {
    Settlements: Settlement[];
}
/**
 * The region component, which displays a region with all of its fields in a user-friendly format
 */
export declare class SettlementRender extends React.Component<ISettlementRenderProps, {}> {
    constructor(props: ISettlementRenderProps);
    render(): JSX.Element;
}
export {};
