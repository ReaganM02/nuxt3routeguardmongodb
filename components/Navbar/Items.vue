<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-1 rounded dark:bg-gray-900 shadow-md">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <NuxtLink to="/">
                <NavbarLogo />
            </NuxtLink>
            <div
                class="hidden w-full md:block md:w-auto"
                id="navbar-default"
            >
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NuxtLink
                            to="/register"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:text-blue-700"
                        >Sign Up</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/login"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:text-blue-700"
                        >
                            Sign In
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>