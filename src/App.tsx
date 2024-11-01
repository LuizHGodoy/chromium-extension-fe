import type React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import ReminderList from "./components/ReminderList";

const App: React.FC = () => {
	return (
		<div className="App">
			<h1>Lembretes e Notas Rápidas</h1>
			<NoteForm />
			<NoteList />
			<ReminderList />
		</div>
	);
};

export default App;
