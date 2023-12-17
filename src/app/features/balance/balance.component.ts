import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/Interfaces/feature-interfaces';
import { FeaturesServiceService } from 'src/app/services/features-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  apiRes: ApiResponse | undefined;

  constructor(private featuresServiceService: FeaturesServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.featuresServiceService.fetchData().subscribe(
      (data) => {
        this.apiRes = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}