import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statictics',
  templateUrl: './statictics.component.html',
  styleUrls: ['./statictics.component.scss']
})
export class StaticticsComponent implements OnInit {
  apiRes: ApiResponse | undefined;
  tableData: Transaction[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.fetchDataFromAPI();
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