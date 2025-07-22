<script setup>

import Link from "@/components/Link.vue";
</script>

<template>
  <div>
    <Link to="products">Volver</Link>
    <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>
    <div class="flex justify-center bg-white shadow">

    </div>
    <FormKit type="form">
      <FormKit type="text" label="Nombre" name="name" />
    </FormKit>
  </div>
</template>

