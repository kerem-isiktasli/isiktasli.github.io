document.addEventListener('DOMContentLoaded', function() {
    // Chart.js ile çizim yapılması
    var ctx = document.getElementById('bar').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C#', 'Solidworks', 'Fusion 360', 'Catia', 'Arduino', 'Circuit Maker', 'Altium Designer'],
            datasets: [{
                    label: 'Languages',
                    data: [80, 75, 70, 85, 80,  ],
                    backgroundColor: 'rgba(255, 99, 132, 1)', // Kırmızı tonu
                    borderColor: 'rgba(255, 99, 132, 1)', // Kırmızı çizgi rengi
                    borderWidth: 3, // Çizgi kalınlığı
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Nokta rengi
                    pointBorderColor: 'rgba(255, 99, 132, 1)', // Nokta çevresi rengi
                    pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)', // Fare üzerine gelindiğinde nokta rengi
                    pointHoverBorderColor: 'rgba(255, 99, 132, 1)', // Fare üzerine gelindiğinde nokta çevresi rengi
                    pointRadius: 2, // Nokta yarıçapı
                    pointHoverRadius: 5, // Fare üzerine gelindiğinde nokta yarıçapı
                    pointHitRadius: 10, // Noktaya tıklama alanı yarıçapı
                    pointStyle: 'circle' // Nokta stilini daire yapma
                },
                {
                    label: '3D Design',
                    data: [, , , , , 65, 90, 90, 80, , , ],
                    backgroundColor: 'rgba(54, 162, 235, 1)', // Mavi tonu
                    borderColor: 'rgba(54, 162, 235, 1)', // Mavi çizgi rengi
                    borderWidth: 3, // Çizgi kalınlığı
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)', // Nokta rengi
                    pointBorderColor: 'rgba(54, 162, 235, 1)', // Nokta çevresi rengi
                    pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)', // Fare üzerine gelindiğinde nokta rengi
                    pointHoverBorderColor: 'rgba(54, 162, 235, 1)', // Fare üzerine gelindiğinde nokta çevresi rengi
                    pointRadius: 2, // Nokta yarıçapı
                    pointHoverRadius: 5, // Fare üzerine gelindiğinde nokta yarıçapı
                    pointHitRadius: 10, // Noktaya tıklama alanı yarıçapı
                    pointStyle: 'circle' // Nokta stilini daire yapma
                },
                {
                    label: 'Electronics',
                    data: [, , , , ,, , , , 85, 75, 70 ],
                    backgroundColor: 'rgba(255, 206, 86, 1)', // Sarı tonu
                    borderColor: 'rgba(255, 206, 86, 1)', // Sarı çizgi rengi
                    borderWidth: 3, // Çizgi kalınlığı
                    pointBackgroundColor: 'rgba(255, 206, 86, 1)', // Nokta rengi
                    pointBorderColor: 'rgba(255, 206, 86, 1)', // Nokta çevresi rengi
                    pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)', // Fare üzerine gelindiğinde nokta rengi
                    pointHoverBorderColor: 'rgba(255, 206, 86, 1)', // Fare üzerine gelindiğinde nokta çevresi rengi
                    pointRadius: 2, // Nokta yarıçapı
                    pointHoverRadius: 5, // Fare üzerine gelindiğinde nokta yarıçapı
                    pointHitRadius: 10, // Noktaya tıklama alanı yarıçapı
                    pointStyle: 'circle' // Nokta stilini daire yapma
                },
              
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Y ekseninin maksimum değeri
                    ticks: {
                        stepSize: 1, // Y eksenindeki adımların büyüklüğü
                        callback: function(value) {
                            return value + '%'; // Y eksenindeki değerlerin sonuna yüzde işareti ekleme
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14 // Efsane metin boyutu
                        }
                    }
                }
            },
            elements: {
                line: {
                    fill: true // Çizginin altını doldurma (arka plan rengiyle)
                }
            },
            hover: {
                mode: 'nearest', // En yakın noktayı seçme
                intersect: false // Etkileşimli olmayan yönünde ayarlama
            },
            interaction: {
                mode: 'index', // İndexe göre etkileşim modu
                intersect: false // Etkileşimli olmayan yönünde ayarlama
            },
            animation: {
                duration: 1000, // Animasyon süresi
                easing: 'easeInOutQuart' // Animasyon türü
            }
        }
    });
});