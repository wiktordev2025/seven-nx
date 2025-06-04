import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: lightseagreen;
  color: #333;
  padding: 20px;
  border-radius: 8px;
`;


type AppProps = {
  title?: string;
  userData?: { name: string; age?: number };
  onClick?: () => void;
}

export function App({title, userData, onClick}: AppProps) {
  const handleOnCLick = () => {
    console.log('React Carter onClick.');
    onClick?.();
  };
  return (
    <StyledApp>
      <div onClick={handleOnCLick}>
        Hisz from React Remote  👋 Carter
        <div>Title props: {title}</div>
        <div>User: <span>{userData?.name}</span></div>
        <div>Age: <span>{userData?.age}</span></div>
      </div>
    </StyledApp>
  );
}

export default App;
