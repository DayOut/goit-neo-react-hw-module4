import Modal from 'react-modal';
import css from './ImageModal.module.css';

// Set the app element for accessibility purposes (to hide from screen readers when modal is open)
Modal.setAppElement('#root');

export default function ImageModal ({ isOpen, onClose, image }) {
    if (!image) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
            contentLabel="Image Modal"
            shouldCloseOnOverlayClick={true}
        >
            <div className={css.content}>
                <img
                    src={image.urls.regular}
                    alt={image.alt_description || image.description || 'Unsplash image'}
                    className={css.image}
                />
            </div>
        </Modal>
    );
};