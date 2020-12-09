import {BasicTableFetchResult} from "/@/api/logic/baseModel";

interface DriverClient {
  name?: string,
  username?: string,
  telegram_id: number,
}

interface DriverSalary {
  display_value: string,
}

export interface DriverTableItem {
  id: number;
  name: string;
  client?: DriverClient;
  salary?: DriverSalary;
  unpaid_salary: string;
  created_at: string;
}

export interface DriverFetchResult<T extends DriverTableItem> extends BasicTableFetchResult<T> {
}
