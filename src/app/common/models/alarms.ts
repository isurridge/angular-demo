export interface IAlarm {
  id?: number;
  siteAddress?: string;
  state?: string;
  alarmCount?: number;
  alarmDetail?: string;
  recommendation?: string;
  actionType?: string;
  explanation?: string;
  workOrderNumber?: string;
  active?: boolean
}
