import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Paginator from 'primevue/paginator';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);

app.component('Paginator', Paginator);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app')
