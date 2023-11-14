import { useState } from 'react';
import File from './file';
import { GetData } from '../requests/requests';

function FileGalery() {
	const [ search, setSearch ] = useState('');


    let url = "http://127.0.0.1:5000/file_list"
    const { data: fileData, isLoading: fileIsLoading, error: fileError, refetchData: fileRefetchData } = GetData({
		url: url
	});

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




    if(fileIsLoading) return(<div>Loading</div>)

    if(fileError) return(<div>Error</div>)

    if(fileData){
    
        return (
		<div className="file-galery">
			{fileData.file_records.map((file: any) => (
				<div>
					<File name={file.name} />
				</div>
			))}
		</div>
	);
            }
}

export default FileGalery;
