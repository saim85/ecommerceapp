import React, { useEffect, useState } from "react";
import MyContext from "./data/Mycontext";
import {
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../Firbase/FirbaseConfige";

const Mystate = (props) => {
  const [mode, setMode] = useState("light");

  // create a function for light bg and dark bg
  const toggleMode = () => {
    // if else condition
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = rgb(17, 24, 39);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  //   define a state for add product

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // deine a function for addProduct

  const addproduct = async () => {
    // validation
    if (
      products.title === null ||
      products.price === null ||
      products.category === null ||
      products.description === null ||
      products.imageUrl === null
    ) {
      toast.error("please fill all filed");
    }
    setLoading(true);
    try {
      // add product on database
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("add product successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductdata();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // create a function for getProducts on db
  // define a state for this
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //  update products

  const edithandle = (item) => {
    setProducts(item);
  };

  const updatedproducts = async () => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id));
      toast.success("Product updated Successfully");
      getProductData();
      setLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // deletd products
  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      toast.success("Product Deleted Falied") / setLoading(false);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  // orders
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData()

  }, []);


  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDb, "user"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }




  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        addproduct,
        products,
        setProducts,
        product,
        edithandle,
        updatedproducts,
        deleteProduct,
        order,
        user,
        searchkey, setSearchkey,filterType, setFilterType,
        filterPrice, setFilterPrice
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Mystate;
