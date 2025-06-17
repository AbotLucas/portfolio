interface ContainerProps {
  children: React.ReactNode;
}

const ContainerPage = (props: ContainerProps) => {
  const { children } = props;
  return (
    <div className="w-full max-w-6xl px-4 pb-40 mx-auto mt-31 md:mt-20 md:pb-0 md:px-6">
      {children}
    </div>
  );
};

export default ContainerPage;
