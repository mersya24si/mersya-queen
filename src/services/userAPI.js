import axios from 'axios';

const BASE_URL = "https://clpmbqkgrmpywancnesm.supabase.co/rest/v1/employee";

const API_KEY = "sb_publishable_ydbrJCmgLGKT7rH7C5-6gw_OyRk2Dxz"; 

const headers = {
    "apikey": API_KEY,
    "Authorization": `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
};

export const userAPI = {
    // Ambil semua data pegawai
    async fetchUsers() {
        const response = await axios.get(BASE_URL, { headers });
        return response.data;
    },
    
    // Tambah pegawai baru (digunakan saat Register)
    async createUser(data) {
        const response = await axios.post(BASE_URL, data, { headers });
        return response.data;
    },
    
    // Hapus pegawai
    async deleteUser(id) {
        const response = await axios.delete(`${BASE_URL}?id=eq.${id}`, { headers });
        return response.data;
    },
    
    // Verifikasi Login ke database employee
    async loginUser(email, password) {
        const response = await axios.get(`${BASE_URL}?email=eq.${email}&password=eq.${password}`, { headers });
        
        if (response.data && response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error("Email atau password salah!");
        }
    }
};