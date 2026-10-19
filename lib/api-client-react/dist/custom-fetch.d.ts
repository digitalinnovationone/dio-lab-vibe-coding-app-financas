export type CustomFetchOptions = RequestInit & {
    responseType?: "json" | "text" | "blob" | "auto";
    redirectOnUnauthorized?: boolean;
};
export type ErrorType<T = unknown> = ApiError<T>;
export type BodyType<T> = T;
export type AuthTokenGetter = () => Promise<string | null> | string | null;
export declare function setUnauthorizedHandler(handler: (() => void) | null): void;
/**
 * Set a base URL that is prepended to every relative request URL
 * (i.e. paths that start with `/`).
 *
 * Useful for Expo bundles that need to call a remote API server.
 * Pass `null` to clear the base URL.
 */
export declare function setBaseUrl(url: string | null): void;
/**
 * Register a getter that supplies a bearer auth token.  Before every fetch
 * the getter is invoked; when it returns a non-null string, an
 * `Authorization: Bearer <token>` header is attached to the request.
 *
 * Useful for Expo bundles making token-gated API calls.
 * Pass `null` to clear the getter.
 *
 * NOTE: This function should never be used in web applications where session
 * token cookies are automatically associated with API calls by the browser.
 */
export declare function setAuthTokenGetter(getter: AuthTokenGetter | null): void;
export declare class ApiError<T = unknown> extends Error {
    readonly name = "ApiError";
    readonly status: number;
    readonly statusText: string;
    readonly data: T | null;
    readonly headers: Headers;
    readonly response: Response;
    readonly method: string;
    readonly url: string;
    constructor(response: Response, data: T | null, requestInfo: {
        method: string;
        url: string;
    });
}
export declare class ResponseParseError extends Error {
    readonly name = "ResponseParseError";
    readonly status: number;
    readonly statusText: string;
    readonly headers: Headers;
    readonly response: Response;
    readonly method: string;
    readonly url: string;
    readonly rawBody: string;
    readonly cause: unknown;
    constructor(response: Response, rawBody: string, cause: unknown, requestInfo: {
        method: string;
        url: string;
    });
}
export declare function customFetch<T = unknown>(input: RequestInfo | URL, options?: CustomFetchOptions): Promise<T>;
//# sourceMappingURL=custom-fetch.d.ts.map