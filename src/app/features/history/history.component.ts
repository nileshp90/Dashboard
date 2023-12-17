import { Component, OnInit } from '@angular/core';
import { ApiResponse, Transaction } from 'src/app/Interfaces/feature-interfaces';
import { FeaturesServiceService } from 'src/app/services/features-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  tableHeaders: any[] = ['Date', 'Name', 'Status', 'Type', 'Time', 'Amount', 'Action'];
  searchText = '';
  selectedTransaction: any;
  tableData: Transaction[] | undefined;
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private featuresServiceService: FeaturesServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.featuresServiceService.fetchData().subscribe(
      (data) => {
        this.tableData = data?.transactions;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  openModal(transaction: any): void {
    this.selectedTransaction = transaction;
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
    const totalItems = this.tableData?.length || 0;
    return Math.ceil(totalItems / this.itemsPerPage);
  }

}