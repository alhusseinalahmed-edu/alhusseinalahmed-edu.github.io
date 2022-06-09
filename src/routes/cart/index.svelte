
<script>
import { cart, products, category} from "$lib/stores/stores";
import { fade, fly } from 'svelte/transition';
let localCart = $cart;
var totalPrice = 0;
var isShowAlert = false;
  function showAlert(){
    if(isShowAlert)isShowAlert = false;
    isShowAlert = true;
    setTimeout(() => {
      isShowAlert = false;
    }, 2000);
  }
  function countTotal(){
    for(let i = 0; i < localCart.length; i++){
      totalPrice += parseFloat(localCart[i].price) * localCart[i].quantity;
      totalPrice = totalPrice;
    }
  }
  countTotal();
function removeItem(item){
  const id = localCart.indexOf(item);
  item.quantity = 0;
  localCart.splice(id,  1);
  localCart = localCart;
  totalPrice = 0;
  countTotal();
  showAlert();
}
</script>
<div id ="checkout">
  <div class="stats bg-primary text-primary-content">
    <div class="stat">  
      <div class="stat-title text-primary-content">Total</div>
      <div id = "totalPrice" class="stat-value">{totalPrice.toFixed(2)} $</div>
      <div class="stat-actions">
        <button class="btn btn-sm btn-success">Checkout</button>
      </div>
    </div>
</div>
</div>

<div class = "grid-container">
    {#each localCart as product, index}
    <div out:fly in:fade class="grid-item">
      <div class="card card-compact w-50 bg-base-200 shadow-xl">
        <button on:click={() => removeItem(product)} class = "btn bg-primary">Remove</button>
        <figure><img loading ="lazy" class = "posterImage" src={product.poster} alt="Shoes"/></figure>
        <div class="card-body">
          <h2 class="card-title">{product.title}!</h2>
          <p class = "price">{product.price}$</p>
          <p class = "text-primary">Quantity: {product.quantity}</p>
          <div class="card-actions justify-center">
        </div>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{product.category}</div> 
        </div>  
        </div>
      </div>
    </div>
    {/each}
  </div>
{#if isShowAlert}
<div id ="alert" in:fade out:fade class="alert bg-primary shadow-lg text-primary-content">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>An item has been removed from your cart!</span>
  </div>
</div>
{/if}

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    column-gap: 2vw;
    margin-right: auto;
    margin-top: -8vh;
    margin-bottom: 10vh;
    padding: 10px;
    width: 25vw;
    }
    .grid-item {
    position: relative;
    font-size: 12px;
    text-align: center;
    }
    .posterImage{
      max-width: 200px;
      max-height: 200px;
      margin-top: 20px;
    }
    .price{
      position: relative;
      color: green;
      font-size: large;
    }
    #checkout{
      position: relative;
      z-index: 10;
      left: 82.5%;
      top: 15%;
    }
    #totalPrice{
      color: green;
      font-size: auto;
    }
    #alert{
    position: fixed;
    z-index: 10;
    left: 0%;
    top: 90%;
  }
  @media screen and (max-width: 1000px) {

    .grid-container {
      grid-template-columns: auto;
      grid-template-rows: auto; 
      margin-left: 25vw;
      margin-top: 20vh;
  }
  #checkout{
    left: 30vw;
  }
}
  </style>
  