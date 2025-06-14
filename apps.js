let deferredPrompt;
const installButton = document.getElementById('installButton');

// ব্রাউজার যখন বুঝবে অ্যাপটি ইনস্টল করা যাবে, তখন এই ইভেন্টটি ফায়ার হবে
window.addEventListener('beforeinstallprompt', (e) => {
  // ডিফল্ট ইনস্টল ব্যানারটি দেখানো থেকে বিরত রাখা
  e.preventDefault();
  // ইভেন্টটি পরে ব্যবহার করার জন্য সেভ করে রাখা
  deferredPrompt = e;
  // আমাদের বানানো ইনস্টল বাটনটি দেখানো
  installButton.classList.remove('hidden');
  console.log('`beforeinstallprompt` event was fired.');
});

// আমাদের ইনস্টল বাটনে ক্লিক করলে যা হবে
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

// অ্যাপটি সফলভাবে ইনস্টল হয়ে গেলে এই ইভেন্টটি ফায়ার হবে
window.addEventListener('appinstalled', (evt) => {
  console.log('App was successfully installed.');
  // ইনস্টল হয়ে গেলে বাটনটি লুকিয়ে রাখা যায় (যদি দেখা যায়)
  installButton.classList.add('hidden');
});


// আপনার পুরনো কোড নিচে অপরিবর্তিত থাকবে
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
    name: "Number টাকাঃ Scanner",
    url: "https://zunaidhosse.github.io/Number-Tk-scanner/",
    icon: "🔍"
  },
  {
    name: "ZUNAID’S DINE",
    url: "https://zunaidhosse.github.io/ZUNAID-S-DINE/",
    icon: "🍽️"
  }
];

  {
    name: "Wifi Calculator",
    url: "https://zunaidhosse.github.io/Wifi-Calculator/",
    icon: "📟"
  }
];

const grid = document.getElementById("appGrid");

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

