import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  tableHeaders: any[] = ['Date', 'Name', 'Status', 'Type', 'Time', 'Amount', 'Action'];
  searchText = '';
  selectedTransaction: any;
  apiRes: ApiResponse | undefined;
  tableData: Transaction[] | undefined;
  currentPage = 1;
  itemsPerPage = 5;

  constructor() { }

  ngOnInit(): void {
    this.fetchDataFromAPI();
  }
  openModal(transaction: any): void {
    this.selectedTransaction = transaction;
  }

  fetchDataFromAPI() {
    // Simulate an API call
    fetch('https://1.api.fy23ey06.careers.ifelsecloud.com/')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response contains progress information (percentage)
        this.apiRes = data;
        this.tableData = data?.transactions;
        console.log(this.apiRes);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  getFilteredTableData(): Transaction[] {
    const searchTextLowerCase = this.searchText.toLowerCase();
    
    return (this.tableData || []).filter(transaction =>
      Object.values(transaction).some(value =>
        value.toString().toLowerCase().includes(searchTextLowerCase)
      )
    );
  }
  getPages(): number[] {
    const totalPages = this.getTotalPages();
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
 
  getTotalPages(): number {
    const totalItems = this.apiRes?.transactions.length || 0;
    return Math.ceil(totalItems / this.itemsPerPage);
  }
}

interface ApiResponse {
  transactions: Transaction[];
  money_statistics: MoneyStatistics;
  balance:Balance;
  // Other properties...
}

interface MoneyStatistics {
  total_income: any;
  total_expense: any;
  total_investment: any;
}
interface Transaction {
  date: Date;
  name: string;
  status: string;
  type: string;
  amount: any;
}
interface Balance {
  total_balance: any;
  payment_done_percentage: any;
  payment_done_so_far: any;
  monthly_payment_limit: any;
}