new DataTable('#dataStok', {
            ajax: 'https://script.google.com/macros/s/AKfycbyOV7hmEV7X3jqILTkAux9K1y5y9wW_Xyw71SB1kZraGOa7kMojRzKSpkLH5EC_C7SHIA/exec',
            columns: [
                { data: 'NO BOX' },
                { data: 'MATERIAL' },
                { data: 'Jenis' },
                { data: 'Type Barang' },
                { data: 'Merek Barang' },
                { data: 'Ukuran' },
                { data: 'Jml Stok Awal' },
                { data: 'Sat1' },
                { data: 'Jml Stok Keluar' },
                { data: 'Sat2' },
                { data: 'Sisa stock' },
                { data: 'Sat3' },
                { data: 'Berat Barang / bh' },
                { data: 'Sat4' },
            ]
        });