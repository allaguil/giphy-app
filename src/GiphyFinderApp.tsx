import { FC, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import giphy from '../public/giphy.svg'

export const GiphyFinderApp: FC = () => {

  const [categories, setCategories] = useState<string[]>(['DBZ']);

  return (
    <div className="flex flex-col p-[60px]">

      <div className="flex items-center mb-4">
        <img src={giphy} alt="Giphy Logo" className="h-8 mr-2" />
        <h1 className="text-4xl text-white">Giphy Finder App</h1>
      </div>
      <AddCategory setCategories={setCategories} />

      <hr className="my-4 border-gray-600" />

      <ol>
        {categories.map(category => (
          <li key={category} className="mb-4">
            <h1 className="text-4xl text-white">{category}</h1>
            {/* <GifGrid key={category} category={category} /> */}
          </li>
        ))}
      </ol>


    </div>
  );
}


