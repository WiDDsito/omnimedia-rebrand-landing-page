import data from './navigation.json';
export interface NavigationItem {
  id?: string;
  label: string;
  url: string;
  description?: string;
  intro?: string;
  icon?: string;
  children: NavigationItem[];
}
export const navigation = data as NavigationItem[];
