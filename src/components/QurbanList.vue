<template>
  <div class="qurban-list">
    <SlotCom />
    <QurbanInput @add-Peserta="addPeserta" />
    <table class="Peserta-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Peserta</th>
          <th>Jenis Hewan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <QurbanItem
          v-for="(Peserta, index) in Pesertas"
          :key="index"
          :Peserta="Peserta"
          :index="index"
          @edit-Peserta="editPeserta(index, $event)"
          @remove-Peserta="removePeserta"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import SlotCom from "./TitleSlot.vue";
import QurbanInput from "./QurbanInput.vue";
import QurbanItem from "./QurbanItem.vue";

export default {
  components: {
    QurbanInput,
    QurbanItem,
    SlotCom,
  },
  setup() {
    const Pesertas = ref([]);

    const addPeserta = (Peserta) => {
      Pesertas.value.push(Peserta);
    };

    const removePeserta = (index) => {
      Pesertas.value.splice(index, 1);
    };

    const editPeserta = (index, updatedPeserta) => {
      Pesertas.value[index] = updatedPeserta;
    };

    return {
      Pesertas,
      addPeserta,
      removePeserta,
      editPeserta,
    };
  },
};
</script>

<style scoped>
.qurban-list {
  margin: 5rem auto;
  padding: 2rem;
  width: 800px;
  background-color: #526d82;
  border-radius: 7px;
}

.Peserta-table {
  width: 100%;
  border-collapse: collapse;
}
.Peserta-table th,
.Peserta-table td {
  padding: 8px;
  border: 1px solid;
}
.Peserta-table th {
  background-color: #9db2bf;
  text-align: center;
  color: #fff;
}
td {
  text-align: center;
}
</style>
