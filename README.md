# Report Manager Uygulaması

## Amaç:
Bu proje, hasta raporlarının yönetimini sağlayan bir uygulamadır. Kullanıcılar raporları görüntüleyebilir, detaylarını inceleyebilir, düzenleyebilir ve silebilir.

## Başlangıç:
Projenin çalıştırılabilmesi için aşağıdaki adımları takip etmeniz gerekmektedir:

**JSON Server'ı Başlatın:**
   JSON Server'ı başlatmak için, terminal veya komut satırında şu komutu çalıştırın:
   ```bash
   json-server --watch ./src/db.json --port 5000

3. **Frontend'i Başlatın:**  
Uygulamanın frontend kısmını başlatmak için şu komutu çalıştırın:
```bash
npm run dev
`````

<br><br>
<h2>Uygulama URL'leri:</h2>
<br>
JSON Server'ı başlattıktan sonra aşağıdaki URL'leri kullanarak uygulamanızı inceleyebilirsiniz:
<br>

Raporları Görüntüle: http://localhost:5000/reports
<br>
Tekil Rapor Detayı: http://localhost:5000/reports/

<br>

<br>
<h2>Özellikler:</h2>
<ul>
    <li>Yeni rapor ekleyebilir: /add-report</li>
      <li>Belirli bir raporu detaylı olarak inceleyebilir: /reports/:id</li>
     <li>Bir raporu düzenleyebilir: /reports/edit/:id</li>

</ul>
<br>
<h2>Kullanılan Teknolojiler:</h2>
<ul>
    <li>React: Kullanıcı arayüzünü oluşturmak için.</li>
    <li>JSON Server: Hızlı prototip geliştirmek için sahte bir API sağlar.</li>
    <li>Tailwind CSS: Modern ve duyarlı bir tasarım sağlar.</li>
    <li>Mantine: Kullanıcı arayüzü bileşenleri ve stil yönetimi için modern bir kütüphanedir.</li>
</ul>
<br>

<h2>Geliştirme Notları:</h2>
<ul>
   Bu proje, yapay zeka desteği ile oluşturulmuştur. Backend bilgim sınırlı olduğundan, proje sürecinde yapay zekadan yardım alarak geliştirilmiştir.
</ul>



<br>

<h2>İletişim:</h2>
Staj sürecimin son günü nedeniyle zaman kısıtlamaları yaşanmış olabilir. Proje hakkında daha fazla bilgi almak için benimle iletişime geçebilirsiniz.
