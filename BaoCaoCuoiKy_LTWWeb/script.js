// ===== DỮ LIỆU SẢN PHẨM =====
var products = [
  {
    id: 1,
    name: "Sneaker Trắng Basic",
    cat: "Giày",
    price: 650000,
    color: "#dfe6ee",
    image: "img/giàysneakertrắngbasic.jpg",
    desc: "Đế cao su êm, dễ phối đồ.",
  },
  {
    id: 2,
    name: "Giày Chạy Nhẹ",
    cat: "Giày",
    price: 890000,
    color: "#f2c230",
    image: "img/giàychạynhẹ.webp",
    desc: "Thân giày thoáng khí, đi cả ngày không mỏi.",
  },
  {
    id: 3,
    name: "Giày Da Đi Làm",
    cat: "Giày",
    price: 1100000,
    color: "#a47551",
    image: "img/giayda.jpg",
    desc: "Da mềm, form gọn, phù hợp công sở.",
  },
  {
    id: 4,
    name: "Áo Thun Cổ Tròn",
    cat: "Áo",
    price: 220000,
    color: "#9ec5d8",
    image: "img/aothuncotron.png",
    desc: "Cotton mềm và thấm hút mồ hôi.",
  },
  {
    id: 5,
    name: "Áo Hoodie Xám",
    cat: "Áo",
    price: 420000,
    color: "#b8bec7",
    image: "img/aohoddiexam.jpg",
    desc: "Nỉ bông dày vừa, giữ ấm nhẹ.",
  },
  {
    id: 6,
    name: "Áo Sơ Mi Kẻ",
    cat: "Áo",
    price: 350000,
    color: "#c8d9c1",
    image: "img/aosomike.webp",
    desc: "Ít nhăn, mặc đi học hay đi làm.",
  },
  {
    id: 7,
    name: "Quần Jean Xanh",
    cat: "Quần",
    price: 480000,
    color: "#6f8fb5",
    image: "img/quanjeansxanh.webp",
    desc: "Jean co giãn nhẹ, dễ vận động.",
  },
  {
    id: 8,
    name: "Quần Short Kaki",
    cat: "Quần",
    price: 280000,
    color: "#c9b79c",
    image: "img/quanshortkaki.jpg",
    desc: "Kaki mềm, mặc mát vào mùa hè.",
  },
  {
    id: 9,
    name: "Sneaker Canvas Be",
    cat: "Giày",
    price: 590000,
    color: "#d8cbb9",
    image: "img/snekearcanvas.webp",
    desc: "Thiết kế tối giản, nhẹ chân.",
  },
  {
    id: 10,
    name: "Áo Polo Basic",
    cat: "Áo",
    price: 320000,
    color: "#b7c8c0",
    image: "img/aopolobasic.webp",
    desc: "Cổ áo đứng form, vải mềm.",
  },
  {
    id: 11,
    name: "Quần Tây Ống Suông",
    cat: "Quần",
    price: 520000,
    color: "#4f5965",
    image: "img/quantayongsuong.webp",
    desc: "Dáng suông thanh lịch, ít nhăn.",
  },
  {
    id: 12,
    name: "Sandal Da Quai Ngang",
    cat: "Giày",
    price: 450000,
    color: "#b58b6d",
    image: "img/SandalQuaingang.jpg",
    desc: "Đế mềm, quai da êm chân.",
  },
  {
    id: 13,
    name: "Sneaker Trắng Đế Cao",
    cat: "Giày",
    price: 720000,
    color: "#e5e5e5",
    image: "img/giàysneakertrắngbasic.jpg",
    desc: "Thiết kế trẻ trung, đế cao êm chân.",
  },
  {
    id: 14,
    name: "Áo Thun Form Rộng",
    cat: "Áo",
    price: 260000,
    color: "#d7e5ea",
    image: "img/aothuncotron.png",
    desc: "Phom rộng thoải mái, phù hợp mặc hằng ngày.",
  },
  {
    id: 15,
    name: "Áo Hoodie Essential",
    cat: "Áo",
    price: 460000,
    color: "#c5c9d0",
    image: "img/aohoddiexam.jpg",
    desc: "Chất nỉ mềm, giữ ấm và dễ phối đồ.",
  },
  {
    id: 16,
    name: "Quần Jean Dáng Suông",
    cat: "Quần",
    price: 510000,
    color: "#7189aa",
    image: "img/quanjeansxanh.webp",
    desc: "Dáng suông hiện đại, co giãn nhẹ.",
  },
  {
    id: 17,
    name: "Quần Kaki Everyday",
    cat: "Quần",
    price: 390000,
    color: "#c4b397",
    image: "img/quanshortkaki.jpg",
    desc: "Vải kaki bền đẹp, thoải mái khi vận động.",
  },
  {
    id: 18,
    name: "Sandal Quai Da Mềm",
    cat: "Giày",
    price: 490000,
    color: "#a98670",
    image: "img/SandalQuaingang.jpg",
    desc: "Quai da mềm, đế nhẹ và dễ đi.",
  },
  {
    id: 19,
    name: "Áo Sơ Mi Nam Oxford",
    cat: "Áo",
    gender: "Nam",
    price: 390000,
    color: "#d8e2eb",
    image: "img/aosominamoxford.webp",
    desc: "Phom đứng lịch sự, phù hợp đi làm.",
  },
  {
    id: 20,
    name: "Áo Blouse Nữ Thanh Lịch",
    cat: "Áo",
    gender: "Nữ",
    price: 360000,
    color: "#ead9d4",
    image: "img/áo blouse nữ thanh lịch.webp",
    desc: "Thiết kế nhẹ nhàng, dễ phối cùng chân váy.",
  },
  {
    id: 21,
    name: "Quần Jogger Nam",
    cat: "Quần",
    gender: "Nam",
    price: 350000,
    color: "#9da8b4",
    image: "img/quần jogger nam.webp",
    desc: "Chất vải co giãn, thoải mái khi vận động.",
  },
  {
    id: 22,
    name: "Chân Váy Nữ Chữ A",
    cat: "Quần",
    gender: "Nữ",
    price: 330000,
    color: "#cdb6a9",
    image: "img/chân váy nữ chữ A.webp",
    desc: "Dáng chữ A tôn dáng, dễ mặc hằng ngày.",
  },
  {
    id: 23,
    name: "Áo Polo Nam Classic",
    cat: "Áo",
    gender: "Nam",
    price: 340000,
    color: "#b8c8c0",
    image: "img/Áo Polo Ralph Lauren Nam.webp",
    desc: "Cổ polo cơ bản, phù hợp nhiều hoàn cảnh.",
  },
  {
    id: 24,
    name: "Áo Len Nữ Cổ Tròn",
    cat: "Áo",
    gender: "Nữ",
    price: 440000,
    color: "#d8c8bd",
    image: "img/Áo len nữ cổ tròn.webp",
    desc: "Chất len mềm, giữ ấm nhẹ và dễ phối đồ.",
  },
  {
    id: 25,
    name: "Giày Sneaker Nam Đen",
    cat: "Giày",
    gender: "Nam",
    price: 680000,
    color: "#6d7278",
    image: "img/giày snekear nam đen.jpg",
    desc: "Màu đen dễ phối, đế cao su bền chắc.",
  },
  {
    id: 26,
    name: "Giày Búp Bê Nữ",
    cat: "Giày",
    gender: "Nữ",
    price: 550000,
    color: "#d5b9b3",
    image: "img/giày búp bê nữ.jpg",
    desc: "Kiểu dáng thanh lịch, đế thấp êm chân.",
  },
  {
    id: 27,
    name: "Áo Khoác Bomber Nam",
    cat: "Áo",
    gender: "Nam",
    price: 650000,
    color: "#8d9aa5",
    image: "img/áo khoác bommer nam.webp",
    desc: "Thiết kế năng động, phù hợp thời tiết se lạnh.",
  },
  {
    id: 28,
    name: "Áo Khoác Cardigan Nữ",
    cat: "Áo",
    gender: "Nữ",
    price: 520000,
    color: "#d2c2b6",
    image: "img/áo khoác cardigan nữ.webp",
    desc: "Chất vải mềm nhẹ, dễ phối với nhiều trang phục.",
  },
  {
    id: 29,
    name: "Quần Cargo Nam",
    cat: "Quần",
    gender: "Nam",
    price: 490000,
    color: "#9b9a83",
    image: "img/quần cargo nam.webp",
    desc: "Nhiều túi tiện dụng, phong cách hiện đại.",
  },
  {
    id: 30,
    name: "Quần Ống Rộng Nữ",
    cat: "Quần",
    gender: "Nữ",
    price: 460000,
    color: "#b9aaa0",
    image: "img/quần ống rộng nữ.webp",
    desc: "Dáng ống rộng thoải mái và tôn dáng.",
  },
  {
    id: 31,
    name: "Áo Sơ Mi Linen Nam",
    cat: "Áo",
    gender: "Nam",
    price: 410000,
    color: "#e1d8c8",
    image: "img/áo sơ mi linen nam.jpg",
    desc: "Vải linen thoáng mát, phù hợp ngày hè.",
  },
  {
    id: 32,
    name: "Đầm Midi Nữ Tối Giản",
    cat: "Áo",
    gender: "Nữ",
    price: 590000,
    color: "#b7a3a0",
    image: "img/đầm midi nữ tối giản.jpg",
    desc: "Phom dáng thanh lịch cho những dịp đặc biệt.",
  },
  {
    id: 33,
    name: "Giày Loafer Nam",
    cat: "Giày",
    gender: "Nam",
    price: 780000,
    color: "#8b6d59",
    image: "img/giày loafer nam.webp",
    desc: "Kiểu dáng lịch sự, phù hợp đi làm.",
  },
  {
    id: 34,
    name: "Giày Cao Gót Nữ",
    cat: "Giày",
    gender: "Nữ",
    price: 690000,
    color: "#c29c9b",
    image: "img/giày cao gót nữ.webp",
    desc: "Thiết kế thanh mảnh, dễ phối đồ công sở.",
  },
  {
    id: 35,
    name: "Áo Thun Graphic Nam",
    cat: "Áo",
    gender: "Nam",
    price: 290000,
    color: "#b9c3c6",
    image: "img/áo thun graphic nam.webp",
    desc: "Chất cotton mềm, kiểu dáng trẻ trung.",
  },
  {
    id: 36,
    name: "Áo Croptop Nữ",
    cat: "Áo",
    gender: "Nữ",
    price: 270000,
    color: "#e0bfc0",
    image: "img/ao croptop nu.webp",
    desc: "Phom hiện đại, phù hợp phong cách năng động.",
  },
  {
    id: 37,
    name: "Quần Tây Nam Slim Fit",
    cat: "Quần",
    gender: "Nam",
    price: 540000,
    color: "#596572",
    image: "img/quần tây slim fit.webp",
    desc: "Dáng slim gọn gàng, phù hợp môi trường công sở.",
  },
  {
    id: 38,
    name: "Chân Váy Jean Nữ",
    cat: "Quần",
    gender: "Nữ",
    price: 380000,
    color: "#7890ab",
    image: "img/chân váy jeans nữ.webp",
    desc: "Chất jean bền đẹp, dễ kết hợp trang phục.",
  },
];

