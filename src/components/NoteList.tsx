// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useState } from "react";
import { getNotes } from "../utils/storageUtils";

const NoteList: React.FC = () => {
	const [notes, setNotes] = useState<string[]>([]);

	const fetchNotes = async () => {
		const storedNotes = await getNotes();
		setNotes(storedNotes);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchNotes();
		const interval = setInterval(fetchNotes, 5000); // Atualiza a cada 5 segundos
		return () => clearInterval(interval); // Limpa o intervalo ao desmontar
	}, []);

	return (
		<div>
			<h2>Notas</h2>
			<ul>
				{notes.map((note) => (
					<li key={note}>{note}</li>
				))}
			</ul>
		</div>
	);
};

export default NoteList;
