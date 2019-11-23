import { Address, CompanyType } from "@core/models";

export interface Company {
  name: string;
  logo: string;
  address: Address;
  type: CompanyType;
}
