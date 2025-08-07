<script setup>
import Link from "@/components/Link.vue";
import { useFormKit } from "@/composables/useFormKit.js";

// Usar composable para configuraciones reutilizables
const { 
  getFormConfig, 
  getProductFieldMessages, 
  getProductCategories,
} = useFormKit();

// Configuraciones específicas para este formulario
const formConfig = getFormConfig('⚠️ Por favor, completa todos los campos requeridos correctamente para continuar.');
const productMessages = getProductFieldMessages();
const productCategories = getProductCategories();

// Clases reutilizables aplicadas directamente
const baseClasses = {
  outer: 'mb-8',
  wrapper: 'space-y-2',
  label: 'block text-sm font-semibold text-gray-800 mb-2',
  input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 hover:border-gray-300 placeholder:text-gray-400',
  help: 'mt-2 text-sm text-gray-600 italic',
  messages: 'mt-3 space-y-2',
  message: 'flex items-center space-x-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 shadow-sm',
  // Estados de validación
  'outer[data-invalid]': 'animate-pulse',
  'input[data-invalid]': 'border-red-400 bg-red-50 text-red-900 placeholder:text-red-400 focus:ring-red-500/20 focus:border-red-500 shadow-red-100',
  'label[data-invalid]': 'text-red-800 font-bold',
  'outer[data-complete]': '',
  'input[data-complete]': 'border-emerald-400 bg-emerald-50 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-emerald-100',
  'label[data-complete]': 'text-emerald-700'
};

const fileClasses = {
  ...baseClasses,
  input: 'w-full px-6 py-8 text-gray-600 bg-gradient-to-br from-gray-50 to-gray-100 border-3 border-dashed border-gray-300 rounded-xl cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-center'
};

const selectClasses = {
  ...baseClasses,
  input: 'w-full px-4 py-3 text-gray-800 bg-white border-2 border-gray-200 rounded-xl shadow-sm cursor-pointer transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 hover:border-gray-300 appearance-none bg-no-repeat bg-right-3 bg-center pr-12 bg-[url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")]'
};
</script>

<template>
  <div>
    <Link to="products">Volver</Link>
    <h1 class="text-4xl font-black my-10 text-gray-800">Nuevo Producto</h1>
    <div class="flex justify-center">
      <div class="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl border border-gray-100">
        <FormKit
            type="form"
            :actions="false"
            :incomplete-message="formConfig.incompleteMessage"
            :classes="{
              form: 'space-y-8',
              message: 'mb-6 flex items-center space-x-3 text-sm font-semibold text-red-800 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg px-6 py-4 shadow-lg'
            }"
        >
          <FormKit
              type="text"
              label="📝 Nombre del producto"
              name="name"
              placeholder="Ej: Manzanas Rojas Premium"
              validation="required|length:3"
              :validation-messages="productMessages.name"
              help="💡 Usa un nombre descriptivo y atractivo para los clientes"
              :classes="baseClasses"
          />

          <FormKit
              type="file"
              label="🖼️ Imagen del producto"
              name="image"
              validation="required"
              :validation-messages="productMessages.image"
              accept=".jpg, .jpeg, .png"
              help="📸 Formatos: JPG, JPEG, PNG • Máximo: 2MB • Resolución recomendada: 800x600px"
              :classes="fileClasses"
          />

          <FormKit
              type="select"
              label="🏷️ Categoría del producto"
              name="category"
              validation="required"
              :validation-messages="productMessages.category"
              :options="productCategories"
              placeholder="Selecciona una categoría"
              help="🗂️ Categoría para organizar y filtrar productos en tu inventario"
              :classes="selectClasses"
          />

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormKit
                type="number"
                label="💰 Precio del producto"
                name="price"
                placeholder="19.99"
                validation="required|min:0.01"
                :validation-messages="productMessages.price"
                min="0.01"
                step="0.01"
                help="💵 Precio de venta en tu moneda local"
                :classes="baseClasses"
            />

            <FormKit
                type="number"
                label="📦 Cantidad disponible"
                name="availability"
                placeholder="50"
                validation="required|min:1"
                :validation-messages="productMessages.availability"
                min="1"
                step="1"
                help="📊 Stock actual en tu inventario"
                :classes="baseClasses"
            />
          </div>

          <FormKit
              type="submit"
              label="✨ Agregar Producto"
              :classes="{
                input: 'w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 cursor-pointer'
              }"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

