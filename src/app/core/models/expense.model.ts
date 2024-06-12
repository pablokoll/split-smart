import type { Participant } from "./participant.model";

export interface Expense {
	description?: string;
	amount: number;
	participants: Participant[];
}
