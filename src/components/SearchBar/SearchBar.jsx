import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosSearch } from "react-icons/io";
import Button from '../Button/Button';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }

        onSubmit(query);
    };

    return (
        <header className={css.searchBar}>
            <form className={css.form} onSubmit={handleSubmit}>
                <Button type="submit" color='icon'>
                    <IoIosSearch className={css.icon} size={24} />
                </Button>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </header>
    );
};