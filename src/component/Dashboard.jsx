import React, { useEffect,useState } from "react";
import * as axios from "axios";
import { apiurl, getToken } from "./../utiels/helper";
import { useDispatch } from "react-redux";
import { ProductList } from "../features/counter/counterSlice";
import ProductCard from "./ProductCard";
import CreateProduct from "./CreateProduct";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [updateStatus,setUpdateStatus] =useState({
    id:'',
    status:false,
  })
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const getData = () => {
    axios({
      method: "get",
      url: `${apiurl}management/information/type`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => {
        let products = res.data.data.type.data;
        dispatch(ProductList(products));
      })
      .catch((err) => console.log("Error:", err));
  };

  const updateItem=(id)=>{
    setUpdateStatus(pre=>({...pre, id:id,status:true}))
  }
  useEffect(() => {
    if(getToken()){
      getData();
    }
    else{
      navigate('/login')
    }
  }, []);

  return (
    <div>
      <CreateProduct getData={getData} updateStatus={updateStatus} setUpdateStatus={setUpdateStatus} />
      <br />
      <br />
      <br />
      <ProductCard getData={getData} updateItem={updateItem}/>
    </div>
  );
};

export default Dashboard;
