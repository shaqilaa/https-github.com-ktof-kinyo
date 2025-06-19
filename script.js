document.addEventListener('DOMContentLoaded', () => {
    const answerBoxes = document.querySelectorAll('.answer-box');
    const selectionMessage = document.getElementById('selectionMessage');
    const continueButton = document.getElementById('continueButton');

    let isAnswerSelected = false; // Untuk melacak apakah jawaban sudah dipilih

    answerBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Hapus kelas 'selected' dari semua kotak terlebih dahulu
            answerBoxes.forEach(b => b.classList.remove('selected'));

            // Tambahkan kelas 'selected' ke kotak yang diklik
            box.classList.add('selected');

            // Dapatkan nilai mood dari atribut data
            const mood = box.dataset.mood;

            // Tampilkan pesan sesuai mood
            let message = '';
            switch (mood) {
                case 'good':
                    message = 'yeyy happy for it';
                    break;
                case 'super-good':
                    message = 'oh my godd u must be so happy, keep that spirit';
                    break;
                case 'bad':
                    message = 'oh no sorry for it, hope it better for tomorrow';
                    break;
                case 'so-bad':
                    message = 'oh no! u can tell me what is wrong if u want, sending my virtual hug';
                    break;
                default:
                    message = 'Terima kasih sudah berbagi!'; // Pesan default, meskipun seharusnya tidak terjangkau
            }
            selectionMessage.textContent = message;

            // Tandai bahwa jawaban sudah dipilih dan tampilkan tombol
            isAnswerSelected = true;
            continueButton.style.display = 'block'; // Tampilkan tombol
        });
    });

    // Event listener untuk tombol "Next"
    continueButton.addEventListener('click', () => {
        if (isAnswerSelected) {
            // Arahkan ke halaman greeting.html
            window.location.href = 'greeting.html';
        } else {
            // Ini seharusnya tidak terjadi karena tombol hanya muncul setelah dipilih
            alert('Pilih bagaimana harimu terlebih dahulu!');
        }
    });
});