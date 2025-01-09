import styled from 'styled-components';

export const Layout = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.greyScale1};
  ${({ theme }) => theme.font.title};
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

export const RightButtonImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
