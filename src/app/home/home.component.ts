import { Component } from "@angular/core";
import { ExpensesListComponent } from "../expenses/expenses-list/expenses-list.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [ExpensesListComponent],
	templateUrl: "./home.component.html",
})
export class HomeComponent {
  
}
