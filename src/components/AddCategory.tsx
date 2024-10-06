import React, { FC, useState } from 'react';
import { Search } from '@mui/icons-material';

interface AddCategoryProps {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory: FC<AddCategoryProps> = ({ setCategories }) => {


    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mt-4">
            <div className="relative flex-grow">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 pr-10"
                    placeholder="Search GIFs"
                />

                <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center pr-0.5"
                >
                    <Search className="text-white rounded-r border-l border-gray-600 p-1.5" style={{ width: '45px', height: '40px' }} />
                </button>
            </div>
        </form>
    );


};
