export type ColumnsProps = {
  uid: string;
  name: string;
  align?: "start" | "center" | "end";
  sorting?: boolean;
};

export interface TableProps<T> {
  headerConfig: {
    title?: string;
  };
  columns: ColumnsProps[];
  hasTopContent?: boolean;
  isLoading?: boolean;
  maxWidth?: number;
  data: T[];
}
