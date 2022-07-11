import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
};

export type Author = Node & {
	__typename?: 'Author';
	id: Scalars['ID'];
	/** The name of the author. */
	name: Scalars['String'];
	/** The author's posts. */
	posts?: Maybe<Array<Maybe<Post>>>;
};

/** Any object implementing this type can be found by ID through `Query.node`. */
export type Node = {
	/** Global identifier that can be used to resolve any Node implementation. */
	id: Scalars['ID'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
	/** The column that is used for ordering. */
	column: Scalars['String'];
	/** The direction that is used for ordering. */
	order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
	/** Amount of items. */
	Count = 'COUNT',
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
	/** Average. */
	Avg = 'AVG',
	/** Amount of items. */
	Count = 'COUNT',
	/** Maximum. */
	Max = 'MAX',
	/** Minimum. */
	Min = 'MIN',
	/** Sum. */
	Sum = 'SUM',
}

export type Page = Node & {
	__typename?: 'Page';
	/** The body of the post. */
	body: Scalars['String'];
	id: Scalars['ID'];
	/** The image of the post. */
	image?: Maybe<Scalars['String']>;
	/** The views of the posts */
	summary?: Maybe<Scalars['String']>;
	/** The title of the post. */
	title: Scalars['String'];
};

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
	__typename?: 'PageInfo';
	/** Number of nodes in the current page. */
	count: Scalars['Int'];
	/** Index of the current page. */
	currentPage: Scalars['Int'];
	/** The cursor to continue paginating forwards. */
	endCursor?: Maybe<Scalars['String']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean'];
	/** Index of the last available page. */
	lastPage: Scalars['Int'];
	/** The cursor to continue paginating backwards. */
	startCursor?: Maybe<Scalars['String']>;
	/** Total number of nodes in the paginated connection. */
	total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
	__typename?: 'PaginatorInfo';
	/** Number of items in the current page. */
	count: Scalars['Int'];
	/** Index of the current page. */
	currentPage: Scalars['Int'];
	/** Index of the first item in the current page. */
	firstItem?: Maybe<Scalars['Int']>;
	/** Are there more pages after this one? */
	hasMorePages: Scalars['Boolean'];
	/** Index of the last item in the current page. */
	lastItem?: Maybe<Scalars['Int']>;
	/** Index of the last available page. */
	lastPage: Scalars['Int'];
	/** Number of items per page. */
	perPage: Scalars['Int'];
	/** Number of total available items. */
	total: Scalars['Int'];
};

export type Post = Node & {
	__typename?: 'Post';
	/** The author of the post. */
	author: Author;
	/** The body of the post. */
	body: Scalars['String'];
	id: Scalars['ID'];
	/** The image of the post. */
	image?: Maybe<Scalars['String']>;
	/** The published date and time. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** The title of the post. */
	title: Scalars['String'];
	/** The views of the posts */
	views: Scalars['Int'];
};

/** A paginated list of Post items. */
export type PostPaginator = {
	__typename?: 'PostPaginator';
	/** A list of Post items. */
	data: Array<Post>;
	/** Pagination information about the list of items. */
	paginatorInfo: PaginatorInfo;
};

export type Query = {
	__typename?: 'Query';
	/** Get recent page. */
	latestPage?: Maybe<Page>;
	/** Get recent Post. */
	latestPost?: Maybe<Post>;
	node?: Maybe<Node>;
	/** Most read Post */
	popularPost?: Maybe<Post>;
	/** Fetch all posts. */
	posts?: Maybe<PostPaginator>;
};

export type QueryNodeArgs = {
	id: Scalars['ID'];
};

export type QueryPostsArgs = {
	first?: InputMaybe<Scalars['Int']>;
	page?: InputMaybe<Scalars['Int']>;
};

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
	__typename?: 'SimplePaginatorInfo';
	/** Number of items in the current page. */
	count: Scalars['Int'];
	/** Index of the current page. */
	currentPage: Scalars['Int'];
	/** Index of the first item in the current page. */
	firstItem?: Maybe<Scalars['Int']>;
	/** Are there more pages after this one? */
	hasMorePages: Scalars['Boolean'];
	/** Index of the last item in the current page. */
	lastItem?: Maybe<Scalars['Int']>;
	/** Number of items per page. */
	perPage: Scalars['Int'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
	/** Sort records in ascending order. */
	Asc = 'ASC',
	/** Sort records in descending order. */
	Desc = 'DESC',
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
	/** Only return trashed results. */
	Only = 'ONLY',
	/** Return both trashed and non-trashed results. */
	With = 'WITH',
	/** Only return non-trashed results. */
	Without = 'WITHOUT',
}

