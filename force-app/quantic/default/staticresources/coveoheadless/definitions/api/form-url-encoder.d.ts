declare type FormEncodable = Record<string, string | number | boolean>;
export declare function encodeAsFormUrl(obj: FormEncodable): string;
export declare function canBeFormUrlEncoded(obj: unknown): obj is FormEncodable;
export {};
