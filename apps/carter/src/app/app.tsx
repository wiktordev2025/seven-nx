import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: lightseagreen;
  color: #333;
  padding: 20px;
  border-radius: 8px;
`;

export type Item = { id: number; title: string };

type AppProps = {
  title?: string;
  userData?: { name: string; age?: number };
  onClick?: () => void;
  items?: Item[];
};
export function App({title, userData, onClick, items = []}: AppProps) {
  const handleOnCLick = () => {
    console.log('React Carter onClick.');
    onClick?.();
  };

  console.log('React items: ', items);

  return (
    <StyledApp>
      <div onClick={handleOnCLick}>
        <h2>React Remote 👋 Carter</h2>
        <h3>Static props:</h3>
        <div>Title: {title}</div>
        <div>User: <span>{userData?.name}</span></div>
        <div>Age: <span>{userData?.age}</span></div>
      </div>
      {items?.length > 0 && <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>{item.title}</div>
          </li>
        ))}
      </ul>}
    </StyledApp>
  );
}

export default App;
