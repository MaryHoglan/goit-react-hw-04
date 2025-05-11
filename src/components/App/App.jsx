import  { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from '../../services/unsplashAPI';
import style from './App.module.css';





function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  useEffect(() => {
    if (!query) return;

    async function getImages() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchImages(query, page);
        setImages(prev => page === 1 ? data.results : [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = image => {
   if (isModalOpen) return;
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}

      <ImageGallery images={images} onImageClick={openModal} />

      {isLoading && <Loader />}

      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

     
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      
      <Toaster position="top-right" reverseOrder={false} />
    </div>
    
  );
}

export default App
