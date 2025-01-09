import * as S from './Modal.styled';
import { createPortal } from 'react-dom';

interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  top: number;
}

function Modal({ children, isOpen, onClose, top }: ModalProps) {
  const portalElement = document.getElementById('modal') as HTMLElement;

  if (!portalElement) {
    console.error('Portal이 안열림');
  }

  const modalLayout = (
    <S.Layout>
      <S.Container>
        <S.Backdrop onClick={onClose} />
        <S.ContentWrapper $top={top}>{children}</S.ContentWrapper>
      </S.Container>
    </S.Layout>
  );

  return isOpen && createPortal(modalLayout, portalElement);
}

export default Modal;