var $ = function (id) {
  return document.getElementById(id);
};

function formatPrice(number) {
  return number.toLocaleString("vi-VN") + "đ";
}

// ===== HEADER VÀ FOOTER =====
function renderLayout() {
  var page = location.pathname.split("/").pop() || "index.html";
  var header = $("site-header");
  var footer = $("site-footer");

  if (header) {
    var logo =
      page === "index.html"
        ? '<a href="index.html" class="logo">Nhịp</a>'
        : '<a href="index.html" class="logo logo-mark" aria-label="Nhịp - Trang chủ">N</a>';
    header.innerHTML =
      '<div class="topbar">Miễn phí giao hàng cho đơn từ 500.000đ</div>' +
      '<header class="header">' +
      logo +
      '<button class="menu-toggle" id="menuToggle">☰</button>' +
      '<nav class="menu" id="menu">' +
      '<a href="index.html" class="' +
      (page === "index.html" ? "now" : "") +
      '">Trang chủ</a>' +
      '<div class="menu-products"><a href="Sanpham.html" class="' +
      (page === "Sanpham.html" ? "now" : "") +
      '">Sản phẩm</a>' +
      '<div class="mega-menu">' +
      '<div><h3>Khám phá</h3><a href="Sanpham.html">Tất cả sản phẩm</a><a href="Sanpham.html?cat=Giày">Hàng mới</a></div>' +
      '<div><h3>Giày dép</h3><a href="Sanpham.html?cat=Giày">Sneaker</a><a href="Sanpham.html?cat=Giày">Giày da</a><a href="Sanpham.html?cat=Giày">Sandal</a></div>' +
      '<div><h3>Thời trang</h3><a href="Sanpham.html?cat=Áo">Áo nam</a><a href="Sanpham.html?cat=Quần">Quần nam</a><a href="Sanpham.html?cat=Nữ">Áo nữ</a><a href="Sanpham.html?cat=Nữ">Quần nữ</a><a href="Sanpham.html?cat=Nữ">Giày nữ</a></div>' +
      '<div><h3>Bộ sưu tập</h3><a href="Sanpham.html?cat=Áo">Office wear</a><a href="Sanpham.html?cat=Giày">Everyday essentials</a></div>' +
      "</div></div>" +
      '<a href="Gioithieu.html" class="' +
      (page === "Gioithieu.html" ? "now" : "") +
      '">Giới thiệu</a>' +
      '<a href="Lienhe.html" class="' +
      (page === "Lienhe.html" ? "now" : "") +
      '">Liên hệ</a>' +
      "</nav>" +
      '<div class="header-actions"><a class="account-btn" href="Dangnhap.html">Đăng nhập</a>' +
      '<a href="Giohang.html" class="cart-btn">Giỏ hàng <span class="cart-count" id="cartCount">0</span></a></div>' +
      "</header>";
    $("menuToggle").onclick = function () {
      $("menu").classList.toggle("open");
    };
  }

  if (footer) {
    footer.innerHTML =
      '<footer class="footer"><div><strong>Nhịp</strong><p>Modern essentials for everyday living.</p></div>' +
      '<div><strong>Mua sắm</strong><p><a href="Sanpham.html?cat=Giày">Giày</a></p><p><a href="Sanpham.html?cat=Áo">Áo</a></p><p><a href="Sanpham.html?cat=Quần">Quần</a></p></div>' +
      "<div><strong>Hỗ trợ</strong><p>Đổi trả trong 7 ngày</p><p>hotro@nhipstore.vn</p></div></footer>";
  }
  updateCartCount();
}

