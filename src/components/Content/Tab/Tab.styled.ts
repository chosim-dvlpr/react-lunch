import styled from 'styled-components';

export const Layout = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 31px 0;
`;

export const TabBox = styled.div<{ $isSelected: boolean }>`
  width: 100%;
  padding-bottom: 9px 0;

  border-bottom: 2px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.colors.primary
        : props.theme.colors.greyScale3};
  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.primary
      : props.theme.colors.greyScale3};
`;

export const TabText = styled.p`
  font: ${({ theme }) => theme.font.body}
  font-wight: 700;

  text-align: center;

`;
