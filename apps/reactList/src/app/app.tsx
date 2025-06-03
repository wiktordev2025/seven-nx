export function App({ title, onClick }: { title?: string, onClick?: () => void }) {
  const handleOnCLick = () => {
    console.log('React onClick.');
    onClick?.();
  }
  return (
    <div className="text-blue-500 p-4 cursor-pointer" onClick={handleOnCLick}>
      Hi from React Remote 👋
      <div>Title props: {title}</div>
    </div>
  );
}

export default App;
