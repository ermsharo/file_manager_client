import { useState } from 'react';

function SearchBox() {
	const [ search, setSearch ] = useState('');

	const handleInputUser = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('value', e.target.value);
		setSearch(e.target.value);
		console.log('busca', search);
	};

	return (
		<div className="card">
			<div className="search-box">
				<input
					onChange={handleInputUser}
					type="text"
					className="input"
					placeholder="Coloque aqui o nome do arquivo"
					value={search}
				/>
				<button
					onClick={() => {
						console.log('Clicamos para fazer a busca');
					}}
				>
					Buscar
				</button>
			</div>
		</div>
	);
}

export default SearchBox;
