<script lang="ts">
	import { fade } from 'svelte/transition';
    import { blur } from 'svelte/transition';
	import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { scale } from 'svelte/transition';



    
    import { onMount } from "svelte";
    const API = "https://rickandmortyapi.com/api/character";
    let data = [];
    let characters:any[] = [];
    onMount(async () => {
      const res = await fetch(API);
      data = await res.json();
      characters = data.results;
      console.log( characters[9] )
    });
  </script>
  
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
  
  <div class="characters">
    {#each characters as character}
      <figure  transition:blur="{{amount: 10}}">
        <img src={character.image} alt={character.name}
        
        transition:scale="{{duration: 5000, delay: 500, opacity: 0.1, start: 0.0, easing: quintOut}}"
         />
        <figcaption>{character.name}- {character.status}</figcaption>
      </figure>
    {:else}
      <p>loading...</p>
    {/each}
    

  </div>