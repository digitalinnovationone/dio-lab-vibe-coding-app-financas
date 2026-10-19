import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ActionResponse, AlertFeedbackInput, AlertPreferenceUpdate, AlertPreferencesResponse, AlertsResponse, AllowanceResponse, ApiHealth, AssistantConversationResponse, AssistantMessageFeedbackInput, AssistantMessageFeedbackResponse, AssistantMessageInput, AssistantMessageResponse, AssistantUsageResponse, AuthResponse, BillsResponse, BudgetBatchInput, BudgetSuggestionResponse, BudgetsResponse, ConfigResponse, ConnectionInput, ConnectionResponse, DashboardHomeResponse, DebtInput, DebtPlanInput, DebtPlanNullableResponse, DebtPlanResponse, DebtResponse, DebtSimulationErrorResponse, DebtSimulationInput, DebtSimulationResponse, DebtUpdate, DebtsResponse, DeleteConnectionParams, FutureInstallmentsResponse, GetAccount200, GetAccounts200, GetBudgetsParams, GetCategories200, GetConnections200, GetFutureInstallmentsParams, GetTransaction200, GetTransactions200, GetTransactionsParams, GoalInput, GoalResponse, GoalUpdate, GoalsResponse, HealthStatus, LoginInput, MeUpdate, ProjectionResponse, RecurrencesResponse, SignupInput, SuggestBudgetsParams, SyncConnectionParams, TransactionUpdate, TransactionUpdateResponse, WeeklySummaryResponse } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getGetConnectionsUrl: () => string;
export declare const getConnections: (options?: Parameters<typeof customFetch>[1]) => Promise<GetConnections200>;
export declare const getGetConnectionsQueryKey: () => readonly ["/api/v1/connections"];
export declare const getGetConnectionsQueryOptions: <TData = Awaited<ReturnType<typeof getConnections>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnections>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConnections>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConnectionsQueryResult = NonNullable<Awaited<ReturnType<typeof getConnections>>>;
export type GetConnectionsQueryError = ErrorType<unknown>;
export declare function useGetConnections<TData = Awaited<ReturnType<typeof getConnections>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnections>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateConnectionUrl: () => string;
export declare const createConnection: (connectionInput: ConnectionInput, options?: Parameters<typeof customFetch>[1]) => Promise<ConnectionResponse>;
export declare const getCreateConnectionMutationKey: () => readonly ["createConnection"];
export declare const getCreateConnectionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConnection>>, TError, CreateConnectionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createConnection>>, TError, CreateConnectionMutationVariables, TContext>;
export type CreateConnectionMutationResult = NonNullable<Awaited<ReturnType<typeof createConnection>>>;
export type CreateConnectionMutationBody = BodyType<ConnectionInput>;
export type CreateConnectionMutationError = ErrorType<unknown>;
export type CreateConnectionMutationVariables = {
    data: BodyType<ConnectionInput>;
};
export declare const useCreateConnection: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConnection>>, TError, CreateConnectionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createConnection>>, TError, CreateConnectionMutationVariables, TContext>;
export declare const getGetConnectionUrl: (id: string) => string;
export declare const getConnection: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<ConnectionResponse>;
export declare const getGetConnectionQueryKey: (id: string) => readonly [`/api/v1/connections/${string}`];
export declare const getGetConnectionQueryOptions: <TData = Awaited<ReturnType<typeof getConnection>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnection>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConnection>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConnectionQueryResult = NonNullable<Awaited<ReturnType<typeof getConnection>>>;
export type GetConnectionQueryError = ErrorType<unknown>;
export declare function useGetConnection<TData = Awaited<ReturnType<typeof getConnection>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConnection>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteConnectionUrl: (id: string, params?: DeleteConnectionParams) => string;
export declare const deleteConnection: (id: string, params?: DeleteConnectionParams, options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getDeleteConnectionMutationKey: () => readonly ["deleteConnection"];
export declare const getDeleteConnectionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteConnection>>, TError, DeleteConnectionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteConnection>>, TError, DeleteConnectionMutationVariables, TContext>;
export type DeleteConnectionMutationResult = NonNullable<Awaited<ReturnType<typeof deleteConnection>>>;
export type DeleteConnectionMutationError = ErrorType<unknown>;
export type DeleteConnectionMutationVariables = {
    id: string;
    params?: DeleteConnectionParams;
};
export declare const useDeleteConnection: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteConnection>>, TError, DeleteConnectionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteConnection>>, TError, DeleteConnectionMutationVariables, TContext>;
export declare const getSyncConnectionUrl: (id: string, params?: SyncConnectionParams) => string;
export declare const syncConnection: (id: string, params?: SyncConnectionParams, options?: Parameters<typeof customFetch>[1]) => Promise<ConnectionResponse>;
export declare const getSyncConnectionMutationKey: () => readonly ["syncConnection"];
export declare const getSyncConnectionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof syncConnection>>, TError, SyncConnectionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof syncConnection>>, TError, SyncConnectionMutationVariables, TContext>;
export type SyncConnectionMutationResult = NonNullable<Awaited<ReturnType<typeof syncConnection>>>;
export type SyncConnectionMutationError = ErrorType<unknown>;
export type SyncConnectionMutationVariables = {
    id: string;
    params?: SyncConnectionParams;
};
export declare const useSyncConnection: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof syncConnection>>, TError, SyncConnectionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof syncConnection>>, TError, SyncConnectionMutationVariables, TContext>;
export declare const getGetAccountsUrl: () => string;
export declare const getAccounts: (options?: Parameters<typeof customFetch>[1]) => Promise<GetAccounts200>;
export declare const getGetAccountsQueryKey: () => readonly ["/api/v1/accounts"];
export declare const getGetAccountsQueryOptions: <TData = Awaited<ReturnType<typeof getAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAccounts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAccountsQueryResult = NonNullable<Awaited<ReturnType<typeof getAccounts>>>;
export type GetAccountsQueryError = ErrorType<unknown>;
export declare function useGetAccounts<TData = Awaited<ReturnType<typeof getAccounts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccounts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAccountUrl: (id: string) => string;
export declare const getAccount: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<GetAccount200>;
export declare const getGetAccountQueryKey: (id: string) => readonly [`/api/v1/accounts/${string}`];
export declare const getGetAccountQueryOptions: <TData = Awaited<ReturnType<typeof getAccount>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccount>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAccount>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAccountQueryResult = NonNullable<Awaited<ReturnType<typeof getAccount>>>;
export type GetAccountQueryError = ErrorType<unknown>;
export declare function useGetAccount<TData = Awaited<ReturnType<typeof getAccount>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAccount>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetCategoriesUrl: () => string;
export declare const getCategories: (options?: Parameters<typeof customFetch>[1]) => Promise<GetCategories200>;
export declare const getGetCategoriesQueryKey: () => readonly ["/api/v1/categories"];
export declare const getGetCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof getCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>;
export type GetCategoriesQueryError = ErrorType<unknown>;
export declare function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetTransactionsUrl: (params?: GetTransactionsParams) => string;
export declare const getTransactions: (params?: GetTransactionsParams, options?: Parameters<typeof customFetch>[1]) => Promise<GetTransactions200>;
export declare const getGetTransactionsQueryKey: (params?: GetTransactionsParams) => readonly ["/api/v1/transactions", ...GetTransactionsParams[]];
export declare const getGetTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<unknown>>(params?: GetTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof getTransactions>>>;
export type GetTransactionsQueryError = ErrorType<unknown>;
export declare function useGetTransactions<TData = Awaited<ReturnType<typeof getTransactions>>, TError = ErrorType<unknown>>(params?: GetTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateTransactionUrl: (id: string) => string;
/**
 * @summary Correct a transaction and optionally apply a merchant rule
 */
export declare const updateTransaction: (id: string, transactionUpdate: TransactionUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<TransactionUpdateResponse>;
export declare const getUpdateTransactionMutationKey: () => readonly ["updateTransaction"];
export declare const getUpdateTransactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTransaction>>, TError, UpdateTransactionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTransaction>>, TError, UpdateTransactionMutationVariables, TContext>;
export type UpdateTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof updateTransaction>>>;
export type UpdateTransactionMutationBody = BodyType<TransactionUpdate>;
export type UpdateTransactionMutationError = ErrorType<unknown>;
export type UpdateTransactionMutationVariables = {
    id: string;
    data: BodyType<TransactionUpdate>;
};
/**
* @summary Correct a transaction and optionally apply a merchant rule
*/
export declare const useUpdateTransaction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTransaction>>, TError, UpdateTransactionMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTransaction>>, TError, UpdateTransactionMutationVariables, TContext>;
export declare const getGetTransactionUrl: (id: string) => string;
/**
 * @summary Read one transaction owned by the session user
 */
export declare const getTransaction: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<GetTransaction200>;
export declare const getGetTransactionQueryKey: (id: string) => readonly [`/api/v1/transactions/${string}`];
export declare const getGetTransactionQueryOptions: <TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<void>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionQueryResult = NonNullable<Awaited<ReturnType<typeof getTransaction>>>;
export type GetTransactionQueryError = ErrorType<void>;
/**
 * @summary Read one transaction owned by the session user
 */
export declare function useGetTransaction<TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<void>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetConfigUrl: () => string;
/**
 * @summary Get public application configuration
 */
export declare const getConfig: (options?: Parameters<typeof customFetch>[1]) => Promise<ConfigResponse>;
export declare const getGetConfigQueryKey: () => readonly ["/api/v1/config"];
export declare const getGetConfigQueryOptions: <TData = Awaited<ReturnType<typeof getConfig>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConfig>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConfig>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConfigQueryResult = NonNullable<Awaited<ReturnType<typeof getConfig>>>;
export type GetConfigQueryError = ErrorType<unknown>;
/**
 * @summary Get public application configuration
 */
export declare function useGetConfig<TData = Awaited<ReturnType<typeof getConfig>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConfig>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSignupUrl: () => string;
/**
 * @summary Create an account and a session
 */
export declare const signup: (signupInput: SignupInput, options?: Parameters<typeof customFetch>[1]) => Promise<AuthResponse>;
export declare const getSignupMutationKey: () => readonly ["signup"];
export declare const getSignupMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof signup>>, TError, SignupMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof signup>>, TError, SignupMutationVariables, TContext>;
export type SignupMutationResult = NonNullable<Awaited<ReturnType<typeof signup>>>;
export type SignupMutationBody = BodyType<SignupInput>;
export type SignupMutationError = ErrorType<unknown>;
export type SignupMutationVariables = {
    data: BodyType<SignupInput>;
};
/**
* @summary Create an account and a session
*/
export declare const useSignup: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof signup>>, TError, SignupMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof signup>>, TError, SignupMutationVariables, TContext>;
export declare const getLoginUrl: () => string;
/**
 * @summary Log in and create a session
 */
export declare const login: (loginInput: LoginInput, options?: Parameters<typeof customFetch>[1]) => Promise<AuthResponse>;
export declare const getLoginMutationKey: () => readonly ["login"];
export declare const getLoginMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, LoginMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, LoginMutationVariables, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginInput>;
export type LoginMutationError = ErrorType<unknown>;
export type LoginMutationVariables = {
    data: BodyType<LoginInput>;
};
/**
* @summary Log in and create a session
*/
export declare const useLogin: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, LoginMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, LoginMutationVariables, TContext>;
export declare const getLogoutUrl: () => string;
/**
 * @summary End the current session
 */
export declare const logout: (options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getLogoutMutationKey: () => readonly ["logout"];
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
* @summary End the current session
*/
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export declare const getLogoutAllUrl: () => string;
/**
 * @summary End all sessions for the current user
 */
export declare const logoutAll: (options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getLogoutAllMutationKey: () => readonly ["logoutAll"];
export declare const getLogoutAllMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutAll>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logoutAll>>, TError, void, TContext>;
export type LogoutAllMutationResult = NonNullable<Awaited<ReturnType<typeof logoutAll>>>;
export type LogoutAllMutationError = ErrorType<unknown>;
/**
* @summary End all sessions for the current user
*/
export declare const useLogoutAll: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logoutAll>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logoutAll>>, TError, void, TContext>;
export declare const getGetMeUrl: () => string;
/**
 * @summary Get the current user profile
 */
export declare const getMe: (options?: Parameters<typeof customFetch>[1]) => Promise<AuthResponse>;
export declare const getGetMeQueryKey: () => readonly ["/api/v1/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<unknown>;
/**
 * @summary Get the current user profile
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateMeUrl: () => string;
/**
 * @summary Update the current user's confirmed monthly income
 */
export declare const updateMe: (meUpdate: MeUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<AuthResponse>;
export declare const getUpdateMeMutationKey: () => readonly ["updateMe"];
export declare const getUpdateMeMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, UpdateMeMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, UpdateMeMutationVariables, TContext>;
export type UpdateMeMutationResult = NonNullable<Awaited<ReturnType<typeof updateMe>>>;
export type UpdateMeMutationBody = BodyType<MeUpdate>;
export type UpdateMeMutationError = ErrorType<void>;
export type UpdateMeMutationVariables = {
    data: BodyType<MeUpdate>;
};
/**
* @summary Update the current user's confirmed monthly income
*/
export declare const useUpdateMe: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, UpdateMeMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateMe>>, TError, UpdateMeMutationVariables, TContext>;
export declare const getDeleteMeUrl: () => string;
/**
 * @summary Delete the current account and all associated data
 */
export declare const deleteMe: (options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getDeleteMeMutationKey: () => readonly ["deleteMe"];
export declare const getDeleteMeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMe>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMe>>, TError, void, TContext>;
export type DeleteMeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMe>>>;
export type DeleteMeMutationError = ErrorType<unknown>;
/**
* @summary Delete the current account and all associated data
*/
export declare const useDeleteMe: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMe>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMe>>, TError, void, TContext>;
export declare const getExportMeUrl: () => string;
/**
 * @summary Export the current user's financial transactions as CSV
 */
export declare const exportMe: (options?: Parameters<typeof customFetch>[1]) => Promise<Blob>;
export declare const getExportMeMutationKey: () => readonly ["exportMe"];
export declare const getExportMeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof exportMe>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof exportMe>>, TError, void, TContext>;
export type ExportMeMutationResult = NonNullable<Awaited<ReturnType<typeof exportMe>>>;
export type ExportMeMutationError = ErrorType<unknown>;
/**
* @summary Export the current user's financial transactions as CSV
*/
export declare const useExportMe: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof exportMe>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof exportMe>>, TError, void, TContext>;
export declare const getGetAllowanceUrl: () => string;
/**
 * @summary Get the current daily spending allowance with its calculation
 */
export declare const getAllowance: (options?: Parameters<typeof customFetch>[1]) => Promise<AllowanceResponse>;
export declare const getGetAllowanceQueryKey: () => readonly ["/api/v1/allowance"];
export declare const getGetAllowanceQueryOptions: <TData = Awaited<ReturnType<typeof getAllowance>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAllowance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAllowance>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAllowanceQueryResult = NonNullable<Awaited<ReturnType<typeof getAllowance>>>;
export type GetAllowanceQueryError = ErrorType<unknown>;
/**
 * @summary Get the current daily spending allowance with its calculation
 */
export declare function useGetAllowance<TData = Awaited<ReturnType<typeof getAllowance>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAllowance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetProjectionUrl: () => string;
/**
 * @summary Get the projected end-of-month account balance
 */
export declare const getProjection: (options?: Parameters<typeof customFetch>[1]) => Promise<ProjectionResponse>;
export declare const getGetProjectionQueryKey: () => readonly ["/api/v1/projection"];
export declare const getGetProjectionQueryOptions: <TData = Awaited<ReturnType<typeof getProjection>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProjection>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProjection>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProjectionQueryResult = NonNullable<Awaited<ReturnType<typeof getProjection>>>;
export type GetProjectionQueryError = ErrorType<unknown>;
/**
 * @summary Get the projected end-of-month account balance
 */
export declare function useGetProjection<TData = Awaited<ReturnType<typeof getProjection>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProjection>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDashboardHomeUrl: () => string;
/**
 * @summary Get the home dashboard and first-snapshot data for the session user
 */
export declare const getDashboardHome: (options?: Parameters<typeof customFetch>[1]) => Promise<DashboardHomeResponse>;
export declare const getGetDashboardHomeQueryKey: () => readonly ["/api/v1/dashboard/home"];
export declare const getGetDashboardHomeQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardHome>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardHome>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardHome>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardHomeQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardHome>>>;
export type GetDashboardHomeQueryError = ErrorType<unknown>;
/**
 * @summary Get the home dashboard and first-snapshot data for the session user
 */
export declare function useGetDashboardHome<TData = Awaited<ReturnType<typeof getDashboardHome>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardHome>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetApiHealthUrl: () => string;
/**
 * Returns a simple health status for the API
 * @summary Check API health
 */
export declare const getApiHealth: (options?: Parameters<typeof customFetch>[1]) => Promise<ApiHealth>;
export declare const getGetApiHealthQueryKey: () => readonly ["/api/v1/health"];
export declare const getGetApiHealthQueryOptions: <TData = Awaited<ReturnType<typeof getApiHealth>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getApiHealth>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getApiHealth>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetApiHealthQueryResult = NonNullable<Awaited<ReturnType<typeof getApiHealth>>>;
export type GetApiHealthQueryError = ErrorType<unknown>;
/**
 * @summary Check API health
 */
export declare function useGetApiHealth<TData = Awaited<ReturnType<typeof getApiHealth>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getApiHealth>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetRecurrencesUrl: () => string;
/**
 * @summary List detected and user recurrences for the session user
 */
export declare const getRecurrences: (options?: Parameters<typeof customFetch>[1]) => Promise<RecurrencesResponse>;
export declare const getGetRecurrencesQueryKey: () => readonly ["/api/v1/recurrences"];
export declare const getGetRecurrencesQueryOptions: <TData = Awaited<ReturnType<typeof getRecurrences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecurrences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecurrences>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRecurrencesQueryResult = NonNullable<Awaited<ReturnType<typeof getRecurrences>>>;
export type GetRecurrencesQueryError = ErrorType<unknown>;
/**
 * @summary List detected and user recurrences for the session user
 */
export declare function useGetRecurrences<TData = Awaited<ReturnType<typeof getRecurrences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecurrences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetFutureInstallmentsUrl: (params?: GetFutureInstallmentsParams) => string;
/**
 * @summary List committed installments and projections for upcoming months
 */
export declare const getFutureInstallments: (params?: GetFutureInstallmentsParams, options?: Parameters<typeof customFetch>[1]) => Promise<FutureInstallmentsResponse>;
export declare const getGetFutureInstallmentsQueryKey: (params?: GetFutureInstallmentsParams) => readonly ["/api/v1/installments/future", ...GetFutureInstallmentsParams[]];
export declare const getGetFutureInstallmentsQueryOptions: <TData = Awaited<ReturnType<typeof getFutureInstallments>>, TError = ErrorType<unknown>>(params?: GetFutureInstallmentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFutureInstallments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFutureInstallments>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFutureInstallmentsQueryResult = NonNullable<Awaited<ReturnType<typeof getFutureInstallments>>>;
export type GetFutureInstallmentsQueryError = ErrorType<unknown>;
/**
 * @summary List committed installments and projections for upcoming months
 */
export declare function useGetFutureInstallments<TData = Awaited<ReturnType<typeof getFutureInstallments>>, TError = ErrorType<unknown>>(params?: GetFutureInstallmentsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFutureInstallments>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetBillsUrl: () => string;
/**
 * @summary List the session user's bills
 */
export declare const getBills: (options?: Parameters<typeof customFetch>[1]) => Promise<BillsResponse>;
export declare const getGetBillsQueryKey: () => readonly ["/api/v1/bills"];
export declare const getGetBillsQueryOptions: <TData = Awaited<ReturnType<typeof getBills>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBills>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBills>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBillsQueryResult = NonNullable<Awaited<ReturnType<typeof getBills>>>;
export type GetBillsQueryError = ErrorType<unknown>;
/**
 * @summary List the session user's bills
 */
export declare function useGetBills<TData = Awaited<ReturnType<typeof getBills>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBills>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetBudgetsUrl: (params: GetBudgetsParams) => string;
/**
 * @summary List category budgets and spend for a month
 */
export declare const getBudgets: (params: GetBudgetsParams, options?: Parameters<typeof customFetch>[1]) => Promise<BudgetsResponse>;
export declare const getGetBudgetsQueryKey: (params?: GetBudgetsParams) => readonly ["/api/v1/budgets", ...GetBudgetsParams[]];
export declare const getGetBudgetsQueryOptions: <TData = Awaited<ReturnType<typeof getBudgets>>, TError = ErrorType<unknown>>(params: GetBudgetsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBudgets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBudgets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBudgetsQueryResult = NonNullable<Awaited<ReturnType<typeof getBudgets>>>;
export type GetBudgetsQueryError = ErrorType<unknown>;
/**
 * @summary List category budgets and spend for a month
 */
export declare function useGetBudgets<TData = Awaited<ReturnType<typeof getBudgets>>, TError = ErrorType<unknown>>(params: GetBudgetsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBudgets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSaveBudgetsUrl: () => string;
/**
 * @summary Replace a month's category budgets
 */
export declare const saveBudgets: (budgetBatchInput: BudgetBatchInput, options?: Parameters<typeof customFetch>[1]) => Promise<BudgetsResponse>;
export declare const getSaveBudgetsMutationKey: () => readonly ["saveBudgets"];
export declare const getSaveBudgetsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveBudgets>>, TError, SaveBudgetsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof saveBudgets>>, TError, SaveBudgetsMutationVariables, TContext>;
export type SaveBudgetsMutationResult = NonNullable<Awaited<ReturnType<typeof saveBudgets>>>;
export type SaveBudgetsMutationBody = BodyType<BudgetBatchInput>;
export type SaveBudgetsMutationError = ErrorType<unknown>;
export type SaveBudgetsMutationVariables = {
    data: BodyType<BudgetBatchInput>;
};
/**
* @summary Replace a month's category budgets
*/
export declare const useSaveBudgets: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveBudgets>>, TError, SaveBudgetsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof saveBudgets>>, TError, SaveBudgetsMutationVariables, TContext>;
export declare const getSuggestBudgetsUrl: (params: SuggestBudgetsParams) => string;
/**
 * @summary Suggest category limits from the last three complete months
 */
export declare const suggestBudgets: (params: SuggestBudgetsParams, options?: Parameters<typeof customFetch>[1]) => Promise<BudgetSuggestionResponse>;
export declare const getSuggestBudgetsMutationKey: () => readonly ["suggestBudgets"];
export declare const getSuggestBudgetsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof suggestBudgets>>, TError, SuggestBudgetsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof suggestBudgets>>, TError, SuggestBudgetsMutationVariables, TContext>;
export type SuggestBudgetsMutationResult = NonNullable<Awaited<ReturnType<typeof suggestBudgets>>>;
export type SuggestBudgetsMutationError = ErrorType<unknown>;
export type SuggestBudgetsMutationVariables = {
    params: SuggestBudgetsParams;
};
/**
* @summary Suggest category limits from the last three complete months
*/
export declare const useSuggestBudgets: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof suggestBudgets>>, TError, SuggestBudgetsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof suggestBudgets>>, TError, SuggestBudgetsMutationVariables, TContext>;
export declare const getGetGoalsUrl: () => string;
/**
 * @summary List the session user's goals
 */
export declare const getGoals: (options?: Parameters<typeof customFetch>[1]) => Promise<GoalsResponse>;
export declare const getGetGoalsQueryKey: () => readonly ["/api/v1/goals"];
export declare const getGetGoalsQueryOptions: <TData = Awaited<ReturnType<typeof getGoals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGoals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGoals>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGoalsQueryResult = NonNullable<Awaited<ReturnType<typeof getGoals>>>;
export type GetGoalsQueryError = ErrorType<unknown>;
/**
 * @summary List the session user's goals
 */
export declare function useGetGoals<TData = Awaited<ReturnType<typeof getGoals>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGoals>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateGoalUrl: () => string;
/**
 * @summary Create a goal
 */
export declare const createGoal: (goalInput: GoalInput, options?: Parameters<typeof customFetch>[1]) => Promise<GoalResponse>;
export declare const getCreateGoalMutationKey: () => readonly ["createGoal"];
export declare const getCreateGoalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError, CreateGoalMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError, CreateGoalMutationVariables, TContext>;
export type CreateGoalMutationResult = NonNullable<Awaited<ReturnType<typeof createGoal>>>;
export type CreateGoalMutationBody = BodyType<GoalInput>;
export type CreateGoalMutationError = ErrorType<unknown>;
export type CreateGoalMutationVariables = {
    data: BodyType<GoalInput>;
};
/**
* @summary Create a goal
*/
export declare const useCreateGoal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createGoal>>, TError, CreateGoalMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createGoal>>, TError, CreateGoalMutationVariables, TContext>;
export declare const getGetGoalUrl: (id: string) => string;
/**
 * @summary Get one goal
 */
export declare const getGoal: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<GoalResponse>;
export declare const getGetGoalQueryKey: (id: string) => readonly [`/api/v1/goals/${string}`];
export declare const getGetGoalQueryOptions: <TData = Awaited<ReturnType<typeof getGoal>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGoal>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getGoal>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetGoalQueryResult = NonNullable<Awaited<ReturnType<typeof getGoal>>>;
export type GetGoalQueryError = ErrorType<unknown>;
/**
 * @summary Get one goal
 */
export declare function useGetGoal<TData = Awaited<ReturnType<typeof getGoal>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getGoal>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateGoalUrl: (id: string) => string;
/**
 * @summary Update a goal
 */
export declare const updateGoal: (id: string, goalUpdate: GoalUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<GoalResponse>;
export declare const getUpdateGoalMutationKey: () => readonly ["updateGoal"];
export declare const getUpdateGoalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGoal>>, TError, UpdateGoalMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateGoal>>, TError, UpdateGoalMutationVariables, TContext>;
export type UpdateGoalMutationResult = NonNullable<Awaited<ReturnType<typeof updateGoal>>>;
export type UpdateGoalMutationBody = BodyType<GoalUpdate>;
export type UpdateGoalMutationError = ErrorType<unknown>;
export type UpdateGoalMutationVariables = {
    id: string;
    data: BodyType<GoalUpdate>;
};
/**
* @summary Update a goal
*/
export declare const useUpdateGoal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateGoal>>, TError, UpdateGoalMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateGoal>>, TError, UpdateGoalMutationVariables, TContext>;
export declare const getDeleteGoalUrl: (id: string) => string;
/**
 * @summary Delete a goal
 */
export declare const deleteGoal: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getDeleteGoalMutationKey: () => readonly ["deleteGoal"];
export declare const getDeleteGoalMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGoal>>, TError, DeleteGoalMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteGoal>>, TError, DeleteGoalMutationVariables, TContext>;
export type DeleteGoalMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGoal>>>;
export type DeleteGoalMutationError = ErrorType<unknown>;
export type DeleteGoalMutationVariables = {
    id: string;
};
/**
* @summary Delete a goal
*/
export declare const useDeleteGoal: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGoal>>, TError, DeleteGoalMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteGoal>>, TError, DeleteGoalMutationVariables, TContext>;
export declare const getGetDebtsUrl: () => string;
/**
 * @summary List detected and user-entered debts
 */
export declare const getDebts: (options?: Parameters<typeof customFetch>[1]) => Promise<DebtsResponse>;
export declare const getGetDebtsQueryKey: () => readonly ["/api/v1/debts"];
export declare const getGetDebtsQueryOptions: <TData = Awaited<ReturnType<typeof getDebts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDebts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDebts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDebtsQueryResult = NonNullable<Awaited<ReturnType<typeof getDebts>>>;
export type GetDebtsQueryError = ErrorType<unknown>;
/**
 * @summary List detected and user-entered debts
 */
export declare function useGetDebts<TData = Awaited<ReturnType<typeof getDebts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDebts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateDebtUrl: () => string;
/**
 * @summary Create a user-entered debt
 */
export declare const createDebt: (debtInput: DebtInput, options?: Parameters<typeof customFetch>[1]) => Promise<DebtResponse>;
export declare const getCreateDebtMutationKey: () => readonly ["createDebt"];
export declare const getCreateDebtMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDebt>>, TError, CreateDebtMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createDebt>>, TError, CreateDebtMutationVariables, TContext>;
export type CreateDebtMutationResult = NonNullable<Awaited<ReturnType<typeof createDebt>>>;
export type CreateDebtMutationBody = BodyType<DebtInput>;
export type CreateDebtMutationError = ErrorType<unknown>;
export type CreateDebtMutationVariables = {
    data: BodyType<DebtInput>;
};
/**
* @summary Create a user-entered debt
*/
export declare const useCreateDebt: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDebt>>, TError, CreateDebtMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createDebt>>, TError, CreateDebtMutationVariables, TContext>;
export declare const getGetDebtUrl: (id: string) => string;
/**
 * @summary Get one debt
 */
export declare const getDebt: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<DebtResponse>;
export declare const getGetDebtQueryKey: (id: string) => readonly [`/api/v1/debts/${string}`];
export declare const getGetDebtQueryOptions: <TData = Awaited<ReturnType<typeof getDebt>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDebt>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDebt>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDebtQueryResult = NonNullable<Awaited<ReturnType<typeof getDebt>>>;
export type GetDebtQueryError = ErrorType<unknown>;
/**
 * @summary Get one debt
 */
export declare function useGetDebt<TData = Awaited<ReturnType<typeof getDebt>>, TError = ErrorType<unknown>>(id: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDebt>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateDebtUrl: (id: string) => string;
/**
 * @summary Confirm or edit a debt
 */
export declare const updateDebt: (id: string, debtUpdate: DebtUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<DebtResponse>;
export declare const getUpdateDebtMutationKey: () => readonly ["updateDebt"];
export declare const getUpdateDebtMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateDebt>>, TError, UpdateDebtMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateDebt>>, TError, UpdateDebtMutationVariables, TContext>;
export type UpdateDebtMutationResult = NonNullable<Awaited<ReturnType<typeof updateDebt>>>;
export type UpdateDebtMutationBody = BodyType<DebtUpdate>;
export type UpdateDebtMutationError = ErrorType<unknown>;
export type UpdateDebtMutationVariables = {
    id: string;
    data: BodyType<DebtUpdate>;
};
/**
* @summary Confirm or edit a debt
*/
export declare const useUpdateDebt: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateDebt>>, TError, UpdateDebtMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateDebt>>, TError, UpdateDebtMutationVariables, TContext>;
export declare const getDeleteDebtUrl: (id: string) => string;
/**
 * @summary Delete a debt
 */
export declare const deleteDebt: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getDeleteDebtMutationKey: () => readonly ["deleteDebt"];
export declare const getDeleteDebtMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteDebt>>, TError, DeleteDebtMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteDebt>>, TError, DeleteDebtMutationVariables, TContext>;
export type DeleteDebtMutationResult = NonNullable<Awaited<ReturnType<typeof deleteDebt>>>;
export type DeleteDebtMutationError = ErrorType<unknown>;
export type DeleteDebtMutationVariables = {
    id: string;
};
/**
* @summary Delete a debt
*/
export declare const useDeleteDebt: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteDebt>>, TError, DeleteDebtMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteDebt>>, TError, DeleteDebtMutationVariables, TContext>;
export declare const getSimulateDebtsUrl: () => string;
/**
 * @summary Compare avalanche and snowball debt payoff strategies
 */
export declare const simulateDebts: (debtSimulationInput: DebtSimulationInput, options?: Parameters<typeof customFetch>[1]) => Promise<DebtSimulationResponse>;
export declare const getSimulateDebtsMutationKey: () => readonly ["simulateDebts"];
export declare const getSimulateDebtsMutationOptions: <TError = ErrorType<DebtSimulationErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof simulateDebts>>, TError, SimulateDebtsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof simulateDebts>>, TError, SimulateDebtsMutationVariables, TContext>;
export type SimulateDebtsMutationResult = NonNullable<Awaited<ReturnType<typeof simulateDebts>>>;
export type SimulateDebtsMutationBody = BodyType<DebtSimulationInput>;
export type SimulateDebtsMutationError = ErrorType<DebtSimulationErrorResponse>;
export type SimulateDebtsMutationVariables = {
    data: BodyType<DebtSimulationInput>;
};
/**
* @summary Compare avalanche and snowball debt payoff strategies
*/
export declare const useSimulateDebts: <TError = ErrorType<DebtSimulationErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof simulateDebts>>, TError, SimulateDebtsMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof simulateDebts>>, TError, SimulateDebtsMutationVariables, TContext>;
export declare const getGetActiveDebtPlanUrl: () => string;
/**
 * @summary Get the active debt plan, if any
 */
export declare const getActiveDebtPlan: (options?: Parameters<typeof customFetch>[1]) => Promise<DebtPlanNullableResponse>;
export declare const getGetActiveDebtPlanQueryKey: () => readonly ["/api/v1/debt-plans"];
export declare const getGetActiveDebtPlanQueryOptions: <TData = Awaited<ReturnType<typeof getActiveDebtPlan>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getActiveDebtPlan>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getActiveDebtPlan>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetActiveDebtPlanQueryResult = NonNullable<Awaited<ReturnType<typeof getActiveDebtPlan>>>;
export type GetActiveDebtPlanQueryError = ErrorType<unknown>;
/**
 * @summary Get the active debt plan, if any
 */
export declare function useGetActiveDebtPlan<TData = Awaited<ReturnType<typeof getActiveDebtPlan>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getActiveDebtPlan>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getActivateDebtPlanUrl: () => string;
/**
 * @summary Activate a selected debt payoff plan
 */
export declare const activateDebtPlan: (debtPlanInput: DebtPlanInput, options?: Parameters<typeof customFetch>[1]) => Promise<DebtPlanResponse>;
export declare const getActivateDebtPlanMutationKey: () => readonly ["activateDebtPlan"];
export declare const getActivateDebtPlanMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof activateDebtPlan>>, TError, ActivateDebtPlanMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof activateDebtPlan>>, TError, ActivateDebtPlanMutationVariables, TContext>;
export type ActivateDebtPlanMutationResult = NonNullable<Awaited<ReturnType<typeof activateDebtPlan>>>;
export type ActivateDebtPlanMutationBody = BodyType<DebtPlanInput>;
export type ActivateDebtPlanMutationError = ErrorType<unknown>;
export type ActivateDebtPlanMutationVariables = {
    data: BodyType<DebtPlanInput>;
};
/**
* @summary Activate a selected debt payoff plan
*/
export declare const useActivateDebtPlan: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof activateDebtPlan>>, TError, ActivateDebtPlanMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof activateDebtPlan>>, TError, ActivateDebtPlanMutationVariables, TContext>;
export declare const getGetAlertsUrl: () => string;
/**
 * @summary List alerts for the session user
 */
export declare const getAlerts: (options?: Parameters<typeof customFetch>[1]) => Promise<AlertsResponse>;
export declare const getGetAlertsQueryKey: () => readonly ["/api/v1/alerts"];
export declare const getGetAlertsQueryOptions: <TData = Awaited<ReturnType<typeof getAlerts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAlerts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAlertsQueryResult = NonNullable<Awaited<ReturnType<typeof getAlerts>>>;
export type GetAlertsQueryError = ErrorType<unknown>;
/**
 * @summary List alerts for the session user
 */
export declare function useGetAlerts<TData = Awaited<ReturnType<typeof getAlerts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getMarkAlertReadUrl: (id: string) => string;
/**
 * @summary Mark one alert as read
 */
export declare const markAlertRead: (id: string, options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getMarkAlertReadMutationKey: () => readonly ["markAlertRead"];
export declare const getMarkAlertReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAlertRead>>, TError, MarkAlertReadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markAlertRead>>, TError, MarkAlertReadMutationVariables, TContext>;
export type MarkAlertReadMutationResult = NonNullable<Awaited<ReturnType<typeof markAlertRead>>>;
export type MarkAlertReadMutationError = ErrorType<unknown>;
export type MarkAlertReadMutationVariables = {
    id: string;
};
/**
* @summary Mark one alert as read
*/
export declare const useMarkAlertRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAlertRead>>, TError, MarkAlertReadMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markAlertRead>>, TError, MarkAlertReadMutationVariables, TContext>;
export declare const getSubmitAlertFeedbackUrl: (id: string) => string;
/**
 * @summary Save feedback about an alert
 */
export declare const submitAlertFeedback: (id: string, alertFeedbackInput: AlertFeedbackInput, options?: Parameters<typeof customFetch>[1]) => Promise<ActionResponse>;
export declare const getSubmitAlertFeedbackMutationKey: () => readonly ["submitAlertFeedback"];
export declare const getSubmitAlertFeedbackMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitAlertFeedback>>, TError, SubmitAlertFeedbackMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitAlertFeedback>>, TError, SubmitAlertFeedbackMutationVariables, TContext>;
export type SubmitAlertFeedbackMutationResult = NonNullable<Awaited<ReturnType<typeof submitAlertFeedback>>>;
export type SubmitAlertFeedbackMutationBody = BodyType<AlertFeedbackInput>;
export type SubmitAlertFeedbackMutationError = ErrorType<unknown>;
export type SubmitAlertFeedbackMutationVariables = {
    id: string;
    data: BodyType<AlertFeedbackInput>;
};
/**
* @summary Save feedback about an alert
*/
export declare const useSubmitAlertFeedback: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitAlertFeedback>>, TError, SubmitAlertFeedbackMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitAlertFeedback>>, TError, SubmitAlertFeedbackMutationVariables, TContext>;
export declare const getGetAlertPreferencesUrl: () => string;
/**
 * @summary List alert preferences for the session user
 */
export declare const getAlertPreferences: (options?: Parameters<typeof customFetch>[1]) => Promise<AlertPreferencesResponse>;
export declare const getGetAlertPreferencesQueryKey: () => readonly ["/api/v1/alert-preferences"];
export declare const getGetAlertPreferencesQueryOptions: <TData = Awaited<ReturnType<typeof getAlertPreferences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAlertPreferences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAlertPreferences>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAlertPreferencesQueryResult = NonNullable<Awaited<ReturnType<typeof getAlertPreferences>>>;
export type GetAlertPreferencesQueryError = ErrorType<unknown>;
/**
 * @summary List alert preferences for the session user
 */
export declare function useGetAlertPreferences<TData = Awaited<ReturnType<typeof getAlertPreferences>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAlertPreferences>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateAlertPreferenceUrl: () => string;
/**
 * @summary Enable or disable one alert type
 */
export declare const updateAlertPreference: (alertPreferenceUpdate: AlertPreferenceUpdate, options?: Parameters<typeof customFetch>[1]) => Promise<AlertPreferencesResponse>;
export declare const getUpdateAlertPreferenceMutationKey: () => readonly ["updateAlertPreference"];
export declare const getUpdateAlertPreferenceMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAlertPreference>>, TError, UpdateAlertPreferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAlertPreference>>, TError, UpdateAlertPreferenceMutationVariables, TContext>;
export type UpdateAlertPreferenceMutationResult = NonNullable<Awaited<ReturnType<typeof updateAlertPreference>>>;
export type UpdateAlertPreferenceMutationBody = BodyType<AlertPreferenceUpdate>;
export type UpdateAlertPreferenceMutationError = ErrorType<unknown>;
export type UpdateAlertPreferenceMutationVariables = {
    data: BodyType<AlertPreferenceUpdate>;
};
/**
* @summary Enable or disable one alert type
*/
export declare const useUpdateAlertPreference: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAlertPreference>>, TError, UpdateAlertPreferenceMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAlertPreference>>, TError, UpdateAlertPreferenceMutationVariables, TContext>;
export declare const getGetLatestWeeklySummaryUrl: () => string;
/**
 * @summary Get the latest weekly summary for the session user
 */
export declare const getLatestWeeklySummary: (options?: Parameters<typeof customFetch>[1]) => Promise<WeeklySummaryResponse>;
export declare const getGetLatestWeeklySummaryQueryKey: () => readonly ["/api/v1/summaries/weekly/latest"];
export declare const getGetLatestWeeklySummaryQueryOptions: <TData = Awaited<ReturnType<typeof getLatestWeeklySummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLatestWeeklySummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLatestWeeklySummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLatestWeeklySummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getLatestWeeklySummary>>>;
export type GetLatestWeeklySummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get the latest weekly summary for the session user
 */
export declare function useGetLatestWeeklySummary<TData = Awaited<ReturnType<typeof getLatestWeeklySummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLatestWeeklySummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetAssistantUsageUrl: () => string;
/**
 * @summary Get the session user's monthly assistant usage
 */
export declare const getAssistantUsage: (options?: Parameters<typeof customFetch>[1]) => Promise<AssistantUsageResponse>;
export declare const getGetAssistantUsageQueryKey: () => readonly ["/api/v1/assistant/usage"];
export declare const getGetAssistantUsageQueryOptions: <TData = Awaited<ReturnType<typeof getAssistantUsage>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssistantUsage>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAssistantUsage>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAssistantUsageQueryResult = NonNullable<Awaited<ReturnType<typeof getAssistantUsage>>>;
export type GetAssistantUsageQueryError = ErrorType<unknown>;
/**
 * @summary Get the session user's monthly assistant usage
 */
export declare function useGetAssistantUsage<TData = Awaited<ReturnType<typeof getAssistantUsage>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAssistantUsage>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetLatestAssistantConversationUrl: () => string;
/**
 * @summary Get the latest assistant conversation for the session user
 */
export declare const getLatestAssistantConversation: (options?: Parameters<typeof customFetch>[1]) => Promise<AssistantConversationResponse>;
export declare const getGetLatestAssistantConversationQueryKey: () => readonly ["/api/v1/assistant/conversations/latest"];
export declare const getGetLatestAssistantConversationQueryOptions: <TData = Awaited<ReturnType<typeof getLatestAssistantConversation>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLatestAssistantConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLatestAssistantConversation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLatestAssistantConversationQueryResult = NonNullable<Awaited<ReturnType<typeof getLatestAssistantConversation>>>;
export type GetLatestAssistantConversationQueryError = ErrorType<unknown>;
/**
 * @summary Get the latest assistant conversation for the session user
 */
export declare function useGetLatestAssistantConversation<TData = Awaited<ReturnType<typeof getLatestAssistantConversation>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLatestAssistantConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendAssistantMessageUrl: () => string;
/**
 * @summary Send a question to the finance assistant
 */
export declare const sendAssistantMessage: (assistantMessageInput: AssistantMessageInput, options?: Parameters<typeof customFetch>[1]) => Promise<AssistantMessageResponse>;
export declare const getSendAssistantMessageMutationKey: () => readonly ["sendAssistantMessage"];
export declare const getSendAssistantMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendAssistantMessage>>, TError, SendAssistantMessageMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendAssistantMessage>>, TError, SendAssistantMessageMutationVariables, TContext>;
export type SendAssistantMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendAssistantMessage>>>;
export type SendAssistantMessageMutationBody = BodyType<AssistantMessageInput>;
export type SendAssistantMessageMutationError = ErrorType<unknown>;
export type SendAssistantMessageMutationVariables = {
    data: BodyType<AssistantMessageInput>;
};
/**
* @summary Send a question to the finance assistant
*/
export declare const useSendAssistantMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendAssistantMessage>>, TError, SendAssistantMessageMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendAssistantMessage>>, TError, SendAssistantMessageMutationVariables, TContext>;
export declare const getSubmitAssistantMessageFeedbackUrl: (id: string) => string;
/**
 * @summary Save feedback for an assistant response
 */
export declare const submitAssistantMessageFeedback: (id: string, assistantMessageFeedbackInput: AssistantMessageFeedbackInput, options?: Parameters<typeof customFetch>[1]) => Promise<AssistantMessageFeedbackResponse>;
export declare const getSubmitAssistantMessageFeedbackMutationKey: () => readonly ["submitAssistantMessageFeedback"];
export declare const getSubmitAssistantMessageFeedbackMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitAssistantMessageFeedback>>, TError, SubmitAssistantMessageFeedbackMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitAssistantMessageFeedback>>, TError, SubmitAssistantMessageFeedbackMutationVariables, TContext>;
export type SubmitAssistantMessageFeedbackMutationResult = NonNullable<Awaited<ReturnType<typeof submitAssistantMessageFeedback>>>;
export type SubmitAssistantMessageFeedbackMutationBody = BodyType<AssistantMessageFeedbackInput>;
export type SubmitAssistantMessageFeedbackMutationError = ErrorType<unknown>;
export type SubmitAssistantMessageFeedbackMutationVariables = {
    id: string;
    data: BodyType<AssistantMessageFeedbackInput>;
};
/**
* @summary Save feedback for an assistant response
*/
export declare const useSubmitAssistantMessageFeedback: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitAssistantMessageFeedback>>, TError, SubmitAssistantMessageFeedbackMutationVariables, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitAssistantMessageFeedback>>, TError, SubmitAssistantMessageFeedbackMutationVariables, TContext>;
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map