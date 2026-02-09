// Smart Assistant Database (Multi-Language) - Updated for Siong Cheong Trading
// 智能助手数据库（多语言版）
// Structure: { keywords: [...], answers: { en: "...", zh: "...", ms: "..." } }

const knowledgeBase = [
    // ---------------------------------------------------------
    // 1. SPECIFIC BUSINESS INFO (Based on your input)
    // ---------------------------------------------------------
    {
        // Location / Address
        keywords: ["location", "address", "where", "shop", "branch", "map", "地址", "地点", "哪里", "分行", "地图", "lokasi", "kedai", "mana", "cawangan", "peta"],
        answers: {
            en: "We have two branches in Kuching:<br>1. **Kota Sentosa (Batu 7)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>View Map</a><br>2. **Aeroville Mall (1st Floor)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>View Map</a>",
            zh: "我们在古晋有两家分行：<br>1. **Kota Sentosa (七哩)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>查看地图</a><br>2. **Aeroville Mall (一楼)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>查看地图</a>",
            ms: "Kami ada dua cawangan di Kuching:<br>1. **Kota Sentosa (Batu 7)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>Lihat Peta</a><br>2. **Aeroville Mall (Tingkat 2)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>Lihat Peta</a>"
        }
    },
    {
        // Operating Hours
        keywords: ["hours", "open", "close", "time", "when", "营业时间", "几点", "开门", "关门", "休息", "masa", "buka", "tutup", "jam"],
        answers: {
            en: "Our business hours are:<br>📅 **Mon - Sat**: 9am - 6pm<br>📅 **Sun & Public Holidays**: 9am - 3pm",
            zh: "我们的营业时间：<br>📅 **周一至周六**: 9am - 6pm<br>📅 **周日及公共假期**: 9am - 3pm",
            ms: "Waktu operasi kami:<br>📅 **Isnin - Sabtu**: 9am - 6pm<br>📅 **Ahad & Cuti Umum**: 9am - 3pm"
        }
    },
    {
        // Contact / WhatsApp / Photos (Combined for better user experience)
        keywords: ["contact", "whatsapp", "phone", "call", "photo", "picture", "more info", "image", "电话", "联系", "照片", "图片", "更多", "hubungi", "telefon", "gambar", "foto"],
        answers: {
            en: "For inquiries or to see **more product photos**, please WhatsApp **Jordan Yap** at **014-8818581**.<br><a href='https://wa.link/vvfign' target='_blank' style='color:#29b6f6; font-weight:bold;'>Click here to WhatsApp</a>",
            zh: "欲咨询或查看**更多产品图片**，请 WhatsApp 联系 **Jordan Yap (014-8818581)**。<br><a href='https://wa.link/vvfign' target='_blank' style='color:#29b6f6; font-weight:bold;'>点击这里 WhatsApp</a>",
            ms: "Untuk pertanyaan atau lihat **lebih banyak gambar**, sila WhatsApp **Jordan Yap** di **014-8818581**.<br><a href='https://wa.link/vvfign' target='_blank' style='color:#29b6f6; font-weight:bold;'>Klik sini untuk WhatsApp</a>"
        }
    },
    {
        // Facebook / Social Media
        keywords: ["facebook", "fb", "page", "social", "media", "脸书", "面子书", "专页", "facebook page", "laman fb"],
        answers: {
            en: "Follow our Facebook page for the latest updates: <a href='https://www.facebook.com/siongcheongtrading' target='_blank'>Siong Cheong Trading FB</a>",
            zh: "关注我们的 Facebook 专页以获取最新消息：<a href='https://www.facebook.com/siongcheongtrading' target='_blank'>Siong Cheong Trading FB</a>",
            ms: "Ikuti laman Facebook kami untuk kemas kini terbaru: <a href='https://www.facebook.com/siongcheongtrading' target='_blank'>Siong Cheong Trading FB</a>"
        }
    },

    // ---------------------------------------------------------
    // 2. GENERAL PRODUCT INFO (Retained from previous version)
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
        keywords: ["ac", "air conditioner", "cool", "hot", "quiet", "aircond", "空调", "冷气", "penghawa dingin", "aircon"],
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
        keywords: ["payment", "pay", "card", "cash", "installment", "付款", "分期", "信用卡", "bayar", "bayaran", "kredit"],
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
