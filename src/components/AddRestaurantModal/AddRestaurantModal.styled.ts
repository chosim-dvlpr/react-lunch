import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.greyScale1};
`;

export const ModalTitle = styled.h1`
  ${({ theme }) => theme.font.title}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;

  color: ${({ theme }) => theme.colors.greyScale4};
  ${({ theme }) => theme.font.caption}
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 6px 0;
  border: 1px solid ${({ theme }) => theme.colors.greyScale2};
  border-radius: 8px;
  ${({ theme }) => theme.font.body}
`;

export const Select = styled.select`
  width: 100%;
  height: 44px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.greyScale2};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.greyScale1};
  color: ${({ theme }) => theme.colors.greyScale3};
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 90px;
  height: 44px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.greyScale2};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.greyScale1};
  color: ${({ theme }) => theme.colors.greyScale3};
  resize: none;
`;

export const Required = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const Button = styled.button<{ $color: 'default' | 'primary' }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;
  border-radius: 8px;

  cursor: pointer;
  ${(props) =>
    props.$color === 'default'
      ? `
        background-color: ${props.theme.colors.greyScale1};
        color: ${props.theme.colors.greyScale3};
        border: 1px solid ${props.theme.colors.greyScale3};
        `
      : `
        background-color: ${props.theme.colors.primary};
        color: ${props.theme.colors.greyScale1};
      `}
  ${({ theme }) => theme.font.button};
`;

export const RestaurantInfo = styled.div`
  margin-bottom: 24px;
`;

export const HelpText = styled.p`
  color: ${({ theme }) => theme.colors.greyScale3};
  ${({ theme }) => theme.font.caption}
`;
