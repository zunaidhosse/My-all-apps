let deferredPrompt;
const installButton = document.getElementById('installButton');

// ব্রাউজার যখন বুঝবে অ্যাপটি ইনস্টল করা যাবে, তখন এই ইভেন্টটি ফায়ার হবে
window.addEventListener('beforeinstallprompt', (e) => {
  // ডিফল্ট ইনস্টল ব্যানারটি দেখানো থেকে বিরত রাখা
  e.preventDefault();
  // ইভেন্টটি পরে ব্যবহার করার জন্য সেভ করে রাখা
  deferredPrompt = e;
  // আমাদের বানানো ইনস্টল বাটনটি দেখানো
  if(installButton) {
    installButton.classList.remove('hidden');
  }
  console.log('`beforeinstallprompt` event was fired.');
});

// আমাদের ইনস্টল বাটনে ক্লিক করলে যা হবে
if(installButton) {
    installButton.addEventListener('click', async () => {
        // ইনস্টল বাটনটি আবার লুকিয়ে ফেলা
        installButton.classList.add('hidden');
        // সেভ করে রাখা প্রম্পটটি দেখানো
        deferredPrompt.prompt();
        // ব্যবহারকারী কী করলেন তা দেখার জন্য অপেক্ষা করা
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        // প্রম্পটটি আর ব্যবহার করা যাবে না, তাই এটিকে মুছে ফেলা
        deferredPrompt = null;
    });
}


// অ্যাপটি সফলভাবে ইনস্টল হয়ে গেলে এই ইভেন্টটি ফায়ার হবে
window.addEventListener('appinstalled', (evt) => {
  console.log('App was successfully installed.');
  // ইনস্টল হয়ে গেলে বাটনটি লুকিয়ে রাখা যায় (যদি দেখা যায়)
  if(installButton) {
    installButton.classList.add('hidden');
  }
});


// অ্যাপের তালিকা
const apps = [
  {
    name: "Car Wash App Admin",
    url: "https://zunaidhosse.github.io/carwash-app/admin/",
    icon: "📠"
  },
  {
    name: "Car Wash App User",
    url: "https://zunaidhosse.github.io/carwash-app/user/",
    icon: "🚗"
  },
  {
    name: "TK collection Antry",
    url: "https://zunaidhosse.github.io/Tk-collection-Antry/",
    icon: "📝"
  },
  {
    name: "Bikash all TK Entry",
    url: "https://zunaidhosse.github.io/Bikash-all-TK-Entry/",
    icon: "📝📝🧾🧾📖"
  },
  {
    name: "Bkash/Nagad Entry",
    url: "https://zunaidhosse.github.io/Bkash-Nagad-number-entry/",
    icon: "📲"
  },
  {
    name: "Bkash-Nagad-TT-Profit",
    url: "https://zunaidhosse.github.io/Bkash-Nagad-TT-Profit/",
    icon: "📟"
  },
  {
    name: "ATM SAR  Counting",
    url: "https://zunaidhosse.github.io/ATM-SAR-Counting/",
    icon: "🏧"
  },
  {
    name: "zunaid Notes",
    url: "https://zunaidhosse.github.io/Zunaid-Notes/",
    icon: "📝"
  },
  {
    name: "Al Quran Lite",
    url: "https://zunaidhosse.github.io/Al-Quran-Lite/",
    icon: "📚📖"
  },
  {
    name: "bodivio",
    url: "https://zunaidhosse.github.io/bodivio/",
    icon: "🧘🏋️"
  },
  {
    name: "Amar Bangla Type",
    url: "https://zunaidhosse.github.io/AmarBangla/",
    icon: "⌨️✍️"
  },
  {
    name: "My husband",
    url: "https://zunaidhosse.github.io/MY_HABITS/",
    icon: "🧘🏻‍♀️🧘🏻‍♂️"
  },
  {
    name: "Number টাকাঃ Scanner",
    url: "https://zunaidhosse.github.io/Number-Tk-scanner/",
    icon: "🔍"
  },
  {
    name: "ZUNAID’S DINE",
    url: "https://zunaidhosse.github.io/ZUNAID-S-DINE/",
    icon: "🍽️"
  },
  {
    name: "gmail verification/",
    url: "https://zunaidhosse.github.io/Duplicate-gmail-verification/",
    icon: "✉️📧"
  },
  {
    name: "Cod file create",
    url: "https://zunaidhosse.github.io/Cod-file-create/",
    icon: "\<\>📄🌐"
  },
  {
    name: "QR Code Ge & Sc",
    url: "https://zunaidhosse.github.io/QR-Code-Generator-Scanner/",
    icon: "🧑‍💻"
  },
  {
    name: "Smart calculatory",
    url: "https://zunaidhosse.github.io/Smart-calculator/",
    icon: "🧮📟🧮"
  },
  {
    name: "Currency Converter",
    url: "https://zunaidhosse.github.io/Currency-Converter/",
    icon: "💵💳🧾"
  },
  {
    name: "Zunaid Laundry",
    url: "https://zunaidhosse.github.io/zunaid_laundry/",
    icon: "🧼👕"
  },
  {
    name: "shop_hisab_offline",
    url: "https://zunaidhosse.github.io/shop_hisab_offline/",
    icon: "🍴"
  },
  {
    name: "Room-Bazar-Khawa-Hisab",
    url: "https://zunaidhosse.github.io/Room-Bazar-Khawa-Hisab/",
    icon: "🍴"
  },
  { // নতুন অ্যাপটি এখানে সঠিকভাবে যোগ করা হয়েছে
    name: "Wifi Calculator",
    url: "https://zunaidhosse.github.io/Wifi-Calculator/",
    icon: "📶" // আইকন পরিবর্তন করা হয়েছে
  }
];

const grid = document.getElementById("appGrid");

if (grid) {
    apps.forEach(app => {
        const card = document.createElement("div");
        card.className = "app-card";
        card.onclick = () => window.open(app.url, "_blank");
        card.innerHTML = `
            <div class="icon">${app.icon}</div>
            <p>${app.name}</p>
        `;
        grid.appendChild(card);
    });
}
