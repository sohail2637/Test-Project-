import React, {useState} from "react";
import * as axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiurl, getToken } from './../utiels/helper';
import { managementAction } from "../features/counter/counterSlice";

const ProductCard = ({getData,updateItem}) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.counter.productList);
const deleteCard=(id)=>{
  axios({
    method:'post',
    url:`${apiurl}management/information/type`,
    headers: {
      "Content-Type":'multipart/form-data',
      Authorization: `Bearer ${getToken()}`,
    },
    data:{
      "_method": "delete",
      "ids[]": id
  }
  })
  .then(res=>{
    getData();
  })
  .catch(error=>console.error(error))
}
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        flexWrap:'wrap',
        gap: "12px",
      }}
    >
      {productList?.map(({ description, id, image, name }) => (
        <div
          style={{ border: "1px solid gray", borderRadius: "20px",padding:'6px' }}
          key={id}
        >
          <div style={{ width: "200px", height: "250px" }}>
            {" "}
            <img
              src={`${image?image: "sampleImage.png"}`}
              style={{ objectFit: "contain",borderRadius: "20px", height: "100%", width: "100%" }}
            />
          </div>
          <div style={{display:'flex',alignItem:'center',justifyContent:'space-between',marginTop:'4px'}}>
            <p style={{fontSize:'18px',textAlign:'start',lineHeight:'none',margin:'0px'}}>{name}</p>
            <button style={{background:"red", color:"white"}} onClick={()=>deleteCard(id)} >Delete</button>
          </div>
          <div style={{display:'flex',alignItem:'center',justifyContent:'space-between',marginTop:'4px'}}>
          <p style={{fontSize:'14px',textAlign:'start',lineHeight:'none',margin:'0px'}}>{description}</p>
          <button style={{background:"green", color:"white"}} onClick={()=>updateItem(id)} >UpdateItem</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
