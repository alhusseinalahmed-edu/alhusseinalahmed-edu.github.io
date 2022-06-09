<script>
  import "../app.css";
  import { theme, THEMES } from "$lib/stores/stores";

  const toggleTheme = () => {
    $theme = $theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  };
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</svelte:head>

<main>
  <div class="h-screen drawer w-full">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              /></svg
            >
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <!-- Navbar left item -->
          ❄
          <div class="inline-block">
            <div class="form-control">
              <label class="cursor-pointer label">
                <input
                  type="checkbox"
                  class="toggle toggle-primary"
                  checked={$theme !== THEMES.DARK}
                  on:change={toggleTheme}
                />
              </label>
            </div>
          </div>
          ☀️
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            
            <li><a href="/">Buy</a></li>
            <li><a href="/cart">Checkout</a></li>
            <li>
              <a href="https://github.com/alhusseinalahmed-edu">
                <i class="fa fa-github-square" style="font-size:36px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->

      <slot />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay" />
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li><a href="/">Home</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </div>
  </div>
</main>

<style>

.w-full{
    position: fixed;
    z-index: 1000;
  }
</style>
