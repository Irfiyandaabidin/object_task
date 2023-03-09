const laptop = {
    merk: "Asus",
    warna: "Hitam",
    seri: "X55OI",
    hardisk: "1 Tb",
    ram: "8 GB"
}

const rumah = {
    pintu: 5,
    jumlahRuangan: 4,
    roda: false,
    jendela: 4,
    warna: "Hitam",
}

const kampus = {
    namaKampus: "Amikom Yogyakarta",
    jurusan: "Teknik Informatika",
    rektor: false,
    dosen: false,
    mahasiswa: true,
}

console.log("===== Property laptop =====");
console.log(laptop.hardisk);
console.log(laptop.merk);
console.log(laptop.ram);
console.log(laptop.seri);
console.log(laptop.warna);

console.log("===== Property rumah =====");
console.log(rumah.jendela);
console.log(rumah.jumlahRuangan);
console.log(rumah.pintu);
console.log(rumah.roda);
console.log(rumah.warna);

console.log("===== Property kampus =====");
console.log(kampus.dosen);
console.log(kampus.jurusan);
console.log(kampus.mahasiswa);
console.log(kampus.namaKampus);
console.log(kampus.rektor);
