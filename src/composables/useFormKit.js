import { formMessages } from '@/formkit.config.js'

/**
 * Composable para configuraciones reutilizables de FormKit
 */
export function useFormKit() {

  // Configuración base para formularios
  const getFormConfig = (customMessage = null) => ({
    incompleteMessage: customMessage || formMessages.incompleteMessage,
    actions: false,
    classes: {
      form: 'space-y-8'
    }
  })

  // Mensajes de validación estándar con iconos
  const getValidationMessages = (fieldName = 'campo') => ({
    required: `❌ El ${fieldName} es obligatorio`,
    email: `📧 Ingresa un ${fieldName} válido`,
    min: `📏 El ${fieldName} debe ser mayor`,
    max: `📐 El ${fieldName} es demasiado grande`,
    length: `📝 La longitud del ${fieldName} no es válida`
  })

  // Configuración para campos de productos
  const getProductFieldMessages = () => ({
    name: {
      required: '❌ El nombre del producto es obligatorio',
      length: '📏 El nombre debe tener al menos 3 caracteres'
    },
    image: {
      required: '🖼️ La imagen del producto es obligatoria para mostrar el artículo'
    },
    category: {
      required: '🏷️ Selecciona una categoría para organizar el producto correctamente'
    },
    price: {
      required: '💰 El precio del producto es obligatorio para la venta',
      min: '💸 El precio debe ser mayor a 0 para ser válido'
    },
    availability: {
      required: '📦 La cantidad disponible es obligatoria para el inventario',
      min: '📊 Debe haber al menos 1 producto disponible en stock'
    }
  })

  // Opciones para categorías de productos con iconos
  const getProductCategories = () => [
    { label: '-- Selecciona una categoría --', value: '', attrs: { disabled: true } },
    { label: '🥩 Carnes', value: 'Carnes' },
    { label: '🥛 Lácteos', value: 'Lácteos' },
    { label: '🥤 Bebidas', value: 'Bebidas' },
    { label: '🧴 Higiene Personal', value: 'Higiene Personal' }
  ]

  // Configuración para botón submit con estilos profesionales
  const getSubmitConfig = (label = '✨ Enviar') => ({
    label,
    classes: {
      input: 'w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 cursor-pointer'
    }
  })

  return {
    getFormConfig,
    getValidationMessages,
    getProductFieldMessages,
    getProductCategories,
    getSubmitConfig,
    formMessages
  }
}
