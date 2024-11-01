import type React from "react";
import { useState } from "react";
import { saveNote, saveReminder } from "../utils/storageUtils";

const NoteForm: React.FC = () => {
	const [note, setNote] = useState("");
	const [reminderName, setReminderName] = useState("");
	const [reminderTime, setReminderTime] = useState("");

	const handleNoteSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		saveNote(note);
		setNote("");
	};

	const handleReminderSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		saveReminder(reminderName, reminderTime);
		setReminderName("");
		setReminderTime("");
	};

	return (
		<div>
			<form onSubmit={handleNoteSubmit}>
				<input
					type="text"
					value={note}
					onChange={(e) => setNote(e.target.value)}
					placeholder="Nova nota"
				/>
				<button type="submit">Adicionar Nota</button>
			</form>
			<form onSubmit={handleReminderSubmit}>
				<input
					type="text"
					value={reminderName}
					onChange={(e) => setReminderName(e.target.value)}
					placeholder="Nome do lembrete"
				/>
				<input
					type="datetime-local"
					value={reminderTime}
					onChange={(e) => setReminderTime(e.target.value)}
				/>
				<button type="submit">Adicionar Lembrete</button>
			</form>
		</div>
	);
};

export default NoteForm;
