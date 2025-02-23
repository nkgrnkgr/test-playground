type Props = {
  data: unknown;
};

export const DataViewer = ({ data }: Props) => {
  return (
    <div>
      <pre
        data-testid="data"
        className="bg-gray-800 text-white p-4 rounded-md overflow-auto"
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};
