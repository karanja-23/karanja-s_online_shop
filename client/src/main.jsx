import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Admin/AuthContext'
import { ProductProvider } from './Components/ProductContext'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
          <RouterProvider router={router}/>
      </ProductProvider>
      
    </AuthProvider>
      
  </StrictMode>,
)
