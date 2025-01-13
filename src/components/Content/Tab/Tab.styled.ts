import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: row;
  
  width: 100%;
`;

export const TabBox = styled.div`
  width: 100%;
`;

export const TabText = styled.p<{ $isSelected: boolean }>`
  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.primary
      : props.theme.colors.greyScale3};
`;
