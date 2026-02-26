import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/PPDB',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:13
 * @route '/PPDB'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
export const cek = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cek.url(options),
    method: 'get',
})

cek.definition = {
    methods: ["get","head"],
    url: '/PPDB/cek-hasil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
cek.url = (options?: RouteQueryOptions) => {
    return cek.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
cek.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cek.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
cek.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cek.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
    const cekForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cek.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
        cekForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cek.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:18
 * @route '/PPDB/cek-hasil'
 */
        cekForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cek.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cek.form = cekForm
/**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:24
 * @route '/PPDB/proses-cek'
 */
export const prosesCek = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: prosesCek.url(options),
    method: 'post',
})

prosesCek.definition = {
    methods: ["post"],
    url: '/PPDB/proses-cek',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:24
 * @route '/PPDB/proses-cek'
 */
prosesCek.url = (options?: RouteQueryOptions) => {
    return prosesCek.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:24
 * @route '/PPDB/proses-cek'
 */
prosesCek.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: prosesCek.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:24
 * @route '/PPDB/proses-cek'
 */
    const prosesCekForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: prosesCek.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:24
 * @route '/PPDB/proses-cek'
 */
        prosesCekForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: prosesCek.url(options),
            method: 'post',
        })
    
    prosesCek.form = prosesCekForm
/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
export const hasil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hasil.url(options),
    method: 'get',
})

hasil.definition = {
    methods: ["get","head"],
    url: '/PPDB/hasil',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
hasil.url = (options?: RouteQueryOptions) => {
    return hasil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
hasil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hasil.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
hasil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hasil.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
    const hasilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hasil.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
        hasilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hasil.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:76
 * @route '/PPDB/hasil'
 */
        hasilForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hasil.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hasil.form = hasilForm
/**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
export const downloadSurat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadSurat.url(options),
    method: 'get',
})

downloadSurat.definition = {
    methods: ["get","head"],
    url: '/PPDB/download-surat',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
downloadSurat.url = (options?: RouteQueryOptions) => {
    return downloadSurat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
downloadSurat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadSurat.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
downloadSurat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadSurat.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
    const downloadSuratForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadSurat.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
        downloadSuratForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadSurat.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:91
 * @route '/PPDB/download-surat'
 */
        downloadSuratForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadSurat.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    downloadSurat.form = downloadSuratForm
/**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
export const verifikasi = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifikasi.url(args, options),
    method: 'get',
})

verifikasi.definition = {
    methods: ["get","head"],
    url: '/verifikasi/ppdb/{kode}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
verifikasi.url = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kode: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kode: args.kode,
                }

    return verifikasi.definition.url
            .replace('{kode}', parsedArgs.kode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
verifikasi.get = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifikasi.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
verifikasi.head = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verifikasi.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
    const verifikasiForm = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: verifikasi.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
        verifikasiForm.get = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verifikasi.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::verifikasi
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
        verifikasiForm.head = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verifikasi.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    verifikasi.form = verifikasiForm
const PPDBController = { index, cek, prosesCek, hasil, downloadSurat, verifikasi }

export default PPDBController