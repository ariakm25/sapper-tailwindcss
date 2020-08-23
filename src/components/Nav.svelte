<script>
  export let segment;
</script>

<nav class="capitalize flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="container m-auto flex items-center">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45
          3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
          0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2
          6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45
          9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
          0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
      </svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <ul
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto
      justify-end">
      <li>
        <a
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
          hover:text-white mr-4"
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">
          home
        </a>
      </li>
      <li>
        <a
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
          hover:text-white mr-4"
          aria-current={segment === 'about' ? 'page' : undefined}
          href="about">
          about
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li>
        <a
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
          hover:text-white mr-4"
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          blog
        </a>
      </li>
    </ul>
  </div>
</nav>
