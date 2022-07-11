export default function Icon({ name, size = null }) {
	return (
		<i
			dangerouslySetInnerHTML={{
				__html: `<ion-icon name='${name}' size='${size || ''}'/>`,
			}}
		></i>
	);
}
