<?php 

	$data = $_POST['data'];
	$file = 'creatures.json';
	file_put_contents($file, $data);

	$dataArchive = $_POST['dates'];
	$fileArchive = 'archive.json';
	file_put_contents($fileArchive, $dataArchive);

?>