// ===== GIỎ HÀNG =====
var cart = JSON.parse(localStorage.getItem("nhipCart") || "[]");

function saveCart() {
  localStorage.setItem("nhipCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  var count = $("cartCount");
  var total = 0;
  var i;
  if (!count) return;
  for (i = 0; i < cart.length; i++) total += cart[i].qty;
  count.textContent = total;
}

function addToCart(id, size, quantity) {
  var i;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === id && cart[i].size === size) {
      cart[i].qty += quantity;
      saveCart();
      return;
    }
  }
  cart.push({ id: id, size: size, qty: quantity });
  saveCart();
}

function productCard(product) {
  var imageHtml = product.image
    ? '<img src="' + product.image + '" alt="' + product.name + '">'
    : "";
  return (
    '<a class="card" href="Chitiet.html?id=' +
    product.id +
    '">' +
    '<div class="thumb" style="background-color:' +
    product.color +
    '">' +
    imageHtml +
    "</div>" +
    '<div class="info"><small>' +
    product.cat +
    (product.gender ? " · " + product.gender : "") +
    "</small><strong>" +
    product.name +
    "</strong>" +
    '<span class="price">' +
    formatPrice(product.price) +
    '</span><span class="card-link">Xem chi tiết ↗</span></div></a>'
  );
}

