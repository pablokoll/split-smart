import type { Routes } from "@angular/router";
import { ExpenseComponent } from "./expenses/expense/expense.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: ":expenseSlug", component: ExpenseComponent },
];
