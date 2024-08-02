import './bootstrap';
import '../css/app.css'; 
import { createInertiaApp } from '@inertiajs/react'
import React from 'react'
import {createRoot} from 'react-dom/client'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
  // Below you can see that we are going to get all React components from resources/js/Pages folder
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})