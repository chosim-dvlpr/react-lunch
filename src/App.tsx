import Content from './components/Content/Content';
import Header from './components/Header/Header';
import * as S from './App.styled';

function App() {
  return (
    <S.Layout>
      <Header />
      <Content />
    </S.Layout>
  );
}

export default App;
