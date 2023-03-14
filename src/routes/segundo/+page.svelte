<script lang="ts">
	import Header from "$comp/Header.svelte";
	import { onMount } from "svelte";
    import type { Filme } from '../../lib/interfaces';

let data = [];
let peliculas:  Filme[] = [];
const API = 'https://script.googleusercontent.com/macros/echo?user_content_key=_uBVRG6tqy7fTlMiU6VUV30c3Q3Y9eIejsIQQ7Gfd9YomVT6mGAMuB_hTLsj6qvPJpzYf1O-q0JgBrK0M9O0Oahxktly3UhMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPYAac8VY7AKE6uqvzv36tCXj91VajedjsMA1KSeIVhq2Wt9HM6TMiIIbrhImEVFLOHiG-YzJEHbm6ayDCapk19Ou8gygHWKRg&lib=MC2fctDTV1jZJyJw05Oc8_wZrH55onN1u';

onMount(async () => {
		const res = await fetch(API);
		data = await res.json();
        let temp = data.datos;
		peliculas = temp.slice(0, 14);
        //peliculas = temp;
		console.log(peliculas[9]);
	});
</script>
<Header />

<h2>Películas</h2>
<div class="peliculas">
    {#each peliculas as peli }
        <div>
            <h1>{ peli.titulo }</h1>
            <button> { peli.pais } </button>
        </div>
    {:else}
        <p>Cargando</p>
    {/each}
</div>
<style>
	.peliculas {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 8px;
	}
    .peliculas div {
        border: 1px crimson solid;
        padding: 1rem;
        font-size: 14px;
        font-weight: bolder;


    }
	
	
</style>