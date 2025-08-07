// Configuración global de FormKit con diseño profesional y reutilizable
export const formkitConfig = {
  classes: {
    global: {
      // Contenedor exterior principal
      outer: 'mb-8',

      // Contenedor interno  
      wrapper: 'space-y-2',

      // Etiquetas de campos
      label: 'block text-sm font-semibold text-gray-800 mb-2',

      // Campos de entrada base
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70',

      // Contenedor de mensajes con diseño profesional
      messages: 'mt-3 space-y-2',
      message: 'flex items-center space-x-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 shadow-sm',

      // Texto de ayuda
      help: 'mt-2 text-sm text-gray-600 italic',

      // Estados de validación - error
      'outer[data-invalid]': 'animate-pulse',
      'input[data-invalid]': 'border-red-400 bg-red-50 text-red-900 placeholder:text-red-400 focus:ring-red-500/20 focus:border-red-500 shadow-red-100',
      'label[data-invalid]': 'text-red-800 font-bold',

      // Estados válidos - éxito
      'outer[data-complete]': '',
      'input[data-complete]': 'border-green-400 bg-green-50 focus:ring-green-500/20 focus:border-green-500 shadow-green-100',
      'label[data-complete]': 'text-green-700'
    },

    // Configuración específica para formularios
    form: {
      form: 'space-y-8',
      actions: 'mt-10 pt-8 border-t-2 border-gray-100',
      message: 'mb-6 flex items-center space-x-3 text-sm font-semibold text-red-800 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg px-6 py-4 shadow-lg'
    },

    // Botón de submit con gradiente profesional
    submit: {
      input: 'w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:transform-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none'
    },

    // Campos de archivo con diseño atractivo
    file: {
      input: 'w-full px-6 py-8 text-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 border-3 border-dashed border-gray-300 rounded-xl cursor-pointer transition-all duration-300 hover:border-indigo-400 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 text-center file:hidden',
      noFiles: 'text-center text-gray-500 py-4 font-medium',
      fileItem: 'flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 shadow-sm',
      fileName: 'text-sm text-gray-800 font-medium truncate',
      fileRemove: 'ml-3 text-red-500 hover:text-red-700 cursor-pointer text-sm font-bold px-2 py-1 rounded hover:bg-red-50 transition-colors'
    },

    // Campos select con flecha personalizada
    select: {
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 appearance-none bg-no-repeat bg-right-3 bg-center pr-12 bg-[url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")]',
      option: 'text-gray-800 bg-white py-2 px-4 hover:bg-gray-50'
    },

    // Campos numéricos sin spinners
    number: {
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
    },

    // Campos de texto estándar
    text: {
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 placeholder:text-gray-400'
    },

    // Campos de textarea expandibles
    textarea: {
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 placeholder:text-gray-400 resize-y min-h-[120px]'
    },

    // Campos de email con validación visual
    email: {
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 placeholder:text-gray-400'
    },

    // Campos de contraseña seguros
    password: {
      input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-gray-300 placeholder:text-gray-400'
    }
  }
}

// Mensajes predeterminados en español
export const formMessages = {
  incompleteMessage: '⚠️ Por favor, completa todos los campos requeridos correctamente para continuar.',
  submitLabel: '✨ Enviar',

  // Mensajes de validación comunes
  validation: {
    required: '❌ Este campo es obligatorio',
    email: '📧 Ingresa un email válido',
    min: '📏 El valor es demasiado pequeño',
    max: '📐 El valor es demasiado grande',
    length: '📝 La longitud no es válida'
  }
}
