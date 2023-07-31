export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      {children}
    </div>
  );
};
// to catch everything here we use children and we style everything using children!
