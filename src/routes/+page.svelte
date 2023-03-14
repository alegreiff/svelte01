<script lang="ts">
	import { fade } from 'svelte/transition';
	import { blur } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { Cuadro } from '../lib/interfaces';
	import Header from '../components/Header.svelte';
	
	const API = 'https://rickandmortyapi.com/api/character';
	const API2 = 'https://jsonplaceholder.typicode.com/photos';

	let data = [];
	let characters: Cuadro[] = [];
	onMount(async () => {
		const res = await fetch(API2);
		data = await res.json();
		characters = data.slice(0, 22);
		console.log(characters[9]);
	});
</script>
<Header />
<div class="characters">
	{#each characters as character}
	
		<figure transition:blur={{ amount: 10 }}>
			<img
				src={character.url}
				alt={character.title}
				transition:scale={{
					duration: 5000,
					delay: 500,
					opacity: 0.1,
					start: 0.0,
					easing: quintOut
				}}
			/>
			<figcaption>{character.title} - {character.thumbnailUrl}</figcaption>
		</figure>
	{:else}
		<p>loading...</p>
	{/each}
</div>

<style>
	.characters {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}
	figure,
	img {
		width: 100%;
		margin: 0;
	}
</style>
