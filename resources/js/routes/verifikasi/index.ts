import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PPDBController::ppdb
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
export const ppdb = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ppdb.url(args, options),
    method: 'get',
})

ppdb.definition = {
    methods: ["get","head"],
    url: '/verifikasi/ppdb/{kode}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PPDBController::ppdb
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
ppdb.url = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ppdb.definition.url
            .replace('{kode}', parsedArgs.kode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PPDBController::ppdb
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
ppdb.get = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ppdb.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PPDBController::ppdb
 * @see app/Http/Controllers/PPDBController.php:137
 * @route '/verifikasi/ppdb/{kode}'
 */
ppdb.head = (args: { kode: string | number } | [kode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ppdb.url(args, options),
    method: 'head',
})
const verifikasi = {
    ppdb: Object.assign(ppdb, ppdb),
}

export default verifikasi