type Props = {
  color?: string;
};

export const Loading = ({ color = "blue" }: Props) => {
  const c = `border-${color}-500`;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`w-16 h-16 border-4 border-dotted rounded-full animate-spin ${c}`}
      />
    </div>
  );
};
