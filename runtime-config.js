// ============================================================================
// RUNTIME CONFIG — build sirasinda uretildi (varsayilanlar + widget-config.js).
// Bu dosya bundle DISINDADIR ve minify EDILMEMISTIR.
// Degeri degistirmek icin REBUILD GEREKMEZ: bu dosyayi duzenleyip
// widget sayfasini yenilemeniz (F5) yeterlidir.
//
// TUM anahtarlar burada listelenir — varsayilan degerleriyle bile.
// (v1.8'de bu dosya yalniz widget-config.js'tekileri tasiyordu ve dalga 1c
//  ayarlari hic gorunmuyordu; v1.9'da duzeltildi.)
//
// BUGUN SUREYI HARCAYAN ADIM — dalga 1c, toplu rota hidrasyonu:
//   perf.bulkChunkSize     — istek basina rota sayisi. Sunucu buyuk parcada
//                            zaman asimina ugruyorsa DUSURUN (50 -> 25).
//   perf.bulkConcurrency   — es zamanli toplu istek. Sunucu rahatsa artirin.
//   perf.bulkTimeoutMs     — tek toplu istegin zaman asimi.
//   perf.hydrateTtlDays    — tamamlanmis rotanin onbellekte kalma suresi.
//   search.hydrate         — false yapilirsa 1c tumden kapanir (sure kartlari
//                            veri alamaz, sayaclar calismaya devam eder).
//
// KAPSAM:
//   search.windowMonths    — kac ay geriye taranir (donem dugmeleriyle hizali).
//   search.pageSize        — sunucu tavani 1000; yukseltmeyin, istek reddedilir.
//   thresholds.overdueDays — termin tarihi olmayan gorevler icin gecikme esigi.
//
//
// --- ASAGIDAKILER YALNIZ perf.detailHarvest:true IKEN ANLAMLI ---
// Su an false. Bu degerleri degistirmek hicbir sey yapmaz; gerekirse
// asagidaki blogu perf icine tasiyin.
//   "routeWindowLimit": 1000
//   "discoveryTimeoutMs": 30000
//   "singleTimeoutMs": 15000
//   "singleParallel": 5
//   "coldBudgetMs": 180000
//   "warmBudgetMs": 90000
//   "caReadBatch": 100
//   "caReadTimeoutMs": 30000
//   "caReadTotalBudgetMs": 30000
// ============================================================================
window.__WIDGET_RUNTIME_CONFIG__ = Object.assign(
    window.__WIDGET_RUNTIME_CONFIG__ || {},
    {
        "imageBaseUrl": null,
        "perf": {
            "detailHarvest": false,
            "hydrateTtlDays": 14,
            "bulkChunkSize": 50,
            "bulkConcurrency": 2,
            "bulkTimeoutMs": 20000,
            "completedRetentionDays": 100,
            "maxStoredRoutes": 5000
        },
        "thresholds": {
            "overdueDays": 7,
            "agingBuckets": [
                3,
                7,
                14
            ],
            "defaultPeriodDays": 90
        },
        "search": {
            "enabled": true,
            "baseUrl": "",
            "pageSize": 1000,
            "windowMonths": 3,
            "maxResults": 20000,
            "records": false,
            "hydrate": true,
            "trendMonths": 6,
            "monthCacheDays": 14,
            "timeoutMs": 30000
        }
    }
);
