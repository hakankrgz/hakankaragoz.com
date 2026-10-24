# hakankaragoz.com
## Yerel çalışma

```bash
python3 -m http.server 4173
```

Ardından `http://localhost:4173` adresini açın.

## Yapı

- Saf HTML, CSS ve JavaScript
- Harici JavaScript bağımlılığı yok
- Responsive tasarım
- Hareket azaltma tercihi desteği
- Semantik HTML ve klavye erişilebilirliği
- GitHub Pages ile uyumlu

## Tarayıcı güvenliği

HTML belgeleri, kaynakları aynı alan adıyla sınırlayan bir Content Security Policy (CSP) ve `strict-origin-when-cross-origin` referrer politikası içerir. Inline JavaScript çalıştırılması, `eval`, çerçeve yükleme, form gönderimi ve ağ API çağrıları varsayılan olarak engellenir. Ana sayfanın JSON-LD bloğu ile 404 sayfasının CSS bloğu yalnızca içeriklerine özel SHA-256 hash değerleriyle izinlidir; bu bloklar değişirse CSP hash değerleri de güncellenmelidir.

GitHub Pages üzerinde CSP HTML meta etiketiyle uygulanır. `frame-ancestors`, HSTS, `X-Content-Type-Options` ve `Permissions-Policy` HTTP yanıt başlığı gerektirir; meta etiketleri bunların yerine geçmez. Bu korumalar için özel yanıt başlıklarını destekleyen hosting/CDN yapılandırması gerekir.
