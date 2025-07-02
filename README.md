🚀 Velo Copy – UI Clone en Wails + React

Repositorio: velo-copy  
Autor: atrox39  
Tecnologías: Golang (Wails) + React

---
Previsualización

![Preview](/preview.png)

---

🧩 Descripción

Velo Copy es un proyecto de clonación visual de una interfaz inspirada en un *mockup* compartido en Instagram. La aplicación fue desarrollada como un experimento para llevar una UI conceptual a una aplicación de escritorio funcional, utilizando el framework Wails, que combina el backend en Golang con un frontend moderno basado en React.

Este proyecto busca demostrar cómo se puede transformar un diseño compartido en redes sociales en una aplicación de escritorio multiplataforma y con alto rendimiento.

---

🎯 Objetivos del Proyecto

- Reproducir fielmente la UI de un diseño tipo Velo visto en Instagram del [mockup](https://www.instagram.com/p/DLl2snPJHtV) el autor es Mahmudul Hasan.
- Integrar una arquitectura funcional en React sobre Wails.
- Demostrar la capacidad de Wails para manejar aplicaciones de escritorio modernas.
- Probar un flujo de trabajo eficiente para clonar diseños visuales en producción real.

---

🛠️ Tecnologías Usadas

- Backend: Golang + Wails
- Frontend: React (con posible soporte para Tailwind CSS)
- Desktop: Webview a través de Wails

---

🚀 Instalación y Ejecución

Requisitos:
- Go 1.20+
- Node.js y npm
- Wails CLI instalado:
  go install github.com/wailsapp/wails/v2/cmd/wails@latest

Pasos:

1. Clona el repositorio
   git clone https://github.com/atrox39/velo-copy.git
   cd velo-copy

2. Instala las dependencias del frontend
   cd frontend
   npm install
   npm run build
   cd ..

3. Ejecuta la aplicación
   wails dev

---

📦 Build para Producción

wails build

El ejecutable final se generará en la carpeta `build/bin`.

---

📸 Capturas

(Agrega aquí capturas de pantalla del proyecto replicando el diseño del mockup de Instagram)

---

👨‍💻 Autor

Desarrollado por: atrox39  
Repositorio: https://github.com/atrox39/velo-copy

---

📝 Licencia

Este proyecto está bajo la licencia MIT.
