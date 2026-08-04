# changereport-widget

**ChangeReport widget'ının derlenmiş dağıtımı.** Kaynak kod burada değil —
`metaplm/changereport` (private) deposunda.

Bu depo yalnızca `npm run build` çıktısını taşır ve GitHub Pages üzerinden
servis edilir:

```
https://metaplm.github.io/changereport-widget/index.html
```

---

## Ne işe yarar

ENOVIA 3DEXPERIENCE Change Action onay süreçlerinin **hangi adımda, kimde, ne
kadar süredir beklediğini** ölçen bir 3DDashboard widget'ı. Backend yoktur;
tüm veri giriş yapan kullanıcının güvenlik bağlamıyla platformdan çekilir.

## 3DEXPERIENCE'a tanımlama

**Platform Management → Members → Additional Apps → Create Additional App**

| Alan | Değer |
|---|---|
| Type | `Widget` |
| Storage Type | `External` |
| URL | `https://metaplm.github.io/changereport-widget/index.html` |

## Doğrudan tarayıcıdan açılırsa ne olur

**Hiçbir şey — arayüz kurulmaz, sayfa boş kalır.** Bu bir arıza değil, bilinçli
bir karar: widget platform çağrılarına dayanır ve 3DDashboard dışında çalışacak
gerçek verisi yoktur. Uydurma veriyle doldurulmuş bir ekran, gerçek bir raporla
karıştırılabilirdi.

Konsolda tek satır açıklama bulunur. Arayüzün ölçek davranışını sentetik veriyle
görmek isteyen geliştirici adrese `?demo=1` ekler — kazara tetiklenmez.

## Ayarlar

`runtime-config.js` bundle'ın **dışındadır** ve minify **edilmemiştir**. Tarama
penceresi, toplu istek boyutu, zaman aşımları ve eşikler oradan değiştirilir;
dosyanın kendi içinde hangi anahtarın ne yaptığı yazılıdır.

> **Bu depoda ayar değiştirmek Pages dağıtımını bekletir.** Kendi sunucusunda
> servis edilen bir kurulumda `runtime-config.js` düzenlenip F5 yeterliydi;
> burada değişikliğin commit'lenmesi ve Pages'in yeniden yayınlaması gerekir
> (genelde 1-2 dakika). Rebuild yine gerekmez.

### ⚠ `runtime-config.js` bu depoda ORTAMA ÖZELDİR

Bu paket **3DEXPERIENCE bulut** tenant'ında çalışıyor. `search.baseUrl` burada
**dolu** — federated search adresi tenant'a özeldir ve katalogdan gelen değeri
sabitliyoruz:

```
https://r1132101868454-eu1-fedsearch.3dexperience.3ds.com
```

Değer **yalnız origin** olmalı. Kod sonuna
`/federated/search?xrequestedwith=xmlhttprequest` kısmını kendisi ekler; tam
URL yazılırsa yol iki kez oluşur ve istek kırılır.

On-prem tarball'ında aynı alan **boş** kalmalı: orada katalogda `3DSearch`
girdisi yok ve adres 3DSpace host'undan türetiliyor.

**Yeni sürüm yayınlarken bu dosyayı `dist/` çıktısıyla EZMEYİN.** Derlemeden
çıkan kopya `baseUrl`'i boş taşır; üzerine yazılırsa bulutta arama sessizce
çöker.

## Sürüm

Yayınlanan sürüm widget başlığının sağ altında görünür (`v1.10 - MetaPLM`).
Yeni sürüm bu deponun `main` dalına yeni derleme gönderilerek yayınlanır.
