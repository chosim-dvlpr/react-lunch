import styled from 'styled-components';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  width: 100%;
  max-width: 390px;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  border-radius: 8px 8px 0px 0px;
  padding: 32px 16px;

  height: 100%;
  width: 100%;
  max-width: 390px;
  box-sizing: border-box;

  position: fixed;
  top: 84px;
  left: 0;

  background-color: ${({ theme }) => theme.colors.greyScale1};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.35);
`;
