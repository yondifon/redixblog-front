import Link from 'next/link';

export default function Home() {
	return (
		<div className='p-16 space-y-3'>
			<h1 className='text-xl font-semibold'>Tasks</h1>
			<ul className='list-disc ml-5'>
				<li>
					<Link href='/task-1'>Task 1</Link>
				</li>
				<li>
					<Link href='task-2'>Task 2</Link>
				</li>
			</ul>
		</div>
	);
}
