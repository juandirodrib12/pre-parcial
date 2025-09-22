## Backend con Docker

Para ejecutar el backend se realizaron los siguientes pasos:

1. Instalar Docker Desktop en Windows con soporte WSL2.
2. Construir la imagen desde la carpeta del backend:

   ```bash
   docker build -t bookstore .
   docker run -p 8080:8080 bookstore

El backend queda disponible en: `http://localhost:8080`

Es necesario levantar la imagen es ese puerto, debido a que el fetch se ejecuta con ese endpoint
