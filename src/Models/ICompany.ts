export interface ICompany {
  nameCompany: string;
  address: string;
  email: string;
  phone: string;
  id?: number;
  onClick?: (event: number) => void;
  selected?: boolean;
  style?: React.CSSProperties;
  onContextMenu?: (event: React.MouseEvent) => void
}