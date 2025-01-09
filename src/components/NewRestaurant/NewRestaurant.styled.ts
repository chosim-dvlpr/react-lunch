import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.greyScale1};
`;

export const ModalTitle = styled.h1`
  margin-bottom: 36px;

  ${({ theme }) => theme.font.title}
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  label {
    color: var(--grey-400);
    font-size: 14px;
  }

  &.form-item--required label::after {
    padding-left: 4px;
    color: var(--primary-color);
    content: '*';
  }

  .help-text {
    color: var(--grey-300);
  }

  input,
  textarea,
  select {
    padding: 8px;
    margin: 6px 0;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    font-size: 16px;
  }

  textarea {
    resize: none;
  }

  select {
    height: 44px;
    padding: 8px;
    border: 1px solid var(--grey-200);
    border-radius: 8px;
    color: var(--grey-300);
  }

  input[name='name'],
  input[name='link'] {
    height: 44px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &.button--secondary {
    border: 1px solid var(--grey-300);
    background: transparent;
    color: var(--grey-300);
  }

  &.button--primary {
    background: var(--primary-color);
    color: var(--grey-100);
  }
`;

export const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;
