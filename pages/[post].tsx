import Link from 'next/link';
import client from '../src/client';
import { FetchPostDocument } from '../src/generated/graphql';

export async function getServerSideProps({ query }) {
	const { data } = await client.query({
		query: FetchPostDocument,
		variables: { id: query.post },
	});

	return { props: { post: data.node } };
}

export default function Post({ post }) {
	return (
		<div className='container max-w-3xl space-y-4 py-8'>
			<header className='space-y-2'>
				<nav>
					<Link href='/task-1'>
						<a>Home</a>
					</Link>
				</nav>
				<h1 className='text-4xl'>{post.title}</h1>
			</header>

			<main>
				<div dangerouslySetInnerHTML={{ __html: post.body }}></div>
			</main>

			<footer className='text-sm italic'>
				Author <br /> {post.author.name}
			</footer>
		</div>
	);
}
