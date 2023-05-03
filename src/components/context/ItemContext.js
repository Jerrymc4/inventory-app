import { createContext, useState, useEffect, useRef } from "react";
// import Items from "../Items";

const ItemContext = createContext([]);

const initForm = [{}];
const getSavedState = () => {
  const item = localStorage.getItem("savedItems");
  return item ? JSON.parse(item) : initForm;
};

export function ItemContextProvider({ children }) {
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [serialNumber, setSetSerialNum] = useState("");
  const [nsnNumber, setNsn] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [note, setNote] = useState("");
  const [items, setItems] = useState(getSavedState);
  const [isEditing, setIsEditing] = useState(false);

  const [hovering, setIsHovering] = useState(false);

  const inputRef = useRef(null);
  // const [date, setDate] = useState('')

  const newItem = {
    name,
    serialNumber,
    nsnNumber,
    location,
    quantity,
    expirationDate,
    note,
    category,
    color,
    date: new Date().toLocaleDateString(),
    id: Math.floor(Math.random() * 10000),
  };

  useEffect(() => {
    window.localStorage.setItem("savedItems", JSON.stringify(items));
  });

  useEffect(() => {
    let timeoutId;
    if (isEditing) {
      timeoutId = setTimeout(() => {
        setName(inputRef.current.value);
        setIsEditing(false);
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [isEditing]);

  // sets value when input losses focus
  const handleBlur = () => {
    setName(inputRef.current.value);
    setIsEditing(false);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDelete = (itemToDelete) => {
    const itemsDeleted = items.filter((item) => {
      return item.id !== itemToDelete.id;
    });
    setItems(itemsDeleted);
    console.log(itemsDeleted);
  };

  // const handleEdit = (updatedItem) => {
  //   const updatedItems = items.map((item) => {
  //     if (item.id === editedItem.id) {
  //       return { ...item, ...updatedItem };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setItems(updatedItems);
  //   setEditedItem({});
  // };

  const handleHover = () => {
    setIsHovering(true);
    console.log("hovering");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
    // console.log(items);
    setName("");
    setSetSerialNum("");
    setNsn("");
    setLocation("");
    setQuantity("");
    setExpirationDate("");
    setNote("");
    setCategory("");
    setColor("");
  };

  const handleValueChange = (newValue) => {
    setName(newValue);
  };

  return (
    <ItemContext.Provider
      value={{
        name,
        location,
        quantity,
        nsnNumber,
        serialNumber,
        expirationDate,
        note,
        category,
        items,
        color,
        isEditing,
        inputRef,
        setItems,
        setColor,
        setName,
        setLocation,
        setQuantity,
        setNsn,
        setSetSerialNum,
        setExpirationDate,
        setNote,
        handleCategoryChange,
        handleSubmit,
        handleDelete,

        handleBlur,
        handleValueChange,
      }}
    >
      {" "}
      {children}{" "}
    </ItemContext.Provider>
  );
}

export default ItemContext;
