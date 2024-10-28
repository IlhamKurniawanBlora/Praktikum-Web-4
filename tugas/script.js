function submitData() {
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const result = document.getElementById('result');

    // Simple validation
    let isValid = true;
    
    if (!nama) {
        document.getElementById('namaError').innerText = 'Nama harus diisi';
        isValid = false;
    } else {
        document.getElementById('namaError').innerText = '';
    }

    if (!umur || Number.isNaN(umur)) {
        document.getElementById('umurError').innerText = 'Umur harus diisi dengan angka';
        isValid = false;
    } else {
        document.getElementById('umurError').innerText = '';
    }

    if (isValid) {
        result.innerHTML = `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Umur:</strong> ${umur} tahun</p>
        `;
    }
}

function updateRectangle() {
    const lebar = document.getElementById('lebar').value || 100;
    const tinggi = document.getElementById('tinggi').value || 100;
    const lebarHasil = document.getElementById('lebarHasil');
    const tinggiHasil = document.getElementById('tinggiHasil');
    const rectangle = document.getElementById('rectangle');
    
    rectangle.style.width = `${lebar}px`;
    rectangle.style.height = `${tinggi}px`;
    rectangle.innerText = `${lebar * tinggi} px²`;
    lebarHasil.innerText = `${lebar} px`;
    tinggiHasil.innerText = `${tinggi} px`;
}