import type { MyComponentViewProps } from "./View";

interface MyComponentDataProps {
  readonly useTable: () => string[][];
  readonly viewComponent: React.FC<MyComponentViewProps>;
}

export default function MyComponentData(props: MyComponentDataProps) {
  const table = props.useTable();

  const viewProps: MyComponentViewProps = {
    getRow: (row: number) => table[row],
    getRowCount: () => table.length,
    getColumnCount: () => table[0]?.length || 0,
  };

  return <props.viewComponent {...viewProps} />;
}
