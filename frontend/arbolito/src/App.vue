<script setup>
import { ref } from 'vue'
import ArbolModular from './components/ArbolModular.vue'

// Estas variables están vinculadas a los controles (v-model)
// y se pasan al componente ArbolModular
const tipoSeleccionado = ref('pino');
const colorHojas = ref('#2ecc71');
const colorTronco = ref('#5d4037');
const tamano = ref(300);

// Esta función simula lo que harías al recibir datos de una API
const cargarDatosDeApi = () => {
  // Simulación: supongamos que la API dice que es un pino otoñal
  tipoSeleccionado.value = 'pino';
  colorHojas.value = '#e67e22';
};
</script>

<template>
  <div class="contenedor-principal">
    
    <div class="panel-control">
      <h3>Configuración del Árbol</h3>
      
      <div class="control-group">
        <label>Tipo de Árbol:</label>
        <select v-model="tipoSeleccionado">
          <option value="pino">Pino (Nórdico)</option>
          <option value="normal">Normal (Frondoso)</option>
        </select>
      </div>

      <div class="control-group">
        <label>Color de Hojas:</label>
        <input type="color" v-model="colorHojas">
      </div>

      <div class="control-group">
        <label>Color del Tronco:</label>
        <input type="color" v-model="colorTronco">
      </div>

      <button @click="cargarDatosDeApi" class="btn-api">
        Simular Carga de API
      </button>
    </div>

    <div class="visualizacion">
      <ArbolModular 
        :tipo="tipoSeleccionado" 
        :colorHojas="colorHojas" 
        :colorTronco="colorTronco"
        :tamanoPx="tamano"
      />
      <p>Representación de: <strong>{{ tipoSeleccionado.toUpperCase() }}</strong></p>
    </div>

  </div>
</template>

<style scoped>
.contenedor-principal {
  display: flex;
  gap: 40px;
  padding: 20px;
  font-family: sans-serif;
  justify-content: center;
  align-items: flex-start;
}

.panel-control {
  background: #242424;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #444;
  text-align: left;
}

.control-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-size: 0.9em;
  color: #ccc;
}

select, input[type="color"] {
  padding: 8px;
  border-radius: 4px;
  background: #333;
  color: white;
  border: 1px solid #555;
  cursor: pointer;
}

.btn-api {
  margin-top: 10px;
  background: #42b883;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.btn-api:hover {
  background: #33a06f;
}

.visualizacion {
  text-align: center;
}
</style>