<script>
	import { fade } from 'svelte/transition';
  import { cart, products, category } from "$lib/stores/stores";
  var isShowAlert = false;
  function showAlert(){
    if(isShowAlert)isShowAlert = false;
    isShowAlert = true;
    setTimeout(() => {
      isShowAlert = false;
    }, 2000);
  }
</script>
<div class="categorySelect">
  <div id="categories" class="btn-group">
    <button 
    on:click={() => {
    category.update(n => "shoes");
  }}
    class="btn">Shoes</button>
    <button 
    on:click={() => {
    category.update(n => "computers");
  }}
    class="btn">Gaming</button>
    <button 
      on:click={() => {
    category.update(n => "phones");
  }}
    class="btn">Phones</button>
  </div>
</div>

<div class = "grid-container">
  {#each products[$category] as product, index}
  <div class="grid-item">
    <div in:fade out:fade class="card card-compact w-50 bg-base-200 shadow-xl">
      <figure><img loading = "lazy" class = "posterImage" src={product.poster} alt="Shoes"/></figure>
      <div class="card-body">
        <h2 class="card-title">{product.title}!</h2>
        <p class = "price">{product.price}$</p>
        <div class="card-actions justify-center">
        <button
        on:click={() => {
          if($cart.includes(product))
          {
            product.quantity +=1;
          }
          else
          {
            product.quantity +=1;
            $cart.push(product);
            $cart = $cart;
          }
          showAlert();
        }}      
        class="btn btn-primary">Add to cart</button>
      </div>
      <div class="card-actions justify-center">
        <div class="badge badge-outline">{product.category}</div> 
      </div>
        </div>
    </div>
  </div>
  {/each}
</div>
{#if isShowAlert}
<div id ="alert" in:fade out:fade class="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>An item has been added to your cart!</span>
  </div>
</div>
{/if}


<style>
  .grid-container {
  display: grid;
  grid-template-columns: 20vw 20vw 20vw 20vw;
  margin: auto;
  margin-top: 2vh;
  margin-bottom: 10vh;
  gap: 10px;
  padding: 10px;
  }
  .grid-item {
  padding: 20px;
  font-size: 12px;
  text-align: center;
  }
  .posterImage{
    max-width: 200px;
    max-height: 200px;
    margin-top: 20px;
  }
  #categories{
    position: relative;
    margin-top: 10vh;
    margin-left: 0vw;
  }
  .price{
    position: relative;
    color: green;
    font-size: large;
  }
  .categorySelect{
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }
  #alert{
    position: fixed;
    z-index: 10;
    left: 0%;
    top: 90%;
  }
  @media screen and (max-width: 1000px) {
    #categories{
      left: 17.5%;
      margin-left: -15vw;
    }
    .grid-container {
      grid-template-columns: auto;
      grid-template-rows: auto; 
  }

  }
</style>