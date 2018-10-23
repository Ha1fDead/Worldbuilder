/**
 * A service is a business or town service that can be used. E.g., "Showmaker" is a service, "Gladiator Ring" is also a service
 *
 * Huge code smells here
 */
export declare class Service {
    Name: string;
    SupportValue: number;
    constructor(Name: string, SupportValue: number);
    static GetServices(): Service[];
}
