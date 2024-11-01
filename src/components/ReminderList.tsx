import type React from "react";
import { useEffect, useState } from "react";
import { getReminders } from "../utils/storageUtils";

const ReminderList: React.FC = () => {
	const [reminders, setReminders] = useState<{ name: string; time: string }[]>(
		[],
	);

	useEffect(() => {
		const fetchReminders = async () => {
			const storedReminders = await getReminders();
			setReminders(storedReminders);
		};
		fetchReminders();
	}, []);

	return (
		<div>
			<h2>Lembretes</h2>
			<ul>
				{reminders.map((reminder) => (
					<li key={reminder.name}>{`${reminder.name} - ${reminder.time}`}</li>
				))}
			</ul>
		</div>
	);
};

export default ReminderList;
