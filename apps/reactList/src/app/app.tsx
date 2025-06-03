export function App({ title }: { title?: string }) {
  return (
    <div className="text-blue-500 p-4">
      Hi from React Remote 👋
      <div>Title props: {title}</div>
    </div>
  );
}

export default App;
