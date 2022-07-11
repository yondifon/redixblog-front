import Link from 'next/link';

const Post = ({ post, className, ...attributes }) => {
	return (
		<div {...attributes} className={`bg-gray-100 ${className}`}>
			<Link href={`/${post.id}`}>
				<a>
					<img src={post.image} alt={post.title} />
				</a>
			</Link>
			<div className='px-2 py-4'>
				<h1 className='font-semibold text-2xl'>{post.title}</h1>
				<Link href={`/${post.id}`}>
					<a className='text-sm text-blue-700 underline'>Read More...</a>
				</Link>
			</div>
		</div>
	);
};

export default Post;
