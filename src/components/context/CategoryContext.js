import { createContext, useState, useEffect } from "react";

const CategoryContext = createContext([]);

const initCategories = ["Class VIII", "Durables", "Sensitive Items"];
const getSavedState = () => {
  const category = localStorage.getItem("savedCategories");
  return category ? JSON.parse(category) : initCategories;
};

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState(getSavedState);
  const [categoryColor, setCategoryColor] = useState([
    "#FF7D05",
    "#0569FF",
    "#039600",
    "#8205FF",
    "red",
    "brown",
    "#cef703",
    "#015049",
    "#000000",
    "#f00395",
    "#460d4f",
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("savedCategories", JSON.stringify(categories));
  });

  const handleSave = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleColorChange = (e) => {
    setCategoryColor(e.target.value);
  };
  const addNewCategory = (e) => {
    const copyCategories = [...categories];
    copyCategories.push(input);
    setCategories(copyCategories);
    // console.log(copyCategories);
    setOpen(false);
    e.preventDefault();
  };

  function handleDeleteCategory(categoryToDelete) {
    const categoriesDeleted = categories.filter((category) => {
      return category !== categoryToDelete;
    });
    setCategories(categoriesDeleted);
    console.log(categoriesDeleted);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryColor,
        categories,
        input,
        open,
        handleClickOpen,
        handleClose,
        addNewCategory,
        handleSave,
        handleDeleteCategory,
        handleColorChange,
      }}>
      {" "}
      {children}{" "}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;
