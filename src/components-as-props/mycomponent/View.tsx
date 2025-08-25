export interface MyComponentViewProps {
  readonly getRowCount: () => number;
  readonly getColumnCount: () => number;
  readonly getRow: (i: number) => string[];
}

function times(count: number): number[] {
  return [...Array(count)].map((_, i) => i);
}

export default function MyComponentView(props: MyComponentViewProps) {
  const { getRowCount, getColumnCount, getRow } = props;

  const rows = getRowCount();
  const cols = getColumnCount();

  return (
    <div>
      <p>My Data View</p>
      <table>
        {times(rows).map((i) => {
          const row = getRow(i);
          return (
            <tr key={`row-${row[0]}`}>
              {times(cols).map((j) => (
                <td key={`row${i}col${j}`}>{row[j]}</td>
              ))}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
