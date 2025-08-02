<script setup>

import Link from "@/components/Link.vue";
</script>

<template>
  <div>
    <Link to="products">Volver</Link>
    <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>
    <div class="flex justify-center bg-white shadow">
      <div class="mt-10 p-10 w-full 2xl:w-2/4">
        <FormKit
            type="form"
            submit-label="Agregar Producto"
        >
          <FormKit
              type="text"
              label="Nombre"
              name="name"
              placeholder="Nombre del producto"
              validation="required"
              :validation-messages="{
                required: 'El nombre del producto es obligatorio'
                }
              "
          />
          <FormKit
              type="file"
              label="Imagen Producto"
              name="image"
              validation="required"
              :validation-messages="{
                required: 'La imagen del producto es obligatorio'
                }
              "
              accept=".jpg, .jpeg, .png"
          />
          <FormKit
              type="select"
              label="Categoría"
              name="category"
              validation="required"
              :validation-messages="{
                required: 'La categoría del producto es obligatoria'
                }
              "
              :options="['Carnes', 'Lácteos', 'Bebidas', 'Higiene Personal']"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

