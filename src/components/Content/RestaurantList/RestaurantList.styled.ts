import styled from 'styled-components';

export const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;

export const RestaurantList = styled.div`
  display: flex;
  flex-direction: column;
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
`;
