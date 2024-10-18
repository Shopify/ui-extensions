export interface Extension<Api, Result> {
  (api: Api): Result;
}
