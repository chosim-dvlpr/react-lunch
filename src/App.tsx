import Content from './components/Content/Content';
import Header from './components/Header/Header';
import * as S from './App.styled';
import { TabProvider } from './context/TabContext';

function App() {
  return (
    <S.Layout>
      <Header />
      <TabProvider>
        <Content />
      </TabProvider>
    </S.Layout>
  );
}

export default App;
