  <?php
	$S=$_REQUEST['S'];
echo "S=$S <br>";


	$X=$_REQUEST['X'];
echo "X=$X <br>";


	$T=$_REQUEST['T'];
echo "T=$ЦT <br>";

	$Rf=$_REQUEST['Rf'];
echo "Rf=$Rf <br>";

 	$sigma=$_REQUEST['sigma'];
echo "sigma=$sigma <br>";

	 $C=$_REQUEST['C'];
echo "C=$C <br>";

	$P=$_REQUEST['P'];
echo "P=$P <br>";

	$delta_C=$_REQUEST['delta_C'];
echo "delta_C=$delta_C <br>";

	$gamma=$_REQUEST['gamma'];
echo "gamma=$gamma <br>";

	$vega=$_REQUEST['vega'];
echo "vega=$vega <br>";

	$rho_C=$_REQUEST['rho_C'];
echo "rho_C=$rho_C <br>";

	$theta_C=$_REQUEST['theta_C'];
echo "theta_C=$theta_C <br>";

	$d1=$_REQUEST['d1'];
echo "d1=$d1 <br>";



$fp=fopen("BS.txt","a");
fputs($fp,"$S\t$X\t$T\t$Rf\t$sigma\t$C\t$P\t$delta_C\t$gamma\t$vega\t$rho_C\t$theta_C\t$d1\t");
fclose($fp);
?>
