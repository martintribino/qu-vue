<script>
  import { getPlanets } from '../services/service'

  export default {
    name: "Test",
    data () {
      return {
        currentPage: 1,
        totalRecords: 0,
        rows: 10,
        rowsPerPageOptions: [10],
        planets: [],
        loading: true,
        errored: false
      }
    },
    mounted () {
      this.getPaginatedPlanets(this.currentPage)
    },  
    methods: {
      onPaginate (e) {
        this.loading = true
        this.getPaginatedPlanets(e.page + 1)
      }, 
      getPaginatedPlanets (p) {
        getPlanets(p)
          .then(response => {
            this.totalRecords = response.data.count
            this.planets = response.data.results.slice().sort((a, b) => a.name.localeCompare(b.name));
          })
          .catch(error => {
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    }
  };
</script>
<template>
  <div class="overflow-auto">
    <DataTable :value="planets" paginator :rows="rows" :loading="loading" :lazy="true" :currentPage="currentPage"
        :totalRecords="totalRecords" :page.sync="currentPage" tableStyle="min-width: 50rem" @page="onPaginate"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorPosition="both">
      <Column field="name" header="Name"></Column>
      <Column field="climate" header="Climate"></Column>
      <Column field="diameter" header="Diameter"></Column>
      <Column field="gravity" header="Gravity"></Column>
      <Column field="population" header="Population"></Column>
      <Column field="terrain" header="Terrain"></Column>
    </DataTable>
  </div>
</template>
