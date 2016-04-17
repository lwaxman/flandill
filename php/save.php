<?php 

	$data = $_POST['data'];
	$file = 'creatures.json';
	file_put_contents($file, $data);

	// $infoData = $_POST['info'];
	// $infoFile = 'info.json';
	// file_put_contents($infoFile, $infoData);

	// $deebsData = $_POST['deebs'];
	// $deebsFile = 'deebs.json';
	// file_put_contents($deebsFile, $deebsData);
?>
