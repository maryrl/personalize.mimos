// Lista de produtos
const products = [
  // Material Escolar
  {
    id: 1,
    name: "Caixinha Pirâmide",
    price: 3.50,
    category: "aniversário",
    emoji: "🎈",
  },
  {
    id: 2,
    name: "Caixinha Milk com APlique 3D",
    price: 3.50,
    category: "aniversário",
    emoji: "🎈",
  },
  {
    id: 3,
    name: "Caixinha Milk sem Aplique 3D",
    price: 3.00,
    category: "aniversário",
    emoji: "🎈",
  },
  {
    id: 4,
    name: "Porta BIS",
    price: 1.50,
    category: "material-escolar",
    emoji: "🖊️",
  },
  {
    id: 5,
    name: "Sacolinha com Alça",
    price: 4.0,
    category: "aniversario",
    emoji: "🎈",
  },

  // Aniversário
  {
    id: 6,
    name: "Caixinha SUSHI",
    price: 3.50,
    category: "aniversario",
    emoji: "🦄",
  },
  {
    id: 7,
    name: "Caixinha Balao com Aplique 3D",
    price: 3.50,
    category: "aniversario",
    emoji: "💌",
  },
  {
    id: 8,
    name: "Caixinha Balao sem Aplique 3D",
    price: 3.0,
    category: "aniversario",
    emoji: "💌",
  },
  {
    id: 9,
    name: "Caixinha meia bala sem aplique 3D",
    price: 3.0,
    category: "aniversario",
    emoji: "🎪",
  },
  {
    id: 10,
    name: "Caixinha meia bala com aplique 3D",
    price: 3.50,
    category: "aniversario",
    emoji: "🎪",
  },

  // Brindes
  {
    id: 11,
    name: "Caixinha Bolsinha menor",
    price: 3.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 12,
    name: "Caixinha alta com alça",
    price: 3.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 13,
    name: "Caixinha quadrada com alça",
    price: 3.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 14,
    name: "Caixinha quadrada sem alça - aplique 3D",
    price: 3.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 15,
    name: "Caixinha meia lua com alça",
    price: 3.0,
    category: "aniversário",
    emoji: "🎁",
  },

  // Presentes
  {
    id: 16,
    name: "Caixinha Coração",
    price: 3.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 17,
    name: "Caixinha Triangulove",
    price: 3.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 18,
    name: "Caixinha Cubo",
    price: 2.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 19,
     name: "Caixinha Cubo com Canudo",
    price: 3.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 20,
    name: "Caixinha almofada sem alça",
    price: 2.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 21,
    name: "Caixinha almofada com alça - Sem aplique 3D",
    price: 2.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 22,
    name: "Caixinha almofada com alça - Com Aplique 3D",
    price: 3.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 23,
    name: "Sacolinha - Tamanho M",
    price: 3.50,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 24,
    name: "Display de Mesa - Unidade",
    price: 4.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 25,
    name: "Cartela Adesivos c/recorte",
    price: 6.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 26,
    name: "Cartela TAGS c/recorte - Papel FOSCO",
    price: 5.0,
    category: "aniversário",
    emoji: "🎁",
  },
  {
    id: 27,
    name: "Cartela TAGS - Papel Glossy",
    price: 5.0,
    category: "aniversário",
    emoji: "🎁",
  },
   {
    id: 28,
    name: "Tubetes - A partir de 10 unidades",
    price: 2.20,
    category: "brindes",
    emoji: "🎁",
  },
   {
    id: 29,
    name: "Cofrinhos",
    price: 3.50,
    category: "brindes",
    emoji: "🎁",
  },
   {
    id: 30,
    name: "Painel Temático Montado Tamanho 60 x 60cm",
    price: 15.0,
    category: "aniversário",
    emoji: "🎁",
  },
   {
    id: 31,
    name: "Painel Temático Montado Tamanho 80 x 80cm",
    price: 20.0,
    category: "aniversário",
    emoji: "🎁",
  },
   {
    id: 32,
    name: "Painel Temático Montado Tamanho 1 metro",
    price: 25.0,
    category: "aniversário",
    emoji: "🎁",
  },
    {
    id: 33,
    name: "Balinhas Personalizadas - 100 unidades",
    price: 45.0,
    category: "brindes",
    emoji: "🎪",
  },
   {
    id: 34,
    name: "Rótulo Pirulito Personalizadas - 50 unidades",
    price: 23.0,
    category: "brindes",
    emoji: "🎪",
  },
  {
    id: 35,
    name: "Rótulo Com Pirulito Personalizadas - unidade",
    price: 1.30,
    category: "brindes",
    emoji: "🎪",
  },
];

