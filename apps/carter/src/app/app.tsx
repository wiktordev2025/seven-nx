import {ApiItem} from '@global-types/shared-types';
import {ButtonsContainer, StyledApp, StyledList} from './styled';

type AppProps = {
  title?: string;
  items?: ApiItem[];
  onNext?: () => void;
  onPrev?: () => void;
};
export function App({title, onNext, onPrev, items = []}: AppProps) {
  return (
    <StyledApp>
      <div>
        <h2>React Remote 👋</h2>
        <div>Title: {title}</div>
      </div>
      {items?.length > 0 && <StyledList>
        {items.map(item => (
          <li key={item.id}>
            <div>{item.email}</div>
          </li>
        ))}
      </StyledList>}
      <ButtonsContainer>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </ButtonsContainer>
    </StyledApp>
  );
}

export default App;