renderLayout();

// ===== SLIDER TRANG CHỦ =====
if ($("hero")) {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  var dots = $("dots");
  var i;

  function showSlide(number) {
    currentSlide = (number + slides.length) % slides.length;
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.toggle("active", i === currentSlide);
      dots.children[i].classList.toggle("on", i === currentSlide);
    }
  }

  for (i = 0; i < slides.length; i++) {
    dots.innerHTML += '<button aria-label="Slide ' + (i + 1) + '"></button>';
    dots.children[i].onclick = function () {
      showSlide(Array.prototype.indexOf.call(dots.children, this));
    };
  }
  $("prev").onclick = function () {
    showSlide(currentSlide - 1);
  };
  $("next").onclick = function () {
    showSlide(currentSlide + 1);
  };
  showSlide(0);
  $("featured").innerHTML = products.slice(0, 4).map(productCard).join("");
}

// ===== LỌC SẢN PHẨM =====
if ($("grid")) {
  var selectedCategory =
    new URLSearchParams(location.search).get("cat") || "Tất cả";
  var categories = ["Tất cả", "Giày", "Áo", "Quần", "Nữ"];

  function drawProducts() {
    var keyword = $("search").value.toLowerCase();
    var list = [];
    var i;
    $("tabs").innerHTML = "";
    for (i = 0; i < categories.length; i++) {
      $("tabs").innerHTML +=
        '<button class="' +
        (categories[i] === selectedCategory ? "on" : "") +
        '" data-cat="' +
        categories[i] +
        '">' +
        categories[i] +
        "</button>";
    }
    for (i = 0; i < products.length; i++) {
      if (
        (selectedCategory === "Tất cả" ||
          products[i].cat === selectedCategory ||
          (selectedCategory === "Nữ" && products[i].gender === "Nữ")) &&
        products[i].name.toLowerCase().indexOf(keyword) !== -1
      ) {
        list.push(products[i]);
      }
    }
    $("grid").innerHTML = list.length
      ? list.map(productCard).join("")
      : '<p class="empty">Không tìm thấy sản phẩm.</p>';
  }

  $("tabs").onclick = function (event) {
    if (event.target.dataset.cat) {
      selectedCategory = event.target.dataset.cat;
      drawProducts();
    }
  };
  $("search").oninput = drawProducts;
  $("sort").onchange = function () {
    if ($("sort").value === "asc")
      products.sort(function (a, b) {
        return a.price - b.price;
      });
    if ($("sort").value === "desc")
      products.sort(function (a, b) {
        return b.price - a.price;
      });
    drawProducts();
  };
  drawProducts();
}