let cart = [];
let currentFilter = "todos";
const whatsappNumber = "5588988793078"; // Substitua pelo número da dona

// Renderiza os produtos
function renderProducts(productsToShow = products) {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";

  productsToShow.forEach((product) => {
    const card = document.createElement("div");
    card.className =
      "product-card bg-white rounded-lg shadow-md p-4 border hover:border-purple-300";
    card.innerHTML = `
      <div class="text-center">
        <div class="text-4xl mb-2">${product.emoji}</div>
        <h4 class="font-semibold text-gray-800 mb-2">${product.name}</h4>
        <p class="text-purple-600 font-bold text-lg mb-3">R$ ${product.price
          .toFixed(2)
          .replace(".", ",")}</p>
        <button onclick="addToCart(${
          product.id
        })" class="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
          Adicionar ao Kit
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filtro por categoria
function filterProducts(category, event) {
  currentFilter = category;

  // Atualizar botões
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("bg-purple-600", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });
  event.target.classList.add("bg-purple-600", "text-white");

  const filtered =
    category === "todos"
      ? products
      : products.filter((p) => p.category === category);
  renderProducts(filtered);
}

// Carrinho
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const exists = cart.find((item) => item.id === id);

  if (exists) {
    exists.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function updateQuantity(id, change) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<p class="text-gray-500 text-center py-4">Seu carrinho está vazio</p>';
    totalPrice.textContent = "R$ 0,00";
    return;
  }

  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "cart-item bg-gray-50 rounded-lg p-3 border";
    div.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <span class="font-medium text-sm">${item.name}</span>
        <button onclick="removeFromCart(${
          item.id
        })" class="text-red-500 hover:text-red-700 text-sm">✕</button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="updateQuantity(${
            item.id
          }, -1)" class="bg-gray-300 w-6 h-6 rounded-full text-sm">-</button>
          <span class="font-medium">${item.quantity}</span>
          <button onclick="updateQuantity(${
            item.id
          }, 1)" class="bg-gray-300 w-6 h-6 rounded-full text-sm">+</button>
        </div>
        <span class="font-bold text-purple-600">R$ ${subtotal
          .toFixed(2)
          .replace(".", ",")}</span>
      </div>
    `;
    cartItems.appendChild(div);
  });

  totalPrice.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

// WhatsApp
function sendToWhatsApp() {
  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();
  const deliveryMethod = document.getElementById("delivery-method").value;
  const address = document.getElementById("customer-address").value.trim();
  const note = document.getElementById("customer-note").value.trim();

  if (
    !name ||
    !phone ||
    !deliveryMethod ||
    (deliveryMethod === "Entrega" && !address)
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  let message = `🎨 *NOVO PEDIDO - PERSONALIZE MIMOS* 🎨\n\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📱 *WhatsApp:* ${phone}\n`;
  message += `🚚 *Entrega:* ${deliveryMethod}\n`;
  if (deliveryMethod === "Entrega") message += `📍 *Endereço:* ${address}\n`;
  if (note) message += `📝 *Observações:* ${note}\n`;
  message += `\n📦 *Itens do pedido:*\n`;

  let total = 0;
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `• ${item.emoji} ${item.name}\n`;
    message += `  Qtd: ${item.quantity} | R$ ${subtotal
      .toFixed(2)
      .replace(".", ",")}\n`;
  });

  message += `\n💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*\n`;
  message += `\nAguardamos sua confirmação! 😊`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  window.open(url, "_blank");
}

// Mostrar endereço apenas se necessário
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  const deliverySelect = document.getElementById("delivery-method");
  const addressContainer = document.getElementById("address-container");

  deliverySelect.addEventListener("change", () => {
    if (deliverySelect.value === "Entrega") {
      addressContainer.classList.remove("hidden");
    } else {
      addressContainer.classList.add("hidden");
    }
  });
});