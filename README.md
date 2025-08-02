# 🏪 POS Vue - Sistema de Punto de Venta

Un sistema de punto de venta moderno y completo desarrollado con Vue.js 3, diseñado para pequeñas y medianas empresas que necesitan gestionar sus productos, ventas y operaciones comerciales de manera eficiente.

## 📋 Características Principales

- **🛍️ Interfaz de Tienda**: Experiencia de usuario intuitiva para clientes
- **👨‍💼 Panel de Administración**: Gestión completa del negocio
- **📦 Gestión de Productos**: Crear, editar y categorizar productos
- **📊 Control de Ventas**: Seguimiento y análisis de transacciones
- **📱 Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **⚡ Rendimiento Optimizado**: Carga rápida y navegación fluida

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue.js 3** (v3.5.17) - Framework progresivo de JavaScript
- **Vue Router** (v4.5.1) - Enrutamiento SPA
- **Pinia** (v3.0.3) - Gestión de estado reactivo
- **TailwindCSS** (v4.1.11) - Framework de CSS utility-first
- **FormKit** (v1.6.9) - Formularios avanzados con validación

### Herramientas de Desarrollo
- **Vite** (v7.0.0) - Build tool de próxima generación
- **Vue DevTools** (v7.7.7) - Herramientas de desarrollo y debugging
- **ESM** - Módulos ES6 nativos

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd pos-vue
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 4. Compilar para producción
```bash
npm run build
```

### 5. Vista previa de la build de producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
pos-vue/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── AdminNav.vue     # Navegación del panel admin
│   │   ├── MainNav.vue      # Navegación principal
│   │   ├── Link.vue         # Componente de enlaces
│   │   └── Logo.vue         # Logotipo de la aplicación
│   ├── views/               # Vistas/Páginas principales
│   │   ├── ShopView.vue     # Página principal de la tienda
│   │   └── admin/           # Vistas del panel administrativo
│   │       ├── AdminLayout.vue      # Layout base del admin
│   │       ├── ProductsView.vue     # Lista de productos
│   │       ├── NewProductView.vue   # Crear nuevo producto
│   │       └── SalesView.vue        # Gestión de ventas
│   ├── router/              # Configuración de rutas
│   ├── assets/              # Recursos estáticos
│   └── main.js              # Punto de entrada de la aplicación
├── public/                  # Archivos públicos
└── package.json            # Dependencias y scripts
```

## 🌐 Rutas de la Aplicación

- `/` - Tienda principal (vista pública)
- `/admin` - Panel de administración
  - `/admin/productos` - Gestión de productos
  - `/admin/productos/nuevo` - Crear nuevo producto
  - `/admin/ventas` - Control de ventas

## 🎨 Características de UI/UX

- **Diseño Moderno**: Interfaz limpia y profesional
- **Responsivo**: Adaptable a todos los tamaños de pantalla
- **Accesible**: Cumple con estándares de accesibilidad web
- **Rápido**: Optimizado para carga rápida y navegación fluida
- **Intuitivo**: Experiencia de usuario pensada para facilidad de uso

## 🛡️ Validación de Formularios

El sistema incluye validación robusta para:
- Campos obligatorios
- Formato de archivos de imagen
- Categorización de productos
- Mensajes de error personalizados

## 💻 Entorno de Desarrollo Recomendado

- **IDE**: [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- **WebStorm** (configurado como editor predeterminado)
- **Extensiones recomendadas**: Vue Language Features, TailwindCSS IntelliSense

## 📚 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción

## 🤝 Contribución

Este proyecto está en desarrollo activo. Las contribuciones son bienvenidas siguiendo las mejores prácticas de desarrollo con Vue.js.

## 📄 Licencia

Este proyecto es de uso educativo y está desarrollado como parte de un curso de Vue.js.

---

*Desarrollado con ❤️ usando Vue.js 3 y las mejores prácticas de desarrollo frontend moderno.*
