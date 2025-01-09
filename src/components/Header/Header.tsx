import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import NewRestaurant from '../NewRestaurant/NewRestaurant';
import * as S from './Header.styled';

function Header() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <S.Layout>
      <S.Title>점심 뭐 먹지</S.Title>
      <S.Button type="button" onClick={openModal} aria-label="음식점 추가">
        <S.RightButtonImage src="src/assets/add-button.png" alt="음식점 추가" />
      </S.Button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <NewRestaurant />
        </Modal>
      )}
    </S.Layout>
  );
}

export default Header;
