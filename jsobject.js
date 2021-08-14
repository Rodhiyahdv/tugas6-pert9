// Soal No.1
// Buat sebuah object hewan dengan atribut ciri-ciri dan method keahlian
// Jawaban

let hewan = {
    nama : 'Merpati',
    kaki : 2,
    warna : ['Abu-abu','Putih'],
    spesies : 'Unggas',
    makanan : ['Pelet','Jagung'],
    keahlian : () => {
        return "Terbang";
    },
};

console.log('Nama : '+hewan.nama);
console.log('Kaki : '+hewan.kaki);
console.log('Warna : '+hewan.warna);
console.log('Spesies : '+hewan.spesies);
console.log('Makanan : '+hewan.makanan);
console.log('Keahlian : '+hewan.keahlian());

// Soal No. 2
// Tampilkanlah seperti ini
// Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis 
// Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis
// Jawaban

const data = [
    {
        name: 'Alpha',
        class: 'Dragon',
        club: ['Bola', 'Bulutangkis']
    },
    {
        name: 'Beta',
        class: 'Lizard',
        club: ['Membaca', 'Bulutangkis']
    }
];

for (let n = 0; n < data.length; n++) {
    console.log (`${data[n].name} ada di kelas ${data[n].class}, dia mengikuti club ${data[n].club}`);
}


// Soal No.3
// let todos = [
//     {id: 1, todo: "belajar coding"},
//     {id: 2, todo: "nanti tidur"}
//   ]
// Buatlah Function CRUD sederhana pada data diatas
// Jawaban

let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
  ]

let printAll = () => {
    for (let n = 0; n < todos.length; n++) {
        console.log (todos[n]);
    }
}
printAll();

let printById = (id) => {
    console.log(todos[id-1]);
}
printById(1);

let add = (newTodo) => {
    todos.push({
        id: todos.length + 1,
        todo: newTodo
    });
    for (let n = 0; n < todos.length; n++) {
        console.log (todos[n]);
    }
}
add('ngerjain tugas');

let deleteById = (id) => {
    todos.splice(id-1,1);
    for (let n = 0; n < todos.length; n++) {
        console.log (todos[n]);
    }
}
deleteById(2);

let updateById = (newTodo) => {
    todos[0].todo = newTodo;
    for (let m = 0; m < todos.length; m++) {
        console.log (todos[m]);
    }
}
updateById('belajar CRUD');

// Soal No.4
// Buatlah tampilan buah menggunakan array of object
// Data yang perlu ditampilkan
// Nama, warna, nama latin, tipe biji, gambar buah

// Jawaban

let fruits = [
    {
        name: 'Alpukat',
        color: 'Hijau',
        latin: 'Persea Americana',
        seed: 'Double seed',
        image: './img/alpukat.jpg'
    },
    {
        name: 'Bengkuang',
        color: 'Putih',
        latin: 'Pachyrizus erosus',
        seed: 'Double seed',
        image: './img/bengkuang.jpeg'
    },
    {
        name: 'Ceri',
        color: 'Merah',
        latin: 'Prunus subg. cerasus',
        seed: 'Double seed',
        image: './img/ceri.jpg'
    },
    {
        name: 'Duku',
        color: 'Putih',
        latin: 'Lansium domesticum',
        seed: 'Double seed',
        image: './img/duku.jpg'
    },
    {
        name: 'Jambu air',
        color: 'Hijau',
        latin: 'Syzygium aqueum',
        seed: 'Double seed',
        image: './img/jambu-air.jpg'
    },
    {
        name: 'Kedondong',
        color: 'Hijau',
        latin: 'Spandias dulcis',
        seed: 'Single seed',
        image: './img/kedondong.jpg'
    },
    {
        name: 'Naga',
        color: 'Putih',
        latin: 'Hylocereus undatus',
        seed: 'Double seed',
        image: './img/buah-naga.jpg'
    },
    {
        name: 'Nangka',
        color: 'Kuning',
        latin: 'Artocarpus heterophyllus',
        seed: 'Double seed',
        image: './img/nangka.jpg'
    },
    {
        name: 'Semangka',
        color: 'Merah',
        latin: 'Citrullus lanatus',
        seed: 'Double seed',
        image: './img/semangka.jpg'
    }
];

document.write (`<header>Buah-buah</header><br>`);
document.write (`<div class="container">`);

for (let n = 0; n < fruits.length; n++) {
    document.write (`
        <div class="items">
                <img src="${fruits[n].image}">                
                <p>Nama Buah : ${fruits[n].name}</p>
                <p>Warna Buah : ${fruits[n].color}</p>
                <p>Nama Latin : ${fruits[n].latin}</p>
                <p>Tipe Biji : ${fruits[n].seed}</p> 
        </div>
    `);
}

document.write (`</div>`);