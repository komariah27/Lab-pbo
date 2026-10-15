// Kelas sederhana: Mahasiswa
class Mahasiswa {
  constructor(nama, nim, mahasiswa) {
    this.name = nama;
    this,nim = nim;
    this.jurusan = jurusan;
    this nilai = [] ;

  }

tambahNilai(nilai) {
  this.nilai.push(nilai) ;
  }

rataNilai() {
  if (this.nilai.length === 0) return 0;
  cost total = this.nilai.reduce(a,b) => a + b,0);
  return total / this.nilai.lenght;
  }

info() {
  return '${this.nama} (${ths.nama}) - ${this.jurusan}' ;
  }

}

cost mhs1 = new Mahasiswa('Andi', '2023001', 'Informatika');
mhs1.tambahNilai(85);
mhsl.tambahNilai(90);
consule.log(mhs1.info());
consule.log('Rata-rata:', mhs1.rataNilai().toFixed(2));
