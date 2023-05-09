const menu = [
  {
    id: 1,
    kategori: "makanan",
    nama: "Japlak Paket 1",
    Harga: 16000,
    gambar: "japlak-1",
  },
  {
    id: 2,
    kategori: "makanan",
    nama: "Japlak Paket 2",
    Harga: 18000,
    gambar: "japlak-2",
  },
  {
    id: 3,
    kategori: "makanan",
    nama: "Japlak Paket 3",
    Harga: 20000,
    gambar: "japlak-3",
  },
  {
    id: 4,
    kategori: "makanan",
    nama: "Japlak Paket 4",
    Harga: 22000,
    gambar: "japlak-4",
  },
  {
    id: 5,
    kategori: "makanan",
    nama: "Japlak Paket 5",
    Harga: 24000,
    gambar: "japlak-5",
  },
  {
    id: 6,
    kategori: "makanan",
    nama: "Japlak Paket 6",
    Harga: 26000,
    gambar: "japlak-6",
  },
  {
    id: 7,
    kategori: "makanan",
    nama: "Japlak Paket 7",
    Harga: 28000,
    gambar: "japlak-7",
  },
  {
    id: 8,
    kategori: "makanan",
    nama: "Japlak Paket 8",
    Harga: 30000,
    gambar: "japlak-8",
  },
  {
    id: 9,
    kategori: "minuman",
    nama: "Jus Mangga",
    Harga: 10000,
    gambar: "mangga",
  },
  {
    id: 10,
    kategori: "minuman",
    nama: "Jus Alpukat",
    Harga: 10000,
    gambar: "alpukat",
  },
  {
    id: 11,
    kategori: "minuman",
    nama: "Jus Jeruk",
    Harga: 10000,
    gambar: "jeruk",
  },
  {
    id: 12,
    kategori: "minuman",
    nama: "Jus naga",
    Harga: 10000,
    gambar: "naga",
  },
  {
    id: 13,
    kategori: "minuman",
    nama: "Jus Stobery",
    Harga: 10000,
    gambar: "Stobery",
  },
  {
    id: 14,
    kategori: "minuman",
    nama: "Es Teh",
    Harga: 6000,
    gambar: "teh",
  },
];

const keranjangs = [];

function tampilData() {
  document.querySelector(".menu-data").innerHTML = "";
  for (let i = 0; i < menu.length; i++) {
    let tagMakanan = `
        <div class="menu-data-list">
            <div class="menu-gambar">
              <img src="assets/${menu[i].kategori}/${menu[i].gambar}.jpg" alt="">
            </div>
            <div class="menu-title">
              <h2>${menu[i].nama}</h2>
              <p>Rp. ${menu[i].Harga}</p>
              <button class="btn-tambah" onclick="tambahMenu(${i},'${menu[i].kategori}','${menu[i].nama}',${menu[i].Harga},'${menu[i].gambar}')">Tambah Menu</button>
            </div>
          </div>
        `;
    document.querySelector(".menu-data").innerHTML += tagMakanan;
  }
}
tampilData();

function kategoriList(menus) {
  var selectValue = menus.value;
  if (selectValue === "all") {
    document.querySelector(".menu-data").innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
      let tagMakanan = `
        <div class="menu-data-list">
            <div class="menu-gambar">
              <img src="assets/${menu[i].kategori}/${menu[i].gambar}.jpg" alt="">
            </div>
            <div class="menu-title">
              <h2>${menu[i].nama}</h2>
              <p>Rp. ${menu[i].Harga}</p>
              <button class="btn-tambah" onclick="tambahMenu(${i},'${menu[i].kategori}','${menu[i].nama}',${menu[i].Harga},'${menu[i].gambar}')">Tambah Menu</button>
            </div>
          </div>
        `;
      document.querySelector(".menu-data").innerHTML += tagMakanan;
    }
  } else if (selectValue === "makanan") {
    document.querySelector(".menu-data").innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].kategori === "makanan") {
        let tagMakanan = `
        <div class="menu-data-list">
            <div class="menu-gambar">
              <img src="assets/${menu[i].kategori}/${menu[i].gambar}.jpg" alt="">
            </div>
            <div class="menu-title">
              <h2>${menu[i].nama}</h2>
              <p>Rp. ${menu[i].Harga}</p>
              <button class="btn-tambah" onclick="tambahMenu(${i},'${menu[i].kategori}','${menu[i].nama}',${menu[i].Harga},'${menu[i].gambar}')">Tambah Menu</button>
            </div>
          </div>
        `;
        document.querySelector(".menu-data").innerHTML += tagMakanan;
      }
    }
  } else if (selectValue === "minuman") {
    document.querySelector(".menu-data").innerHTML = "";
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].kategori === "minuman") {
        let tagMakanan = `
        <div class="menu-data-list">
            <div class="menu-gambar">
              <img src="assets/${menu[i].kategori}/${menu[i].gambar}.jpg" alt="">
            </div>
            <div class="menu-title">
              <h2>${menu[i].nama}</h2>
              <p>Rp. ${menu[i].Harga}</p>
              <button class="btn-tambah" onclick="tambahMenu(${i},'${menu[i].kategori}','${menu[i].nama}',${menu[i].Harga},'${menu[i].gambar}')">Tambah Menu</button>
            </div>
          </div>
        `;
        document.querySelector(".menu-data").innerHTML += tagMakanan;
      }
    }
  }
}

