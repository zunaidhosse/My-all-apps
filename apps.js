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
    url: "https://zunaidhosse.github.io/Bkash-Nagad-number-entry/",
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
