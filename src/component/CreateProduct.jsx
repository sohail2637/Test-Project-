import React, { useState,useEffect } from "react";
import * as axios from "axios";
import { apiurl, getToken } from "./../utiels/helper";
import { useSelector } from 'react-redux';

const CreateProduct = ({getData,updateStatus,setUpdateStatus}) => {
  const  {id, status}=updateStatus;
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
  });
  const productList = useSelector((state) => state.counter.productList);

  // input update
  const updateData = (e) => {
    setProduct((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
// image upload
  const uploadImage = (e) => {
    setProduct((pre) => ({ ...pre, image: e.target.files[0] }));

    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
// Api call
  const cerateProduct = (e) => {
    e.preventDefault(); 
    const formateImage = new FormData();
    formateImage.append('image', Image);
    if(status){
      axios({
      method: "post",
      url: `${apiurl}management/information/type`,
      headers: {
       'Content-Type':'multipart/form-data',
        Authorization: `Bearer ${getToken()}`,
      },
      data:{
        _method:'put',
        ...product
      }
    })
      .then((res) => {
        debugger;
        getData();
        setUpdateStatus(pre=>({...pre, id:'',status:false}));
        setProduct({});
      })
      .catch((err) => console.log("Error:", err));
  
    }else{
    axios({
      method: "post",
      url: `${apiurl}management/information/type`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data: {
      name:product.name,
      description:product.description,
      formateImage
      },
    })
    .then(res=>{
      console.log("res off creation",res);
      getData();
    })
    .catch(error=>console.error(error));
  }
  };

  useEffect(()=>{
if(id && status){
  const itemForUpdte= productList.find(item=>item.id===id)
  setProduct(itemForUpdte);
}
  },[id])


  return (
    <div
      style={{
        dispaly: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={cerateProduct}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={product.name}
          onChange={updateData}
          required
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={product.description}
          required
          onChange={updateData}
        />
        <br />
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          name="image"
          id="image"
          required
          onChange={uploadImage}
        />
        <br />
        <br />
        <br />
        <button type="submit"> {status?"update Item":"Create Product"}</button>
      </form>

    </div>
  );
};

export default CreateProduct;
