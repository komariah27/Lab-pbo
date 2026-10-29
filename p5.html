<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi CRUD PBO - Pewarisan & Polimorfisme</title>
    <!-- Tailwind CSS untuk Styling Cepat -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-100 font-sans text-slate-800">

    <!-- Container Utama -->
    <div id="app" class="min-h-screen flex flex-col justify-between">
        
        <!-- Konten Dinamis Dimuat Disini -->
        <main class="flex-grow flex items-center justify-center p-4">
            <!-- Halaman akan dirender oleh JavaScript -->
        </main>

        <!-- Footer Info PBO -->
        <footer class="bg-white border-t py-3 text-center text-xs text-slate-500">
            Konsep PBO: <span class="font-semibold text-indigo-600">Pewarisan (Inheritance)</span> & <span class="font-semibold text-indigo-600">Polimorfisme (Polymorphism)</span> terimplementasi di JavaScript.
        </footer>
    </div>

    <!-- SKrip Logika PBO & CRUD -->
    <script>
        /* ==========================================================
           1. KONSEP PBO: PEWARISAN (INHERITANCE) & POLIMORFISME (POLYMORPHISM)
           ================================================---------- */

        // Parent Class (Kelas Induk)
        class UserAccount {
            constructor(id, username, email, role = 'User') {
                this.id = id;
                this.username = username;
                this.email = email;
                this.role = role;
            }

            // Method umum yang akan di-override (Polimorfisme)
            getDashboardInfo() {
                return `Akun standar dengan hak akses dasar.`;
            }

            getBadgeColor() {
                return 'bg-gray-100 text-gray-800';
            }
        }

        // Child Class 1 (Pewarisan dari UserAccount)
        class Administrator extends UserAccount {
            constructor(id, username, email) {
                super(id, username, email, 'Admin');
            }

            // Override Method (Polimorfisme)
            getDashboardInfo() {
                return `Memiliki hak akses penuh untuk mengelola seluruh data pengguna (CRUD).`;
            }

            getBadgeColor() {
                return 'bg-purple-100 text-purple-800';
            }
        }

        // Child Class 2 (Pewarisan dari UserAccount)
        class RegularUser extends UserAccount {
            constructor(id, username, email) {
                super(id, username, email, 'Regular');
            }

            // Override Method (Polimorfisme)
            getDashboardInfo() {
                return `Hanya dapat melihat dan memperbarui profil pribadi.`;
            }

            getBadgeColor() {
                return 'bg-blue-100 text-blue-800';
            }
        }

        /* ==========================================================
           2. MANAJEMEN DATABASE LOCALSTORAGE & INISIALISASI DATA
           ================================================---------- */
        const STORAGE_KEY = 'PBO_CRUD_USERS';
        const SESSION_KEY = 'PBO_ACTIVE_USER';

        function getStoredUsers() {
            const data = localStorage.getItem(STORAGE_KEY);
            if (!data) {
                // Dataset awal jika localStorage kosong
                const initial = [
                    new Administrator(1, 'Super Admin', 'admin@mail.com'),
                    new RegularUser(2, 'Budi Santoso', 'budi@mail.com'),
                    new RegularUser(3, 'Siti Rahma', 'siti@mail.com')
                ];
                saveStoredUsers(initial);
                return initial;
            }
            // Parse plain object kembali ke instance kelas yang sesuai (Factory Pattern sederhana)
            return JSON.parse(data).map(item => {
                if (item.role === 'Admin') return new Administrator(item.id, item.username, item.email);
                return new RegularUser(item.id, item.username, item.email);
            });
        }

        function saveStoredUsers(users) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
        }

        function getActiveUser() {
            const data = localStorage.getItem(SESSION_KEY);
            if (!data) return null;
            const item = JSON.parse(data);
            // Instansiasi ulang sesuai role untuk memastikan polimorfisme berjalan
            if (item.role === 'Admin') return new Administrator(item.id, item.username, item.email);
            return new RegularUser(item.id, item.username, item.email);
        }

        function setActiveUser(user) {
            if (user) {
                localStorage.setItem(SESSION_KEY, JSON.stringify(user));
            } else {
                localStorage.removeItem(SESSION_KEY);
            }
        }

        /* ==========================================================
           3. SISTEM ROUTING / NAVIGASI HALAMAN
           ================================================---------- */
        function navigateTo(page, param = null) {
            const mainEl = document.querySelector('main');
            mainEl.innerHTML = '';

            const currentUser = getActiveUser();

            // Proteksi Halaman
            if ((page === 'users' || page === 'profile') && !currentUser) {
                navigateTo('login');
                return;
            }

            if (page === 'login') {
                mainEl.innerHTML = renderLoginPage();
                initLoginLogic();
            } else if (page === 'users') {
                mainEl.innerHTML = renderUsersPage(currentUser);
                initUsersLogic();
            } else if (page === 'profile') {
                mainEl.innerHTML = renderProfilePage(currentUser, param);
                initProfileLogic(param);
            }
        }

        /* ==========================================================
           4. TEMPLATE HALAMAN (UI)
           ================================================---------- */

        // --- HALAMAN LOGIN ---
        function renderLoginPage() {
            return `
                <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-slate-200">
                    <div class="text-center mb-6">
                        <h1 class="text-2xl font-bold text-slate-800">Login Sistem PBO</h1>
                        <p class="text-sm text-slate-500 mt-1">Pilih akun demo atau buat user baru</p>
                    </div>
                    <form id="loginForm" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Pilih Akun Terdaftar</label>
                            <select id="loginSelect" class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                                <option value="">-- Pilih Akun --</option>
                            </select>
                        </div>
                        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition text-sm">
                            Masuk ke Aplikasi
                        </button>
                    </form>
                    <div class="mt-6 pt-4 border-t text-center">
                        <p class="text-xs text-slate-500 mb-2">Belum ada akun atau ingin tambah data?</p>
                        <button onclick="navigateTo('profile', 'new')" class="text-indigo-600 hover:underline text-sm font-medium">
                            + Tambah User Baru (Register)
                        </button>
                    </div>
                </div>
            `;
        }

        function initLoginLogic() {
            const select = document.getElementById('loginSelect');
            const users = getStoredUsers();
            
            users.forEach(u => {
                const opt = document.createElement('option');
                opt.value = u.id;
                opt.textContent = `${u.username} (${u.role})`;
                select.appendChild(opt);
            });

            document.getElementById('loginForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const selectedId = select.value;
                if (!selectedId) {
                    alert('Silakan pilih salah satu akun terlebih dahulu!');
                    return;
                }
                const found = users.find(u => u.id == selectedId);
                setActiveUser(found);
                navigateTo('users');
            });
        }

        // --- HALAMAN TABEL DAFTAR USER (CRUD) ---
        function renderUsersPage(currentUser) {
            return `
                <div class="w-full max-w-5xl bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden my-6">
                    <!-- Header Bar -->
                    <div class="bg-slate-50 px-6 py-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 class="text-xl font-bold text-slate-800">Daftar Pengguna (CRUD)</h1>
                            <p class="text-xs text-slate-500 mt-0.5">Login sebagai: <span class="font-semibold text-indigo-600">${currentUser.username} (${currentUser.role})</span></p>
                        </div>
                        <div class="flex items-center gap-3">
                            <button onclick="navigateTo('profile', ${currentUser.id})" class="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium px-3 py-2 rounded-lg transition">
                                Profil Saya
                            </button>
                            <button onclick="logout()" class="bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-medium px-3 py-2 rounded-lg transition">
                                Logout
                            </button>
                        </div>
                    </div>

                    <!-- Polimorfisme Info Banner -->
                    <div class="bg-indigo-50 border-b border-indigo-100 px-6 py-3 text-xs text-indigo-900 flex items-center justify-between">
                        <div>
                            <span class="font-bold">Info Polimorfisme:</span> 
                            <span id="polymorphismInfo">Memuat info...</span>
                        </div>
                        ${currentUser.role === 'Admin' ? `
                            <button onclick="navigateTo('profile', 'new')" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md font-medium transition">
                                + Tambah User
                            </button>
                        ` : ''}
                    </div>

                    <!-- Tabel Data -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr class="bg-slate-100 text-slate-600 uppercase text-xs tracking-wider">
                                    <th class="py-3 px-6">ID</th>
                                    <th class="py-3 px-6">Username</th>
                                    <th class="py-3 px-6">Email</th>
                                    <th class="py-3 px-6">Role (Pewarisan)</th>
                                    <th class="py-3 px-6 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody id="userTableBody" class="divide-y divide-slate-200">
                                <!-- Data dimasukkan via JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        function initUsersLogic() {
            const currentUser = getActiveUser();
            
            // Pemanfaatan Polimorfisme: Memanggil method yang sama (getDashboardInfo) 
            // tapi menghasilkan output berbeda tergantung objek instancenya (Admin/RegularUser).
            document.getElementById('polymorphismInfo').textContent = currentUser.getDashboardInfo();

            const users = getStoredUsers();
            const tbody = document.getElementById('userTableBody');
            tbody.innerHTML = '';

            users.forEach(u => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-50 transition';
                
                // Cek apakah user saat ini punya hak akses edit (Admin atau akun sendiri)
                const canModify = (currentUser.role === 'Admin' || currentUser.id === u.id);

                tr.innerHTML = `
                    <td class="py-3 px-6 text-slate-500">${u.id}</td>
                    <td class="py-3 px-6 font-medium text-slate-800">${u.username}</td>
                    <td class="py-3 px-6 text-slate-600">${u.email}</td>
                    <td class="py-3 px-6">
                        <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${u.getBadgeColor()}">
                            ${u.role}
                        </span>
                    </td>
                    <td class="py-3 px-6 text-center">
                        <div class="flex items-center justify-center gap-2">
                            <button onclick="navigateTo('profile', ${u.id})" class="text-indigo-600 hover:text-indigo-800 text-xs font-medium bg-indigo-50 px-2.5 py-1 rounded">
                                ${canModify ? 'Edit' : 'Detail'}
                            </button>
                            ${currentUser.role === 'Admin' ? `
                                <button onclick="deleteUser(${u.id})" class="text-rose-600 hover:text-rose-800 text-xs font-medium bg-rose-50 px-2.5 py-1 rounded">
                                    Hapus
                                </button>
                            ` : ''}
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }

        function deleteUser(id) {
            if (confirm('Apakah Anda yakin ingin menghapus user ini?')) {
                let users = getStoredUsers();
                users = users.filter(u => u.id !== id);
                saveStoredUsers(users);
                
                // Jika user yang sedang login yang dihapus, arahkan ke login
                const current = getActiveUser();
                if (current && current.id === id) {
                    setActiveUser(null);
                    navigateTo('login');
                } else {
                    navigateTo('users');
                }
            }
        }

        function logout() {
            setActiveUser(null);
            navigateTo('login');
        }

        // --- HALAMAN FORM PROFILE (CREATE / UPDATE) ---
        function renderProfilePage(currentUser, param) {
            const isNew = (param === 'new');
            let targetUser = null;

            if (!isNew) {
                const users = getStoredUsers();
                targetUser = users.find(u => u.id == param);
            }

            const title = isNew ? 'Tambah Pengguna Baru (Create)' : `Edit Profil: ${targetUser ? targetUser.username : ''}`;

            return `
                <div class="w-full max-w-md bg-white rounded-xl shadow-md border border-slate-200 p-8 my-6">
                    <div class="mb-6">
                        <h1 class="text-xl font-bold text-slate-800">${title}</h1>
                        <p class="text-xs text-slate-500 mt-1">Form operasi data berbasis PBO</p>
                    </div>

                    <form id="profileForm" class="space-y-4">
                        <input type="hidden" id="userId" value="${targetUser ? targetUser.id : ''}">
                        
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Username</label>
                            <input type="text" id="username" required value="${targetUser ? targetUser.username : ''}"
                                class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input type="email" id="email" required value="${targetUser ? targetUser.email : ''}"
                                class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-1">Role (Menentukan Kelas PBO)</label>
                            <select id="role" ${currentUser.role !== 'Admin' && !isNew ? 'disabled' : ''} 
                                class="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-50">
                                <option value="Regular" ${targetUser && targetUser.role === 'Regular' ? 'selected' : ''}>Regular User (RegularUser)</option>
                                <option value="Admin" ${targetUser && targetUser.role === 'Admin' ? 'selected' : ''}>Administrator (Administrator)</option>
                            </select>
                            <p class="text-[11px] text-slate-400 mt-1">Role menentukan subclass PBO yang diinstansiasi.</p>
                        </div>

                        <div class="flex items-center gap-3 pt-2">
                            <button type="submit" class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition text-sm">
                                Simpan Data
                            </button>
                            <button type="button" onclick="navigateTo('users')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg transition text-sm">
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            `;
        }

        function initProfileLogic(param) {
            document.getElementById('profileForm').addEventListener('submit', (e) => {
                e.preventDefault();
                const idVal = document.getElementById('userId').value;
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const role = document.getElementById('role').value;

                let users = getStoredUsers();

                if (!idVal || param === 'new') {
                    // CREATE: Buat ID baru
                    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
                    
                    // Implementasi Pembuatan Objek berdasarkan Pewarisan
                    let newUser;
                    if (role === 'Admin') {
                        newUser = new Administrator(newId, username, email);
                    } else {
                        newUser = new RegularUser(newId, username, email);
                    }
                    
                    users.push(newUser);
                } else {
                    // UPDATE: Timpa data objek berdasarkan ID
                    users = users.map(u => {
                        if (u.id == idVal) {
                            // Instansiasi ulang objek yang diperbarui
                            if (role === 'Admin') return new Administrator(Number(idVal), username, email);
                            return new RegularUser(Number(idVal), username, email);
                        }
                        return u;
                    });
                }

                saveStoredUsers(users);

                // Update session jika yang diedit adalah akun yang sedang aktif login
                const current = getActiveUser();
                if (current && !param === 'new' && current.id == idVal) {
                    const updatedCurrent = users.find(u => u.id == idVal);
                    setActiveUser(updatedCurrent);
                }

                alert('Data berhasil disimpan!');
                navigateTo('users');
            });
        }

        /* ==========================================================
           5. INISIALISASI PERTAMA KALI KETIKA APLIKASI DIBUKA
           ================================================---------- */
        window.addEventListener('DOMContentLoaded', () => {
            // Pastikan database localStorage siap
            getStoredUsers();
            
            // Cek apakah ada sesi login aktif
            const active = getActiveUser();
            if (active) {
                navigateTo('users');
            } else {
                navigateTo('login');
            }
        });
    </script>
</body>
</html>
