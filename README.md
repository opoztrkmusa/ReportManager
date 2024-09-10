
    <h1>Report Manager Uygulaması</h1>
    <br>

    <h2>Amaç:</h2>
    <p>Bu proje, hasta raporlarının yönetimini sağlayan bir uygulamadır. Kullanıcılar raporları görüntüleyebilir, detaylarını inceleyebilir, düzenleyebilir ve silebilir.</p>
    <br>

    <h2>Başlangıç:</h2>
    <p>Projenin çalıştırılabilmesi için aşağıdaki adımları takip etmeniz gerekmektedir:</p>
    <ol>
        <li><strong>JSON Server'ı Başlatın:</strong><br>
            JSON Server'ı başlatmak için, terminal veya komut satırında şu komutu çalıştırın:
            <pre><code>json-server --watch ./src/db.json --port 5000</code></pre>
        </li>
        <li><strong>Frontend'i Başlatın:</strong><br>
            Uygulamanın frontend kısmını başlatmak için şu komutu çalıştırın:
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>
    <br>

    <h2>Uygulama URL'leri:</h2>
    <p>JSON Server'ı başlattıktan sonra aşağıdaki URL'leri kullanarak uygulamanızı inceleyebilirsiniz:</p>
    <ul>
        <li><strong>Raporları Görüntüle:</strong> <a href="http://localhost:5000/reports">http://localhost:5000/reports</a></li>
        <li><strong>Tekil Rapor Detayı:</strong> <a href="http://localhost:5000/reports/:id">http://localhost:5000/reports/:id</a></li>
    </ul>
    <br>

    <h2>Özellikler:</h2>
    <ul>
        <li>Yeni rapor ekleyebilir: <code>/add-report</code></li>
        <li>Mevcut raporları görüntüleyebilir: <code>/reports</code></li>
        <li>Belirli bir raporu detaylı olarak inceleyebilir: <code>/reports/:id</code></li>
        <li>Bir raporu düzenleyebilir: <code>/reports/edit/:id</code></li>
    </ul>
    <br>

    <h2>Kullanılan Teknolojiler:</h2>
    <ul>
        <li>React</li>
        <li>JSON Server</li>
        <li>Tailwind CSS</li>
    </ul>
    <br>

    <h2>Geliştirme Notları:</h2>
    <p>Bu proje yapay zeka destekli bir rehber ile oluşturulmuştur. Proje sürecinde bazı tasarım detaylarına yeterince odaklanılmamış olabilir, bu nedenle öneri ve iyileştirmelere açığız.</p>
    <br>

    <h2>İletişim:</h2>
    <p>Staj sürecimin son günü nedeniyle zaman kısıtlamaları yaşanmış olabilir. Proje hakkında daha fazla bilgi almak için benimle iletişime geçebilirsiniz.</p>

