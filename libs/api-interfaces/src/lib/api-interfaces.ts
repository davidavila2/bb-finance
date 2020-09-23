export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface Client extends BaseEntity {
  name: string;
  profile: string;
  type: any;
}

export interface DailyHourlyLog extends BaseEntity {
  resourceId: any;
  date: string;
  hours: number;
  ptoHours: number;
  holidayHours: number;
  capacityHours: number;
}

export interface Holiday extends BaseEntity {
  year: number;
  date: string;
  name: string;
}

export interface Project extends BaseEntity {
  clientId: string;
  startDate: string;
  endDate: string;
  status: any;
  notes: string;
  netTermDays: string;
  billingCycle: any;
  contractLengthWeeks: string;
  contractLengthHours: string;
  projectDiscount: string;
  jobCode: string;
}

export interface ProjectResource extends BaseEntity {
  projectId: string;
  resourceId: string;
  resourceLevel: any;
  resourceType: any;
  executionType: any;
  startDate: string;
  endDate: string;
  internalRate: string;
  billableRate: string;
  notes: string;
}

export interface PtoRequest extends BaseEntity {
  resourceId: any;
  date: string;
  hours: number;
}

export interface Resource extends BaseEntity {
  firstName: string;
  lastName: string;
  firstNameAlias: string;
  status: any;
}

export interface ResourceRate extends BaseEntity {
  resourceLevel: any;
  resourceType: any;
  internalRate: string;
  salary: string;
  status: any;
  startDate: string;
  endDate: string;
}

export interface TsheetsExtract extends BaseEntity {
  localDate: string;
  hours: string;
  billable: undefined;
  jobCode: number;
}
