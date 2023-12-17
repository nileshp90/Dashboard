import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/Interfaces/feature-interfaces';
import { FeaturesServiceService } from 'src/app/services/features-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance: Balance | undefined;

  constructor(private featuresServiceService: FeaturesServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.featuresServiceService.getBalance().subscribe(
      (data: Balance) => {
        this.balance = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}