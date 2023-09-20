import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Tratamientos } from './components/Tratamientos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Tratamientos
    clase = "peeling"
    nombre= "Peeling"
    descripcion= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique augue id posuere tristique. Curabitur mollis aliquam pharetra. Maecenas mollis lacinia ex ut consequat. Proin at elit fringilla, auctor libero a, aliquet dolor. Sed hendrerit lorem nunc, et tristique ex dictum id. Proin fermentum, felis non fringilla elementum, nulla sapien mattis nulla, vitae cursus orci odio nec ligula. Cras a mi ornare nibh sollicitudin mattis. Maecenas sollicitudin aliquam euismod. Nulla feugiat neque vitae odio feugiat faucibus. Aenean at felis ligula. Aliquam risus eros, efficitur a lectus vel, scelerisque pharetra lectus. Phasellus at turpis eros."
    imagenTratamiento= "COSMETOLOGIA.jpg"
     altImagen= "Cosmetología"
    />
    <Tratamientos
    clase = "depilacion"
    nombre= "Depilación Definitiva"
    descripcion= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique augue id posuere tristique. Curabitur mollis aliquam pharetra. Maecenas mollis lacinia ex ut consequat. Proin at elit fringilla, auctor libero a, aliquet dolor. Sed hendrerit lorem nunc, et tristique ex dictum id. Proin fermentum, felis non fringilla elementum, nulla sapien mattis nulla, vitae cursus orci odio nec ligula. Cras a mi ornare nibh sollicitudin mattis. Maecenas sollicitudin aliquam euismod. Nulla feugiat neque vitae odio feugiat faucibus. Aenean at felis ligula. Aliquam risus eros, efficitur a lectus vel, scelerisque pharetra lectus. Phasellus at turpis eros."
    imagenTratamiento= "depilacion-definitiva-02.jpg"
     altImagen= "Cosmetología"
    />
    <Tratamientos
    clase = "descarga"
    nombre= "Descarga"
    descripcion= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique augue id posuere tristique. Curabitur mollis aliquam pharetra. Maecenas mollis lacinia ex ut consequat. Proin at elit fringilla, auctor libero a, aliquet dolor. Sed hendrerit lorem nunc, et tristique ex dictum id. Proin fermentum, felis non fringilla elementum, nulla sapien mattis nulla, vitae cursus orci odio nec ligula. Cras a mi ornare nibh sollicitudin mattis. Maecenas sollicitudin aliquam euismod. Nulla feugiat neque vitae odio feugiat faucibus. Aenean at felis ligula. Aliquam risus eros, efficitur a lectus vel, scelerisque pharetra lectus. Phasellus at turpis eros."
    imagenTratamiento= "descarga.jpeg"
     altImagen= "Cosmetología"
    />
    <Tratamientos
    clase = "kiaora"
    nombre= "kiaora"
    descripcion= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique augue id posuere tristique. Curabitur mollis aliquam pharetra. Maecenas mollis lacinia ex ut consequat. Proin at elit fringilla, auctor libero a, aliquet dolor. Sed hendrerit lorem nunc, et tristique ex dictum id. Proin fermentum, felis non fringilla elementum, nulla sapien mattis nulla, vitae cursus orci odio nec ligula. Cras a mi ornare nibh sollicitudin mattis. Maecenas sollicitudin aliquam euismod. Nulla feugiat neque vitae odio feugiat faucibus. Aenean at felis ligula. Aliquam risus eros, efficitur a lectus vel, scelerisque pharetra lectus. Phasellus at turpis eros."
    imagenTratamiento= "kiaora_1631-841cd22ffa4106bdec15878648694381-640-0.jpg"
     altImagen= "Cosmetología"
    />
    
  </React.StrictMode>,
)
