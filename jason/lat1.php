<?php
$siswa = [
    [
    "nama" => "Rizki",
    "nisn" => "0024568",
    "kelas" => "X TKJ 1"
    ],
    [
        "nama" => "Rani",
        "nisn" => "0024589",
        "kelas" => "X TKJ 2"
    ],
];

// var_dump($siswa);

$data = json_encode($siswa);
echo $data;
?>