import { Expense } from "./expense.model";
import { Participant } from "./participant.model";

export interface ExpensesList {
	title: string;
	totalAmount: number;
	description?: string;
	expenses: Expense[];
	participants: Participant[];
}
