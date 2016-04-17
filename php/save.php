<?php 

	$data = $_POST['data'];
	$file = 'creatures.json';
	file_put_contents($file, $data);

	$dataTest = $_POST['test'];
	$fileTest = 'creatures_test.json';
	file_put_contents($fileTest, $dataTest);

?>
