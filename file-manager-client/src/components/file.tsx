import { useState } from 'react';

function File({ name }: { name: string }) {
	const [ count, setCount ] = useState(0);

	const downloadFile = (name: string) => {
		// Replace 'yourfile.pdf' with the actual filename and path of the file you want to download.
		const fileUrl = `http://127.0.0.1:5000/download/${name}`;

		// Create an anchor element to trigger the download.
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = name; // Specify the filename for the downloaded file.

		// Trigger a click event on the anchor element to start the download.
		link.click();
	};

	return (
		<div
			className="file-box"
			onClick={() => {
				downloadFile(name);
			}}
		>
			<img src="https://www.shareicon.net/data/2016/07/03/636103_file_512x512.png" className="file-image" />
			{name}
		</div>
	);
}

export default File;
