import { useState } from 'react';
import File from './file';

function FileGalery() {
	const [ search, setSearch ] = useState('');

	const handleInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('value', e.target.value);
		setSearch(e.target.value);
		console.log('busca', search);
	};

	const fileNames = [
		'document.txt',
		'image.jpg',
		'presentation.ppt',
		'spreadsheet.xlsx',
		'code.js',
		'video.mp4',
		'music.mp3',
		'archive.zip',
		'data.csv',
		'report.pdf'
	];

	//Precisamos de
	//Icone arquivo
	//Nome arquivo
	//Tags...
	//Link do arquivo

	return (
		<div className="file-galery">
			{fileNames.map((file) => (
				<div>
					<File name={file} />
				</div>
			))}
		</div>
	);
}

export default FileGalery;