export type FetchHomePageItemsQueryVariables = Exact<{
	first?: InputMaybe<Scalars['Int']>;
}>;

export type FetchHomePageItemsQuery = {
	__typename?: 'Query';
	posts?: {
		__typename?: 'PostPaginator';
		data: Array<{
			__typename?: 'Post';
			id: string;
			image?: string | null;
			title: string;
		}>;
	} | null;
	latestPost?: {
		__typename?: 'Post';
		id: string;
		title: string;
		image?: string | null;
		author: { __typename?: 'Author'; id: string; name: string };
	} | null;
	popularPost?: { __typename?: 'Post'; id: string; title: string } | null;
	latestPage?: {
		__typename?: 'Page';
		id: string;
		summary?: string | null;
		title: string;
		image?: string | null;
	} | null;
};

export type FetchPostQueryVariables = Exact<{
	id: Scalars['ID'];
}>;

export type FetchPostQuery = {
	__typename?: 'Query';
	node?:
		| { __typename?: 'Author' }
		| { __typename?: 'Page' }
		| {
				__typename?: 'Post';
				id: string;
				body: string;
				title: string;
				publishedAt?: any | null;
				author: { __typename?: 'Author'; id: string; name: string };
		  }
		| null;
};

export const FetchHomePageItemsDocument = gql`
	query FetchHomePageItems($first: Int = 5) {
		posts(first: $first) {
			data {
				id
				image
				title
			}
		}
		latestPost {
			id
			title
			image
			author {
				id
				name
			}
		}
		popularPost {
			id
			title
		}
		latestPage {
			id
			summary
			title
			image
		}
	}
`;

/**
 * __useFetchHomePageItemsQuery__
 *
 * To run a query within a React component, call `useFetchHomePageItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchHomePageItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchHomePageItemsQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFetchHomePageItemsQuery(
	baseOptions?: Apollo.QueryHookOptions<
		FetchHomePageItemsQuery,
		FetchHomePageItemsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<
		FetchHomePageItemsQuery,
		FetchHomePageItemsQueryVariables
	>(FetchHomePageItemsDocument, options);
}
export function useFetchHomePageItemsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		FetchHomePageItemsQuery,
		FetchHomePageItemsQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<
		FetchHomePageItemsQuery,
		FetchHomePageItemsQueryVariables
	>(FetchHomePageItemsDocument, options);
}
export type FetchHomePageItemsQueryHookResult = ReturnType<
	typeof useFetchHomePageItemsQuery
>;
export type FetchHomePageItemsLazyQueryHookResult = ReturnType<
	typeof useFetchHomePageItemsLazyQuery
>;
export type FetchHomePageItemsQueryResult = Apollo.QueryResult<
	FetchHomePageItemsQuery,
	FetchHomePageItemsQueryVariables
>;
export const FetchPostDocument = gql`
	query FetchPost($id: ID!) {
		node(id: $id) {
			... on Post {
				id
				body
				title
				publishedAt
				author {
					id
					name
				}
			}
		}
	}
`;

/**
 * __useFetchPostQuery__
 *
 * To run a query within a React component, call `useFetchPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchPostQuery(
	baseOptions: Apollo.QueryHookOptions<FetchPostQuery, FetchPostQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FetchPostQuery, FetchPostQueryVariables>(
		FetchPostDocument,
		options
	);
}
export function useFetchPostLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		FetchPostQuery,
		FetchPostQueryVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FetchPostQuery, FetchPostQueryVariables>(
		FetchPostDocument,
		options
	);
}
export type FetchPostQueryHookResult = ReturnType<typeof useFetchPostQuery>;
export type FetchPostLazyQueryHookResult = ReturnType<
	typeof useFetchPostLazyQuery
>;
export type FetchPostQueryResult = Apollo.QueryResult<
	FetchPostQuery,
	FetchPostQueryVariables
>;
