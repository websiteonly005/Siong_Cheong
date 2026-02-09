// Smart Assistant Database (Multi-Language)
// Structure: { keywords: [...], answers: { en: "...", zh: "...", ms: "..." } }

const knowledgeBase = [
    // ---------------------------------------------------------
    // 1. BUSINESS INFO (Location, Hours, Contact)
    // ---------------------------------------------------------
    {
        keywords: ["location", "address", "where", "shop", "branch", "map", "place", "地址", "地点", "哪里", "分行", "地图", "位置", "lokasi", "kedai", "mana", "cawangan", "peta", "tempat"],
        answers: {
            en: "We have two branches in Kuching:<br>1. **Kota Sentosa (Batu 7)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>View Map</a><br>2. **Aeroville Mall (1st Floor)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>View Map</a>",
            zh: "我们在古晋有两家分行：<br>1. **Kota Sentosa (七哩)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>查看地图</a><br>2. **Aeroville Mall (一楼)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>查看地图</a>",
            ms: "Kami ada dua cawangan di Kuching:<br>1. **Kota Sentosa (Batu 7)**: <a href='https://maps.app.goo.gl/QwziW8derXDtCiGr8' target='_blank'>Lihat Peta</a><br>2. **Aeroville Mall (Tingkat 2)**: <a href='https://maps.app.goo.gl/Mn9QCJ5xtkUbE29z8' target='_blank'>Lihat Peta</a>"
        }
    },
    {
        keywords: ["hours", "open", "time", "营业时间", "几点", "masa", "buka"],
        answers: {
            en: "Business hours:<br>📅 **Mon - Sat**: 9am - 6pm<br>📅 **Sun & Public Holidays**: 9am - 3pm",
            zh: "营业时间：<br>📅 **周一至周六**: 9am - 6pm<br>📅 **周日及公共假期**: 9am - 3pm",
            ms: "Waktu operasi:<br>📅 **Isnin - Sabtu**: 9am - 6pm<br>📅 **Ahad & Cuti Umum**: 9am - 3pm"
        }
    },

    // ---------------------------------------------------------
    // 2. SHARP REFRIGERATOR MODELS (LATEST CATEGORIES)
    // ---------------------------------------------------------

    // --- Premium & Large Capacity (大型与多门系列) ---
    {
        keywords: ["SJ821VMSS", "821VMSS", "SJ821"],
        answers: {
            en: "Model: **SJ821VMSS**<br>Capacity: 700L<br>Type: 4-Door (Silver)<br>Inverter: Yes ✅ (J-Tech)<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Note: Spacious 4-door design with elegant silver finish.",
            zh: "型号: **SJ821VMSS**<br>容量: 700L<br>门型: 四门设计 (银色)<br>变频: 是 ✅ (J-Tech Inverter)<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 宽敞存储空间，四门法式设计，高端大气。",
            ms: "Model: **SJ821VMSS**<br>Kapasiti: 700L<br>Pintu: 4-Pintu (Perak)<br>Inverter: Ya ✅ (J-Tech)<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },
    {
        keywords: ["SJP735MBK", "735MBK", "SJP735"],
        answers: {
            en: "Model: **SJP735MBK**<br>Capacity: 700L<br>Type: 2-Door (Black)<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Features: **Plasmacluster™ Ion** technology for sterilization.",
            zh: "型号: **SJP735MBK**<br>容量: 700L<br>门型: 双门 (黑色)<br>变频: 是 ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 大容量双门，配备 **Plasmacluster™ 净离子群**除菌技术。",
            ms: "Model: **SJP735MBK**<br>Kapasiti: 700L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat<br>💡 Ciri: Teknologi **Plasmacluster™ Ion**."
        }
    },
    {
        keywords: ["SJF489GK", "489GK", "SJF489"],
        answers: {
            en: "Model: **SJF489GK**<br>Capacity: ~480L (est)<br>Type: 4-Door French (Glass Door)<br>Inverter: Yes ✅ (J-Tech)<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Note: Premium mirror glass finish.",
            zh: "型号: **SJF489GK**<br>容量: 约 480L<br>门型: 四门法式对开 (黑色玻璃镜面)<br>变频: 是 ✅ (J-Tech Inverter)<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 玻璃镜面外观非常高级，适合追求美观的家庭。",
            ms: "Model: **SJF489GK**<br>Kapasiti: ~480L<br>Pintu: 4-Pintu (Pintu Kaca)<br>Inverter: Ya ✅"
        }
    },
    {
        keywords: ["SJP682MFGK", "682MFGK", "SJP682"],
        answers: {
            en: "Model: **SJP682MFGK**<br>Capacity: 610L<br>Type: 2-Door (Glass Finish)<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor",
            zh: "型号: **SJP682MFGK**<br>容量: 610L<br>门型: 双门 (黑色玻璃镜面)<br>变频: 是 ✅ (J-Tech Inverter)<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 宽体设计，玻璃质感外观。",
            ms: "Model: **SJP682MFGK**<br>Kapasiti: 610L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },
    {
        keywords: ["SJX6322GK", "6322GK", "SJX6322MS", "6322MS"],
        answers: {
            en: "Model: **SJX6322 Series** (GK=Glass / MS=Metal Silver)<br>Capacity: 620L<br>Inverter: Yes ✅ (J-Tech)<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Note: Features an extra-large freezer compartment.",
            zh: "型号: **SJX6322 系列** (GK为黑色玻璃 / MS为银色金属)<br>容量: 620L<br>变频: 是 ✅ (J-Tech Inverter)<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 拥有特大冷冻室 (Freezer)，适合存储大量冷冻食品。",
            ms: "Model: **SJX6322 GK/MS**<br>Kapasiti: 620L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },

    // --- Mid-Range Inverter Series (中型变频系列) ---
    {
        keywords: ["SJE5381MK", "5381MK", "SJE5381"],
        answers: {
            en: "Model: **SJE5381MK**<br>Capacity: 480L<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Features: Ag+ Cu Nano Deodorizer to keep odors away.",
            zh: "型号: **SJE5381MK**<br>容量: 480L<br>变频: 是 ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 大容量双门，带有 **Ag+ Cu Nano 纳米银铜**除臭功能。",
            ms: "Model: **SJE5381MK**<br>Kapasiti: 480L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },
    {
        keywords: ["SJ4422MSS", "SJ4122MSS", "SJ3822MSS", "SJ3222MSS", "SJ2822MSS", "22MSS"],
        answers: {
            en: "Model: **Sharp 22MSS Series** (Available in 280L - 440L)<br>Inverter: Yes ✅ (J-Tech)<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Note: Standard silver finish with **Extra Cool** mode. Very energy efficient.",
            zh: "型号: **Sharp 22MSS 变频系列** (提供 280L 至 440L 多种容量)<br>变频: 是 ✅ (J-Tech Inverter)<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 同代 J-Tech 变频银色款，省电耐用，带有 Extra Cool 模式。",
            ms: "Model: **Siri SJ-22MSS** (280L - 440L)<br>Inverter: Ya ✅ (J-Tech)<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },

    // --- Standard / Non-Inverter (标准/非变频系列) ---
    {
        keywords: ["SJ327MDS", "SJ287MDS", "SJ285MSS", "MDS", "287MDS", "327MDS"],
        answers: {
            en: "Model: **Sharp Standard Series** (SJ327/287/285)<br>Inverter: No ❌<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Note: Simple, durable fixed-frequency refrigerator in Silver or Dark Grey.",
            zh: "型号: **Sharp 标准系列** (SJ327/287/285)<br>变频: 否 ❌ (定频)<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 标准定频冰箱，深银色/灰色外观。简单耐用，适合预算型用户。",
            ms: "Model: **Siri Standard** (SJ327/287/285)<br>Inverter: Tiada ❌<br>🛡️ Waranti: 1 Thn Umum / 5 Thn Pemampat"
        }
    },
    {
        keywords: ["SJ189MS", "189MS", "single door"],
        answers: {
            en: "Model: **SJ189MS**<br>Capacity: ~170L-190L<br>Type: Single Door (Silver)<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Note: Semi-auto defrost. Best for studio units or singles.",
            zh: "型号: **SJ189MS**<br>容量: 170L-190L<br>门型: 单门冰箱 (银色)<br>变频: 否 ❌<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: **半自动除霜** (Semi-Auto Defrost)，适合单身公寓或小户型。",
            ms: "Model: **SJ189MS** (Pintu Tunggal)<br>🛡️ Waranti: 1 Thn Umum / 5 Thn Pemampat"
        }
    },
    {
        keywords: ["SJM60MK", "60MK", "mini bar"],
        answers: {
            en: "Model: **SJM60MK (Mini Bar)**<br>Capacity: 60L<br>Inverter: No ❌<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Note: For drinks and snacks. No full freezer compartment.",
            zh: "型号: **SJM60MK (迷你吧)**<br>容量: 60L<br>类型: 迷你小型冷藏箱<br>变频: 否 ❌<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 适合酒店或房间放饮料，没有正式冷冻功能。",
            ms: "Model: **SJM60MK (Mini Bar)**<br>🛡️ Waranti: 1 Thn Umum / 5 Thn Pemampat"
        }
    },

    // ---------------------------------------------------------
    // 3. PROFESSIONAL KNOWLEDGE
    // ---------------------------------------------------------
    {
        keywords: ["difference", "compare", "inverter vs non inverter", "save electricity", "省电", "变频", "定频", "差别", "比较", "jimat elektrik", "beza"],
        answers: {
            en: "### Why choose Sharp J-Tech Inverter?<br>🔋 **Energy Saving**: Saves 20%–40% on electricity bills.<br>🔇 **Quiet**: Much lower noise level.<br>♻️ **Durability**: 10-Year Compressor Warranty.<br><hr>### Non-Inverter (Fixed Frequency):<br>💰 **Lower Price**: Affordable initial cost.<br>⚡ **Higher Bill**: Frequent start-stops use more energy.<br>🧯 **Warranty**: 5 years on compressor.",
            zh: "### 为什么选择 Sharp J-Tech 变频 (Inverter)?<br>🔋 **省电**: 比普通定频省电 20%–40%。<br>🔇 **静音**: 运行更安静。<br>♻️ **耐用**: 变频压缩机提供 **10年保修**。<br><hr>### 定频 (Non-Inverter) 特点:<br>💰 **价格实惠**: 购买成本较低。<br>⚡ **耗电较高**: 压缩机频繁启停较耗电。<br>🧯 **保修**: 压缩机保修通常为 5 年。",
            ms: "### Kenapa pilih Sharp J-Tech Inverter?<br>🔋 **Jimat Elektrik**: Penjimatan 20%–40%.<br>🔇 **Senyap**: Tahap bunyi lebih rendah.<br>♻️ **Tahan Lama**: Waranti Pemampat 10 Tahun."
        }
    },
    {
        keywords: ["plasmacluster", "ion", "bacteria", "smell", "等离子", "除菌", "除臭", "味道"],
        answers: {
            en: "Sharp's unique **Plasmacluster™ Ion** technology emits positive and negative ions to neutralize 99% of bacteria, viruses, and mold. It keeps your food fresh and prevents odors.",
            zh: "Sharp 独有的 **Plasmacluster™ 净离子群**技术。它能主动释放正负离子，抑制 99% 的细菌、病毒和霉菌，确保食物新鲜且无异味。",
            ms: "Teknologi **Plasmacluster™ Ion** Sharp menetralkan 99% bakteria dan kulat. Menjaga makanan segar dan bebas bau."
        }
    }
];
