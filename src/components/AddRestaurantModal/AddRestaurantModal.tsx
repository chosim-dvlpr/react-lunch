import * as S from './AddRestaurantModal.styled';

interface AddRestaurantModalProps {
  onCloseModal: () => void;
}

function AddRestaurantModal({ onCloseModal }: AddRestaurantModalProps) {
  return (
    <S.Layout>
      <S.ModalTitle>새로운 음식점</S.ModalTitle>
      <S.Form>
        <S.FormItem>
          <S.Label htmlFor="category text-caption">
            카테고리 <S.Required>*</S.Required>
          </S.Label>
          <S.Select name="category" id="category" required>
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
          <S.Label htmlFor="name text-caption">
            이름 <S.Required>*</S.Required>
          </S.Label>
          <S.Input type="text" name="name" id="name" required />
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="name text-caption">
            거리(도보 이동 시간) <S.Required>*</S.Required>
          </S.Label>
          <S.Input type="text" name="name" id="name" required />
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="description text-caption">설명</S.Label>
          <S.TextArea
            name="description"
            id="description"
            cols={30}
            rows={5}
          ></S.TextArea>
          <S.HelpText>메뉴 등 추가 정보를 입력해 주세요.</S.HelpText>
        </S.FormItem>

        <S.FormItem>
          <S.Label htmlFor="name text-caption">참고 링크</S.Label>
          <S.Input type="text" name="name" id="name" required />
          <S.HelpText>
            매장 정보를 확인할 수 있는 링크를 입력해 주세요.
          </S.HelpText>
        </S.FormItem>

        <S.ButtonContainer>
          <S.Button $color="default" onClick={onCloseModal} type="button">
            취소하기
          </S.Button>
          <S.Button $color="primary" type="submit">
            추가하기
          </S.Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Layout>
  );
}

export default AddRestaurantModal;
