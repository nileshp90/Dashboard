import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  apiRes: ApiResponse | undefined;
  tableData: Transaction[] | undefined;

  constructor() {
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



  ngAfterViewInit() {
    this.charts();
  }

  charts() {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column'
      },
      // title: {
      //     text: 'Income vs Investment estimated production for 2020',
      //     align: 'left'
      // },
      // subtitle: {
      //     text:
      //         'Source: <a target="_blank" ' +
      //         'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      //     align: 'left'
      // },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
        crosshair: true,
        accessibility: {
          description: 'Countries'
        }
      },
      // yAxis: {
      //     min: 0,
      //     title: {
      //         text: '1000 metric tons (MT)'
      //     }
      // },
      tooltip: {
        valueSuffix: ' (1000 MT)'
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        }
      },
      series: <Highcharts.SeriesOptionsType[]>[
        {
          name: 'Income', color: '#0000004a',
          data: [
            { name: 'Jan', y: 406292, color: '#0000004a' },
            { name: 'Feb', y: 260000, color: '#0000004a' },
            { name: 'Mar', y: 107000, color: '#0000004a' },
            { name: 'Apr', y: 68300, color: '#0000004a' },
            { name: 'Mei', y: 27500, color: '#0000004a' },
            { name: 'Jun', y: 14500, color: '#0000004a' },
            { name: 'Jul', y: 206292, color: '#0000004a' },
            { name: 'Aug', y: 200000, color: '#0000004a' },
            { name: 'Sep', y: 207000, color: '#0000004a' },
            { name: 'Oct', y: 608300, color: '#0000004a' },
            { name: 'Nov', y: 97500, color: '#0000004a' },
            { name: 'Dec', y: 114500, color: '#0000004a' }
          ]
        },
        {
          name: 'Investment', color: '#00000085',
          data: [
            { name: 'Jan', y: 51086, color: '#00000085' },
            { name: 'Feb', y: 136000, color: '#00000085' },
            { name: 'Mar', y: 320000, color: '#00000085' },
            { name: 'Apr', y: 141000, color: '#00000085' },
            { name: 'Mei', y: 107180, color: '#00000085' },
            { name: 'Jun', y: 77000, color: '#00000085' },
            { name: 'Jul', y: 406292, color: '#00000085' },
            { name: 'Aug', y: 360000, color: '#00000085' },
            { name: 'Sep', y: 107000, color: '#00000085' },
            { name: 'Oct', y: 68300, color: '#00000085' },
            { name: 'Nov', y: 27500, color: '#00000085' },
            { name: 'Dec', y: 14500, color: '#00000085' }
          ]
        },
        {
          name: 'Expense', color: '#000000bd',
          data: [
            { name: 'Jan', y: 51086, color: '#000000bd' },
            { name: 'Feb', y: 136000, color: '#000000bd' },
            { name: 'Mar', y: 55000, color: '#000000bd' },
            { name: 'Apr', y: 141000, color: '#000000bd' },
            { name: 'Mei', y: 107180, color: '#000000bd' },
            { name: 'Jun', y: 77000, color: '#000000bd' },
            { name: 'Jul', y: 206292, color: '#000000bd' },
            { name: 'Aug', y: 160000, color: '#000000bd' },
            { name: 'Sep', y: 307000, color: '#000000bd' },
            { name: 'Oct', y: 28300, color: '#000000bd' },
            { name: 'Nov', y: 27500, color: '#000000bd' },
            { name: 'Dec', y: 14500, color: '#000000bd' }
          ]
        }
      ]
    };

    Highcharts.chart('container', chartOptions);
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
