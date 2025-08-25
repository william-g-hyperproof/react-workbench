import type { MyComponentViewProps } from "./View";

interface MyComponentDataProps {
  readonly useTable: () => string[][];
  readonly viewComponent: React.FC<MyComponentViewProps>;
}

/*
 * The data component takes hooks and other state, and rearranges it so that the view component can consume it.
 * In our example here, we have the following assumptions:
 *
 *   - We're showing a table with a variable number of rows and columns
 *   - Row and column count are provided by functions, letting them be hooks for dynamic data refresh
 *   - There's a "getRow" getter which can also be a hook, and the parameter could be a UUID or something, not just an integer
 *   - We might not want to show every column, e.g. if the user has customized their view or doesn't have permission
 */
export default function MyComponentData(props: MyComponentDataProps) {
  const table = props.useTable();

  const viewProps: MyComponentViewProps = {
    getRow: (row: number) => table[row],
    getRowCount: () => table.length,
    getColumnCount: () => table[0]?.length || 0,
  };

  return <props.viewComponent {...viewProps} />;
}
