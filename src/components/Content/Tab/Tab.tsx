import * as S from './Tab.styled';
import useTabContext from '../../../hooks/useTabContext';

function Tab() {
  const { selectedTab, setSelectedTab } = useTabContext();

  return (
    <S.Layout>
      <S.TabBox onClick={() => setSelectedTab('all')}>
        <S.TabText $isSelected={selectedTab === 'all'}>모든 음식점</S.TabText>
      </S.TabBox>
      <S.TabBox onClick={() => setSelectedTab('favorite')}>
        <S.TabText $isSelected={selectedTab === 'favorite'}>
          자주 가는 음식점
        </S.TabText>
      </S.TabBox>
    </S.Layout>
  );
}

export default Tab;
