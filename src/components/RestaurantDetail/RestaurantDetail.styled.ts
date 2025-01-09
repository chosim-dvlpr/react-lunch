import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 0 16px;
  margin: 16px 0;
`;

export const Restaurant = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

export const RestaurantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryLighten};
`;

export const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;

export const RestaurantName = styled.h3`
  margin: 0;
  ${({ theme }) => theme.font.subtitle}
`;

export const RestaurantDescription = styled.p`
  display: -webkit-box;
  padding-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.font.body}
  margin: 0;
`;

export const InfoHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const RestaurantDistance = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.font.body}
  margin: 0;
`;

export const RestaurantLink = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.font.body}
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const Button = styled.button<{
  $color: 'default' | 'primary';
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;
  border-radius: 8px;

  ${(props) =>
    props.disabled
      ? `
        background-color: ${props.theme.colors.greyScale2};
        color: ${props.theme.colors.greyScale3};
        cursor: not-allowed;
      `
      : props.$color === 'default'
      ? `
        background-color: ${props.theme.colors.greyScale1};
        color: ${props.theme.colors.greyScale3};
        border: 1px solid ${props.theme.colors.greyScale3};
      `
      : `
        background-color: ${props.theme.colors.primary};
        color: ${props.theme.colors.greyScale1};
        cursor: pointer;
      `}
  ${({ theme }) => theme.font.button};
`;
