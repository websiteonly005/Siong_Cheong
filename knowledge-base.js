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
    // 2. SHARP REFRIGERATOR MODELS (BASED ON LATEST TABLE)
    // ---------------------------------------------------------
    {
        keywords: ["SJX6322MS", "6322MS"],
        answers: {
            en: "Model: **SJX6322MS**<br>Capacity: 620L<br>Type: 2-Door (Silver)<br>Inverter: No ❌<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Professional Note: Fixed frequency model, high storage capacity but higher power consumption.",
            zh: "型号: **SJX6322MS**<br>容量: 620L<br>门型: 双门 (银色)<br>变频: 否 ❌<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 定频型号，空间大但耗电量相对较高。",
            ms: "Model: **SJX6322MS**<br>Kapasiti: 620L<br>Inverter: Tiada ❌<br>🛡️ Waranti: 1 Thn Umum / 5 Thn Pemampat<br>💡 Nota: Model tetap, penggunaan elektrik lebih tinggi."
        }
    },
    {
        keywords: ["SJP735MBK", "735MBK"],
        answers: {
            en: "Model: **SJP735MBK**<br>Capacity: 700L<br>Type: Side-by-Side (Black)<br>Inverter: No ❌<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Professional Note: Large capacity for big families, but lacks energy-saving inverter tech.",
            zh: "型号: **SJP735MBK**<br>容量: 700L<br>门型: 对开门 (黑色)<br>变频: 否 ❌<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 超大容量适合大家庭，但由于非变频，不属于节能款。",
            ms: "Model: **SJP735MBK**<br>Kapasiti: 700L<br>Inverter: Tiada ❌<br>🛡️ Waranti: 1 Thn Umum / 5 Thn Pemampat<br>💡 Nota: Kapasiti besar tapi tidak jimat elektrik."
        }
    },
    {
        keywords: ["SJP682MFGK", "682MFGK"],
        answers: {
            en: "Model: **SJP682MFGK**<br>Capacity: 610L<br>Type: 2-Door (Dark Finish)<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Note: Non-inverter model.",
            zh: "型号: **SJP682MFGK**<br>容量: 610L<br>门型: 双门 (深色外观)<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 传统非变频型号。",
            ms: "Model: **SJP682MFGK**<br>Kapasiti: 610L<br>Waranti: 1 Thn Umum / 5 Thn Pemampat"
        }
    },
    {
        keywords: ["SJM60MK", "60MK", "mini bar"],
        answers: {
            en: "Model: **SJM60MK**<br>Capacity: 60L<br>Type: Single Door (Black)<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Note: Perfect as a Mini Bar for rooms or offices.",
            zh: "型号: **SJM60MK**<br>容量: 60L<br>门型: 单门 (黑色)<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 迷你吧 (Mini Bar)，适合卧室或办公室。",
            ms: "Model: **SJM60MK**<br>Kapasiti: 60L<br>Waranti: 1 Thn Umum / 5 Thn Pemampat<br>💡 Nota: Sesuai untuk bilik atau pejabat."
        }
    },
    {
        keywords: ["SJS21VMSS", "21VMSS", "SJS21"],
        answers: {
            en: "Model: **SJS21VMSS**<br>Capacity: 700L<br>Type: Side-by-Side (Silver)<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Professional Note: High-end Inverter model. Features **Plasmacluster™ Ion** tech to eliminate 99% of bacteria and odors.",
            zh: "型号: **SJS21VMSS**<br>容量: 700L<br>门型: 对开门 (银色)<br>变频: 是 (Inverter) ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 变频高端款。配备 **Plasmacluster™ 净离子群**除菌技术，长效保鲜除异味。",
            ms: "Model: **SJS21VMSS**<br>Kapasiti: 700L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat<br>💡 Nota: Siri Inverter Premium dengan teknologi **Plasmacluster™**."
        }
    },
    {
        keywords: ["SJS4422MSS", "4422MSS"],
        answers: {
            en: "Model: **SJS4422MSS**<br>Capacity: 440L<br>Type: 2-Door (Silver)<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Professional Note: Mainstream energy-saving model. Efficient J-Tech Inverter tech.",
            zh: "型号: **SJS4422MSS**<br>容量: 440L<br>门型: 双门 (银色)<br>变频: 是 (Inverter) ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 主流省电款，性价比极高，采用 J-Tech 变频技术。",
            ms: "Model: **SJS4422MSS**<br>Kapasiti: 440L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat<br>💡 Nota: Model jimat elektrik yang paling popular."
        }
    },
    {
        keywords: ["SJS4122MSS", "4122MSS"],
        answers: {
            en: "Model: **SJS4122MSS**<br>Capacity: 410L<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Professional Note: Super quiet operation, perfect for open-plan kitchens.",
            zh: "型号: **SJS4122MSS**<br>容量: 410L<br>门型: 双门 (银色)<br>变频: 是 (Inverter) ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 运行非常安静，适合怕吵的家庭。",
            ms: "Model: **SJS4122MSS**<br>Kapasiti: 410L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },
    {
        keywords: ["SJS3822MSS", "3822MSS"],
        answers: {
            en: "Model: **SJS3822MSS**<br>Capacity: 380L<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Professional Note: High cost-performance ratio. Energy efficient with Ag+ Deodorizer.",
            zh: "型号: **SJS3822MSS**<br>容量: 380L<br>门型: 双门 (银色)<br>变频: 是 (Inverter) ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 高性价比之选。省电且带 Ag+ 纳米除臭系统。",
            ms: "Model: **SJS3822MSS**<br>Kapasiti: 380L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },
    {
        keywords: ["SJS2822MSS", "2822MSS"],
        answers: {
            en: "Model: **SJS2822MSS**<br>Capacity: 280L<br>Inverter: Yes ✅<br>🛡️ Warranty: 1 Yr General / 10 Yrs Compressor<br>💡 Professional Note: Compact energy saver for smaller households.",
            zh: "型号: **SJS2822MSS**<br>容量: 280L<br>门型: 双门 (银色)<br>变频: 是 (Inverter) ✅<br>🛡️ 保修: 1年整机 / 10年压缩机<br>💡 专业备注: 小家庭首选，小体积却拥有变频省电技术。",
            ms: "Model: **SJS2822MSS**<br>Kapasiti: 280L<br>Inverter: Ya ✅<br>🛡️ Waranti: 1 Thn Umum / 10 Thn Pemampat"
        }
    },
    {
        keywords: ["SJS189MS", "189MS"],
        answers: {
            en: "Model: **SJS189MS**<br>Capacity: 180L<br>Type: Single/Double Door (Silver)<br>🛡️ Warranty: 1 Yr General / 5 Yrs Compressor<br>💡 Note: Ideal for singles or small rentals.",
            zh: "型号: **SJS189MS**<br>容量: 180L<br>门型: 单/双门 (银色)<br>🛡️ 保修: 1年整机 / 5年压缩机<br>💡 专业备注: 适合单身人士或出租房使用。",
            ms: "Model: **SJS189MS**<br>Kapasiti: 180L<br>Waranti: 1 Thn Umum / 5 Thn Pemampat"
        }
    },

    // ---------------------------------------------------------
    // 3. PROFESSIONAL KNOWLEDGE (INVERTER VS NON-INVERTER)
    // ---------------------------------------------------------
    {
        keywords: ["difference", "compare", "inverter vs non inverter", "save electricity", "省电", "变频", "定频", "差别", "比较", "jimat elektrik", "beza"],
        answers: {
            en: "### Why choose Sharp J-Tech Inverter?<br>🔋 **Energy Saving**: Saves 20%–40% on electricity bills (Crucial for MY tariffs!)<br>🔇 **Quiet**: Much lower noise level, ideal for Condos/Apartments.<br>♻️ **Durability**: Compressor lasts longer, which is why we offer a **10-Year Warranty**.<br><hr>### Non-Inverter (Fixed Frequency):<br>💰 **Low Price**: Cheaper upfront cost.<br>⚡ **Higher Bill**: Frequent start-stops consume more electricity.<br>🧯 **Warranty**: Only 5 years on compressor.",
            zh: "### 为什么推荐 Sharp J-Tech 变频 (Inverter)?<br>🔋 **极度省电**: 比普通冰箱省电 20%–40%（长期下来省下不少电费！）<br>🔇 **超静音**: 运作声音极小，非常适合公寓或 Condo。<br>♻️ **更长寿命**: 变频压缩机损耗小，所以我们提供 **10年保修**。<br><hr>### 非变频 (定频) 特点:<br>💰 **价格便宜**: 购买成本低。<br>⚡ **耗电较高**: 压缩机频繁启停，非常吃电。<br>🧯 **保修较短**: 压缩机保修通常只有 5 年。",
            ms: "### Kenapa pilih Sharp J-Tech Inverter?<br>🔋 **Jimat Elektrik**: Penjimatan 20%–40% (Sangat penting di Malaysia!)<br>🔇 **Senyap**: Tahap bunyi lebih rendah, sesuai untuk Condo/Apartmen.<br>♻️ **Tahan Lama**: Pemampat tahan lebih lama, sebab itu kami beri **Waranti 10 Tahun**.<br><hr>### Non-Inverter (Fixed Frequency):<br>💰 **Harga Murah**: Kos beli lebih rendah.<br>⚡ **Bil Tinggi**: Kerap 'start-stop' guna banyak elektrik.<br>🧯 **Waranti**: Biasanya hanya 5 tahun untuk pemampat."
        }
    },
    {
        keywords: ["plasmacluster", "ion", "bacteria", "smell", "等离子", "除菌", "除臭", "味道"],
        answers: {
            en: "Sharp's unique **Plasmacluster™ Ion** technology emits positive and negative ions to neutralize 99% of bacteria, viruses, and mold. It keeps your food fresh and prevents cross-contamination of food smells.",
            zh: "Sharp 独有的 **Plasmacluster™ 净离子群**技术能释放正负离子，有效抑制 99% 的细菌、病毒和霉菌。它能确保冰箱内空气清新，防止食物异味交叉感染。",
            ms: "Teknologi **Plasmacluster™ Ion** Sharp membebaskan ion positif dan negatif untuk meneutralkan 99% bakteria dan kulat. Ia menjaga kesegaran makanan dan menghilangkan bau busuk."
        }
    }
];
