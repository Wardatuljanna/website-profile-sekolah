import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mark from 'mark.js'; 

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            if (searchTerm) {
                // Menghapus highlight sebelumnya
                const context = document.body;
                const instance = new Mark(context);
                instance.unmark({
                    done: () => {
                        // Menandai teks yang dicari
                        instance.mark(searchTerm, {
                            separateWordSearch: false,
                            done: (count) => {
                                if (count === 0) {
                                    toast.error('Kata tidak ditemukan', {
                                        position: "top-center", 
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                    });
                                }
                            }
                        });
                    }
                });
            }
        }
    };

    return (
        <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IoSearchSharp className="text-white" />
            </div>
            <input
                type="text"
                placeholder="Search"
                className="p-2 pl-10 rounded border border-white bg-transparent text-white placeholder-white focus:outline-none focus:border-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
            />
        </div>
    );
};

export default Search;
