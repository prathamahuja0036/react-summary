// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ApiCalling2.css';

// const ApiCalling2 = () => {
//     const [items, setItems] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [sortCriteria, setSortCriteria] = useState('');
//     const itemsPerPage = 3;

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//             .then(response => {
//                 setItems(response.data);
//             });
//     }, []);

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products/categories")
//             .then(response => {
//                 setCategories(response.data);
//             });
//     }, []);

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNextPage = () => {
//         if (currentPage < Math.ceil(items.length / itemsPerPage)) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePageClick = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handleSortChange = (event) => {
//         setSortCriteria(event.target.value);
//     };

//     const sortItems = (items) => {
//         switch (sortCriteria) {
//             case 'category':
//                 return items.sort((a, b) => a.category.localeCompare(b.category));
//             case 'price':
//                 return items.sort((a, b) => a.price - b.price);
//             case 'rating':
//                 return items.sort((a, b) => b.rating.rate - a.rating.rate);
//             default:
//                 return items;
//         }
//     };

//     const sortedItems = sortItems([...items]);
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const selectedItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

//     const totalPages = Math.ceil(items.length / itemsPerPage);
//     const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//     return (
//         <div>
//             <div className='sort-controls'>
//                 <label htmlFor="sort">Sort by:</label>
//                 <select id="sort" value={sortCriteria} onChange={handleSortChange}>
//                     <option value="">Select</option>
//                     <option value="category">Category</option>
//                     <option value="price">Price</option>
//                     <option value="rating">Rating</option>
//                 </select>
//             </div>

//             <div className='section1'>
//                 {selectedItems.map(item => (
//                     <div key={item.id} className='item'>
//                         <h2 className='heading'>{item.title}</h2>
//                         <img src={item.image} alt={item.title} className='image-section' />
//                         <p>{item.description}</p>
//                         <p className='price'>Price: ${item.price}</p>
//                         <p className='category'>Category: {item.category}</p>
//                         <p className='rating'>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
//                     </div>
//                 ))}
//             </div>
//             <div className='pagination'>
//                 <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
//                 {pageNumbers.map(pageNumber => (
//                     <button
//                         key={pageNumber}
//                         className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
//                         onClick={() => handlePageClick(pageNumber)}
//                     >
//                         {pageNumber}
//                     </button>
//                 ))}
//                 <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default ApiCalling2;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApiCalling2.css';

const ApiCalling2 = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const itemsPerPage = 3;

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setItems(response.data);
            });
    }, []);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1); // Reset to the first page when the category changes
    };

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

    const sortItems = (items) => {
        switch (sortCriteria) {
            case 'category':
                return items.sort((a, b) => a.category.localeCompare(b.category));
            case 'price':
                return items.sort((a, b) => a.price - b.price);
            case 'rating':
                return items.sort((a, b) => b.rating.rate - a.rating.rate);
            default:
                return items;
        }
    };

    const filteredItems = selectedCategory
        ? items.filter(item => item.category === selectedCategory)
        : items;

    const sortedItems = sortItems([...filteredItems]);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div>
            <div className='sort-controls'>
                <label htmlFor="category">Filter by category:</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                    <option value="">Select</option>
                    <option value="category">Category</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            <div className='section1'>
                {selectedItems.map(item => (
                    <div key={item.id} className='item'>
                        <h2 className='heading'>{item.title}</h2>
                        <img src={item.image} alt={item.title} className='image-section' />
                        <p>{item.description}</p>
                        <p className='price'>Price: ${item.price}</p>
                        <p className='category'>Category: {item.category}</p>
                        <p className='rating'>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                    </div>
                ))}
            </div>
            <div className='pagination'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                {pageNumbers.map(pageNumber => (
                    <button
                        key={pageNumber}
                        className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => handlePageClick(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default ApiCalling2;
