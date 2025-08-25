export interface MyComponentViewProps {
  readonly getRowCount: () => number;
  readonly getColumnCount: () => number;
  readonly getRow: (i: number) => string[];
}

function times(count: number): number[] {
  return [...Array(count)].map((_, i) => i);
}

/*
 * The view component uses a few key functions to get data and render it.
 * This shouldn't have a lot of logic in it - that's the data component's job.
 * Instead, this component should be about presentation, e.g. grid vs. table view.
 */
export default function MyComponentAltView(props: MyComponentViewProps) {
  const { getRowCount, getRow } = props;

  const rows = getRowCount();

  return (
    <div>
      <p>My Alternate Data View</p>
      <ol>
        {times(rows).map((i) => {
          const row = getRow(i);
          return <li key={`row-${row[0]}`}>{row.join(" - ")}</li>;
        })}
      </ol>
    </div>
  );
}
