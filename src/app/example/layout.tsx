interface ExampleLayoutProps {
  children: React.ReactNode;
}

export default function ExampleLayout({ children }: ExampleLayoutProps) {
  return (
    <div className="relative flex max-w-screen-lg mx-auto w-full h-[calc(100vh - 4rem)]">
      {children}
    </div>
  );
}