// ===== ĐĂNG NHẬP =====
if ($("loginForm")) {
  $("loginForm").onsubmit = function (event) {
    event.preventDefault();
    var email = $("loginEmail").value;
    var password = $("loginPassword").value;
    if (!email.includes("@") || password.length < 6) {
      $("loginMsg").textContent = "Đăng nhập không thành công.";
      $("loginMsg").className = "error";
      return;
    }
    localStorage.setItem("nhipUser", JSON.stringify({ email: email }));
    $("loginMsg").textContent = "Đăng nhập thành công!";
    $("loginMsg").className = "success";
  };
}

// ===== CHI TIẾT SẢN PHẨM =====
if ($("detail")) {
  var productId = Number(new URLSearchParams(location.search).get("id")) || 1;
  var detailProduct = products[productId - 1] || products[0];
  var sizeOptions =
    detailProduct.cat === "Giày" ? ["39", "40", "41", "42", "43", "44"] : ["S", "M", "L"];
  var size = sizeOptions[0];
  var quantity = 1;
  $("detail").innerHTML =
    '<div class="d-img" style="background-color:' +
    detailProduct.color +
    '">' +
    (detailProduct.image
      ? '<img src="' +
        detailProduct.image +
        '" alt="' +
        detailProduct.name +
        '">'
      : detailProduct.cat) +
    "</div>" +
    '<div class="d-info"><small>' +
    detailProduct.cat +
    (detailProduct.gender ? " · " + detailProduct.gender : "") +
    "</small><h1>" +
    detailProduct.name +
    "</h1>" +
    '<p class="price big">' +
    formatPrice(detailProduct.price) +
    "</p><p>" +
    detailProduct.desc +
    "</p>" +
    '<h4>Chọn size</h4><div class="sizes" id="sizes">' +
    sizeOptions
      .map(function (option, index) {
        return '<button class="' + (index === 0 ? "on" : "") + '">' + option + "</button>";
      })
      .join("") +
    "</div>" +
    '<h4>Số lượng</h4><div class="qty"><button id="minus">−</button><span id="quantity">1</span><button id="plus">+</button></div>' +
    '<button class="btn full" id="addButton">Thêm vào giỏ</button><p id="addMsg"></p></div>';
  $("minus").onclick = function () {
    quantity = Math.max(1, quantity - 1);
    $("quantity").textContent = quantity;
  };
  $("plus").onclick = function () {
    quantity++;
    $("quantity").textContent = quantity;
  };
  $("sizes").onclick = function (event) {
    if (event.target.tagName === "BUTTON") {
      size = event.target.textContent.trim();
      var buttons = $("sizes").children;
      var i;
      for (i = 0; i < buttons.length; i++) buttons[i].classList.remove("on");
      event.target.classList.add("on");
    }
  };
  $("addButton").onclick = function () {
    addToCart(detailProduct.id, size, quantity);
    $("addMsg").textContent = "Đã thêm sản phẩm vào giỏ hàng.";
  };
  $("related").innerHTML = products
    .filter(function (product) {
      return (
        product.cat === detailProduct.cat && product.id !== detailProduct.id
      );
    })
    .slice(0, 4)
    .map(productCard)
    .join("");
}

