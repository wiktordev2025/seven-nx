type AppProps = {
  title?: string;
  userData?: { name: string; age?: number };
  onClick?: () => void;
}

export function App({title, userData, onClick}: AppProps) {
  const handleOnCLick = () => {
    console.log('React onClick.');
    onClick?.();
  };
  return (
    <div className="text-blue-500 p-4 cursor-pointer" onClick={handleOnCLick}>
      Hisz from React Remote 👋
      <div>Title props: {title}</div>
      <div>User: <span>{userData?.name}</span></div>
      <div>Age: <span>{userData?.age}</span></div>
    </div>
  );
}

export default App;
