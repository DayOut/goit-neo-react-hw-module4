import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
    return (
        <div className={css.card} onClick={onClick}>
            <img
                src={image.urls.small}
                alt={image.alt_description || image.description || 'Unsplash image'}
                className={css.image}
            />
        </div>
    );
};