// ===== TRANG GIỎ HÀNG =====
if ($("cartPage")) {
  function drawCart() {
    var html = "";
    var total = 0;
    var i;
    for (i = 0; i < cart.length; i++) {
      var item = cart[i];
      var product = products[item.id - 1];
      total += product.price * item.qty;
      html +=
        '<div class="item"><div><strong>' +
        product.name +
        "</strong><br><small>Size " +
        item.size +
        " · " +
        formatPrice(product.price) +
        "</small></div>" +
        '<button class="remove" data-delete="' +
        i +
        '">Xóa</button><div class="qty"><button data-minus="' +
        i +
        '">−</button><span>' +
        item.qty +
        '</span><button data-plus="' +
        i +
        '">+</button></div>' +
        "<div>" +
        formatPrice(product.price * item.qty) +
        "</div></div>";
    }
    $("cartPage").innerHTML =
      html || '<p class="empty">Giỏ hàng đang trống.</p>';
    $("cartTotal").textContent = formatPrice(total);
    updateCartCount();
  }
  $("cartPage").onclick = function (event) {
    var index;
    if (event.target.dataset.plus !== undefined)
      cart[event.target.dataset.plus].qty++;
    if (event.target.dataset.minus !== undefined) {
      index = event.target.dataset.minus;
      cart[index].qty--;
      if (cart[index].qty <= 0) cart.splice(index, 1);
    }
    if (event.target.dataset.delete !== undefined)
      cart.splice(event.target.dataset.delete, 1);
    saveCart();
    drawCart();
  };
  $("orderForm").onsubmit = function (event) {
    event.preventDefault();
    if (!cart.length) {
      alert("Giỏ hàng đang trống.");
      return;
    }
    alert("Đặt hàng thành công!");
    cart = [];
    saveCart();
    drawCart();
    event.target.reset();
  };
  drawCart();
}
