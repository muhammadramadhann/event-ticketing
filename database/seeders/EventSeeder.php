<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $events = [
            [
                'title' => 'Tantangan Menjadi Sofware Engineer',
                'slug' => 'tantangan-menjadi-software-engineer',
                'category' => 'Seminar',
                'price' => 25000,
                'poster' => 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                'organizer' => 'Programmer Zaman Now',
                'start_date' => '2022-08-19',
                'end_date' => '2022-08-19',
                'start_time' => '15:00:00',
                'end_time' => '17:30:00',
                'capacity' => 100,
                'city' => 'Jakarta',
                'address' => 'Jl. Budi Kemuliaan II No.1, Gambir, Kota Jakarta Pusat',
                'desc' => 'Bagaimana rasanya mempunyai tanggung jawab dalam menjaga inti berjalannya suatu website/perangkat lunak? Tentu saja bukan hal yang sepele! Tanggung jawab seorang Software Engineer tentu tidak ada yang enteng. Ambil contoh, saat teman-teman mengunjungi situs website/aplikasi, terkadang tampak berjalan seperti sihir. Tombol yang teman-teman klik akan membawamu ke berbagai kategori, misalnya, saat berada di website Programmer Zaman Now lalu mendaftar salah satu kelas, teman-teman akan mengisi form dengan informasi yang diberikan, dan akan berlanjut ke proses selanjutnya. Namun bagaimana hal itu terjadi? Proses tersebut mengacu pada pengembangan logika guna mendukung situs website/aplikasi berjalan dan hal ini biasanya merupakan tugas seorang Software Engineer. Lantas bagaimana jika kita ingin memulai karir sebagai Sofware Engineer profesional yang dibutuhkan oleh perusahaan-perusahaan terkemuka di masa perkembangan teknologi saat ini? Apa saja peran dan tanggung jawab seorang Software Engineer? Tools apa saja yang digunakan dan bagaimana kita dapat meraih pekerjaan impian tersebut sesuai kualifikasi dan kebutuhan perusahaan? Guna mendukung pemahaman teman-teman, Programmer Zaman Now hadir untuk membantu teman-teman dalam Seminar "Mulai Karir Sebagai Software Engineer". Ditunggu kehadiran teman-teman sekalian!!<br><br>Salam Programmer Zaman Now.',
            ],
            [
                'title' => ' Cannon Indonesia Workshop: Fotografi',
                'slug' => 'cannon-indonesia-workshop-fotografi',
                'category' => 'Workshop',
                'price' => 100000,
                'poster' => 'https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
                'organizer' => 'Canon Indonesia',
                'start_date' => '2022-09-04',
                'end_date' => '2022-09-04',
                'start_time' => '10:00:00',
                'end_time' => '16:00:00',
                'capacity' => 50,
                'city' => 'Bekasi',
                'address' => 'Sentra Summarecon Bekasi, Jl. Boulevard Ahmad Yani, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi',
                'desc' => 'Workshop Fotografi yang diselenggarakan spesial dari Cannon Indonesia memanggil pemuda-pemudi pecinta fotografi untuk mengembangkan bakatnya bersama kami. Pada workshop ini Anda akan mendapat berbagai pengalaman berharga mulai dari ilmu pengetahuan praktik hingga teori, dibawakan langsung oleh mentor dari Canon Indonesia. Anda akan melakukan kegiatan ini mulai pukul 10 pagi hingga 4 sore dengan 1 jam waktu istirahat. Kami tunggu kehadiran Anda pada workshop ini, kapasitas sangat terbatas jadi tunggu apalagi? yuk langsung daftar!',
            ],
            [
                'title' => 'Kembali Beraktivitas Setelah Masa Pandemi',
                'slug' => 'kembali-beraktivitas-setelah-masa-pandemi',
                'category' => 'Webinar',
                'price' => 0,
                'poster' => 'https://images.unsplash.com/photo-1568750655107-5f50598fc8a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                'organizer' => 'Kemendikbud',
                'start_date' => '2022-08-26',
                'end_date' => '2022-08-26',
                'start_time' => '14:00:00',
                'end_time' => '15:30:00',
                'capacity' => 5000,
                'city' => 'Online',
                'address' => 'Zoom Meeting: https://zoom.us/j/95067298275?pwd=dElpbXFmZGZmRlpiOTJFRmtwSDUzZz09',
                'desc' => 'Kami tunggu kehadiran Anda!',
            ],
            [
                'title' => 'Pelatihan Web Programming',
                'slug' => 'pelatihan-web-programming',
                'category' => 'Training',
                'price' => 300000,
                'poster' => 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
                'organizer' => 'Web Programming Unpas',
                'start_date' => '2022-10-07',
                'end_date' => '2022-10-07',
                'start_time' => '18:30:00',
                'end_time' => '22:00:00',
                'capacity' => 250,
                'city' => 'Online',
                'address' => 'Zoom Meeting: https://zoom.us/j/95067298275?pwd=dElpbXFmZGZmRlpiOTJFRmtwSDUzZz09',
                'desc' => 'Jangan lupa titik koma',
            ],
        ];

        Event::insert($events);
    }
}
