import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['One punch']);

	// console.log(categories);
	const onAddCategory = (newCategory) => {

		if (categories.includes(newCategory)) return;
		// console.log(newCategory);
		setCategories([newCategory, ...categories]);
		// setCategories(['Berserk', ...categories]);	//Hacemos desestructuracion de las categorias

	};



	return (

		<>
			<h1>GifExpertApp</h1>
			<AddCategory
				//setCategories={setCategories}
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{
				categories.map((category) => (
					<GifGrid key={category} category={category} />
				))
			}


		</>

	)
}
