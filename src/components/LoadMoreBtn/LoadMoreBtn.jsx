import Button from '../Button/Button';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn ({ onClick }) {
    return (
        <div className={css.buttonContainer}>
            <Button type="button" color="primary" onClick={onClick}>
                Load more
            </Button>
        </div>
    );
};