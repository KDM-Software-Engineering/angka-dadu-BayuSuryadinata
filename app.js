function main() {
    const hasilDadu = [1, 5, 2, 6, 2, 3]
    let kemunculanGanjil = 0
    let kemunculanGenap = 0
    for (let i = 0; i < 6; i++){
      if((hasilDadu[i] % 2) != 0){
          kemunculanGanjil += 1
      }else if((hasilDadu[i]%2) == 0){
          kemunculanGenap += 1
      }
    }
    console.log(`Raka mendapatkan angka ganjil sebanyaki ${kemunculanGanjil} kali dan angka genap sebanyak ${kemunculanGenap} kali`)
}
main()

module.exports = main