import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  status = false;
  menuItems: MenuItem[] = [
    { heading: true, text: 'Menu'},
    { icon: 'bx bxs-dashboard', text: 'Overview' },
    { icon: 'bx bxs-shopping-bag-alt', text: 'Transactions' },
    { icon: 'bx bxs-doughnut-chart', text: 'Analytics' },
    { icon: 'bx bxs-message-dots', text: 'Cards' },

    { heading: true, text: 'General', line: true },
    { icon: 'bx bxs-dashboard', text: 'Settings' },
    { icon: 'bx bxs-shopping-bag-alt', text: 'Help/Support' },
    { icon: 'bx bxs-doughnut-chart', text: 'Dark Mode' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addToggle() {
    this.status = !this.status;
  }

}

interface MenuItem {
  heading?: boolean;
  icon?: string;
  text: string;
  line?: boolean;
}