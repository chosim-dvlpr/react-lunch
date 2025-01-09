import { useEffect, useState } from 'react';
import useAddRestaurant from '../../queries/useAddRestaurant';
import * as S from './AddRestaurantModal.styled';
import { CategoryKorean, RestaurantCategory } from '../../types/restaurant';

interface AddRestaurantModalProps {
  onCloseModal: () => void;
}

const translateCategoryToEnglish = (
  category: CategoryKorean
): RestaurantCategory => {
  switch (category) {
    case '한식':
      return 'korean';
    case '일식':
      return 'japanese';
    case '중식':
      return 'chinese';
    case '양식':
      return 'western';
    case '아시안':
      return 'asian';
    case '기타':
      return 'etc';
    default:
      return 'all';
  }
};

function AddRestaurantModal({ onCloseModal }: AddRestaurantModalProps) {
  const { mutate: addRestaurant } = useAddRestaurant(onCloseModal);
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState<{
    category: CategoryKorean | null;
    name: string;
    distance: number;
    description: string;
    link: string;
    isLiked: boolean;
  }>({
    category: null,
    name: '',
    distance: 0,
    description: '',
    link: '',
    isLiked: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'distance' ? Number(value) : value,
    }));
  };

  const validateFormData = () => {
    const { category, name, distance } = formData;

    if (!category || !name || !distance || distance <= 0) {
      return false;
    }

    if (isNaN(Number(distance))) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsValid(validateFormData());
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { category, name, distance, description, link, isLiked } = formData;

    if (!category) return;

    const translatedCategory = translateCategoryToEnglish(category);

    addRestaurant({
      category: translatedCategory,
      name,
      distance,
      description,
      link,
      isLiked,
    });
  };

  return (
    <S.Layout>
      <S.ModalTitle>새로운 음식점</S.ModalTitle>
      <S.Form onSubmit={handleSubmit}>
        <S.FormItem>
          <S.Label htmlFor="category">
            카테고리 <S.Required>*</S.Required>
          </S.Label>
          <S.Select
            name="category"
            id="category"
            value={formData.category ?? ''}
            onChange={handleChange}
            required
          >
            <option value="">선택해 주세요</option>
            <option value="한식">한식</option>
            <option value="중식">중식</option>
            <option value="일식">일식</option>
            <option value="양식">양식</option>
            <option value="아시안">아시안</option>
            <option value="기타">기타</option>
          </S.Select>
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="name">
            이름 <S.Required>*</S.Required>
          </S.Label>
          <S.Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="distance">
            거리(도보 이동 시간) <S.Required>*</S.Required>
          </S.Label>
          <S.Input
            type="number"
            name="distance"
            id="distance"
            value={formData.distance}
            onChange={handleChange}
            required
          />
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="description">설명</S.Label>
          <S.TextArea
            name="description"
            id="description"
            cols={30}
            rows={5}
            value={formData.description}
            onChange={handleChange}
          ></S.TextArea>
          <S.HelpText>메뉴 등 추가 정보를 입력해 주세요.</S.HelpText>
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="link">참고 링크</S.Label>
          <S.Input
            type="text"
            name="link"
            id="link"
            value={formData.link}
            onChange={handleChange}
          />
          <S.HelpText>
            매장 정보를 확인할 수 있는 링크를 입력해 주세요.
          </S.HelpText>
        </S.FormItem>

        <S.ButtonContainer>
          <S.Button $color="default" onClick={onCloseModal} type="button">
            취소하기
          </S.Button>
          <S.Button $color="primary" type="submit" disabled={!isValid}>
            추가하기
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Layout>
  );
}

export default AddRestaurantModal;
