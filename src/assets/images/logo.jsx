

import { component$ } from '@builder.io/qwik';

const Logo = component$(() => {
  return (
    <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 gap-3 whitespace-nowrap dark:text-white flex items-center">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
<path d="M0 0 C7.26 0 14.52 0 22 0 C22 16.5 22 33 22 50 C14.74 50 7.48 50 0 50 C0 33.5 0 17 0 0 Z " fill="#AC7EF5" transform="translate(31,3)"/>
<path d="M0 0 C7.26 0 14.52 0 22 0 C22 16.5 22 33 22 50 C14.74 50 7.48 50 0 50 C0 33.5 0 17 0 0 Z " fill="#19B6F6" transform="translate(3,3)"/>
</svg>
    Webdev.ca
  </span>

  );
});

export default Logo;