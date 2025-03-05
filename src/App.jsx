import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast';

import { fetchImages } from './services/api'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import './App.css'

function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!query) return;

        const getImages = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await fetchImages(query, page);

                if (data.results.length === 0) {
                    setError('No images found. Try a different search term.');
                    return;
                }

                setImages(prevImages => (page === 1 ? data.results : [...prevImages, ...data.results]));
                setTotalPages(data.total_pages);
            } catch (error) {
                setError('Error fetching images. Please try again later.');
                console.error('Error fetching images:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getImages();
    }, [query, page]);

    const handleSearchSubmit = (newQuery) => {
        if (newQuery === query) return;

        setQuery(newQuery);
        setPage(1);
        setImages([]);
        setError(null);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <SearchBar onSubmit={handleSearchSubmit} />
            <Toaster position="top-right" />

            {error && <ErrorMessage message={error} />}

            {images.length > 0 && (
                <ImageGallery images={images} onImageClick={handleImageClick} />
            )}

            {isLoading && <Loader />}

            {images.length > 0 && page < totalPages && !isLoading && (
                <LoadMoreBtn onClick={handleLoadMore}/>
            )}

            <ImageModal
                isOpen={modalIsOpen}
                onClose={handleModalClose}
                image={selectedImage}
            />
        </>
    )
}

export default App