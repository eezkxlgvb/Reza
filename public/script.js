document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const btn = document.getElementById('loginBtn');
    const message = document.getElementById('message');

    // ===== انیمیشن ورود =====
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // اعتبارسنجی
        if (!username || !password) {
            message.textContent = '❌ لطفاً همه فیلدها را پر کن!';
            message.className = 'message';
            return;
        }

        // شروع بارگذاری
        message.textContent = '⏳ در حال ورود...';
        message.className = 'message loading';

        // ===== انیمیشن دکمه =====
        btn.classList.add('is-clicked');
        await wait(500);

        // ===== شبیه‌سازی ورود موفق =====
        btn.classList.remove('is-clicked');
        btn.classList.add('is-success');
        message.textContent = '✅ خوش آمدی! 🌊';
        message.className = 'message success';

        // ریست بعد از ۳ ثانیه
        setTimeout(() => {
            btn.classList.remove('is-success');
            message.textContent = '';
            message.className = 'message';
        }, 4000);
    });

    // ===== افکت حباب‌های متحرک با ماوس =====
    const blobs = document.querySelectorAll('.blob');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        blobs.forEach((blob, i) => {
            const speed = 1 + i * 0.3;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px) scale(1.05)`;
        });
    });

    // ===== دکمه‌های فراموشی و یادآوری =====
    document.querySelector('.forgot')?.addEventListener('click', (e) => {
        e.preventDefault();
        message.textContent = '🔑 لینک بازیابی رمز به ایمیلت ارسال شد.';
        message.className = 'message';
        setTimeout(() => {
            message.textContent = '';
            message.className = 'message';
        }, 4000);
    });

    // ===== تابع کمکی =====
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
