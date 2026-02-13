import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
 * @see routes/web.php:6
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
 * @see routes/web.php:6
 * @route '/'
 */
beranda.url = (options?: RouteQueryOptions) => {
    return beranda.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:6
 * @route '/'
 */
beranda.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: beranda.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:6
 * @route '/'
 */
beranda.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: beranda.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:6
 * @route '/'
 */
    const berandaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: beranda.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:6
 * @route '/'
 */
        berandaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: beranda.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:6
 * @route '/'
 */
        berandaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: beranda.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    beranda.form = berandaForm
/**
 * @see routes/web.php:10
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
 * @see routes/web.php:10
 * @route '/profil'
 */
profil.url = (options?: RouteQueryOptions) => {
    return profil.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:10
 * @route '/profil'
 */
profil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profil.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:10
 * @route '/profil'
 */
profil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profil.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:10
 * @route '/profil'
 */
    const profilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profil.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:10
 * @route '/profil'
 */
        profilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profil.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:10
 * @route '/profil'
 */
        profilForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profil.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profil.form = profilForm
/**
 * @see routes/web.php:14
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
 * @see routes/web.php:14
 * @route '/program'
 */
program.url = (options?: RouteQueryOptions) => {
    return program.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:14
 * @route '/program'
 */
program.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: program.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:14
 * @route '/program'
 */
program.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: program.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:14
 * @route '/program'
 */
    const programForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: program.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:14
 * @route '/program'
 */
        programForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: program.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:14
 * @route '/program'
 */
        programForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: program.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    program.form = programForm
/**
 * @see routes/web.php:18
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
 * @see routes/web.php:18
 * @route '/fasilitas'
 */
fasilitas.url = (options?: RouteQueryOptions) => {
    return fasilitas.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:18
 * @route '/fasilitas'
 */
fasilitas.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fasilitas.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:18
 * @route '/fasilitas'
 */
fasilitas.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fasilitas.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:18
 * @route '/fasilitas'
 */
    const fasilitasForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: fasilitas.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:18
 * @route '/fasilitas'
 */
        fasilitasForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fasilitas.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:18
 * @route '/fasilitas'
 */
        fasilitasForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: fasilitas.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    fasilitas.form = fasilitasForm
/**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
export const ppdb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ppdb.url(options),
    method: 'get',
})

ppdb.definition = {
    methods: ["get","head"],
    url: '/ppdb',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
ppdb.url = (options?: RouteQueryOptions) => {
    return ppdb.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
ppdb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ppdb.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
ppdb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ppdb.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
    const ppdbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ppdb.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
        ppdbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ppdb.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:22
 * @route '/ppdb'
 */
        ppdbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ppdb.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ppdb.form = ppdbForm
/**
 * @see routes/web.php:26
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
 * @see routes/web.php:26
 * @route '/kontak'
 */
kontak.url = (options?: RouteQueryOptions) => {
    return kontak.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:26
 * @route '/kontak'
 */
kontak.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kontak.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:26
 * @route '/kontak'
 */
kontak.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kontak.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:26
 * @route '/kontak'
 */
    const kontakForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: kontak.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:26
 * @route '/kontak'
 */
        kontakForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kontak.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:26
 * @route '/kontak'
 */
        kontakForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kontak.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    kontak.form = kontakForm
/**
 * @see routes/web.php:30
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
 * @see routes/web.php:30
 * @route '/bio'
 */
bio.url = (options?: RouteQueryOptions) => {
    return bio.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:30
 * @route '/bio'
 */
bio.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bio.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:30
 * @route '/bio'
 */
bio.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bio.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:30
 * @route '/bio'
 */
    const bioForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: bio.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:30
 * @route '/bio'
 */
        bioForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bio.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:30
 * @route '/bio'
 */
        bioForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: bio.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    bio.form = bioForm