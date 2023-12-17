export interface ApiResponse {
  transactions: Transaction[];
  money_statistics: MoneyStatistics;
  balance: Balance;
}

export interface MoneyStatistics {
  total_income: any;
  total_expense: any;
  total_investment: any;
}

export interface Transaction {
  date: Date;
  name: string;
  status: string;
  type: string;
  amount: any;
}

export interface Balance {
  total_balance: any;
  payment_done_percentage: any;
  payment_done_so_far: any;
  monthly_payment_limit: any;
}