export interface LocationApi {
    location: Location;
}
export interface RouterApi {
    history: {
        push(location: Location): void;
        replace(location: Location): void;
    } & LocationApi;
}
export interface Location {
    pathname: string;
}
//# sourceMappingURL=index.d.ts.map