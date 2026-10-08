import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

// Multi-page app: each HTML file in /public sets <div id="app" data-page="...">
// and only that page's view is loaded (code-split per page).
const views = {
  home: () => import('./views/HomeView.vue'),
  menu: () => import('./views/MenuView.vue'),
  space: () => import('./views/SpaceView.vue'),
  news: () => import('./views/NewsView.vue'),
  member: () => import('./views/MemberView.vue'),
  reservation: () => import('./views/ReservationView.vue'),
}

const el = document.getElementById('app')
const page = el.dataset.page in views ? el.dataset.page : 'home'

createApp(App, { page, view: defineAsyncComponent(views[page]) }).mount(el)
