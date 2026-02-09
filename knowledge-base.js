// Smart Assistant Database (Multi-Language)
// Structure: { keywords: [...], answers: { en: "...", zh: "...", ms: "..." } }

const knowledgeBase = [
    // ---------------------------------------------------------
    // 1. SPECIFIC BUSINESS INFO
    // ---------------------------------------------------------
    {
        // Location / Address
        keywords: ["location", "address", "where", "shop", "branch", "map", "place", "地址", "地点", "哪里", "分行", "地图", "位置", "lokasi", "kedai", "mana", "cawangan", "peta", "tempat"],
        answers: {
            en: "We have two branches in Kuching:<br>1. **Kota Sentosa (Batu 7)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>View Map</a><br>2. **Aeroville Mall (1st Floor)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>View Map</a>",
            zh: "我们在古晋有两家分行：<br>1. **Kota Sentosa (七哩)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>查看地图</a><br>2. **Aeroville Mall (一楼)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>查看地图</a>",
            ms: "Kami ada dua cawangan di Kuching:<br>1. **Kota Sentosa (Batu 7)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>Lihat Peta</a><br>2. **Aeroville Mall (Tingkat 2)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>Lihat Peta</a>"
        }
    },
    {
        // Operating Hours
        keywords: ["hours", "open", "close", "time", "when", "business hour", "营业时间", "几点", "开门", "关门", "休息", "时间", "masa", "buka", "tutup", "jam", "waktu"],
        answers: {
            en: "Our business hours are:<br>📅 **Mon - Sat**: 9am - 6pm<br>📅 **Sun & Public Holidays**: 9am - 3pm",
            zh: "我们的营业时间：<br>📅 **周一至周六**: 9am - 6pm<br>📅 **周日及公共假期**: 9am - 3pm",
            ms: "Waktu operasi kami:<br>📅 **Isnin - Sabtu**: 9am - 6pm<br>📅 **Ahad & Cuti Umum**: 9am - 3pm"
        }
    },
    {
        // Contact / WhatsApp / Photos (Updated with WhatsApp Links for ALL)
        keywords: ["contact", "whatsapp", "whats app", "watsapp", "ws", "phone", "hp", "call", "photo", "picture", "image", "电话", "联系", "号码", "照片", "图片", "联络", "hubungi", "telefon", "nombor", "gambar", "foto", "wasap"],
        answers: {
            en: "For inquiries, please contact us:<br>📞 **Jordan Yap**: 014-8818581 (<a href='https://wa.link/vvfign' target='_blank'>WhatsApp</a>)<br>📞 **Miss Law**: 010-9613839 (<a href='https://wa.me/60109613839' target='_blank'>WhatsApp</a>)<br>📞 **SCT Office**: 010-2556806 (<a href='https://wa.me/60102556806' target='_blank'>WhatsApp</a>)",
            zh: "欲咨询请联系我们：<br>📞 **Jordan Yap**: 014-8818581 (<a href='https://wa.link/vvfign' target='_blank'>WhatsApp</a>)<br>📞 **Miss Law**: 010-9613839 (<a href='https://wa.me/60109613839' target='_blank'>WhatsApp</a>)<br>📞 **SCT Office**: 010-2556806 (<a href='https://wa.me/60102556806' target='_blank'>WhatsApp</a>)",
            ms: "Untuk pertanyaan, sila hubungi kami:<br>📞 **Jordan Yap**: 014-8818581 (<a href='https://wa.link/vvfign' target='_blank'>WhatsApp</a>)<br>📞 **Miss Law**: 010-9613839 (<a href='https://wa.me/60109613839' target='_blank'>WhatsApp</a>)<br>📞 **SCT Office**: 010-2556806 (<a href='https://wa.me/60102556806' target='_blank'>WhatsApp</a>)"
        }
    },
    {
        // Facebook
        keywords: ["facebook", "fb", "page", "social", "脸书", "面子书", "专页", "laman fb", "muka buku"],
        answers: {
            en: "Follow our Facebook page for the latest updates: <a href='https://www.facebook.com/siongcheongtrading' target='_blank'>Siong Cheong Trading FB</a>",
            zh: "关注我们的 Facebook 专页以获取最新消息：<a href='https://www.facebook.com/siongcheongtrading' target='_blank'>Siong Cheong Trading FB</a>",
            ms: "Ikuti laman Facebook kami untuk kemas kini terbaru: <a href='https://www.facebook.com/siongcheongtrading' target='_blank'>Siong Cheong Trading FB</a>"
        }
    },

    // ---------------------------------------------------------
    // 2. GENERAL PRODUCT INFO
    // ---------------------------------------------------------
    {
        // Fridge
        keywords: ["fridge", "refrigerator", "cold", "food", "inverter", "冰箱", "雪柜", "冷藏", "peti sejuk", "ais", "sejuk"],
        answers: {
            en: "Our refrigerators feature **Inverter Technology** (saves 40% energy) and **No-Frost** systems. Keeps food fresh longer.",
            zh: "我们的冰箱配备了**变频技术**（节能40%）和**无霜系统**。无需手动除霜，让食物保鲜更久。",
            ms: "Peti sejuk kami mempunyai **Teknologi Inverter** (jimat tenaga 40%) dan sistem **Tanpa Fros**. Makanan kekal segar lebih lama."
        }
    },
    {
        // Freezer
        keywords: ["freezer", "ice", "frozen", "chest freezer", "冷冻", "冻柜", "结冰", "peti beku", "beku"],
        answers: {
            en: "Our Chest Freezers offer massive capacity with **Dual Cooling** modes (fridge/freezer convertible) and rapid freezing.",
            zh: "我们的冷柜提供超大容量，具备**双重冷却**模式（可切换冷藏/冷冻），并拥有快速冷冻功能。",
            ms: "Peti sejuk beku kami menawarkan kapasiti besar dengan mod **Penyejukan Dwi** (boleh tukar peti sejuk/beku) dan pembekuan pantas."
        }
    },
    {
        // Air Conditioner
        keywords: ["ac", "air conditioner", "cool", "hot", "quiet", "aircond", "air con", "空调", "冷气", "penghawa dingin", "aircon"],
        answers: {
            en: "Our ACs operate at an ultra-quiet **21dB** with **Smart Wi-Fi Control**. Cool your room via phone before arriving home!",
            zh: "我们的空调运行噪音低至 **21dB**，并支持**智能 Wi-Fi 控制**。您可以在回家前用手机预先开启冷气！",
            ms: "Penghawa dingin kami beroperasi senyap pada **21dB** dengan **Kawalan Wi-Fi Pintar**. Sejukkan bilik melalui telefon sebelum sampai rumah!"
        }
    },
    {
        // Washer
        keywords: ["washer", "washing", "laundry", "clean", "clothes", "洗衣机", "洗衣服", "mesin basuh", "baju", "dobi"],
        answers: {
            en: "We have Top & Front Load washers with **Steam Hygiene** (removes 99.9% bacteria) and anti-tangle technology.",
            zh: "我们提供波轮和滚筒洗衣机，具备**蒸汽除菌**功能（去除99.9%细菌）以及防缠绕技术。",
            ms: "Kami ada mesin basuh Muatan Atas & Depan dengan **Stim Higien** (basmi 99.9% bakteria) dan teknologi anti-lilit."
        }
    },
    {
        // TV
        keywords: ["tv", "television", "screen", "4k", "smart", "电视", "显示屏", "skrin", "android tv"],
        answers: {
            en: "Our Smart TVs feature **4K UHD resolution** and built-in Android TV for Netflix/YouTube.",
            zh: "我们的智能电视拥有 **4K UHD 超高清画质**，内置 Android TV 系统，轻松观看 Netflix 和 YouTube。",
            ms: "TV Pintar kami menampilkan **resolusi 4K UHD** dan Android TV terbina dalam untuk Netflix/YouTube."
        }
    },
    {
        // Delivery
        keywords: ["delivery", "shipping", "ship", "arrive", "送货", "运输", "多久", "hantar", "penghantaran"],
        answers: {
            en: "Delivery takes **3-5 working days**. We offer basic installation for large appliances.",
            zh: "送货通常需要 **3-5 个工作日**。对于大型家电，我们也提供基本的安装服务。",
            ms: "Penghantaran mengambil masa **3-5 hari bekerja**. Kami menyediakan pemasangan asas untuk peralatan besar."
        }
    },
    {
        // Payment
        keywords: ["payment", "pay", "card", "cash", "installment", "付款", "分期", "信用卡", "bayar", "bayaran", "kredit", "wang"],
        answers: {
            en: "We accept Visa, Mastercard, Online Transfer, and E-Wallets. **0% Installment Plans** available for purchases >RM500.",
            zh: "我们接受 Visa、Mastercard、网上转账和电子钱包。消费满 RM500 可享 **0% 分期付款**。",
            ms: "Kami terima Visa, Mastercard, Pindahan Dalam Talian, dan E-Dompet. **Pelan Ansuran 0%** tersedia untuk pembelian >RM500."
        }
    },
    {
        // Warranty
        keywords: ["warranty", "repair", "broken", "guarantee", "保修", "维修", "坏了", "jaminan", "waranti", "rosak"],
        answers: {
            en: "Appliances come with **1-Year General Warranty**. Motors/Compressors often have **5-10 Years**. Keep your receipt!",
            zh: "所有电器均享有至少 **1 年的一般保修**。电机/压缩机通常享有 **5-10 年保修**。请保留您的收据！",
            ms: "Peralatan disertakan dengan **Jaminan Umum 1 Tahun**. Motor/Kompet pemampat selalunya ada **5-10 Tahun**. Simpan resit anda!"
        }
    }
];
