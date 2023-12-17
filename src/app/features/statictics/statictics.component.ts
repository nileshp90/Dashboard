import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MoneyStatistics } from 'src/app/Interfaces/feature-interfaces';
import { FeaturesServiceService } from 'src/app/services/features-service.service';

@Component({
  selector: 'app-statictics',
  templateUrl: './statictics.component.html',
  styleUrls: ['./statictics.component.scss']
})
export class StaticticsComponent implements OnInit {
  moneyStatistics: MoneyStatistics | undefined;

  constructor(private featuresServiceService: FeaturesServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.featuresServiceService.fetchData().subscribe(
      (data) => {
        this.moneyStatistics = data?.money_statistics;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
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
          name: 'Investment', color: '#00134d8a',
          data: [
            { name: 'Jan', y: 51086, color: '#00134d8a' },
            { name: 'Feb', y: 136000, color: '#00134d8a' },
            { name: 'Mar', y: 320000, color: '#00134d8a' },
            { name: 'Apr', y: 141000, color: '#00134d8a' },
            { name: 'Mei', y: 107180, color: '#00134d8a' },
            { name: 'Jun', y: 77000, color: '#00134d8a' },
            { name: 'Jul', y: 406292, color: '#00134d8a' },
            { name: 'Aug', y: 360000, color: '#00134d8a' },
            { name: 'Sep', y: 107000, color: '#00134d8a' },
            { name: 'Oct', y: 68300, color: '#00134d8a' },
            { name: 'Nov', y: 27500, color: '#00134d8a' },
            { name: 'Dec', y: 14500, color: '#00134d8a' }
          ]
        },
        {
          name: 'Expense', color: '#00134d',
          data: [
            { name: 'Jan', y: 51086, color: '#00134d' },
            { name: 'Feb', y: 136000, color: '#00134d' },
            { name: 'Mar', y: 55000, color: '#00134d' },
            { name: 'Apr', y: 141000, color: '#00134d' },
            { name: 'Mei', y: 107180, color: '#00134d' },
            { name: 'Jun', y: 77000, color: '#00134d' },
            { name: 'Jul', y: 206292, color: '#00134d' },
            { name: 'Aug', y: 160000, color: '#00134d' },
            { name: 'Sep', y: 307000, color: '#00134d' },
            { name: 'Oct', y: 28300, color: '#00134d' },
            { name: 'Nov', y: 27500, color: '#00134d' },
            { name: 'Dec', y: 14500, color: '#00134d' }
          ]
        }
      ]
    };

    Highcharts.chart('container', chartOptions);
  }

}