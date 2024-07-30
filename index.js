const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function main() {
  displayMenu();
}

function displayMenu() {
  console.clear();
  console.log(`
MENU PILIHAN
1. Input angka
2. Sorting
3. Searching
4. Selesai
`);

  readline.question('Masukkan pilihan [1/2/3/4] : ', (choice) => {
    switch (choice) {
      case '1':
        inputAngka();
        break;
      case '2':
        sorting();
        break;
      case '3':
        searching();
        break;
      case '4':
        console.clear();
        console.log('\nTerima kasih telah menggunakan program ini!\n');
        readline.close();
        break;
      default:
        console.log('\nPilihan tidak valid. Coba lagi.\n');
        displayMenu();
        break;
    }
  });
}

function inputAngka() {
  console.clear();
  readline.question('Masukkan jumlah nilai tugas : ', (n) => {
    const count = parseInt(n);
    numbers = [];
    let index = 1;

    function getNumber() {
      if (index <= count) {
        readline.question(`Angka ${index} : `, (num) => {
          numbers.push(parseInt(num));
          index++;
          getNumber();
        });
      } else {
        displayMenu();
      }
    }

    getNumber();
  });
}

function sorting() {
  console.clear();
  console.time('Sorting time');
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  console.timeEnd('Sorting time');

  const memoryUsage = process.memoryUsage();
  console.log(`\nMemory usage: RSS: ${memoryUsage.rss} bytes, Heap Total: ${memoryUsage.heapTotal} bytes, Heap Used: ${memoryUsage.heapUsed} bytes\n`);

  console.log(`Hasil sorting : ${sortedNumbers.join(', ')}\n`);
  readline.question('Tekan Enter untuk kembali ke menu', () => {
    displayMenu();
  });
}

function searching() {
  console.clear();
  readline.question('Masukkan angka yang dicari : ', (num) => {
    console.clear();
    console.time('Searching time');
    const searchNumber = parseInt(num);
    const found = numbers.includes(searchNumber);
    console.timeEnd('Searching time');

    const memoryUsage = process.memoryUsage();
    console.log(`\nMemory usage: RSS: ${memoryUsage.rss} bytes, Heap Total: ${memoryUsage.heapTotal} bytes, Heap Used: ${memoryUsage.heapUsed} bytes\n`);

    if (found) {
      console.log('\nAngka ditemukan\n');
    } else {
      console.log('\nAngka tidak ditemukan\n');
    }
    readline.question('Tekan Enter untuk kembali ke menu', () => {
      displayMenu();
    });
  });
}

main();
