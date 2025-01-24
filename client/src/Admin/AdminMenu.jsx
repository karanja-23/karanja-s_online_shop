import { faHouse , faEye, faPlus, faFilePen, faTrash, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
function AdminMenu() {
    const [productsIsExpanded, setProductsIsExpanded] = useState(false);
    const [categoiesIsExpanded, setCategoriesIsExpanded] = useState(false);
    useEffect(() => {
        setProductsIsExpanded(true)
    }, [])
    function handleProductsExpand(){
        setProductsIsExpanded(!productsIsExpanded)
    }
    function handleCategoriesExpand(){
        setCategoriesIsExpanded(!categoiesIsExpanded)
    }

    return (
        <div id="admin-menu">
            <span style={{
                fontSize: '20px',
                fontWeight: '200',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer'
            }}><FontAwesomeIcon icon={faHouse} /> Dashboard</span>

            <ul id="admin-menuItems">
                <li className='category'><span onClick={handleProductsExpand}>Products<FontAwesomeIcon className='expand' icon={faChevronDown} /></span>
                    <ul className='products' style={{display: productsIsExpanded ? 'block' : 'none'}} >
                        <li className='item'><NavLink to="/admin/products"><FontAwesomeIcon style={{marginRight: '10px'}} icon={faEye} />View Products</NavLink></li>
                        <li className='item'><FontAwesomeIcon icon={faPlus} />Add Products</li>
                        <li className='item'><FontAwesomeIcon icon={faFilePen} />Edit Products</li>
                        <li className='item'><FontAwesomeIcon icon={faTrash} />Delete Products</li>
                    </ul>
                </li>
                <li className='category'><span onClick={handleCategoriesExpand}>Categories<FontAwesomeIcon className='expand' icon={faChevronDown} /></span>
                    <ul style={{
                        display: categoiesIsExpanded ? 'block' : 'none'
                    }}>
                        <li className='item'><FontAwesomeIcon icon={faEye} />View Categories</li>
                        <li className='item'><FontAwesomeIcon icon={faPlus} />Add Categories</li>
                        <li className='item'><FontAwesomeIcon icon={faFilePen} />Edit Categories</li>
                        <li className='item'><FontAwesomeIcon icon={faTrash} />Delete Categories</li>
                    </ul>
                </li>
                <li className='category'>Orders<FontAwesomeIcon className='expand' icon={faChevronDown} />


                </li>
                <li className='category'>Users<FontAwesomeIcon className='expand' icon={faChevronDown} />

                </li>

            </ul>
            
        </div>
    )
}

export default AdminMenu