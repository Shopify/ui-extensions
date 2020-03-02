export type BadgeStatus = 'default' | 'success' | 'info' | 'attention' | 'warning' | 'new';

export interface Badge {
  message: string;
  status: BadgeStatus;
}
