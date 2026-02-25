import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:15
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
 * @see app/Http/Controllers/PPDBController.php:15
 * @route '/PPDB'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:15
 * @route '/PPDB'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:15
 * @route '/PPDB'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:15
 * @route '/PPDB'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:15
 * @route '/PPDB'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::index
 * @see app/Http/Controllers/PPDBController.php:15
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
 * @see app/Http/Controllers/PPDBController.php:20
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
 * @see app/Http/Controllers/PPDBController.php:20
 * @route '/PPDB/cek-hasil'
 */
cek.url = (options?: RouteQueryOptions) => {
    return cek.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:20
 * @route '/PPDB/cek-hasil'
 */
cek.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cek.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:20
 * @route '/PPDB/cek-hasil'
 */
cek.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cek.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:20
 * @route '/PPDB/cek-hasil'
 */
    const cekForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cek.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:20
 * @route '/PPDB/cek-hasil'
 */
        cekForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cek.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::cek
 * @see app/Http/Controllers/PPDBController.php:20
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
 * @see app/Http/Controllers/PPDBController.php:26
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
 * @see app/Http/Controllers/PPDBController.php:26
 * @route '/PPDB/proses-cek'
 */
prosesCek.url = (options?: RouteQueryOptions) => {
    return prosesCek.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:26
 * @route '/PPDB/proses-cek'
 */
prosesCek.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: prosesCek.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:26
 * @route '/PPDB/proses-cek'
 */
    const prosesCekForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: prosesCek.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PPDBController::prosesCek
 * @see app/Http/Controllers/PPDBController.php:26
 * @route '/PPDB/proses-cek'
 */
        prosesCekForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: prosesCek.url(options),
            method: 'post',
        })
    
    prosesCek.form = prosesCekForm
/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:78
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
 * @see app/Http/Controllers/PPDBController.php:78
 * @route '/PPDB/hasil'
 */
hasil.url = (options?: RouteQueryOptions) => {
    return hasil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:78
 * @route '/PPDB/hasil'
 */
hasil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hasil.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:78
 * @route '/PPDB/hasil'
 */
hasil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hasil.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:78
 * @route '/PPDB/hasil'
 */
    const hasilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hasil.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:78
 * @route '/PPDB/hasil'
 */
        hasilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hasil.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::hasil
 * @see app/Http/Controllers/PPDBController.php:78
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
 * @see app/Http/Controllers/PPDBController.php:93
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
 * @see app/Http/Controllers/PPDBController.php:93
 * @route '/PPDB/download-surat'
 */
downloadSurat.url = (options?: RouteQueryOptions) => {
    return downloadSurat.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:93
 * @route '/PPDB/download-surat'
 */
downloadSurat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadSurat.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:93
 * @route '/PPDB/download-surat'
 */
downloadSurat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadSurat.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:93
 * @route '/PPDB/download-surat'
 */
    const downloadSuratForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: downloadSurat.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:93
 * @route '/PPDB/download-surat'
 */
        downloadSuratForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: downloadSurat.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PPDBController::downloadSurat
 * @see app/Http/Controllers/PPDBController.php:93
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
const PPDB = {
    index: Object.assign(index, index),
cek: Object.assign(cek, cek),
prosesCek: Object.assign(prosesCek, prosesCek),
hasil: Object.assign(hasil, hasil),
downloadSurat: Object.assign(downloadSurat, downloadSurat),
}

export default PPDB