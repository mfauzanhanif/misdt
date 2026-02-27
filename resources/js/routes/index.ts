import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\Controller::beranda
 * @see app/Http/Controllers/Controller.php:9
 * @route '/'
 */
export const beranda = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: beranda.url(options),
    method: 'get',
})

beranda.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Controller::beranda
 * @see app/Http/Controllers/Controller.php:9
 * @route '/'
 */
beranda.url = (options?: RouteQueryOptions) => {
    return beranda.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Controller::beranda
 * @see app/Http/Controllers/Controller.php:9
 * @route '/'
 */
beranda.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: beranda.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Controller::beranda
 * @see app/Http/Controllers/Controller.php:9
 * @route '/'
 */
beranda.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: beranda.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Controller::profil
 * @see app/Http/Controllers/Controller.php:14
 * @route '/profil'
 */
export const profil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(options),
    method: 'get',
})

profil.definition = {
    methods: ["get","head"],
    url: '/profil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Controller::profil
 * @see app/Http/Controllers/Controller.php:14
 * @route '/profil'
 */
profil.url = (options?: RouteQueryOptions) => {
    return profil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Controller::profil
 * @see app/Http/Controllers/Controller.php:14
 * @route '/profil'
 */
profil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Controller::profil
 * @see app/Http/Controllers/Controller.php:14
 * @route '/profil'
 */
profil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profil.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Controller::program
 * @see app/Http/Controllers/Controller.php:19
 * @route '/program'
 */
export const program = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: program.url(options),
    method: 'get',
})

program.definition = {
    methods: ["get","head"],
    url: '/program',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Controller::program
 * @see app/Http/Controllers/Controller.php:19
 * @route '/program'
 */
program.url = (options?: RouteQueryOptions) => {
    return program.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Controller::program
 * @see app/Http/Controllers/Controller.php:19
 * @route '/program'
 */
program.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: program.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Controller::program
 * @see app/Http/Controllers/Controller.php:19
 * @route '/program'
 */
program.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: program.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Controller::fasilitas
 * @see app/Http/Controllers/Controller.php:24
 * @route '/fasilitas'
 */
export const fasilitas = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fasilitas.url(options),
    method: 'get',
})

fasilitas.definition = {
    methods: ["get","head"],
    url: '/fasilitas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Controller::fasilitas
 * @see app/Http/Controllers/Controller.php:24
 * @route '/fasilitas'
 */
fasilitas.url = (options?: RouteQueryOptions) => {
    return fasilitas.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Controller::fasilitas
 * @see app/Http/Controllers/Controller.php:24
 * @route '/fasilitas'
 */
fasilitas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fasilitas.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Controller::fasilitas
 * @see app/Http/Controllers/Controller.php:24
 * @route '/fasilitas'
 */
fasilitas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fasilitas.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Controller::kontak
 * @see app/Http/Controllers/Controller.php:29
 * @route '/kontak'
 */
export const kontak = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontak.url(options),
    method: 'get',
})

kontak.definition = {
    methods: ["get","head"],
    url: '/kontak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Controller::kontak
 * @see app/Http/Controllers/Controller.php:29
 * @route '/kontak'
 */
kontak.url = (options?: RouteQueryOptions) => {
    return kontak.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Controller::kontak
 * @see app/Http/Controllers/Controller.php:29
 * @route '/kontak'
 */
kontak.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontak.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Controller::kontak
 * @see app/Http/Controllers/Controller.php:29
 * @route '/kontak'
 */
kontak.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kontak.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Controller::bio
 * @see app/Http/Controllers/Controller.php:34
 * @route '/bio'
 */
export const bio = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bio.url(options),
    method: 'get',
})

bio.definition = {
    methods: ["get","head"],
    url: '/bio',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Controller::bio
 * @see app/Http/Controllers/Controller.php:34
 * @route '/bio'
 */
bio.url = (options?: RouteQueryOptions) => {
    return bio.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Controller::bio
 * @see app/Http/Controllers/Controller.php:34
 * @route '/bio'
 */
bio.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bio.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Controller::bio
 * @see app/Http/Controllers/Controller.php:34
 * @route '/bio'
 */
bio.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bio.url(options),
    method: 'head',
})