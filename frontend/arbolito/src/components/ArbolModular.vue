<template>
  <div class="contenedor-arbol" :style="{ width: tamanoPx + 'px' }">
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
      
      <rect 
        x="42" 
        y="85" 
        width="16" 
        height="35" 
        rx="2" 
        :fill="colorTronco" 
      />

      <g v-if="tipo === 'pino'">
        <polygon points="50,15 20,55 80,55" :fill="colorHojas" />
        <polygon points="50,35 15,75 85,75" :fill="colorHojas" />
        <polygon points="50,55 10,95 90,95" :fill="colorHojas" />
      </g>

      <g v-else>
        <circle cx="50" cy="45" r="28" :fill="colorHojas" />
        <circle cx="30" cy="65" r="22" :fill="colorHojas" />
        <circle cx="70" cy="65" r="22" :fill="colorHojas" />
        <circle cx="50" cy="75" r="25" :fill="colorHojas" />
      </g>
      
    </svg>
  </div>
</template>

<script setup>
/**
 * VARIABLES EXPUESTAS (PROPS)
 * Estas variables reciben los valores desde App.vue.
 * Cuando tu API actualice los valores en App.vue, este componente se redibujará solo.
 */
defineProps({
  // Define si se dibuja el pino o el círculo ('pino' | 'normal')
  tipo: {
    type: String,
    default: 'pino'
  },
  // Color hexadecimal para la copa del árbol
  colorHojas: {
    type: String,
    default: '#2D5A27'
  },
  // Color hexadecimal para el tronco
  colorTronco: {
    type: String,
    default: '#5D4037'
  },
  // Ancho del componente en píxeles
  tamanoPx: {
    type: Number,
    default: 200
  }
});
</script>

<style scoped>
.contenedor-arbol {
  display: flex;
  justify-content: center;
  /* El transition permite que los colores cambien suavemente */
  transition: all 0.4s ease-in-out;
}

svg {
  width: 100%;
  height: auto;
}
</style>