function search() {
  const searchItem = document.getElementById("searchItem").value.toUpperCase(),
    listItem = document.getElementById("list-item"),
    item = document.querySelectorAll(".menu-data-list"),
    name = listItem.getElementsByTagName("h2");

  for (let i = 0; i < name.length; i++) {
    let match = item[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML || match.innerText;

      if (textValue.toUpperCase().indexOf(searchItem) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  }
}

function tambahMenu(id, kategori, nama, harga, gambar) {
  let namaKategori = kategori,
    namaNama = nama,
    hargaNama = harga,
    gambarNama = gambar;

  if (namaKategori || namaNama || hargaNama || gambarNama) {
    let tambahKeranjang = {
      kategoriKeranjang: namaKategori,
      namaKeranjang: namaNama,
      hargaKeranjang: hargaNama,
      gambarKeranjang: gambarNama,
      jumlahKeranjang: 1,
      harga: hargaNama,
    };
    if (keranjangs.find((nama) => nama.namaKeranjang == namaNama)) {
      for (let i = 0; i < keranjangs.length; i++) {
        if (keranjangs[i].namaKeranjang == namaNama) {
          keranjangs[i].jumlahKeranjang += 1;

          let infoHarga =
            keranjangs[i].jumlahKeranjang * keranjangs[i].hargaKeranjang;
          keranjangs[i].harga = infoHarga;
          tampilkanKeranjang();
          totalBayar();
        }
      }
    } else {
      keranjangs.push(tambahKeranjang);
      tampilkanKeranjang();
      totalBayar();
    }
  }
}

function totalBayar() {
  let totalHarusBayar = 0;
  for (let i = 0; i < keranjangs.length; i++) {
    totalHarusBayar += keranjangs[i].harga;

    document.querySelector(".bayar").innerHTML = "Rp." + totalHarusBayar;
  }
}


function tampilkanKeranjang() {
  document.querySelectorAll(".kernjang-data").forEach((data) => data.remove());
  keranjangs.forEach((val, i) => {
    let tagKeranjang = `
        <div class="kernjang-data">
              <div class="keranjang-hapus" onclick="btnHapus(${i})">
                <i class='bx bx-trash'></i>
              </div>
              <div class="keranjang-gambar">
                <img src="assets/${val.kategoriKeranjang}/${val.gambarKeranjang}.jpg" alt="">
              </div>
              <div class="keranjang-title">
                <h3>${val.kategoriKeranjang}</h3>
                <p>${val.namaKeranjang}</p>
              </div>
              <div class="keranjang-harga">
                <p>Rp. ${val.hargaKeranjang}</p>
              </div>
              <div class="keranjang-jumlah">
                ${val.jumlahKeranjang}
              </div>
            </div>
        `;

    document.querySelector(".keranjang-list").innerHTML += tagKeranjang;
  });
}

function btnHapus(id) {
  keranjangs.splice(id, 1);
  tampilkanKeranjang();
  totalBayar();
  if(keranjangs.length === 0){
    document.querySelector(".bayar").innerHTML = "Rp. 0"
  }
}
