import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState,useEffect } from "react"

function AddProducts(){
    const [categories, setCategories] = useState([])
    const [productName, setProductName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch('https://karanja-s-online-shop-v1q7.onrender.com/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
    },[])

    
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData()
        formData.append('name', productName)
        formData.append('categories_id', category)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('image', image)

        fetch(`https://karanja-s-online-shop-v1q7.onrender.com/products`,{
            method : 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        event.target.reset()
    }

    function handleImageChange(event){
        setImage(event.target.files[0])
    }

    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>Add a new product</h1>
               <form onSubmit={handleSubmit} id="add-product-form">
                <div id="add-product-field-container">
                    <input onChange={(e) => setProductName(e.target.value)} id="add-product-field" type="text" placeholder="enter product name"></input>
                    <select onChange={(e) => setCategory(e.target.value)} id="add-category-field">
                        <option>select category</option>
                        {categories.map(category => <option value={category.id}>{category.name}</option>)}  
                    </select>
                </div>
                <div id="add-image-field-container">
                    <input onChange={handleImageChange} id="add-image-field" type="file" placeholder="enter product name"></input>
                    <input onChange={(e) => setPrice(e.target.value)} id="add-price" type="number" placeholder="enter product price"></input>
                </div>
                <div>
                    <textarea onChange={(e) => setDescription(e.target.value)} id="add-description-textarea" placeholder="enter product description"></textarea>
                </div>
                <input id="add-product-btn" type="submit" value="add product"></input>
                              
                          
               </form>
            </div>
            
        </div>
    )
}

export default AddProducts