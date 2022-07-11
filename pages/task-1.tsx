import Link from 'next/link';

import Post from '../components/post';
import client from '../src/client';
import {
	FetchHomePageItemsDocument,
	FetchHomePageItemsQuery,
} from '../src/generated/graphql';

export async function getServerSideProps() {
	const { data } = await client.query({ query: FetchHomePageItemsDocument });

	return { props: data };
}

export default function Task1({
	posts,
	popularPost,
	latestPost,
	latestPage,
}: FetchHomePageItemsQuery) {
	return (
		<div className='px-12 py-5'>
			<div className='grid gap-4 grid-cols-1 md:grid-cols-9'>
				{/* latesPost */}
				<div
					className='md:col-span-3 md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-4 p-6 bg-center-right'
					style={{
						backgroundImage: `url(${latestPost.image})`,
						backgroundPosition: '43% 29%',
						height: 438,
					}}
				>
					<div className='h-full flex flex-col justify-between'>
						<h2 className='text-3xl font-semibold underline'>Newest Post</h2>
						<div className='text-white'>
							<Link href={`/${latestPost.id}`}>
								<a className='md:text-3xl'>
									<h1>{latestPost.title}</h1>
								</a>
							</Link>
							<Link href={`/author/${latestPost.author.id}`}>
								<a className='text-sm'>{latestPost.author.name}</a>
							</Link>
						</div>
					</div>
				</div>
				{/* end latest posts */}

				{/* Popular Post */}
				<div className='md:col-span-2 bg-blue-300 md:row-start-1 md:row-end-1 md:col-start-8 md:col-end-10 '>
					<div className='py-4 h-full my-auto flex flex-col justify-center text-center'>
						<h1 className='text-2xl'>Most Read Post:</h1>
						<h1 className='text-3xl my-4'>{popularPost.title}</h1>
						<Link href={`/${popularPost.id}`}>
							<a className=''>Read more</a>
						</Link>
					</div>
				</div>
				{/* end Popular post */}

				<div
					className='md:col-span-3 md:row-start-2 md:row-end-2 md:col-start-1 md:col-end-4 '
					style={{
						backgroundImage: `url(${latestPage.image})`,
						backgroundPosition: '90% 50%',
						height: 438,
					}}
				>
					<div className='h-full text-white text-center flex flex-col pt-10 p-4'>
						<h1 className='font-semibold'>{latestPage.title}</h1>
						<p className='py-4 my-6 text-sm'>{latestPage.summary}</p>

						<footer>
							<Link href={`/${latestPage.id}`}>
								<a className='py-2 no-underline px-10 border-4 border-white'>
									Read more
								</a>
							</Link>
						</footer>
					</div>
				</div>

				{posts.data.map((post) => (
					<Post key={post.id} className='md:col-span-2' post={post}></Post>
				))}
			</div>
		</div>
	);
}
