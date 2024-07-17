document.addEventListener('DOMContentLoaded', function () {
        sortTable();
    });

    function searchTable() {
        var input, filter, table, tr, td, i, j, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        table = document.getElementById('dataTable');
        tr = table.getElementsByTagName('tr');

        for (i = 1; i < tr.length; i++) {
            tr[i].style.display = 'none';
            td = tr[i].getElementsByTagName('td');
            for (j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = '';
                        break;
                    }
                }
            }
        }
    }

    function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById('dataTable');
        switching = true;

        while (switching) {
            switching = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName('TD')[0];
                y = rows[i + 1].getElementsByTagName('TD')[0];

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    function redirectToForm() {
        window.location.href = "https://forms.gle/Hz4bTeAzoLxeqXWM7";
    }

    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        document.getElementById('clock').textContent = timeString;
    }

    // Panggil fungsi updateClock setiap detik
    setInterval(updateClock, 1000);

    // Fungsi untuk menampilkan popup saat menekan ikon di navbar
    document.querySelector('.navbar img').addEventListener('click', function () {
        var popup = document.createElement('dialog');
        popup.style.backgroundColor = '#455A64';
        popup.style.color = 'white';
        popup.style.padding = '20px';
        popup.innerHTML = '<h2>Tentang RPMP MCPE!</h2><p>Website ini dibuat untuk mendownload file marketplace mcpe secara GRATIS, hanya membutuhkan sedikit usaha saja untuk melewati link iklan. Kalian bisa REQUEST addon/texture pack dll.</p><p>DUKUNG Admin dengan cara tidak menggunakan adblocker saat mengunduh file.</p><p>DILARANG mengupload file (termasuk membagikan website ini) yang ada diwebsite ini ke Youtube atau manapun karena berpotensi copyright, jika admin melihat salah satu resource pack diupload ke YouTube maka link akan dimatikan.</p><p>Web masih dalam tahap pengembangan dan akan terus dikembangkan, silahkan laporkan bug jika ada.</p><button class="btn" onclick="closePopup()">Tutup</button>';
        document.body.appendChild(popup);
        popup.showModal();
    });

    // Fungsi untuk menutup popup
    function closePopup() {
        var popup = document.querySelector('dialog');
        popup.close();
        popup.remove();
    }
