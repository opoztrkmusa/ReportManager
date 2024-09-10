# Report Manager Uygulaması

## Amaç:
Bu proje, hasta raporlarının yönetimini sağlayan bir uygulamadır. Kullanıcılar raporları görüntüleyebilir, detaylarını inceleyebilir, düzenleyebilir ve silebilir.

## Başlangıç:
Projenin çalıştırılabilmesi için aşağıdaki adımları takip etmeniz gerekmektedir:

1. **JSON Server'ı Başlatın:**  
   JSON Server'ı başlatmak için, terminal veya komut satırında şu komutu çalıştırın:
   ```bash
   json-server --watch ./src/db.json --port 5000

2. **Frontend'i Başlatın:**  
Uygulamanın frontend kısmını başlatmak için şu komutu çalıştırın:
bash
Kodu kopyala
npm run dev
Uygulama URL'leri:
JSON Server'ı başlattıktan sonra aşağıdaki URL'leri kullanarak uygulamanızı inceleyebilirsiniz:
<br>
Raporları Görüntüle: http://localhost:5000/reports
Tekil Rapor Detayı: http://localhost:5000/reports/
Özellikler:
Yeni rapor ekleyebilir: /add-report
Mevcut raporları görüntüleyebilir: /reports
Belirli bir raporu detaylı olarak inceleyebilir: /reports/:id
Bir raporu düzenleyebilir: /reports/edit/:id
Kullanılan Teknolojiler:
React: Kullanıcı arayüzünü oluşturmak için.
JSON Server: Hızlı prototip geliştirmek için sahte bir API sağlar.
Tailwind CSS: Modern ve duyarlı bir tasarım sağlar.
Geliştirme Notları:
Bu proje, yapay zeka destekli bir rehber ile oluşturulmuştur. Proje sürecinde bazı tasarım detaylarına yeterince odaklanılmamış olabilir, bu nedenle öneri ve iyileştirmelere açığız.

İletişim:
Staj sürecimin son günü nedeniyle zaman kısıtlamaları yaşanmış olabilir. Proje hakkında daha fazla bilgi almak için benimle iletişime geçebilirsiniz.
