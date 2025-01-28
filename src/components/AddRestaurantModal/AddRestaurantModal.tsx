import { useEffect, useState } from 'react';
import useAddRestaurant from '../../queries/useAddRestaurant';
import * as S from './AddRestaurantModal.styled';
import { Restaurant, RestaurantCategory } from '../../types/restaurant';
import { CATEGORIES, DEFAULT_CATEGORY } from '../../constants/filter';

interface AddRestaurantModalProps {
  onCloseModal: () => void;
}

const INITIAL_FORM_DATA: Omit<Restaurant, 'id' | 'category'> & {
  category: RestaurantCategory;
} = {
  category: DEFAULT_CATEGORY,
  name: '',
  distance: 0,
  description: '',
  link: '',
  isLiked: false,
};

function AddRestaurantModal({ onCloseModal }: AddRestaurantModalProps) {
  const { mutate: addRestaurant } = useAddRestaurant({
    onSuccessCallback: onCloseModal,
  });
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

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

    return (
      category !== 'all' &&
      name.trim() !== '' &&
      distance > 0 &&
      !isNaN(distance)
    );
  };

  useEffect(() => {
    setIsValid(validateFormData());
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { category, name, distance, description, link, isLiked } = formData;

    if (category === 'all') return;

    addRestaurant({
      category,
      name,
      distance,
      description: description || '',
      link: link || '',
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
            value={formData.category}
            onChange={handleChange}
            required
          >
            {CATEGORIES.map(({ label, value }) => (
              <option key={label} value={value}>
                {label}
              </option>
            ))}
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
