import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    // setCategories([ ...categories, 'Valorant' ]); //?Una forma de hacerlo
    // setCategories( cat => [...cat, 'Valorant' ]); //?Otra forma de agregar datos a un arreglo
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={ setCategories } //? Una forma de comunicar componentes
        onNewCategory={ onAddCategory }
      />

      {categories.map(category =>
        ( <GifGrid
          key={ category }
          category={ category }
        /> )
      )}

    </>
  )
}
