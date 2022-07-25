import { createApp } from 'vue'
import App from './App.vue'

import Primevue from "primevue/config";
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App);

app.use(Primevue);
app.component("ButtonText", Button);
app.component("InputText", InputText);
app.component("ToolbarText", Toolbar);

app.mount('#app');
